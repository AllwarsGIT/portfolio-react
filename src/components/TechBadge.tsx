

import React from 'react'

type TechBadgeProps = {
    techName: string;
}

function TechBadge({ techName }: TechBadgeProps) {
  return (
    <span className="bg-blueTertiary px-3 py-1 rounded-full text-bluePrimary text-sm font-semibold">
      {techName}
    </span>
  )
}

export default TechBadge
