

import * as React from 'react';
import "./style.css";
import Pagination from '@mui/material/Pagination';
import  { useState } from 'react'; 

export default function PaginationComponent({page,handlePageChange}) {
  
  return (
    <div className='pagination-component'>
      <Pagination count={10}
       page={page}
        onChange={(event,value) => handlePageChange(event,value)}
        
        />
    </div>
  );
}








