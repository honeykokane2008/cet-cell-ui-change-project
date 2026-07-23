const paths = {
  departments: "M3 7l9-4 9 4-9 4-9-4zm0 6l9 4 9-4M3 13v4l9 4 9-4v-4",
  exams: "M9 12l2 2 4-4m5-2a9 9 0 11-18 0 9 9 0 0118 0z",
  courses: "M4 19.5A2.5 2.5 0 016.5 17H20M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15z",
  institutes: "M3 21h18M5 21V7l7-4 7 4v14M9 9h1m-1 4h1m4-4h1m-1 4h1M9 21v-4h6v4",
  chevronRight: "M9 6l6 6-6 6",
}

const Icon = ({ name, size = 22, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={className}
  >
    <path
      d={paths[name]}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Icon
