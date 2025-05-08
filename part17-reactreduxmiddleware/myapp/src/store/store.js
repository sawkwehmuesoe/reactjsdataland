// import { configureStore } from '@reduxjs/toolkit'
// import counterreducer from './reducer'
// import log from "../middleware/log"

// export default configureStore({
//   reducer: {
//     counter: counterreducer
//   },
//   // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(log)
//   middleware:(getDefaultMiddleware)=>[...getDefaultMiddleware(),log]
// })


// => With Redux Loger 

// import { configureStore } from '@reduxjs/toolkit'
// import counterreducer from './reducer'
// import {createLogger} from 'redux-logger'

// const logger = createLogger();

// export default configureStore({
//   reducer: {
//     counter: counterreducer
//   },
//   // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
//   middleware:(getDefaultMiddleware)=>[...getDefaultMiddleware(),logger]
  
// })


// => With Redux Loger with customrerrormid

import { configureStore } from '@reduxjs/toolkit'
import counterreducer from './reducer'
import {createLogger} from 'redux-logger'
import userlog  from "../middleware/usererrormid"

const logger = createLogger();

export default configureStore({
  reducer: {
    counter: counterreducer
  },
  // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger,userlog)
  middleware:(getDefaultMiddleware)=>[...getDefaultMiddleware(),logger,userlog]
  
})