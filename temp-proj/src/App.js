import React from 'react';
import { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked,
Pyramid, Line, Customers, Kanban, Area, Bar, Pie, Financial, ColorPicker,
ColorMapping, Editor } from './pages';
import { useStateContext } from './contexts/ContextProvider';
import './App.css';
import { db } from './backend/setup';

const App = () => {
  console.log(db)
  const {activeMenu, activeSettings, setActiveSettings, currentColor, currentMode} = useStateContext();
  return (
    <div className={`z-9 scroll-smooth ${currentMode === 'Dark' ? 'dark' : ''}`}>
      <Router>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4 w-sreen text-2xl' style={{ zIndex: '1000' }}>
            <TooltipComponent content="Settings" position="Top">
              <button type='button'
              className='text-3xl p-3 
              hover:drop-shadow-xl
              hover:bg-light-gray text-white'
              style={{ background: currentColor,
              borderRadius: '50%'}}
              onClick={() => setActiveSettings((prev) => !prev)}>
                <FiSettings/>
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
          <div className="w-80 pt-5 fixed sidebar bg-main-bg dark:bg-secondary-dark-bg bg-white z-10">
            <Sidebar/>
          </div>  
          ) : (
          <div className='w-0 dark:bg-secondary-dark-bg bg-white'>
            <Sidebar/>
          </div>)}
          <div className={
            activeMenu && `dark: bg-main-bg min-h-screen w-80 z-11`
          }>
            <div className='fixed md-static bg-main-bg
            dark:bg-main-dark-bg
            navbar w-full border rounded-xl border-color'>
              <Navbar/>
            </div>
          </div>
          <div className='w-full'>
            {activeSettings && (
              <ThemeSettings/>
            )}
            <Routes>
              {/* Dashboard */}
              <Route path='/' element={<Ecommerce/>}/>
              <Route path='/ecommerce' element={<Ecommerce/>}/>

              {/* Pages */}
                <Route path='/orders' element={<Orders/>}/>
                <Route path='/employees' element={<Employees/>}/>
                <Route path='/customers' element={<Customers/>}/>

              {/* Apps */}
              <Route path='/kanban' element={<Kanban/>}/>
              <Route path='/editor' element={<Editor/>}/>
              <Route path='/calendar' element={<Calendar/>}/>
              <Route path='/color-picker' element={<ColorPicker/>}/>

              {/* Charts */}
              <Route path='/line' element={<Line/>}/>
              <Route path='/area' element={<Area/>}/>
              <Route path='/pie' element={<Pie/>}/>
              <Route path='/bar' element={<Bar/>}/>
              <Route path='/pyramid' element={<Pyramid/>}/>
              <Route path='/financial' element={<Financial/>}/>
              <Route path='/color-mapping' element={<ColorMapping/>}/>
              <Route path='/stacked' element={<Stacked/>}/>
            </Routes>  
          </div> 
        </div>
      </Router>
    </div>
    
  ) 
}

export default App