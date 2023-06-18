import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export const CountriesTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align='left'>Number</TableCell>
        <TableCell align='left'>Official name</TableCell>
        <TableCell align='left'>Common name</TableCell>
        <TableCell align='left'>Country code</TableCell>
        <TableCell align='left'>Capital</TableCell>
        <TableCell align='left'>Region</TableCell>
        <TableCell align='left'>Subregion</TableCell>
        <TableCell align='left'>Languages</TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  );
};
