import Link from 'next/link'
import React from 'react'

const Button1 = ({isLink, href}) => {
  return (
    <div>
            {isLink ? (
                <Link href={href}>{text}</Link>
            ):(
                <button onClick={callToAction}>{text}</button>
            )}
    </div>
  )
}

export default Button1
