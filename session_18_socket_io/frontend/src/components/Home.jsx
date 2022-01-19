import {useEffect,useState} from 'react'
import {Navigate,useNavigate} from 'react-router-dom'
import Tables from './Tables'
import socket from '../socket'

const Home = ({user}) => {
const navigate = useNavigate()
const [usersCount, setUsersCount] = useState(0)
const [gameTables, setGameTables] = useState([])


useEffect(() => {
    if(!user) {
        return 
    }
    socket.emit('NEW_USER',user)

    socket.on('USER_COUNT',(usersCount)=> {
        setUsersCount(usersCount)
    })

    socket.on('FETCH_GAME_TABLE',(gameTable)=> {
        setGameTables(gameTable)
    })

    
}, [user]);

const handleCreateTable = (id) => {
    socket.emit('NEW_GAME_TABLE')
    socket.on('FETCH_GAME_TABLE',(gameTable)=> {
        navigate(`/${gameTable[0].id}`)
    })
    
}


if(!user) {
    return <Navigate to='/welcome'/>
}

    return (
        <div>
           <div className="container-fluid bg-light">Hello, {user}</div>
           <div className="container mt-5 p-0">
               <div className="d-flex justify-content-between">
               <div className="btn btn-primary" onClick={()=> handleCreateTable(gameTables.id)}>Create</div>
                <div>
                    <span className='me-3'>Tổng số người chơi hiện tại : <strong>{usersCount}</strong></span>
                    <span>Bàn chơi hiện tại : <strong>{gameTables.length}</strong></span>
                </div>
               </div>
           </div>
            {gameTables.map((item,index)=> {
                return <Tables key={index} data={item}/>
            })}
        </div>
    )
}

export default Home
