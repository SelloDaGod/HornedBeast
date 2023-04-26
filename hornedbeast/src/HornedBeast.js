import { useState } from "react";
import Selectedbeast from "./SelectedBeast";


function Hornedbeast(props) {
    const [Clickcount, setClickcount] = useState(0);
    let hornClickcount = () => {
        setClickcount(Clickcount + 1)
    }
    return (
        <div >
            <h2>{props.title}</h2>
            <img onClick={function(){
                props.setdisplaySelectedBeast(true);
                 props.Selectedbeast(props.clickedbeast)
            }} height={200} title={props.title} alt={props.description} src={props.image}></img>
            <p>{props.description}</p>
            {Clickcount} <button onClick={hornClickcount} class="bi bi-bookmark-heart-fill"></button>
            
        </div>
    );
}
export default Hornedbeast;
