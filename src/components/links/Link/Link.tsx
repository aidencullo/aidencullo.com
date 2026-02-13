import React from 'react'

interface LinkProps {
  href: string
  title: string
  children: React.ReactNode
  isExternal?: boolean
  className?: string
  download?: boolean
}

const Link: React.FC<LinkProps> = ({ 
  href, 
  title, 
  children, 
  isExternal = false,
  className,
  download = false
}) => {
  return (
    <a 
      href={href} 
      title={title}
      className={`link ${className || ''}`}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      download={download}
    >
      {children}
    </a>
  )
}

export default Link
