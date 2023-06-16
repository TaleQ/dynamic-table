import { useState } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useDispatch } from 'react-redux';
import { toggleIsDetailsShown } from '../../../redux/countriesSlice';
import { CountryDetails } from '../CountryDetails/CountryDetails';

export const CountriesTableRow = ({ country, index }) => {
  const [isOpen, setIsOpen] = useState();
  const dispatch = useDispatch();
  const onRowClick = () => {
    dispatch(toggleIsDetailsShown(!isOpen));
    setIsOpen(!isOpen);
  };
  const {
    name,
    cca2 = 'Not defined',
    capital = 'Not defined',
    region = 'Not defined',
    subregion = 'Not defined',
    languages,
  } = country;

  return (
    <>
      <TableRow
        selected={isOpen}
        sx={{ '& > *': { borderBottom: 'unset' } }}
        onClick={() => onRowClick()}
      >
        <TableCell component='th' scope='row'>
          {index + 1}
        </TableCell>
        <TableCell>{name.official}</TableCell>
        <TableCell align='right'>{name.common}</TableCell>
        <TableCell align='right'>{cca2}</TableCell>
        <TableCell align='right'>{capital}</TableCell>
        <TableCell align='right'>{region}</TableCell>
        <TableCell align='right'>{subregion}</TableCell>
        <TableCell align='right'>
          <ul>
            {languages ? (
              Object.keys(languages).map((language, index) => (
                <li key={index}>{language}</li>
              ))
            ) : (
              <span>Not defined</span>
            )}
          </ul>
        </TableCell>
        <TableCell>
          <IconButton aria-label='expand row' size='small'>
            {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <CountryDetails isOpen={isOpen} country={country} />
    </>
  );
};
