import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
import { keyUri, config } from '../key'
import { toast } from 'react-toastify'


const initialState = {


    
    all_student:[],
    section_student:[],
    loading:false,
    hasError:false,
    current_student:null,
 
}


export const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {


    getstudent: state => {
      state.loading = true;
    },

    getAll_student_success: (state, {payload})  =>{
      console.log(payload)
        state.loading = false
        state.all_student = payload

    },

    getSection_student_success: (state, {payload})  =>{
      console.log(payload)
        state.loading = false
        state.section_student = payload.student

    },



    getCurrentSuccess: (state, {payload}) =>{
        state.loading = false
        state.current_student = payload
    
    },

    get_student_Failure: (state) => {

      state.loading = false
      state.hasError = true
    },

  },
})


export const { getstudent ,getAll_student_success, getCurrentSuccess, get_student_Failure, getSection_student_success  } = studentSlice.actions;



export const studentSelector = state => state.student;


export const setSnackbarMessage = (message) => (dispatch) => {

  console.log(message)

    dispatch({
      type: 'SET_SNACKBAR_MESSAGE',
      payload: message,
    });
  }



  export const fetchAllStudent = () => async (dispatch) => {
    dispatch(getstudent());
    const key = 'fetchAllStudent';
    try {
      const { data } = await axios.get(keyUri.BACKEND_URI + `/student`,config); 
      dispatch(getAll_student_success(data));
    } catch (error) {
      dispatch(get_student_Failure());
    }
  };


  export const fetchSectionStudent = (id, year) => async dispatch => {
    dispatch(getstudent())
    try {
  
      const { data } = await axios.get(keyUri.BACKEND_URI + `/sectionstudent/${id}/${year}`, config,)
      dispatch(getSection_student_success(data));
    } catch (error) {
  
      dispatch(get_student_Failure())
    }
  };


  export const createstudent = (values) => async (dispatch) => {
  console.log(values)
  dispatch(getstudent());
  const key = 'create'; 
  try {
  const { data } = await axios.post(keyUri.BACKEND_URI + `/student`, values, config);
  toast.success (data.msg, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
    })
      dispatch(fetchAllStudent());
    } catch ({ response }) {
      // Show error message using Snackbar
      toast.success (response.data.msg, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
    })
      dispatch(get_student_Failure());
    }
  };



  export const fetchOneStudent = (id) => async (dispatch) => {
    dispatch(getstudent());
    const key = 'fetchOneStudent';
  
    try {
      const { data } = await axios.get(keyUri.BACKEND_URI + `/student/${id}`,config);
      dispatch(getCurrentSuccess(data));
    } catch (error) {
      dispatch(get_student_Failure());
    }
  };


  export const updateStudent = (values, id) => async (dispatch) => {
    console.log(id);
    const key = 'student';
  
    dispatch(getstudent());
  
    try {
      const { data } = await axios.put(keyUri.BACKEND_URI + `/student/${id}`, values, config);
      console.log(data);
      toast.success (data.msg, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
    })
    dispatch(fetchAllStudent());
    } catch ({ response }) {
      // Show error message using Typography
      toast.success (response.data.msg, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
    })
      dispatch(get_student_Failure());
    }
  };


  export const deleteStudent = (id) => async (dispatch) => {
    console.log(id)
    dispatch(getstudent());
    const key = 'create';
    try {
      const { data } = await axios.delete(keyUri.BACKEND_URI + `/student/${id} `, config);
      if (data && data.msg) {
        // Show success toast if 'msg' exists in the response
        toast.success(data.msg, {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        dispatch(fetchAllStudent());
      } else {
        // Handle unexpected response format
        console.error("Unexpected response format:", data);
        dispatch(get_student_Failure());
      }
    } catch (error) {
      // Show error toast and handle any errors
      console.error("An error occurred:", error);
      toast.error("An error occurred", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(get_student_Failure());
    }
  };


  export const StudentShift = (values) => async (dispatch) => {
    console.log(values)
    dispatch(getstudent());
    const key = 'create'; 
    try {
    const { data } = await axios.post(keyUri.BACKEND_URI + `/studentshift`, values, config);
    toast.success (data.msg, {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          
      })
        dispatch(fetchAllStudent());
      } catch ({ response }) {
        // Show error message using Snackbar
        toast.success (response.data.msg, {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      })
        dispatch(get_student_Failure());
      }
    };


export default studentSlice.reducer;
