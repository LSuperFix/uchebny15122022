import { usePagination } from "../../hooks/usePaginatiom"
import MyButton from "./MyButton"

const Pagination = ({setCurentPage, totalPages}) => {

  const pagesList = usePagination(totalPages) 

  return(
    <div className="pagination__conteyner">
        {pagesList.map((p) => (
          <div className ='pagination__button'>
            <MyButton
              key={p}
              onClick = {() => setCurentPage(p)}
            >{p}</MyButton>
          </div>
        ))}
    </div>
  )
}
export default Pagination