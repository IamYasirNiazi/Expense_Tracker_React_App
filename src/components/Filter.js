import React from 'react'
import './filter.css'

const Filter = (props) => {
    const {selectChange, filterYear} = props
  return (
    <div className="filter d-flex justify-content-between">
        <h5>Filter by Years</h5>
        <select name="year" id="year" value={filterYear} onChange={selectChange} >
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
        </select>
    </div>
  )
}

export default Filter