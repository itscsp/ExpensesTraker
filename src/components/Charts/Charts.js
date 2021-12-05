import React from 'react'
import './Charts.css'
import ChartBar from './ChartBar'

const Charts = () => {
    return (
        <div className="chart">

            {props.dataPoint.map((dataPoint) => {
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={null}
                    label={dataPoint.label}
                />
            })}
        </div>
    )
}

export default Charts
