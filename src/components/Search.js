import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const searchOnChangeHandler = (event) => {
    setSearchValue(event.target.value);
  };
  const onClickHandler = () => {
    alert(searchValue);
    let data = "";
    if (searchValue != "") {
      data = props?.restData?.filter((item) =>
        item?.info?.name
          ?.toLocaleLowerCase()
          ?.includes(searchValue.toLocaleLowerCase())
      );
      data = data.length === 0 ? "No" : data;
    } else {
      data = props?.restData;
    }
    props.filteredData(data);
  };

  return (
    <div className="text-center">
      <div className="relative mx-auto my-0">
        <input
          className=" text-[#233142] w-[450px] text-[16px] p-[10px] border border-gray-600 rounded-md shadow-md focus-visible:outline-[#333] "
          type="text"
          onChange={searchOnChangeHandler}
          value={searchValue}
          placeholder="Search for restaurant, cuisine or a dish"
        />
        <button
          className="text-center cursor-pointer bg-none p-3 text-[16px] text-[#233142] border-none absolute right-[1px] top-[1px] hover:text-[#FA0112]"
          onClick={onClickHandler}
        >
          <FontAwesomeIcon
            className="text-[20px] transition-colors duration-300"
            icon={faMagnifyingGlass}
          />
        </button>
      </div>
    </div>
  );
};
export default Search;
