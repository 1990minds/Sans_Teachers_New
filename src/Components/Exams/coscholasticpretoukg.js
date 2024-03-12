import { Box, Breadcrumbs, Button, Modal, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { fetchOneStudent, studentSelector } from '../../api/student'
import { useDispatch, useSelector } from 'react-redux'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from "../../Images/lkg bar.png";
import { coscholasticpretoukgSelector, createcoscholasticpretoukg, fetchOneCoscholasticpretoukg, updateCoscholasticpretoukg } from '../../api/coscholasticpretoukg'

export default function Coscholastic() {

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






const {current_coscholasticpretoukg} = useSelector(coscholasticpretoukgSelector)
const dispatch = useDispatch()
const [open, setOpen] = React.useState(false);
const [isCheckboxSelected, setIsCheckboxSelected] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
const nav = useNavigate()

const [scholasticData, setScholasticData] = useState({
    sentences_marks: "",
    sentences_grade: "",
    confidence_marks: "",
    confidence_grade:"",
    listening_marks: "",
    listening_grade: "",
    story_telling_marks:"",
    story_telling_grade: "",
    narrating_marks: "",
    narrating_grade: "",
    guidlines_marks: "",
    guidlines_grade: "",
    writes_clearly_marks: "",
    writes_clearly_grade: "",
    sizes_shape_marks: "",
    sizes_shape_grade: "",
    understands_number_marks:"",
    understands_number_grade: "",
    identify_numbers_marks: "",
    identify_numbers_grade:"",
    write_numbers_marks: "",
    write_numbers_grade: "",
    etiquette_marks: "",
    etiquette_grade: "",
    Interaction_marks: "",
    Interaction_grade: "",
    participation_marks: "",
    participation_grade: "",
    leadership_marks: "",
    leadership_grade: "",
    confidences_marks: "",
    confidences_grade: "",
    personal_hygiene_marks: "",
    personal_hygiene_grade: "",
    art_craft_marks: "",
    art_craft_grade:"",
    coloring_marks:"",
    coloring_grade:"",
    clay_modelling_marks:"",
    clay_modelling_grade:"",
    neat_tidy_marks:"",
    neat_tidy_grade:"",
    home_work_marks:"",
    home_work_grade:"",
    school_on_time_marks:"",
    school_on_time_grade:"",
    independently_marks:"",
    independently_grade:"",
    book_materials_marks:"",
    book_materials_grade:"",
    work_in_the_given_time_marks:"",
    work_in_the_given_time_grade:"",
    neatness_marks:"",
    neatness_grade:"",
    Traces_patterns_marks:"",
    Traces_patterns_grade:"",
    upper_case_letters_marks:"",
    upper_case_letters_grade:"",
    lower_case_letters_marks:"",
    lower_case_letters_grade:"",
    write_clearly_marks:"",
    write_clearly_grade:"",
    facts_with_interest_marks:"",
    facts_with_interest_grade:"",
    awareness_marks:"",
    awareness_grade:"",
    enquiring_mind_marks:"",
    enquiring_mind_grade:"",
    answering_questions_marks:"",
    answering_questions_grade:"",
    color_within_shapes_marks:"",
    color_within_shapes_grade:"",
    free_hand_pictures_marks:"",
    free_hand_pictures_grade:"",
    handwriting_marks:"",
    handwriting_grade:"",
    hand_work_marks:"",
    hand_work_grade:"",
    games_mind_marks:"",
    games_mind_grade:"",
    expression_and_confidence_marks:"",
    expression_and_confidence_grade:"",
    poem_rhymes_marks:"",
    poem_rhymes_grade:"",
    coming_to_school_marks:"",
    coming_to_school_grade:"",
    children_marks:"",
    children_grade:"",
    shares_with_others_marks:"",
    shares_with_others_grade:"",
    other_speak_marks:"",
    other_speak_grade:"",
    accepts_responsibilities_marks:"",
    accepts_responsibilities_grade:"",
    english_marks:"",
    english_grade:"",
    math_marks:"",
    math_grade:"",
    shapes_color_marks:"",
    shapes_color_grade:"",
    add_subtract_marks:"",
    add_subtract_grade:"",
    able_to_visualise_marks:"",
    able_to_visualise_grade:"",
    clear_with_the_concept_marks:"",
    clear_with_the_concept_grade:"",
    literacy_marks:"",
    literacy_grade:"",
    numeracy_marks:"",
    numeracy_grade:"",
    E_V_S_marks:"",
    E_V_S_grade:"",
    hindi_marks:"",
    hindi_grade:"",
    kit_activity_marks:"",
    kit_activity_grade:"",
    conversation_total_marks:"",
    conversation_total_grade:"",
    english_total_marks:"",
    english_total_grade:"",
    handwriting_total_marks:"",
    handwriting_total_grade:"",
    math_number_concepts_total_marks:"",
    math_number_concepts_total_grade:"",
    personality_characteristics_total_marks:"",
    personality_characteristics_total_grade:"",
    What_else_total_marks:"",
    What_else_total_grade:"",
    work_habits_total_marks:"",
    work_habits_total_grade:"",
    english_worksheets_total_marks:"",
    english_worksheets_total_grade:"",
    general_knowledge_total_marks:"",
    general_knowledge_total_grade:"",
    motor_development_total_marks:"",
    motor_development_total_grade:"",
    recitation_total_marks:"",
    recitation_total_grade:"",
    social_emotional_development_total_marks:"",
    social_emotional_development_total_grade:"",
    worksheets_total_marks:"",
    worksheets_total_grade:"",
    abacus_total_marks:"",
    abacus_total_grade:"",
    written_skills_total_marks:"",
    written_skills_total_grade:"",
    

    attendence:"",
    remarks:""  
});

const isPrepClass = current_student?.joining_details?.class?.class_name === 'Prep' || current_student?.joining_details?.class?.class_name === 'Junior KG';

useEffect(() => {
  // Check if the condition is 'Prep' and set specific fields to 0
  if (isPrepClass) {
    setScholasticData((prevData) => ({
      ...prevData,
      abacus_total_marks: 0,
      abacus_total_grade: 0,
      add_subtract_marks:0,
      add_subtract_grade:0,
      able_to_visualise_marks:0,
      able_to_visualise_grade:0,
      clear_with_the_concept_marks:0,
      clear_with_the_concept_grade:0,
      hindi_marks:0,
      hindi_grade:0,
 
    }));
  }
}, [isPrepClass]);

console.log(scholasticData.abacus_total_marks)



console.log(scholasticData)

const isAllFieldsFilled = () => {
  if(isPrepClass){
  return Object.values(scholasticData).some((value) => value !== undefined && value !== null && value !== '');
  }
  else{
    return Object.values(scholasticData).every((value) => value !== undefined && value !== null && value !== '');
  }
};


useEffect(()=>{
dispatch(fetchOneStudent(id))
dispatch(fetchOneCoscholasticpretoukg(id))
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

  // let grade = '';
  // const numericValue = value.replace(/[^0-9]/g, '');
  
  // const marks = parseFloat(numericValue);
  
  // if (!isNaN(marks)) {
  //   if (marks > 10) {
  //     grade = 'Error';
  //   } else if (marks >= 9) {
  //     grade = 'A+';
  //   } else if (marks >= 8) {
  //     grade = 'A';
  //   } else if (marks >= 7) {
  //     grade = 'B+';
  //   } else if (marks >= 6) {
  //     grade = 'B';
  //   } else if (marks >= 5) {
  //     grade = 'C+';
  //   } else if (marks >= 4) {
  //     grade = 'C';
  //   }else if (marks >= 3) {
  //     grade = 'D+';
  //   }else if (marks >= 2) {
  //     grade = 'D';
  //   }else if (marks == 0 && marks <=1.9) {
  //     grade = 'E';
  //   }
  // }




  //testing 

  let grade = '';
  const numericValue = value.replace(/[^0-9.]/g, '');

const marks = parseFloat(numericValue);

// if (!isNaN(marks)) {
//     if (marks >= 0 && marks <= 1.9) {
//         grade = 'E';
//     } else if (marks >= 2 && marks <= 3.4) {
//         grade = 'D';
//     } else if (marks >= 3.5 && marks <= 4.0) {
//         grade = 'D+';
//     } else if (marks >= 4.1 && marks <= 5.0) {
//         grade = 'C';
//     } else if (marks >= 5.1 && marks <= 6.0) {
//         grade = 'C+';
//     } else if (marks >= 6.1 && marks <= 7.0) {
//         grade = 'B';
//     } else if (marks >= 7.1 && marks <= 8.0) {
//         grade = 'B+';
//     } else if (marks >= 8.1 && marks <= 9.0) {
//         grade = 'A';
//     } else if (marks >= 9.1 && marks <= 10) {
//         grade = 'A+';
//     } else {
//         grade = 'Error';
//     }
// } else {
//     grade = 'Error';
// }


if (!isNaN(marks) && marks >= 0 && marks <= 10) {
  if (marks >= 0 && marks <= 1.9) {
      grade = 'E';
  } else if (marks >= 2 && marks <= 3.4) {
      grade = 'D';
  } else if (marks >= 3.5 && marks <= 4.0) {
      grade = 'D+';
  } else if (marks >= 4.1 && marks <= 5.0) {
      grade = 'C';
  } else if (marks >= 5.1 && marks <= 6.0) {
      grade = 'C+';
  } else if (marks >= 6.1 && marks <= 7.0) {
      grade = 'B';
  } else if (marks >= 7.1 && marks <= 8.0) {
      grade = 'B+';
  } else if (marks >= 8.1 && marks <= 9.0) {
      grade = 'A';
  } else if (marks >= 9.1 && marks <= 10) {
      grade = 'A+';
  } else {
      grade = 'Error: Invalid Marks Range';
  }
} else if (isNaN(marks)) {
  grade = 'Error: Please enter a valid numeric value.';
} else {
  grade = 'Error: Marks should be between 0 and 10.';
}

  setScholasticData({
    ...scholasticData,
    [name]: numericValue,
    [name.replace("_marks", "_grade")]: grade,
  });
};

const getBackgroundColor = (grade) => {
  if (grade === 'A+') {
    return '#C756A1'; 
  } else if (grade === 'A') {
    return '#6C8CC8'; 
  } else if (grade === 'B+') {
    return '#00A651';
  } else if (grade === 'B') {
    return '#00AEEF';
  } else if (grade === 'C+') {
    return '#A6CE39';  
  } else if (grade === 'C') {
    return '#D7CB70';
  } else if (grade === 'D+') {
    return '#F5821F';  
  } else if (grade === 'D') {
    return '#C62026';  
  } else if (grade === 'E') {
    return '#6E2312';   
  } else if (grade === 'Error') {
    return 'black';     
  } else {
    return 'white';
  }
};





useEffect(() => {
  if (current_coscholasticpretoukg) {
    console.log(current_coscholasticpretoukg)
    setScholasticData({ 
        sentences_marks:current_coscholasticpretoukg[0]?.[term]?.conversation?.sentences?.marks || '',
        sentences_grade: current_coscholasticpretoukg[0]?.[term]?.conversation?.sentences?.grade || '',
        confidence_marks: current_coscholasticpretoukg[0]?.[term]?.conversation?.sentences?.marks  || '',
        confidence_grade: current_coscholasticpretoukg[0]?.[term]?.conversation?.sentences?.grade || '',
        conversation_total_marks: current_coscholasticpretoukg[0]?.[term]?.conversation?.conversation_total?.marks  || '',
        conversation_total_grade: current_coscholasticpretoukg[0]?.[term]?.conversation?.conversation_total?.grade || '',
        

        listening_marks:current_coscholasticpretoukg[0]?.[term]?.english?.listening?.marks || '',
        listening_grade: current_coscholasticpretoukg[0]?.[term]?.english?.listening?.grade || '',
        story_telling_marks: current_coscholasticpretoukg[0]?.[term]?.english?.story_telling?.marks  || '',
        story_telling_grade: current_coscholasticpretoukg[0]?.[term]?.english?.story_telling?.grade || '',
        narrating_marks:current_coscholasticpretoukg[0]?.[term]?.english?.narrating?.marks || '',
        narrating_grade: current_coscholasticpretoukg[0]?.[term]?.english?.narrating?.grade || '',
        english_total_marks:current_coscholasticpretoukg[0]?.[term]?.english?.english_total?.marks || '',
        english_total_grade: current_coscholasticpretoukg[0]?.[term]?.english?.english_total?.grade || '',
    
    
        guidlines_marks: current_coscholasticpretoukg[0]?.[term]?.handwriting?.guidlines?.marks  || '',
        guidlines_grade: current_coscholasticpretoukg[0]?.[term]?.handwriting?.guidlines?.grade || '',
        writes_clearly_marks:current_coscholasticpretoukg[0]?.[term]?.handwriting?.writes_clearly?.marks || '',
        writes_clearly_grade: current_coscholasticpretoukg[0]?.[term]?.handwriting?.writes_clearly?.grade || '',
        handwriting_total_marks:current_coscholasticpretoukg[0]?.[term]?.handwriting?.handwriting_total?.marks || '',
        handwriting_total_grade: current_coscholasticpretoukg[0]?.[term]?.handwriting?.handwriting_total?.grade || '',
        

        sizes_shape_marks: current_coscholasticpretoukg[0]?.[term]?.math_number_concepts?.sizes_shape?.marks  || '',
        sizes_shape_grade: current_coscholasticpretoukg[0]?.[term]?.math_number_concepts?.sizes_shape?.grade || '',
        understands_number_marks:current_coscholasticpretoukg[0]?.[term]?.math_number_concepts?.understands_number?.marks || '',
        understands_number_grade: current_coscholasticpretoukg[0]?.[term]?.math_number_concepts?.understands_number?.grade || '',
        identify_numbers_marks: current_coscholasticpretoukg[0]?.[term]?.math_number_concepts?.identify_numbers?.marks  || '',
        identify_numbers_grade: current_coscholasticpretoukg[0]?.[term]?.math_number_concepts?.identify_numbers?.grade || '',
        write_numbers_marks: current_coscholasticpretoukg[0]?.[term]?.math_number_concepts?.write_numbers?.marks  || '',
        write_numbers_grade: current_coscholasticpretoukg[0]?.[term]?.math_number_concepts?.write_numbers?.grade || '',
        math_number_concepts_total_marks: current_coscholasticpretoukg[0]?.[term]?.math_number_concepts?.math_number_concepts_total?.marks  || '',
        math_number_concepts_total_grade: current_coscholasticpretoukg[0]?.[term]?.math_number_concepts?.math_number_concepts_total?.grade || '',
      
        etiquette_marks:current_coscholasticpretoukg[0]?.[term]?.personality_characteristics?.etiquette?.marks || '',
        etiquette_grade: current_coscholasticpretoukg[0]?.[term]?.personality_characteristics?.etiquette?.grade || '',
        Interaction_marks: current_coscholasticpretoukg[0]?.[term]?.personality_characteristics?.Interaction?.marks  || '',
        Interaction_grade: current_coscholasticpretoukg[0]?.[term]?.personality_characteristics?.Interaction?.grade || '',
        participation_marks:current_coscholasticpretoukg[0]?.[term]?.personality_characteristics?.participation?.marks || '',
        participation_grade: current_coscholasticpretoukg[0]?.[term]?.personality_characteristics?.participation?.grade || '',
        leadership_marks: current_coscholasticpretoukg[0]?.[term]?.personality_characteristics?.leadership?.marks  || '',
        leadership_grade: current_coscholasticpretoukg[0]?.[term]?.personality_characteristics?.leadership?.grade || '',
        confidences_marks:current_coscholasticpretoukg[0]?.[term]?.personality_characteristics?.confidence?.marks || '',
        confidences_grade: current_coscholasticpretoukg[0]?.[term]?.personality_characteristics?.confidence?.grade || '',
        personal_hygiene_marks: current_coscholasticpretoukg[0]?.[term]?.personality_characteristics?.personal_hygiene?.marks  || '',
        personal_hygiene_grade: current_coscholasticpretoukg[0]?.[term]?.personality_characteristics?.personal_hygiene?.grade || '',
        personality_characteristics_total_marks: current_coscholasticpretoukg[0]?.[term]?.personality_characteristics?.personality_characteristics_total?.marks  || '',
        personality_characteristics_total_grade: current_coscholasticpretoukg[0]?.[term]?.personality_characteristics?.personality_characteristics_total?.grade || '',
     
        art_craft_marks:current_coscholasticpretoukg[0]?.[term]?.What_else?.art_craft?.marks || '',
        art_craft_grade: current_coscholasticpretoukg[0]?.[term]?.What_else?.art_craft?.grade || '',
        coloring_marks: current_coscholasticpretoukg[0]?.[term]?.What_else?.coloring?.marks  || '',
        coloring_grade: current_coscholasticpretoukg[0]?.[term]?.What_else?.coloring?.grade || '',
        clay_modelling_marks:current_coscholasticpretoukg[0]?.[term]?.What_else?.clay_modelling?.marks || '',
        clay_modelling_grade: current_coscholasticpretoukg[0]?.[term]?.What_else?.clay_modelling?.grade || '',
        What_else_total_marks:current_coscholasticpretoukg[0]?.[term]?.What_else?.What_else_total?.marks || '',
        What_else_total_grade: current_coscholasticpretoukg[0]?.[term]?.What_else?.What_else_total?.grade || '',


        neat_tidy_marks: current_coscholasticpretoukg[0]?.[term]?.work_habits?.neat_tidy?.marks  || '',
        neat_tidy_grade: current_coscholasticpretoukg[0]?.[term]?.work_habits?.neat_tidy?.grade || '',
        home_work_marks:current_coscholasticpretoukg[0]?.[term]?.work_habits?.home_work?.marks || '',
        home_work_grade: current_coscholasticpretoukg[0]?.[term]?.work_habits?.home_work?.grade || '',
        school_on_time_marks: current_coscholasticpretoukg[0]?.[term]?.work_habits?.school_on_time?.marks  || '',
        school_on_time_grade: current_coscholasticpretoukg[0]?.[term]?.work_habits?.school_on_time?.grade || '',
        independently_marks:current_coscholasticpretoukg[0]?.[term]?.work_habits?.independently?.marks || '',
        independently_grade: current_coscholasticpretoukg[0]?.[term]?.work_habits?.independently?.grade || '',
        book_materials_marks: current_coscholasticpretoukg[0]?.[term]?.work_habits?.book_materials?.marks  || '',
        book_materials_grade: current_coscholasticpretoukg[0]?.[term]?.work_habits?.book_materials?.grade || '',
        work_in_the_given_time_marks:current_coscholasticpretoukg[0]?.[term]?.work_habits?.work_in_the_given_time?.marks || '',
        work_in_the_given_time_grade: current_coscholasticpretoukg[0]?.[term]?.work_habits?.work_in_the_given_time?.grade || '',
        neatness_marks: current_coscholasticpretoukg[0]?.[term]?.work_habits?.neatness?.marks  || '',
        neatness_grade: current_coscholasticpretoukg[0]?.[term]?.work_habits?.neatness?.grade || '',
        work_habits_total_marks: current_coscholasticpretoukg[0]?.[term]?.work_habits?.work_habits_total?.marks  || '',
        work_habits_total_grade: current_coscholasticpretoukg[0]?.[term]?.work_habits?.work_habits_total?.grade || '',


  
        Traces_patterns_marks:current_coscholasticpretoukg[0]?.[term]?.english_worksheets?.Traces_patterns?.marks || '',
        Traces_patterns_grade: current_coscholasticpretoukg[0]?.[term]?.english_worksheets?.Traces_patterns?.grade || '',
        upper_case_letters_marks: current_coscholasticpretoukg[0]?.[term]?.english_worksheets?.upper_case_letters?.marks  || '',
        upper_case_letters_grade: current_coscholasticpretoukg[0]?.[term]?.english_worksheets?.upper_case_letters?.grade || '',
        lower_case_letters_marks:current_coscholasticpretoukg[0]?.[term]?.english_worksheets?.lower_case_letters?.marks || '',
        lower_case_letters_grade: current_coscholasticpretoukg[0]?.[term]?.english_worksheets?.lower_case_letters?.grade || '',
        write_clearly_marks: current_coscholasticpretoukg[0]?.[term]?.english_worksheets?.writes_clearly?.marks  || '',
        write_clearly_grade: current_coscholasticpretoukg[0]?.[term]?.english_worksheets?.writes_clearly?.grade || '',
        english_worksheets_total_marks: current_coscholasticpretoukg[0]?.[term]?.english_worksheets?.english_worksheets_total?.marks  || '',
        english_worksheets_total_grade: current_coscholasticpretoukg[0]?.[term]?.english_worksheets?.english_worksheets_total?.grade || '',


        facts_with_interest_marks:current_coscholasticpretoukg[0]?.[term]?.general_knowledge?.facts_with_interest?.marks || '',
        facts_with_interest_grade: current_coscholasticpretoukg[0]?.[term]?.general_knowledge?.facts_with_interest?.grade || '',
        awareness_marks: current_coscholasticpretoukg[0]?.[term]?.general_knowledge?.awareness?.marks  || '',
        awareness_grade: current_coscholasticpretoukg[0]?.[term]?.general_knowledge?.awareness?.grade || '',
        enquiring_mind_marks:current_coscholasticpretoukg[0]?.[term]?.general_knowledge?.enquiring_mind?.marks || '',
        enquiring_mind_grade: current_coscholasticpretoukg[0]?.[term]?.general_knowledge?.enquiring_mind?.grade || '',
        answering_questions_marks: current_coscholasticpretoukg[0]?.[term]?.general_knowledge?.answering_questions?.marks  || '',
        answering_questions_grade: current_coscholasticpretoukg[0]?.[term]?.general_knowledge?.answering_questions?.grade || '',
        general_knowledge_total_marks: current_coscholasticpretoukg[0]?.[term]?.general_knowledge?.general_knowledge_total?.marks  || '',
        general_knowledge_total_grade: current_coscholasticpretoukg[0]?.[term]?.general_knowledge?.general_knowledge_total?.grade || '',

        color_within_shapes_marks:current_coscholasticpretoukg[0]?.[term]?.motor_development?.color_within_shapes?.marks || '',
        color_within_shapes_grade: current_coscholasticpretoukg[0]?.[term]?.motor_development?.color_within_shapes?.grade || '',
        free_hand_pictures_marks: current_coscholasticpretoukg[0]?.[term]?.motor_development?.free_hand_pictures?.marks  || '',
        free_hand_pictures_grade: current_coscholasticpretoukg[0]?.[term]?.motor_development?.free_hand_pictures?.grade || '',
        handwriting_marks:current_coscholasticpretoukg[0]?.[term]?.motor_development?.handwriting?.marks || '',
        handwriting_grade: current_coscholasticpretoukg[0]?.[term]?.motor_development?.handwriting?.grade || '',
        hand_work_marks: current_coscholasticpretoukg[0]?.[term]?.motor_development?.hand_work?.marks  || '',
        hand_work_grade: current_coscholasticpretoukg[0]?.[term]?.motor_development?.hand_work?.grade || '',
        games_mind_marks:current_coscholasticpretoukg[0]?.[term]?.motor_development?.games?.marks || '',
        games_mind_grade: current_coscholasticpretoukg[0]?.[term]?.motor_development?.games?.grade || '',
        motor_development_total_marks:current_coscholasticpretoukg[0]?.[term]?.motor_development?.motor_development_total?.marks || '',
        motor_development_total_grade: current_coscholasticpretoukg[0]?.[term]?.motor_development?.motor_development_total?.grade || '',


        expression_and_confidence_marks: current_coscholasticpretoukg[0]?.[term]?.recitation?.expression_and_confidence?.marks  || '',
        expression_and_confidence_grade: current_coscholasticpretoukg[0]?.[term]?.recitation?.expression_and_confidence?.grade || '',
        poem_rhymes_marks:current_coscholasticpretoukg[0]?.[term]?.recitation?.poem_rhymes?.marks || '',
        poem_rhymes_grade: current_coscholasticpretoukg[0]?.[term]?.recitation?.poem_rhymes?.grade || '',
        recitation_total_marks:current_coscholasticpretoukg[0]?.[term]?.recitation?.recitation_total?.marks || '',
        recitation_total_grade: current_coscholasticpretoukg[0]?.[term]?.recitation?.recitation_total?.grade || '',


        coming_to_school_marks: current_coscholasticpretoukg[0]?.[term]?.social_emotional_development?.coming_to_school?.marks  || '',
        coming_to_school_grade: current_coscholasticpretoukg[0]?.[term]?.social_emotional_development?.coming_to_school?.grade || '',
        children_marks:current_coscholasticpretoukg[0]?.[term]?.social_emotional_development?.children?.marks || '',
        children_grade: current_coscholasticpretoukg[0]?.[term]?.social_emotional_development?.children?.grade || '',
        shares_with_others_marks: current_coscholasticpretoukg[0]?.[term]?.social_emotional_development?.shares_with_others?.marks  || '',
        shares_with_others_grade: current_coscholasticpretoukg[0]?.[term]?.social_emotional_development?.shares_with_others?.grade || '',
        other_speak_marks:current_coscholasticpretoukg[0]?.[term]?.social_emotional_development?.other_speak?.marks || '',
        other_speak_grade: current_coscholasticpretoukg[0]?.[term]?.social_emotional_development?.other_speak?.grade || '',
        accepts_responsibilities_marks: current_coscholasticpretoukg[0]?.[term]?.social_emotional_development?.accepts_responsibilities?.marks  || '',
        accepts_responsibilities_grade: current_coscholasticpretoukg[0]?.[term]?.social_emotional_development?.accepts_responsibilities?.grade || '',
        social_emotional_development_total_marks: current_coscholasticpretoukg[0]?.[term]?.social_emotional_development?.social_emotional_development_total?.marks  || '',
        social_emotional_development_total_grade: current_coscholasticpretoukg[0]?.[term]?.social_emotional_development?.social_emotional_development_total?.grade || '',

        english_marks: current_coscholasticpretoukg[0]?.[term]?.worksheets?.english?.marks  || '',
        english_grade: current_coscholasticpretoukg[0]?.[term]?.worksheets?.english?.grade || '',
        math_marks:current_coscholasticpretoukg[0]?.[term]?.worksheets?.math?.marks || '',
        math_grade: current_coscholasticpretoukg[0]?.[term]?.worksheets?.math?.grade || '',
        shapes_color_marks: current_coscholasticpretoukg[0]?.[term]?.worksheets?.shapes_color?.marks  || '',
        shapes_color_grade: current_coscholasticpretoukg[0]?.[term]?.worksheets?.shapes_color?.grade || '',
        worksheets_total_marks: current_coscholasticpretoukg[0]?.[term]?.worksheets?.worksheets_total?.marks  || '',
        worksheets_total_grade: current_coscholasticpretoukg[0]?.[term]?.worksheets?.worksheets_total?.grade || '',


        add_subtract_marks:current_coscholasticpretoukg[0]?.[term]?.abacus?.add_subtract?.marks || '',
        add_subtract_grade: current_coscholasticpretoukg[0]?.[term]?.abacus?.add_subtract?.grade || '',
        able_to_visualise_marks: current_coscholasticpretoukg[0]?.[term]?.abacus?.able_to_visualise?.marks  || '',
        able_to_visualise_grade: current_coscholasticpretoukg[0]?.[term]?.abacus?.able_to_visualise?.grade || '',
        clear_with_the_concept_marks: current_coscholasticpretoukg[0]?.[term]?.abacus?.clear_with_the_concept?.marks  || '',
        clear_with_the_concept_grade: current_coscholasticpretoukg[0]?.[term]?.abacus?.clear_with_the_concept?.grade || '',
        abacus_total_marks: current_coscholasticpretoukg[0]?.[term]?.abacus?.abacus_total?.marks  || '',
        abacus_total_grade: current_coscholasticpretoukg[0]?.[term]?.abacus?.abacus_total?.grade || '',


        literacy_marks: current_coscholasticpretoukg[0]?.[term]?.written_skills?.literacy?.marks  || '',
        literacy_grade: current_coscholasticpretoukg[0]?.[term]?.written_skills?.literacy?.grade || '',
        numeracy_marks:current_coscholasticpretoukg[0]?.[term]?.written_skills?.numeracy?.marks || '',
        numeracy_grade: current_coscholasticpretoukg[0]?.[term]?.written_skills?.numeracy?.grade || '',
        E_V_S_marks: current_coscholasticpretoukg[0]?.[term]?.written_skills?.E_V_S?.marks  || '',
        E_V_S_grade: current_coscholasticpretoukg[0]?.[term]?.written_skills?.E_V_S?.grade || '',
        hindi_marks:current_coscholasticpretoukg[0]?.[term]?.written_skills?.hindi?.marks || '',
        hindi_grade: current_coscholasticpretoukg[0]?.[term]?.written_skills?.hindi?.grade || '',
        kit_activity_marks: current_coscholasticpretoukg[0]?.[term]?.written_skills?.kit_activity?.marks  || '',
        kit_activity_grade: current_coscholasticpretoukg[0]?.[term]?.written_skills?.kit_activity?.grade || '',
        written_skills_total_marks: current_coscholasticpretoukg[0]?.[term]?.written_skills?.written_skills_total?.marks  || '',
        written_skills_total_grade: current_coscholasticpretoukg[0]?.[term]?.written_skills?.written_skills_total?.grade || '',


      remarks: current_coscholasticpretoukg[0]?.[term]?.remarks|| '',
      attendence: current_coscholasticpretoukg[0]?.[term]?.attendence|| '',

    });
  }
}, [current_coscholasticpretoukg]);




const onFinish = (e) => {
    e.preventDefault();


    console.log(term)
    const coscholasticData ={

      [term] :{
      conversation:{
      sentences:{
      marks: parseFloat(scholasticData.sentences_marks),
      grade:scholasticData.sentences_grade
      },
      confidence:{
      marks: parseFloat(scholasticData.confidence_marks),
      grade:scholasticData.confidence_grade
      },
      conversation_total:{
        marks: parseFloat(scholasticData.conversation_total_marks),
        grade:scholasticData.conversation_total_grade
        },
     },

     english:{
      listening:{
      marks: parseFloat(scholasticData.listening_marks),
      grade:scholasticData.listening_grade
      },
      story_telling:{
      marks: parseFloat(scholasticData.story_telling_marks),
      grade:scholasticData.story_telling_grade
      },
      narrating:{
      marks: parseFloat(scholasticData.narrating_marks),
      grade:scholasticData.narrating_grade
      },
      english_total:{
        marks: parseFloat(scholasticData.english_total_marks),
        grade:scholasticData.english_total_grade
        },

      },


      handwriting:{
        guidlines:{
      marks: parseFloat(scholasticData.guidlines_marks),
      grade:scholasticData.guidlines_grade
      },
      writes_clearly:{
      marks: parseFloat(scholasticData.writes_clearly_marks),
      grade:scholasticData.writes_clearly_grade
      },
      handwriting_total:{
        marks: parseFloat(scholasticData.handwriting_total_marks),
        grade:scholasticData.handwriting_total_grade
        },
      },



      math_number_concepts:{
        sizes_shape:{
      marks: parseFloat(scholasticData.sizes_shape_marks),
      grade:scholasticData.sizes_shape_grade
      }, 
      understands_number:{
      marks: parseFloat(scholasticData.understands_number_marks),
      grade:scholasticData.understands_number_grade
      }, 
      identify_numbers:{
      marks: parseFloat(scholasticData.identify_numbers_marks),
      grade:scholasticData.identify_numbers_grade
      }, 
      write_numbers:{
      marks: parseFloat(scholasticData.write_numbers_marks),
      grade:scholasticData.write_numbers_grade
      }, 
      math_number_concepts_total:{
        marks: parseFloat(scholasticData.math_number_concepts_total_marks),
        grade:scholasticData.math_number_concepts_total_grade
        }, 
      },

      personality_characteristics:{
        etiquette:{
      marks: parseFloat(scholasticData.etiquette_marks),
      grade:scholasticData.etiquette_grade
      }, 

      Interaction:{
      marks: parseFloat(scholasticData.Interaction_marks),
      grade:scholasticData.Interaction_grade
      }, 

      participation:{
        marks: parseFloat(scholasticData.participation_marks),
        grade:scholasticData.participation_grade
        }, 
  
        leadership:{
        marks: parseFloat(scholasticData.leadership_marks),
        grade:scholasticData.leadership_grade
        }, 

      confidence:{
        marks: parseFloat(scholasticData.confidences_marks),
        grade:scholasticData.confidences_grade
        }, 
    
      personal_hygiene:{
        marks: parseFloat(scholasticData.personal_hygiene_marks),
        grade:scholasticData.personal_hygiene_grade
        }, 
       
      personality_characteristics_total:{
        marks: parseFloat(scholasticData.personality_characteristics_total_marks),
        grade:scholasticData.personality_characteristics_total_grade
        }, 
      },


      What_else:{  
        art_craft:{
      marks: parseFloat(scholasticData.art_craft_marks),
      grade:scholasticData.art_craft_grade
      }, 

      coloring:{
      marks: parseFloat(scholasticData.coloring_marks),
      grade:scholasticData.coloring_grade
      }, 

      clay_modelling:{
      marks: parseFloat(scholasticData.clay_modelling_marks),
      grade:scholasticData.clay_modelling_grade
      } ,
      
      What_else_total:{
        marks: parseFloat(scholasticData.What_else_total_marks),
        grade:scholasticData.What_else_total_grade
        }  
      },

      work_habits:{     
        neat_tidy:{
      marks: parseFloat(scholasticData.neat_tidy_marks),
      grade:scholasticData.neat_tidy_grade
      }, 
      home_work:{
      marks: parseFloat(scholasticData.home_work_marks),
      grade:scholasticData.home_work_grade
      }, 
      school_on_time:{
      marks: parseFloat(scholasticData.school_on_time_marks),
      grade:scholasticData.school_on_time_grade
      },     
      
      independently:{
      marks: parseFloat(scholasticData.independently_marks),
      grade:scholasticData.independently_grade
      }, 
      book_materials:{
      marks: parseFloat(scholasticData.book_materials_marks),
      grade:scholasticData.book_materials_grade
      }, 
      work_in_the_given_time:{
      marks: parseFloat(scholasticData.work_in_the_given_time_marks),
      grade:scholasticData.work_in_the_given_time_grade
      },   
      neatness:{
      marks: parseFloat(scholasticData.neatness_marks),
      grade:scholasticData.neatness_grade
      },  
          
      work_habits_total:{
      marks: parseFloat(scholasticData.work_habits_total_marks),
      grade:scholasticData.work_habits_total_grade
            },     
      },

      english_worksheets:{    
      Traces_patterns:{
      marks: parseFloat(scholasticData.Traces_patterns_marks),
      grade:scholasticData.Traces_patterns_grade
      }, 
      upper_case_letters:{
      marks: parseFloat(scholasticData.upper_case_letters_marks),
      grade:scholasticData.upper_case_letters_grade
      }, 
      lower_case_letters:{
      marks: parseFloat(scholasticData.lower_case_letters_marks),
      grade:scholasticData.lower_case_letters_grade
      }, 
      writes_clearly:{
        marks: parseFloat(scholasticData.write_clearly_marks),
        grade:scholasticData.write_clearly_grade
        }, 
        english_worksheets_total:{
          marks: parseFloat(scholasticData.english_worksheets_total_marks),
          grade:scholasticData.english_worksheets_total_grade
          },     
      
      },

      general_knowledge:{    
      facts_with_interest:{
      marks: parseFloat(scholasticData.facts_with_interest_marks),
      grade:scholasticData.facts_with_interest_grade
      }, 
      awareness:{
      marks: parseFloat(scholasticData.awareness_marks),
      grade:scholasticData.awareness_grade
      }, 
      enquiring_mind:{
      marks: parseFloat(scholasticData.enquiring_mind_marks),
      grade:scholasticData.enquiring_mind_grade
      }, 
      answering_questions:{
      marks: parseFloat(scholasticData.answering_questions_marks),
      grade:scholasticData.answering_questions_grade
      },
      general_knowledge_total:{
      marks: parseFloat(scholasticData.general_knowledge_total_marks),
      grade:scholasticData.general_knowledge_total_grade
      },      
      
      },

      motor_development:{    
      color_within_shapes:{
      marks: parseFloat(scholasticData.color_within_shapes_marks),
      grade:scholasticData.color_within_shapes_grade
      }, 
      free_hand_pictures:{
      marks: parseFloat(scholasticData.free_hand_pictures_marks),
      grade:scholasticData.free_hand_pictures_grade
      }, 
      handwriting:{
      marks: parseFloat(scholasticData.handwriting_marks),
      grade:scholasticData.handwriting_grade
      }, 
      hand_work:{
      marks: parseFloat(scholasticData.hand_work_marks),
      grade:scholasticData.hand_work_grade
      }, 
      games:{
      marks: parseFloat(scholasticData.games_mind_marks),
      grade:scholasticData.games_mind_grade
      }, 
      motor_development_total:{
      marks: parseFloat(scholasticData.motor_development_total_marks),
      grade:scholasticData.motor_development_total_grade
      }, 
      
      },

      recitation:{    
      expression_and_confidence:{
      marks: parseFloat(scholasticData.expression_and_confidence_marks),
      grade:scholasticData.expression_and_confidence_grade
      }, 
      poem_rhymes:{
      marks: parseFloat(scholasticData.poem_rhymes_marks),
      grade:scholasticData.poem_rhymes_grade
      }, 
      recitation_total:{
      marks: parseFloat(scholasticData.recitation_total_marks),
      grade:scholasticData.recitation_total_grade
      }, 
      
      },

      
      social_emotional_development:{    
      coming_to_school:{
      marks: parseFloat(scholasticData.coming_to_school_marks),
      grade:scholasticData.coming_to_school_grade
      }, 
      children:{
      marks: parseFloat(scholasticData.children_marks),
      grade:scholasticData.children_grade
      }, 
      shares_with_others:{
      marks: parseFloat(scholasticData.shares_with_others_marks),
      grade:scholasticData.shares_with_others_grade
      }, 
      other_speak:{
      marks: parseFloat(scholasticData.other_speak_marks),
      grade:scholasticData.other_speak_grade
      }, 
      accepts_responsibilities:{
      marks: parseFloat(scholasticData.accepts_responsibilities_marks),
      grade:scholasticData.accepts_responsibilities_grade
      },
      social_emotional_development_total:{
      marks: parseFloat(scholasticData.social_emotional_development_total_marks),
      grade:scholasticData.social_emotional_development_total_grade
      },  
      
      },

      worksheets:{    
      english:{
      marks: parseFloat(scholasticData.english_marks),
      grade:scholasticData.english_grade
      }, 
      math:{
      marks: parseFloat(scholasticData.math_marks),
      grade:scholasticData.math_grade
      }, 
      shapes_color:{
      marks: parseFloat(scholasticData.shapes_color_marks),
      grade:scholasticData.shapes_color_grade
      },
      worksheets_total:{
      marks: parseFloat(scholasticData.worksheets_total_marks),
      grade:scholasticData.worksheets_total_grade
      },         
      },

      abacus:{    
      add_subtract:{
      marks: parseFloat(scholasticData.add_subtract_marks),
      grade:scholasticData.add_subtract_grade
      }, 
      able_to_visualise:{
      marks: parseFloat(scholasticData.able_to_visualise_marks),
      grade:scholasticData.able_to_visualise_grade
      }, 
      clear_with_the_concept:{
      marks: parseFloat(scholasticData.clear_with_the_concept_marks),
      grade:scholasticData.clear_with_the_concept_grade
      },  
      abacus_total:{
      marks: parseFloat(scholasticData.abacus_total_marks),
      grade:scholasticData.abacus_total_grade
      },     
      },

      written_skills:{    
      literacy:{
      marks: parseFloat(scholasticData.literacy_marks),
      grade:scholasticData.literacy_grade
      }, 
      numeracy:{
      marks: parseFloat(scholasticData.numeracy_marks),
      grade:scholasticData.numeracy_grade
      }, 
      E_V_S:{
      marks: parseFloat(scholasticData.E_V_S_marks),
      grade:scholasticData.E_V_S_grade
      },     
      hindi:{
      marks: parseFloat(scholasticData.hindi_marks),
      grade:scholasticData.hindi_grade
      }, 
      kit_activity:{
      marks: parseFloat(scholasticData.kit_activity_marks),
      grade:scholasticData.kit_activity_grade
      },   
      written_skills_total:{
      marks: parseFloat(scholasticData.written_skills_total_marks),
      grade:scholasticData.written_skills_total_grade
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
   
    if (current_coscholasticpretoukg?.length > 0) {
      const itemId = current_coscholasticpretoukg[0]?._id; 
      dispatch(updateCoscholasticpretoukg(coscholasticData, itemId));
      handleClose()
      if(isCheckboxSelected){
        nav(-1)}
    } else {
      dispatch(createcoscholasticpretoukg(coscholasticData));
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
    const total =
    parseFloat(updatedValues.sentences_marks) +
    parseFloat(updatedValues.confidence_marks) 

    const gradeTotal = total/2
       
    let grade = '';
    // if (!isNaN(gradeTotal)) {
    //   if (gradeTotal >= 101) {
    //     grade = 'Error';
    //   } else if (gradeTotal >= 91) {
    //     grade = 'A+';
    //   } else if (gradeTotal >= 81) {
    //     grade = 'A';
    //   } else if (gradeTotal >= 71) {
    //     grade = 'B+';
    //   } else if (gradeTotal >= 61) {
    //     grade = 'B';
    //   } else if (gradeTotal >= 51) {
    //     grade = 'C+';
    //   } else if (gradeTotal >= 41) {
    //     grade = 'C';
    //   }else if (gradeTotal >= 35) {
    //     grade = 'D+';
    //   }else if (gradeTotal >= 20) {
    //     grade = 'D';
    //   }else if (gradeTotal >= 0) {
    //     grade = 'E';
    //   }
    // }

    


if (!isNaN(gradeTotal)) {
    if (gradeTotal >= 0 && gradeTotal <= 1.9) {
        grade = 'E';
    } else if (gradeTotal >= 2 && gradeTotal <= 3.4) {
        grade = 'D';
    } else if (gradeTotal >= 3.5 && gradeTotal <= 4.0) {
        grade = 'D+';
    } else if (gradeTotal >= 4.1 && gradeTotal <= 5.0) {
        grade = 'C';
    } else if (gradeTotal >= 5.1 && gradeTotal <= 6.0) {
        grade = 'C+';
    } else if (gradeTotal >= 6.1 && gradeTotal <= 7.0) {
        grade = 'B';
    } else if (gradeTotal >= 7.1 && gradeTotal <= 8.0) {
        grade = 'B+';
    } else if (gradeTotal >= 8.1 && gradeTotal <= 9.0) {
        grade = 'A';
    } else if (gradeTotal >= 9.1 && gradeTotal <= 10) {
        grade = 'A+';
    } else {
        grade = 'Error';
    }
} else {
    grade = 'Error';
}

  
      return {
        ...updatedValues,
        conversation_total_marks: total,
        conversation_total_grade: grade,
      };
      });
      };

      const onChangeTotal1 = (fieldName, value) => {
        setScholasticData((prevFormData) => {
        const updatedValues = {
        ...prevFormData,
        [fieldName]: value,
        };  
        const total =
        parseFloat(updatedValues.listening_marks) +
        parseFloat(updatedValues.story_telling_marks) +
        parseFloat(updatedValues.narrating_marks)
          
        const gradeTotal = total/3

        let grade = '';
        // if (!isNaN(gradeTotal)) {
        //   if (gradeTotal >= 101) {
        //     grade = 'Error';
        //   } else if (gradeTotal >= 91) {
        //     grade = 'A+';
        //   } else if (gradeTotal >= 81) {
        //     grade = 'A';
        //   } else if (gradeTotal >= 71) {
        //     grade = 'B+';
        //   } else if (gradeTotal >= 61) {
        //     grade = 'B';
        //   } else if (gradeTotal >= 51) {
        //     grade = 'C+';
        //   } else if (gradeTotal >= 41) {
        //     grade = 'C';
        //   }else if (gradeTotal >= 35) {
        //     grade = 'D+';
        //   }else if (gradeTotal >= 20) {
        //     grade = 'D';
        //   }else if (gradeTotal >= 0) {
        //     grade = 'E';
        //   }
        // }

        if (!isNaN(gradeTotal)) {
          if (gradeTotal >= 0 && gradeTotal <= 1.9) {
              grade = 'E';
          } else if (gradeTotal >= 2 && gradeTotal <= 3.4) {
              grade = 'D';
          } else if (gradeTotal >= 3.5 && gradeTotal <= 4.0) {
              grade = 'D+';
          } else if (gradeTotal >= 4.1 && gradeTotal <= 5.0) {
              grade = 'C';
          } else if (gradeTotal >= 5.1 && gradeTotal <= 6.0) {
              grade = 'C+';
          } else if (gradeTotal >= 6.1 && gradeTotal <= 7.0) {
              grade = 'B';
          } else if (gradeTotal >= 7.1 && gradeTotal <= 8.0) {
              grade = 'B+';
          } else if (gradeTotal >= 8.1 && gradeTotal <= 9.0) {
              grade = 'A';
          } else if (gradeTotal >= 9.1 && gradeTotal <= 10) {
              grade = 'A+';
          } else {
              grade = 'Error';
          }
      } else {
          grade = 'Error';
      }
      
          return {
            ...updatedValues,
            english_total_marks: total,
            english_total_grade: grade,
          };
          });
          };

          const onChangeTotal2 = (fieldName, value) => {
            setScholasticData((prevFormData) => {
            const updatedValues = {
            ...prevFormData,
            [fieldName]: value,
            };  
            const total =
            parseFloat(updatedValues.guidlines_marks) +
            parseFloat(updatedValues.writes_clearly_marks) 
               
            const gradeTotal = total/2

        let grade = '';
        // if (!isNaN(gradeTotal)) {
        //   if (gradeTotal >= 101) {
        //     grade = 'Error';
        //   } else if (gradeTotal >= 91) {
        //     grade = 'A+';
        //   } else if (gradeTotal >= 81) {
        //     grade = 'A';
        //   } else if (gradeTotal >= 71) {
        //     grade = 'B+';
        //   } else if (gradeTotal >= 61) {
        //     grade = 'B';
        //   } else if (gradeTotal >= 51) {
        //     grade = 'C+';
        //   } else if (gradeTotal >= 41) {
        //     grade = 'C';
        //   }else if (gradeTotal >= 35) {
        //     grade = 'D+';
        //   }else if (gradeTotal >= 20) {
        //     grade = 'D';
        //   }else if (gradeTotal >= 0) {
        //     grade = 'E';
        //   }
        // }


        if (!isNaN(gradeTotal)) {
          if (gradeTotal >= 0 && gradeTotal <= 1.9) {
              grade = 'E';
          } else if (gradeTotal >= 2 && gradeTotal <= 3.4) {
              grade = 'D';
          } else if (gradeTotal >= 3.5 && gradeTotal <= 4.0) {
              grade = 'D+';
          } else if (gradeTotal >= 4.1 && gradeTotal <= 5.0) {
              grade = 'C';
          } else if (gradeTotal >= 5.1 && gradeTotal <= 6.0) {
              grade = 'C+';
          } else if (gradeTotal >= 6.1 && gradeTotal <= 7.0) {
              grade = 'B';
          } else if (gradeTotal >= 7.1 && gradeTotal <= 8.0) {
              grade = 'B+';
          } else if (gradeTotal >= 8.1 && gradeTotal <= 9.0) {
              grade = 'A';
          } else if (gradeTotal >= 9.1 && gradeTotal <= 10) {
              grade = 'A+';
          } else {
              grade = 'Error';
          }
      } else {
          grade = 'Error';
      }
          
              return {
                ...updatedValues,
                handwriting_total_marks: total,
                handwriting_total_grade: grade,
              };
              });
              };



              const onChangeTotal3 = (fieldName, value) => {
                setScholasticData((prevFormData) => {
                const updatedValues = {
                ...prevFormData,
                [fieldName]: value,
                };  
                const total =
                parseFloat(updatedValues.sizes_shape_marks) +
                parseFloat(updatedValues.understands_number_marks) +
                parseFloat(updatedValues.identify_numbers_marks) +
                parseFloat(updatedValues.write_numbers_marks) 
                   
                const gradeTotal = total/4

                let grade = '';
                // if (!isNaN(gradeTotal)) {
                //   if (gradeTotal >= 101) {
                //     grade = 'Error';
                //   } else if (gradeTotal >= 91) {
                //     grade = 'A+';
                //   } else if (gradeTotal >= 81) {
                //     grade = 'A';
                //   } else if (gradeTotal >= 71) {
                //     grade = 'B+';
                //   } else if (gradeTotal >= 61) {
                //     grade = 'B';
                //   } else if (gradeTotal >= 51) {
                //     grade = 'C+';
                //   } else if (gradeTotal >= 41) {
                //     grade = 'C';
                //   }else if (gradeTotal >= 35) {
                //     grade = 'D+';
                //   }else if (gradeTotal >= 20) {
                //     grade = 'D';
                //   }else if (gradeTotal >= 0) {
                //     grade = 'E';
                //   }
                // }

                if (!isNaN(gradeTotal)) {
                  if (gradeTotal >= 0 && gradeTotal <= 1.9) {
                      grade = 'E';
                  } else if (gradeTotal >= 2 && gradeTotal <= 3.4) {
                      grade = 'D';
                  } else if (gradeTotal >= 3.5 && gradeTotal <= 4.0) {
                      grade = 'D+';
                  } else if (gradeTotal >= 4.1 && gradeTotal <= 5.0) {
                      grade = 'C';
                  } else if (gradeTotal >= 5.1 && gradeTotal <= 6.0) {
                      grade = 'C+';
                  } else if (gradeTotal >= 6.1 && gradeTotal <= 7.0) {
                      grade = 'B';
                  } else if (gradeTotal >= 7.1 && gradeTotal <= 8.0) {
                      grade = 'B+';
                  } else if (gradeTotal >= 8.1 && gradeTotal <= 9.0) {
                      grade = 'A';
                  } else if (gradeTotal >= 9.1 && gradeTotal <= 10) {
                      grade = 'A+';
                  } else {
                      grade = 'Error';
                  }
              } else {
                  grade = 'Error';
              }
              
                  return {
                    ...updatedValues,
                    math_number_concepts_total_marks: total,
                    math_number_concepts_total_grade: grade,
                  };
                  });
                  };

                  const onChangeTotal4 = (fieldName, value) => {
                    setScholasticData((prevFormData) => {
                    const updatedValues = {
                    ...prevFormData,
                    [fieldName]: value,
                    };  
                    const total =
                    parseFloat(updatedValues.etiquette_marks) +
                    parseFloat(updatedValues.Interaction_marks) +
                    parseFloat(updatedValues.participation_marks) +
                    parseFloat(updatedValues.leadership_marks) +
                    parseFloat(updatedValues.confidences_marks) +
                    parseFloat(updatedValues.personal_hygiene_marks) 
                       
                    const gradeTotal = total/6

        let grade = '';
        // if (!isNaN(gradeTotal)) {
        //   if (gradeTotal >= 101) {
        //     grade = 'Error';
        //   } else if (gradeTotal >= 91) {
        //     grade = 'A+';
        //   } else if (gradeTotal >= 81) {
        //     grade = 'A';
        //   } else if (gradeTotal >= 71) {
        //     grade = 'B+';
        //   } else if (gradeTotal >= 61) {
        //     grade = 'B';
        //   } else if (gradeTotal >= 51) {
        //     grade = 'C+';
        //   } else if (gradeTotal >= 41) {
        //     grade = 'C';
        //   }else if (gradeTotal >= 35) {
        //     grade = 'D+';
        //   }else if (gradeTotal >= 20) {
        //     grade = 'D';
        //   }else if (gradeTotal >= 0) {
        //     grade = 'E';
        //   }
        // }
                  

        if (!isNaN(gradeTotal)) {
          if (gradeTotal >= 0 && gradeTotal <= 1.9) {
              grade = 'E';
          } else if (gradeTotal >= 2 && gradeTotal <= 3.4) {
              grade = 'D';
          } else if (gradeTotal >= 3.5 && gradeTotal <= 4.0) {
              grade = 'D+';
          } else if (gradeTotal >= 4.1 && gradeTotal <= 5.0) {
              grade = 'C';
          } else if (gradeTotal >= 5.1 && gradeTotal <= 6.0) {
              grade = 'C+';
          } else if (gradeTotal >= 6.1 && gradeTotal <= 7.0) {
              grade = 'B';
          } else if (gradeTotal >= 7.1 && gradeTotal <= 8.0) {
              grade = 'B+';
          } else if (gradeTotal >= 8.1 && gradeTotal <= 9.0) {
              grade = 'A';
          } else if (gradeTotal >= 9.1 && gradeTotal <= 10) {
              grade = 'A+';
          } else {
              grade = 'Error';
          }
      } else {
          grade = 'Error';
      }
                      return {
                        ...updatedValues,
                        personality_characteristics_total_marks: total,
                        personality_characteristics_total_grade: grade,
                      };
                      });
                      };



                      const onChangeTotal5 = (fieldName, value) => {
                        setScholasticData((prevFormData) => {
                        const updatedValues = {
                        ...prevFormData,
                        [fieldName]: value,
                        };  
                        const total =
                        parseFloat(updatedValues.art_craft_marks) +
                        parseFloat(updatedValues.coloring_marks) +
                        parseFloat(updatedValues.clay_modelling_marks)
                           
                        const gradeTotal = total/3

                        let grade = '';
                        // if (!isNaN(gradeTotal)) {
                        //   if (gradeTotal >= 101) {
                        //     grade = 'Error';
                        //   } else if (gradeTotal >= 91) {
                        //     grade = 'A+';
                        //   } else if (gradeTotal >= 81) {
                        //     grade = 'A';
                        //   } else if (gradeTotal >= 71) {
                        //     grade = 'B+';
                        //   } else if (gradeTotal >= 61) {
                        //     grade = 'B';
                        //   } else if (gradeTotal >= 51) {
                        //     grade = 'C+';
                        //   } else if (gradeTotal >= 41) {
                        //     grade = 'C';
                        //   }else if (gradeTotal >= 35) {
                        //     grade = 'D+';
                        //   }else if (gradeTotal >= 20) {
                        //     grade = 'D';
                        //   }else if (gradeTotal >= 0) {
                        //     grade = 'E';
                        //   }
                        // }

                        if (!isNaN(gradeTotal)) {
                          if (gradeTotal >= 0 && gradeTotal <= 1.9) {
                              grade = 'E';
                          } else if (gradeTotal >= 2 && gradeTotal <= 3.4) {
                              grade = 'D';
                          } else if (gradeTotal >= 3.5 && gradeTotal <= 4.0) {
                              grade = 'D+';
                          } else if (gradeTotal >= 4.1 && gradeTotal <= 5.0) {
                              grade = 'C';
                          } else if (gradeTotal >= 5.1 && gradeTotal <= 6.0) {
                              grade = 'C+';
                          } else if (gradeTotal >= 6.1 && gradeTotal <= 7.0) {
                              grade = 'B';
                          } else if (gradeTotal >= 7.1 && gradeTotal <= 8.0) {
                              grade = 'B+';
                          } else if (gradeTotal >= 8.1 && gradeTotal <= 9.0) {
                              grade = 'A';
                          } else if (gradeTotal >= 9.1 && gradeTotal >= 10) {
                              grade = 'A+';
                          } else {
                              grade = 'Error';
                          }
                      } else {
                          grade = 'Error';
                      }
                          return {
                            ...updatedValues,
                            What_else_total_marks: total,
                            What_else_total_grade: grade,
                          };
                          });
                          };


                          const onChangeTotal6 = (fieldName, value) => {
                            setScholasticData((prevFormData) => {
                            const updatedValues = {
                            ...prevFormData,
                            [fieldName]: value,
                            };  
                            const total =
                            parseFloat(updatedValues.neat_tidy_marks) +
                            parseFloat(updatedValues.home_work_marks) +
                            parseFloat(updatedValues.school_on_time_marks) +
                            parseFloat(updatedValues.independently_marks) +
                            parseFloat(updatedValues.book_materials_marks) +
                            parseFloat(updatedValues.work_in_the_given_time_marks) +
                            parseFloat(updatedValues.neatness_marks) 

                            const gradeTotal = total/7

                            let grade = '';
                            // if (!isNaN(gradeTotal)) {
                            //   if (gradeTotal >= 101) {
                            //     grade = 'Error';
                            //   } else if (gradeTotal >= 91) {
                            //     grade = 'A+';
                            //   } else if (gradeTotal >= 81) {
                            //     grade = 'A';
                            //   } else if (gradeTotal >= 71) {
                            //     grade = 'B+';
                            //   } else if (gradeTotal >= 61) {
                            //     grade = 'B';
                            //   } else if (gradeTotal >= 51) {
                            //     grade = 'C+';
                            //   } else if (gradeTotal >= 41) {
                            //     grade = 'C';
                            //   }else if (gradeTotal >= 35) {
                            //     grade = 'D+';
                            //   }else if (gradeTotal >= 20) {
                            //     grade = 'D';
                            //   }else if (gradeTotal >= 0) {
                            //     grade = 'E';
                            //   }
                            // }

                            if (!isNaN(gradeTotal)) {
                              if (gradeTotal >= 0 && gradeTotal <= 1.9) {
                                  grade = 'E';
                              } else if (gradeTotal >= 2 && gradeTotal <= 3.4) {
                                  grade = 'D';
                              } else if (gradeTotal >= 3.5 && gradeTotal <= 4.0) {
                                  grade = 'D+';
                              } else if (gradeTotal >= 4.1 && gradeTotal <= 5.0) {
                                  grade = 'C';
                              } else if (gradeTotal >= 5.1 && gradeTotal <= 6.0) {
                                  grade = 'C+';
                              } else if (gradeTotal >= 6.1 && gradeTotal <= 7.0) {
                                  grade = 'B';
                              } else if (gradeTotal >= 7.1 && gradeTotal <= 8.0) {
                                  grade = 'B+';
                              } else if (gradeTotal >= 8.1 && gradeTotal <= 9.0) {
                                  grade = 'A';
                              } else if (gradeTotal >= 9.1 && gradeTotal <= 10) {
                                  grade = 'A+';
                              } else {
                                  grade = 'Error';
                              }
                          } else {
                              grade = 'Error';
                          }
                          
                              return {
                                ...updatedValues,
                                work_habits_total_marks: total,
                                work_habits_total_grade: grade,
                              };
                              });
                              };


                              const onChangeTotal7 = (fieldName, value) => {
                                setScholasticData((prevFormData) => {
                                const updatedValues = {
                                ...prevFormData,
                                [fieldName]: value,
                                };  
                                const total =
                                parseFloat(updatedValues.Traces_patterns_marks) +
                                parseFloat(updatedValues.upper_case_letters_marks) +
                                parseFloat(updatedValues.lower_case_letters_marks) +
                                parseFloat(updatedValues.write_clearly_marks) 
                                   
                                const gradeTotal = total/4

        let grade = '';
        // if (!isNaN(gradeTotal)) {
        //   if (gradeTotal >= 101) {
        //     grade = 'Error';
        //   } else if (gradeTotal >= 91) {
        //     grade = 'A+';
        //   } else if (gradeTotal >= 81) {
        //     grade = 'A';
        //   } else if (gradeTotal >= 71) {
        //     grade = 'B+';
        //   } else if (gradeTotal >= 61) {
        //     grade = 'B';
        //   } else if (gradeTotal >= 51) {
        //     grade = 'C+';
        //   } else if (gradeTotal >= 41) {
        //     grade = 'C';
        //   }else if (gradeTotal >= 35) {
        //     grade = 'D+';
        //   }else if (gradeTotal >= 20) {
        //     grade = 'D';
        //   }else if (gradeTotal >= 0) {
        //     grade = 'E';
        //   }
        // }
        if (!isNaN(gradeTotal)) {
          if (gradeTotal >= 0 && gradeTotal <= 1.9) {
              grade = 'E';
          } else if (gradeTotal >= 2 && gradeTotal <= 3.4) {
              grade = 'D';
          } else if (gradeTotal >= 3.5 && gradeTotal <= 4.0) {
              grade = 'D+';
          } else if (gradeTotal >= 4.1 && gradeTotal <= 5.0) {
              grade = 'C';
          } else if (gradeTotal >= 5.1 && gradeTotal <= 6.0) {
              grade = 'C+';
          } else if (gradeTotal >= 6.1 && gradeTotal <= 7.0) {
              grade = 'B';
          } else if (gradeTotal >= 7.1 && gradeTotal <= 8.0) {
              grade = 'B+';
          } else if (gradeTotal >= 8.1 && gradeTotal <= 9.0) {
              grade = 'A';
          } else if (gradeTotal >= 9.1 && gradeTotal <= 10) {
              grade = 'A+';
          } else {
              grade = 'Error';
          }
      } else {
          grade = 'Error';
      }
                              
                                  return {
                                    ...updatedValues,
                                    english_worksheets_total_marks: total,
                                    english_worksheets_total_grade: grade,
                                  };
                                  });
                                  };

                                  const onChangeTotal8 = (fieldName, value) => {
                                    setScholasticData((prevFormData) => {
                                    const updatedValues = {
                                    ...prevFormData,
                                    [fieldName]: value,
                                    };  
                                    const total =
                                    parseFloat(updatedValues.facts_with_interest_marks) +
                                    parseFloat(updatedValues.awareness_marks) +
                                    parseFloat(updatedValues.enquiring_mind_marks) +
                                    parseFloat(updatedValues.answering_questions_marks) 
                                       
                                    const gradeTotal = total/4

                                    let grade = '';
                                    // if (!isNaN(gradeTotal)) {
                                    //   if (gradeTotal >= 101) {
                                    //     grade = 'Error';
                                    //   } else if (gradeTotal >= 90) {
                                    //     grade = 'A+';
                                    //   } else if (gradeTotal >= 80) {
                                    //     grade = 'A';
                                    //   } else if (gradeTotal >= 70) {
                                    //     grade = 'B+';
                                    //   } else if (gradeTotal >= 60) {
                                    //     grade = 'B';
                                    //   } else if (gradeTotal >= 50) {
                                    //     grade = 'C+';
                                    //   } else if (gradeTotal >= 40) {
                                    //     grade = 'C';
                                    //   }else if (gradeTotal >= 34) {
                                    //     grade = 'D+';
                                    //   }else if (gradeTotal >= 19) {
                                    //     grade = 'D';
                                    //   }else if (gradeTotal >= 0) {
                                    //     grade = 'E';
                                    //   }
                                    // }

                                    if (!isNaN(gradeTotal)) {
                                      if (gradeTotal >= 0 && gradeTotal <= 1.9) {
                                          grade = 'E';
                                      } else if (gradeTotal >= 2 && gradeTotal <= 3.4) {
                                          grade = 'D';
                                      } else if (gradeTotal >= 3.5 && gradeTotal <= 4.0) {
                                          grade = 'D+';
                                      } else if (gradeTotal >= 4.1 && gradeTotal <= 5.0) {
                                          grade = 'C';
                                      } else if (gradeTotal >= 5.1 && gradeTotal <= 6.0) {
                                          grade = 'C+';
                                      } else if (gradeTotal >= 6.1 && gradeTotal <= 7.0) {
                                          grade = 'B';
                                      } else if (gradeTotal >= 7.1 && gradeTotal <= 8.0) {
                                          grade = 'B+';
                                      } else if (gradeTotal >= 8.1 && gradeTotal <= 9.0) {
                                          grade = 'A';
                                      } else if (gradeTotal >= 9.1 && gradeTotal <= 10) {
                                          grade = 'A+';
                                      } else {
                                          grade = 'Error';
                                      }
                                  } else {
                                      grade = 'Error';
                                  }
                                  
                                      return {
                                        ...updatedValues,
                                        general_knowledge_total_marks: total,
                                        general_knowledge_total_grade: grade,
                                      };
                                      });
                                      };

                                      const onChangeTotal9 = (fieldName, value) => {
                                        setScholasticData((prevFormData) => {
                                        const updatedValues = {
                                        ...prevFormData,
                                        [fieldName]: value,
                                        };  
                                        const total =
                                        parseFloat(updatedValues.color_within_shapes_marks) +
                                        parseFloat(updatedValues.free_hand_pictures_marks) +
                                        parseFloat(updatedValues.handwriting_marks) +
                                        parseFloat(updatedValues.hand_work_marks) +
                                        parseFloat(updatedValues.games_mind_marks) 

                                        const gradeTotal = total/5

                                        let grade = '';
                                        // if (!isNaN(gradeTotal)) {
                                        //   if (gradeTotal >= 101) {
                                        //     grade = 'Error';
                                        //   } else if (gradeTotal >= 90) {
                                        //     grade = 'A+';
                                        //   } else if (gradeTotal >= 80) {
                                        //     grade = 'A';
                                        //   } else if (gradeTotal >= 70) {
                                        //     grade = 'B+';
                                        //   } else if (gradeTotal >= 60) {
                                        //     grade = 'B';
                                        //   } else if (gradeTotal >= 50) {
                                        //     grade = 'C+';
                                        //   } else if (gradeTotal >= 40) {
                                        //     grade = 'C';
                                        //   }else if (gradeTotal >= 34) {
                                        //     grade = 'D+';
                                        //   }else if (gradeTotal >= 19) {
                                        //     grade = 'D';
                                        //   }else if (gradeTotal >= 0) {
                                        //     grade = 'E';
                                        //   }
                                        // }

                                        if (!isNaN(gradeTotal)) {
                                          if (gradeTotal >= 0 && gradeTotal <= 1.9) {
                                              grade = 'E';
                                          } else if (gradeTotal >= 2 && gradeTotal <= 3.4) {
                                              grade = 'D';
                                          } else if (gradeTotal >= 3.5 && gradeTotal <= 4.0) {
                                              grade = 'D+';
                                          } else if (gradeTotal >= 4.1 && gradeTotal <= 5.0) {
                                              grade = 'C';
                                          } else if (gradeTotal >= 5.1 && gradeTotal <= 6.0) {
                                              grade = 'C+';
                                          } else if (gradeTotal >= 6.1 && gradeTotal <= 7.0) {
                                              grade = 'B';
                                          } else if (gradeTotal >= 7.1 && gradeTotal <= 8.0) {
                                              grade = 'B+';
                                          } else if (gradeTotal >= 8.1 && gradeTotal <= 9.0) {
                                              grade = 'A';
                                          } else if (gradeTotal >= 9.1 && gradeTotal <= 10) {
                                              grade = 'A+';
                                          } else {
                                              grade = 'Error';
                                          }
                                      } else {
                                          grade = 'Error';
                                      }
                                      
                                          return {
                                            ...updatedValues,
                                            motor_development_total_marks: total,
                                            motor_development_total_grade: grade,
                                          };
                                          });
                                          };



                                          const onChangeTotal10 = (fieldName, value) => {
                                            setScholasticData((prevFormData) => {
                                            const updatedValues = {
                                            ...prevFormData,
                                            [fieldName]: value,
                                            };  
                                            const total =
                                            parseFloat(updatedValues.expression_and_confidence_marks) +
                                            parseFloat(updatedValues.poem_rhymes_marks) 
                                               
                                            const gradeTotal = total/2

                                            let grade = '';
                                            // if (!isNaN(gradeTotal)) {
                                            //   if (gradeTotal >= 101) {
                                            //     grade = 'Error';
                                            //   } else if (gradeTotal >= 90) {
                                            //     grade = 'A+';
                                            //   } else if (gradeTotal >= 80) {
                                            //     grade = 'A';
                                            //   } else if (gradeTotal >= 70) {
                                            //     grade = 'B+';
                                            //   } else if (gradeTotal >= 60) {
                                            //     grade = 'B';
                                            //   } else if (gradeTotal >= 50) {
                                            //     grade = 'C+';
                                            //   } else if (gradeTotal >= 40) {
                                            //     grade = 'C';
                                            //   }else if (gradeTotal >= 34) {
                                            //     grade = 'D+';
                                            //   }else if (gradeTotal >= 19) {
                                            //     grade = 'D';
                                            //   }else if (gradeTotal >= 0) {
                                            //     grade = 'E';
                                            //   }
                                            // }
                                            if (!isNaN(gradeTotal)) {
                                              if (gradeTotal >= 0 && gradeTotal <= 1.9) {
                                                  grade = 'E';
                                              } else if (gradeTotal >= 2 && gradeTotal <= 3.4) {
                                                  grade = 'D';
                                              } else if (gradeTotal >= 3.5 && gradeTotal <= 4.0) {
                                                  grade = 'D+';
                                              } else if (gradeTotal >= 4.1 && gradeTotal <= 5.0) {
                                                  grade = 'C';
                                              } else if (gradeTotal >= 5.1 && gradeTotal <= 6.0) {
                                                  grade = 'C+';
                                              } else if (gradeTotal >= 6.1 && gradeTotal <= 7.0) {
                                                  grade = 'B';
                                              } else if (gradeTotal >= 7.1 && gradeTotal <= 8.0) {
                                                  grade = 'B+';
                                              } else if (gradeTotal >= 8.1 && gradeTotal <= 9.0) {
                                                  grade = 'A';
                                              } else if (gradeTotal >= 9.1 && gradeTotal <= 10) {
                                                  grade = 'A+';
                                              } else {
                                                  grade = 'Error';
                                              }
                                          } else {
                                              grade = 'Error';
                                          }
                                              return {
                                                ...updatedValues,
                                                recitation_total_marks: total,
                                                recitation_total_grade: grade,
                                              };
                                              });
                                              };

                                              const onChangeTotal11 = (fieldName, value) => {
                                                setScholasticData((prevFormData) => {
                                                const updatedValues = {
                                                ...prevFormData,
                                                [fieldName]: value,
                                                };  
                                                const total =
                                                parseFloat(updatedValues.coming_to_school_marks) +
                                                parseFloat(updatedValues.children_marks) +
                                                parseFloat(updatedValues.shares_with_others_marks) +
                                                parseFloat(updatedValues.other_speak_marks) +
                                                parseFloat(updatedValues.accepts_responsibilities_marks) 
        
                                                const gradeTotal = total/5

        let grade = '';
        // if (!isNaN(gradeTotal)) {
        //   if (gradeTotal >= 101) {
        //     grade = 'Error';
        //   } else if (gradeTotal >= 90) {
        //     grade = 'A+';
        //   } else if (gradeTotal >= 80) {
        //     grade = 'A';
        //   } else if (gradeTotal >= 70) {
        //     grade = 'B+';
        //   } else if (gradeTotal >= 60) {
        //     grade = 'B';
        //   } else if (gradeTotal >= 50) {
        //     grade = 'C+';
        //   } else if (gradeTotal >= 40) {
        //     grade = 'C';
        //   }else if (gradeTotal >= 34) {
        //     grade = 'D+';
        //   }else if (gradeTotal >= 19) {
        //     grade = 'D';
        //   }else if (gradeTotal >= 0) {
        //     grade = 'E';
        //   }
        // }

        if (!isNaN(gradeTotal)) {
          if (gradeTotal >= 0 && gradeTotal <= 1.9) {
              grade = 'E';
          } else if (gradeTotal >= 2 && gradeTotal <= 3.4) {
              grade = 'D';
          } else if (gradeTotal >= 3.5 && gradeTotal <= 4.0) {
              grade = 'D+';
          } else if (gradeTotal >= 4.1 && gradeTotal <= 5.0) {
              grade = 'C';
          } else if (gradeTotal >= 5.1 && gradeTotal <= 6.0) {
              grade = 'C+';
          } else if (gradeTotal >= 6.1 && gradeTotal <= 7.0) {
              grade = 'B';
          } else if (gradeTotal >= 7.1 && gradeTotal <= 8.0) {
              grade = 'B+';
          } else if (gradeTotal >= 8.1 && gradeTotal <= 9.0) {
              grade = 'A';
          } else if (gradeTotal >= 9.1 && gradeTotal <= 10) {
              grade = 'A+';
          } else {
              grade = 'Error';
          }
      } else {
          grade = 'Error';
      }
                                              
        return {
        ...updatedValues,
        social_emotional_development_total_marks: total,
        social_emotional_development_total_grade: grade,
        };
        });
        };


        const onChangeTotal12 = (fieldName, value) => {
        setScholasticData((prevFormData) => {
        const updatedValues = {
        ...prevFormData,
                                                    [fieldName]: value,
                                                    };  
                                                    const total =
                                                    parseFloat(updatedValues.english_marks) +
                                                    parseFloat(updatedValues.math_marks) +
                                                    parseFloat(updatedValues.shapes_color_marks)
                                                       
                                                    const gradeTotal = total/3

                                                    let grade = '';
                                                    if (!isNaN(gradeTotal)) {
                                                      if (gradeTotal >= 101) {
                                                        grade = 'Error';
                                                      } else if (gradeTotal >= 90) {
                                                        grade = 'A+';
                                                      } else if (gradeTotal >= 80) {
                                                        grade = 'A';
                                                      } else if (gradeTotal >= 70) {
                                                        grade = 'B+';
                                                      } else if (gradeTotal >= 60) {
                                                        grade = 'B';
                                                      } else if (gradeTotal >= 50) {
                                                        grade = 'C+';
                                                      } else if (gradeTotal >= 40) {
                                                        grade = 'C';
                                                      }else if (gradeTotal >= 34) {
                                                        grade = 'D+';
                                                      }else if (gradeTotal >= 19) {
                                                        grade = 'D';
                                                      }else if (gradeTotal >= 0) {
                                                        grade = 'E';
                                                      }
                                                    }
                                                  
                                                      return {
                                                        ...updatedValues,
                                                        worksheets_total_marks: total,
                                                        worksheets_total_grade: grade,
                                                      };
                                                      });
                                                      };



                                                      const onChangeTotal13 = (fieldName, value) => {
                                                        setScholasticData((prevFormData) => {
                                                        const updatedValues = {
                                                        ...prevFormData,
                                                        [fieldName]: value,
                                                        };  
                                                        const total =
                                                        parseFloat(updatedValues.add_subtract_marks) +
                                                        parseFloat(updatedValues.able_to_visualise_marks) +
                                                        parseFloat(updatedValues.clear_with_the_concept_marks)
                                                           
                                                        const gradeTotal = total/3

                                                        let grade = '';
                                                        // if (!isNaN(gradeTotal)) {
                                                        //   if (gradeTotal >= 101) {
                                                        //     grade = 'Error';
                                                        //   } else if (gradeTotal >= 90) {
                                                        //     grade = 'A+';
                                                        //   } else if (gradeTotal >= 80) {
                                                        //     grade = 'A';
                                                        //   } else if (gradeTotal >= 70) {
                                                        //     grade = 'B+';
                                                        //   } else if (gradeTotal >= 60) {
                                                        //     grade = 'B';
                                                        //   } else if (gradeTotal >= 50) {
                                                        //     grade = 'C+';
                                                        //   } else if (gradeTotal >= 40) {
                                                        //     grade = 'C';
                                                        //   }else if (gradeTotal >= 34) {
                                                        //     grade = 'D+';
                                                        //   }else if (gradeTotal >= 19) {
                                                        //     grade = 'D';
                                                        //   }else if (gradeTotal >= 0) {
                                                        //     grade = 'E';
                                                        //   }
                                                        // }

                                                        if (!isNaN(gradeTotal)) {
                                                          if (gradeTotal >= 0 && gradeTotal <= 1.9) {
                                                              grade = 'E';
                                                          } else if (gradeTotal >= 2 && gradeTotal <= 3.4) {
                                                              grade = 'D';
                                                          } else if (gradeTotal >= 3.5 && gradeTotal <= 4.0) {
                                                              grade = 'D+';
                                                          } else if (gradeTotal >= 4.1 && gradeTotal <= 5.0) {
                                                              grade = 'C';
                                                          } else if (gradeTotal >= 5.1 && gradeTotal <= 6.0) {
                                                              grade = 'C+';
                                                          } else if (gradeTotal >= 6.1 && gradeTotal <= 7.0) {
                                                              grade = 'B';
                                                          } else if (gradeTotal >= 7.1 && gradeTotal <= 8.0) {
                                                              grade = 'B+';
                                                          } else if (gradeTotal >= 8.1 && gradeTotal <= 9.0) {
                                                              grade = 'A';
                                                          } else if (gradeTotal >= 9.1 && gradeTotal <= 10) {
                                                              grade = 'A+';
                                                          } else {
                                                              grade = 'Error';
                                                          }
                                                      } else {
                                                          grade = 'Error';
                                                      }
                                                      
                                                          return {
                                                            ...updatedValues,
                                                            abacus_total_marks: total,
                                                            abacus_total_grade: grade,
                                                          };
                                                          });
                                                          };

    const onChangeTotal14 = (fieldName, value) => {
    setScholasticData((prevFormData) => {
    const updatedValues = {
     ...prevFormData,
    [fieldName]: value,
     };  
     const total =
     parseFloat(updatedValues.literacy_marks) +
     parseFloat(updatedValues.numeracy_marks) +
     parseFloat(updatedValues.E_V_S_marks) +
    //  parseFloat(updatedValues.hindi_marks) +
     parseFloat(updatedValues.kit_activity_marks) 

     const w = !isPrepClass ? total + parseFloat(updatedValues.hindi_marks) : total;



     console.log("123",w)

                    
     const gradeTotal = isPrepClass? w/4 : w/5;

     console.log("124",gradeTotal)
      
     
     let grade = '';
    //  if (!isNaN(gradeTotal)) {
    //  if (gradeTotal >= 11) {
    // grade = 'Error';
    // } else if (gradeTotal >= 10) {
    // grade = 'A+';
    // } else if (gradeTotal >= 9) {
    // grade = 'A';
    // } else if (gradeTotal >= 8) {
    // grade = 'B+';
    // } else if (gradeTotal >= 7) {
    // grade = 'B';
    // } else if (gradeTotal >= 6) {
    // grade = 'C+';
    // } else if (gradeTotal >= 5) {
    // grade = 'C';
    // }else if (gradeTotal >= 4) {
    // grade = 'D+';
    // }else if (gradeTotal >= 3) {
    // grade = 'D';
    // }else if (gradeTotal >= 0) {
    // grade = 'E';
    // }
    // }

    if (!isNaN(gradeTotal)) {
      if (gradeTotal >= 0 && gradeTotal <= 1.9) {
          grade = 'E';
      } else if (gradeTotal >= 2 && gradeTotal <= 3.4) {
          grade = 'D';
      } else if (gradeTotal >= 3.5 && gradeTotal <= 4.0) {
          grade = 'D+';
      } else if (gradeTotal >= 4.1 && gradeTotal <= 5.0) {
          grade = 'C';
      } else if (gradeTotal >= 5.1 && gradeTotal <= 6.0) {
          grade = 'C+';
      } else if (gradeTotal >= 6.1 && gradeTotal <= 7.0) {
          grade = 'B';
      } else if (gradeTotal >= 7.1 && gradeTotal <= 8.0) {
          grade = 'B+';
      } else if (gradeTotal >= 8.1 && gradeTotal <= 9.0) {
          grade = 'A';
      } else if (gradeTotal >= 9.1 && gradeTotal <= 10) {
          grade = 'A+';
      } else {
          grade = 'Error';
      }
  } else {
      grade = 'Error';
  }
     return {
      ...updatedValues,
      written_skills_total_marks: total,
       written_skills_total_grade: grade,
       };
      });
      };

                                              

  return (

<div> 

<Typography marginBottom={1} variant='h6'>Co-Scholastic - {term}</Typography>




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
{current_coscholasticpretoukg && current_coscholasticpretoukg[0]?.[term]?.status === 'Finish' ? (
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

   
    <Box  spacing={2}>
    <div className='w-[90%] flex gap-6 bg-[#E4E6EA] pt-2 mb-2 pl-2'>
    <Typography sx={{ width:'59%', fontSize:'16px', fontWeight:'500' , marginBottom:'12px', }}>Conversation </Typography>
    <div>
    <input
    type="text"
    name="conversation_total_marks"
    value={scholasticData?.conversation_total_marks}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center'
    maxLength="3"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    pattern="^\d*\.?\d*$" 
    />
    </div>

    <div>
    <input
    type="text"
    name="conversation_total_grade"
    value={scholasticData?.conversation_total_grade}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center  text-white font-bold'
    style={{
      backgroundColor: getBackgroundColor(scholasticData?.conversation_total_grade),
    }}
    />
    </div>
    </div>
    </Box>


    <Box sx={{ display: 'flex', gap: '24px', marginBottom: '6px' }} spacing={2}>
    <Typography className='w-[54%] ' sx={{ fontSize: '14px', fontWeight: '400' }}>Speaks in correct complete
    sentences.</Typography>
    <div>
    <input
    type="text"
    name="sentences_marks"
    value={scholasticData.sentences_marks}
    onChange={(e) => {
      handleChange(e);
      onChangeTotal("sentences_marks", e.target.value);
    }}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center'
    maxLength="3"
    max="10"
    min="0"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    pattern="^\d*\.?\d*$"
    />
    </div>

    <div>
    <input
    type="text"
    name="sentences_grade"
    value={scholasticData.sentences_grade}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.sentences_grade),
    }}
    
    />
    </div>
    </Box>



    <Box sx={{display:'flex', gap:'24px', marginBottom:'6px'}} spacing={2}>
    <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>Expresses with  confidence</Typography>
   <div>
   <input
   type="text" 
   name="confidence_marks"
   value={scholasticData.confidence_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal("confidence_marks", e.target.value);
  }}
   size="small"
   className='border border-neutral-500 w-16 rounded-sm text-center'
   maxLength="3"
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   pattern="^\d*\.?\d*$"
   />
   </div>

    <div>
    <input
    name="confidence_grade"
    label="Grade"
    value={scholasticData.confidence_grade}
    size="small"
    className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.confidence_grade),
    }}
    />
  </div>
  </Box>

  <br/>
 
  <Box  spacing={2}>
  <div className='w-[90%] flex gap-6 bg-[#E4E6EA] pt-2 mb-2 pl-2'>
    <Typography sx={{ width:'60%', fontSize:'16px', fontWeight:'500', marginBottom:'12px', }}>English (Comprehension)  </Typography>
    <div>
    <input
    type="text"
    name="english_total_marks"
    value={scholasticData?.english_total_marks}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center '
    maxLength="3"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    pattern="^\d*\.?\d*$" 
    />
    </div>

    <div>
    <input
    type="text"
    name="english_total_grade"
    value={scholasticData?.english_total_grade}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center  text-white font-bold'
    style={{
      backgroundColor: getBackgroundColor(scholasticData?.english_total_grade),
    }}
    />
    </div>
  
    </div>
    </Box>

 
 
 
    <Box sx={{ display: 'flex', gap: '24px', marginBottom: '6px' }} spacing={2}>
    <Typography className='w-[54%] ' sx={{ fontSize: '14px', fontWeight: '400' }}> Enjoys listening</Typography>
    <div>
    <input
    type="text"
    name="listening_marks"
    value={scholasticData.listening_marks}
    onChange={(e) => {
      handleChange(e);
      onChangeTotal1("listening_marks", e.target.value);
    }}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center'
    maxLength="3"
    max="10"
    min="0"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    pattern="^\d*\.?\d*$" 
    />
    </div>

    <div>
    <input
    type="text"
    name="listening_grade"
    value={scholasticData.listening_grade}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.listening_grade),
    }}
    />
    </div>
    </Box>


    <Box sx={{display:'flex', gap:'24px', marginBottom:'6px'}} spacing={2}>
    <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>language development - story telling</Typography>
   <div>
   <input
   type="text" 
   name="story_telling_marks"
   value={scholasticData.story_telling_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal1("story_telling_marks", e.target.value);
  }}
   size="small"
   className='border border-neutral-500 w-16 rounded-sm text-center'
   maxLength="3"
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   pattern="^\d*\.?\d*$" 
   />
   </div>

    <div>
    <input
    name="story_telling_grade"
    label="Grade"
    value={scholasticData.story_telling_grade}
    size="small"
    className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.story_telling_grade),
    }}
    />
  </div>
  </Box>

  <Box sx={{display:'flex', gap:'24px', marginBottom:'6px'}} spacing={2}>
    <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>Enjoys narrating</Typography>
   <div>
   <input
   type="text" 
   name="narrating_marks"
   value={scholasticData.narrating_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal1("narrating_marks", e.target.value);
  }}
   size="small"
   className='border border-neutral-500 w-16 rounded-sm text-center'
   maxLength="3"
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   pattern="^\d*\.?\d*$" 
   />
   </div>

    <div>
    <input
    name="narrating_grade"
    label="Grade"
    value={scholasticData.narrating_grade}
    size="small"
    className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.narrating_grade),
    }}
    />
  </div>
  </Box>

<br/>

   <Box  spacing={2}>
   <div className='w-[90%] flex gap-6 bg-[#E4E6EA] pt-2 mb-2 pl-2'>
    <Typography sx={{ width:'59%', fontSize:'16px', fontWeight:'500', marginBottom:'12px', }}>Handwriting </Typography>
    <div>
    <input
    type="text"
    name="handwriting_total_marks"
    value={scholasticData?.handwriting_total_marks}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center '
    maxLength="3"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    pattern="^\d*\.?\d*$" 
    />
    </div>

    <div>
    <input
    type="text"
    name="handwriting_total_grade"
    value={scholasticData?.handwriting_total_grade}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center  text-white font-bold'
    style={{
      backgroundColor: getBackgroundColor(scholasticData?.handwriting_total_grade),
    }}
    />
    </div>
    </div>
  
    </Box>
   
   
   
    <Box sx={{ display: 'flex', gap: '24px', marginBottom: '6px' }} spacing={2}>
    <Typography className='w-[54%] ' sx={{ fontSize: '14px', fontWeight: '400' }}>Understands classroom guidlines</Typography>
    <div>
    <input
    type="text"
    name="guidlines_marks"
    value={scholasticData.guidlines_marks}
    onChange={(e) => {
      handleChange(e);
      onChangeTotal2("guidlines_marks", e.target.value);
    }}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center'
    maxLength="3"
    max="10"
    min="0"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    pattern="^\d*\.?\d*$" 
    />
    </div>

    <div>
    <input
    type="text"
    name="guidlines_grade"
    value={scholasticData.guidlines_grade}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.guidlines_grade),
    }}
    />
    </div>
    </Box>



    <Box sx={{display:'flex', gap:'24px', marginBottom:'6px'}} spacing={2}>
    <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>Follows simple instructions & writes
 clearly</Typography>
   <div>
   <input
   type="text" 
   name="writes_clearly_marks"
   value={scholasticData.writes_clearly_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal2("writes_clearly_marks", e.target.value);
  }}
   size="small"
   className='border border-neutral-500 w-16 rounded-sm text-center'
   maxLength="3"
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   pattern="^\d*\.?\d*$" 
   />
   </div>

    <div>
    <input
    name="writes_clearly_grade"
    label="Grade"
    value={scholasticData.writes_clearly_grade}
    size="small"
    className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.writes_clearly_grade),
    }}
    />
  </div>
  </Box>

  <br/>

   <Box  spacing={2}>
   <div className='w-[90%] flex gap-6 bg-[#E4E6EA] pt-2 mb-2 pl-2'>
    <Typography sx={{ width:'60%', fontSize:'16px', fontWeight:'500', marginBottom:'12px', }}> Math & number concepts</Typography>
    <div>
    <input
    type="text"
    name="math_number_concepts_total_marks"
    value={scholasticData?.math_number_concepts_total_marks}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center '
    maxLength="3"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    pattern="^\d*\.?\d*$" 
    />
    </div>

    <div>
    <input
    type="text"
    name="math_number_concepts_total_grade"
    value={scholasticData?.math_number_concepts_total_grade}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center  text-white font-bold'
    style={{
      backgroundColor: getBackgroundColor(scholasticData?.math_number_concepts_total_grade),
    }}
    />
    </div>
    </div>
    </Box>
    <Box sx={{ display: 'flex', gap: '24px', marginBottom: '6px' }} spacing={2}>
    <Typography className='w-[54%] ' sx={{ fontSize: '14px', fontWeight: '400' }}> Ability to compare sizes & shape</Typography>
    <div>
    <input
    type="text"
    name="sizes_shape_marks"
    value={scholasticData.sizes_shape_marks}
    onChange={(e) => {
      handleChange(e);
      onChangeTotal3("sizes_shape_marks", e.target.value);
    }}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center'
    maxLength="3"
    max="10"
    min="0"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    pattern="^\d*\.?\d*$" 
    />
    </div>

    <div>
    <input
    type="text"
    name="sizes_shape_grade"
    value={scholasticData.sizes_shape_grade}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.sizes_shape_grade),
    }}
    />
    </div>
    </Box>



    <Box sx={{display:'flex', gap:'24px', marginBottom:'6px'}} spacing={2}>
    <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>Understands number value</Typography>
   <div>
   <input
   type="text" 
   name="understands_number_marks"
   value={scholasticData.understands_number_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal3("understands_number_marks", e.target.value);
  }}
   size="small"
   className='border border-neutral-500 w-16 rounded-sm text-center'
   maxLength="3"
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   pattern="^\d*\.?\d*$" 
   />
   </div>

    <div>
    <input
    name="understands_number_grade"
    label="Grade"
    value={scholasticData.understands_number_grade}
    size="small"
    className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.understands_number_grade),
    }}
    />
  </div>
  </Box>


  <Box sx={{display:'flex', gap:'24px',  marginBottom:'6px'}} spacing={2}>
  <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>Ability to Identify numbers</Typography>
  <div  >
  <input
   type="text"
  label="enter marks"
  name="identify_numbers_marks"
  value={scholasticData.identify_numbers_marks}
  onChange={(e) => {
    handleChange(e);
    onChangeTotal3("identify_numbers_marks", e.target.value);
  }}
  size="small"
  className=' border  border-neutral-500 w-16 rounded-sm text-center'
  maxLength="3"
  max="10"
  min="0"
  style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
  pattern="^\d*\.?\d*$" 
  />
   </div>

   <div>
   <input
   name="identify_numbers_grade"
   label="Grade"
   value={scholasticData.identify_numbers_grade}
   size="small"
   className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
   style={{
    backgroundColor: getBackgroundColor(scholasticData.identify_numbers_grade),
  }}
   />
  </div>
  </Box>


   <Box sx={{ display: 'flex', gap: '24px', marginBottom: '6px' }} spacing={2}>
   <Typography  className='w-[54%] 'sx={{fontSize:'14px', fontWeight:'400', }}>Ability to write numbers</Typography>
   <div>
   <input
   type="text"
   name="write_numbers_marks"
   value={scholasticData.write_numbers_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal3("write_numbers_marks", e.target.value);
  }}
   maxLength="3"
   className=' border  border-neutral-500 w-16 rounded-sm text-center'
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   pattern="^\d*\.?\d*$" 
   />
   </div>
   <div>

   <input
   type="text"
   name="write_numbers_grade"
   value={scholasticData.write_numbers_grade}
   maxLength="3"
   className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
   style={{
    backgroundColor: getBackgroundColor(scholasticData.write_numbers_grade),
  }}
   />
  </div>
   </Box>

   <br/>

   <Box  spacing={2}>
   <div className='w-[90%] flex gap-6 bg-[#E4E6EA] pt-2 mb-2 pl-2'>
    <Typography sx={{ width:'60%', fontSize:'16px', fontWeight:'500' , marginBottom:'12px', }}> Personality characteristics    </Typography>
    <div>
    <input
    type="text"
    name="personality_characteristics_total_marks"
    value={scholasticData?.personality_characteristics_total_marks}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center  '
    maxLength="3"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    pattern="^\d*\.?\d*$" 
    />
    </div>

    <div>
    <input
    type="text"
    name="personality_characteristics_total_grade"
    value={scholasticData?.personality_characteristics_total_grade}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center  text-white font-bold'
    style={{
      backgroundColor: getBackgroundColor(scholasticData?.personality_characteristics_total_grade),
    }}
    />
    </div>
    </div>

    </Box>
   
   
   
    <Box sx={{ display: 'flex', gap: '24px', marginBottom: '6px' }} spacing={2}>
    <Typography className='w-[54%] ' sx={{ fontSize: '14px', fontWeight: '400' }}>  Etiquette (polite behaviour)</Typography>
    <div>
    <input
    type="text"
    name="etiquette_marks"
    value={scholasticData.etiquette_marks}
    onChange={(e) => {
      handleChange(e);
      onChangeTotal4("etiquette_marks", e.target.value);
    }}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center'
    maxLength="3"
    max="10"
    min="0"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    pattern="^\d*\.?\d*$" 
    />
    </div>

    <div>
    <input
    type="text"
    name="etiquette_grade"
    value={scholasticData.etiquette_grade}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.etiquette_grade),
    }}
    />
    </div>
    </Box>



    <Box sx={{display:'flex', gap:'24px', marginBottom:'6px'}} spacing={2}>
    <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}> Interaction with others</Typography>
   <div>
   <input
   type="text" 
   name="Interaction_marks"
   value={scholasticData.Interaction_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal4("Interaction_marks", e.target.value);
  }}
   size="small"
   className='border border-neutral-500 w-16 rounded-sm text-center'
   maxLength="3"
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   pattern="^\d*\.?\d*$" 
   />
   </div>

    <div>
    <input
    name="Interaction_grade"
    label="Grade"
    value={scholasticData.Interaction_grade}
    size="small"
    className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.Interaction_grade),
    }}
    />
  </div>
  </Box>


  <Box sx={{display:'flex', gap:'24px',  marginBottom:'6px'}} spacing={2}>
  <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>Participation</Typography>
  <div  >
  <input
   type="text"
  label="enter marks"
  name="participation_marks"
  value={scholasticData.participation_marks}
  onChange={(e) => {
    handleChange(e);
    onChangeTotal4("participation_marks", e.target.value);
  }}
  size="small"
  className=' border  border-neutral-500 w-16 rounded-sm text-center'
  maxLength="3"
  max="10"
  min="0"
  style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
  pattern="^\d*\.?\d*$" 
  />
   </div>

   <div>
   <input
   name="participation_grade"
   label="Grade"
   value={scholasticData.participation_grade}
   size="small"
   className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
   style={{
    backgroundColor: getBackgroundColor(scholasticData.participation_grade),
  }}
   />
  </div>
  </Box>


   <Box sx={{ display: 'flex', gap: '24px', marginBottom: '6px' }} spacing={2}>
   <Typography  className='w-[54%] 'sx={{fontSize:'14px', fontWeight:'400', }}>Leadership</Typography>
   <div>
   <input
   type="text"
   name="leadership_marks"
   value={scholasticData.leadership_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal4("leadership_marks", e.target.value);
  }}
   maxLength="3"
   className=' border  border-neutral-500 w-16 rounded-sm text-center'
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   pattern="^\d*\.?\d*$" 
   />
   </div>
   <div>

   <input
   type="text"
   name="leadership_grade"
   value={scholasticData.leadership_grade}
   maxLength="3"
   className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
   style={{
    backgroundColor: getBackgroundColor(scholasticData.leadership_grade),
  }}
   />
  </div>
   </Box>

   <Box sx={{ display: 'flex', gap: '24px', marginBottom: '6px' }} spacing={2}>
   <Typography  className='w-[54%] 'sx={{fontSize:'14px', fontWeight:'400', }}>Confidence</Typography>
   <div>
   <input
   type="text"
   name="confidences_marks"
   value={scholasticData.confidences_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal4("confidences_marks", e.target.value);
  }}
   maxLength="3"
   className=' border  border-neutral-500 w-16 rounded-sm text-center'
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   pattern="^\d*\.?\d*$" 
   />
   </div>
   <div>

   <input
   type="text"
   name="confidences_grade"
   value={scholasticData.confidences_grade}
   maxLength="3"
   className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
   style={{
    backgroundColor: getBackgroundColor(scholasticData.confidences_grade),
  }}
   />
  </div>
   </Box>


   <Box sx={{ display: 'flex', gap: '24px', marginBottom: '6px' }} spacing={2}>
   <Typography  className='w-[54%] 'sx={{fontSize:'14px', fontWeight:'400', }}>Personal hygiene</Typography>
   <div>
   <input
   type="text"
   name="personal_hygiene_marks"
   value={scholasticData.personal_hygiene_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal4("personal_hygiene_marks", e.target.value);
  }}
   maxLength="3"
   className=' border  border-neutral-500 w-16 rounded-sm text-center'
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   pattern="^\d*\.?\d*$" 
   />
   </div>
   <div>

   <input
   type="text"
   name="personal_hygiene_grade"
   value={scholasticData.personal_hygiene_grade}
   maxLength="3"
   className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
   style={{
    backgroundColor: getBackgroundColor(scholasticData.personal_hygiene_grade),
  }}
   />
  </div>
   </Box>

<br/>

  
   <Box  spacing={2}>
   <div className='w-[90%] flex gap-6 bg-[#E4E6EA] pt-2 mb-2 pl-2'>
    <Typography sx={{width:'60%', fontSize:'16px', fontWeight:'500', marginBottom:'12px', }}> What else am I trained for</Typography>
    <div>
    <input
    type="text"
    name="What_else_total_marks"
    value={scholasticData?.What_else_total_marks}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center'
    maxLength="3"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    pattern="^\d*\.?\d*$" 
    />
    </div>

    <div>
    <input
    type="text"
    name="What_else_total_grade"
    value={scholasticData?.What_else_total_grade}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center  text-white font-bold'
    style={{
    backgroundColor: getBackgroundColor(scholasticData?.What_else_total_grade),
    }}
    />
    </div>
    </div>
    
    </Box>
  
  
    <Box sx={{ display: 'flex', gap: '24px', marginBottom: '6px' }} spacing={2}>
    <Typography className='w-[54%] ' sx={{ fontSize: '14px', fontWeight: '400' }}> Art & craft</Typography>
    <div>
    <input
    type="text"
    name="art_craft_marks"
    value={scholasticData.art_craft_marks}
    onChange={(e) => {
      handleChange(e);
      onChangeTotal5("art_craft_marks", e.target.value);
    }}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center'
    maxLength="3"
    max="10"
    min="0"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    pattern="^\d*\.?\d*$" 
    />
    </div>

    <div>
    <input
    type="text"
    name="art_craft_grade"
    value={scholasticData.art_craft_grade}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.art_craft_grade),
    }}
    />
    </div>
    </Box>



    <Box sx={{display:'flex', gap:'24px', marginBottom:'6px'}} spacing={2}>
    <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>Drawing/coloring</Typography>
   <div>
   <input
   type="text" 
   name="coloring_marks"
   value={scholasticData.coloring_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal5("coloring_marks", e.target.value);
  }}
   size="small"
   className='border border-neutral-500 w-16 rounded-sm text-center'
   maxLength="3"
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   pattern="^\d*\.?\d*$" 
   />
   </div>

    <div>
    <input
    name="coloring_grade"
    label="Grade"
    value={scholasticData.coloring_grade}
    size="small"
    className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.coloring_grade),
    }}
    />
  </div>
  </Box>


  <Box sx={{display:'flex', gap:'24px',  marginBottom:'6px'}} spacing={2}>
  <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>Clay modelling</Typography>
  <div  >
  <input
   type="text"
  label="enter marks"
  name="clay_modelling_marks"
  value={scholasticData.clay_modelling_marks}
  onChange={(e) => {
    handleChange(e);
    onChangeTotal5("clay_modelling_marks", e.target.value);
  }}
  size="small"
  className=' border  border-neutral-500 w-16 rounded-sm text-center'
  maxLength="3"
  max="10"
  min="0"
  style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
  pattern="^\d*\.?\d*$" 
  />
   </div>

   <div>
   <input
   name="clay_modelling_grade"
   label="Grade"
   value={scholasticData.clay_modelling_grade}
   size="small"
   className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
   style={{
    backgroundColor: getBackgroundColor(scholasticData.clay_modelling_grade),
  }}
   />
  </div>
  </Box>

  <br/>


     <Box  spacing={2}>
     <div className='w-[90%] flex gap-6 bg-[#E4E6EA] pt-2 mb-2 pl-2'>
    <Typography sx={{width:'60%', fontSize:'16px', fontWeight:'500', marginBottom:'12px', }}> Work Habits</Typography>
    <div>
    <input
    type="text"
    name="work_habits_total_marks"
    value={scholasticData?.work_habits_total_marks}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center'
    maxLength="3"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    pattern="^\d*\.?\d*$" 
    />
    </div>

    <div>
    <input
    type="text"
    name="work_habits_total_grade"
    value={scholasticData?.work_habits_total_grade}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center  text-white font-bold'
    style={{
    backgroundColor: getBackgroundColor(scholasticData?.work_habits_total_grade),
    }}
    />
    </div>
    </div>
    
    </Box>
  
    <Box sx={{ display: 'flex', gap: '24px', marginBottom: '6px' }} spacing={2}>
    <Typography className='w-[54%] ' sx={{ fontSize: '14px', fontWeight: '400' }}> Is neat and tidy</Typography>
    <div>
    <input
    type="text"
    name="neat_tidy_marks"
    value={scholasticData.neat_tidy_marks}
    onChange={(e) => {
      handleChange(e);
      onChangeTotal6("neat_tidy_marks", e.target.value);
    }}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center'
    maxLength="3"
    max="10"
    min="0"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    pattern="^\d*\.?\d*$" 
    />
    </div>

    <div>
    <input
    type="text"
    name="neat_tidy_grade"
    value={scholasticData.neat_tidy_grade}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.neat_tidy_grade),
    }}
    />
    </div>
    </Box>



    <Box sx={{display:'flex', gap:'24px', marginBottom:'6px'}} spacing={2}>
    <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>Regularity in home work</Typography>
   <div>
   <input
   type="text" 
   name="home_work_marks"
   value={scholasticData.home_work_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal6("home_work_marks", e.target.value);
  }}
   size="small"
   className='border border-neutral-500 w-16 rounded-sm text-center'
   maxLength="3"
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   pattern="^\d*\.?\d*$" 
   />
   </div>

    <div>
    <input
    name="home_work_grade"
    label="Grade"
    value={scholasticData.home_work_grade}
    size="small"
    className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.home_work_grade),
    }}
    />
  </div>
  </Box>


  <Box sx={{display:'flex', gap:'24px',  marginBottom:'6px'}} spacing={2}>
  <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>Comes to school on time</Typography>
  <div  >
  <input
   type="text"
  label="enter marks"
  name="school_on_time_marks"
  value={scholasticData.school_on_time_marks}
  onChange={(e) => {
    handleChange(e);
    onChangeTotal6("school_on_time_marks", e.target.value);
  }}
  size="small"
  className=' border  border-neutral-500 w-16 rounded-sm text-center'
  maxLength="3"
  max="10"
  min="0"
  style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
  pattern="^\d*\.?\d*$" 
  />
   </div>

   <div>
   <input
   name="school_on_time_grade"
   label="Grade"
   value={scholasticData.school_on_time_grade}
   size="small"
   className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
   style={{
    backgroundColor: getBackgroundColor(scholasticData.school_on_time_grade),
  }}
   />
  </div>
  </Box>

  <Box sx={{display:'flex', gap:'24px',  marginBottom:'6px'}} spacing={2}>
  <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>Works independently</Typography>
  <div  >
  <input
   type="text"
  label="enter marks"
  name="independently_marks"
  value={scholasticData.independently_marks}
  onChange={(e) => {
    handleChange(e);
    onChangeTotal6("independently_marks", e.target.value);
  }}
  size="small"
  className=' border  border-neutral-500 w-16 rounded-sm text-center'
  maxLength="3"
  max="10"
  min="0"
  style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
  pattern="^\d*\.?\d*$" 
  />
   </div>

   <div>
   <input
   name="independently_grade"
   label="Grade"
   value={scholasticData.independently_grade}
   size="small"
   className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
   style={{
    backgroundColor: getBackgroundColor(scholasticData.independently_grade),
  }}
   />
  </div>
  </Box>


  <Box sx={{display:'flex', gap:'24px',  marginBottom:'6px'}} spacing={2}>
  <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>Handles  book and materials
 carefully</Typography>
  <div  >
  <input
   type="text"
  label="enter marks"
  name="book_materials_marks"
  value={scholasticData.book_materials_marks}
  onChange={(e) => {
    handleChange(e);
    onChangeTotal6("book_materials_marks", e.target.value);
  }}
  size="small"
  className=' border  border-neutral-500 w-16 rounded-sm text-center'
  maxLength="3"
  max="10"
  min="0"
  style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
  pattern="^\d*\.?\d*$" 
  />
   </div>

   <div>
   <input
   name="book_materials_grade"
   label="Grade"
   value={scholasticData.book_materials_grade}
   size="small"
   className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
   style={{
    backgroundColor: getBackgroundColor(scholasticData.book_materials_grade),
  }}
   />
  </div>
  </Box>

  <Box sx={{display:'flex', gap:'24px',  marginBottom:'6px'}} spacing={2}>
  <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}> Completes work in the given time</Typography>
  <div  >
  <input
   type="text"
  label="enter marks"
  name="work_in_the_given_time_marks"
  value={scholasticData.work_in_the_given_time_marks}
  onChange={(e) => {
    handleChange(e);
    onChangeTotal6("work_in_the_given_time_marks", e.target.value);
  }}
  size="small"
  className=' border  border-neutral-500 w-16 rounded-sm text-center'
  maxLength="3"
  max="10"
  min="0"
  style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
  pattern="^\d*\.?\d*$" 
  />
   </div>

   <div>
   <input
   name="work_in_the_given_time_grade"
   label="Grade"
   value={scholasticData.work_in_the_given_time_grade}
   size="small"
   className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
   style={{
    backgroundColor: getBackgroundColor(scholasticData.work_in_the_given_time_grade),
  }}
   />
  </div>
  </Box>


  <Box sx={{display:'flex', gap:'24px',  marginBottom:'6px'}} spacing={2}>
  <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}> Neatness</Typography>
  <div  >
  <input
   type="text"
  label="enter marks"
  name="neatness_marks"
  value={scholasticData.neatness_marks}
  onChange={(e) => {
    handleChange(e);
    onChangeTotal6("neatness_marks", e.target.value);
  }}
  size="small"
  className=' border  border-neutral-500 w-16 rounded-sm text-center'
  maxLength="3"
  max="10"
  min="0"
  style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
  pattern="^\d*\.?\d*$" 
  />
   </div>

   <div>
   <input
   name="neatness_grade"
   label="Grade"
   value={scholasticData.neatness_grade}
   size="small"
   className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
   style={{
    backgroundColor: getBackgroundColor(scholasticData.neatness_grade),
  }}
   />
  </div>
  </Box>
   
<br/>
    <Box  spacing={2}>
    <div className='w-[90%] flex gap-6 bg-[#E4E6EA] pt-2 mb-2 pl-2'>
    <Typography sx={{ width:'60%', fontSize:'16px', fontWeight:'500' , marginBottom:'12px', }}>English (worksheets) </Typography>
    <div>
    <input
    type="text"
    name="english_worksheets_total_marks"
    value={scholasticData?.english_worksheets_total_marks}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center '
    maxLength="3"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    pattern="^\d*\.?\d*$" 
    />
    </div>

    <div>
    <input
    type="text"
    name="english_worksheets_total_grade"
    value={scholasticData?.english_worksheets_total_grade}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center  text-white font-bold'
    style={{
    backgroundColor: getBackgroundColor(scholasticData?.english_worksheets_total_grade),
    }}
    />
    </div>
    </div>
   
    </Box>



    <Box sx={{ display: 'flex', gap: '24px', marginBottom: '6px' }} spacing={2}>
    <Typography className='w-[54%] ' sx={{ fontSize: '14px', fontWeight: '400' }}>Traces patterns</Typography>
    <div>
    <input
    type="text"
    name="Traces_patterns_marks"
    value={scholasticData.Traces_patterns_marks}
    onChange={(e) => {
      handleChange(e);
      onChangeTotal7("Traces_patterns_marks", e.target.value);
    }}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center'
    maxLength="3"
    max="10"
    min="0"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    pattern="^\d*\.?\d*$" 
    />
    </div>

    <div>
    <input
    type="text"
    name="Traces_patterns_grade"
    value={scholasticData.Traces_patterns_grade}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.Traces_patterns_grade),
    }}
    />
    </div>
    </Box>



    <Box sx={{display:'flex', gap:'24px', marginBottom:'6px'}} spacing={2}>
    <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>Writes  upper case  letters</Typography>
   <div>
   <input
   type="text" 
   name="upper_case_letters_marks"
   value={scholasticData.upper_case_letters_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal7("upper_case_letters_marks", e.target.value);
  }}
   size="small"
   className='border border-neutral-500 w-16 rounded-sm text-center'
   maxLength="3"
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   pattern="^\d*\.?\d*$" 
   />
   </div>

    <div>
    <input
    name="upper_case_letters_grade"
    label="Grade"
    value={scholasticData.upper_case_letters_grade}
    size="small"
    className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.upper_case_letters_grade),
    }}
    />
  </div>
  </Box>


  <Box sx={{display:'flex', gap:'24px', marginBottom:'6px'}} spacing={2}>
    <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}> Writes  lower case letters</Typography>
   <div>
   <input
   type="text" 
   name="lower_case_letters_marks"
   value={scholasticData.lower_case_letters_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal7("lower_case_letters_marks", e.target.value);
  }}
   size="small"
   className='border border-neutral-500 w-16 rounded-sm text-center'
   maxLength="3"
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   pattern="^\d*\.?\d*$" 
   />
   </div>

    <div>
    <input
    name="lower_case_letters_grade"
    label="Grade"
    value={scholasticData.lower_case_letters_grade}
    size="small"
    className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.lower_case_letters_grade),
    }}
    />
  </div>
  </Box>


  <Box sx={{display:'flex', gap:'24px', marginBottom:'6px'}} spacing={2}>
    <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>Follows the instructions &  writes
 clearly</Typography>
   <div>
   <input
   type="text" 
   name="write_clearly_marks"
   value={scholasticData.write_clearly_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal7("write_clearly_marks", e.target.value);
  }}
   size="small"
   className='border border-neutral-500 w-16 rounded-sm text-center'
   maxLength="3"
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   pattern="^\d*\.?\d*$" 
   />
   </div>

    <div>
    <input
    name="write_clearly_grade"
    label="Grade"
    value={scholasticData.write_clearly_grade}
    size="small"
    className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.write_clearly_grade),
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
    <Typography sx={{ width:'60%', fontSize:'16px', fontWeight:'500' ,  marginBottom:'12px', }}>General Knowledge</Typography> 
    <div>
    <input
    type="text"
    name="general_knowledge_total_marks"
    value={scholasticData?.general_knowledge_total_marks}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center ml-24px '
    maxLength="3"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    pattern="^\d*\.?\d*$" 
    />
    </div>

    <div>
    <input
    type="text"
    name="general_knowledge_total_grade"
    value={scholasticData?.general_knowledge_total_grade}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center  text-white font-bold'
    style={{
    backgroundColor: getBackgroundColor(scholasticData?.general_knowledge_total_grade),
    }}
    />
    </div>
    </div>
    </Box>
 
 
    <Box sx={{ display: 'flex', gap: '24px', marginBottom: '6px' }} spacing={2}>
    <Typography className='w-[54%] ' sx={{ fontSize: '14px', fontWeight: '400' }}> Observes facts with interest</Typography>
    <div>
    <input
    type="text"
    name="facts_with_interest_marks"
    value={scholasticData.facts_with_interest_marks}
    onChange={(e) => {
      handleChange(e);
      onChangeTotal8("facts_with_interest_marks", e.target.value);
    }}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center'
    maxLength="3"
    max="10"
    min="0"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    pattern="^\d*\.?\d*$" 
    />
    </div>

    <div>
    <input
    type="text"
    name="facts_with_interest_grade"
    value={scholasticData.facts_with_interest_grade}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.facts_with_interest_grade),
    }}
    />
    </div>
    </Box>



    <Box sx={{display:'flex', gap:'24px', marginBottom:'6px'}} spacing={2}>
    <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>Shows awareness  of surroundings and happenings</Typography>
   <div>
   <input
   type="text" 
   name="awareness_marks"
   value={scholasticData.awareness_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal8("awareness_marks", e.target.value);
  }}
   size="small"
   className='border border-neutral-500 w-16 rounded-sm text-center'
   maxLength="3"
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   pattern="^\d*\.?\d*$" 
   />
   </div>

    <div>
    <input
    name="awareness_grade"
    label="Grade"
    value={scholasticData.awareness_grade}
    size="small"
    className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.awareness_grade),
    }}
    />
  </div>
  </Box>


  <Box sx={{display:'flex', gap:'24px',  marginBottom:'6px'}} spacing={2}>
  <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}> Has an enquiring mind</Typography>
  <div  >
  <input
   type="text"
  label="enter marks"
  name="enquiring_mind_marks"
  value={scholasticData.enquiring_mind_marks}
  onChange={(e) => {
    handleChange(e);
    onChangeTotal8("enquiring_mind_marks", e.target.value);
  }}
  size="small"
  className=' border  border-neutral-500 w-16 rounded-sm text-center'
  maxLength="3"
  max="10"
  min="0"
  style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
  pattern="^\d*\.?\d*$" 
  />
   </div>

   <div>
   <input
   name="enquiring_mind_grade"
   label="Grade"
   value={scholasticData.enquiring_mind_grade}
   size="small"
   className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
   style={{
    backgroundColor: getBackgroundColor(scholasticData.enquiring_mind_grade),
  }}
   />
  </div>
  </Box>
  

  <Box sx={{display:'flex', gap:'24px',  marginBottom:'6px'}} spacing={2}>
  <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}> Answering  questions</Typography>
  <div  >
  <input
   type="text"
  label="enter marks"
  name="answering_questions_marks"
  value={scholasticData.answering_questions_marks}
  onChange={(e) => {
    handleChange(e);
    onChangeTotal8("answering_questions_marks", e.target.value);
  }}
  size="small"
  className=' border  border-neutral-500 w-16 rounded-sm text-center'
  maxLength="3"
  max="10"
  min="0"
  style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
  pattern="^\d*\.?\d*$" 
  />
   </div>

   <div>
   <input
   name="answering_questions_grade"
   label="Grade"
   value={scholasticData.answering_questions_grade}
   size="small"
   className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
   style={{
    backgroundColor: getBackgroundColor(scholasticData.answering_questions_grade),
  }}
   />
  </div>
  </Box>

  <br/>
   
   <Box  spacing={2}>
   <div className='w-[90%] flex gap-6 bg-[#E4E6EA] pt-2 mb-2 pl-2'>
    <Typography sx={{width:'60%', fontSize:'16px', fontWeight:'500', marginBottom:'12px', }}>Motor  Development</Typography>
    <div>
    <input
    type="text"
    name="motor_development_total_marks"
    value={scholasticData?.motor_development_total_marks}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center'
    maxLength="3"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    pattern="^\d*\.?\d*$" 
    />
    </div>

    <div>
    <input
    type="text"
    name="motor_development_total_grade"
    value={scholasticData?.motor_development_total_grade}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center  text-white font-bold'
    style={{
    backgroundColor: getBackgroundColor(scholasticData?.motor_development_total_grade),
    }}
    />
    </div>
    </div>
    </Box>
   
    <Box sx={{ display: 'flex', gap: '24px', marginBottom: '6px' }} spacing={2}>
    <Typography className='w-[54%] ' sx={{ fontSize: '14px', fontWeight: '400' }}> Able to color within shapes</Typography>
    <div>
    <input
    type="text"
    name="color_within_shapes_marks"
    value={scholasticData.color_within_shapes_marks}
    onChange={(e) => {
      handleChange(e);
      onChangeTotal9("color_within_shapes_marks", e.target.value);
    }}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center'
    maxLength="3"
    max="10"
    min="0"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    pattern="^\d*\.?\d*$" 
    />
    </div>

    <div>
    <input
    type="text"
    name="color_within_shapes_grade"
    value={scholasticData.color_within_shapes_grade}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.color_within_shapes_grade),
    }}
    />
    </div>
    </Box>



    <Box sx={{display:'flex', gap:'24px', marginBottom:'6px'}} spacing={2}>
    <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}> Draws free hand pictures</Typography>
   <div>
   <input
   type="text" 
   name="free_hand_pictures_marks"
   value={scholasticData.free_hand_pictures_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal9("free_hand_pictures_marks", e.target.value);
  }}
   size="small"
   className='border border-neutral-500 w-16 rounded-sm text-center'
   maxLength="3"
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   pattern="^\d*\.?\d*$" 
   />
   </div>

    <div>
    <input
    name="free_hand_pictures_grade"
    label="Grade"
    value={scholasticData.free_hand_pictures_grade}
    size="small"
    className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.free_hand_pictures_grade),
    }}
    />
  </div>
  </Box>


  <Box sx={{display:'flex', gap:'24px',  marginBottom:'6px'}} spacing={2}>
  <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}> Handwriting</Typography>
  <div  >
  <input
   type="text"
  label="enter marks"
  name="handwriting_marks"
  value={scholasticData.handwriting_marks}
  onChange={(e) => {
    handleChange(e);
    onChangeTotal9("handwriting_marks", e.target.value);
  }}
  size="small"
  className=' border  border-neutral-500 w-16 rounded-sm text-center'
  maxLength="3"
  max="10"
  min="0"
  style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
  pattern="^\d*\.?\d*$" 
  />
   </div>

   <div>
   <input
   name="handwriting_grade"
   label="Grade"
   value={scholasticData.handwriting_grade}
   size="small"
   className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
   style={{
    backgroundColor: getBackgroundColor(scholasticData.handwriting_grade),
  }}
   />
  </div>
  </Box>



  <Box sx={{display:'flex', gap:'24px',  marginBottom:'6px'}} spacing={2}>
  <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>  Hand work</Typography>
  <div  >
  <input
   type="text"
  label="enter marks"
  name="hand_work_marks"
  value={scholasticData.hand_work_marks}
  onChange={(e) => {
    handleChange(e);
    onChangeTotal9("hand_work_marks", e.target.value);
  }}
  size="small"
  className=' border  border-neutral-500 w-16 rounded-sm text-center'
  maxLength="3"
  max="10"
  min="0"
  style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
  pattern="^\d*\.?\d*$" 
  />
   </div>

   <div>
   <input
   name="hand_work_grade"
   label="Grade"
   value={scholasticData.hand_work_grade}
   size="small"
   className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
   style={{
    backgroundColor: getBackgroundColor(scholasticData.hand_work_grade),
  }}
   />
  </div>
  </Box>




  <Box sx={{display:'flex', gap:'24px',  marginBottom:'6px'}} spacing={2}>
  <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>  Games</Typography>
  <div  >
  <input
   type="text"
  label="enter marks"
  name="games_mind_marks"
  value={scholasticData.games_mind_marks}
  onChange={(e) => {
    handleChange(e);
    onChangeTotal9("games_mind_marks", e.target.value);
  }}
  size="small"
  className=' border  border-neutral-500 w-16 rounded-sm text-center'
  maxLength="3"
  max="10"
  min="0"
  style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
  pattern="^\d*\.?\d*$" 
  />
   </div>

   <div>
   <input
   name="games_mind_grade"
   label="Grade"
   value={scholasticData.games_mind_grade}
   size="small"
   className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
   style={{
    backgroundColor: getBackgroundColor(scholasticData.games_mind_grade),
  }}
   />
  </div>
  </Box>

 
 <br/>

   <Box  spacing={2}>
   <div className='w-[90%] flex gap-6 bg-[#E4E6EA] pt-2 mb-2 pl-2'>
    <Typography sx={{width:'60%', fontSize:'16px', fontWeight:'500', marginBottom:'12px', }}>Recitation</Typography>
    <div>
    <input
    type="text"
    name="recitation_total_marks"
    value={scholasticData?.recitation_total_marks}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center'
    maxLength="3"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    pattern="^\d*\.?\d*$" 
    />
    </div>

    <div>
    <input
    type="text"
    name="recitation_total_grade"
    value={scholasticData?.recitation_total_grade}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center  text-white font-bold'
    style={{
    backgroundColor: getBackgroundColor(scholasticData?.recitation_total_grade),
    }}
    />
    </div>
    </div>
    
    </Box>
 
 
    <Box sx={{ display: 'flex', gap: '24px', marginBottom: '6px' }} spacing={2}>
    <Typography className='w-[54%] ' sx={{ fontSize: '14px', fontWeight: '400' }}> Recites with  expression and confidence</Typography>
    <div>
    <input
    type="text"
    name="expression_and_confidence_marks"
    value={scholasticData.expression_and_confidence_marks}
    onChange={(e) => {
      handleChange(e);
      onChangeTotal10("expression_and_confidence_marks", e.target.value);
    }}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center'
    maxLength="3"
    max="10"
    min="0"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    pattern="^\d*\.?\d*$" 
    />
    </div>

    <div>
    <input
    type="text"
    name="expression_and_confidence_grade"
    value={scholasticData.expression_and_confidence_grade}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.expression_and_confidence_grade),
    }}
    />
    </div>
    </Box>



    <Box sx={{display:'flex', gap:'24px', marginBottom:'6px'}} spacing={2}>
    <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>Memorizes  the poem/rhymes  well</Typography>
   <div>
   <input
   type="text" 
   name="poem_rhymes_marks"
   value={scholasticData.poem_rhymes_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal10("poem_rhymes_marks", e.target.value);
  }}
   size="small"
   className='border border-neutral-500 w-16 rounded-sm text-center'
   maxLength="3"
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   pattern="^\d*\.?\d*$" 
   />
   </div>

    <div>
    <input
    name="poem_rhymes_grade"
    label="Grade"
    value={scholasticData.poem_rhymes_grade}
    size="small"
    className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.poem_rhymes_grade),
    }}
    />
  </div>
  </Box>

  <br/>
  
  <Box  spacing={2}>
  <div className='w-[90%] flex gap-6 bg-[#E4E6EA] pt-2 mb-2 pl-2'>
    <Typography sx={{ width:'60%', fontSize:'16px', fontWeight:'500' , display: 'flex',  gap:'24px', marginBottom:'12px', }}>Social  and Emotional Development </Typography>
    <div>
    <input
    type="text"
    name="social_emotional_development_total_marks"
    value={scholasticData?.social_emotional_development_total_marks}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center'
    maxLength="3"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    pattern="^\d*\.?\d*$" 
    />
    </div>

    <div>
    <input
    type="text"
    name="social_emotional_development_total_grade"
    value={scholasticData?.social_emotional_development_total_grade}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center  text-white font-bold'
    style={{
    backgroundColor: getBackgroundColor(scholasticData?.social_emotional_development_total_grade),
    }}
    />
    </div>
    </div>

    </Box>
  
  
  
  
  
    <Box sx={{ display: 'flex', gap: '24px', marginBottom: '6px' }} spacing={2}>
    <Typography className='w-[54%] ' sx={{ fontSize: '14px', fontWeight: '400' }}> Enjoys coming  to school</Typography>
    <div>
    <input
    type="text"
    name="coming_to_school_marks"
    value={scholasticData.coming_to_school_marks}
    onChange={(e) => {
      handleChange(e);
      onChangeTotal11("coming_to_school_marks", e.target.value);
    }}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center'
    maxLength="3"
    max="10"
    min="0"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    pattern="^\d*\.?\d*$" 
    />
    </div>

    <div>
    <input
    type="text"
    name="coming_to_school_grade"
    value={scholasticData.coming_to_school_grade}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.coming_to_school_grade),
    }}
    />
    </div>
    </Box>



    <Box sx={{display:'flex', gap:'24px', marginBottom:'6px'}} spacing={2}>
    <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}> Plays with other children</Typography>
   <div>
   <input
   type="text" 
   name="children_marks"
   value={scholasticData.children_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal11("children_marks", e.target.value);
  }}
   size="small"
   className='border border-neutral-500 w-16 rounded-sm text-center'
   maxLength="3"
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   pattern="^\d*\.?\d*$" 
   />
   </div>

    <div>
    <input
    name="children_grade"
    label="Grade"
    value={scholasticData.children_grade}
    size="small"
    className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.children_grade),
    }}
    />
  </div>
  </Box>

  <Box sx={{display:'flex', gap:'24px', marginBottom:'6px'}} spacing={2}>
    <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}> Shares with  others</Typography>
   <div>
   <input
   type="text" 
   name="shares_with_others_marks"
   value={scholasticData.shares_with_others_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal11("shares_with_others_marks", e.target.value);
  }}
   size="small"
   className='border border-neutral-500 w-16 rounded-sm text-center'
   maxLength="3"
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   pattern="^\d*\.?\d*$" 
   />
   </div>

    <div>
    <input
    name="shares_with_others_grade"
    label="Grade"
    value={scholasticData.shares_with_others_grade}
    size="small"
    className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.shares_with_others_grade),
    }}
    />
  </div>
  </Box>

  <Box sx={{display:'flex', gap:'24px', marginBottom:'6px'}} spacing={2}>
    <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>Listens  when other speak</Typography>
   <div>
   <input
   type="text" 
   name="other_speak_marks"
   value={scholasticData.other_speak_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal11("other_speak_marks", e.target.value);
  }}
   size="small"
   className='border border-neutral-500 w-16 rounded-sm text-center'
   maxLength="3"
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   pattern="^\d*\.?\d*$" 
   />
   </div>

    <div>
    <input
    name="other_speak_grade"
    label="Grade"
    value={scholasticData.other_speak_grade}
    size="small"
    className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.other_speak_grade),
    }}
    />
  </div>
  </Box>

  <Box sx={{display:'flex', gap:'24px', marginBottom:'6px'}} spacing={2}>
    <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}> Accepts responsibilities</Typography>
   <div>
   <input
   type="text" 
   name="accepts_responsibilities_marks"
   value={scholasticData.accepts_responsibilities_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal11("accepts_responsibilities_marks", e.target.value);
  }}
   size="small"
   className='border border-neutral-500 w-16 rounded-sm text-center'
   maxLength="3"
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   pattern="^\d*\.?\d*$" 
   />
   </div>

    <div>
    <input
    name="accepts_responsibilities_grade"
    label="Grade"
    value={scholasticData.accepts_responsibilities_grade}
    size="small"
    className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.accepts_responsibilities_grade),
    }}
    />
  </div>
  </Box>




  <br/>
  <Box  spacing={2}>
  <div className='w-[90%] flex gap-6 bg-[#E4E6EA] pt-2 mb-2 pl-2'>
    <Typography sx={{width:'60%', fontSize:'16px', fontWeight:'500', marginBottom:'12px', }}>Worksheets</Typography>
    <div>
    <input
    type="text"
    name="worksheets_total_marks"
    value={scholasticData?.worksheets_total_marks}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center'
    maxLength="3"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    pattern="^\d*\.?\d*$" 
    />
    </div>

    <div>
    <input
    type="text"
    name="worksheets_total_grade"
    value={scholasticData?.worksheets_total_grade}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center  text-white font-bold'
    style={{
    backgroundColor: getBackgroundColor(scholasticData?.worksheets_total_grade),
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
      onChangeTotal12("english_marks", e.target.value);
    }}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center'
    maxLength="3"
    max="10"
    min="0"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    pattern="^\d*\.?\d*$" 
    />
    </div>

    <div>
    <input
    type="text"
    name="english_grade"
    value={scholasticData.english_grade}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.english_grade),
    }}
    />
    </div>
    </Box>



    <Box sx={{display:'flex', gap:'24px', marginBottom:'6px'}} spacing={2}>
    <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>Math</Typography>
   <div>
   <input
   type="text" 
   name="math_marks"
   value={scholasticData.math_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal12("math_marks", e.target.value);
  }}
   size="small"
   className='border border-neutral-500 w-16 rounded-sm text-center'
   maxLength="3"
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   pattern="^\d*\.?\d*$" 
   />
   </div>

    <div>
    <input
    name="math_grade"
    label="Grade"
    value={scholasticData.math_grade}
    size="small"
    className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.math_grade),
    }}
    />
  </div>
  </Box>

  <Box sx={{display:'flex', gap:'24px', marginBottom:'6px'}} spacing={2}>
    <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}> Shapes & color</Typography>
   <div>
   <input
   type="text" 
   name="shapes_color_marks"
   value={scholasticData.shapes_color_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal12("shapes_color_marks", e.target.value);
  }}
   size="small"
   className='border border-neutral-500 w-16 rounded-sm text-center'
   maxLength="3"
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   pattern="^\d*\.?\d*$" 
   />
   </div>

    <div>
    <input
    name="shapes_color_grade"
    label="Grade"
    value={scholasticData.shapes_color_grade}
    size="small"
    className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.shapes_color_grade),
    }}
    />
  </div>
  </Box>

  <br/>

 
  {!isPrepClass && (
      <Box spacing={2}>
        <div className='w-[90%] flex gap-6 bg-[#E4E6EA] pt-2 mb-2 pl-2'>
          <Typography sx={{ width: '60%', fontSize: '16px', fontWeight: '500', marginBottom: '12px' }}>Abacus</Typography>
          <div>
            <input
              type="text"
              name="abacus_total_marks"
              value={scholasticData?.abacus_total_marks }
              readOnly
              size="small"
              className='border border-neutral-500 w-16 rounded-sm text-center '
              maxLength="3"
              style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
              pattern="^\d*\.?\d*$"
            />
          </div>

          <div>
            <input
              type="text"
              name="abacus_total_grade"
              value={scholasticData?.abacus_total_grade }
              readOnly
              size="small"
              className='border border-neutral-500 w-16 rounded-sm text-center  text-white font-bold'
              style={{
                backgroundColor: getBackgroundColor(scholasticData?.abacus_total_grade),
              }}
            />
          </div>
        </div>
      </Box>
      )}
 
 {!isPrepClass && (
    <Box sx={{ display: 'flex', gap: '24px', marginBottom: '6px' }} spacing={2}>
    <Typography className='w-[54%] ' sx={{ fontSize: '14px', fontWeight: '400' }}> Able to add & Subtract with the beads</Typography>
    <div>
    <input
    type="text"
    name="add_subtract_marks"
    value={scholasticData.add_subtract_marks }
    onChange={(e) => {
      handleChange(e);
      onChangeTotal13("add_subtract_marks", e.target.value);
    }}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center'
    maxLength="3"
    max="10"
    min="0"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    pattern="^\d*\.?\d*$" 
    />
    </div>

    <div>
    <input
    type="text"
    name="add_subtract_grade"
    value={scholasticData.add_subtract_grade}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.add_subtract_grade),
    }}
    />
    </div>
    </Box>
)}

{!isPrepClass && (
    <Box sx={{display:'flex', gap:'24px', marginBottom:'6px'}} spacing={2}>
    <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>Able to visualise</Typography>
   <div>
   <input
   type="text" 
   name="able_to_visualise_marks"
   value={scholasticData.able_to_visualise_marks }
   onChange={(e) => {
    handleChange(e);
    onChangeTotal13("able_to_visualise_marks", e.target.value);
  }}
   size="small"
   className='border border-neutral-500 w-16 rounded-sm text-center'
   maxLength="3"
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   pattern="^\d*\.?\d*$" 
   />
   </div>

    <div>
    <input
    name="able_to_visualise_grade"
    label="Grade"
    value={scholasticData.able_to_visualise_grade}
    size="small"
    className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.able_to_visualise_grade),
    }}
    />
  </div>
  </Box>
)}

  {!isPrepClass && (
  <Box sx={{display:'flex', gap:'24px', marginBottom:'6px'}} spacing={2}>
    <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>Clear with the concept</Typography>
   <div>
   <input
   type="text" 
   name="clear_with_the_concept_marks"
   value={scholasticData.clear_with_the_concept_marks }
   onChange={(e) => {
    handleChange(e);
    onChangeTotal13("clear_with_the_concept_marks", e.target.value);
  }}
   size="small"
   className='border border-neutral-500 w-16 rounded-sm text-center'
   maxLength="3"
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   pattern="^\d*\.?\d*$" 
   />
   </div>

    <div>
    <input
    name="clear_with_the_concept_grade"
    label="Grade"
    value={scholasticData.clear_with_the_concept_grade}
    size="small"
    className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.clear_with_the_concept_grade),
    }}
    />
  </div>
  </Box>
)}




 
  <br/>
  <Box  spacing={2}>
  <div className='w-[90%] flex gap-6 bg-[#E4E6EA] pt-2 mb-2 pl-2'>
    <Typography sx={{ width:'60%', fontSize:'16px', fontWeight:'500', marginBottom:'12px', }}>Written skills</Typography>
    <div>
    <input
    type="text"
    name="written_skills_total_marks"
    value={scholasticData?.written_skills_total_marks}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center'
    maxLength="3"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    pattern="^\d*\.?\d*$" 
    />
    </div>

    <div>
    <input
    type="text"
    name="written_skills_total_grade"
    value={scholasticData?.written_skills_total_grade}
    readOnly
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center  text-white font-bold'
    style={{
    backgroundColor: getBackgroundColor(scholasticData?.written_skills_total_grade),
    }}
    />
    </div>
    </div>    
    </Box>
 
 
    <Box sx={{ display: 'flex', gap: '24px', marginBottom: '6px' }} spacing={2}>
    <Typography className='w-[54%] ' sx={{ fontSize: '14px', fontWeight: '400' }}>Literacy</Typography>
    <div>
    <input
    type="text"
    name="literacy_marks"
    value={scholasticData.literacy_marks}
    onChange={(e) => {
      handleChange(e);
      onChangeTotal14("literacy_marks", e.target.value);
    }}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center'
    maxLength="3"
    max="10"
    min="0"
    style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
    pattern="^\d*\.?\d*$" 
    />
    </div>

    <div>
    <input
    type="text"
    name="literacy_grade"
    value={scholasticData.literacy_grade}
    size="small"
    className='border border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.literacy_grade),
    }}
    />
    </div>
    </Box>


    <Box sx={{display:'flex', gap:'24px', marginBottom:'6px'}} spacing={2}>
    <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}> Numeracy</Typography>
   <div>
   <input
   type="text" 
   name="numeracy_marks"
   value={scholasticData.numeracy_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal14("numeracy_marks", e.target.value);
  }}
   size="small"
   className='border border-neutral-500 w-16 rounded-sm text-center'
   maxLength="3"
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   pattern="^\d*\.?\d*$" 
   />
   </div>

    <div>
    <input
    name="numeracy_grade"
    label="Grade"
    value={scholasticData.numeracy_grade}
    size="small"
    className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.numeracy_grade),
    }}
    />
  </div>
  </Box>

  <Box sx={{display:'flex', gap:'24px', marginBottom:'6px'}} spacing={2}>
    <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}> E.V.S.</Typography>
   <div>
   <input
   type="text" 
   name="E_V_S_marks"
   value={scholasticData.E_V_S_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal14("E_V_S_marks", e.target.value);
  }}
   size="small"
   className='border border-neutral-500 w-16 rounded-sm text-center'
   maxLength="3"
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   pattern="^\d*\.?\d*$" 
   />
   </div>

    <div>
    <input
    name="E_V_S_grade"
    label="Grade"
    value={scholasticData.E_V_S_grade}
    size="small"
    className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.E_V_S_grade),
    }}
    />
  </div>
  </Box>


  {!isPrepClass && (
  <Box sx={{display:'flex', gap:'24px', marginBottom:'6px'}} spacing={2}>
    <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}>Hindi</Typography>
   <div>
   <input
   type="text" 
   name="hindi_marks"
   value={scholasticData.hindi_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal14("hindi_marks", e.target.value);
  }}
   size="small"
   className='border border-neutral-500 w-16 rounded-sm text-center'
   maxLength="3"
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   pattern="^\d*\.?\d*$" 
   />
   </div>

    <div>
    <input
    name="hindi_grade"
    label="Grade"
    value={scholasticData.hindi_grade}
    size="small"
    className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
       style={{
      backgroundColor: getBackgroundColor(scholasticData.hindi_grade),
    }}
    />
  </div>
  </Box>
  )}

  
  <Box sx={{display:'flex', gap:'24px', marginBottom:'6px'}} spacing={2}>
    <Typography  className='w-[54%]  'sx={{fontSize:'14px', fontWeight:'400', }}> Kit activity</Typography>
   <div>
   <input
   type="text" 
   name="kit_activity_marks"
   value={scholasticData.kit_activity_marks}
   onChange={(e) => {
    handleChange(e);
    onChangeTotal14("kit_activity_marks", e.target.value);
  }}
   size="small"
   className='border border-neutral-500 w-16 rounded-sm text-center'
   maxLength="3"
   max="10"
   min="0"
   style={{ '-moz-appearance': 'textfield', 'appearance': 'textfield' }}
   pattern="^\d*\.?\d*$" 
   />
   </div>

    <div>
    <input
    name="kit_activity_grade"
    label="Grade"
    value={scholasticData.kit_activity_grade}
    size="small"
    className=' border  border-neutral-500 w-16 rounded-sm text-center text-white'
    style={{
      backgroundColor: getBackgroundColor(scholasticData.kit_activity_grade),
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

<Box style={{ display: 'flex', gap:'40px' , justifyContent:'flex-end', marginRight:'5%'  }}>
      <Button 
      type="submit"
      variant="contained"
      color="primary"
      style={{ ...buttonStyle, color: current_coscholasticpretoukg && current_coscholasticpretoukg[0]?.[term]?.status === 'Finish' ? 'gray' : 'white' }}
      disabled={current_coscholasticpretoukg && current_coscholasticpretoukg[0]?.[term]?.status === 'Finish'}
      >
    Save Draft
     </Button>


     <Button
  variant="contained"
  color="primary"
  onClick={() => {
    handleOpen();
  }}
  style={{...buttonStyle,
        color: !isAllFieldsFilled() || (current_coscholasticpretoukg && current_coscholasticpretoukg[0]?.[term]?.status === 'Finish') ? 'gray' : 'white'}}
        disabled={ !isAllFieldsFilled()  || (current_coscholasticpretoukg && current_coscholasticpretoukg[0]?.[term]?.status === 'Finish')}
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
