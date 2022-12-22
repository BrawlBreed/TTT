import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../components';

const Kanban = () => {
  return (
    <div className='m-2 md:m-10 mt-28 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='App' title='Kanban Board' />
      <div className='m-2 md:m-10 mt-24 p-0.5 md:p-10 bg-[#ffffff] rounded-2xl'>
        <KanbanComponent
          id='kanban'
          dataSource={kanbanData}
          cardSettings={{
            contentField: 'Summary',
            headerField: 'Id'
          }}
          keyField='Status'
        >
          <ColumnsDirective>
            {kanbanGrid.map((item, index) =>
              <ColumnDirective key={index} {...item} />)}
          </ColumnsDirective>
        </KanbanComponent>
      </div>


    </div>
  )
}

export default Kanban