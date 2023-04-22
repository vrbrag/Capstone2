import React, { useState } from 'react';
import { Button, Row, Col } from 'reactstrap';
import './SearchForm.css'

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
      <div className="container">
         <div className="SearchForm">

            <form className="form-inline" onSubmit={handleSubmit}>

               <input
                  // className="form-control form-control-md flex-grow-1"
                  name="searchTerm"
                  placeholder="Search by cuisine..."
                  value={searchTerm}
                  onChange={handleChange}
               />

               <button
                  // className="btn"
                  color="warning"
                  type="submit" >
                  Search
               </button>

            </form>
         </div>
      </div >
   )
}

export default SearchForm;