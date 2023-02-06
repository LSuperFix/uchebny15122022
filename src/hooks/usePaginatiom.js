import { useMemo } from "react"

export const usePagination = (totalPages) => {
  const pagesList = useMemo(() => {
    const pagesList = []
    for(let i = 0; i < totalPages; i++) {
      pagesList.push(i+1)
    }
    return pagesList
  }, [totalPages])
  return pagesList
}