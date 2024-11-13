import * as React from 'react';
const SvgComponent = (props) => (
 <svg
  xmlns="http://www.w3.org/2000/svg"
  width={13}
  height={14}
  fill="none"
  {...props}
 >
  <path
//    fill="#DF0"
   d="M5.281 8.8v.8c0 .333.119.617.356.85.237.233.524.35.863.35.339 0 .626-.117.863-.35.237-.233.356-.517.356-.85v-.8h.812c.339 0 .626-.117.863-.35.237-.233.356-.517.356-.85 0-.333-.119-.617-.356-.85a1.183 1.183 0 0 0-.863-.35H7.72v-.8c0-.333-.119-.617-.356-.85A1.183 1.183 0 0 0 6.5 4.4c-.339 0-.626.117-.863.35a1.146 1.146 0 0 0-.356.85v.8H4.47c-.339 0-.626.117-.863.35a1.146 1.146 0 0 0-.356.85c0 .333.119.617.356.85.237.233.524.35.863.35h.812ZM1.625 14c-.447 0-.83-.156-1.147-.47A1.53 1.53 0 0 1 0 12.4V5.2c0-.253.058-.493.173-.72.115-.227.274-.413.477-.56L5.525.32C5.809.107 6.135 0 6.5 0c.366 0 .69.107.975.32l4.875 3.6A1.572 1.572 0 0 1 13 5.2v7.2c0 .44-.159.817-.477 1.13-.318.314-.701.47-1.148.47h-9.75Z"
  />
 </svg>
);
export { SvgComponent as HomeIcon };
