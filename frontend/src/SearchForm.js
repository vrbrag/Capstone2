import React, { useState } from 'react';
import './SearchForm.css'

function SearchForm({ search, placeholder }) {
   console.log("SearchForm", typeof search)
   const [searchTerm, setSearchTerm] = useState("")

   function handleChange(e) {
      setSearchTerm(e.target.value)
   }
   // name w/o whitespace
   function handleSubmit(e) {
      e.preventDefault()
      search(searchTerm.trim() || undefined)
      setSearchTerm(searchTerm.trim())
   }

   function clearSearch() {
      setSearchTerm("")
   }

   return (
      <div className="container">
         <div className="SearchForm">

            <form className="form-inline" onSubmit={handleSubmit}>

               <input
                  // className="form-control form-control-md flex-grow-1"
                  name="searchTerm"
                  placeholder={placeholder}
                  value={searchTerm}
                  onChange={handleChange}
               />
               <button
                  className="clear"
                  outline color="warning"
                  onClick={clearSearch}>
                  x
               </button>
               <button
                  className="search"
                  outline color="warning"
                  type="submit" >
                  search
               </button>

            </form>
         </div>
      </div >
   )
}

export default SearchForm;