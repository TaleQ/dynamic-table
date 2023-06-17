import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const CountryDetails = ({ isOpen, country }) => {
  const {
    name,
    flags,
    area = 'Not defined',
    population = 'Not defined',
    timezones,
    currencies,
    car,
    maps,
  } = country;

  const isObjEmpty = (obj) => Object.keys(obj).length === 0;

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
                      src={flags?.svg ? flags.svg : ''}
                      alt={flags?.alt ? flags.alt : 'Country flag'}
                      width='300px'
                      height='150px'
                    />
                  </TableCell>
                  <TableCell>
                    {area?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                  </TableCell>
                  <TableCell align='right'>
                    {population
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                  </TableCell>
                  <TableCell align='right'>
                    <ul>
                      {timezones?.length
                        ? timezones.map((timezone, index) => (
                            <li key={index}>{timezone}</li>
                          ))
                        : 'Not defined'}
                    </ul>
                  </TableCell>
                  <TableCell align='right'>
                    <ul>
                      {isObjEmpty(currencies)
                        ? 'Not defined'
                        : Object.keys(currencies).map((currency, index) => (
                            <li key={index}>{currency}</li>
                          ))}
                    </ul>
                  </TableCell>
                  <TableCell align='right'>
                    <ul>
                      {car.signs?.filter((sign) => sign !== '').length
                        ? car.signs.map((sign, index) => (
                            <li key={index}>{sign}</li>
                          ))
                        : 'Not defined'}
                    </ul>
                  </TableCell>
                  <TableCell>
                    <Link
                      to={
                        maps?.googleMaps
                          ? maps.googleMaps
                          : 'https://www.google.com/maps'
                      }
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

CountryDetails.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  country: PropTypes.shape({
    name: PropTypes.shape({
      official: PropTypes.string,
      common: PropTypes.string,
    }),
    flags: PropTypes.shape({
      svg: PropTypes.string,
      alt: PropTypes.string,
    }),
    area: PropTypes.number,
    population: PropTypes.number,
    timezones: PropTypes.arrayOf(PropTypes.string),
    currencies: PropTypes.object,
    car: PropTypes.shape({
      signs: PropTypes.arrayOf(PropTypes.string),
    }),
    maps: PropTypes.shape({
      googleMaps: PropTypes.string,
    }),
  }),
};
