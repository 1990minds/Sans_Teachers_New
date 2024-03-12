import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import { Link, useNavigate } from "react-router-dom";
import { Grid, TablePagination, } from "@mui/material";
import { fetchAllExams, examsSelector } from "../../api/exams";
import { useDispatch, useSelector } from "react-redux";
import { Button } from '@mui/material';
import './index.css';
import { assignteacherdataSelector, fetchIndividualTeacherData } from "../../api/assignteacherdata";
import { Typography } from "@material-ui/core";
import {

  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import dayjs from "dayjs";

const ExamsTable = () => {

  const dispatch = useDispatch()

  const { all_exams } = useSelector(examsSelector)
  const [filteredData, setFilteredData] = useState([]);
  const [coScholasticData, setCoScholasticData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const nav = useNavigate()
  const teacher = localStorage.getItem('teacher')

  // const {teacher} = useSelector(teacherSelector)
  const { all_assignteacherdata } = useSelector(assignteacherdataSelector)
  const [mergedData, setMergedData] = useState([]);
  const [expandedRow, setExpandedRow] = useState(null);
  const [selectedRowData, setSelectedRowData] = useState(null);

  console.log(mergedData)
  console.log(filteredData)
  console.log(coScholasticData)

  console.log(selectedRowData)
  useEffect(() => {
    dispatch(fetchIndividualTeacherData(teacher))
  }, [teacher])

  useEffect(() => {
    dispatch(fetchAllExams());
  }, [dispatch])


  const handleTableRowClick = (item) => {
    console.log(item)
    const url = `/exammarks/${selectedRowData?.section?._id}/${item?._id}/${encodeURIComponent(selectedRowData?.subject_name)}/${item?.year}`;
    nav(url);
  };



  const handleTableRowClick1 = (item) => {
    console.log(item)
    const url = `/studentlist/${encodeURIComponent(item?.term)}/${item?.year}/${selectedRowData?.section?._id}`;
    nav(url);
  };


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 6));
    setPage(0);
  };


  useEffect(() => {
    console.log('all_exams:', all_exams);
    console.log('all_assignteacherdata:', all_assignteacherdata);

    if (all_exams && all_assignteacherdata) {
      const mergedData = all_assignteacherdata.map((teacherData) => {
        const matchingExams = all_exams.filter((exam) => {
          return (
            exam.class &&
            teacherData.class &&
            exam.class._id === teacherData.class._id
          );
        });

        return {
          ...teacherData,
          matchingExams: matchingExams || [],
          countMatchingExams: matchingExams.length,
        };
      });

      setMergedData(mergedData);
      console.log('mergedData:', mergedData);

      const filtered = mergedData.filter((item) => item.subject_name !== 'CO-SCHOLASTIC');
      setFilteredData(filtered);

      // Filter items with subject_name === 'CO-SCHOLASTIC'
      const coScholastic = mergedData.filter((item) => item.subject_name === 'CO-SCHOLASTIC');
      setCoScholasticData(coScholastic);
    }
  }, [all_exams, all_assignteacherdata]);



  const handleRowClick = (item) => {
    if (expandedRow === item._id) {
      setExpandedRow(null);
    } else {
      setExpandedRow(item._id);
    }

    setSelectedRowData(item);

  };


  return (
    <div>

      <Typography variant="h6" >Teacher Dashboard</Typography>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '30px', marginTop: '20px' }}>
        <Grid container spacing={2} >
          <Grid item xs={6} sm={2}>
            <Typography variant="h6" sx={{ backgroundColor: '#ffff', color: '#292F8F' }} >
              Exams
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div>

        <TableContainer component={Paper}>
          <Table>
            <TableHead style={{ background: '#43468B' }}>
              <TableRow>
                <TableCell>Sl No.</TableCell>
                {/* <TableCell>Academic Year</TableCell> */}
                <TableCell>Grade</TableCell>
                <TableCell>Section</TableCell>
                <TableCell>Subject</TableCell>
                {/* <TableCell>No. Exams</TableCell> */}
                <TableCell>Created At</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)?.map((item, index) => (
                <React.Fragment key={item.id}>
                  <TableRow style={{ cursor: 'pointer' }} onClick={() => handleRowClick(item)}>
                    <TableCell>{index + 1}</TableCell>
                    {/* <TableCell>{item?.matchingExams?.year}</TableCell> */}
                    <TableCell>{item?.class?.class_name}</TableCell>
                    <TableCell>{item?.section?.section_name}</TableCell>
                    <TableCell>{item?.subject_name}</TableCell>
                    {/* <TableCell>{item?.countMatchingExams}</TableCell> */}
                    <TableCell>{item.createdAt ? dayjs(item.createdAt).format('DD-MM-YYYY') : ''}</TableCell>
                  </TableRow>
                  {expandedRow === item._id && (
                    <TableRow>
                      <TableCell colSpan={5}>
                        <Accordion>
                          {/* <AccordionSummary>
      <Typography> Click here</Typography>
      </AccordionSummary> */}
                          <AccordionDetails>
                            <TableContainer component={Paper}>
                              <Table>
                                <TableHead style={{ background: '#6699C9' }}>
                                  <TableRow>
                                    <TableCell>Sl No.</TableCell>
                                    <TableCell>Academic Year</TableCell>
                                    <TableCell>Grade</TableCell>
                                    <TableCell>Term</TableCell>
                                    <TableCell>Type</TableCell>
                                    <TableCell>Created At</TableCell>
                                    {/* <TableCell>Status</TableCell> */}
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {item?.matchingExams?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)?.map((item, index) => (
                                    <TableRow style={{ cursor: 'pointer' }} key={item.id} onClick={() => handleTableRowClick(item)}>
                                      <TableCell>{index + 1}</TableCell>
                                      <TableCell>{item?.year}</TableCell>
                                      <TableCell>{item?.class?.class_name}</TableCell>
                                      <TableCell>{item?.term}</TableCell>
                                      <TableCell>{item?.type}</TableCell>
                                      <TableCell>{item?.createdAt ? dayjs(item.createdAt).format('DD-MM-YYYY') : ''}</TableCell>
                                      {/* <TableCell>{item?.status}</TableCell> */}
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                              <TablePagination
                                component="div"
                                count={item?.matchingExams?.length}
                                page={page}
                                onPageChange={handleChangePage}
                                rowsPerPage={rowsPerPage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                              />
                            </TableContainer>
                          </AccordionDetails>
                        </Accordion>
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={filteredData?.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>





      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '30px', marginTop: '20px' }}>
        <Grid container spacing={2} >
          <Grid item xs={6} sm={2}>
            <Typography variant="h6" sx={{ backgroundColor: '#ffff', color: '#292F8F' }} >
              Co-scholastic
            </Typography>
          </Grid>
        </Grid>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead style={{ background: '#43468B' }}>
            <TableRow>
              <TableCell>Sl No.</TableCell>
              <TableCell>Grade </TableCell>
              <TableCell>Section</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Created At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coScholasticData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)?.map((item, index) => (
              <React.Fragment key={item.id}>
                <TableRow style={{ cursor: 'pointer' }} key={item.id} onClick={() => handleRowClick(item)}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item?.class?.class_name}</TableCell>
                  <TableCell>{item?.section?.section_name}</TableCell>
                  <TableCell>{item?.subject_name}</TableCell>
                  <TableCell>{item.createdAt ? dayjs(item.createdAt).format('DD-MM-YYYY') : ''}</TableCell>
                </TableRow>

                {expandedRow === item._id && (
                  <TableRow>
                    <TableCell colSpan={5}>
                      <Accordion>
                        {/* <AccordionSummary>
        <Typography> This Class Exams</Typography>
        </AccordionSummary> */}
                        <AccordionDetails>
                          <TableContainer component={Paper}>
                            <Table>
                              <TableHead style={{ background: '#6699C9' }}>
                                <TableRow>
                                  <TableCell>Sl No.</TableCell>
                                  <TableCell>Academic Year</TableCell>
                                  <TableCell>Grade</TableCell>
                                  <TableCell>Term</TableCell>
                                  {/* <TableCell>Type</TableCell> */}
                                  <TableCell>Created At</TableCell>
                                  {/* <TableCell>Status</TableCell> */}
                                </TableRow>
                              </TableHead>

                              {/* <TableBody>
        {item.matchingExams.some((exam) => exam.type === 'FA1') ? (
        item.matchingExams
        .filter((exam) => exam.type === 'FA1')
       .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
       .map((exam, index) => (
      <TableRow style={{ cursor: 'pointer' }} key={exam.id} onClick={() => handleTableRowClick1(exam)}>
        <TableCell>{index + 1}</TableCell>
        <TableCell>{exam?.year}</TableCell>
        <TableCell>{exam?.class?.class_name}</TableCell>
        <TableCell>{exam?.term}</TableCell>
        <TableCell>{exam?.type}</TableCell>   
        <TableCell>{exam.createdAt? dayjs(exam.createdAt).format('DD-MM-YYYY'): ''}</TableCell>  
    
      </TableRow>
    ))
) : (
  <TableRow>
    <TableCell  colSpan={5}> <span className="text-center text-red-500">No 'TERM EXAMS' Found </span></TableCell>
  </TableRow>
)}
                                </TableBody> */}
                              {/* new code as per req */}
                              <TableBody>
                                {item.matchingExams.some((exam) => ['FA1', 'FA3', 'FA5'].includes(exam.type)) ? (
                                  item.matchingExams
                                    .filter((exam) => ['FA1', 'FA3', 'FA5'].includes(exam.type))
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((exam, index) => (
                                      <TableRow style={{ cursor: 'pointer' }} key={exam.id} onClick={() => handleTableRowClick1(exam)}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{exam?.year}</TableCell>
                                        <TableCell>{exam?.class?.class_name}</TableCell>
                                        <TableCell>{exam?.term}</TableCell>
                                        {/* <TableCell>{exam?.type}</TableCell> */}
                                        <TableCell>{exam.createdAt ? dayjs(exam.createdAt).format('DD-MM-YYYY') : ''}</TableCell>
                                        {/* <TableCell>{exam?.status}</TableCell> */}
                                      </TableRow>
                                    ))
                                ) : (
                                  <TableRow>
                                    <TableCell colSpan={5}>
                                      <span className="text-center text-red-500">No 'TERM EXAMS' Found</span>
                                    </TableCell>
                                  </TableRow>
                                )}
                              </TableBody>





                            </Table>
                            <TablePagination
                              component="div"
                              count={item.matchingExams?.length}
                              page={page}
                              onPageChange={handleChangePage}
                              rowsPerPage={rowsPerPage}
                              onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                          </TableContainer>
                        </AccordionDetails>
                      </Accordion>
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={coScholasticData?.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>




  );
};
export default ExamsTable;
