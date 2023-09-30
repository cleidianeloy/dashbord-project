import {useState} from 'react';
import Nav from "./Nav";
import Aside from "./Aside";
export default function(){
    const [hidden, setHidden] = useState(true);
    const toggleHidden = () =>{setHidden((prev)=> prev ? false : true)}
    return(
        <div className="sidebar" aria-hidden={hidden}>
            <span class="material-symbols-outlined fill" onClick={toggleHidden}>hexagon</span>
            <Nav hidden={hidden}/>
            <Aside hidden={hidden}/>
        </div>
    )
}