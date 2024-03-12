import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
import { keyUri, config } from '../key'
import { toast } from 'react-toastify'


const initialState = {


    
    all_coscholastic1to4:[],
    class_coscholastic1to4:[],
    loading:false,
    hasError:false,
    current_coscholastic1to4:null,
 
}


export const coscholastic1to4Slice = createSlice({
  name: 'coscholastic1to4',
  initialState,
  reducers: {


    getcoscholastic1to4: state => {
      state.loading = true;
    },

    getAll_coscholastic1to4_success: (state, {payload})  =>{
        state.loading = false
        state.all_coscholastic1to4 = payload.coscholastic1to4

    },

    getClass_coscholastic1to4_success: (state, {payload})  =>{
      state.loading = false
      state.class_coscholastic1to4 = payload.coscholastic1to4

  },


    getCurrentSuccess: (state, {payload}) =>{

console.log(payload)

        state.loading = false
        state.current_coscholastic1to4 = payload
    
    },

    get_coscholastic1to4_Failure: (state) => {

      state.loading = false
      state.hasError = true
    },

  },
})


export const { getcoscholastic1to4 ,getAll_coscholastic1to4_success, getCurrentSuccess, get_coscholastic1to4_Failure, getClass_coscholastic1to4_success  } = coscholastic1to4Slice.actions;



export const coscholastic1to4Selector = state => state.coscholastic1to4;


  export const fetchAllCoscholastic1to4 = () => async (dispatch) => {
    dispatch(getcoscholastic1to4());
    const key = 'fetchAllCoscholastic1to4';
    try {
      const { data } = await axios.get(keyUri.BACKEND_URI + `/coscholastic1to4`,config); 
      dispatch(getAll_coscholastic1to4_success(data));
    } catch (error) {
      dispatch(get_coscholastic1to4_Failure());
    }
  };

  export const fetchClassCoscholastic1to4 = (id) => async dispatch => {

    dispatch(getcoscholastic1to4())
    try {
  
      const { data } = await axios.get(keyUri.BACKEND_URI + `/classcoscholastic1to4/${id}`, config)
  
      dispatch(getClass_coscholastic1to4_success(data));
    } catch (error) {
  
      dispatch(get_coscholastic1to4_Failure())
    }
  };


  export const  createcoscholastic1to4 = (values) => async (dispatch) => {

    console.log(values)
    dispatch(getcoscholastic1to4());
    const key = 'create'; 
    try {
      const { data } = await axios.post(keyUri.BACKEND_URI + `/coscholastic1to4`,values,config);
      toast.success (data.msg, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
    })
      dispatch(fetchAllCoscholastic1to4());
    } catch ({ response }) {
      // Show error message using Snackbar
      toast.error (response.data.msg, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
    })
      dispatch(get_coscholastic1to4_Failure());
    }
  };



  export const fetchOneCoscholastic1to4 = (id) => async (dispatch) => {
    dispatch(getcoscholastic1to4());
    const key = 'fetchOneCoscholastic1to4';
  
    try {
      const { data } = await axios.get(keyUri.BACKEND_URI + `/coscholastic1to4/${id}`,config);
      dispatch(getCurrentSuccess(data));
    } catch (error) {
      dispatch(get_coscholastic1to4_Failure());
    }
  };


  export const updateCoscholastic1to4 = (values, id) => async (dispatch) => {
    console.log(id);
    const key = 'coscholastic1to4';
  
    dispatch(getcoscholastic1to4());
  
    try {
      const { data } = await axios.put(keyUri.BACKEND_URI + `/coscholastic1to4/${id}`, values, config);
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
    // dispatch(fetchAllCoscholastic1to4());
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
      dispatch(get_coscholastic1to4_Failure());
    }
  };





export default coscholastic1to4Slice.reducer;
