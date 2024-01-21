

const ExpenseItem = props => {
    const {data} = props 
    const {name,price, id} = data

    return(
        <li className='bg-slate-950 p-2 rounded m-2 flex  justify-around items-center'>
        <span className=''>{name}</span>

        <div className='ml-10 flex items-center'>
        <p className='m-3 mr-6'>${price}</p>
        <div className="">
        <button className='bg-blue-900 p-1 rounded m-2' onClick={() => props.deleteFunction(id)}>X</button>
        </div>
        </div>
        
      </li>
    )
}

export default ExpenseItem