import React, {useState} from 'react'
import { Inter } from "next/font/google";
import ExpenseItem from '@/Components/ExpenseItem';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [expenseData, setExpenseData] = useState([
    {item: 'Coffee', cost: '3'},
    {item: 'Coffee', cost: '3'},
    {item: 'Coffee', cost: '3'},
  ])

  const [total, setTotal] = useState(0)

  return (
    <div className="h-screen  text-center flex flex-col justify-center items-center">
      <h1 className="text-4xl">Expense Tracker</h1>
      <div className="bg-slate-800 p-4 rounded-lg p-4 m-4">
        <form className="flex grid grid-cols-3  gap-4  justify-between w-full ">
          <input type="text" className="rounded p-1 pl-3 border text-black" placeholder="Enter Item" />
          <input type="text" className="rounded p-1 pl-3 border text-black" placeholder="Enter Expense" />
          <button type="submit" className="bg-blue-900 w-[100px] rounded-lg ml-auto mr-auto">+</button>
        </form>
      </div> 

      <ul className='bg-slate-800 p-1 rounded-lg p-4 m-2'>
        {expenseData.map((obj,id) => (
          <ExpenseItem data={obj} key={id}/>
         ))
          }
      </ul>

    {expenseData.length > 1 &&
      <div className='bg-slate-800 p-2 w-[300px] rounded-lg p-4 m-2'>
        <div className='bg-slate-900 p-1 rounded-xl flex items-center justify-around'>
        <p className=''>Total expense is:</p>
        <span className='bg-slate-90'>${total}</span>
        </div>
      </div>
    }
    </div>
  );
}
