import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import { CountriesTableRow } from './CountriesTableRow/CountriesTableRow';
import { useRef, useState } from 'react';
import { useCountries } from '../../hooks/useCountries';
import { CountriesTableHead } from './CountriesTableHead/CountriesTableHead';

export const CountriesTable = () => {
  const { countries } = useCountries();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const tableRef = useRef(null);

  const handleChangePage = (_event, newPage) => {
    setPage(newPage);
    scrollToTop();
  };

  const scrollToTop = () => {
    const tableElement = tableRef.current;
    if (tableElement) {
      tableElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const visibleCountries = countries.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - countries.length) : 0;

  const getAbsoluteIndex = (index) => {
    return index + page * rowsPerPage;
  };

  return (
    <Paper
      sx={{
        width: '100%',
        minWidth: 650,
        backgroundColor: 'inherit',
        boxShadow: 'none',
      }}
    >
      <TableContainer sx={{ width: '100%', minWidth: 650 }}>
        <Table
          sx={{ width: '100%', minWidth: 650 }}
          aria-label='countries table'
          ref={tableRef}
        >
          <CountriesTableHead />
          <TableBody>
            {visibleCountries?.map((country, index) => (
              <CountriesTableRow
                key={index}
                country={country}
                index={getAbsoluteIndex(index)}
                sx={{ cursor: 'pointer' }}
              />
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={9} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 20, 50, { value: -1, label: 'All' }]}
        component='div'
        count={countries.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
