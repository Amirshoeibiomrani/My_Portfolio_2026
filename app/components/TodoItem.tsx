'use client'
import { Todo } from "@/type"
import { ChangeEvent, useState } from "react";

interface TodoItemProps{
    todo:Todo;
    onToggleComplete:(id:string)=>void;
    onDelete:(id:string)=>void;
    onEdit:(id:string,newText:string)=>void;
    onCancelEdit:(id:string)=>void;
}


const TodoItem:React.FC<TodoItemProps>=({todo,onToggleComplete,onDelete,onCancelEdit,onEdit})=>{
    const [editText,setEditText]=useState<string>(todo.text)

    const handleSaveEdit=()=>{
        if(editText.trim()){
            onEdit(todo.id,editText)
        }else{
            onCancelEdit(todo.id)
        }
    }

    const handleKeyPress=(e:React.KeyboardEvent)=>{
        if(e.key==="Enter"){
            handleSaveEdit()
        }else if(e.key==="Escape"){
            onCancelEdit(todo.id)
        }
    }

    return(
    <li className="flex items-center p-2 border-b ">
        {todo.editing?(
            <>
            <input type="text" value={editText} onChange={(e:ChangeEvent<HTMLInputElement>)=>setEditText(e.target.value)} onKeyPress={handleKeyPress} onBlur={handleSaveEdit} className="flex-grow p-1 mr-2 border rounded bg-pink-200" autoFocus />
            <button onClick={handleSaveEdit} className="px-2 py-2 mr-1 bg-green-500 text-white rounded hover:bg-gray-500 ">ذخیره</button>
            <button onClick={()=>onCancelEdit(todo.id)} className="px-2 py-1 bg-gray-400 text-white rounded hover:bg-gray-500 ">لغو</button>
            </>
        ):(
<>
            <input type="checkbox" checked={todo.completed} onChange={()=>onToggleComplete(todo.id)} className=" mr-2 "  />
            <span className={`flex-grow mr-2 ${todo.completed ? 'line-through text-gray-500' : ''}`}>{todo.text}</span>
            <button onClick={()=>onEdit(todo.id,todo.text,true)} className="px-2 py-1 mr-1 bg-blue-500 text-white rounded hover:bg-blue-600">ویرایش</button>
            <button onClick={()=>onDelete(todo.id)} className="px-2 py-1 mr-1 bg-red-500 text-white rounded hover:bg-red-600">حذف</button>
</>
        )
        }
     
    </li>
    )
}

export default TodoItem