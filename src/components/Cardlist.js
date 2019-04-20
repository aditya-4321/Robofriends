import React from 'react'
import Card from './Card'

const Cardlist = ({robots}) =>{
    
    const cardArray=robots.map((user,i)=>{
        return(
         <Card  id={robots[i].id} key={i} name={robots[i].name} email={robots[i].email} />
        )
    })
    return(
        <div>
        {cardArray}
        </div> 
    )
  
}

export default Cardlist;