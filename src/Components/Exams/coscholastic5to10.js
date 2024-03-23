import { Box, Breadcrumbs, Button, Grid, Modal, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { fetchOneStudent, studentSelector } from '../../api/student'
import { useDispatch, useSelector } from 'react-redux'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from "../../Images/grade-02.png";
import { coscholastic5to10Selector, createcoscholastic5to10, fetchOneCoscholastic5to10, updateCoscholastic5to10 } from '../../api/coscholastic5to10'

export default function Coscholastic5to10() {

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

const {term, id} = useParams()
const {current_student} = useSelector(studentSelector)
const {current_coscholastic5to10} = useSelector(coscholastic5to10Selector)
const dispatch = useDispatch()
const [open, setOpen] = React.useState(false);
const [isCheckboxSelected, setIsCheckboxSelected] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
const nav = useNavigate()

const [scholasticData, setScholasticData] = useState({
  vocabulary_marks: "",
  vocabulary_grade: "",
  read_marks: "",
  read_grade: "",
  fluently_marks:"",
  fluently_grade: "",
  skills_marks: "",
  skills_grade:"",
  attentively_marks: "",
  attentively_grade: "",
  directions_marks: "",
  directions_grade: "",
  independently_marks: "",
  independently_grade: "",
  time_marks: "",
  time_grade: "",
  neatly_marks: "",
  neatly_grade:"",
  computer_marks: "",
  computer_grade: "",
  science_marks:"",
  science_grade: "",
  education_marks: "",
  education_grade: "",
  knowledge_marks: "",
  knowledge_grade: "",
  drawing_marks: "",
  drawing_grade: "",
  english_marks: "",
  english_grade: "",
  math_marks: "",
  math_grade: "",
  evs_marks: "",
  evs_grade: "",
  craft_marks: "",
  craft_grade: "",
  words_marks:"",
  words_grade:"",
  spelling_marks:"",
  spelling_grade:"",
  school_marks:"",
  school_grade:"",
  self_marks:"",
  self_grade:"",
  respect_marks:"",
  respect_grade:"",
  letters_marks:"",
  letters_grade:"",
  punctuation_marks:"",
  punctuation_grade:"",
  sentences_marks:"",
  sentences_grade:"",
  concept_marks:"",
  concept_grade:"",
  accuracy_marks:"",
  accuracy_grade:"",
  numerical_marks:"",
  numerical_grade:"",
  reading_english_marks:"",
  reading_english_grade:"",
  reading_kannada_marks:"",
  reading_kannada_grade:"",
  reading_hindi_marks:"",
  reading_hindi_grade:"",
  dictation_english_marks:"",
  dictation_english_grade:"",
  dictation_kannada_marks:"",
  dictation_kannada_grade:"",
  dictation_hindi_marks:"",
  dictation_hindi_grade:"",
  remarks:"",
  attendence:"",
  reading_total_marks: 0,
  reading_total_grade: '',
  work_skills_total_marks:0,
  work_skills_total_grade:'',
  specials_total_marks:0,
  specials_total_grade:'',
  project_activity_total_marks:0,
  project_activity_total_grade:'',
  spelling_total_marks:0,
  spelling_total_grade:'',
  social_skills_total_marks:0,
  social_skills_total_grade:'',
  written_expression_total_marks:0,
  written_expression_total_grade:'',
  vedic_maths_total_marks:0,
  vedic_maths_total_grade:'',
  Reading_total_marks:0,
  Reading_total_grade:'',
  Dictation_total_marks:0,
  Dictation_total_grade:'',


});

console.log(current_coscholastic5to10)
console.log(scholasticData)

const isAllFieldsFilled = () => {
  return Object.values(scholasticData)?.some((value) => value !== undefined && value !== null && value !== '');
};


useEffect(()=>{
dispatch(fetchOneStudent(id))
dispatch(fetchOneCoscholastic5to10(id))
},[id])



const handleChange = (event) => {
const { name, value } = event.target; 
  if (name === "remarks" || name === "attendence") {
    if (value.length <= 1500) {
      setScholasticData({
        ...scholasticData,
        [name]: value,
      });
    }
    return;
  }

  let grade = '';
  const numericValue = value.replace(/[^0-9.]/g, '');
  const marks = parseFloat(numericValue);
  
  if (!isNaN(marks) && marks >= 0 && marks <= 10) {
    if (marks >= 0 && marks <= 2) {
        grade = 'E';
    } else if (marks >= 2.1 && marks <= 4) {
        grade = 'D';
    }  else if (marks >= 4.1 && marks <= 6.0) {
        grade = 'C';
    } else if (marks >= 6.1 && marks <= 8.0) {
        grade = 'B';
    }  else if (marks >= 8.1 && marks <= 10) {
        grade = 'A';
    } else {
        grade = ' ';
    }
  } else if (isNaN(marks)) {
    grade = ' ';
  } else {
    grade = ' ';
  }

  setScholasticData({
    ...scholasticData,
    [name]: numericValue,
    [name.replace("_marks", "_grade")]: grade,
  });
};

const getBackgroundColor = (grade) => {
  if (grade === 'A') {
    return '#C756A1'; 
  } else if (grade === 'B') {
    return '#6C8CC8'; 
  } else if (grade === 'C') {
    return '#14A850';
  } else if (grade === 'D') {
    return '#D6CA6F';
  } else if (grade === 'E') {
    return '#F5821F';   
  } else if (grade === ' ') {
    return 'white';     
  } else {
    return 'white';
  }
};



useEffect(() => {



    if (current_coscholastic5to10) {

      const extractMarksAndGrade = (data, category, subcategory) => {
        const marks = data[0]?.[term]?.[category]?.[subcategory]?.marks;
        const grade = data[0]?.[term]?.[category]?.[subcategory]?.grade || "";
        return marks === 12 ? "AB" : marks === 11 ? "NT" : marks || "";
    };
  
    const extractTotalMarksAndGrade = (data, category, subcategory) => {
        const marks = data[0]?.[term]?.[category]?.[subcategory]?.marks ;
        const grade = data[0]?.[term]?.[category]?.[subcategory]?.grade || "";
        return marks === 12 ? "AB" : marks === 11 ? "NT" : marks || "";
    };

    setScholasticData({ 
      vocabulary_marks: extractMarksAndGrade(current_coscholastic5to10, "reading", "vocabulary"),
      vocabulary_grade: current_coscholastic5to10[0]?.[term]?.reading?.vocabulary?.grade || '',
      read_marks: extractMarksAndGrade(current_coscholastic5to10, "reading", "what_to_read"),
      read_grade: current_coscholastic5to10[0]?.[term]?.reading?.what_to_read?.grade || '',
      fluently_marks: extractMarksAndGrade(current_coscholastic5to10, "reading", "reads_fluently"),
      fluently_grade: current_coscholastic5to10[0]?.[term]?.reading?.reads_fluently?.grade || '',
      skills_marks: extractMarksAndGrade(current_coscholastic5to10, "reading", "phonic_skills"),
      skills_grade: current_coscholastic5to10[0]?.[term]?.reading?.phonic_skills?.grade || '',
      reading_total_marks: extractTotalMarksAndGrade(current_coscholastic5to10, "reading", "reading_total"),
      reading_total_grade: current_coscholastic5to10[0]?.[term]?.reading?.reading_total?.grade || '',

      attentively_marks: extractMarksAndGrade(current_coscholastic5to10, "work_skills", "listens_attentively"),
      attentively_grade: current_coscholastic5to10[0]?.[term]?.work_skills?.listens_attentively?.grade || '',
      directions_marks: extractMarksAndGrade(current_coscholastic5to10, "work_skills", "follows_directions"),
      directions_grade: current_coscholastic5to10[0]?.[term]?.work_skills?.follows_directions?.grade || '',
      independently_marks: extractMarksAndGrade(current_coscholastic5to10, "work_skills", "Work_well_independently"),
      independently_grade: current_coscholastic5to10[0]?.[term]?.work_skills?.Work_well_independently?.grade || '',
      time_marks: extractMarksAndGrade(current_coscholastic5to10, "work_skills", "assignments_on_time"),
      time_grade: current_coscholastic5to10[0]?.[term]?.work_skills?.assignments_on_time?.grade || '',
      neatly_marks: extractMarksAndGrade(current_coscholastic5to10, "work_skills", "does_work_neatly"),
      neatly_grade: current_coscholastic5to10[0]?.[term]?.work_skills?.does_work_neatly?.grade || '',
      work_skills_total_marks: extractTotalMarksAndGrade(current_coscholastic5to10, "work_skills", "work_skills_total"),
      work_skills_total_grade: current_coscholastic5to10[0]?.[term]?.work_skills?.work_skills_total?.grade || '',

      computer_marks: extractMarksAndGrade(current_coscholastic5to10, "specials", "computer"),
      computer_grade: current_coscholastic5to10[0]?.[term]?.specials?.computer?.grade || '',
      science_marks: extractMarksAndGrade(current_coscholastic5to10, "specials", "moral_science"),
      science_grade: current_coscholastic5to10[0]?.[term]?.specials?.moral_science?.grade || '',
      education_marks: extractMarksAndGrade(current_coscholastic5to10, "specials", "physical_education"),
      education_grade: current_coscholastic5to10[0]?.[term]?.specials?.physical_education?.grade || '',
      knowledge_marks: extractMarksAndGrade(current_coscholastic5to10, "specials", "general_knowledge"),
      knowledge_grade: current_coscholastic5to10[0]?.[term]?.specials?.general_knowledge?.grade || '',
      drawing_marks: extractMarksAndGrade(current_coscholastic5to10, "specials", "drawing"),
      drawing_grade: current_coscholastic5to10[0]?.[term]?.specials?.drawing?.grade || '',
      specials_total_marks: extractTotalMarksAndGrade(current_coscholastic5to10, "specials", "specials_total"),
      specials_total_grade: current_coscholastic5to10[0]?.[term]?.specials?.specials_total?.grade || '',


      english_marks: extractMarksAndGrade(current_coscholastic5to10, "project_activity", "English"),
      english_grade: current_coscholastic5to10[0]?.[term]?.project_activity?.English?.grade || '',
      math_marks: extractMarksAndGrade(current_coscholastic5to10, "project_activity", "Math"),
      math_grade: current_coscholastic5to10[0]?.[term]?.project_activity?.Math?.grade || '',
      evs_marks: extractMarksAndGrade(current_coscholastic5to10, "project_activity", "E_V_S"),
      evs_grade: current_coscholastic5to10[0]?.[term]?.project_activity?.E_V_S?.grade || '',
      craft_marks: extractMarksAndGrade(current_coscholastic5to10, "project_activity", "events_and_celebrations"),
      craft_grade: current_coscholastic5to10[0]?.[term]?.project_activity?.events_and_celebrations?.grade || '',
      project_activity_total_marks: extractTotalMarksAndGrade(current_coscholastic5to10, "project_activity", "project_activity_total"),
      project_activity_total_grade: current_coscholastic5to10[0]?.[term]?.project_activity?.project_activity_total?.grade || '',


      words_marks: extractMarksAndGrade(current_coscholastic5to10, "spelling", "words_correctly"),
      words_grade: current_coscholastic5to10[0]?.[term]?.spelling?.words_correctly?.grade || '',
      spelling_marks: extractMarksAndGrade(current_coscholastic5to10, "spelling", "spelling_skills"),
      spelling_grade: current_coscholastic5to10[0]?.[term]?.spelling?.spelling_skills?.grade || '',
      spelling_total_marks: extractTotalMarksAndGrade(current_coscholastic5to10, "spelling", "spelling_total"),
      spelling_total_grade: current_coscholastic5to10[0]?.[term]?.spelling?.spelling_total?.grade || '',


      school_marks: extractMarksAndGrade(current_coscholastic5to10, "social_skills", "school_rules"),
      school_grade: current_coscholastic5to10[0]?.[term]?.social_skills?.school_rules?.grade || '',
      self_marks: extractMarksAndGrade(current_coscholastic5to10, "social_skills", "self_control"),
      self_grade: current_coscholastic5to10[0]?.[term]?.social_skills?.self_control?.grade || '',
      respect_marks: extractMarksAndGrade(current_coscholastic5to10, "social_skills", "respect_to_self_others"),
      respect_grade: current_coscholastic5to10[0]?.[term]?.social_skills?.respect_to_self_others?.grade || '',
      social_skills_total_marks: current_coscholastic5to10[0]?.[term]?.social_skills?.social_skills_total?.marks || '',
      social_skills_total_grade: current_coscholastic5to10[0]?.[term]?.social_skills?.social_skills_total?.grade || '',


      letters_marks: extractMarksAndGrade(current_coscholastic5to10, "written_expression", "letters_correctly"),
      letters_grade: current_coscholastic5to10[0]?.[term]?.written_expression?.letters_correctly?.grade || '',
      punctuation_marks: extractMarksAndGrade(current_coscholastic5to10, "written_expression", "punctuation_correctly"),
      punctuation_grade: current_coscholastic5to10[0]?.[term]?.written_expression?.punctuation_correctly?.grade || '',
      sentences_marks: extractMarksAndGrade(current_coscholastic5to10, "written_expression", "complete_sentences"),
      sentences_grade: current_coscholastic5to10[0]?.[term]?.written_expression?.complete_sentences?.grade || '',
      written_expression_total_marks: current_coscholastic5to10[0]?.[term]?.written_expression?.written_expression_total?.marks || '',
      written_expression_total_grade: current_coscholastic5to10[0]?.[term]?.written_expression?.written_expression_total?.grade || '',

      concept_marks: extractMarksAndGrade(current_coscholastic5to10, "vedic_maths", "Clear_with_the_concept"),
      concept_grade: current_coscholastic5to10[0]?.[term]?.vedic_maths?.Clear_with_the_concept?.grade || '',
      accuracy_marks: extractMarksAndGrade(current_coscholastic5to10, "vedic_maths", "speed_accuracy"),
      accuracy_grade: current_coscholastic5to10[0]?.[term]?.vedic_maths?.speed_accuracy?.grade || '',
      numerical_marks: extractMarksAndGrade(current_coscholastic5to10, "vedic_maths", "numerical_tables"),
      numerical_grade: current_coscholastic5to10[0]?.[term]?.vedic_maths?.numerical_tables?.grade || '',
      vedic_maths_total_marks: current_coscholastic5to10[0]?.[term]?.vedic_maths?.vedic_maths_total?.marks || '',
      vedic_maths_total_grade: current_coscholastic5to10[0]?.[term]?.vedic_maths?.vedic_maths_total?.grade || '',
      


      reading_english_marks: extractMarksAndGrade(current_coscholastic5to10, "Reading", "english"),
      reading_english_grade: current_coscholastic5to10[0]?.[term]?.Reading?.english?.grade || '',
      reading_kannada_marks: extractMarksAndGrade(current_coscholastic5to10, "Reading", "kannada"),
      reading_kannada_grade: current_coscholastic5to10[0]?.[term]?.Reading?.kannada?.grade || '',
      reading_hindi_marks: extractMarksAndGrade(current_coscholastic5to10, "Reading", "hindi"),
      reading_hindi_grade: current_coscholastic5to10[0]?.[term]?.Reading?.hindi?.grade || '',
      Reading_total_marks: current_coscholastic5to10[0]?.[term]?.Reading?.Reading_Total?.marks || '',
      Reading_total_grade: current_coscholastic5to10[0]?.[term]?.Reading?.Reading_Total?.grade || '',
      

      dictation_english_marks: extractMarksAndGrade(current_coscholastic5to10, "Dictation", "english"),
      dictation_english_grade: current_coscholastic5to10[0]?.[term]?.Dictation?.english?.grade || '',
      dictation_kannada_marks: extractMarksAndGrade(current_coscholastic5to10, "Dictation", "kannada"),
      dictation_kannada_grade: current_coscholastic5to10[0]?.[term]?.Dictation?.kannada?.grade || '',
      dictation_hindi_marks: extractMarksAndGrade(current_coscholastic5to10, "Dictation", "hindi"),
      dictation_hindi_grade: current_coscholastic5to10[0]?.[term]?.Dictation?.hindi?.grade || '',
      Dictation_total_marks: current_coscholastic5to10[0]?.[term]?.Dictation?.Dictation_total?.marks || '',
      Dictation_total_grade: current_coscholastic5to10[0]?.[term]?.Dictation?.Dictation_total?.grade || '',
      

      remarks: current_coscholastic5to10[0]?.[term]?.remarks|| '',
      attendence: current_coscholastic5to10[0]?.[term]?.attendence|| '',

    });

  }
}, [current_coscholastic5to10]);




const onFinish = (e) => {
    e.preventDefault();

    const convertMarks = (mark) => {
      return parseFloat(mark === "AB" ? 12 : mark === "NT" ? 11 : mark);
    };

    const coscholasticData ={
      [term] :{
      reading:{
      vocabulary:{
      marks: convertMarks(scholasticData.vocabulary_marks),
      grade:scholasticData.vocabulary_grade
      },
      what_to_read:{
      marks: convertMarks(scholasticData.read_marks),
      grade:scholasticData.read_grade
      },
      reads_fluently:{
      marks: convertMarks(scholasticData.fluently_marks),
      grade:scholasticData.fluently_grade
      },
      phonic_skills:{
      marks: convertMarks(scholasticData.skills_marks),
      grade:scholasticData.skills_grade
      },
      reading_total:{
      marks: convertMarks(scholasticData.reading_total_marks),
      grade:scholasticData.reading_total_grade
      },

     },

      work_skills:{
      listens_attentively:{
      marks: convertMarks(scholasticData.attentively_marks),
      grade:scholasticData.attentively_grade
      },
      follows_directions:{
      marks: convertMarks(scholasticData.directions_marks),
      grade:scholasticData.directions_grade
      },
      Work_well_independently:{
      marks: convertMarks(scholasticData.independently_marks),
      grade:scholasticData.independently_grade
      },
      assignments_on_time:{
      marks: convertMarks(scholasticData.time_marks),
      grade:scholasticData.time_grade
      },
      does_work_neatly:{
      marks: convertMarks(scholasticData.neatly_marks),
      grade:scholasticData.neatly_grade
      },
      work_skills_total:{
        marks: convertMarks(scholasticData.work_skills_total_marks),
        grade:scholasticData.work_skills_total_grade
        },
      },


      specials:{
      computer:{
      marks: convertMarks(scholasticData.computer_marks),
      grade:scholasticData.computer_grade
      },
      moral_science:{
      marks: convertMarks(scholasticData.science_marks),
      grade:scholasticData.science_grade
      },
      physical_education:{
      marks: convertMarks(scholasticData.education_marks),
      grade:scholasticData.education_grade
      },      
      general_knowledge:{
      marks: convertMarks(scholasticData.knowledge_marks),
      grade:scholasticData.knowledge_grade
      },  
      drawing:{
      marks: convertMarks(scholasticData.drawing_marks),
      grade:scholasticData.drawing_grade
      }, 
      specials_total:{
        marks: convertMarks(scholasticData.specials_total_marks),
        grade:scholasticData.specials_total_grade
        },
      },



    project_activity:{
    English:{
      marks: convertMarks(scholasticData.english_marks),
      grade:scholasticData.english_grade
      }, 
      Math:{
      marks: convertMarks(scholasticData.math_marks),
      grade:scholasticData.math_grade
      }, 
      E_V_S:{
      marks: convertMarks(scholasticData.evs_marks),
      grade:scholasticData.evs_grade
      }, 
      events_and_celebrations:{
      marks: convertMarks(scholasticData.craft_marks),
      grade:scholasticData.craft_grade
      }, 
      project_activity_total:{
        marks: convertMarks(scholasticData.project_activity_total_marks),
        grade:scholasticData.project_activity_total_grade
        },
      },

      spelling:{
      words_correctly:{
      marks: convertMarks(scholasticData.words_marks),
      grade:scholasticData.words_grade
      }, 

      spelling_skills:{
      marks: convertMarks(scholasticData.spelling_marks),
      grade:scholasticData.spelling_grade
      }, 
      spelling_total:{
        marks: convertMarks(scholasticData.spelling_total_marks),
        grade:scholasticData.spelling_total_grade
        },
      },


      social_skills:{  
      school_rules:{
      marks: convertMarks(scholasticData.school_marks),
      grade:scholasticData.school_grade
      }, 

      self_control:{
      marks: convertMarks(scholasticData.self_marks),
      grade:scholasticData.self_grade
      }, 

      respect_to_self_others:{
      marks: convertMarks(scholasticData.respect_marks),
      grade:scholasticData.respect_grade
      } ,
      
      social_skills_total:{
        marks: convertMarks(scholasticData.social_skills_total_marks),
        grade:scholasticData.social_skills_total_grade
        },
      },

      written_expression:{     
      letters_correctly:{
      marks: convertMarks(scholasticData.letters_marks),
      grade:scholasticData.letters_grade
      }, 
      punctuation_correctly:{
      marks: convertMarks(scholasticData.punctuation_marks),
      grade:scholasticData.punctuation_grade
      }, 
      complete_sentences:{
      marks: convertMarks(scholasticData.sentences_marks),
      grade:scholasticData.sentences_grade
      },      
      written_expression_total:{
        marks: convertMarks(scholasticData.written_expression_total_marks),
        grade:scholasticData.written_expression_total_grade
        },
      },

      vedic_maths:{    
      Clear_with_the_concept:{
      marks: convertMarks(scholasticData.concept_marks),
      grade:scholasticData.concept_grade
      }, 
      speed_accuracy:{
      marks: convertMarks(scholasticData.accuracy_marks),
      grade:scholasticData.accuracy_grade
      }, 
      numerical_tables:{
      marks: convertMarks(scholasticData.numerical_marks),
      grade:scholasticData.numerical_grade
      }, 
      vedic_maths_total:{
        marks: convertMarks(scholasticData.vedic_maths_total_marks),
        grade:scholasticData.vedic_maths_total_grade
        },
      
      },


      Reading:{    
        english:{
        marks: convertMarks(scholasticData.reading_english_marks),
        grade:scholasticData.reading_english_grade
        }, 
        kannada:{
        marks: convertMarks(scholasticData.reading_kannada_marks),
        grade:scholasticData.reading_kannada_grade
        }, 
        hindi:{
        marks: convertMarks(scholasticData.reading_hindi_marks),
        grade:scholasticData.reading_hindi_grade
        }, 
        Reading_Total:{
          marks: convertMarks(scholasticData.Reading_total_marks),
          grade:scholasticData.Reading_total_grade
          },
        
        },

        Dictation:{    
            english:{
            marks: convertMarks(scholasticData.dictation_english_marks),
            grade:scholasticData.dictation_english_grade
            }, 
            kannada:{
            marks: convertMarks(scholasticData.dictation_kannada_marks),
            grade:scholasticData.dictation_kannada_grade
            }, 
            hindi:{
            marks: convertMarks(scholasticData.dictation_hindi_marks),
            grade:scholasticData.dictation_hindi_grade
            },  
            Dictation_total:{
              marks: convertMarks(scholasticData.Dictation_total_marks),
              grade:scholasticData.Dictation_total_grade
              },      
            },


      remarks:scholasticData.remarks,
      attendence:scholasticData.attendence,
      status:isCheckboxSelected ? 'Finish' : 'progress'

    },
      class:current_student?.joining_details?.class?._id,
      section:current_student?.joining_details?.section?._id,
      student:current_student?._id
    }   
   
    if (current_coscholastic5to10?.length > 0) {
      const itemId = current_coscholastic5to10[0]?._id; 
      dispatch(updateCoscholastic5to10(coscholasticData, itemId));
      handleClose()
      if(isCheckboxSelected){
        nav(-1)}
    } else {
      dispatch(createcoscholastic5to10(coscholasticData));
      if(isCheckboxSelected){
        nav(-1)}
    }
  };


  const buttonStyle = {
    marginTop:'20px',  
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


  const onChangeTotal = (fieldName, value) => {
    setScholasticData((prevFormData) => {
        const updatedValues = {
            ...prevFormData,
            [fieldName]: value,
        };

        // Define the fields to be considered for calculation
        const fieldsToConsider = ["vocabulary_marks", "read_marks", "fluently_marks", "skills_marks"];

        let total = 0;
        let divisionFactor = 0; // Initialize division factor to 0

        // Calculate total of numeric values and count the division factor
        fieldsToConsider.forEach((field) => {
            const mark = updatedValues[field];
            if (!isNaN(mark)) {
                total += parseFloat(mark);
                divisionFactor++; // Increment division factor for numeric values
            } else if (mark === "AB") {
                divisionFactor++; // Increment division factor for "AB" marks
            }
        });

        // Check if all marks are 'NT'
        if (divisionFactor === 0) {
            total = "NT";
        }
        // Calculate grade based on total marks
        let grade = '';
        if (total !== "NT") {
            const gradeTotal = total / divisionFactor; // Calculate the grade total considering division factor
            if (gradeTotal > 10) {
                grade = 'Error';
            } else if (gradeTotal >= 8.1 && gradeTotal <= 10) {
                grade = 'A';
            } else if (gradeTotal >= 6.1 && gradeTotal <= 8) {
                grade = 'B';
            } else if (gradeTotal >= 4.1 && gradeTotal <= 6) {
                grade = 'C';
            } else if (gradeTotal >= 2.1 && gradeTotal <= 4) {
                grade = 'D';
            } else if (gradeTotal >= 1 && gradeTotal <= 2) {
              grade = 'E';
          }
          else if (gradeTotal == 0 ) {
            grade = ' ';
        }
        } else {
            grade = total;
        }

        return {
            ...updatedValues,
            reading_total_marks: total,
            reading_total_grade: grade,
        };
    });
};

const onChangeTotal1 = (fieldName, value) => {
  setScholasticData((prevFormData) => {
      const updatedValues = {
          ...prevFormData,
          [fieldName]: value,
      };

      const fieldsToConsider = ["attentively_marks", "directions_marks", "independently_marks", "time_marks", "neatly_marks"];

      let total = 0;

      fieldsToConsider.forEach((field) => {
          const fieldValue = parseFloat(updatedValues[field]);
          if (!isNaN(fieldValue)) {
              total += fieldValue;
          }
      });

      let divisionFactor = 0; // Initialize division factor to 0

      // Calculate total of numeric values and count the division factor
      fieldsToConsider.forEach((field) => {
          const mark = updatedValues[field];
          if (!isNaN(mark)) {
              divisionFactor++; // Increment division factor for numeric values
          } else if (mark === "AB") {
              divisionFactor++; // Increment division factor for "AB" marks
          }
      });

      // Check if all marks are 'NT'
      if (divisionFactor === 0) {
          total = "NT";
      }

      // Calculate grade based on total marks
      let grade = '';
      if (total !== "NT") {
          const gradeTotal = total / divisionFactor; // Calculate the grade total considering division factor
          if (gradeTotal > 10) {
              grade = 'Error';
          } else if (gradeTotal >= 8.1 && gradeTotal <= 10) {
              grade = 'A';
          } else if (gradeTotal >= 6.1 && gradeTotal <= 8) {
              grade = 'B';
          } else if (gradeTotal >= 4.1 && gradeTotal <= 6) {
              grade = 'C';
          } else if (gradeTotal >= 2.1 && gradeTotal <= 4) {
              grade = 'D';
          } else if (gradeTotal >= 1 && gradeTotal <= 2) {
              grade = 'E';
          }
          else if (gradeTotal == 0 ) {
            grade = ' ';
        }
      } else {
          grade = total;
      }

      return {
          ...updatedValues,
          work_skills_total_marks: total,
          work_skills_total_grade: grade,
      };
  });
};

const onChangeTotal2 = (fieldName, value) => {
  setScholasticData((prevFormData) => {
      const updatedValues = {
          ...prevFormData,
          [fieldName]: value,
      };

      const fieldsToConsider = ["computer_marks", "science_marks", "education_marks", "knowledge_marks", "drawing_marks"];

      let total = 0;

      fieldsToConsider.forEach((field) => {
          const fieldValue = parseFloat(updatedValues[field]);
          if (!isNaN(fieldValue)) {
              total += fieldValue;
          }
      });

      let divisionFactor = 0; // Initialize division factor to 0

      // Calculate total of numeric values and count the division factor
      fieldsToConsider.forEach((field) => {
          const mark = updatedValues[field];
          if (!isNaN(mark)) {
              divisionFactor++; // Increment division factor for numeric values
          } else if (mark === "AB") {
              divisionFactor++; // Increment division factor for "AB" marks
          }
      });

      // Check if all marks are 'NT'
      if (divisionFactor === 0) {
          total = "NT";
      }

      // Calculate grade based on total marks
      let grade = '';
      if (total !== "NT") {
          const gradeTotal = total / divisionFactor; // Calculate the grade total considering division factor
          if (gradeTotal > 10) {
              grade = 'Error';
          } else if (gradeTotal >= 8.1 && gradeTotal <= 10) {
              grade = 'A';
          } else if (gradeTotal >= 6.1 && gradeTotal <= 8) {
              grade = 'B';
          } else if (gradeTotal >= 4.1 && gradeTotal <= 6) {
              grade = 'C';
          } else if (gradeTotal >= 2.1 && gradeTotal <= 4) {
              grade = 'D';
          } else if (gradeTotal >= 1 && gradeTotal <= 2) {
              grade = 'E';
          }
          else if (gradeTotal == 0 ) {
            grade = ' ';
        }
      } else {
          grade = total;
      }

      return {
          ...updatedValues,
          specials_total_marks: total,
          specials_total_grade: grade,
      };
  });
};
              
const onChangeTotal3 = (fieldName, value) => {
  setScholasticData((prevFormData) => {
      const updatedValues = {
          ...prevFormData,
          [fieldName]: value,
      };

      const fieldsToConsider = ["english_marks", "math_marks", "evs_marks", "craft_marks"];

      let total = 0;

      fieldsToConsider.forEach((field) => {
          const fieldValue = parseFloat(updatedValues[field]);
          if (!isNaN(fieldValue)) {
              total += fieldValue;
          }
      });

      let divisionFactor = 0; // Initialize division factor to 0

      // Calculate total of numeric values and count the division factor
      fieldsToConsider.forEach((field) => {
          const mark = updatedValues[field];
          if (!isNaN(mark)) {
              divisionFactor++; // Increment division factor for numeric values
          } else if (mark === "AB") {
              divisionFactor++; // Increment division factor for "AB" marks
          }
      });

      // Check if all marks are 'NT'
      if (divisionFactor === 0) {
          total = "NT";
      }

      // Calculate grade based on total marks
      let grade = '';
      if (total !== "NT") {
          const gradeTotal = total / divisionFactor; // Calculate the grade total considering division factor
          if (gradeTotal > 10) {
              grade = 'Error';
          } else if (gradeTotal >= 8.1 && gradeTotal <= 10) {
              grade = 'A';
          } else if (gradeTotal >= 6.1 && gradeTotal <= 8) {
              grade = 'B';
          } else if (gradeTotal >= 4.1 && gradeTotal <= 6) {
              grade = 'C';
          } else if (gradeTotal >= 2.1 && gradeTotal <= 4) {
              grade = 'D';
          } else if (gradeTotal >= 1 && gradeTotal <= 2) {
              grade = 'E';
          }
          else if (gradeTotal == 0 ) {
            grade = ' ';
        }
      } else {
          grade = total;
      }

      return {
          ...updatedValues,
          project_activity_total_marks: total,
          project_activity_total_grade: grade,
      };
  });
};
              
            
const onChangeTotal4 = (fieldName, value) => {
  setScholasticData((prevFormData) => {
      const updatedValues = {
          ...prevFormData,
          [fieldName]: value,
      };  

      const fieldsToConsider = ["words_marks", "spelling_marks"];

      let total = 0;

      fieldsToConsider.forEach((field) => {
          const fieldValue = parseFloat(updatedValues[field]);
          if (!isNaN(fieldValue)) {
              total += fieldValue;
          }
      });

      let divisionFactor = 0; // Initialize division factor to 0

      // Calculate total of numeric values and count the division factor
      fieldsToConsider.forEach((field) => {
          const mark = updatedValues[field];
          if (!isNaN(mark)) {
              divisionFactor++; // Increment division factor for numeric values
          } else if (mark === "AB") {
              divisionFactor++; // Increment division factor for "AB" marks
          }
      });

      // Check if all marks are 'NT'
      if (divisionFactor === 0) {
          total = "NT";
      }

      // Calculate grade based on total marks
      let grade = '';
      if (total !== "NT") {
          const gradeTotal = total / divisionFactor; // Calculate the grade total considering division factor
          if (gradeTotal > 10) {
              grade = 'Error';
          } else if (gradeTotal >= 8.1 && gradeTotal <= 10) {
              grade = 'A';
          } else if (gradeTotal >= 6.1 && gradeTotal <= 8) {
              grade = 'B';
          } else if (gradeTotal >= 4.1 && gradeTotal <= 6) {
              grade = 'C';
          } else if (gradeTotal >= 2.1 && gradeTotal <= 4) {
              grade = 'D';
          } else if (gradeTotal >= 1 && gradeTotal <= 2) {
              grade = 'E';
          }
          else if (gradeTotal == 0 ) {
            grade = ' ';
        }
      } else {
          grade = total;
      }

      return {
          ...updatedValues,
          spelling_total_marks: total,
          spelling_total_grade: grade,
      };
  });
};


const onChangeTotal5 = (fieldName, value) => {
  setScholasticData((prevFormData) => {
      const updatedValues = {
          ...prevFormData,
          [fieldName]: value,
      };

      const fieldsToConsider = ["school_marks", "self_marks", "respect_marks"];

      let total = 0;

      fieldsToConsider.forEach((field) => {
          const fieldValue = parseFloat(updatedValues[field]);
          if (!isNaN(fieldValue)) {
              total += fieldValue;
          }
      });

      let divisionFactor = 0; // Initialize division factor to 0

      // Calculate total of numeric values and count the division factor
      fieldsToConsider.forEach((field) => {
          const mark = updatedValues[field];
          if (!isNaN(mark)) {
              divisionFactor++; // Increment division factor for numeric values
          } else if (mark === "AB") {
              divisionFactor++; // Increment division factor for "AB" marks
          }
      });

      // Check if all marks are 'NT'
      if (divisionFactor === 0) {
          total = "NT";
      }

      // Calculate grade based on total marks
      let grade = '';
      if (total !== "NT") {
          const gradeTotal = total / divisionFactor; // Calculate the grade total considering division factor
          if (gradeTotal > 10) {
              grade = 'Error';
          } else if (gradeTotal >= 8.1 && gradeTotal <= 10) {
              grade = 'A';
          } else if (gradeTotal >= 6.1 && gradeTotal <= 8) {
              grade = 'B';
          } else if (gradeTotal >= 4.1 && gradeTotal <= 6) {
              grade = 'C';
          } else if (gradeTotal >= 2.1 && gradeTotal <= 4) {
              grade = 'D';
          } else if (gradeTotal >= 1 && gradeTotal <= 2) {
              grade = 'E';
          }
          else if (gradeTotal == 0 ) {
            grade = ' ';
        }
      } else {
          grade = total;
      }

      return {
          ...updatedValues,
          social_skills_total_marks: total,
          social_skills_total_grade: grade,
      };
  });
};


                


const onChangeTotal6 = (fieldName, value) => {
  setScholasticData((prevFormData) => {
      const updatedValues = {
          ...prevFormData,
          [fieldName]: value,
      };

      const fieldsToConsider = ["letters_marks", "punctuation_marks", "sentences_marks"];

      let total = 0;

      fieldsToConsider.forEach((field) => {
          const fieldValue = parseFloat(updatedValues[field]);
          if (!isNaN(fieldValue)) {
              total += fieldValue;
          }
      });

      let divisionFactor = 0; // Initialize division factor to 0

      // Calculate total of numeric values and count the division factor
      fieldsToConsider.forEach((field) => {
          const mark = updatedValues[field];
          if (!isNaN(mark)) {
              divisionFactor++; // Increment division factor for numeric values
          } else if (mark === "AB") {
              divisionFactor++; // Increment division factor for "AB" marks
          }
      });

      // Check if all marks are 'NT'
      if (divisionFactor === 0) {
          total = "NT";
      }

      // Calculate grade based on total marks
      let grade = '';
      if (total !== "NT") {
          const gradeTotal = total / divisionFactor; // Calculate the grade total considering division factor
          if (gradeTotal > 10) {
              grade = 'Error';
          } else if (gradeTotal >= 8.1 && gradeTotal <= 10) {
              grade = 'A';
          } else if (gradeTotal >= 6.1 && gradeTotal <= 8) {
              grade = 'B';
          } else if (gradeTotal >= 4.1 && gradeTotal <= 6) {
              grade = 'C';
          } else if (gradeTotal >= 2.1 && gradeTotal <= 4) {
              grade = 'D';
          } else if (gradeTotal >= 1 && gradeTotal <= 2) {
              grade = 'E';
          }
          else if (gradeTotal == 0 ) {
            grade = ' ';
        }
      } else {
          grade = total;
      }

      return {
          ...updatedValues,
          written_expression_total_marks: total,
          written_expression_total_grade: grade,
      };
  });
};

         

const onChangeTotal7 = (fieldName, value) => {
  setScholasticData((prevFormData) => {
      const updatedValues = {
          ...prevFormData,
          [fieldName]: value,
      };  

      const fieldsToConsider = ["concept_marks", "accuracy_marks", "numerical_marks"];

      let total = 0;

      fieldsToConsider.forEach((field) => {
          const fieldValue = parseFloat(updatedValues[field]);
          if (!isNaN(fieldValue)) {
              total += fieldValue;
          }
      });

      let divisionFactor = 0; // Initialize division factor to 0

      // Calculate total of numeric values and count the division factor
      fieldsToConsider.forEach((field) => {
          const mark = updatedValues[field];
          if (!isNaN(mark)) {
              divisionFactor++; // Increment division factor for numeric values
          } else if (mark === "AB") {
              divisionFactor++; // Increment division factor for "AB" marks
          }
      });

      // Check if all marks are 'NT'
      if (divisionFactor === 0) {
          total = "NT";
      }

      // Calculate grade based on total marks
      let grade = '';
      if (total !== "NT") {
          const gradeTotal = total / divisionFactor; // Calculate the grade total considering division factor
          if (gradeTotal > 10) {
              grade = 'Error';
          } else if (gradeTotal >= 8.1 && gradeTotal <= 10) {
              grade = 'A';
          } else if (gradeTotal >= 6.1 && gradeTotal <= 8) {
              grade = 'B';
          } else if (gradeTotal >= 4.1 && gradeTotal <= 6) {
              grade = 'C';
          } else if (gradeTotal >= 2.1 && gradeTotal <= 4) {
              grade = 'D';
          } else if (gradeTotal >= 1 && gradeTotal <= 2) {
              grade = 'E';
          }
          else if (gradeTotal == 0 ) {
            grade = ' ';
        }
      } else {
          grade = total;
      }

      return {
          ...updatedValues,
          vedic_maths_total_marks: total,
          vedic_maths_total_grade: grade,
      };
  });
};


const onChangeTotal8 = (fieldName, value) => {
  setScholasticData((prevFormData) => {
      const updatedValues = {
          ...prevFormData,
          [fieldName]: value,
      };  

      const fieldsToConsider = ["reading_english_marks", "reading_kannada_marks", "reading_hindi_marks"];

      let total = 0;

      fieldsToConsider.forEach((field) => {
          const fieldValue = parseFloat(updatedValues[field]);
          if (!isNaN(fieldValue)) {
              total += fieldValue;
          }
      });

      let divisionFactor = 0; // Initialize division factor to 0

      // Calculate total of numeric values and count the division factor
      fieldsToConsider.forEach((field) => {
          const mark = updatedValues[field];
          if (!isNaN(mark)) {
              divisionFactor++; // Increment division factor for numeric values
          } else if (mark === "AB") {
              divisionFactor++; // Increment division factor for "AB" marks
          }
      });

      // Check if all marks are 'NT'
      if (divisionFactor === 0) {
          total = "NT";
      }

      // Calculate grade based on total marks
      let grade = '';
      if (total !== "NT") {
          const gradeTotal = total / divisionFactor; // Calculate the grade total considering division factor
          if (gradeTotal > 10) {
              grade = 'Error';
          } else if (gradeTotal >= 8.1 && gradeTotal <= 10) {
              grade = 'A';
          } else if (gradeTotal >= 6.1 && gradeTotal <= 8) {
              grade = 'B';
          } else if (gradeTotal >= 4.1 && gradeTotal <= 6) {
              grade = 'C';
          } else if (gradeTotal >= 2.1 && gradeTotal <= 4) {
              grade = 'D';
          } else if (gradeTotal >= 1 && gradeTotal <= 2) {
              grade = 'E';
          }
          else if (gradeTotal == 0 ) {
            grade = ' ';
        }
      } else {
          grade = total;
      }

      return {
          ...updatedValues,
          Reading_total_marks: total,
          Reading_total_grade: grade,
      };
  });
};
                   
const onChangeTotal9 = (fieldName, value) => {
  setScholasticData((prevFormData) => {
      const updatedValues = {
          ...prevFormData,
          [fieldName]: value,
      };  

      const fieldsToConsider = ["dictation_english_marks", "dictation_kannada_marks", "dictation_hindi_marks"];

      let total = 0;

      fieldsToConsider.forEach((field) => {
          const fieldValue = parseFloat(updatedValues[field]);
          if (!isNaN(fieldValue)) {
              total += fieldValue;
          }
      });

      let divisionFactor = 0; // Initialize division factor to 0

      // Calculate total of numeric values and count the division factor
      fieldsToConsider.forEach((field) => {
          const mark = updatedValues[field];
          if (!isNaN(mark)) {
              divisionFactor++; // Increment division factor for numeric values
          } else if (mark === "AB") {
              divisionFactor++; // Increment division factor for "AB" marks
          }
      });

      // Check if all marks are 'NT'
      if (divisionFactor === 0) {
          total = "NT";
      }

      // Calculate grade based on total marks
      let grade = '';
      if (total !== "NT") {
          const gradeTotal = total / divisionFactor; // Calculate the grade total considering division factor
          if (gradeTotal > 10) {
              grade = 'Error';
          } else if (gradeTotal >= 8.1 && gradeTotal <= 10) {
              grade = 'A';
          } else if (gradeTotal >= 6.1 && gradeTotal <= 8) {
              grade = 'B';
          } else if (gradeTotal >= 4.1 && gradeTotal <= 6) {
              grade = 'C';
          } else if (gradeTotal >= 2.1 && gradeTotal <= 4) {
              grade = 'D';
          } else if (gradeTotal >= 1 && gradeTotal <= 2) {
              grade = 'E';
          }
          else if (gradeTotal == 0 ) {
            grade = ' ';
        }
      } else {
          grade = total;
      }

      return {
          ...updatedValues,
          Dictation_total_marks: total,
          Dictation_total_grade: grade,
      };
  });
};            

                     

  return (

<div> 

<Typography marginBottom={1} variant='h6'>Co-Scolastic - {term}</Typography>

<Breadcrumbs  aria-label="breadcrumb"  className='mb-12' >
<Typography>{current_student?.joining_details?.class?.class_name}</Typography>
<Link underline="hover" color="inherit" to='/exams'>Exams</Link>
<Typography component={Link}
  to={`/studentlist/${encodeURIComponent(term)}/${current_student?.joining_details?.year}/${current_student?.joining_details?.section?._id}`}
  underline="hover"
  color="inherit">
  Students
</Typography>

<Typography className='text-[#2C348C] text-xl font-bold'>{current_student?.personal_details?.full_name}</Typography>
</Breadcrumbs>

<Typography className=' text-red-600 float-right' style={{marginRight:'10%'}}>
{current_coscholastic5to10 && current_coscholastic5to10[0]?.[term]?.status === 'Finish' ? (
'*Note: All marks are already updated, not editable'
  ) : null}
</Typography>


<img src={logo} alt="logo" className=" w-[90%] mb-5 mt-5  " />


{/* <Box mt={4} sx={{display:'flex'}} >

<Typography underline="hover" color="inherit" >
Student Name : <span className='text-[#00285C] text-[20px]'>{current_student?.personal_details?.full_name}</span>
</Typography>

<Typography underline="hover" color="inherit" >
Class : {current_student?.joining_details?.class?.class_name}
</Typography>
<Typography underline="hover" color="inherit" >
Section : {current_student?.joining_details?.section?.section_name}
</Typography>
</Box> */}


<ThemeProvider theme={theme}>
<form onSubmit={onFinish}>
<div className='flex w-full  '>
<div className='w-full'>
<Box sx={{display:'flex', marginBottom:'8px' }}>
<Typography style={{ color:'#2C348C'}}>Subject</Typography>
<Typography style={{marginLeft:'50%', color:'#2C348C'}} >Marks</Typography>
<Typography style={{marginLeft:'6%',color:'#2C348C'}}>Grade</Typography>
</Box>

    {/* <Typography  >Reading (Co-curricular Activities)</Typography> */}
    <Box  spacing={2}>
    <div className='w-[90%] flex gap-6 bg-[#E4E6EA] pt-2 mb-2 pl-2'>
    <Typography sx={{ width:'60%', fontSize:'16px', fontWeight:'500' , marginBottom:'12px', }}>Reading (Co-curricular Activities)</Typography>
    <div>
    <input
    type="text"
    name="reading_total_marks"
    value={scholasticData?.reading_total_marks}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center'
    maxLength="3"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    />
    </div>

    <div>
    <input
    type="text"
    name="reading_total_grade"
    value={scholasticData?.reading_total_grade}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center  text-white font-bold'
    style={{
      backgroundColor: getBackgroundColor(scholasticData?.reading_total_grade),
    }}
    />
    </div>
    </div>
    
    </Box>





    <Box sx={{ display: 'flex', gap: '24px', marginBottom: '6px' }} spacing={2}>
    <Typography className='w-[54%] ' sx={{ fontSize: '14px', fontWeight: '400' }}>Knows required vocabulary</Typography>
    <div>
    <input
    type="text"
    name="vocabulary_marks"
    value={scholasticData.vocabulary_marks}
    onChange={(e) => {
      handleChange(e);
      onChangeTotal("vocabulary_marks", e.target.value);
    }}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center'
    maxLength="3"
    max="10"
    min="0"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
        
    />
    </div>

    <div>
    <input
    type="text"
    name="vocabulary_grade"
    value={scholasticData.vocabulary_grade}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center text-white font-bold'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.vocabulary_grade),
    }}
    />
    </div>
    </Box>



    <Box sx={{display:'flex', gap:'24px', marginBottom:'6px'}} spacing={2}>
    <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>Understands what to read</Typography>
   <div>
   <input
   type="text" 
   name="read_marks"
   value={scholasticData?.read_marks}
  //  onChange={(value) => {handleChange(value); onChangeTotal(value); }}
  onChange={(e) => {
    handleChange(e);
    onChangeTotal("read_marks", e.target.value);
  }}
   size="small"
   className='border border-neutral-500 w-16 rounded-sm text-center'
   maxLength="3"
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   
   />
   </div>

    <div>
    <input
    name="read_grade"
    label="Grade"
    value={scholasticData.read_grade}
    size="small"
    className=' border  border-neutral-500 w-16 rounded-sm text-center text-white font-bold'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.read_grade),
    }}
    />
  </div>
  </Box>


  <Box sx={{display:'flex', gap:'24px',  marginBottom:'6px'}} spacing={2}>
  <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400',marginTop:'2px' }}>Reads fluently</Typography>
  <div  >
  <input
   type="text"
  label="enter marks"
  name="fluently_marks"
  value={scholasticData.fluently_marks}
  onChange={(e) => {
    handleChange(e);
    onChangeTotal("fluently_marks", e.target.value);
  }}
  size="small"
  className=' border  border-neutral-500 w-16 rounded-sm text-center'
  maxLength="3"
  max="10"
  min="0"
  style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
  
  />
   </div>

   <div>
   <input
   name="fluently_grade"
   label="Grade"
   value={scholasticData.fluently_grade}
   size="small"
   className=' border  border-neutral-500 w-16 rounded-sm text-center text-white font-bold'
   style={{
    backgroundColor: getBackgroundColor(scholasticData.fluently_grade),
  }}
   />
  </div>
  </Box>


   <Box sx={{ display: 'flex', gap: '24px', marginBottom: '6px' }} spacing={2}>
   <Typography  className='w-[54%] 'sx={{fontSize:'14px', fontWeight:'400',marginTop:'2px' }}> Applies phonic skills</Typography>
   <div>
   <input
   type="text"
   name="skills_marks"
   value={scholasticData.skills_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal("skills_marks", e.target.value);
  }}
   maxLength="3"
   className=' border  border-neutral-500 w-16 rounded-sm text-center'
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   
   />
   </div>
   <div>

   <input
   type="text"
   name="skills_grade"
   value={scholasticData.skills_grade}
   maxLength="3"
   className=' border  border-neutral-500 w-16 rounded-sm text-center text-white font-bold'
   style={{
    backgroundColor: getBackgroundColor(scholasticData.skills_grade),
  }}
   />
  </div>
   </Box>
   <br/>


<Box  spacing={1}>
<div className='w-[90%] flex gap-6 bg-[#E4E6EA] pt-2 mb-2 pl-2'>
    <Typography sx={{width:'60%', fontSize:'16px', fontWeight:'500' , marginBottom:'12px', }}>Work Skills (Co-curricular Activities) </Typography>
    <div>
    <input
    type="text"
    name="work_skills_total_marks"
    value={scholasticData?.work_skills_total_marks}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center '
    maxLength="3"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    />
    </div>

    <div>
    <input
    type="text"
    name="work_skills_total_grade"
    value={scholasticData?.work_skills_total_grade}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center  text-white font-bold'
    style={{
      backgroundColor: getBackgroundColor(scholasticData?.work_skills_total_grade),
    }}
    />
    </div>
    </div>
    </Box>

    <Box sx={{ display: 'flex', gap: '24px', marginBottom: '6px' }} spacing={2}>
    <Typography className='w-[54%] ' sx={{ fontSize: '14px', fontWeight: '400' }}> Listens attentively</Typography>
    <div>
    <input
    type="text"
    name="attentively_marks"
    value={scholasticData.attentively_marks}
    onChange={(e) => {
      handleChange(e);
      onChangeTotal1("attentively_marks", e.target.value);
    }}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center'
    maxLength="3"
    max="10"
    min="0"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    />
    </div>

    <div>
    <input
    type="text"
    name="attentively_grade"
    value={scholasticData.attentively_grade}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center text-white font-bold'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.attentively_grade),
    }}
    />
    </div>
    </Box>



    <Box sx={{display:'flex', gap:'24px', marginBottom:'6px'}} spacing={2}>
    <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>Follows directions</Typography>
   <div>
   <input
   type="text" 
   name="directions_marks"
   value={scholasticData.directions_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal1("directions_marks", e.target.value);
  }}
   size="small"
   className='border border-neutral-500 w-16 rounded-sm text-center'
   maxLength="3"
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   
   />
   </div>

    <div>
    <input
    name="directions_grade"
    label="Grade"
    value={scholasticData.directions_grade}
    size="small"
    className=' border  border-neutral-500 w-16 rounded-sm text-center text-white font-bold'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.directions_grade),
    }}
    />
  </div>
  </Box>


  <Box sx={{display:'flex', gap:'24px',  marginBottom:'6px'}} spacing={2}>
  <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>Work well independently</Typography>
  <div  >
  <input
   type="text"
  label="enter marks"
  name="independently_marks"
  value={scholasticData.independently_marks}
  onChange={(e) => {
    handleChange(e);
    onChangeTotal1("independently_marks", e.target.value);
  }}
  size="small"
  className=' border  border-neutral-500 w-16 rounded-sm text-center'
  maxLength="3"
  max="10"
  min="0"
  style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
  
  />
   </div>

   <div>
   <input
   name="independently_grade"
   label="Grade"
   value={scholasticData.independently_grade}
   size="small"
   className=' border  border-neutral-500 w-16 rounded-sm text-center text-white font-bold'
   style={{
    backgroundColor: getBackgroundColor(scholasticData.independently_grade),
  }}
   />
  </div>
  </Box>


   <Box sx={{ display: 'flex', gap: '24px', marginBottom: '6px' }} spacing={2}>
   <Typography  className='w-[54%] 'sx={{fontSize:'14px', fontWeight:'400', }}> Completes class assignments on time</Typography>
   <div>
   <input
   type="text"
   name="time_marks"
   value={scholasticData.time_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal1("time_marks", e.target.value);
  }}
   maxLength="3"
   className=' border  border-neutral-500 w-16 rounded-sm text-center'
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    
   />
   </div>
   <div>

   <input
   type="text"
   name="time_grade"
   value={scholasticData.time_grade}
   maxLength="3"
   className=' border  border-neutral-500 w-16 rounded-sm text-center text-white font-bold'
   style={{
    backgroundColor: getBackgroundColor(scholasticData.time_grade),
  }}
   />
  </div>
   </Box>



   <Box sx={{ display: 'flex', gap: '24px', marginBottom: '6px' }} spacing={2}>
   <Typography  className='w-[54%] 'sx={{fontSize:'14px', fontWeight:'400', }}>  Does work neatly</Typography>
   <div>
   <input
   type="text"
   name="neatly_marks"
   value={scholasticData.neatly_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal1("neatly_marks", e.target.value);
  }}
   maxLength="3"
   className=' border  border-neutral-500 w-16 rounded-sm text-center'
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   
   />
   </div>
   <div>

   <input
   type="text"
   name="neatly_grade"
   value={scholasticData.neatly_grade}
   maxLength="3"
   className=' border  border-neutral-500 w-16 rounded-sm text-center text-white font-bold'
   style={{
    backgroundColor: getBackgroundColor(scholasticData.neatly_grade),
  }}
   />
  </div>
   </Box>
<br/>

 <Box  spacing={2}>
 <div className='w-[90%] flex gap-6 bg-[#E4E6EA] pt-2 mb-2 pl-2'>
    <Typography sx={{width:'60%', fontSize:'16px', fontWeight:'500' , marginBottom:'12px', }}>Specials : Participates Co-operatively/effort in (Co-curricular Activities)</Typography>
    <div>
    <input
    type="text"
    name="specials_total_marks"
    value={scholasticData?.specials_total_marks}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center '
    maxLength="3"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    />
    </div>

    <div>
    <input
    type="text"
    name="specials_total_grade"
    value={scholasticData?.specials_total_grade}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center  text-white font-bold '
    style={{
      backgroundColor: getBackgroundColor(scholasticData?.specials_total_grade),
    }}
    />
    </div>
    </div>
    
    </Box>





    <Box sx={{ display: 'flex', gap: '24px', marginBottom: '6px' }} spacing={2}>
    <Typography className='w-[54%] ' sx={{ fontSize: '14px', fontWeight: '400' }}> Computer</Typography>
    <div>
    <input
    type="text"
    name="computer_marks"
    value={scholasticData.computer_marks}
    onChange={(e) => {
      handleChange(e);
      onChangeTotal2("computer_marks", e.target.value);
    }}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center'
    maxLength="3"
    max="10"
    min="0"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    />
    </div>

    <div>
    <input
    type="text"
    name="computer_grade"
    value={scholasticData.computer_grade}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center text-white font-bold'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.computer_grade),
    }}
    />
    </div>
    </Box>



    <Box sx={{display:'flex', gap:'24px', marginBottom:'6px'}} spacing={2}>
    <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>Moral Science / Value Education</Typography>
   <div>
   <input
   type="text" 
   name="science_marks"
   value={scholasticData.science_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal2("science_marks", e.target.value);
  }}
   size="small"
   className='border border-neutral-500 w-16 rounded-sm text-center'
   maxLength="3"
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   
   />
   </div>

    <div>
    <input
    name="science_grade"
    label="Grade"
    value={scholasticData.science_grade}
    size="small"
    className=' border  border-neutral-500 w-16 rounded-sm text-center text-white font-bold'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.science_grade),
    }}
    />
  </div>
  </Box>


  <Box sx={{display:'flex', gap:'24px',  marginBottom:'6px'}} spacing={2}>
  <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>Physical Education</Typography>
  <div  >
  <input
   type="text"
  label="enter marks"
  name="education_marks"
  value={scholasticData.education_marks}
  onChange={(e) => {
    handleChange(e);
    onChangeTotal2("education_marks", e.target.value);
  }}
  size="small"
  className=' border  border-neutral-500 w-16 rounded-sm text-center'
  maxLength="3"
  max="10"
  min="0"
  style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
  
  />
   </div>

   <div>
   <input
   name="education_grade"
   label="Grade"
   value={scholasticData.education_grade}
   size="small"
   className=' border  border-neutral-500 w-16 rounded-sm text-center text-white font-bold'
   style={{
    backgroundColor: getBackgroundColor(scholasticData.education_grade),
  }}
   />
  </div>
  </Box>


   <Box sx={{ display: 'flex', gap: '24px', marginBottom: '6px' }} spacing={2}>
   <Typography  className='w-[54%] 'sx={{fontSize:'14px', fontWeight:'400', }}> General Knowledge</Typography>
   <div>
   <input
   type="text"
   name="knowledge_marks"
   value={scholasticData.knowledge_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal2("knowledge_marks", e.target.value);
  }}
   maxLength="3"
   className=' border  border-neutral-500 w-16 rounded-sm text-center'
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   
   />
   </div>
   <div>

   <input
   type="text"
   name="knowledge_grade"
   value={scholasticData.knowledge_grade}
   maxLength="3"
   className=' border  border-neutral-500 w-16 rounded-sm text-center text-white font-bold'
   style={{
    backgroundColor: getBackgroundColor(scholasticData.knowledge_grade),
  }}
   />
  </div>
   </Box>



   <Box sx={{ display: 'flex', gap: '24px', marginBottom: '6px' }} spacing={2}>
   <Typography  className='w-[54%] 'sx={{fontSize:'14px', fontWeight:'400', }}> Drawing</Typography>
   <div>
   <input
   type="text"
   name="drawing_marks"
   value={scholasticData.drawing_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal2("drawing_marks", e.target.value);
  }}
   maxLength="3"
   className=' border  border-neutral-500 w-16 rounded-sm text-center'
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   
   />
   </div>
   <div>

   <input
   type="text"
   name="drawing_grade"
   value={scholasticData.drawing_grade}
   maxLength="3"
   className=' border  border-neutral-500 w-16 rounded-sm text-center text-white font-bold'
   style={{
    backgroundColor: getBackgroundColor(scholasticData.drawing_grade),
  }}
   />
  </div>
   </Box>

<br/>

  
   <Box  spacing={2}>
   <div className='w-[90%] flex gap-6 bg-[#E4E6EA] pt-2 mb-2 pl-2'>
    <Typography sx={{ width:'60%', fontSize:'16px', fontWeight:'500', marginBottom:'12px', }}>Project Activity (Hands - on Activities) </Typography>
    <div>
    <input
    type="text"
    name="project_activity_total_marks"
    value={scholasticData?.project_activity_total_marks}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center '
    maxLength="3"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    />
    </div>

    <div>
    <input
    type="text"
    name="project_activity_total_grade"
    value={scholasticData?.project_activity_total_grade}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center  text-white font-bold '
    style={{
      backgroundColor: getBackgroundColor(scholasticData?.project_activity_total_grade),
    }}
    />
    </div>
    </div>

    </Box>
  
  
  
    <Box sx={{ display: 'flex', gap: '24px', marginBottom: '6px' }} spacing={2}>
    <Typography className='w-[54%] ' sx={{ fontSize: '14px', fontWeight: '400' }}> English</Typography>
    <div>
    <input
    type="text"
    name="english_marks"
    value={scholasticData.english_marks}
    onChange={(e) => {
      handleChange(e);
      onChangeTotal3("english_marks", e.target.value);
    }}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center'
    maxLength="3"
    max="10"
    min="0"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    />
    </div>

    <div>
    <input
    type="text"
    name="english_grade"
    value={scholasticData.english_grade}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center text-white font-bold'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.english_grade),
    }}
    />
    </div>
    </Box>



    <Box sx={{display:'flex', gap:'24px', marginBottom:'6px'}} spacing={2}>
    <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}> Math</Typography>
   <div>
   <input
   type="text" 
   name="math_marks"
   value={scholasticData.math_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal3("math_marks", e.target.value);
  }}
   size="small"
   className='border border-neutral-500 w-16 rounded-sm text-center'
   maxLength="3"
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   
   />
   </div>

    <div>
    <input
    name="math_grade"
    label="Grade"
    value={scholasticData.math_grade}
    size="small"
    className=' border  border-neutral-500 w-16 rounded-sm text-center text-white font-bold'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.math_grade),
    }}
    />
  </div>
  </Box>


  <Box sx={{display:'flex', gap:'24px',  marginBottom:'6px'}} spacing={2}>
  <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}> E.V.S.</Typography>
  <div  >
  <input
   type="text"
  label="enter marks"
  name="evs_marks"
  value={scholasticData.evs_marks}
  onChange={(e) => {
    handleChange(e);
    onChangeTotal3("evs_marks", e.target.value);
  }}
  size="small"
  className=' border  border-neutral-500 w-16 rounded-sm text-center'
  maxLength="3"
  max="10"
  min="0"
  style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
  
  />
   </div>

   <div>
   <input
   name="evs_grade"
   label="Grade"
   value={scholasticData.evs_grade}
   size="small"
   className=' border  border-neutral-500 w-16 rounded-sm text-center text-white font-bold'
   style={{
    backgroundColor: getBackgroundColor(scholasticData.evs_grade),
  }}
   />
  </div>
  </Box>


   <Box sx={{ display: 'flex', gap: '24px', marginBottom: '6px' }} spacing={2}>
   <Typography  className='w-[54%] 'sx={{fontSize:'14px', fontWeight:'400', }}> Events and Celebrations (Art/Craft)</Typography>
   <div>
   <input
   type="text"
   name="craft_marks"
   value={scholasticData.craft_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal3("craft_marks", e.target.value);
  }}
   maxLength="3"
   className=' border  border-neutral-500 w-16 rounded-sm text-center'
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   
   />
   </div>
   <div>

   <input
   type="text"
   name="craft_grade"
   value={scholasticData.craft_grade}
   maxLength="3"
   className=' border  border-neutral-500 w-16 rounded-sm text-center text-white font-bold'
   style={{
    backgroundColor: getBackgroundColor(scholasticData.craft_grade),
  }}
   />
  </div>
   </Box>


   </div>



<div className='w-full '>


<Box sx={{display:'flex', marginBottom:'8px' }}>
<Typography style={{ color:'#2C348C'}}>Subject</Typography>
<Typography style={{marginLeft:'50%', color:'#2C348C'}} >Marks</Typography>
<Typography style={{marginLeft:'6%',color:'#2C348C'}}>Grade</Typography>
</Box>

   
    <Box  spacing={2}>
    <div className='w-[90%] flex gap-6 bg-[#E4E6EA] pt-2 mb-2 pl-2'>
    <Typography sx={{ width:'60%', fontSize:'16px', fontWeight:'500' , marginBottom:'12px', }}>Spelling (Co-curricular Activities)</Typography>
    <div>
    <input
    type="text"
    name="spelling_total_marks"
    value={scholasticData?.spelling_total_marks}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center '
    maxLength="3"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    />
    </div>

    <div>
    <input
    type="text"
    name="spelling_total_grade"
    value={scholasticData?.spelling_total_grade}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center  text-white font-bold '
    style={{
      backgroundColor: getBackgroundColor(scholasticData?.spelling_total_grade),
    }}
    />
    </div>
    </div>
    
    </Box>
   
  
   
    <Box sx={{ display: 'flex', gap: '24px', marginBottom: '6px' }} spacing={2}>
    <Typography className='w-[54%] ' sx={{ fontSize: '14px', fontWeight: '400' }}>Spells assigned words correctly</Typography>
    <div>
    <input
    type="text"
    name="words_marks"
    value={scholasticData.words_marks}
    onChange={(e) => {
      handleChange(e);
      onChangeTotal4("words_marks", e.target.value);
    }}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center'
    maxLength="3"
    max="10"
    min="0"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    />
    </div>

    <div>
    <input
    type="text"
    name="words_grade"
    value={scholasticData.words_grade}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center text-white font-bold'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.words_grade),
    }}
    />
    </div>
    </Box>



    <Box sx={{display:'flex', gap:'24px', marginBottom:'6px'}} spacing={2}>
    <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>Applies spelling skills to daily work</Typography>
   <div>
   <input
   type="text" 
   name="spelling_marks"
   value={scholasticData.spelling_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal4("spelling_marks", e.target.value);
  }}
   size="small"
   className='border border-neutral-500 w-16 rounded-sm text-center'
   maxLength="3"
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   
   />
   </div>

    <div>
    <input
    name="spelling_grade"
    label="Grade"
    value={scholasticData.spelling_grade}
    size="small"
    className=' border  border-neutral-500 w-16 rounded-sm text-center text-white font-bold'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.spelling_grade),
    }}
    />
  </div>
  </Box>


<br/>


   <Box  spacing={2}>
   <div className='w-[90%] flex gap-6 bg-[#E4E6EA] pt-2 mb-2 pl-2'>
    <Typography sx={{ width:'60%', fontSize:'16px', fontWeight:'500' , marginBottom:'12px', }}>Social  Skills (Co-curricular  Activities)  </Typography>
    <div>
    <input
    type="text"
    name="social_skills_total_marks"
    value={scholasticData?.social_skills_total_marks}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center '
    maxLength="3"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    />
    </div>

    <div>
    <input
    type="text"
    name="social_skills_total_grade"
    value={scholasticData?.social_skills_total_grade}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center  text-white font-bold '
    style={{
      backgroundColor: getBackgroundColor(scholasticData?.social_skills_total_grade),
    }}
    />
    </div>
    </div>
  
    </Box>
    <Box sx={{ display: 'flex', gap: '24px', marginBottom: '6px' }} spacing={2}>
    <Typography className='w-[54%] ' sx={{ fontSize: '14px', fontWeight: '400' }}>Obeys  class  room/school rules</Typography>
    <div>
    <input
    type="text"
    name="school_marks"
    value={scholasticData.school_marks}
    onChange={(e) => {
      handleChange(e);
      onChangeTotal5("school_marks", e.target.value);
    }}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center'
    maxLength="3"
    max="10"
    min="0"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    />
    </div>

    <div>
    <input
    type="text"
    name="school_grade"
    value={scholasticData.school_grade}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center text-white font-bold'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.school_grade),
    }}
    />
    </div>
    </Box>



    <Box sx={{display:'flex', gap:'24px', marginBottom:'6px'}} spacing={2}>
    <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>Demonstrates self control</Typography>
   <div>
   <input
   type="text" 
   name="self_marks"
   value={scholasticData.self_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal5("self_marks", e.target.value);
  }}
   size="small"
   className='border border-neutral-500 w-16 rounded-sm text-center'
   maxLength="3"
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   
   />
   </div>

    <div>
    <input
    name="self_grade"
    label="Grade"
    value={scholasticData.self_grade}
    size="small"
    className=' border  border-neutral-500 w-16 rounded-sm text-center text-white font-bold'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.self_grade),
    }}
    />
  </div>
  </Box>


  <Box sx={{display:'flex', gap:'24px',  marginBottom:'6px'}} spacing={2}>
  <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}> Shows respect to self & others</Typography>
  <div  >
  <input
   type="text"
  label="enter marks"
  name="respect_marks"
  value={scholasticData.respect_marks}
  onChange={(e) => {
    handleChange(e);
    onChangeTotal5("respect_marks", e.target.value);
  }}
  size="small"
  className=' border  border-neutral-500 w-16 rounded-sm text-center'
  maxLength="3"
  max="10"
  min="0"
  style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
  
  />
   </div>

   <div>
   <input
   name="respect_grade"
   label="Grade"
   value={scholasticData.respect_grade}
   size="small"
   className=' border  border-neutral-500 w-16 rounded-sm text-center text-white font-bold'
   style={{
    backgroundColor: getBackgroundColor(scholasticData.respect_grade),
  }}
   />
  </div>
  </Box>
  <br/>

   
   <Box  spacing={1}>
    <Typography sx={{background:'#E4E6EA', width:'87%', fontSize:'16px', fontWeight:'500' , display: 'flex',  gap:'24px', marginBottom:'12px', }}>Written Expression (Co-curricular Activities)
    <div>
    <input
    type="text"
    name="written_expression_total_marks"
    value={scholasticData?.written_expression_total_marks}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center ml-28 '
    maxLength="3"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    />
    </div>

    <div>
    <input
    type="text"
    name="written_expression_total_grade"
    value={scholasticData?.written_expression_total_grade}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center  text-white font-bold'
    style={{
      backgroundColor: getBackgroundColor(scholasticData?.written_expression_total_grade),
    }}
    />
    </div>
    </Typography>
    </Box>
  
    <Box sx={{ display: 'flex', gap: '24px', marginBottom: '6px' }} spacing={2}>
    <Typography className='w-[54%] ' sx={{ fontSize: '14px', fontWeight: '400' }}> Uses capital letters correctly</Typography>
    <div>
    <input
    type="text"
    name="letters_marks"
    value={scholasticData.letters_marks}
    onChange={(e) => {
      handleChange(e);
      onChangeTotal6("letters_marks", e.target.value);
    }}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center'
    maxLength="3"
    max="10"
    min="0"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    />
    </div>

    <div>
    <input
    type="text"
    name="letters_grade"
    value={scholasticData.letters_grade}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center text-white font-bold'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.letters_grade),
    }}
    />
    </div>
    </Box>



    <Box sx={{display:'flex', gap:'24px', marginBottom:'6px'}} spacing={2}>
    <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>Uses punctuation correctly</Typography>
   <div>
   <input
   type="text" 
   name="punctuation_marks"
   value={scholasticData.punctuation_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal6("punctuation_marks", e.target.value);
  }}
   size="small"
   className='border border-neutral-500 w-16 rounded-sm text-center'
   maxLength="3"
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   
   />
   </div>

    <div>
    <input
    name="punctuation_grade"
    label="Grade"
    value={scholasticData.punctuation_grade}
    size="small"
    className=' border  border-neutral-500 w-16 rounded-sm text-center text-white font-bold'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.punctuation_grade),
    }}
    />
  </div>
  </Box>


  <Box sx={{display:'flex', gap:'24px',  marginBottom:'6px'}} spacing={2}>
  <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}> Writes in complete sentences</Typography>
  <div  >
  <input
   type="text"
  label="enter marks"
  name="sentences_marks"
  value={scholasticData.sentences_marks}
  onChange={(e) => {
    handleChange(e);
    onChangeTotal6("sentences_marks", e.target.value);
  }}
  size="small"
  className=' border  border-neutral-500 w-16 rounded-sm text-center'
  maxLength="3"
  max="10"
  min="0"
  style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
  
  />
   </div>

   <div>
   <input
   name="sentences_grade"
   label="Grade"
   value={scholasticData.sentences_grade}
   size="small"
   className=' border  border-neutral-500 w-16 rounded-sm text-center text-white font-bold'
   style={{
    backgroundColor: getBackgroundColor(scholasticData.sentences_grade),
  }}
   />
  </div>
  </Box>

   
   <br/>
   <Box  spacing={1}>
   <div className='w-[90%] flex gap-6 bg-[#E4E6EA] pt-2 mb-2 pl-2'>
    <Typography sx={{ width:'60%', fontSize:'16px', fontWeight:'500', marginBottom:'12px', }}>Abacus (Co-curricular Activities) </Typography>
    <div>
    <input
    type="text"
    name="vedic_maths_total_marks"
    value={scholasticData?.vedic_maths_total_marks}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center '
    maxLength="3"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    />
    </div>

    <div>
    <input
    type="text"
    name="vedic_maths_total_grade"
    value={scholasticData?.vedic_maths_total_grade}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center  text-white font-bold'
    style={{
      backgroundColor: getBackgroundColor(scholasticData?.vedic_maths_total_grade),
    }}
    />
    </div>
    </div>
   
    </Box>
   
   
   
   
   
    <Box sx={{ display: 'flex', gap: '24px', marginBottom: '6px' }} spacing={2}>
    <Typography className='w-[54%] ' sx={{ fontSize: '14px', fontWeight: '400' }}>  Clear with the concept</Typography>
    <div>
    <input
    type="text"
    name="concept_marks"
    value={scholasticData.concept_marks}
    onChange={(e) => {
      handleChange(e);
      onChangeTotal7("concept_marks", e.target.value);
    }}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center'
    maxLength="3"
    max="10"
    min="0"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    />
    </div>

    <div>
    <input
    type="text"
    name="concept_grade"
    value={scholasticData.concept_grade}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center text-white font-bold'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.concept_grade),
    }}
    />
    </div>
    </Box>



    <Box sx={{display:'flex', gap:'24px', marginBottom:'6px'}} spacing={2}>
    <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}> Able to add & subtract with the beads</Typography>
   <div>
   <input
   type="text" 
   name="accuracy_marks"
   value={scholasticData.accuracy_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal7("accuracy_marks", e.target.value);
  }}
   size="small"
   className='border border-neutral-500 w-16 rounded-sm text-center'
   maxLength="3"
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    
   />
   </div>

    <div>
    <input
    name="accuracy_grade"
    label="Grade"
    value={scholasticData.accuracy_grade}
    size="small"
    className=' border  border-neutral-500 w-16 rounded-sm text-center text-white font-bold'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.accuracy_grade),
    }}
    />
  </div>
  </Box>


  <Box sx={{display:'flex', gap:'24px',  marginBottom:'6px'}} spacing={2}>
  <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>Able to visualise</Typography>
  <div  >
  <input
   type="text"
  label="enter marks"
  name="numerical_marks"
  value={scholasticData.numerical_marks}
  onChange={(e) => {
    handleChange(e);
    onChangeTotal7("numerical_marks", e.target.value);
  }}
  size="small"
  className=' border  border-neutral-500 w-16 rounded-sm text-center'
  maxLength="3"
  max="10"
  min="0"
  style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
  
  />
   </div>

   <div>
   <input
   name="numerical_grade"
   label="Grade"
   value={scholasticData.numerical_grade}
   size="small"
   className=' border  border-neutral-500 w-16 rounded-sm text-center text-white font-bold'
   style={{
    backgroundColor: getBackgroundColor(scholasticData.numerical_grade),
  }}
   />
  </div>
  </Box>

<br/>

  <Box  spacing={1}>
  <div className='w-[90%] flex gap-6 bg-[#E4E6EA] pt-2 mb-2 pl-2'>
    <Typography sx={{ width:'60%', fontSize:'16px', fontWeight:'500', marginBottom:'12px', }}>Reading</Typography>
    <div>
    <input
    type="text"
    name="Reading_total_marks"
    value={scholasticData?.Reading_total_marks}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center'
    maxLength="3"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    />
    </div>

    <div>
    <input
    type="text"
    name="Reading_total_grade"
    value={scholasticData?.Reading_total_grade}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center  text-white font-bold'
    style={{
      backgroundColor: getBackgroundColor(scholasticData?.Reading_total_grade),
    }}
    />
    </div>
    </div>
    
    </Box>

    <Box sx={{ display: 'flex', gap: '24px', marginBottom: '6px' }} spacing={2}>
    <Typography className='w-[54%] ' sx={{ fontSize: '14px', fontWeight: '400' }}>English</Typography>
    <div>
    <input
    type="text"
    name="reading_english_marks"
    value={scholasticData.reading_english_marks}
      onChange={(e) => {
    handleChange(e);
    onChangeTotal8("reading_english_marks", e.target.value);
  }}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center'
    maxLength="3"
    max="10"
    min="0"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    />
    </div>

    <div>
    <input
    type="text"
    name="reading_english_grade"
    value={scholasticData.reading_english_grade}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center text-white font-bold'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.reading_english_grade),
    }}
    />
    </div>
    </Box>



    <Box sx={{display:'flex', gap:'24px', marginBottom:'6px'}} spacing={2}>
    <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>Kannada</Typography>
   <div>
   <input
   type="text" 
   name="reading_kannada_marks"
   value={scholasticData.reading_kannada_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal8("reading_kannada_marks", e.target.value);
  }}
   size="small"
   className='border border-neutral-500 w-16 rounded-sm text-center'
   maxLength="3"
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   
   />
   </div>

    <div>
    <input
    name="reading_kannada_grade"
    label="Grade"
    value={scholasticData.reading_kannada_grade}
    size="small"
    className=' border  border-neutral-500 w-16 rounded-sm text-center text-white font-bold'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.reading_kannada_grade),
    }}
    />
  </div>
  </Box>


  <Box sx={{display:'flex', gap:'24px',  marginBottom:'6px'}} spacing={2}>
  <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>Hindi</Typography>
  <div  >
  <input
   type="text"
  label="enter marks"
  name="reading_hindi_marks"
  value={scholasticData.reading_hindi_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal8("reading_hindi_marks", e.target.value);
  }}
  size="small"
  className=' border  border-neutral-500 w-16 rounded-sm text-center'
  maxLength="3"
  max="10"
  min="0"
  style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
  
  />
   </div>

   <div>
   <input
   name="reading_hindi_grade"
   label="Grade"
   value={scholasticData.reading_hindi_grade}
   size="small"
   className=' border  border-neutral-500 w-16 rounded-sm text-center text-white font-bold'
   style={{
    backgroundColor: getBackgroundColor(scholasticData.reading_hindi_grade),
  }}
   />
  </div>
  </Box>
<br/>

  <Box  spacing={1}>
  <div className='w-[90%] flex gap-6 bg-[#E4E6EA] pt-2 mb-2 pl-2'>
    <Typography sx={{ width:'60%', fontSize:'16px', fontWeight:'500' , marginBottom:'12px', }}>Dictation</Typography>
    <div>
    <input
    type="text"
    name="Dictation_total_marks"
    value={scholasticData?.Dictation_total_marks}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center'
    maxLength="3"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    />
    </div>

    <div>
    <input
    type="text"
    name="Dictation_total_grade"
    value={scholasticData?.Dictation_total_grade}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center  text-white font-bold'
    style={{
      backgroundColor: getBackgroundColor(scholasticData?.Dictation_total_grade),
    }}
    />
    </div>
    </div>
    </Box>
 
    <Box sx={{ display: 'flex', gap: '24px', marginBottom: '6px' }} spacing={2}>
    <Typography className='w-[54%] ' sx={{ fontSize: '14px', fontWeight: '400' }}>English</Typography>
    <div>
    <input
    type="text"
    name="dictation_english_marks"
    value={scholasticData.dictation_english_marks}
    onChange={(e) => {
      handleChange(e);
      onChangeTotal9("dictation_english_marks", e.target.value);
    }}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center'
    maxLength="3"
    max="10"
    min="0"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    />
    </div>

    <div>
    <input
    type="text"
    name="dictation_english_grade"
    value={scholasticData.dictation_english_grade}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center text-white font-bold'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.dictation_english_grade),
    }}
    />
    </div>
    </Box>



    <Box sx={{display:'flex', gap:'24px', marginBottom:'6px'}} spacing={2}>
    <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>Kannada</Typography>
   <div>
   <input
   type="text" 
   name="dictation_kannada_marks"
   value={scholasticData.dictation_kannada_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal9("dictation_kannada_marks", e.target.value);
  }}
   size="small"
   className='border border-neutral-500 w-16 rounded-sm text-center'
   maxLength="3"
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   
   />
   </div>

    <div>
    <input
    name="dictation_kannada_grade"
    label="Grade"
    value={scholasticData.dictation_kannada_grade}
    size="small"
    className=' border  border-neutral-500 w-16 rounded-sm text-center text-white font-bold'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.dictation_kannada_grade),
    }}
    />
  </div>
  </Box>


  <Box sx={{display:'flex', gap:'24px',  marginBottom:'6px'}} spacing={2}>
  <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>Hindi</Typography>
  <div  >
  <input
   type="text"
  label="enter marks"
  name="dictation_hindi_marks"
  value={scholasticData.dictation_hindi_marks}
  onChange={(e) => {
    handleChange(e);
    onChangeTotal9("dictation_hindi_marks", e.target.value);
  }}
  size="small"
  className=' border  border-neutral-500 w-16 rounded-sm text-center'
  maxLength="3"
  max="10"
  min="0"
  style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
  
  />
   </div>

   <div>
   <input
   name="dictation_hindi_grade"
   label="Grade"
   value={scholasticData.dictation_hindi_grade}
   size="small"
   className=' border  border-neutral-500 w-16 rounded-sm text-center text-white font-bold'
   style={{
    backgroundColor: getBackgroundColor(scholasticData.dictation_hindi_grade),
  }}
   />
  </div>
  </Box>


  <div style={{marginTop:'30px'}}>
<p className='text-[14px] text-red-400'>Remarks : Maximum 1500 characters allowed</p>
  <textarea
         type='text'
          name="remarks"
          label="Remarks"
          placeholder='Remarks'
          value={scholasticData.remarks}
          onChange={handleChange}
          style={{width:'76%'}}
          className=' border  border-neutral-500 w-16 rounded-sm text-center h-24'
          size="small"
        />


</div>


<div className='flex mt-10 gap-9' >
  <Typography  >Attendence</Typography>
  <input
   type="text"
  label="Attendence"
  name="attendence"
  value={scholasticData.attendence}
  onChange={handleChange}
  size="small"
  className=' border  border-neutral-500 w-50 rounded-sm text-center'

  />
   </div>



</div>
</div>


<Box style={{ display: 'flex', gap:'40px' , justifyContent:'flex-end', marginRight:'5%' }}>
      <Button 
      type="submit"
      variant="contained"
      color="primary"
      style={{ ...buttonStyle, color: current_coscholastic5to10 && current_coscholastic5to10[0]?.[term]?.status === 'Finish' ? 'gray' : 'white' }}
      // disabled={current_coscholastic5to10 && current_coscholastic5to10[0]?.[term]?.status === 'Finish'}
      >
    Save Draft
     </Button>


     <Button
      variant="contained"
      color="primary"
      onClick={() => {
      if (!isAllFieldsFilled() || (current_coscholastic5to10 && current_coscholastic5to10[0]?.[term]?.status === 'Finish')) {
          alert('Please enter the all marks before finishing.');
          return; 
        }
         handleOpen();
        }}
     style={{
    ...buttonStyle,
    color:!isAllFieldsFilled() || (current_coscholastic5to10 && current_coscholastic5to10[0]?.[term]?.status === 'Finish') ? 'gray' : 'white'
    }}
    // disabled={ !isAllFieldsFilled() || (current_coscholastic5to10 && current_coscholastic5to10[0]?.[term]?.status === 'Finish') }
    >
  Finish
</Button>

      <Modal
        open={open}
        onClose={handleClose}
        BackdropProps={{ invisible: true }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       >
        <Box sx={style}>
          <Typography gutterBottom variant="h6">Confirm Finish</Typography>
          <Typography gutterBottom mb={3}>
            Student marks are non-edititable once you submit finish
          </Typography>
          <span style={{ display:'flex', justifyContent:'space-between' }}>
            <label>
            <input
            type="checkbox"
            checked={isCheckboxSelected}
            onChange={() => setIsCheckboxSelected(!isCheckboxSelected)}
            />
            <span className='ml-4'>Yes confirm</span>
            </label>
            <label>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button
              color="primary"
              onClick={onFinish}
              disabled={!isCheckboxSelected}
            >
              Submit
            </Button>
            </label>
          </span>
        </Box>
      </Modal>
     </Box>
    </form>
    </ThemeProvider>


    </div>
  )
}
