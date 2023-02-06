import { useEffect, useState } from "react";
import postService from "../API/postService";
import TasksList from "../components/TasksList";
import Loader from "../components/UI/Loader";
import MyButton from "../components/UI/MyButton";
import Navbar from "../components/UI/Navbar";
import Pagination from "../components/UI/Pagination";
import { useFetching } from "../hooks/useFetching";
import { useSortedAndSearchedTasks } from "../hooks/useFilters";
import { numberPagesTotal } from "../utils/pageCounter";

function Posts() {
  const [tasks, setTasks] = useState([])
  const [sort, setSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [totalPages, setTotalPages] = useState('')//всего страниц
  const [curentPage, setCurentPage] = useState(1)//текущая страница
  const [limitPosts, setLimitPosts] = useState(10)//постов на странице
  const [xTotalCount, setXTotalCount] = useState('')//всего постов на сервере

  

  //хук обработки ошибок и загрузки лоадера
  const [getFetching, isLoading, loardingError] = useFetching( 
    async () => {
      const posts = await postService.getAll(curentPage, limitPosts) //получаем данные с сервера
      setTasks(posts.data)//сохраняем данные в состоянии
      setXTotalCount(posts.headers.get('x-total-count'))
    }
  )

  //при первой загрузке вызываем функцию обработки ошибоки ошибок и лоадера
  //она загружает данные с сервере
  useEffect(() => { 
    getFetching()
  }, [curentPage])
  
  useEffect(() => { 
    setTotalPages(numberPagesTotal(xTotalCount, limitPosts))
  }, [xTotalCount])

  const deleteTask = (tasksId) => {
    setTasks(tasks.filter((task) => task.id !== tasksId))
  }

  const addNewTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const sortedAndSearchedTasks = useSortedAndSearchedTasks(searchQuery, sort, tasks) 

  return (
    <div>
      <Navbar />
      {isLoading ? <Loader /> : <TasksList 
        tasks = {sortedAndSearchedTasks} 
        deleteTask = {deleteTask} 
        addNewTask = {addNewTask} 
        sort ={sort}
        setSort = {setSort}
        searchQuery = {searchQuery}
        setSearchQuery = {setSearchQuery}
      />}
      
      {loardingError && <div>Произишла ошибка {loardingError}</div>} 

      <Pagination setCurentPage = {setCurentPage} totalPages = {totalPages} />
    </div>
  );
}

export default Posts;
