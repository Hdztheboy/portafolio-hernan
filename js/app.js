/* app.js – navigation between pages, project/gallery rendering, video loading and contact form. */
(function () {
  "use strict";

  /* ---------- 1. CONFIGURATION ---------- */
  const CONFIG = {
    // Where messages are sent.
    email: "hernan.m.hernandez.g@gmail.com",

    // OPTIONAL – automatic delivery. A web page cannot send e-mail by itself.
    // To receive messages without the visitor pressing "Send" in their own mail:
    //   1) create a free form at https://formspree.io using the e-mail above,
    //   2) paste its address here, e.g. "https://formspree.io/f/abcdwxyz",
    //   3) host this file on a site that allows outside requests (GitHub Pages, Netlify…).
    // Leave it empty ("") to use the e-mail draft method.
    formEndpoint: ""
  };

  /* ---------- 2. SMALL HELPERS ---------- */
  const $  = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const esc = (text) => String(text).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- 3. TOOL LOGOS (shown inside each project) ----------
     Every tool points to an image stored in MEDIA.images under "tool-<key>".
     To add a tool: add its image to MEDIA.images and one line here.
     (MySQL is ready to use; it is not attached to any project yet.)           */
  const TOOLS = {
    figma:  { name: "Figma",                 image: "tool-figma" },
    pa:     { name: "Microsoft Power Apps",  image: "tool-pa" },
    html:   { name: "HTML5",                 image: "tool-html" },
    js:     { name: "JavaScript",            image: "tool-js" },
    node:   { name: "Node.js",               image: "tool-node" },
    gh:     { name: "GitHub",                image: "tool-gh" },
    next:   { name: "Next.js",               image: "tool-next" },
    ts:     { name: "TypeScript",            image: "tool-ts" },
    tw:     { name: "Tailwind CSS",          image: "tool-tw" },
    pr:     { name: "Prisma",                image: "tool-pr" },
    mysql:  { name: "MySQL",                 image: "tool-mysql" }
  };

  function toolLogo(tool) {
    return `<span class="lg"><img data-img="${esc(tool.image)}" alt="${esc(tool.name)} logo"></span>`;
  }

  /* ---------- 4. PAGE BUILDERS ---------- */
  const paragraphs = (list) => list.map((text) => `<p>${esc(text)}</p>`).join("");

  // Work grid: one card per entry in PROJECTS
  function renderWorkGrid() {
    $("#work-grid").innerHTML = Object.keys(PROJECTS).map((key) => {
      const p = PROJECTS[key];
      return `<a class="tile" href="#${key}">
        <div class="im"><img data-img="tile-${key}" alt="${esc(p.title)} logo"></div>
        <h3>${esc(p.title)}</h3><small>${esc(p.meta)}</small></a>`;
    }).join("");
  }

  // Project page: video, overview, role, features, tools, skills, links
  function renderCaseStudy(key, p) {
    const features = p.features.map((f) => `<li><b>${esc(f.name)}:</b> ${esc(f.description)}</li>`).join("");
    const tools = p.tools.map((t) => {
      const tool = TOOLS[t.tool];
      return `<li>${toolLogo(tool)}<div><b>${esc(tool.name)}</b><br>${esc(t.description)}</div></li>`;
    }).join("");
    const skills = p.skills.length
      ? `<h3>Skills applied</h3><ul class="sk">${p.skills.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>` : "";
    const links = p.links.map((l) =>
      `<a class="btn" target="_blank" rel="noopener" href="${esc(l.url)}">${esc(l.label)}</a>`).join(" ");

    return `
      <video controls preload="metadata" playsinline data-video="${esc(p.video)}">Your browser cannot play this video.</video>
      <h3>Overview</h3>${paragraphs(p.overview)}
      <h3>My role: ${esc(p.roleTitle)}</h3>${paragraphs(p.roleText)}
      <h3>Main features</h3><ul>${features}</ul>
      <h3>Tools &amp; technologies</h3><ul class="tools">${tools}</ul>
      ${skills}
      <h3>Links</h3><p>${links}</p>`;
  }

  // Gallery page (Certificates, Achievements, Excel): icon cards that open the full document
  function renderGallery(p) {
    const cards = p.items.map((item) => `
      <button type="button" class="gi" data-image="${esc(item.image)}">
        <img data-thumb="${esc(item.image)}" alt="${esc(item.title)}">
        <span><b>${esc(item.title)}</b><small>${esc(item.caption)}</small></span>
      </button>`).join("");
    return `<p class="intro">${esc(p.intro)}</p>
      <p class="hint">Select an item to see the full document.</p>
      <div class="gal">${cards}</div>`;
  }

  function renderProject(key) {
    const p = PROJECTS[key];
    return `<a class="back" href="#work">← Back to Work</a>
      <h2 class="ph">${esc(p.title)}</h2><p class="meta">${esc(p.meta)}</p>
      ${p.items ? renderGallery(p) : renderCaseStudy(key, p)}`;
  }

  /* ---------- 5. MEDIA (images and videos come from the MEDIA script) ---------- */
  function hydrateMedia(root) {
    $$("img[data-img]", root).forEach((img) => { img.src = MEDIA.images[img.dataset.img] || ""; });
    $$("img[data-thumb]", root).forEach((img) => { img.src = MEDIA.thumbs[img.dataset.thumb] || ""; });
    $$("video[data-video]", root).forEach((video) => {
      video.poster = MEDIA.images["poster-" + video.dataset.video] || "";
      video.src = MEDIA.videos[video.dataset.video] || "";
    });
  }

  /* ---------- 6. NAVIGATION (the page is chosen by the #hash in the address) ---------- */
  const STATIC_PAGES = ["home", "about", "work", "contact"];
  const projectBox = $("#project-content");

  function route() {
    let name = location.hash.slice(1) || "home";
    let page;
    if (PROJECTS[name])                   page = "project";
    else if (STATIC_PAGES.includes(name)) page = name;
    else { name = "home"; page = "home"; }

    projectBox.innerHTML = page === "project" ? renderProject(name) : "";   // empty = stops any video
    if (page === "project") hydrateMedia(projectBox);

    $$(".view").forEach((view) => { view.hidden = view.id !== "view-" + page; });
    const activeLink = page === "project" ? "work" : name;                   // projects live under "Work"
    $$("nav a").forEach((a) => {
      const on = a.getAttribute("href") === "#" + activeLink;
      a.classList.toggle("on", on);
      if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    document.title = (page === "project" ? PROJECTS[name].title + " – " : "") + "Hernán Hernández – Portfolio";
    window.scrollTo(0, 0);
  }

  /* ---------- 7. FULL-SIZE DOCUMENT VIEWER ---------- */
  const lightbox = $("#lightbox");
  projectBox.addEventListener("click", (event) => {
    const card = event.target.closest(".gi");
    if (!card) return;
    const image = $("img", lightbox);
    image.src = MEDIA.full[card.dataset.image];
    image.alt = $("img", card).alt;
    lightbox.showModal();
  });
  lightbox.addEventListener("click", (event) => { if (event.target.tagName !== "IMG") lightbox.close(); });

  /* ---------- 8. CONTACT FORM ---------- */
  const form = $("#contact-form");
  const status = $("#contact-status");

  // Opens a link (mailto: or Gmail) in the same way a normal click would.
  function openLink(url) {
    const a = document.createElement("a");
    a.href = url; a.target = "_blank"; a.rel = "noopener";
    document.body.appendChild(a); a.click(); a.remove();
  }

  function readForm() {
    const data = new FormData(form);
    return { name: String(data.get("name")).trim(), email: String(data.get("email")).trim(), message: String(data.get("message")).trim() };
  }

  function openDraft(via, m) {
    const subject = "Portfolio message from " + m.name;
    const body = m.message + "\n\n— " + m.name + " (" + m.email + ")";
    const url = via === "gmail"
      ? "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(CONFIG.email) + "&su=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body)
      : "mailto:" + CONFIG.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    openLink(url);
    status.textContent = "Your email draft is ready. Press Send in your email to deliver the message.";
  }

  async function deliver(via) {
    if (!form.reportValidity()) return;
    const m = readForm();
    if (!CONFIG.formEndpoint) return openDraft(via, m);       // draft method
    status.textContent = "Sending…";
    try {                                                     // automatic method (Formspree)
      const response = await fetch(CONFIG.formEndpoint, {
        method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(m)
      });
      if (!response.ok) throw new Error("HTTP " + response.status);
      form.reset();
      status.textContent = "Thank you! Your message was sent.";
    } catch (error) {
      openDraft("mail", m);                                   // fallback if the service fails
    }
  }

  $$("[data-via]", form).forEach((button) => button.addEventListener("click", () => deliver(button.dataset.via)));
  if (CONFIG.formEndpoint) {                                  // one button is enough with automatic delivery
    $("#send-mail").textContent = "Send message";
    $("#send-gmail").hidden = true;
  }
  const direct = $("#direct-email");
  direct.textContent = CONFIG.email;
  direct.href = "mailto:" + CONFIG.email;

  /* ---------- 9. START ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderWorkGrid();
    hydrateMedia(document);
    route();
    window.addEventListener("hashchange", route);
  });
})();
