import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CountriesTableRow } from './CountriesTableRow/CountriesTableRow';
import { TablePagination } from '@mui/material';
import { useState } from 'react';
import { useCountries } from '../../hooks/useCountries';

export const CountriesTable = () => {
  const { countries } = useCountries();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell>Number</TableCell>
            <TableCell>Official&nbsp;name</TableCell>
            <TableCell align='right'>Common&nbsp;name</TableCell>
            <TableCell align='right'>Country&nbsp;Code</TableCell>
            <TableCell align='right'>Capital</TableCell>
            <TableCell align='right'>Region</TableCell>
            <TableCell align='right'>Subregion</TableCell>
            <TableCell align='right'>Languages</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countries?.map((country, index) => (
            <CountriesTableRow
              key={country.ccn3}
              country={country}
              index={index}
            />
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
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
