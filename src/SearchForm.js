import React, { useState } from 'react'

function SearchForm({ search }) {
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

   return (
      <div className="SearchForm mb-4">
         <form className="form-inline" onSubmit={handleSubmit}>
            <input
               className="form-control form-control-lg flex-grow-1"
               name="searchTerm"
               placeholder="Search by cuisine..."
               value={searchTerm}
               onChange={handleChange}
            />
            <button className="btn btn-success font-weight-bold mr-3" type="submit" >
               Search
            </button>
         </form>
      </div>
   )
}

export default SearchForm;