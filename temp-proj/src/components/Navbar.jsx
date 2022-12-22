import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { processColor } from '../data/dummy';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const Navbar = () => {
  const {
    activeMenu, setActiveMenu,
    isClicked, setIsClicked,
    handleClick, screenSize, setScreenSize, currentColor, currentMode } = useStateContext();

  const styleProp = currentMode === 'Dark' ? { color: currentColor } : { color: processColor(currentColor) };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener('resize',
      handleResize);

    handleResize();

    return () => window.removeEventListener('resize',
      handleResize)
  }, [])

  useEffect(() => {
    if (screenSize <= 767) {
      setActiveMenu(false)
    }
    else {
      setActiveMenu(true)
    }
  }, [screenSize]);

  return (
    <div className='flex justify-between p-4 md:mx-6 relative'>
      <TooltipComponent content="Menu">
        <AiOutlineMenu
          color={currentColor}
          className='text-3xl cursor-pointer mt-5'
          onClick={() => setActiveMenu((prev) => !prev)}
        />
      </TooltipComponent>
      <div className='flex gap-4'>
        <TooltipComponent content="Chat">
          <BsChatLeft
            className='text-3xl cursor-pointer mt-5'
            onClick={() => handleClick('chat')}
            color={currentColor}
          />
        </TooltipComponent>
        <TooltipComponent content="Notification">
          <RiNotification3Line
            className='text-3xl cursor-pointer mt-5'
            onClick={() => handleClick('notification')}
            color={currentColor}
          />
        </TooltipComponent>
        <TooltipComponent
          content="Profile"
          position="BottomCenter"
        >
          <div className='flex items-center
          gap-2 cursor-pointer p-1
          hover:bg-light-gray rounded-lg dark:hover:text-[#272727]'
            onClick={() => handleClick('userProfile')}>
            <img src={avatar}
              className='rounded-full w-16 h-16'
            />
            <p>
              <span className='text-xl text-default-theme'>Hi,</span> {' '}
              <span style={styleProp} className='font-bold ml-1 text-xl'>Micheal</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14' />
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  )
}

export default Navbar