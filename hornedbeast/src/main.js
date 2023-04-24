import HornedBeast from './HornedBeast'
import Data from './data.json'

function Main() {
    return (
        <div>
            {/* <HornedBeast title="Goat" description="Goat with long horns" image="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/contented-horned-goat-brenda-lawlor.jpg" /> */}
            {Data.map((i) =>{
              
                //return <id title="" description="" image=""/>;
                return <HornedBeast title={i.title} description={i.description} image={i.image_url} />
            }
            )};

        </div>
    );

}
export default Main;