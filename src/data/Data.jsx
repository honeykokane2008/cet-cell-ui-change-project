export const navLinks = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Candidate", path: "/candidate" },
  { name: "CETs", path: "/cets" },
  { name: "Institute", path: "/institute" },
  { name: "Download", path: "/download" },
  { name: "Contact", path: "/contact" },
  { name: "Work With Us", path: "/work-with-us" },
  { name: "User Manual", path: "/user-manual" }
]

export const navLinksClass = "relative inline-block text-(--foreground) hover:text-(--primary) after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-(--primary) after:transition-all after:duration-300 hover:after:w-full";


export const statCards = [
  { icon: 'departments', title: '6', description: 'Departments', accent: '#43484D' },
  { icon: 'exams', title: '19', description: 'CET Exams', accent: '#43484D' },
  { icon: 'courses', title: '73', description: 'Courses', accent: '#43484D' },
  { icon: 'institutes', title: '4,000+', description: 'Institutes', accent: '#43484D' },
]


export const logLinks = [
  {
    accent: "#4F46E5",
    label: "CET (Examinatiob) Portal",
    sub: "for A.Y2026-27",
    icon: (<img width="24" height="24" src="https://img.icons8.com/pulsar-line/48/quiz.png" alt="Exam icon" />),
    path:"/about"

  },

// #D4A017
  {
    accent: "#4F46E5",
    label: "Admission Portal",
    sub: "for A.Y2026-27",
    icon: (<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="black">
      <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Z" />
    </svg>),
    path:"/about"
  },
// #0F9D8B
  {
    accent: "#4F46E5",
    label: "Foreign Candidate Registration",
    sub: "for A.Y2026-27",
    icon: (<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="black">
      <path d="M337.3 51C325.9 48.7 314.2 48.7 302.8 51L115.3 88.5C104.1 90.7 96 100.6 96 112C96 122.3 102.5 131.3 112 134.6L112 208L96.3 286.6C96.1 287.5 96 288.5 96 289.5C96 297.5 102.5 304.1 110.6 304.1L145.5 304.1C153.5 304.1 160.1 297.6 160.1 289.5C160.1 288.5 160 287.6 159.8 286.6L144 208L144 141.3L192 150.9L192 208C192 278.7 249.3 336 320 336C390.7 336 448 278.7 448 208L448 150.9L524.7 135.6C535.9 133.3 544 123.4 544 112C544 100.6 535.9 90.7 524.7 88.5L337.3 51zM320 288C275.8 288 240 252.2 240 208L400 208C400 252.2 364.2 288 320 288zM216.1 384.1C154.7 412.3 112 474.3 112 546.3C112 562.7 125.3 576 141.7 576L296 576L296 430L238.6 387C232.1 382.1 223.4 380.8 216 384.2zM344 576L498.3 576C514.7 576 528 562.7 528 546.3C528 474.3 485.3 412.3 423.9 384.2C416.5 380.8 407.8 382.1 401.3 387L343.9 430L343.9 576z" />
    </svg>),
    path:"/about"
  },

// #C2410C
// currentColor
  {
    accent: "#4F46E5",
    label: "विद्यार्थी सहाय्यता केंद्रांची यादी",
    sub: "",
    icon: (<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="black">
      <path d="M320 128C241 128 175.3 185.3 162.3 260.7C171.6 257.7 181.6 256 192 256L208 256C234.5 256 256 277.5 256 304L256 400C256 426.5 234.5 448 208 448L192 448C139 448 96 405 96 352L96 288C96 164.3 196.3 64 320 64C443.7 64 544 164.3 544 288L544 456.1C544 522.4 490.2 576.1 423.9 576.1L336 576L304 576C277.5 576 256 554.5 256 528C256 501.5 277.5 480 304 480L336 480C362.5 480 384 501.5 384 528L384 528L424 528C463.8 528 496 495.8 496 456L496 435.1C481.9 443.3 465.5 447.9 448 447.9L432 447.9C405.5 447.9 384 426.4 384 399.9L384 303.9C384 277.4 405.5 255.9 432 255.9L448 255.9C458.4 255.9 468.3 257.5 477.7 260.6C464.7 185.3 399.1 127.9 320 127.9z" />
    </svg>),
    path:"/about"
  },

]


export const noticeBoard = [
  {
    id:"1234",
    path:"/about",
    date:"20/09/2028",
    course:"All Course",
    description:"Important Notice: For all Centralized Admission Process (CAP) notices, circulars, information brochures, helpline numbers, and other admission-related updates for Academic Year 2026–27, candidates and institutes are advised to visit the respective Course Admission Portal.Please click on Admission Portal A.Y. 2026–27 to access the relevant course admission portal and the latest information."
  },
  {
    id:"1235",
    path:"/about",
    date:"20/09/2028",
    course:"All Course",
    description:"Important Notice: For all Centralized Admission Process (CAP) notices, circulars, information brochures, helpline numbers, and other admission-related updates for Academic Year 2026–27, candidates and institutes are advised to visit the respective Course Admission Portal.Please click on Admission Portal A.Y. 2026–27 to access the relevant course admission portal and the latest information."
  },
  {
    id:"123f",
    path:"/about",
    date:"20/09/2028",
    course:"All Course",
    description:"Important Notice: For all Centralized Admission Process (CAP) notices, circulars, information brochures, helpline numbers, and other admission-related updates for Academic Year 2026–27, candidates and institutes are advised to visit the respective Course Admission Portal.Please click on Admission Portal A.Y. 2026–27 to access the relevant course admission portal and the latest information."
  },
  {
    id:"123d",
    path:"/about",
    date:"20/09/2028",
    course:"All Course",
    description:"Important Notice: For all Centralized Admission Process (CAP) notices, circulars, information brochures, helpline numbers, and other admission-related updates for Academic Year 2026–27, candidates and institutes are advised to visit the respective Course Admission Portal.Please click on Admission Portal A.Y. 2026–27 to access the relevant course admission portal and the latest information."
  },


]
