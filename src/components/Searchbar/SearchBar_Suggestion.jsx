
const SearchBar_Suggestion = () => {
    const suggesItemList = ["Kem chống nắng", "Tẩy trang", "Tonner", "Sửa rửa mặt", "Tẩy tế bào"]

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
