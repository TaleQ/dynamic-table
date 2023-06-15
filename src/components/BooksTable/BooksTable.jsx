import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useBooks } from '../../hooks/useBooks';
import { BooksTableRow } from './BooksTableRow/BooksTableRow';

export const BooksTable = () => {
  const { books } = useBooks();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell>Number</TableCell>
            <TableCell>Book Title</TableCell>
            <TableCell align='right'>ID</TableCell>
            <TableCell align='right'>Kind</TableCell>
            <TableCell align='right'>Author</TableCell>
            <TableCell align='right'>Language</TableCell>
            <TableCell align='right'>PageCount</TableCell>
            <TableCell align='right'>Prewiev&nbsp;Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books?.map((book, index) => (
            <BooksTableRow key={book.id} book={book} index={index} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
