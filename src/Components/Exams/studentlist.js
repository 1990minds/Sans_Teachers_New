import { Breadcrumbs, Grid, TablePagination, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { fetchSectionStudent, studentSelector } from '../../api/student'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

export default function Studentlist() {


const {term, year, id} = useParams()
const {section_student} = useSelector(studentSelector)
const dispatch = useDispatch()
const [page, setPage] = useState(0);
const [rowsPerPage, setRowsPerPage] = useState(25);
const nav = useNavigate()
const sectionStudentCopy = [...section_student];
sectionStudentCopy.sort((a, b) => a?.personal_details?.full_name.localeCompare(b?.personal_details?.full_name));

console.log(term)
console.log(id)
console.log(section_student)

useEffect(()=>{
dispatch(fetchSectionStudent(id, year))
},[id, year])

const handleTableRowClick = (item) => {
  const className = section_student[0]?.joining_details?.class?.class_name;

  if (['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4'].includes(className)) {
    const url = `/coscholastic/${encodeURIComponent(term)}/${item?._id}`;
    nav(url);
  } else if (['Prep', 'Junior KG', 'Senior KG'].includes(className)) {
    const url = `/coscholasticpre/${encodeURIComponent(term)}/${item?._id}`;
    nav(url);
  } else {
    const url = `/coscholastichigh/${encodeURIComponent(term)}/${item?._id}`;
    nav(url);
  }
};


const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };



return (

<div>

   <div style={{ display: 'flex', justifyContent: 'flex-end' , marginBottom:'30px',marginTop:'20px' }}>
      <Grid container spacing={2} >

      <div >
   <Breadcrumbs  aria-label="breadcrumb">

    <Link underline="hover" color="inherit" to='/exams'>
    Exams
    </Link>

   <Typography underline="hover" color="inherit" >
    {section_student[0]?.joining_details?.class?.class_name}
   </Typography>
    <Typography underline="hover" color="inherit" >
    {section_student[0]?.joining_details?.section?.section_name}
    </Typography>
    <Typography underline="hover" color="inherit" >
     CO-SCHOLASTIC
    </Typography>
    </Breadcrumbs>

    </div>
      </Grid>
      </div>
  

      <div>

      <TableContainer component={Paper}>
  <Table>
    <TableHead style={{background:'#43468B'}}>
      <TableRow>
        <TableCell>Sl No.</TableCell>
        <TableCell>Register Name</TableCell>
        <TableCell>Student Name</TableCell>
        <TableCell>Grade</TableCell>
        <TableCell>Section</TableCell>
        {/* <TableCell>Status</TableCell> */}
      </TableRow>
    </TableHead>
    <TableBody>



      
    {sectionStudentCopy
  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  .map((item, index) => (
          <TableRow style={{ cursor: 'pointer' }} key={item.id} onClick={() => handleTableRowClick(item)}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{item?.joining_details?.register_number}</TableCell>
            <TableCell>{item?.personal_details?.full_name}</TableCell>
            <TableCell>{item?.joining_details?.class?.class_name}</TableCell>
            <TableCell>{item?.joining_details?.section?.section_name}</TableCell>
            {/* <TableCell>{item?.status}</TableCell> */}
          </TableRow>
        ))}
    </TableBody>
  </Table>
</TableContainer>
  <TablePagination
    component="div"
    count={section_student?.length}
    page={page}
    onPageChange={handleChangePage}
    rowsPerPage={rowsPerPage}
    onRowsPerPageChange={handleChangeRowsPerPage}
    />




  </div>
  </div>

  )
}
