import {SquareCheck, Square, Trash, Edit} from 'tabler-icons-react';


const TaskList = ({items , removeItem, editItem , checkItem}) => {
    return (
        <div>
            {items.map((item)=>{
                const {id , title ,time , status} = item;
                return(
                    <article 
                    
                    className = {
                        status ? 
                        'flex flex-row justify-between items-center w-full my-2 py-2 border rounded shadow-md bg-gray-100 opacity-70'
                        :'flex flex-row justify-between items-center w-full my-2 py-2 border rounded shadow-md bg-white'}
                    
                    key={id}>
                        <div 
                        className='flex flex-row flex-nowrap items-center w-full'
                        
                        >
                            <button
                            className='m-1'
                            type="button"
                            onClick={()=>checkItem(id)}
                            >
                                { status? <SquareCheck className='stroke-1'/> : <Square className='stroke-1' />}
                            </button>
                            <div className='flex flex-row flex-nowrap justify-between items-center w-full'>
                                <div className={status? 'font-light' : 'font-medium'}>{title}</div>
                                <div className='text-xs text-gray-500 px-2'>{time}</div>
                            </div>
                        </div>
                        <div className='flex flex-row items-center'>
                            <button
                            className=''
                            type="button"
                            onClick={()=>editItem(id)}
                            disabled={status? true : false}
                            >
                                <Edit className={status? 'stroke-1 text-gray-600 m-1' :'stroke-1 text-emerald-600 m-1'} />
                            </button>
                            <button
                            type="button"
                            onClick={()=>removeItem(id)}
                            >
                                <Trash className={status? 'stroke-1 text-gray-600 m-1' :'stroke-1 text-red-600 m-1'} />
                            </button>
                        </div>
                    </article>
                )
            })}
        </div>
      );
};

export default TaskList;