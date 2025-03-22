
const SearchBar_Suggestion = () => {
    const suggesItemList = ["Quần Denim", "Áo khoác ", "Hoodie", "Quần tây", "Váy ngắn"]

  return (
    <div className="flex  text-sm text-white text-lexend justify-between">
        {suggesItemList.map((suggesItem)=>{
            return(
                <div key={suggesItem}>{suggesItem}</div>
            )
        })}
        
    </div>
  )
}

export default SearchBar_Suggestion
