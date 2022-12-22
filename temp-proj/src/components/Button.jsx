import React from 'react';

export const Button = ({ color, bgColor, text, borderRadius }) =>
  <button
    type='button'
    style={{ color: color, backgroundColor: bgColor, borderRadius: borderRadius }}
    className='text-xl drop-shadow-lg hover:drop-shadow-2xl p-2'
  >
    {text}
  </button>

export default Button