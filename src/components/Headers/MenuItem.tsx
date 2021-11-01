// Dependencies


// Internals
import React from 'react';
import  Link  from '../link'

const colors = [
  '#C3009B',
  '#8900C3',
  '#2700C3',
  '#003AC3',
  '#009BC3',
  '#00C389',
  '#8900C3',
  '#2700C3',
]
// const colors = ['#491207', '#49071D', '#49073E', '#330749', '#120749', '#071D49']

const MenuItem = ({
  icon: Icon,
  label,
  slug,
  i,
  toggle,
}: {
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element
  label: string
  slug: string
  i: number
  toggle: () => void
}): JSX.Element => {
  

  const style = { border: `2px solid ${colors[i]}` }

  return (
    <li
      className="mb-5 transition-transform duration-150 transform hover:scale-105"
      onClick={toggle}
    >
      <Link
        className="flex items-center space-x-5 focus:outline-none"
        to={slug}
      >
        <div
          className="flex justify-center items-center w-10 h-10 rounded-full"
          style={style}
        >
          <Icon className="w-6 h-6" style={{ color: colors[i] }} />
        </div>
        <span
          className="inline-block flex-1 py-1 px-2 text-sm rounded"
          style={{ ...style, color: colors[i] }}
        >
          {`${label}`}
        </span>
      </Link>
    </li>
  )
}

export default MenuItem 
