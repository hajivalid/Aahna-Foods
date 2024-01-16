
const CardShimmerUI = () =>{
    let cardCount = 8;
    return(
        <div className="shimmerContainer">
            <div className="filterCards">
                <div></div> <div></div> <div></div>
            </div>
            <div className="allCards">
                {[...Array(cardCount)].map((_, index) => (
                    <div className="cardsContainer" key={index}>
                        <div className="imageCard"></div>
                        <div className="text"></div> 
                        <div className="text"></div> 
                        <div className="text"></div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default CardShimmerUI;