import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Sort, Page, Search, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import { useStateContext } from '../contexts/ContextProvider';
import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  const { activeMenu } = useStateContext()
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className={`m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl ${activeMenu && 'blur-sm'}`}>
      <Header category="Page" title="Employees" />
      <div className='m-2 md:m-10 mt-24 p-0.5 md:p-10 bg-[#ffffff] rounded-2xl'>
        <GridComponent
          id="gridcomp"
          allowPaging
          allowSorting
          allowSearching
          toolbar={['Search']}
          dataSource={employeesData}
          editSettings={editing}
        >
          <ColumnsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
          </ColumnsDirective>
          <Inject services={[Page, Search, Toolbar, Sort]} />
        </GridComponent>
      </div>
    </div>
  );
};
export default Employees;