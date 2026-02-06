import React from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa'
import CalendlyLink from '../CalendlyLink/CalendlyLink'

const CalendlyIconLink: React.FC = () => {
  return (
    <CalendlyLink>
      <span className="link-icon"><FaRegCalendarAlt /></span>
    </CalendlyLink>
  )
}

export default CalendlyIconLink
