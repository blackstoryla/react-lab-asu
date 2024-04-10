import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './reduser';

export default configureStore({reducer})