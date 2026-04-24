'use client'
import { Todo } from "@/type"
import { ChangeEvent, useState } from "react"
import TodoItem from "./TodoItem"

const TodoList:React.FC=()=>{
    const [todos,setTodos]=useState<Todo[]>([
        {id:'1',text:'یادگیری TypeScript',completed:false},
        {id:'2',text:'ساخت اپلیکیشن React',completed:false},
    ])

const [newTodoText,setNewTodoText]=useState<string>('')

const handleAddTodo=()=>{
    if(newTodoText.trim()){
        const newTodo:Todo={
            id:Date.now().toString(),
            text:newTodoText,
            completed:false,
        }
        setTodos([...todos,newTodo])
        setNewTodoText('')
    }
}

const handleToggleComplete=(id:string)=>{
    setTodos(
        todos.map(todo=>
            todo.id===id ? {...todo,completed:!todo.completed}:todo
            )
    )
}

const handleDelete=(id:string)=>{
    setTodos(todos.filter(todo=>todo.id !==id))
}

const handleEditStart=(id:string,currentText:string,startEdit:boolean=true)=>{
    setTodos(
        todos.map(todo=>
            todo.id===id? {...todo,editing:startEdit,text:currentText}:todo
        )
    )
}

const handleEditSave=(id:string,newText:string)=>{
    setTodos(
        todos.map(todo=>
            todo.id===id? {...todo,text:newText,editing:false}:todo
        )
    )
}
const handleCancelEdit=(id:string)=>{
    const originalTodo=todos.find(todo=>todo.id===id)
    if(originalTodo){
        setTodos(todos.map(todo=>
            todo.id=== id ?{...todo,editing:false,text:originalTodo.text}:todo
        ))
    }
}












const handleInputChange=(e:ChangeEvent<HTMLInputElement>)=>{
    setNewTodoText(e.target.value)
}

const handleKeyPressOnInput=(e:React.KeyboardEvent)=>{
    if(e.key==="Enter"){
        handleAddTodo()
    }
}



return(
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">لیست کارها </h2>
        <div className="flex mb-4">

        <input type="text" value={newTodoText} onChange={handleInputChange} onKeyPress={handleKeyPressOnInput} placeholder="کارجدید..." className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <button onClick={handleAddTodo} type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500">اضافه کن </button>
        </div>
        <ul>
            {todos.map(todo=>(
                <TodoItem key={todo.id} todo={todo} onToggleComplete={handleToggleComplete} onDelete={handleDelete} onEdit={handleEditSave} onCancelEdit={handleCancelEdit} />
            ))}
        </ul>
    </div>
)
}

export default TodoList