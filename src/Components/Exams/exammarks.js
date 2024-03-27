import React, { useEffect, useState } from 'react';
import { fetchSectionStudent, studentSelector } from '../../api/student';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { Box, Breadcrumbs, TablePagination, TextField, Typography, Modal } from '@mui/material';
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { examsSelector, fetchOneExams } from '../../api/exams';
import { createonetofourth, fetchSectionStudentsMarks, onetofourthSelector } from '../../api/onetofourth';
import { createfifthtotenth, fetchSectionStudentsMark, fifthtotenthSelector } from '../../api/fifthtotenth';


export default function Exammarks() {


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '1px solid #43468B',
    boxShadow: 2,
    p: 2,
  }; 



  const dispatch = useDispatch();
  const { section_student } = useSelector(studentSelector);
  const {current_exams} = useSelector(examsSelector)
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const [marksData, setMarksData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const { sectionId, examId , subjectName, year } = useParams();
  const {student_marks}= useSelector(onetofourthSelector)
  const {student_mark}= useSelector(fifthtotenthSelector)
  const [open, setOpen] = React.useState(false);
  const [isCheckboxSelected, setIsCheckboxSelected] = useState(false);
  const [dataSubmitted, setDataSubmitted] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loading, setLoading] = useState(true)

console.log(dataSubmitted)

  const sectionStudentCopy = [...section_student];
  sectionStudentCopy.sort((a, b) => a?.personal_details?.full_name.localeCompare(b?.personal_details?.full_name));


  console.log(sectionId)
  console.log(examId)
  console.log(marksData);
  console.log(current_exams);
  console.log(student_mark)
  console.log(student_marks)

  useEffect(() => {
    dispatch(fetchSectionStudent(sectionId, year));
    dispatch(fetchOneExams(examId))
  }, [sectionId]);



  useEffect(() => {
    const className = current_exams?.class?.class_name;
    const fetchData = async () => {
    if (['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4'].includes(className)) {
      await dispatch(fetchSectionStudentsMarks(sectionId, year));
      setLoading(false)
    } else {
      await dispatch(fetchSectionStudentsMark(sectionId, year));
      setLoading(false)
    }};  
    if (sectionId !== null) {
      fetchData();}
    }, [sectionId, current_exams?.class?.class_name]);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


    const handleChange = (e, studentId) => {
    const { name, value } = e.target;

    console.log(name)
    
    let setValue = parseFloat(value);

    if(value === "AB") {
      setValue = 111;
    }

    console.log(setValue)

    const parsedValue = parseFloat(setValue);
    const updatedMarksData = marksData.slice();
    const studentIndex = updatedMarksData.findIndex(data => data?.studentId === studentId);
  
    if (studentIndex === -1) {
      const newStudentData = {
        studentId: studentId,
        term: current_exams?.term,
        subject_name: subjectName,
        assessment_name: current_exams?.type,
        marks: name === 'marks' ? parsedValue : 0,
        grade: ''
      };
      updatedMarksData.push(newStudentData);
    } else {
      const studentData = updatedMarksData[studentIndex];
      studentData[name] = name === 'marks' ? parsedValue : value;

      console.log(studentData)

      let gradingScales;

      if (['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4'].includes(current_exams?.class?.class_name)) {
        gradingScales = {
          FA1: { maxMarks: 25, grades: { 'A+': 22, 'A': 19, 'B+': 17, 'B': 14, 'C+': 11, 'C': 8, 'D+': 7, 'D': 3,'E': 1,'NT':0, 'AB': 111  } },
          FA2: { maxMarks: 25, grades: { 'A+': 22, 'A': 19, 'B+': 17, 'B': 14, 'C+': 11, 'C': 8, 'D+': 7, 'D': 3,'E': 1,'NT':0, 'AB': 111  } },
          SA1: { maxMarks: 50, grades: { 'A+': 44, 'A': 39, 'B+': 33, 'B': 28, 'C+': 22, 'C': 17, 'D+': 11,'D': 6,'E': 1,'NT':0, 'AB': 111   } },
          TERM1: { maxMarks: 100, grades: { 'A+': 91, 'A': 81, 'B+': 71, 'B': 61, 'C+': 51, 'C': 41, 'D+': 32,'D': 20,'E': 1,'NT':0, 'AB': 111  } },
      
          FA3: { maxMarks: 25, grades: { 'A+': 22, 'A': 19, 'B+': 17, 'B': 14, 'C+': 11, 'C': 8, 'D+': 7, 'D': 3, 'E': 1,'NT':0, 'AB': 111  } },
          FA4: { maxMarks: 25, grades: { 'A+': 22, 'A': 19, 'B+': 17, 'B': 14, 'C+': 11, 'C': 8, 'D+': 7, 'D': 3,'E': 1,'NT':0, 'AB': 111 } },
          SA2: { maxMarks: 50, grades: { 'A+': 44, 'A': 39, 'B+': 33, 'B': 28, 'C+': 22, 'C': 17, 'D+': 11,'D': 6,'E': 1,'NT':0  } },
          TERM2: { maxMarks: 100, grades: { 'A+': 91, 'A': 81, 'B+': 71, 'B': 61, 'C+': 51, 'C': 41, 'D+': 32,'D': 20,'E': 1,'NT':0 } },
      
          FA5: { maxMarks: 25, grades: { 'A+': 22, 'A': 19, 'B+': 17, 'B': 14, 'C+': 11, 'C': 8, 'D+': 7, 'D': 3,'E': 1,'NT':0, 'AB': 111  } },
          FA6: { maxMarks: 25, grades: { 'A+': 22, 'A': 19, 'B+': 17, 'B': 14, 'C+': 11, 'C': 8, 'D+': 7, 'D': 3,'E': 1,'NT':0, 'AB': 111  } },
          SA3: { maxMarks: 50, grades: { 'A+': 44, 'A': 39, 'B+': 33, 'B': 28, 'C+': 22, 'C': 17, 'D+': 11,'D': 6,'E': 1,'NT':0, 'AB': 111  } },
          TERM3: { maxMarks: 100, grades: { 'A+': 91, 'A': 81, 'B+': 71, 'B': 61, 'C+': 51, 'C': 41, 'D+': 32,'D': 20,'E': 1,'NT':0, 'AB': 111 } }
          };
      } else {
        gradingScales = {
          FA1: { maxMarks: 10, grades: { 'A+': 8, 'A': 6, 'B+': 4, 'B': 2, 'C': 1,'NT':0 } },
          FA2: { maxMarks: 10, grades: { 'A+': 8, 'A': 6, 'B+': 4, 'B': 2, 'C': 1,'NT':0} },
          SA1: { maxMarks: 30, grades: { 'A+': 27, 'A': 21, 'B+': 15, 'B': 9, 'C': 1,'NT':0, 'AB': 111  } },
          TERM1: { maxMarks: 100, grades: { 'A+': 90, 'A': 70, 'B+': 50, 'B': 30, 'C': 1,'NT':0 } }, 
          FA3: { maxMarks: 10, grades: { 'A+': 8, 'A': 6, 'B+': 4, 'B': 2, 'C': 1,'NT':0 } },
          FA4: { maxMarks: 10, grades: { 'A+': 8, 'A': 6, 'B+': 4, 'B': 2, 'C': 1,'NT':0} },
          SA2: { maxMarks: 30, grades: { 'A+': 27, 'A': 21, 'B+': 15, 'B': 9, 'C': 1,'NT':0 ,'AB': 111 } },
          TERM2: { maxMarks: 100, grades: { 'A+': 90, 'A': 70, 'B+': 50, 'B': 30, 'C': 1,'NT':0  } }, 
          FA5: { maxMarks: 10, grades: { 'A+': 8, 'A': 6, 'B+': 4, 'B': 2, 'C': 1,'NT':0 } },
          FA6: { maxMarks: 10, grades: { 'A+': 8, 'A': 6, 'B+': 4, 'B': 2, 'C': 1,'NT':0 } },
          SA3: { maxMarks: 30, grades: { 'A+': 27, 'A': 21, 'B+': 15, 'B': 9, 'C': 1,'NT':0 , 'AB': 111  } },
          TERM3: { maxMarks: 100, grades: {'A+': 90, 'A': 70, 'B+': 50, 'B': 30, 'C': 1,'NT':0  } }
      }
    }
      

    const gradingScale = gradingScales[current_exams?.type];


    if (gradingScale && parsedValue >= 0 && parsedValue <= gradingScale.maxMarks) {
    for (const [grade, threshold] of Object.entries(gradingScale.grades)) {
    if (parsedValue >= threshold) {
        studentData.grade = grade;
        break;
        }}
    } else if (studentData.marks === 111){
      studentData.grade = "AB"; 
    } else  {
      studentData.grade = <span className='text-red-500 text-xs'>Please provide proper marks</span>;
    }
  }  
    setMarksData(updatedMarksData);
};
  
      const termToFilter = current_exams?.term; 
      const typeToFilter = current_exams?.type; 
      const subjectNameToFilter = subjectName;
      const studentDataArray = ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4'].includes(current_exams?.class?.class_name) ? student_marks : student_mark;

      console.log(studentDataArray)

      const filteredData = studentDataArray.map((studentData) => {

      console.log(studentData)

      const { subjectmarks, student,  section, } = studentData;

      console.log(student)


      const termData = subjectmarks[termToFilter];
      if (termData) {
      const subjectData = termData[subjectNameToFilter];
      if (subjectData) {
      const typeData = subjectData[typeToFilter];
      if (typeData) {
      const marks = typeData;     
      return {
      studentDetails: student, 
      sectionDetails: section, 
      marks,         
      };
      }
      }
    }
      return null;
      }).filter((data) => data !== null);
      

      console.log(filteredData)


      const filteredStudentCopy = [...filteredData];
      filteredStudentCopy.sort((a, b) => a?.studentDetails?.personal_details?.full_name?.localeCompare(b?.studentDetails?.personal_details?.full_name));

      console.log(filteredStudentCopy)

      const handleEdit = (studentIndex) => {
        setEditingIndex(studentIndex);
      };

      const handleOutsideClick = () => {
       setEditingIndex(null);
       };
      
  
    const handleSubmit = () => {
    const Studentmarks = {
          studentData: marksData,
          class: current_exams?.class?._id,
          section: sectionId,
        };
      
    const className = current_exams?.class?.class_name;

   console.log(className)

    const actionToDispatch = className === 'Grade 1' || className === 'Grade 2' || className === 'Grade 3' || className === 'Grade 4'
          ? createonetofourth(Studentmarks, sectionId, year): createfifthtotenth(Studentmarks, sectionId, year); 
          dispatch(actionToDispatch);
          setEditingIndex(null);
          };


    const handleFinishSubmit = () => {
          setDataSubmitted(true);
          };


  const buttonStyle = {
    marginTop:'60px',
    width:'170px',
    background:'#43468B'
    
  };

  const theme = createTheme({
    overrides: {
    MuiInputBase: {
    input: {
    padding: '4px 6px',
    height: '16px', 
    },
    },
    },
  });


  return (
  <ThemeProvider theme={theme}>
  <Box mb={1} sx={{display:'flex', gap:'4px'}}>
  <Typography variant='h6'>{current_exams?.class?.class_name} -</Typography>
  <Typography variant='h6'>{current_exams?.term} - </Typography>
  <Typography variant='h6'>{current_exams?.type} - </Typography>
  <Typography variant='h6'>{subjectName} </Typography>
  </Box>

 <div className='flex justify-between'>
<div className='mb-8'>
<Breadcrumbs  aria-label="breadcrumb">
  <Link underline="hover" color="inherit" to='/exams'>
    Home
  </Link>
  <Link underline="hover" color="inherit" to='/exams'>
    Exams
  </Link>
  </Breadcrumbs>

  </div>
    

    {/* <Box>
    {current_exams?.type === 'FA1' && (
    <Typography >Note: Maximum marks is 25</Typography>
    )}
    {current_exams?.type === 'FA2' && (
    <Typography >Note: Maximum marks is 25</Typography>
    )}
    {current_exams?.type === 'SA1' && (
    <Typography >Note: Maximum marks is 50</Typography>
    )}
    {current_exams?.type === 'TERM1' && (
    <Typography >Note: Maximum marks is 100</Typography>
    )}
    </Box> */}


<Box>
  {(['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4'].includes(current_exams?.class?.class_name) &&
    (current_exams?.type === 'FA1' ||
      current_exams?.type === 'FA2' ||
      current_exams?.type === 'FA3' ||
      current_exams?.type === 'FA4' ||
      current_exams?.type === 'FA5' ||
      current_exams?.type === 'FA6')) && (
    <Typography>Note: Maximum marks is 25</Typography>
  )}
  {(['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4'].includes(current_exams?.class?.class_name) &&
    (current_exams?.type === 'SA1' ||
      current_exams?.type === 'SA2' ||
      current_exams?.type === 'SA3')) && (
    <Typography>Note: Maximum marks is 50</Typography>
  )}
  {(['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4'].includes(current_exams?.class?.class_name) &&
    (current_exams?.type === 'TERM1' ||
      current_exams?.type === 'TERM2' ||
      current_exams?.type === 'TERM3')) && (
    <Typography>Note: Maximum marks is 100</Typography>
  )}
  {(['Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'].includes(current_exams?.class?.class_name) &&
    (current_exams?.type === 'FA1' ||
      current_exams?.type === 'FA2' ||
      current_exams?.type === 'FA3' ||
      current_exams?.type === 'FA4' ||
      current_exams?.type === 'FA5' ||
      current_exams?.type === 'FA6')) && (
    <Typography>Note: Maximum marks is 10</Typography>
  )}

{(['Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'].includes(current_exams?.class?.class_name) &&
    (current_exams?.type === 'SA1' ||
      current_exams?.type === 'SA2' ||
      current_exams?.type === 'SA3')) && (
    <Typography>Note: Maximum marks is 30</Typography>
  )}
   {(['Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'].includes(current_exams?.class?.class_name) &&
    (current_exams?.type === 'TERM1' ||
      current_exams?.type === 'TERM2' ||
      current_exams?.type === 'TERM3')) && (
    <Typography>Note: Maximum marks is 100</Typography>
  )}
</Box>



    </div> 

  

      <TableContainer  component={Paper} >
      <Table >
      <TableHead style={{background:'#43468B'}}>
      <TableRow>
      <TableCell>Sl No.</TableCell>
      <TableCell>Register Number</TableCell>
      <TableCell>Student Name</TableCell>
      <TableCell>Marks</TableCell>
      <TableCell>Grade</TableCell>
      {/* <TableCell>Status</TableCell> */}
      </TableRow>
      </TableHead>

      {filteredStudentCopy?.some((item) => item?.marks?.marks && item?.marks?.grade) ? (
      <TableBody>
      {filteredStudentCopy?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)?.map((item, index) => (


      <TableRow key={item.id}>
      <TableCell style={{ marginLeft: '10px', width: '10%' }}>{index + 1}</TableCell>
      <TableCell style={{ width: '20%' }}>{item?.studentDetails?.joining_details?.register_number}</TableCell>
      <TableCell style={{ width: '20%' }}>{item?.studentDetails?.personal_details?.full_name}</TableCell>
      <TableCell>
      {editingIndex === index && !dataSubmitted ? (
      <TextField
      name="marks"
      onChange={(e) => handleChange(e, item?.studentDetails?._id)}
      size="small"
      style={{ width: '150px' }}
      />
      ) : (
      <span
      style={{ cursor: 'pointer' }}
      onClick={() => handleEdit(index)}
      >
      {item.marks.marks === 111 ? 'AB' : item.marks.marks }
      {console.log(item.marks.marks)}

     </span>
     )}
     </TableCell>
     <TableCell>
     {editingIndex === index && !dataSubmitted ? (
    <div>
    {marksData.find((data) => data.studentId === item?.studentDetails?._id)?.grade}
    <Button style={{background:'#43468B', marginLeft:'40px', color:'#fff'}} onClick={() => handleSubmit(index)}>Update</Button>
    </div>
    ) : (
    <span
    style={{ cursor: 'pointer' }}
    onClick={() => handleEdit(index)}
    >
    {item.marks.grade}
    </span>
    )}
    </TableCell>
    </TableRow>
    ))}
    </TableBody>
    ) : (
    <TableBody>
    {sectionStudentCopy?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)?.map((item, index) => (
    <TableRow style={{ cursor: 'pointer' }} key={item.id}>
    <TableCell style={{ marginLeft: '10px', width: '10%' }}>{index + 1}</TableCell>
    <TableCell style={{ width: '20%' }}>{item?.joining_details?.register_number}</TableCell>
    <TableCell style={{ width: '20%' }}>{item?.personal_details?.full_name}</TableCell>
    <TableCell style={{ width: '20%' }}>
    <TextField
   // label="enter marks"
     name="marks"
     value={item.marks === 111 ? 'AB' : item.marks }
     onChange={(e) => handleChange(e, item._id)}
     size="small"
     style={{ width: '150px' }}
     InputProps={{ inputProps: { maxLength: 4 } }}
     error={item.marks > 125 || item.marks < 0}
     helperText={
     item.marks > 125 || item.marks < 0 ? 'Please provide marks between 0 and 100' : ''
     }/>
    </TableCell>
    <TableCell>
    {marksData?.find((data) => data?.studentId === item._id)?.grade}
    </TableCell>
    </TableRow>
    ))}
    </TableBody>
    )}
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

<Box style={{ display: 'flex', gap: '40px', justifyContent: 'flex-end', marginRight: '5%' }}>
  <Button  
    onClick={handleSubmit}
    type="submit"
    variant="contained"
    color="primary"
    style={buttonStyle}
    disabled={!marksData?.every((item) => item?.marks && item?.marks)}
  >
    Save draft
  </Button>
</Box>
    </ThemeProvider>
  );
}
