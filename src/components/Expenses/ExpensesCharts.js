import React from 'react'

import Charts from '../Charts/Charts';

const ExpensesCharts = (props) => {
    const chartDatePoints = [
        {label:'jan', value: 0 },
        {label:'Feb', value: 0 },
        {label:'Mar', value: 0 },
        {label:'Apl', value: 0 },
        {label:'May', value: 0 },
        {label:'Jun', value: 0 },
        {label:'Jul', value: 0 },
        {label:'Aug', value: 0 },
        {label:'Sep', value: 0 },
        {label:'Oct', value: 0 },
        {label:'Nav', value: 0 },
        {label:'Dec', value: 0 },
    ];

    for (const expense in props.expenses) {
        const expenseMonth = expense.date.getMonth(); //starting at 0 => Jamuary =>0
        chartDatePoints[expenseMonth].value += expense.amount
    }


    return (
        <Charts data={chartDatePoints} />
    )
}

export default ExpensesCharts
