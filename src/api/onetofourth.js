import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
import { keyUri, config } from '../key'
import { toast } from 'react-toastify'


const initialState = {


    
    all_onetofourth:[],
    student_marks:[],
    loading:false,
    hasError:false,
    current_onetofourth:null,
 
}


export const onetofourthSlice = createSlice({
  name: 'onetofourth',
  initialState,
  reducers: {


    getonetofourth: state => {
      state.loading = true;
    },

    getAll_onetofourth_success: (state, {payload})  =>{
        state.loading = false
        state.all_onetofourth = payload.onetofourth

    },

    getClass_onetofourth_success: (state, {payload})  =>{
      state.loading = false
      state.student_marks = payload.onetofourth

  },


    getCurrentSuccess: (state, {payload}) =>{
        state.loading = false
        state.current_onetofourth = payload
    
    },

    get_onetofourth_Failure: (state) => {

      state.loading = false
      state.hasError = true
    },

  },
})


export const { getonetofourth ,getAll_onetofourth_success, getCurrentSuccess, get_onetofourth_Failure, getClass_onetofourth_success  } = onetofourthSlice.actions;



export const onetofourthSelector = state => state.onetofourth;


  export const fetchAllOnetofourth = () => async (dispatch) => {
    dispatch(getonetofourth());
    const key = 'fetchAllOnetofourth';
    try {
      const { data } = await axios.get(keyUri.BACKEND_URI + `/onetofourth`,config); 
      dispatch(getAll_onetofourth_success(data));
      console.log(data)
    } catch (error) {
      dispatch(get_onetofourth_Failure());
    }
  };

  export const fetchSectionStudentsMarks = (id, year) => async dispatch => {

    console.log(id)
    console.log(year)

    dispatch(getonetofourth())
    try {
  
      const { data } = await axios.get(keyUri.BACKEND_URI + `/sectionstudentmarks/${id}/${year}`, config,)
  console.log(data)
      dispatch(getClass_onetofourth_success(data));
    } catch (error) {
  
      dispatch(get_onetofourth_Failure())
    }
  };


  export const  createonetofourth = (values, id, year) => async (dispatch) => {
    dispatch(getonetofourth());
    const key = 'create'; 
    try {
      const { data } = await axios.post(keyUri.BACKEND_URI + `/onetofourth`,values,config);
      toast.success (data.msg, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
    })
      dispatch(fetchAllOnetofourth());
      dispatch(fetchSectionStudentsMarks(id, year));
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
      dispatch(get_onetofourth_Failure());
    }
  };



  export const updateOnetofourth = (values, id) => async (dispatch) => {
    console.log(id);
    const key = 'onetofourth';
  
    dispatch(getonetofourth());
  
    try {
      const { data } = await axios.put(keyUri.BACKEND_URI + `/onetofourth/${id}`, values, config);
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
      dispatch(get_onetofourth_Failure());
    }
  };



export default onetofourthSlice.reducer;
