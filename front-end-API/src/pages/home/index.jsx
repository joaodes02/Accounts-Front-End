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
        <input placeholder="Nome" name='nome' type='text'/>
        <input  placeholder= "Idade" name='idade' type='number'/>
        <input placeholder="E-mail" name='email'type='email'/>
        <button type='button'>Cadastrar</button>
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
