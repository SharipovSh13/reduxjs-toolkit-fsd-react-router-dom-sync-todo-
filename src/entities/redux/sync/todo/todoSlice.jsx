import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:'todo',
    initialState:{
        todo:[
            {
                id:1,
                name:'User 1',
                fullName:"React1",
                isStudent:true,

            },
            {
                id:2,
                name:'User 2',
                fullName:"React2",
                isStudent:false
            },
            {
                id:3,
                name:'User 3',
                fullName:"React3",
                isStudent:false,

            },
            {
                id:4,
                name:'User 4',
                fullName:"React4",
                isStudent:true,

            },
            {
                id:5,
                name:'User 5',
                fullName:"React5",
                isStudent:true,

            },
            {
                id:6,
                name:'User 6',
                fullName:"React6",
                isStudent:false,

            },
            {
                id:7,
                name:'User 7',
                fullName:"React7",
                isStudent:true,

            },
            {
                id:8,
                name:'User 8',
                fullName:"React8",
                isStudent:false,

            },
            {
                id:9,
                name:'User 9',
                fullName:"React9",
                isStudent:true,

            },
            {
                id:10,
                name:'User 10',
                fullName:"React10",
                isStudent:true,

            },
            {
                id:11,
                name:'User 11',
                fullName:"React11",
                isStudent:true,

            },
            {
                id:12,
                name:'User 12',
                fullName:"React12",
                isStudent:true,

            },
            {
                id:13,
                name:'User 13',
                fullName:"React13",
                isStudent:true,

            },
            {
                id:14,
                name:'User 14',
                fullName:"React14",
                isStudent:false,

            },
            {
                id:15,
                name:'User 15',
                fullName:"React5",
                isStudent:false,

            },
            
        ],
        todoNewSearch:[],
       
        setSearchInp:'',

 
    
    },
    reducers:{
        deleteFunctions:(state, action)=>{
           state.todo=state.todo.filter((el) => el.id !== action.payload)
        },
        addUser:(state, action) => {
            state.todo=[...state.todo,action.payload]
        },
        eddFunc:(state, action)=>{
            state.todo=state.todo.map((user) => 
                user.id === action.payload.id 
            ? {...user, ...action.payload} : user
            );  
        },
        searchFunc:(state, action)=>{
            state.setSearchInp=action.payload;

          
        
        }

        


        
        


    }
})

export const {deleteFunctions, addUser, eddFunc, searchFunc}= todoSlice.actions;
export default todoSlice.reducer;