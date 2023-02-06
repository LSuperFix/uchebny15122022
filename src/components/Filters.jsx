import MyInput from "./UI/MyInput"
import MySelect from "./UI/MySelect"

const Filters = ({setSort, searchQuery, onChange}) => {
  const optionsList = [
    {id: 1, value: 'title', name: 'по названию'},
    {id: 2, value: 'body', name: 'по заданию'},
  ]

  const setSortMetod = (sort) => {
    setSort(sort)
  }

  return(
    <div>
      <MySelect 
        defaultOption = 'сортировать по' 
        optionsList ={optionsList} 
        setSortMetod = {sort => setSortMetod(sort)}
      />
      <MyInput 
        placeholder = 'поиск' 
        value = {searchQuery}
        onChange = {e => onChange(e.target.value)}
      />
    </div>
  )
}

export default Filters