import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleIsDetailsShown } from '../../../redux/countriesSlice';
import { useCountries } from '../../../hooks/useCountries';
import { CountryDetails } from '../CountryDetails/CountryDetails';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PropTypes from 'prop-types';

export const CountriesTableRow = ({ country, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDetailsShown } = useCountries();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isDetailsShown) {
      setIsOpen(false);
    }
  }, [isDetailsShown]);

  const { name, cca2, capital, region, subregion, languages } = country;

  const checkStringValue = (value) => {
    if (!value) {
      return 'Not defined';
    } else {
      return value;
    }
  };

  const isObjEmpty = (obj) => Object.keys(obj).length === 0;

  const onRowClick = () => {
    dispatch(toggleIsDetailsShown(!isOpen));
    setIsOpen(!isOpen);
  };

  return (
    <>
      <TableRow
        selected={isOpen}
        sx={{ '& > *': { borderBottom: 'unset' } }}
        onClick={() => onRowClick()}
      >
        <TableCell component='th' scope='row' align='center'>
          {index + 1}
        </TableCell>
        <TableCell align='left'>{checkStringValue(name.official)}</TableCell>
        <TableCell align='left'>{checkStringValue(name.common)}</TableCell>
        <TableCell align='left'>{checkStringValue(cca2)}</TableCell>
        <TableCell align='left'>
          {capital?.length ? capital[0] : 'Not defined'}
        </TableCell>
        <TableCell align='left'>{checkStringValue(region)}</TableCell>
        <TableCell align='left'>{checkStringValue(subregion)}</TableCell>
        <TableCell align='left'>
          {isObjEmpty(languages)
            ? 'Not defined'
            : Object.values(languages).join(', ')}
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

CountriesTableRow.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.shape({
      official: PropTypes.string,
      common: PropTypes.string,
    }),
    cca2: PropTypes.string,
    capital: PropTypes.arrayOf(PropTypes.string),
    region: PropTypes.string,
    subregion: PropTypes.string,
    languages: PropTypes.objectOf(PropTypes.string),
  }),
  index: PropTypes.number.isRequired,
};
