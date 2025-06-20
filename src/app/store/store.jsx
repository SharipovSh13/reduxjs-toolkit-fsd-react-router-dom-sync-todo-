import { configureStore} from '@reduxjs/toolkit'
import todoReducer from '@/entities/redux/sync/todo/todoSlice'



export const store = configureStore ({
    reducer:{
        todo:todoReducer,
        
        
    }
})
