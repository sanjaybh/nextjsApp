import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper';

export const HomeSlice = createSlice({
  name: 'home',
  initialState:{
    url:{},
    generes: {}
  },
  reducers: {
    getApiConfiguration: (state, action) => {
		  //state.url = action.payload;
      state.url = [...state.value, action.payload];
    },
	  getGenres: (state, action) => {
		  state.genres = action.payload;
	  }
  },
  // Special reducer for hydrating the state
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.url,
      };
    }
  }
})


// Action creators are generated for each case reducer function
export const { getApiConfiguration, getGenres  } = HomeSlice.actions
export const selectComments = (state) => state.url;
export default HomeSlice.reducer