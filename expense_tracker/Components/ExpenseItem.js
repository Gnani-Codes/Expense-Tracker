

const ExpenseItem = props => {
    const {data} = props 
    const {item,cost} = data

    return(
        <li className='bg-slate-950 p-2 rounded m-2 flex items-center'>
        <span className='m-4'>{item}</span>
        <div className='ml-10'>
        <span className='m-3 mr-6'>${cost}</span>
        <button className='bg-slate-500 px-2 rounded '>X</button>
        </div>
      </li>
    )
}

export default ExpenseItem