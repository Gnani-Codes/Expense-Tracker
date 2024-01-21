import React, {useEffect, useState} from 'react'
import { Inter } from "next/font/google";
import ExpenseItem from '@/Components/ExpenseItem';
import { collection, addDoc , getDocs, doc, deleteDoc} from "firebase/firestore";
//import the database here.
import { db } from '@/config/firebase';


export default function Home() {
  const [expenseData, setExpenseData] = useState([])
  const [newItem, setNewItem] = useState({name:'', price:''})
  const [total, setTotal] = useState(0)

  //Todo 
  //Create, Read, Delete items from db.

  const addItem = async(event) => {
    event.preventDefault()

    const docRef = await addDoc(collection(db, "items"), {
      ...newItem
    });
    console.log(docRef.id,"new item id")

    setNewItem({name:'', price:''})
    
  } //Create data 

  useEffect(() => {

    const getExpenseDataFromDb = async() => {
      const expenseDbData = await getDocs(collection(db, "items")); //gets db data in docs form.
      const dbData = expenseDbData.docs.map(doc => ({id:doc.id, ...doc.data() })) //converts db data from docs into an obj form.
      setExpenseData(dbData)
    }
    getExpenseDataFromDb()
    calcTotalExpense()
      
  },[expenseData])  //API caaling for fetching data from db.

  const calcTotalExpense  = () => {
    const totalExpense = expenseData.reduce((sum,items) => sum + parseFloat(items.price), 0)
    setTotal(totalExpense)
  }

  const onClickDelete = async(id) => {
    await deleteDoc(doc(db, "items", id))
  }
  

  return (
    <div className="h-screen  text-center flex flex-col justify-center items-center">
      <h1 className="text-4xl">Expense Tracker</h1>
      <div className="bg-slate-800 p-4 rounded-lg p-4 m-4">
        <form onSubmit={addItem} className="flex grid grid-cols-3  gap-4  justify-between w-full ">
          <input value={newItem.name} onChange={(e)=> setNewItem({...newItem, name: e.target.value})} type="text" className="rounded p-1 pl-3 border text-black" placeholder="Enter Item" />
          <input value={newItem.price} onChange={(e)=> setNewItem({...newItem, price: e.target.value})} type="text" className="rounded p-1 pl-3 border text-black" placeholder="Enter Expense" />
          <button type="submit" className="bg-blue-900 w-[100px] rounded-lg ml-auto mr-auto">+</button>
        </form>
      </div> 

      <ul className='bg-slate-800 p-1 rounded-lg p-4 m-2 w-[250px]'>
        {expenseData.map((obj) => (
          <ExpenseItem data={obj} key={obj.id} deleteFunction = {onClickDelete} />
         ))
          }
      </ul>

    {expenseData.length > 1 &&
      <div className='bg-slate-800 p-2 w-[300px] rounded-lg p-4 m-2'>
        <div className='bg-slate-950 p-1 rounded-xl flex items-center justify-around'>
        <p className=''>Total expense is:</p>
        <span className='bg-blue-900 rounded p-2'>{total}</span>
        </div>
      </div>
    }
    </div>
  );
}
