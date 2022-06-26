import Expenses from "./components/Expenses/Expenses";

import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "A-One Special Burger",
      amount: 290,
      date: new Date(2022, 7, 14),
    },
    {
      id: "e2",
      title: "Mixed Pizza",
      amount: 490,
      date: new Date(2021, 3, 12),
    },
    {
      id: "e3",
      title: "Fried C Momo",
      amount: 230,
      date: new Date(2019, 2, 28),
    },
    {
      id: "e4",
      title: "Chicken Sizzler",
      amount: 510,
      date: new Date(2020, 5, 12),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("in app.js");
    console.log(expense);
  };

  return (
    <div className="App">
      <h1>Restaurant Menu</h1>
      <p>These are the items in our menu with their respective price.</p>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
