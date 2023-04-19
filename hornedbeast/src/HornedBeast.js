function Hornedbeast(props){
return(
    <div>
        <h2>{props.title}</h2>
        <img  title ={props.title} alt = {props.description} src = {props.image}></img>
        <p>{props.description}</p>
    </div>
);
} 
export default Hornedbeast;