import React from 'react'
import "./List.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'

const List = () => {
  return (
    <div>
      <Navbar />
      <Header type="list"  />
      <div className="list-container">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  )
}

export default List
