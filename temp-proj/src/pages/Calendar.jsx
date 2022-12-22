import React from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { scheduleData } from '../data/dummy';
import { Header } from '../components';

const Calendar = () => {
  return (
    <div className='m-2 md:m-10 mt-28 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='App' title='Calendar Schedule' />
      <div className='m-2 md:m-10 mt-24 p-0.5 md:p-10 bg-[#ffffff] rounded-2xl'>
        <ScheduleComponent
          height='650px'
          eventSettings={{ dataSource: scheduleData }}
          selectedDate={new Date(2021, 1, 10)}
        >
          <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
        </ScheduleComponent>
      </div>

    </div>
  )
}

export default Calendar