import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faStar } from "@fortawesome/free-solid-svg-icons";

const RateFilter = (props) =>{
    console.log(props);
    const onRateHandler = (rating) =>{
        let data = props?.restData.filter((item) => item?.info?.avgRating >= rating)
        console.log(data);
        props.filteredData(data);
    }

    return (
      <div className="rateByFilter">
        <FontAwesomeIcon icon={faFilter} />
        <div className="rating" onClick={() => onRateHandler("4.5")}>4.5<FontAwesomeIcon icon={faStar} /></div>
        <div className="rating" onClick={() => onRateHandler("4")}>4<FontAwesomeIcon icon={faStar} /></div>
        <div className="rating" onClick={() => onRateHandler("3")}>3<FontAwesomeIcon icon={faStar} /></div>
      </div>
    );
}
export default RateFilter;