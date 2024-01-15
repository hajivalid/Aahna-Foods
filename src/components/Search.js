import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
    return(
        <div className="searchInfo">
            <div className='searchInput'>
                <input type="text" placeholder="Search for restaurant, cuisine or a dish"/>
                <FontAwesomeIcon className='searchIcon' icon={faMagnifyingGlass} />
            </div>
        </div>
    )
}
export default Search;