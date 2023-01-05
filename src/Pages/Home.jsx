import React, { useState } from 'react'
import { Container, Row, Col} from 'reactstrap'
import '../styles/Home.css'
import { useDispatch, useSelector } from 'react-redux'
import addRecord from '../Redux_Store/Action_Creators/Action_Creator'
import AddExpense from '../components/AddExpense'
import Filter from '../components/Filter'
import Chart from '../components/Chart'
import ExpenseItems from '../components/ExpenseItems'



const Home = () => {

  
  // Saving the input fields in the state
  const [details, setDetails] = useState({
    title: '', amount: '', date: ''
  })
  
  const recordRedux = useSelector(state=> state.expenseReducer)
  const dispatch = useDispatch()

  let record = []
  if(localStorage.getItem("record")==null){
    localStorage.setItem("record", JSON.stringify(recordRedux))
    const prevData = localStorage.getItem("record")
    record = JSON.parse(prevData)
    // console.log(record)
  }else{
    const prevData = localStorage.getItem("record")
    record = JSON.parse(prevData)
    // console.log(record)
  }


  const addDetailsToLocal = (details)=>{
    let oldData = []
    oldData = JSON.parse(localStorage.getItem("record"))
    // console.log(oldData)
    oldData.unshift(details)
    // console.log(oldData)
    localStorage.setItem("record", JSON.stringify(oldData))
  }


  // Add Expense Btn will disappear and Add Details Div will Show.
  const addBtnFunc = ()=>{
    document.getElementById("add-btn").style.display = 'none'
    document.getElementById("add-detail").style.display = 'flex'
  }  

  // Add Details Div will hide and simple Add Expense btn will Show.
  const closeBtnFunc = (event)=>{
    event.preventDefault();
    document.getElementById("add-detail").style.display = 'none'
    document.getElementById("add-btn").style.display = 'flex'
  }
  
  // Whenever we write something in the text field. it automatically saves into the state.
  const onChange = (event)=>{
    setDetails({...details, [event.target.name]:event.target.value})
  }

  // It will add all the details in the main store and then clears the input fields.
  const addDetailFunc = (event)=>{
    event.preventDefault();
    dispatch(addRecord(details))
    addDetailsToLocal(details)
    setDetails({title: '', amount: '' , date: ''})
  }

  // Selecting the Year from the Filter Option and then search for the data of the year
  //--------------------------------------

  const [filterYear, setFilterYear] = useState('2023')

  const selectChange = (event)=>{
    setFilterYear(event.target.value)
  }


  const filteredData = record.filter((data)=>{
    var [year, month] = data.date.split('-')
    return filterYear === year;
  })
  // console.log(filteredData)

  const dataPoints = [
    {label: "Jan", value: 0},
    {label: "Feb", value: 0},
    {label: "Mar", value: 0},
    {label: "Apr", value: 0},
    {label: "May", value: 0},
    {label: "Jun", value: 0},
    {label: "Jul", value: 0},
    {label: "Aug", value: 0},
    {label: "Sep", value: 0},
    {label: "Oct", value: 0},
    {label: "Nov", value: 0},
    {label: "Dec", value: 0}
  ]


  const filteredMonth = filteredData.filter((data)=>{
      const monthExpen = new Date(data.date).getMonth()
      dataPoints[monthExpen].value += parseInt(data.amount)
      return dataPoints
    })

  // console.log(dataPoints)

  const dataPointsValue = dataPoints.map((data)=>{return data.value})
  const maxValue = Math.max(...dataPointsValue)
  // console.log(dataPointsValue)
  // console.log(maxValue)







  //------------------------------------


  return (
    <>
        <section className="home-section">
          <Container>
            <Row className='d-flex justify-content-center'>
              <Col md='9' className='d-flex flex-column align-content-center'>
                <div className="home-wrapper">
                  <div className='d-flex justify-content-center flex-column align-items-center'>
                    <h1 className='mb-3'>Expense Tracker React App</h1>
                    <AddExpense details={details} addDetailFunc={addDetailFunc} addBtnFunc={addBtnFunc} closeBtnFunc={closeBtnFunc} onChange={onChange}  />
                  </div>
                  <div className='content'>
                    <Filter selectChange={selectChange} filterYear={filterYear} />
                    <Chart dataPoints={dataPoints} maxValue={maxValue} />
                    <ExpenseItems filteredData={filteredData} maxValue={maxValue} />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
    </>
  )
}

export default Home