const MySelect = ({optionsList, defaultOption, setSortMetod, sort}) => {
  
  return(
    <div>
      <select 
        onChange = {e => setSortMetod(e.target.value)}
        value = {sort}
      >
        <option value="" disabled>{defaultOption}</option>
        {optionsList.map((option) => 
          <option key = {option.id} value = {option.value}>{option.name}</option>
        )}
      </select>

    </div>
  )
}

export default MySelect