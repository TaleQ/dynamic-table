import { useState } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { BookDetails } from '../BookDetails/BookDetails';
import { useDispatch } from 'react-redux';
import { toggleIsDetailsShown } from '../../../redux/booksSlice';

export const BooksTableRow = ({ book, index }) => {
  const [isOpen, setIsOpen] = useState();
  const dispatch = useDispatch();
  const onRowClick = () => {
    dispatch(toggleIsDetailsShown(!isOpen));
    setIsOpen(!isOpen);
  };
  const {
    title = 'Not defined',
    language = 'Not defined',
    pageCount = 'Not defined',
    previewLink = 'Not defined',
    authors,
  } = book.volumeInfo;

  return (
    <>
      <TableRow
        selected={isOpen}
        sx={{ '& > *': { borderBottom: 'unset' } }}
        onClick={() => onRowClick(book)}
      >
        <TableCell component='th' scope='row'>
          {index + 1}
        </TableCell>
        <TableCell>{title}</TableCell>
        <TableCell align='right'>{book.id}</TableCell>
        <TableCell align='right'>{book.kind}</TableCell>
        <TableCell align='right'>
          {authors ? book.volumeInfo.authors.join(', ') : 'Not defined'}
        </TableCell>
        <TableCell align='right'>{language}</TableCell>
        <TableCell align='right'>{pageCount}</TableCell>
        <TableCell align='right'>
          <a
            href={previewLink}
            target='_blank'
            rel='noopener noreferrer nofollow'
          >
            Preview
          </a>
        </TableCell>
        <TableCell>
          <IconButton aria-label='expand row' size='small'>
            {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <BookDetails isOpen={isOpen} book={book} />
    </>
  );
};
