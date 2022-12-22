import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Toolbar, Edit, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { Header } from '../components';

const Customers = () => {
  const { activeMenu } = useStateContext()
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className={`m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl ${activeMenu && 'blur-sm'}`}>
      <Header category='Customers' title='List' />
      <div className='m-2 md:m-10 mt-24 p-0.5 md:p-10 bg-[#ffffff] rounded-2xl'>
        <GridComponent
          id="gridcomp"
          allowPaging
          allowSorting
          allowSearching
          toolbar={['Search', 'Delete', 'Edit']}
          dataSource={customersData}
          editSettings={{ allowDeleting: true, allowEditing: true }}
        >
          <ColumnsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
          </ColumnsDirective>
          <Inject services={[Page, Toolbar, Sort, Filter, Selection, Edit, Sort]} />
        </GridComponent>
      </div>

    </div>
  )
}

export default Customers