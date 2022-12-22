import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { processColor } from '../data/dummy';

const Header = ({ category, title }) => {
  const { currentColor, currentMode } = useStateContext();

  const styleProp = currentMode === 'Dark' ? { color: currentColor } : { color: processColor(currentColor) };

  return (
    <div className='my-16'>
      <p className={`text-2xl dark:text-[#c7c7c7]`}>
        {category}
      </p>
      <p style={styleProp} className={'text-3xl font-extrabold tracking-tight'}>
        {title}
      </p>
    </div>
  )
}

export default Header