import {useState} from "react"


function Todo(){

    const[list,setlist] = useState([])
    const[nitem,setnitem] = useState("")

    const handledelete = (removeid)=> {

        
       var temparr = list.filter((item)=> {
            if(item.id == removeid){
                return false
            }

            else{
                return true
            }
        })

        setlist(temparr)
    }

    const handlechange = (e)=>{
         setnitem(e.target.value)
    }

    const handleadd = ()=> {
         setlist([...list,{id:list.length+1,activity:nitem}])
    }

    return(
        <>
         <h1>Todo List</h1>
         <input type="text"  value={nitem} onChange={handlechange}  />
         <button onClick={handleadd}>Add</button>
         <ul>

         {
            list.map((item)=> {
                return <li>{item.activity} <button onClick={()=> {handledelete(item.id)}}>Delete</button></li>
            })
         }

         </ul>
         
        </>
    )
}

export default Todo