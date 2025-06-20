import { Plus, Search } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, searchFunc } from "@/entities/redux/sync/todo/todoSlice";

export default function HeaderHome() {
    // add Modal
    const [addModal, setAddModal] = useState(false)
    const [addName, setAddName] = useState("");
    const [addSurName, setAddSurName] = useState("");
    const [addIsStudent, setAddIsStudent] = useState(false)

    //  search input state
    const { setSearchInp } = useSelector(state => state.todo)

    const dispatch = useDispatch();



    const resetModal = () => {
        setAddModal(false)
        setAddName("")
        setAddSurName("")
        setAddIsStudent(false)
    }


    return <div>

        <div className="flex  items-center w-[80%] m-auto justify-around p-2">
            <button className="text-2xl font-bold text-slate-700 flex items-center bg-gray-100/80 hover:bg-gray-200/80 ml-2 rounded-md p-1 mt-2"
                onClick={() => setAddModal(true)}><Plus />New</button>
            <div className="flex items-center relative">
                <input
                    type="text" value={setSearchInp} onChange={(e) => dispatch(searchFunc(e.target.value))} className="border-1 border-gray-400/80    rounded h-8 placeholder:font-medium placeholder:text-slate-700 p-1" placeholder="Search" name="" id="" />
                <Search className="absolute left-40 text-slate-700" />
            </div>

        </div>



        {addModal && <div className="fixed inset-0 bg-black/50 flex justify-center items-center space-y-4">
            <div className="bg-white p-4 rounded shadow-md  space-y-4  w-[40%]">
                <h1 className="text-slate-700 font-bold text-2xl">Добавить Юзер</h1>
                <div className=" bg-gray-300/30 rounded-md flex flex-col p-4 gap-2 ">
                    <input className="bg-white h-10 p-1 border-1 rounded" placeholder="Вводите Имя" type="text" value={addName} onChange={(e) => setAddName(e.target.value)} />
                    <input className="bg-white h-10 p-1 border-1 rounded" placeholder="Вводите фамилю" type="text" value={addSurName} onChange={(e) => setAddSurName(e.target.value)} />

                </div>
                <label className="flex items-center space-x-2">
                    <input type="checkbox" checked={addIsStudent} onChange={(e) => setAddIsStudent(e.target.checked)} />
                    <span>Студент?</span>
                </label>
                <div className="flex gap-2">
                    <button onClick={() => {
                        dispatch(addUser({
                            id: Date.now(),
                            name: addName,
                            fullName: addSurName,
                            isStudent: addIsStudent,
                        })); resetModal()
                    }} >Сохранить</button>
                    <button onClick={() => resetModal()}>Отмена</button>
                </div>
            </div>
        </div>
        }



    </div>
}