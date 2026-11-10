/* content.js – ALL the texts of the Work section. Edit here to change a project, certificate or award.
   Order = order of the cards in Work: newest first (Certificates 2026, Excel 2026, Routify 2026, Achievements 2025, UniVan 2025, Vida 2024).
     title / meta ........ name and subtitle (also used by the Work card)
     video ............... name of the video in MEDIA.videos (projects only)
     overview ............ paragraphs describing the project
     roleTitle, roleText . my role
     features ............ list of {name, description}
     tools ............... list of {tool, description}; `tool` is a key of TOOLS in app.js
     skills, links ....... skills applied and external links
     intro, items ........ gallery pages: text + list of {image, title, caption}
*/
const PROJECTS = {
  "certificates": {
    "title": "Certificates",
    "meta": "2024 – 2026",
    "intro": "These certificates represent my commitment to continuous learning and personal growth through academic and extracurricular projects. By taking part in different activities and initiatives, I have had the opportunity to develop new skills, explore different areas of knowledge, and gain valuable experiences. My participation in academic, social, environmental, and personal development projects reflects my perseverance, leadership, and desire to keep improving, learning, and contributing positively to my community.",
    "items": [
      {
        "image": "cv",
        "title": "Canva course",
        "caption": "Platzi · Nov 8, 2026 · 7 hours"
      },
      {
        "image": "pm",
        "title": "Product Marketing course",
        "caption": "Platzi · Oct 25, 2026 · 13 hours"
      },
      {
        "image": "dg",
        "title": "Graphic Design Fundamentals course",
        "caption": "Platzi · Oct 24, 2026 · 20 hours"
      },
      {
        "image": "tl",
        "title": "English Conversation Club",
        "caption": "TELUS Digital · Oct 2026 · Certificate of participation"
      },
      {
        "image": "bi",
        "title": "Power BI Fundamentals",
        "caption": "¡Supérate! Hilasal · Sep 11, 2026 · 40-hour module"
      },
      {
        "image": "gr",
        "title": "G.R.E.A.T. program",
        "caption": "Police education program · Nov 4, 2024 · Certificate of success"
      },
      {
        "image": "ec",
        "title": "The Ecocycle Project",
        "caption": "Youth Ambassadors · Oct 27, 2024 · Co-leader"
      }
    ]
  },
  "excel": {
    "title": "Excel Certifications",
    "meta": "2026",
    "intro": "Through the Microsoft Office Specialist certifications in Excel Associate and Excel Expert, I developed and improved my skills in Microsoft Excel. Throughout this process, I learned to work with spreadsheets, organize and analyze data, use formulas and advanced functions, create charts, manage PivotTables, apply conditional formatting, and work with macros. These certifications helped me strengthen my ability to manage information, solve problems, and create well-organized spreadsheets for different purposes.",
    "items": [
      {
        "image": "xa",
        "title": "Excel Associate (Microsoft 365 Apps)",
        "caption": "Microsoft Office Specialist · Exam MO-210"
      },
      {
        "image": "xe",
        "title": "Excel Expert (Microsoft 365 Apps)",
        "caption": "Microsoft Office Specialist · Exam MO-211"
      }
    ]
  },
  "routify": {
    "title": "Routify",
    "meta": "Expo Tech Project · 2026",
    "video": "routify",
    "overview": [
      "Routify is a digital platform designed to improve the management and organization of public transportation companies in El Salvador.",
      "The project was created to solve common problems in transportation management, such as paperwork, inefficient data organization, route delays, and difficulties in monitoring vehicles. Routify provides companies with a smarter way to manage their daily operations through technology, helping them save time, improve organization, and make better decisions.",
      "Objective: to develop a digital platform that simplifies public transportation management by providing tools to monitor vehicles, organize routes, control fuel consumption, manage repairs, and generate reports."
    ],
    "roleTitle": "Frontend Developer & UI/UX Design",
    "roleText": [
      "My main role in this project was focused on frontend development and design. I worked on the website’s visual structure and user interface, using Figma to create and improve the designs. I also helped bring these designs to life through coding, using technologies such as Tailwind CSS, Next.js, and TypeScript.",
      "Although most of my work was focused on the frontend, I also had the opportunity to collaborate with the backend by adding functionality to certain pages. During the development process, we also worked with Node.js and Prisma, and used GitHub to store, organize, and manage the project’s code as a team."
    ],
    "features": [
      {
        "name": "Fleet Management",
        "description": "Monitor and manage buses."
      },
      {
        "name": "Route Management",
        "description": "Organize routes and daily operations."
      },
      {
        "name": "Fuel Management",
        "description": "Track vehicle fuel consumption."
      },
      {
        "name": "Maintenance",
        "description": "Manage vehicle repairs and maintenance."
      },
      {
        "name": "Reports",
        "description": "Generate reports for better decision-making."
      },
      {
        "name": "Digital Records",
        "description": "Centralize information and reduce paperwork."
      }
    ],
    "tools": [
      {
        "tool": "figma",
        "description": "Used to create and improve the interface designs."
      },
      {
        "tool": "next",
        "description": "Used to build a fast, dynamic, and responsive user interface."
      },
      {
        "tool": "ts",
        "description": "Used to improve code quality, maintainability, and type safety."
      },
      {
        "tool": "tw",
        "description": "Used to design and create consistent user interfaces."
      },
      {
        "tool": "node",
        "description": "Used to handle server-side operations and backend functionality."
      },
      {
        "tool": "pr",
        "description": "Used to manage database operations and organize data."
      },
      {
        "tool": "gh",
        "description": "Used for version control, code management, and team collaboration."
      }
    ],
    "skills": [
      "Frontend Development",
      "Backend Development",
      "Database Management",
      "User Interface Development (UI)",
      "Problem-solving through technology",
      "Teamwork and collaboration",
      "Business Model Development"
    ],
    "links": [
      {
        "label": "Code on GitHub",
        "url": "https://github.com/GabrielTrejo2008/EXPO-2026.git"
      }
    ]
  },
  "achievements": {
    "title": "Achievements",
    "meta": "2024 – 2025",
    "intro": "These recognitions are the result of my hard work, dedication, and consistency throughout my academic journey. Thanks to my academic performance and good grades, I have received several awards that reflect my commitment to learning, my sense of responsibility, and my determination to always give my best in every task I take on.",
    "items": [
      {
        "image": "to",
        "title": "Bronze TOEIC",
        "caption": "Digital Talent Project · ¡Supérate! Hilasal · Dec 5, 2025"
      },
      {
        "image": "p25",
        "title": "Outstanding Performance",
        "caption": "¡Supérate! Hilasal · First semester 2025"
      },
      {
        "image": "p24",
        "title": "Outstanding Performance",
        "caption": "¡Supérate! Hilasal · Second semester 2024"
      },
      {
        "image": "ac",
        "title": "Certificate of Achievement",
        "caption": "¡Supérate! Hilasal · First semester 2024"
      }
    ]
  },
  "univan": {
    "title": "UniVan",
    "meta": "Expo Project · 2025",
    "video": "univan",
    "overview": [
      "UniVan is a digital platform designed to make transportation easier for university students, especially those who need to travel home after classes.",
      "The project was created to address the difficulties many students face when using public transportation. It offers a shared transportation alternative that aims to be safe, comfortable, affordable, and reliable.",
      "Objective: to develop a digital platform that allows students to organize and book shared van rides, giving them access to different transportation options and creating a more connected university community."
    ],
    "roleTitle": "Frontend Developer & UI/UX Design",
    "roleText": [
      "My main contribution to this project was focused on frontend development and design. I worked on the website’s visual structure and user experience using Figma to create and improve the interface. I also helped build the frontend using HTML, JavaScript, and other web technologies to bring the designs to life.",
      "Although most of my work was focused on the frontend, I also had the opportunity to collaborate with the backend by adding functionality to certain pages. Finally, we used GitHub to store and manage the project’s code and work together as a team."
    ],
    "features": [
      {
        "name": "User Registration",
        "description": "Students can create accounts to access the platform."
      },
      {
        "name": "Dashboard",
        "description": "Users can check their total trips and upcoming reservations."
      },
      {
        "name": "Seat Booking",
        "description": "Students can view available vehicles, check occupied seats, and reserve their preferred seats."
      },
      {
        "name": "Route Information",
        "description": "Users can explore available routes through interactive maps."
      },
      {
        "name": "Transportation Options",
        "description": "Students can view driver names, fares, and available seats."
      },
      {
        "name": "User Profile",
        "description": "Users can update their personal information and profile pictures."
      },
      {
        "name": "Support Center",
        "description": "Students can send feedback and report problems with the platform."
      }
    ],
    "tools": [
      {
        "tool": "figma",
        "description": "Used to design and create the platform’s user interface and prototypes."
      },
      {
        "tool": "html",
        "description": "Used to structure the content and elements of the website."
      },
      {
        "tool": "js",
        "description": "Used to add interactive features and functionality."
      },
      {
        "tool": "node",
        "description": "Used as an environment to run the local server."
      },
      {
        "tool": "gh",
        "description": "Used to store and manage the project’s code repository."
      }
    ],
    "skills": [
      "User Interface Design (UI)",
      "User Experience Design (UX)",
      "Web Development",
      "Problem-solving through technology",
      "Teamwork and collaboration"
    ],
    "links": [
      {
        "label": "Code on GitHub",
        "url": "https://github.com/dxxmixn16/_UniVan_.git"
      }
    ]
  },
  "vida": {
    "title": "Vida",
    "meta": "Hackathon Project · 2024",
    "video": "vida",
    "overview": [
      "Vida was designed as a digital tool to connect people who need organ, blood, tissue, and other human donations with donors who are willing to help. Its purpose is to make it easier for people to find the support they need, promoting solidarity and contributing to the well-being of society.",
      "Medical tests, compatibility evaluations, and donation and transplant procedures would be carried out in authorized hospitals, clinics, and medical centers under the supervision of healthcare professionals."
    ],
    "roleTitle": "Backend & Frontend Developer",
    "roleText": [
      "I participated in both the backend and frontend development of the project. I helped choose the color palette and worked on the UX/UI design of the user interface. I also used code to add functionality to buttons and make different parts of the platform interactive.",
      "This experience allowed me to improve my design and programming skills while learning more about how to create a useful and user-friendly digital tool."
    ],
    "features": [
      {
        "name": "User Profiles",
        "description": "Donors and people in need of medical support can access the app and create their own profiles. Donors can offer resources such as blood, platelets, and other medical donations, while recipients can request the support they need."
      },
      {
        "name": "Healthcare Partnerships",
        "description": "Health centers and clinics work as partners within the platform, helping connect donors with people who need medical support."
      },
      {
        "name": "Flexible Healthcare Services",
        "description": "Users can choose the clinic or hospital that best fits their needs and preferences, ensuring that the donation process takes place under proper health and safety standards."
      }
    ],
    "tools": [
      {
        "tool": "figma",
        "description": "Used to design the app’s interface, create visual layouts, and plan the user experience (UX/UI)."
      },
      {
        "tool": "pa",
        "description": "Used to develop the application and build its main features and functionalities."
      }
    ],
    "skills": [],
    "links": [
      {
        "label": "Design in Figma",
        "url": "https://www.figma.com/design/2rE1Ll8CYZy7rf0FvKZMSu/Microsoft-Power-Apps---Create-Apps-from-Figma-UI-Kit--Preview---Community-?node-id=0-1&p=f&t=aoG1u6htc52akOzP-0"
      }
    ]
  }
};
