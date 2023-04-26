import HornedBeast from './HornedBeast'


function Main(props) {
    return (
        <div>
            {/* <HornedBeast title="Goat" description="Goat with long horns" image="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/contented-horned-goat-brenda-lawlor.jpg" /> */}
            {props.beastdata.map((i) => {
                
                console.log(i.title)
                //return <id title="" description="" image=""/>;
                return <HornedBeast setdisplaySelectedBeast={props.setdisplaySelectedBeast} title={i.title} description={i.description} image={i.image_url}  Selectedbeast={props.Selectedbeast} clickedbeast={i}/> 
            }
            )};
        </div>
    );

}
export default Main;