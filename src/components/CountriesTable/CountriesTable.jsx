import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CountriesTableRow } from './CountriesTableRow/CountriesTableRow';
import { TablePagination } from '@mui/material';
import { useRef, useState } from 'react';
import { useCountries } from '../../hooks/useCountries';

export const CountriesTable = () => {
  const { countries } = useCountries();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const tableRef = useRef(null);

  const handleChangePage = (event, newPage) => {
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

  const renderCountries = countries.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const getAbsoluteIndex = (index) => {
    return index + page * rowsPerPage;
  };

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        aria-label='collapsible table'
        ref={tableRef}
      >
        <TableHead>
          <TableRow>
            <TableCell>Number</TableCell>
            <TableCell>Official&nbsp;name</TableCell>
            <TableCell align='center'>Common&nbsp;name</TableCell>
            <TableCell align='center'>Country&nbsp;Code</TableCell>
            <TableCell align='center'>Capital</TableCell>
            <TableCell align='center'>Region</TableCell>
            <TableCell align='center'>Subregion</TableCell>
            <TableCell align='center'>Languages</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderCountries?.map((country, index) => (
            <CountriesTableRow
              key={index}
              country={country}
              index={getAbsoluteIndex(index)}
            />
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 20, 50, { value: -1, label: 'All' }]}
        component='div'
        count={countries.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};
