import { useState } from "react";


function Hornedbeast(props){
const [Clickcount,setClickcount] = useState(0);
let hornClickcount = () => {
    setClickcount(Clickcount + 1)
}
return(
    <div>
        <h2>{props.title}</h2>
        <img onClick={hornClickcount} height={200} title ={props.title} alt = {props.description} src = {props.image}></img>
    
        <p>{props.description}</p> 
        {Clickcount} <i class="bi bi-bookmark-heart-fill"></i>
    </div>
);
} 
export default Hornedbeast;