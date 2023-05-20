import { useEffect, useState } from 'react'

function useLocalStorage(key, firstValue = null) {
   const initalValue = localStorage.getItem(key) || firstValue;

   const [item, setItem] = useState(initalValue);

   useEffect(function setKeyInLocalStorage() {
      console.log("hooks/useLocalStorage", "item=", item)
      if (item === null) {
         localStorage.removeItem(key)
      } else {
         localStorage.setItem(key, item)
      }
   }, [key, item])

   return [item, setItem]
}

export default useLocalStorage;