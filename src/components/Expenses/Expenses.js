import React, {useState} from 'react'
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList"
import ExpensesCharts from './ExpensesCharts'
import './Expenses.css'

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020')


    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    const filterData =props.items.filter( (item) =>  filteredYear == item.date.getFullYear() );

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
      });

    let fiterContent = <h1 class="isdata">No data found</h1>

    if(filterData.length > 0) {
        fiterContent = filterData.map(item => <ExpenseItem key={item.id} title = {item.title} amount={item.amount} date={item.date} /> )
    }


    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>

                <ExpensesCharts expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />

            </Card>

        </div>
    )
}

export default Expenses
