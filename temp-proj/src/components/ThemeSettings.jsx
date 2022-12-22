import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { processColor, themeColors } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { MdArrowBackIos } from 'react-icons/md';
import { Header } from '../components';
import '../data/customs.scss';

const ThemeSettings = () => {
  const { activeSettings, setActiveSettings, currentMode, currentColor, setThemeSettings, setColor, setMode } = useStateContext()
  const styleProp = currentMode === 'Dark' ? currentColor : processColor(currentColor)

  return (
    <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0'>
      <div className='float-right h-screen dark:text-gray-200 bg-light-gray dark:bg-secondary-dark-bg px-1 w-400'>
        <div className='flex justify-start p-8 border-b-2 dark:border-b-[#dbdbdb] border-gray-300 px-2 mx-3'>
          <button className='flex flex-row items-center gap-3 px-2 py-3 bg-gradient-to-r from-zinc-100 to-zinc-200 rounded-2xl cursor-pointer hover:drop-shadow-xl'
            onClick={() => setActiveSettings((prev) => !prev)} >
            <MdArrowBackIos color={currentColor} className='text-gray-600 text-2xl' />
            <span style={{ color: styleProp }} className={`text-gray-600 font-extrabold text-3xl`}>Back</span>
          </button>
          <h2 className='text-center ml-8 font-semibold text-3xl text-gray-600 dark:text-[#dbdbdb]'>Settings</h2>
        </div>
        <div className='flex flex-col mx-3 mt-6 justify-center py-2 border-y-1 dark:border-y-[#dbdbdb]'>
          <p className='font-bold dark:text-[#dbdbdb] text-2xl'>Theme Settings</p>
          <div className='flex flex-row justify-start my-2 mx-3'>
            <input
              type='radio'
              id='light'
              name='theme'
              value='Light'
              className='radio cursor-pointer'
              onClick={(e) => { setMode(e) }}
            />
            <label htmlFor='light' className='ml-2 text-lg dark:text-[#dbdbdb] font-semibold cursor-pointer'>Light</label>
          </div>
          <div className='flex flex-row justify-start my-2 mx-3'>
            <input
              type='radio'
              id='dark'
              name='theme'
              value='Dark'
              className='radio cursor-pointer'
              onClick={(e) => { setMode(e) }}
            />
            <label htmlFor='dark' className='ml-2 text-lg dark:text-[#dbdbdb] font-semibold cursor-pointer'>Dark</label>
          </div>
        </div>
        <div className='flex flex-col mx-3 mt-6 justify-center py-2 border-y-1 dark:border-y-[#dbdbdb]'>
          <p className='font-bold dark:text-[#dbdbdb] text-2xl'>Theme Colors</p>
          <div className='flex gap-3 justify-center'>
            {themeColors.map((item, index) =>
              <TooltipComponent
                key={index}
                content={item.name}
                position='TopCenter'
              >
                <div className='relative mt-7 cursor-pointer flex gap-5 items-center my-5'>
                  <button className='h-10 w-10 rounded-full cursor-pointer' onClick={() => setColor(item)} style={{ backgroundColor: item.color }}>
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${currentColor === item.color ? 'block' : 'hidden'}`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeSettings