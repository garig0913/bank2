import '../../../static/style/transaction.css'
import { BsFacebook } from 'react-icons/bs'
import { ImBook } from 'react-icons/im'
import { GrNotes } from 'react-icons/gr'
import { FaExchangeAlt } from 'react-icons/fa'
import { CgAsterisk } from 'react-icons/cg'


const Exchange = () => {
    return <>
        <div className='grid grid-cols-2 gap-10 my-2'>
            {/* grid1 */}
            <div className='grids flex flex-col'>
                <div className='w-full h-12 rounded-md text-green-800 bg-white shadow-lg my-2 flex items-center'><FaExchangeAlt className='text-2xl mx-2' /><h1 className='mx-3'>Ehlel</h1></div>
                <div className='w-full h-12 rounded-md text-green-800 bg-white shadow-lg my-2 flex items-center'><ImBook className='text-2xl mx-2' /><h1 className='mx-3'>Zagvaruud</h1></div>
                <div className='w-full h-12 rounded-md text-green-800 bg-white shadow-lg my-2 flex items-center'><BsFacebook className='text-2xl mx-2' /><h1 className='mx-3'>Facebook</h1></div>
                <div className='w-full h-12 rounded-md text-green-800 bg-white shadow-lg my-2 flex items-center'><GrNotes className='text-2xl mx-2' /><h1 className='mx-3'>Nehemjlel</h1></div>
            </div>

            {/* grid2 */}
            <div className='grids shadow-xl rounded-lg'>
                <div className='w-full h-28 bg-green-800 rounded-t-lg flex justify-center items-center'>
                    <div className='flex flex-col w-3/4'>
                        <label htmlFor='select' className='text-white'>Guilgeenii torol</label>
                        <select id='select' className='w-full h-10 rounded-lg px-2 py-1'>
                            <option value='khan'>XAAN BANKNII DANS RUU</option>
                            <option value='golomt'>GOLOMT BANKII DANS RUU</option>
                            <option value='TDB'>TDB BANKII DANS RUU</option>
                        </select>
                    </div>
                </div>

                <div className='flex flex-col justify-evenly items-center w-full h-full '>
                    <div className='w-4/5 mt-3 mb-6'>
                        <label className='flex items-center mx-1 my-2'><CgAsterisk className='text-red-600' />shiljuuleh dansaa songoh</label>
                        <select className='w-full py-21 focus:outline-none rounded-md border p-2 border-gray-400'>
                            <option>HARILTSAH</option>
                            <option>IRGED</option>
                            <option>TSALIN</option>
                            <option>MNT</option>
                        </select>
                    </div>
                    <div className='w-4/5'>
                        <label htmlFor='account' className='flex items-center mx-1 my-2'><CgAsterisk className='text-red-600' />Recipient bank account</label>
                        <input id='account' className='rounded-md focus:outline-none mb-10 border-b border-gray-400 w-full py-2' />
                    </div>
                    <div className='w-4/5'>
                        <label htmlFor='name' className='flex items-center mx-1 my-2'><CgAsterisk className='text-red-600' />Recipient Name</label>
                        <input id='name' className='rounded-md focus:outline-none mb-10 border-b border-gray-400 w-full py-2' />
                    </div>
                    <div className='w-4/5'>
                        <label htmlFor='amount' className='flex items-center mx-1 my-2'><CgAsterisk className='text-red-600' />Transaction Amount</label>
                        <input id='amount' className='rounded-md focus:outline-none mb-10 border-b border-gray-400 w-full py-2' />
                    </div>
                    <div className='w-4/5'>
                        <label htmlFor='desc' className='flex items-center mx-1 my-2'><CgAsterisk className='text-red-600' />Transaction Description</label>
                        <input id='desc' className='rounded-md focus:outline-none mb-10 border-b border-gray-400 w-full py-2' />
                    </div>
                    <div className='mb-5'>
                        <button className='p-2 px-10 rounded-md m-2 bg-white border shadow-lg'>Shinechleh</button>
                        <button className='p-2 px-10 rounded-md m-2 bg-green-800 text-white border shadow-lg'>Guilgee hiih </button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Exchange

// 1 dans option
// 2 recipient dans
// 3 recipient name
// 4 transaction amount
// 6 transaction desc
