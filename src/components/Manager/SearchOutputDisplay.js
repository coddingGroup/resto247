import FlippingCard from "./FlippingCard";
import '../../css/Manager.css';

const SearchOutputDisplay = ({output}) => {
    let result = output.map(
        oneProduct => {
            return (

                <FlippingCard oneProduct={oneProduct}/>

            )
        })
    return (
        <div className="row searchResult shadow-lg">
            {result}
        </div>
    )
}
export default SearchOutputDisplay;