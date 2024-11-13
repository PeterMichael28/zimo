import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    {...props}
  >
    <path
      fill="#ADADAD"
      d="M12.986 2.898a.625.625 0 1 0-.884-.884l-1.584 1.584V2.456a.625.625 0 0 0-1.25 0v2.651c0 .345.28.625.625.625h2.651a.625.625 0 1 0 0-1.25h-1.142l1.584-1.584ZM5.732 9.893a.625.625 0 0 0-.625-.625H2.456a.625.625 0 0 0 0 1.25h1.142l-1.584 1.584a.625.625 0 0 0 .884.884l1.584-1.584v1.142a.625.625 0 1 0 1.25 0V9.893ZM2.898 2.014a.625.625 0 1 0-.884.884l1.584 1.584H2.456a.625.625 0 1 0 0 1.25h2.651c.345 0 .625-.28.625-.625V2.456a.625.625 0 1 0-1.25 0v1.142L2.898 2.014ZM9.893 9.268a.625.625 0 0 0-.625.625v2.651a.625.625 0 0 0 1.25 0v-1.142l1.584 1.584a.625.625 0 1 0 .884-.884l-1.584-1.584h1.142a.625.625 0 1 0 0-1.25H9.893Z"
    />
  </svg>
)
export { SvgComponent as MineIcon }
