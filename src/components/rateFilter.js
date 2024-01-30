import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faStar } from "@fortawesome/free-solid-svg-icons";

const RateFilter = (props) => {
  const onRateHandler = (rating) => {
    let data = props?.restData?.filter(
      (item) => item?.info?.avgRating >= rating
    );
    data = data?.length === 0 ? "No" : data;
    props.filteredData(data);
  };

  return (
    <div className="flex justify-between items-center ">
      <FontAwesomeIcon className="mr-2" icon={faFilter} />
      <div
        className="mx-[5px] my-0 text-[#233142] font-bold text-[16px] py-1 px-2 rounded-md flex items-center border-2 border-[#233142] hover:bg-[#FA0112] hover:text-[white] hover:border-[#FA0112]"
        onClick={() => onRateHandler("4.5")}
      >
        4.5
        <FontAwesomeIcon className="ml-[5px]" icon={faStar} />
      </div>
      <div
        className="mx-[5px] my-0 text-[#233142] font-bold text-[16px] py-1 px-2 rounded-md flex items-center border-2 border-[#233142] hover:bg-[#FA0112] hover:text-[white] hover:border-[#FA0112]"
        onClick={() => onRateHandler("4")}
      >
        4<FontAwesomeIcon className="ml-[5px]" icon={faStar} />
      </div>
      <div
        className="mx-[5px] my-0 text-[#233142] font-bold text-[16px] py-1 px-2 rounded-md flex items-center border-2 border-[#233142] hover:bg-[#FA0112] hover:text-[white] hover:border-[#FA0112]"
        onClick={() => onRateHandler("3")}
      >
        3<FontAwesomeIcon className="ml-[5px]" icon={faStar} />
      </div>
    </div>
  );
};
export default RateFilter;
