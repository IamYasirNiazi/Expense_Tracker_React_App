import React from 'react'
import './addExpense.css'

const AddExpense = (props) => {
    const {addBtnFunc, onChange, closeBtnFunc, addDetailFunc, details} = props
  return (
    <div className='add-expense'>
        <button className='add-btn' id='add-btn' onClick={addBtnFunc}>Add New Expense</button>
        <div className='add-detail' id='add-detail'>
        <form onSubmit={addDetailFunc}>
            <div className='title'>
            <h5>Title</h5>
            <input type="text" id='title' name='title' value={details.title} onChange={onChange} required/>
            </div>
            <div className='btns'>
            <div className='amount'>
                <h5>Amount</h5>
                <input type="number" id='amount' name='amount' value={details.amount} onChange={onChange} required/>
            </div>
            <div className='date'>
                <h5>Date</h5>
                <input type="date" name='date' min='2021-01-01' max='2024-12-31' id='date' value={details.date} onChange={onChange} required/>
            </div>
            </div>
            <div>
            <button className='btn' onSubmit={addDetailFunc}>Add Expense</button>
            <button className='btn' onClick={closeBtnFunc} >Close</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default AddExpense