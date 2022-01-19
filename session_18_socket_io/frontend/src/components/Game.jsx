import {useState} from 'react'
import {Row ,Col} from 'react-bootstrap'

const Game = () => {

    const [board, setBoard] = useState([
        ['X','','O'],
        ['','X',''],
        ['O','','X'],
        
    ])
    return (
        <div className="d-flex w-100">
            <div style={{flexGrow:1}} className="spacePlay vh-100">
                <div style={{height:'25vh'}} className="creator d-flex justify-content-center align-items-center ">Huy</div>

       
                {board.map((item,index)=> {
                return <Row key={index} style={{height:'16vh',textAlign:'center',margin:'auto',padding:0,width:'50vw'}}>
                    {item.map((col,i)=> {
                            return <Col className="d-flex align-items-center justify-content-center" style={{border:'1px solid '}} key={i}>{col}</Col>
                    })}

                </Row>
            })}

                {/* <div style={{height:'50vh',display:'grid',gridTemplateColumns:'auto auto auto ',backgroundColor:'#2196F3',margin:'auto'}} className="w-50"> */}


                {/* <div className="border d-flex align-items-center justify-content-center">1</div>
  <div className="border d-flex align-items-center justify-content-center">2</div>
  <div className="border d-flex align-items-center justify-content-center">3</div>  
  <div className="border d-flex align-items-center justify-content-center">4</div>
  <div className="border d-flex align-items-center justify-content-center">5</div>
  <div className="border d-flex align-items-center justify-content-center">6</div>  
  <div className="border d-flex align-items-center justify-content-center">7</div>
  <div className="border d-flex align-items-center justify-content-center">8</div>
  <div className="border d-flex align-items-center justify-content-center">9</div>   */}


                {/* </div> */}
                <div style={{height:'25vh'}} className="player2 d-flex justify-content-center align-items-center">Quan</div>
            </div>
            <div style={{width:300,borderLeft:'1px solid ',flexDirection:'column'}} className="chat d-flex ">
                <div style={{borderBottom:'1px solid',textAlign:'center',flexGrow:1}} className="chat_area">123</div>
                <div className="leave px-3 py-3">
                    <div className="btn btn-primary d-block ">Leave room</div>
                </div>
            </div>
        </div>
    )
}

export default Game
