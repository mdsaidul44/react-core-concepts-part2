import { useState } from "react"

export default function Team(){
    const [team,setTeam] = useState(11)

    const handleAdd=()=>{
        const newTeam = team+1;
        setTeam(newTeam)
    }
    // const handleRemove = () => {
    //     const newTeam = team - 1;
    //     setTeam(newTeam)
    // }
    const handleRemove = () =>{
        setTeam(team-1)
    }
    const teamStyles = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '5px'
    }

    return(
        <div style={teamStyles}>
            <h2>players :{team} </h2>
            <button onClick={handleAdd}>add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}