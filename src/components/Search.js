import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Search = (props) => {
    const [searchValue, setSearchValue] = useState('');

    const searchOnChangeHandler = (event) =>{
        setSearchValue(event.target.value);
    }
    const onClickHandler = () => {
        alert(searchValue);
        let data = '';
        if(searchValue != ""){
            data = props?.restData?.filter((item) => (item?.info?.name?.toLocaleLowerCase()?.includes(searchValue.toLocaleLowerCase())))
            data = (data.length === 0) ? "No" : data;
        }else {
            data = props?.restData;
        }
        props.filteredData(data);
    }

    return(
        <div className="searchInfo">
            <div className='searchInput'>
                <input type="text" onChange={searchOnChangeHandler} value={searchValue} placeholder="Search for restaurant, cuisine or a dish"/>
                <button className='searchBtn' onClick={onClickHandler}><FontAwesomeIcon className='searchIcon' icon={faMagnifyingGlass} /></button>
            </div>
        </div>
    )
}
export default Search;