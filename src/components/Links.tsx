import React from 'react'
import Link from './Link'

const Links: React.FC = () => {
  return (
    <div className="links-container">
      <Link 
        name="GitHub" 
        url="https://github.com/aidencullo" 
        isExternal={true}
      />
      <Link 
        name="Stack Overflow" 
        url="https://stackoverflow.com/users/6447634/aiden-cullo" 
        isExternal={true}
      />
      <Link 
        name="LinkedIn" 
        url="https://www.linkedin.com/in/aidencullo" 
        isExternal={true}
      />
      <Link 
        name="Email" 
        url="mailto:aidencullo@gmail.com" 
        isExternal={false}
      />
    </div>
  )
}

export default Links
