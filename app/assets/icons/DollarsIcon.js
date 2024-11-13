import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <path
    //   fill="#ADADAD"
      fillRule="evenodd"
      d="M7.583 1.167a.583.583 0 1 0-1.166 0v.583a2.917 2.917 0 0 0 0 5.833v3.5a1.75 1.75 0 0 1-1.75-1.75.583.583 0 0 0-1.167 0 2.917 2.917 0 0 0 2.917 2.917v.583a.583.583 0 1 0 1.166 0v-.583a2.917 2.917 0 1 0 0-5.833v-3.5c.967 0 1.75.783 1.75 1.75a.583.583 0 0 0 1.167 0A2.917 2.917 0 0 0 7.583 1.75v-.583Zm-1.166 1.75a1.75 1.75 0 1 0 0 3.5v-3.5Zm1.166 4.666v3.5a1.75 1.75 0 1 0 0-3.5Z"
      clipRule="evenodd"
    />
  </svg>
)
export { SvgComponent as DollarIcon }
