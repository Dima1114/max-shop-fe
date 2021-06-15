import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';

export const Pagination = ({page, setPage, size, setSize, total}) => {

  const handleChangePage = (event, newPage) => {
    event.preventDefault()
    setPage(newPage);
  };

  const handleChangeSize = (event) => {
    setSize(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
      <TablePagination
          component="div"
          count={total}
          page={page}
          rowsPerPageOptions={[12, 24, 48/*, { label: 'All', value: -1 }*/]}
          onChangePage={handleChangePage}
          rowsPerPage={size}
          onChangeRowsPerPage={handleChangeSize}
          labelRowsPerPage={'Товаров на странице'}
      />
  );
}
