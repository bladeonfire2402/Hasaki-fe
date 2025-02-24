import SearchBar_Suggestion from "./SearchBar_Suggestion"
import SearchIcon from '@mui/icons-material/Search';
import './searchbar.css'

const SearchBar = () => {

  return (
    <div className="SearchBar-wrapper w-[450px] ">
        <SearchBar_Suggestion/>
        <div className="SearchBar__Content mt-2 relative">
            <input
             className="px-6 py-2 rounded-full text-poppins w-full text-lexend text-sm" type="text"
             placeholder="Tìm sản phẩm, thương hiệu bạn mong muốn ..."
             />
            <div className="search-icon absolute cusor-pointer">
                <SearchIcon/>
            </div>
        </div>
    </div>
  )
}

export default SearchBar