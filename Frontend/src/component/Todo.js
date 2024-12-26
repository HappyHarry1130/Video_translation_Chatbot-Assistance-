import { useState } from "react"
import { add_todo, delete_todo, edit_todo, showActive, showAll } from "../action/todo-action";
import { useDispatch, useSelector } from "react-redux";
import './todo.css';
export default function Todo() {
    const [input_text, setInputText] = useState('');
    const todos = useSelector(state => state.todo);
    const dispatch = useDispatch();

    const [showMethod,setShowmethod]=useState('showAll');
    function TodoItem({ todo, id }) {
        return (
            <div className={showMethod}>
                <div  className={todo.status}>
                <li onClick={() => handleText(id)} >
                    {todo.text}                
                </li>
                <button className="bt_del" onClick={() => deleteText(id)}>delete</button>
                </div>
            </div>
        )
    }

   const deleteText=(id)=>{
        dispatch(delete_todo(id));
        
    }

    const handleText = (id) => {
        dispatch(edit_todo(id));
    }

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };
    const handleButtonClick = () => {
        dispatch(add_todo({ text: input_text, status: 'active' }));
    }

    
    
    return (
        <div>
            <input value={input_text} onChange={handleInputChange}></input>
            <button onClick={handleButtonClick}>AddTodo</button>
            <br />
            <ul>
            {todos.map((todo, key) => (
                <TodoItem todo={todo} id={key} />
            ))}
            </ul>
            
        </div>

    )
}