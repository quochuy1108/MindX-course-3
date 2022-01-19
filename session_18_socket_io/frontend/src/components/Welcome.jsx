import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const Welcome = ({getUserName}) => {

    const navigate = useNavigate()

    const [userName, setUserName] = useState('')
    const [validUserName, setValidUserName] = useState(true)

    const handleUserName = (e) => {
        setUserName(e.target.value)
    }

    const loginGame = () => {

        if(validUserName){
            navigate('/')
            getUserName(userName)
        }
    }

    useEffect(() => {
        setValidUserName(userName.length >=3)
    }, [loginGame]);

console.log('userName:', userName);
    return (
        <div style={{padding:'0px 0px'}} className="container text-center bg-light mt-5">
            <div className="title bg-black text-white py-3">Tic Tac Toe World Championship</div>
            <div style={{flexDirection:'column'}} className="block p-3 d-flex align align-items-center ">
                <h3>Please enter your nick name</h3>
                <input 
                value={userName} 
                className="d-flex justify-content-center my-3" 
                type="text" 
                placeholder="Enter here ..." 
                onChange={handleUserName}
                />
            <button
             className="btn btn-primary"
             onClick={loginGame}
             >Enter</button>
             {validUserName ?  null :<div style={{color:'red',textTransform:'italic',marginTop:16}}>UserName must greater than 3 </div> }
            </div>
        </div>
    )
}

export default Welcome
