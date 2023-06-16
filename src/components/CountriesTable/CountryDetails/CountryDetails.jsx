import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export const CountryDetails = ({ isOpen, country }) => {
  const {
    name,
    flag,
    area = 'Not defined',
    population = 'Not defined',
    timezones,
    currencies,
    car,
    maps,
  } = country;
  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={isOpen} timeout='auto' unmountOnExit>
          <Box sx={{ margin: 1 }}>
            <Typography variant='h6' gutterBottom component='div'>
              Country details
            </Typography>
            <Table size='small' aria-label='purchases'>
              <TableHead>
                <TableRow>
                  <TableCell>Flag</TableCell>
                  <TableCell>Area&nbsp;(km2)</TableCell>
                  <TableCell align='right'>Population</TableCell>
                  <TableCell align='right'>Timezones</TableCell>
                  <TableCell align='right'>Currencies</TableCell>
                  <TableCell align='right'>Car&nbsp;signs</TableCell>
                  <TableCell align='right'>
                    Open&nbsp;on Google&nbsp;Maps
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key={`${name.common}#details`}>
                  <TableCell component='th' scope='row'>
                    <img
                      src={flag.svg}
                      alt={flag.alt}
                      width='300px'
                      height='150px'
                    />
                  </TableCell>
                  <TableCell>
                    {area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                  </TableCell>
                  <TableCell align='right'>
                    {population
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                  </TableCell>
                  <TableCell align='right'>
                    <ul>
                      {timezones?.length > 0
                        ? timezones.map((timezone) => (
                            <li key={timezone}>{timezone}</li>
                          ))
                        : 'Not defined'}
                    </ul>
                  </TableCell>
                  <TableCell align='right'>
                    <ul>
                      {currencies
                        ? Object.keys(currencies).map((currency) => (
                            <li key={currency}>{currency}</li>
                          ))
                        : 'Not defined'}
                    </ul>
                  </TableCell>
                  <TableCell align='right'>
                    <ul>
                      {car.signs?.filter((sign) => sign !== '').length > 0
                        ? car.signs.map((sign) => <li key={sign}>{sign}</li>)
                        : 'Not defined'}
                    </ul>
                  </TableCell>
                  <TableCell>
                    <Link
                      to={maps.googleMaps}
                      target='_blank'
                      rel='noopener noreferrer nofollow'
                    >
                      Open
                    </Link>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};
