import { configureStore } from '@reduxjs/toolkit'
import counterreducer from './reducer'

export default configureStore({
  reducer: {
    counter: counterreducer
  }
})