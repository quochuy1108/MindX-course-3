import React from 'react'

const Tables = ({data}) => {
    console.log('data',data);
    return (
            <div className="container rounded bg-warning my-3 p-3">
               <div className="creator pb-3">Creator : {data.creator.name}</div>
               <div className="guess pb-3">Player 2: {data.guess}</div>
               <div className="btn btn-success mb-3">{data.status}</div>
               <div className="audiences mb-3">audiences : {data.audiences.length}</div>
               <button className="btn btn-primary joinAsPlayer me-3">Play</button>
               <button className="btn btn-success joinAsAudiences ">Join as audiences</button>
           </div>
       
    )
}

export default Tables
