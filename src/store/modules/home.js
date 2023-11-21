import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHomeGoodPriceData,getHomeHighScoreData,getHomeDiscountData,getHotRecommendData,getLongforData,getHomePlusData } from "@/services/modules/home";


export const fetchHomeDataAction = createAsyncThunk('fetchData',(payload,{dispatch}) => {
  getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfoAction(res))
  })
  getHomeHighScoreData().then(res => {
    dispatch(changeHighscoreInfoAction(res))
  })
  getHomeDiscountData().then(res => {
    dispatch(changDiscountInfoAction(res))
  })
  getHotRecommendData().then(res => {
    dispatch(changeRecommendInfoAction(res))
  })
  getLongforData().then(res => {
    dispatch(changeLongforInfoAction(res))
  })
  getHomePlusData().then(res => {
    dispatch(changePlusInfoAction(res))
  })
})

const homeSlice = createSlice({
  name:'home',
  initialState:{
    goodPriceInfo:{},
    highscoreInfo:{},
    discountInfo:{},
    recommendInfo:{},
    longforInfo:{},
    plusInfo:{}
  },
  reducers:{
    changeGoodPriceInfoAction(state,{payload}){
      state.goodPriceInfo = payload
    },
    changeHighscoreInfoAction(state,{payload}){
      state.highscoreInfo = payload
    },
    changDiscountInfoAction(state,{payload}){
      state.discountInfo = payload
    },
    changeRecommendInfoAction(state,{payload}){
      state.recommendInfo = payload
    },
    changeLongforInfoAction(state,{payload}){
      state.longforInfo = payload
    },
    changePlusInfoAction(state,{payload}){
      state.plusInfo = payload
    }
  },
  // extraReducers:(builder) => {
  //   builder.addCase(fetchHomeDataAction.fulfilled, (state,{payload}) => {
  //     state.goodPriceInfo = payload
  //   })
  // }
  // extraReducers:{
    // [fetchHomeDataAction.fulfilled](state,{payload}){
    //   state.goodPriceInfo = payload
    // }
  // } 写法已经被废弃了 改用 builder,callback
})

export const {changeGoodPriceInfoAction,changeHighscoreInfoAction,changDiscountInfoAction,changeRecommendInfoAction,changeLongforInfoAction,changePlusInfoAction} = homeSlice.actions

export default homeSlice.reducer