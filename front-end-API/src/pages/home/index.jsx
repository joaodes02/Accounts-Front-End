import './style.css'
import Trash from '../../assets/trash.svg'

function Home() {

  const users = [{
    id: '1231231sdasd',
    name: 'Joao',
    age: "23",
    email: 'joao@gmail.com'
  },
  {
    id:'123123134ssssss',
    name:'Aleixo',
    age: '24',
    email: 'aleixo@gmail.com'

  }]

  return (
    
    <div className='container'>
      <form>
        <h1>Cadastro de Usuarios</h1>
        <input name='nome' type='text'/>
        <input name='idade' type='number'/>
        <input name='email'type='email'/>
        <button type='button'>Cadastrar</button>
      </form>


    {users.map(user => (
      <div key={user.id}>
        <div>
            <p>Nome: {user.name}</p>
            <p>Idade: {user.age} </p>
            <p>E-mail: {user.email}</p>
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
