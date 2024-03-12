import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
import { keyUri, config } from '../key'
import { toast } from 'react-toastify'


const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

// const teacher = localStorage.getItem("teacher")
//   ? localStorage.getItem("teacher")
//   : null;


const initialState = {
   
    all_teacher:[],
    loading:false,
    hasError:false,
    current_teacher:null,
    isAuthenticate: token ? true : false,
    teacher: null,
    token: token,


    
 
}


export const teacherSlice = createSlice({
  name: 'teacher',
  initialState,
  reducers: {

    getteacher: state => {
      state.loading = true;
    },

    getAll_teacher_success: (state, {payload})  =>{
        state.loading = false
        state.all_teacher = payload

    },


    getCurrentSuccess: (state, {payload}) =>{
        state.loading = false
        state.current_teacher = payload
    
    },

    get_teacher_Failure: (state) => {

      state.loading = false
      state.hasError = true
    },



    getAuthenticate: (state, { payload }) => {
      state.loading = false;
      state.teacherAuthenticate = true;
      state.teacher = payload.teacher;

      console.log(payload.teacher)
      state.token = payload.token;
    },

    isAuthenticateError: (state) => {
      state.hasError = true;
      state.loading = false;
      state.isAuthenticate = false;
    },
    
    getTeacherProfile: (state, { payload }) => {

      console.log(payload)

      state.loading = false;
      state.teacher = payload;
      state.isAuthenticate = true;
    },

  },
})


export const { getteacher ,getAll_teacher_success, getCurrentSuccess, get_teacher_Failure, getTeacherProfile, getAuthenticate, isAuthenticateError, } = teacherSlice.actions;



export const teacherSelector = state => state.teacher;

export const setSnackbarMessage = (message) => (dispatch) => {

  console.log(message)

    dispatch({
      type: 'SET_SNACKBAR_MESSAGE',
      payload: message,
    });
  }



  export const fetchAllTeacher = () => async (dispatch) => {
    dispatch(getteacher());
    const key = 'fetchAllTeacher';
    try {
      const { data } = await axios.get(keyUri.BACKEND_URI + `/teacher`,config); 
      dispatch(getAll_teacher_success(data));
    } catch (error) {
      dispatch(get_teacher_Failure());
    }
  };


  export const createteacher = (values) => async (dispatch) => {
  dispatch(getteacher());
  const key = 'create'; 
  try {
  const { data } = await axios.post(keyUri.BACKEND_URI + `/teacher`,values,config);
  toast.success (data.msg, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
    })
      dispatch(fetchAllTeacher());
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
      dispatch(get_teacher_Failure());
    }
  };



  export const fetchOneTeacher = (id) => async (dispatch) => {
    dispatch(getteacher());
    const key = 'fetchOneTeacher';
  
    try {
      const { data } = await axios.get(keyUri.BACKEND_URI + `/teacher/${id}`,config);
      dispatch(getCurrentSuccess(data));
    } catch (error) {
      dispatch(get_teacher_Failure());
    }
  };


  export const updateTeacher = (values, id) => async (dispatch) => {
    console.log(id);
    const key = 'teacher';
  
    dispatch(getteacher());
  
    try {
      const { data } = await axios.put(keyUri.BACKEND_URI + `/teacher/${id}`, values, config);
      toast.success (data.msg, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
    })
    dispatch(fetchAllTeacher());
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
      dispatch(get_teacher_Failure());
    }
  };


  export const deleteTeacher = (id) => async (dispatch) => {
    dispatch(getteacher());
    const key = 'create';
    try {
      const { data } = await axios.delete(keyUri.BACKEND_URI + `/teacher/${id} `, config);
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
        dispatch(fetchAllTeacher());
      } else {
        // Handle unexpected response format
        console.error("Unexpected response format:", data);
        dispatch(get_teacher_Failure());
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
      dispatch(get_teacher_Failure());
    }
  };


  export const logOut = () => async (dispatch) => {

    try {
      localStorage.removeItem("token");
      localStorage.removeItem("teacher");
      window.location.href = "/";
      console.log("inn");
    } catch (error) {
      dispatch(isAuthenticateError());
    }
  };
  
  export const fetchTeacherlogin = (logindata) => async (dispatch) => {
    dispatch(getteacher());
    try {
      const { data } = await axios.post(keyUri.BACKEND_URI + "/teacherAuth", logindata, config);
      console.log(data);
      toast.success (data?.msg, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
    })
      dispatch(getAuthenticate(data));
      localStorage.setItem("token", JSON.stringify(data.token));
      localStorage.setItem("teacher", (data?.teacher?._id));
    } catch (error) {
      console.log(error)
      toast.error (error?.response?.data?.msg, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,    
    })
      dispatch(isAuthenticateError());
    }
  };
  
  export const fetchTeacherProfile = (token) => async (dispatch) => {
    console.log(token);
    const loginConfig = {
      headers: {
      Authorization: `Bearer ${token}`,
      },
    };
    dispatch(getteacher());
    try {
      const { data } = await axios.get(keyUri.BACKEND_URI + "/teacherProfile", loginConfig);
      console.log(data)
      dispatch(getTeacherProfile(data));
    } catch (error) {
      console.log(error);
      dispatch(logOut());
    }
  };



export default teacherSlice.reducer;
