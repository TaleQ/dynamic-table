import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

export const BookDetails = ({ isOpen, book }) => {
  const {
    imageLinks,
    publisher = 'Not defined',
    publishedDate = 'Not defined',
    categories = ['No categories'],
    avarageRating = 'Not defined',
    authors = ['No authors'],
  } = book.volumeInfo;

  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={isOpen} timeout='auto' unmountOnExit>
          <Box sx={{ margin: 1 }}>
            <Typography variant='h6' gutterBottom component='div'>
              Book details
            </Typography>
            <Table size='small' aria-label='purchases'>
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell>Publisher</TableCell>
                  <TableCell>Publish date</TableCell>
                  <TableCell align='right'>Categories</TableCell>
                  <TableCell align='right'>Avarage Raiting</TableCell>
                  <TableCell align='right'>More books ot the author</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key={`${book.id}#details`}>
                  <TableCell component='th' scope='row'>
                    <img
                      src={imageLinks.smallThumbnail}
                      alt='Book poster'
                      width='100px'
                      height='160px'
                    />
                  </TableCell>
                  <TableCell>{publisher}</TableCell>
                  <TableCell>{publishedDate}</TableCell>
                  <TableCell align='right'>
                    <ul>
                      {categories?.map((category) => (
                        <li key={category}>{category}</li>
                      ))}
                    </ul>
                  </TableCell>
                  <TableCell align='right'>{avarageRating}</TableCell>
                  <TableCell>
                    {authors?.map((author) => (
                      <button type='button' key={author}>{`${author}`}</button>
                    ))}
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
