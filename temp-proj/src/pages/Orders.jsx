import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { useStateContext } from '../contexts/ContextProvider';
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';

const Orders = () => {
  const { activeMenu } = useStateContext()
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className={`m-2 md:m-10 mt-24 p-1 md:p-10 ${activeMenu && 'blur-sm'}`}>
      <Header category="Page" title="Orders" />
      <div className='m-2 md:m-10 mt-24 p-0.5 md:p-10 bg-[#ffffff] rounded-2xl'>
        <GridComponent
          id="gridcomp"
          dataSource={ordersData}
          allowPaging
          allowSorting
          allowExcelExport
          allowPdfExport
          contextMenuItems={contextMenuItems}
          editSettings={editing}
        >
          <ColumnsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
          </ColumnsDirective>
          <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
        </GridComponent>
      </div>

    </div>
  );
};
export default Orders;