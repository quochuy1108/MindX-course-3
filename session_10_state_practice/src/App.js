import { useState } from 'react'
import UserList from './components/User/UserList'
import UserForm from './components/User/UserForm'

function App() {

  const defaultImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRBqTeY-dTImnv-0qS4j32of8dVtWelSEMw&usqp=CAU'

  const [users, setUsers] = useState([
    { name: 'Alice', phone: '0123456789', avatar: defaultImageUrl },
    { name: 'Cris', phone: '987634521', avatar: defaultImageUrl },
    { name: 'Bob', phone: '0345432899', avatar: defaultImageUrl },
  ])

  const handleAddUser = (value) => {
    setUsers(prev => [...prev, {
      name: value.name,
      phone: value.phone,
      avatar: value.imageUrl,
    }])
  }


  return (
    <div className="App">
      <UserForm onSubmit={handleAddUser} />
      <UserList users={users} />


    </div>
  );
}

export default App;
