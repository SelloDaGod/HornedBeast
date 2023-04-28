import { useState } from 'react';
import HornedBeast from './HornedBeast'
import Form from 'react-bootstrap/Form';


function Main(props) {
let All = [1,2,3,100]
    const [filteredhorns, setFilteredhorns] = useState(All)
    let FilteredbeastData = []
    if (filteredhorns != All){


        FilteredbeastData = props.beastdata.filter(function (beast) {
           if (beast.horns == filteredhorns) {
               return true
           }
           else { 
               return false
           }
       })

    } else {FilteredbeastData = props.beastdata}


    return (
        <div>
            <Form.Select onChange={function (event) {
                console.log(event.target.value)
                setFilteredhorns(event.target.value)
            }} aria-label="Default select example">
                <option value={All}>Choose number of horns for your beast</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="100">One Hundred</option>
            </Form.Select>
            {FilteredbeastData.map((i) => {

                return <HornedBeast Horns={i.horns} setdisplaySelectedBeast={props.setdisplaySelectedBeast} title={i.title} description={i.description} image={i.image_url} Selectedbeast={props.Selectedbeast} clickedbeast={i} />
            }
            )};
        </div>
    );

}
export default Main;