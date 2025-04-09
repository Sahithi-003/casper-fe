import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Grid, Pagination, styled, TablePagination } from '@mui/material';
import theme from '../../../core-utils/theme';
import { useEffect, useState } from 'react';
import { getSavedDocs } from '../../../apis/library';
import {SavedDocumentsTable} from '../../../utils/types';
import { useHistory } from 'react-router-dom';
import { dateFormatter } from '../../../core-utils/timeFormat';

const StyledCell = styled(TableCell)(() => ({
  paddingLeft:'7%',
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.structural.structural_100,
    color: theme.palette.text_color.medium_emphasis,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledCell1 = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.structural.structural_100,
    color: theme.palette.text_color.medium_emphasis,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableCell = styled(TableCell)(() => ({
  paddingLeft:'7%',
  cursor: 'pointer',
}));

function createData(name: string, createdBy: string, modified: string) {
  return { name, createdBy, modified };
}

export const rows = [
  createData(
    'Harnessing the Power of the Sun: A Guide to Solar Panel Technology',
    'Floyd Miles',
    'Mar 29, 2023',
  ),
  createData(
    'Maximizing Your Solar Investment',
    'Leslie Alexander',
    'Mar 28, 2023',
  ),
  createData('Solar Panel Maintenance 101', 'Brooklyn Simmons', 'Mar 26, 2023'),
  createData(
    'The Future is Bright- Trends in Solar Panel Innovation',
    'Wade Warren',
    'Mar 24, 2023',
  ),
  createData(
    'Solar Panels for the Environmentally Conscious Homeowner',
    'Cody Fisher',
    'Mar 18, 2023',
  ),
  createData(
    'Breaking Down the Cost of Solar',
    'Dianne Russell',
    'Mar 17, 2023',
  ),
  createData(
    'Maximizing Your Solar Investment:',
    'Guy Hawkins',
    'Mar 16, 2023',
  ),
  createData(
    'The Future is Bright: Trends in Solar Panel Innovation',
    'Marvin McKinney',
    'Mar 16, 2023',
  ),
  createData(
    'The Future is Bright-Trends in Solar Panel Inovation',
    'Marvin McKinney',
    'Mar 16, 2023',
  ),
  createData('Untitled', 'Jane Cooper', 'Mar 11, 2023'),
];

export default function SavedDocsTable() {
  const DEFAULT_ROWS_PER_PAGE = 10;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(DEFAULT_ROWS_PER_PAGE);
  const [saved, setSaved] = useState<SavedDocumentsTable[]>([]);
  const history = useHistory();
  const handleNavigate = (id: string) => {
    history.push(`/viewpage/${id}`)
  }
  useEffect(() => {
    getSavedDocs().then((res) => {
      setSaved(res);
    });
  }, []);
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleChange = (event: any, value: any) => {
    setPage(value - 1);
    handleChangePage(event, value - 1);
  };
  return (
    <Box>
      <TableContainer component={Paper}>
        {saved.length!==0 && (<Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <StyledCell1>Name</StyledCell1>
              <StyledCell align="left">Created By</StyledCell>
              <StyledCell align="left">Modified</StyledCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? saved.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : saved
            ).map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                onClick={() => handleNavigate(row.id)}
              >
                <TableCell component="th" scope="row" sx={{cursor:'pointer'}}>
                  {row.fileName}
                </TableCell>
                <StyledTableCell align="left">David</StyledTableCell>
                <StyledTableCell align="left">{dateFormatter(row.modifiedAt!)}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>)}
        <Grid container direction="row" justifyContent="space-between">
          <Grid item>
            <Grid container direction="row">
              <Grid item paddingTop="14px" paddingLeft="5px">
                {/* <Grid container>
                  <Grid item>
                    <TypographyComponent variant="caption2">
                      {element.toString()}
                    </TypographyComponent>
                  </Grid>
                  <Grid item>
                    <TypographyComponent
                      variant="caption2"
                      color={theme.palette.text_color.low_emphasis}
                    >
                      /
                    </TypographyComponent>
                  </Grid>
                  <Grid item>
                    <TypographyComponent
                      variant="caption2"
                      color={theme.palette.text_color.low_emphasis}
                    >
                      {rows.length.toString()}
                    </TypographyComponent>
                  </Grid>
                </Grid> */}
              </Grid>
              <Grid item>
                <TablePagination
                  rowsPerPageOptions={[10, 15, 20]}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  labelDisplayedRows={() => ''}
                  nextIconButtonProps={{ style: { display: 'none' } }}
                  backIconButtonProps={{ style: { display: 'none' } }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item paddingTop="8px" paddingRight='7%'>
            <Pagination
              count={Math.ceil(saved.length / rowsPerPage)}
              page={page + 1}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </TableContainer>
    </Box>
  );
}
