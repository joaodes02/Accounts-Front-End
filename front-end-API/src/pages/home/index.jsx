import react from 'react'
import './style.css'
import Trash from '../../assets/trash.svg'
import api from '../../services/api'
import { useEffect, useState, useRef } from 'react'

function Home() {

  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputIdade = useRef()
  const inputEmail = useRef()

  async function getUsers(){
    const usersFromApi = await api.get('/usuarios') 
    setUsers(usersFromApi.data)
   
  }

  async function createUsers(){
    await api.post('/usuarios',{
      name: inputName.current.value,
      age: inputIdade.current.value,
      email: inputEmail.current.value
    })
    getUsers();
  }


  useEffect(()=>{
    getUsers();

  }, [])
  


  return (
    
    <div className='container'>
      <form>
        <h1>Cadastro de Usuarios</h1>
        <input placeholder="Nome" name='nome' type='text' ref={inputName}/>
        <input  placeholder= "Idade" name='idade' type='number' ref={inputIdade}/>
        <input placeholder="E-mail" name='email'type='email' ref={inputEmail}/>
        <button type='button' onClick={createUsers}>Cadastrar</button>
      </form>


    {users.map(user => (
      <div className="card" key={user.id}>
        <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>E-mail: <span>{user.email}</span></p>
        </div>
            <button>
              <img src={Trash}/>
            </button>
        </div>
   ))}
  </div>
      
         
  )
}

export default Home
