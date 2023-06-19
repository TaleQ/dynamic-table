import './CountriesTable.scss';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import { CountriesTableRow } from './CountriesTableRow/CountriesTableRow';
import { useRef, useState } from 'react';
import { useCountries } from '../../hooks/useCountries';
import { CountriesTableHead } from './CountriesTableHead/CountriesTableHead';
import NoCountriesFound from '../../assets/images/no_countries_found.png';

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

  const getAbsoluteIndex = (index) => {
    return index + page * rowsPerPage;
  };

  return (
    <Paper
      sx={{
        width: '100%',
        backgroundColor: 'inherit',
        boxShadow: 'none',
        overflow: 'hidden',
      }}
    >
      {visibleCountries.length ? (
        <>
          <TableContainer>
            <Table aria-label='countries table' ref={tableRef}>
              <CountriesTableHead />
              <TableBody>
                {visibleCountries?.map((country, index) => (
                  <CountriesTableRow
                    key={`${country.name.common}_${index}`}
                    country={country}
                    index={getAbsoluteIndex(index)}
                    sx={{ cursor: 'pointer', minHeight: 95 }}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[
              10,
              20,
              50,
              { value: countries.length, label: 'All' },
            ]}
            component='div'
            count={countries.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      ) : (
        <div className='no-countries-thumb'>
          <p className='no-countries-text'>No countries found</p>
          <img src={NoCountriesFound} alt='Nothing found' />
        </div>
      )}
    </Paper>
  );
};
