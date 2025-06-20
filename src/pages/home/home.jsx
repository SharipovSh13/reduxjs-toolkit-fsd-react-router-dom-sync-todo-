import { useDispatch, useSelector } from "react-redux"
import {  Trash2, UserPen } from 'lucide-react';
import { deleteFunctions, eddFunc } from "@/entities/redux/sync/todo/todoSlice";
import { useState } from "react";
import HeaderHome from "./component/headerComponent";

export default function Home() {
    const {todo, setSearchInp }= useSelector(state => state.todo);
    
    
    const [eddModal, setEddModal] = useState(false)
    const [eddName, setEddName] = useState("");
    const [eddSurname, setEddSurName] = useState("");
    const [eddIsStudent, setEddIsStudent] = useState('')
    const [idx, setIdx] = useState(null)


    const editFunctions = (el) => {
        
        setIdx(el.id)
        setEddModal(true)
        setEddName(el.name)
        setEddSurName(el.fullName)
        setEddIsStudent(el.isStudent)


    }
    const edditMainFunction =()=>{
        const user={
            id:idx,
            name:eddName,
            fullName:eddSurname,
            isStudent:eddIsStudent,

        }
        dispatch(eddFunc(user))
    }
    
    const resetEddModal = ()=>{
        setEddModal(false)

    }


    const dispatch = useDispatch();

    return <>
    <HeaderHome/>
        <div className=" w-[90%] m-auto ">
            <table className="w-[90%] m-auto text-center border-1">
                <thead className="text-start border-1 bg-slate-800/10 text-slate-700">
                    <tr className="h-12">
                        <th>Id</th>
                        <th>Name</th>
                        <th>Sur Name</th>
                        <th>Student ?</th>
                        <th>...</th>
                    </tr>
                </thead>
                <tbody className="">
                    {
                        todo?.filter((value,  ) => {
                            return value.name.toLowerCase().includes(setSearchInp)
                        }).map((value, ) => {
                            return <tr key={value.id} className="border-1 h-10 ">
                                <td>
                                    {value.id}
                                </td>
                                <td>{value.name}</td>
                                <td>{value.fullName}</td>
                                <td>{value.isStudent ? <div className="rounded-full bg-green-600 w-fit m-auto p-0.5">Yes</div> : <div className="rounded-full bg-red-600 w-fit m-auto p-0.5">No</div>}</td>
                                <td>
                                    <div className="flex items-center m-auto w-[50%] justify-between">
                                        <UserPen className="hover:text-blue-600" onClick={() => { editFunctions(value) }} />
                                        <Trash2 className="hover:text-red-600" onClick={() => dispatch(deleteFunctions(value.id))} />

                                    </div>


                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <div />

            {eddModal && <div className="fixed inset-0 bg-black/50 flex justify-center items-center space-y-4">
                <div className="bg-white p-4 rounded shadow-md  space-y-4  w-[40%]">
                    <h1 className="text-slate-700 font-bold text-2xl">Изменит Юзер</h1>
                    <div className=" bg-gray-300/30 rounded-md flex flex-col p-4 gap-2 ">
                        <input className="bg-white h-10 p-1 border-1 rounded" placeholder="Вводите Имя" type="text" value={eddName} onChange={(e) => setEddName(e.target.value)} />
                        <input className="bg-white h-10 p-1 border-1 rounded" placeholder="Вводите фамилю" type="text" value={eddSurname} onChange={(e) => setEddSurName(e.target.value)} />

                    </div>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" checked={eddIsStudent} onChange={(e) => setEddIsStudent(e.target.checked)} />
                        <span>Студент?</span>
                    </label>
                    <div className="flex gap-2">
                        <button onClick={() => {edditMainFunction(), resetEddModal()

                        }} >Сохранить</button>
                        <button onClick={() => { }}>Отмена</button>
                    </div>
                </div>
            </div>
            }
        </div>

    </>


}

