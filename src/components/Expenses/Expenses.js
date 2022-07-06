
import Card from '../UI/Card/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import { useState } from 'react';
import ExpensesChart from './ExpensesChart';
import './Expenses.css'


function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangedHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filterdExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          showYearhandler={filterChangedHandler}
        />
        <ExpensesChart expenses={filterdExpenses} />
        <ExpensesList items={filterdExpenses} />
      </Card>
    </div>
  );
}


export default Expenses;