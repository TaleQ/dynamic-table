import '../CountriesTable.scss';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import SortByAlphaRoundedIcon from '@mui/icons-material/SortByAlpha';
import { useCountries } from '../../../hooks/useCountries';
import { useDispatch } from 'react-redux';
import { sortCountries } from '../../../redux/countriesSlice';
import { useState } from 'react';

export const CountriesTableHead = () => {
  const { countries } = useCountries();
  const [isAlphabetOrder, setIsAlphabetOrder] = useState(false);
  const dispatch = useDispatch();

  const onSortBtnClick = () => {
    if (!isAlphabetOrder) {
      const sortedCountries = [...countries].sort((a, b) =>
        a.name.official.localeCompare(b.name.official)
      );
      dispatch(sortCountries(sortedCountries));
      setIsAlphabetOrder(true);
    } else {
      const sortedCountries = [...countries].sort((a, b) =>
        b.name.official.localeCompare(a.name.official)
      );
      dispatch(sortCountries(sortedCountries));
      setIsAlphabetOrder(false);
    }
  };
  return (
    <TableHead>
      <TableRow>
        <TableCell align='left' sx={{ width: '5%' }}>
          Number
        </TableCell>
        <TableCell align='left' sx={{ width: '23%' }}>
          <span>Official name</span>
          <button className='sort-icon-btn' onClick={() => onSortBtnClick()}>
            <SortByAlphaRoundedIcon
              fontSize='large'
              sx={{
                width: '13px',
                height: '13px',
                fontSize: 'large',
                color: '#212121',
              }}
            />
          </button>
        </TableCell>
        <TableCell align='left' sx={{ width: '15%' }}>
          Common name
        </TableCell>
        <TableCell align='left' sx={{ width: '5%' }}>
          Code
        </TableCell>
        <TableCell align='left' sx={{ width: '10%' }}>
          Capital
        </TableCell>
        <TableCell align='left' sx={{ width: '10%' }}>
          Region
        </TableCell>
        <TableCell align='left' sx={{ width: '10%' }}>
          Subregion
        </TableCell>
        <TableCell align='left' sx={{ width: '17%' }}>
          Languages
        </TableCell>
        <TableCell sx={{ width: '5%' }}></TableCell>
      </TableRow>
    </TableHead>
  );
};
