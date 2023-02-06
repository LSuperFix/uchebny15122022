import { useMemo } from "react"

export const useSortedTasks = (tasks, sort) => {
  const sortedTasks = useMemo(() => {
    if(sort) {
      return [...tasks].sort((a,b) => a[sort].localeCompare(b[sort]))
    }
    return tasks
  }, [sort, tasks])

  return sortedTasks
}

export const useSortedAndSearchedTasks = (searchQuery, sort, tasks) => {
  const sortedTasks = useSortedTasks(tasks, sort)
  const sortedAndSearchedTasks = useMemo(() => {
    if(searchQuery.length) {
      return sortedTasks.filter((task) => task.title.includes(searchQuery))
    }
    return sortedTasks
  }, [searchQuery, sortedTasks])

  return sortedAndSearchedTasks
}