import { useState } from "react"

export const useFetching = (callBack) => {
  const [isLoading, setIsLoading] = useState(false) //флаг что идет загрузка
  const [loardingError, setLoardingError] = useState('') //получаемая ошибка
  const getFetching = async () => {
    try {
      setIsLoading(true) //устанавливаем флаг, что идет загрузка
      await callBack() //вызываем функцию загрузки, ее передаем параметром хуку
      setIsLoading(false) //снимаем флаг, что идет загрузка
    }
    catch(err) {
      setLoardingError(err.message) //если есть ошибка, сохраняем текст в состояние
    }
    finally {
      setIsLoading(false) //в любом случаеснимаем флаг, что идет загрузка
    }
  }
  return [getFetching, isLoading, loardingError]
}