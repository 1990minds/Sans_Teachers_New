import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
import { keyUri, config } from '../key'
import { toast } from 'react-toastify'


const initialState = {


    
    all_coscholasticpretoukg:[],
    class_coscholasticpretoukg:[],
    loading:false,
    hasError:false,
    current_coscholasticpretoukg:null,
 
}


export const coscholasticpretoukgSlice = createSlice({
  name: 'coscholasticpretoukg',
  initialState,
  reducers: {


    getcoscholasticpretoukg: state => {
      state.loading = true;
    },

    getAll_coscholasticpretoukg_success: (state, {payload})  =>{
        state.loading = false
        state.all_coscholasticpretoukg = payload.coscholasticpretoukg

    },

    getClass_coscholasticpretoukg_success: (state, {payload})  =>{
      state.loading = false
      state.class_coscholasticpretoukg = payload.coscholasticpretoukg

  },


    getCurrentSuccess: (state, {payload}) =>{
        state.loading = false
        state.current_coscholasticpretoukg = payload
    
    },

    get_coscholasticpretoukg_Failure: (state) => {

      state.loading = false
      state.hasError = true
    },

  },
})


export const { getcoscholasticpretoukg ,getAll_coscholasticpretoukg_success, getCurrentSuccess, get_coscholasticpretoukg_Failure, getClass_coscholasticpretoukg_success  } = coscholasticpretoukgSlice.actions;



export const coscholasticpretoukgSelector = state => state.coscholasticpretoukg;


  export const fetchAllCoscholasticpretoukg = () => async (dispatch) => {
    dispatch(getcoscholasticpretoukg());
    const key = 'fetchAllCoscholasticpretoukg';
    try {
      const { data } = await axios.get(keyUri.BACKEND_URI + `/coscholasticpretoukg`,config); 
      dispatch(getAll_coscholasticpretoukg_success(data));
    } catch (error) {
      dispatch(get_coscholasticpretoukg_Failure());
    }
  };

  export const fetchClassCoscholasticpretoukg = (id) => async dispatch => {

    dispatch(getcoscholasticpretoukg())
    try {
  
      const { data } = await axios.get(keyUri.BACKEND_URI + `/classcoscholasticpretoukg/${id}`, config)
  
      dispatch(getClass_coscholasticpretoukg_success(data));
    } catch (error) {
  
      dispatch(get_coscholasticpretoukg_Failure())
    }
  };


  export const  createcoscholasticpretoukg = (values) => async (dispatch) => {

    console.log(values)
    dispatch(getcoscholasticpretoukg());
    const key = 'create'; 
    try {
      const { data } = await axios.post(keyUri.BACKEND_URI + `/coscholasticpretoukg`,values,config);
      toast.success (data.msg, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
    })
      dispatch(fetchAllCoscholasticpretoukg());
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
      dispatch(get_coscholasticpretoukg_Failure());
    }
  };



  export const fetchOneCoscholasticpretoukg = (id) => async (dispatch) => {
    dispatch(getcoscholasticpretoukg());
    const key = 'fetchOneCoscholasticpretoukg';
  
    try {
      const { data } = await axios.get(keyUri.BACKEND_URI + `/coscholasticpretoukg/${id}`,config);
      dispatch(getCurrentSuccess(data));
    } catch (error) {
      dispatch(get_coscholasticpretoukg_Failure());
    }
  };


  export const updateCoscholasticpretoukg = (values, id) => async (dispatch) => {
    console.log(id);
    const key = 'coscholasticpretoukg';
  
    dispatch(getcoscholasticpretoukg());
  
    try {
      const { data } = await axios.put(keyUri.BACKEND_URI + `/coscholasticpretoukg/${id}`, values, config);
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
      // Show error message using Typography
      toast.error (response.data.msg, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
    })
      dispatch(get_coscholasticpretoukg_Failure());
    }
  };





export default coscholasticpretoukgSlice.reducer;
