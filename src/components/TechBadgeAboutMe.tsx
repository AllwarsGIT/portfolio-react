

import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";

type TechBadgeProps = {
    techName: string;
}

function TechBadge({ techName }: TechBadgeProps) {
  return (
    <span className="text-grayPrimary px-3 py-1 rounded-full text-sm font-semibold inline-flex items-center">
    <MdArrowForwardIos className="text-bluePrimary mr-1"/>
      {techName}
    </span>
  )
}

export default TechBadge
