import { useState } from 'react'
import Card from '../Ui/Card'
import UserCard from './UserCard'
import './UserList.css'



function UserList(props) {

    const [searchValue, setSearchValue] = useState('')


    const onSearchChange = (e) => {
        setSearchValue(e.target.value)
    }

    const filterUsers = props.users.filter(user => {
        return user.name.toLowerCase().indexOf(searchValue.toLocaleLowerCase()) > -1 || user.phone.indexOf(searchValue) > -1
    })

    return (
        <Card className="user-list">
            <input
                type="text"
                className='user-list__search'
                placeholder="Search ..."
                value={searchValue}
                onChange={onSearchChange}
            />
            {filterUsers.map(user => {
                return <UserCard key={user.phone} user={user} />
            })}
        </Card>
    )
}

export default UserList
