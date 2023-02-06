export const numberPagesTotal = (totalCount, limit) => {
  return Math.ceil(totalCount/limit)
}