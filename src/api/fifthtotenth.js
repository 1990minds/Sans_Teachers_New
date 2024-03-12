import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
import { keyUri, config } from '../key'
import { toast } from 'react-toastify'


const initialState = {


    
    all_fifthtotenth:[],
    student_mark:[],
    loading:false,
    hasError:false,
    current_fifthtotenth:null,
 
}


export const fifthtotenthSlice = createSlice({
  name: 'fifthtotenth',
  initialState,
  reducers: {


    getfifthtotenth: state => {
      state.loading = true;
    },

    getAll_fifthtotenth_success: (state, {payload})  =>{
        state.loading = false
        state.all_fifthtotenth = payload.fifthtotenth

    },

    getClass_fifthtotenth_success: (state, {payload})  =>{
      state.loading = false
      state.student_mark = payload.fifthtotenth

  },


    getCurrentSuccess: (state, {payload}) =>{
        state.loading = false
        state.current_fifthtotenth = payload
    
    },

    get_fifthtotenth_Failure: (state) => {

      state.loading = false
      state.hasError = true
    },

  },
})


export const { getfifthtotenth ,getAll_fifthtotenth_success, getCurrentSuccess, get_fifthtotenth_Failure, getClass_fifthtotenth_success  } = fifthtotenthSlice.actions;



export const fifthtotenthSelector = state => state.fifthtotenth;


  export const fetchAllFifthtotenth = () => async (dispatch) => {
    dispatch(getfifthtotenth());
    const key = 'fetchAllFifthtotenth';
    try {
      const { data } = await axios.get(keyUri.BACKEND_URI + `/fifthtotenth`,config); 
      dispatch(getAll_fifthtotenth_success(data));
    } catch (error) {
      dispatch(get_fifthtotenth_Failure());
    }
  };

  export const fetchSectionStudentsMark = (id, year) => async dispatch => {

    dispatch(getfifthtotenth())
    try {
  
      const { data } = await axios.get(keyUri.BACKEND_URI + `/sectionstudentmark/${id}/${year}`, config)
  console.log(data)
      dispatch(getClass_fifthtotenth_success(data));
    } catch (error) {
  
      dispatch(get_fifthtotenth_Failure())
    }
  };


  export const  createfifthtotenth = (values, id, year) => async (dispatch) => {
    dispatch(getfifthtotenth());
    const key = 'create'; 
    try {
      const { data } = await axios.post(keyUri.BACKEND_URI + `/fifthtotenth`,values,config);
      toast.success (data.msg, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
    })
      dispatch(fetchAllFifthtotenth());
      dispatch(fetchSectionStudentsMark(id, year));
    } catch ({ response }) {
      toast.error (response.data.msg, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
    })
      dispatch(get_fifthtotenth_Failure());
    }
  };



  export const updateFifthtotenth = (values, id) => async (dispatch) => {
    console.log(id);
    const key = 'fifthtotenth';
  
    dispatch(getfifthtotenth());
  
    try {
      const { data } = await axios.put(keyUri.BACKEND_URI + `/fifthtotenth/${id}`, values, config);
      console.log(data);
      toast.success (data.msg, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
    })
    } catch ({ response }) {
      toast.error (response.data.msg, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,       
    })
      dispatch(get_fifthtotenth_Failure());
    }
  };



export default fifthtotenthSlice.reducer;
