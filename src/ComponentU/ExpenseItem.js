import React from 'react'

function ExpenseItem(props) {
  return (
    <div className='Expense-Item'>
        <div>21 jan 2023</div>
        <div className='Expennse-Item-List'>
            <h1>{props.title}</h1>
            <div> {props.Amount}</div>
        </div>
      
    </div>
  )
}

export default ExpenseItem
