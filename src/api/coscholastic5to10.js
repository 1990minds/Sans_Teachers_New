import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
import { keyUri, config } from '../key'
import { toast } from 'react-toastify'


const initialState = {

    all_coscholastic5to10:[],
    class_coscholastic5to10:[],
    loading:false,
    hasError:false,
    current_coscholastic5to10:null,
 
}


export const coscholastic5to10Slice = createSlice({
  name: 'coscholastic5to10',
  initialState,
  reducers: {


    getcoscholastic5to10: state => {
      state.loading = true;
    },

    getAll_coscholastic5to10_success: (state, {payload})  =>{



console.log('hhhhhhhhhhhh')

        state.loading = false
        state.all_coscholastic5to10 = payload.coscholastic5to10

    },

    getClass_coscholastic5to10_success: (state, {payload})  =>{
console.log(payload)

      state.loading = false
      state.class_coscholastic5to10 = payload.coscholastic5to10

  },



  getCurrentSuccess: (state, {payload}) =>{

    console.log(payload)
    
            state.loading = false
            state.current_coscholastic5to10 = payload
        
        },


        
    get_coscholastic5to10_Failure: (state) => {

      state.loading = false
      state.hasError = true
    },

  },
})


export const { getcoscholastic5to10 ,getAll_coscholastic5to10_success, getCurrentSuccess, get_coscholastic5to10_Failure, getClass_coscholastic5to10_success  } = coscholastic5to10Slice.actions;



export const coscholastic5to10Selector = state => state.coscholastic5to10;


  export const fetchAllCoscholastic5to10 = () => async (dispatch) => {
    dispatch(getcoscholastic5to10());
    const key = 'fetchAllCoscholastic5to10';
    try {
      const { data } = await axios.get(keyUri.BACKEND_URI + `/coscholastic5to10`,config); 
      dispatch(getAll_coscholastic5to10_success(data));
    } catch (error) {
      dispatch(get_coscholastic5to10_Failure());
    }
  };

  export const fetchClassCoscholastic5to10 = (id) => async dispatch => {

    dispatch(getcoscholastic5to10())
    try {
  
      const { data } = await axios.get(keyUri.BACKEND_URI + `/classcoscholastic5to10/${id}`, config)
  
      dispatch(getClass_coscholastic5to10_success(data));
    } catch (error) {
  
      dispatch(get_coscholastic5to10_Failure())
    }
  };


  export const  createcoscholastic5to10 = (values) => async (dispatch) => {

    console.log(values)
    dispatch(getcoscholastic5to10());
    const key = 'create'; 
    try {
      const { data } = await axios.post(keyUri.BACKEND_URI + `/coscholastic5to10`,values,config);
      toast.success (data.msg, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
    })
      dispatch(fetchAllCoscholastic5to10());
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
      dispatch(get_coscholastic5to10_Failure());
    }
  };



  export const fetchOneCoscholastic5to10 = (id) => async (dispatch) => {
    dispatch(getcoscholastic5to10());
    console.log(id)
    const key = 'fetchOneCoscholastic5to10';
  
    try {
      const { data } = await axios.get(keyUri.BACKEND_URI + `/coscholastic5to10/${id}`,config);
      dispatch(getCurrentSuccess(data));

    } catch (error) {
      dispatch(get_coscholastic5to10_Failure());
    }
  };


  export const updateCoscholastic5to10 = (values, id) => async (dispatch) => {
    console.log(id);
    const key = 'coscholastic5to10';
  
    dispatch(getcoscholastic5to10());
  
    try {
      const { data } = await axios.put(keyUri.BACKEND_URI + `/coscholastic5to10/${id}`, values, config);
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
      dispatch(get_coscholastic5to10_Failure());
    }
  };





export default coscholastic5to10Slice.reducer;
