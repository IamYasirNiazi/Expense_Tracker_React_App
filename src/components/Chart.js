import React from 'react'
import './chart.css'

const Chart = (props) => {
    const {dataPoints, maxValue} = props
  return (
    <div className='chart-main'>
        {dataPoints.map((monthName, index)=>{
            return <div key={index} className="chart d-flex align-items-center">
                    <div>
                    <div className='chart-lines'>
                        <span className='chart-blank'></span>                        
                        <span className="chart-fill" style={{height: maxValue>0 && ((monthName.value/maxValue) * 100 + '%')}}>
                        </span>   
                    </div>
                    <div className="chart-content">{monthName.label}</div>
                    </div>
                </div>
        })}
    </div>
  )
}

export default Chart