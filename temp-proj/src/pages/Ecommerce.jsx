import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Stacked, Pie, Button, SparkLine } from '../components';
import { EarningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () => {
  return (
    <div className='mt-28 items-center w-auto'>
      <div className='flex justify-center'>
        <div className='bg-white dark:text-gray-200 dark:text-[#dbdbdb] dark:bg-secondary-dark-bg h-fit rounded-xl w-auto lg:80 p-8 pt-7 m-3 bg-gradient-to-t from-gray-200 to-gray-250 bg-no-repat items-center'>
          <div className='flex items-center mt-4 text-center flex-col'>
            <div className='flex flex-col items-center'>
              <p className='font-bold text-gray-500'>Earnings:</p>
              <p className='font-bold text-xl'>$40000</p>
              <div className='flex m-3 flex-wrap gap-1 justify-center items-center text-center drop-shadow-xl p-4 w-full'>
                {EarningData.map((item) => (
                  <div
                    key={item.title}
                    className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'
                  >
                    <button type='button'
                      style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                      className='text-xl opacity-90 rounded-full p-4 hover:drop-shadow-xl'>
                      {item.icon}
                    </button>
                    <p className='mt-3 items-center'>
                      <span className='text-lg font-semibold'>
                        {item.amount}
                      </span>
                      <span className={`text-sm text-${item.pcColor} ml-2`}>
                        {item.percentage}
                      </span>
                    </p>
                    <p className='text-sm text-gray-400 mt-1'>
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className='flex gap-10 flex-wrap justify-center flex-col'>
              <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780 drop-shadow-lg'>
                <div className='flex justify-between'>
                  <p className='font-semibold text-xl'>
                    Revenue Updates
                  </p>
                  <div className='flex items-center gap-4'>
                    <p className='flex items-center gap-2 text-gray-400 hover:drop-shadow-2xl'>
                      <span><GoPrimitiveDot /></span>
                      <span>Expense</span>
                    </p>
                    <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-2xl'>
                      <span><GoPrimitiveDot /></span>
                      <span>Budget</span>
                    </p>
                  </div>
                </div>
                <div className='mt-10 flex gap-10 flex-wrap justify-center'>
                  <div className='border-r-1 border-color m-4 pr-10'>
                    <div>
                      <p>
                        <span className='text-3xl font-semibold '>$93,000</span>
                        <span className='ml-2 bg-green-300 rounded-full px-2.5 font-light'>23%</span>
                      </p>
                      <p className='text-gray-600'>Budget</p>
                    </div>
                    <div className='mt-10'>
                      <p>
                        <span className='text-3xl font-semibold '>$53,000</span>
                        <span className='ml-2 bg-gray-300 rounded-full px-2.5 font-light'>43%</span>
                      </p>
                      <p className='text-gray-600'>Expense</p>
                    </div>
                    <div className='mt-7'>
                      <SparkLine
                        id='line-sparkline'
                        currentColor='blue'
                        color='blue'
                        height='80px'
                        width='250px'
                        type='Line'
                        data={SparklineAreaData}
                      />
                      <div className='mt-6 self-center'>
                        <Button
                          color='white'
                          bgColor='blue'
                          text="Download Report"
                          borderRadius='10px'
                        />
                      </div>
                    </div>

                  </div>
                  <div>
                    <Stacked
                      width="320px"
                      height="360px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce