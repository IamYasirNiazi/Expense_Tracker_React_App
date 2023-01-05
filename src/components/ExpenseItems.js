import React from 'react'
import './expenseItems.css'

const ExpenseItems = (props) => {
    const {filteredData, maxValue} = props
    
  return (
    
        <div className='main-details'>
          {maxValue===0 && <h2 className='text-center text-white'>No Data Found</h2>}
          {filteredData.map((data, index)=>{
            return <div key={index} className="details d-flex justify-content-between align-items-center">
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <span>{new Date(data.date).toLocaleString('default', { month: 'short' })}</span>
                <span>{new Date(data.date).getFullYear()}</span>
                <span>{new Date(data.date).getDate().toString().padStart(2, "0")}</span>
              </div>
              <div>{data.title}</div>
              <div>$ {data.amount}</div>
            </div>
          })}
        </div>
  )
}

export default ExpenseItems