import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { Tooltip, TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links, processColor } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { currentColor, colorTitle } = useStateContext();

  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-[#272727] text-md dark:text-[#dbdbdb] hover:text-[#272727] hover:font-semibold dark:hover:font-semibold dark:hover:text-[#272727] hover:bg-light-gray m-2';
  const activeLink = 'active flex items-center gap-5 pl-4 pt-3 pb-2.5 text-[#272727] bg-[#272727] dark:bg-[#dbdbdb] hover:text-[#272727] rounded-lg m-3 bg-opacity-40 text-white text-md font-bold';

  const { activeMenu, setActiveMenu } = useStateContext();

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (<>
        <div className='flex justify-between
        items-center hover:cursor-pointer'>
          <TooltipComponent content='Menu'
            position='BottomCenter'>
            <button type='button'
              onClick={() => setActiveMenu(
                (prev) => !prev)}
              className='text-xl p-4 rounded-full mr-4 mt-4 hover:cursor-pointer hover:bg-light-gray'
            >
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>
        <div className='mt-10'>
          {links.map((item) => (
            <div key={item.title}>
              <p className='font-semibold text-xl' style={{ color: `${currentColor}` }}>
                {item.title}
              </p>
              {item.links.map((link) => (
                <NavLink
                  to={`/${link.name}`}
                  key={link.name}
                  onClick={() => {
                    setActiveMenu(false)

                  }}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <div style={{ color: `${processColor(currentColor)}` }}>{link.icon}</div>
                  <span className='capitalize'>
                    {link.name}
                  </span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </>)
      }
    </div >
  )
}

export default Sidebar