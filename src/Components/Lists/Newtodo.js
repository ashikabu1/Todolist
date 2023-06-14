import React, { useState } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Newstyle.css'

import {FiEdit} from 'react-icons/fi'
import {MdDelete} from 'react-icons/md'

const Newtodo = () => {
    const [todo,setTodo] = useState('')
    const [inp,setInp] = useState([])
    const [editid,setEditid] = useState(0)

    const submit = (e) =>{
        e.preventDefault()
    }

    const add = () =>{
        if(todo !==''){
            setInp([...inp,{list:todo,id: Date.now()}])
            console.log(inp)
            setTodo('')
        }
        if (editid){
            const edit = inp.find((todo)=>todo.id==editid)
            const update = inp.map((to)=>to.id==edit.id?(to={id : to.id, list:todo}):
            (to={id : to.id, list : to.list}))
            setInp(update)
            setEditid(0)
            setTodo('')
        }
    }

    const Delete=(id)=>{
        setInp(inp.filter((to)=>to.id !==id))
    }

    const onEdit=(id)=>{
        const edit = inp.find((to)=>to.id === id)
        setTodo(edit.list)
        setEditid(edit.id)
    }
  return (
    <div className='parent'>
        <div className='child'>
            <h1>To<span className='sp1'>Do</span>List</h1>
            <form className='for' onSubmit={submit}>
                <input type='text' value={todo} placeholder='Add your daily tasks'
                className='inp1' onChange={(e)=> setTodo(e.target.value)}/>
                <button onClick={add}>{editid? 'Edit' : 'Add'}</button>
            </form>
            <div className='child1'>
                <ul>
                    {inp.map((value)=>(
                        <li className='items'>
                            <div className='ite'>{value.list}</div>
                            <div className='sp2'>
                                <FiEdit className='icon1' id='edit' title='Edit' onClick={()=>onEdit(value.id)}/>
                                <MdDelete className='icon1' id='delete' title='Delete' onClick={()=>Delete(value.id)}/>
                            </div>
                            

                        </li>
                    ))}
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Newtodo