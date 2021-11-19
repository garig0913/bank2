import { AiFillHome, AiFillCreditCard } from 'react-icons/ai'
import { MdAccountBalance, MdOutlinePriceChange, MdOutlineLocationOn } from 'react-icons/md'
import { FaExchangeAlt, FaHandHoldingUsd, FaEllipsisH, FaPhoneAlt } from 'react-icons/fa'
import { BsFillCalculatorFill, BsNewspaper, BsCoin, BsClipboardData } from 'react-icons/bs'

const Sidebar = props => {
    const homeController = () => {
        window.location.href = '/home'
    }
    return <div style={{ paddingTop: '100px' }} className="w-56 h-screen fixed left-0 top-0 border-gray-100
     border-r flex flex-col my-6 justify-between">
        <div className=''>
            <button onClick={homeController} className='flex w-44 ml-6 border-transparent rounded-lg hover:bg-green-900 mr-4 py-1.5 opacity-95 px-2 hover:opacity-80 hover:text-white text-green-800 text-lg font-medium'><MdAccountBalance className='mt-1 mr-3 text-2xl' /><h1>home</h1></button>
            <button className='flex w-44 mt-8 ml-6 border-transparent rounded-lg hover:bg-green-900 mr-4 py-1.5 opacity-95 px-2 hover:opacity-80 hover:text-white text-green-800 text-lg font-medium'><FaExchangeAlt className='mt-1 mr-3 text-2xl' /><h1>exchange</h1></button>
            <button className='flex w-44 mt-8 ml-6 border-transparent rounded-lg hover:bg-green-900 mr-4 py-1.5 opacity-95 px-2 hover:opacity-80 hover:text-white text-green-800 text-lg font-medium'><AiFillCreditCard className='mt-1 mr-3 text-2xl' /><h1>card</h1></button>
            <button className='flex w-44 mt-8 ml-6 border-transparent rounded-lg hover:bg-green-900 mr-4 py-1.5 opacity-95 px-2 hover:opacity-80 hover:text-white text-green-800 text-lg font-medium'><FaHandHoldingUsd className='mt-1 mr-3 text-2xl' /><h1>loan</h1></button>
            <button className='flex w-44 mt-8 ml-6 border-transparent rounded-lg hover:bg-green-900 mr-4 py-1.5 opacity-95 px-2 hover:opacity-80 hover:text-white text-green-800 text-lg font-medium'><MdOutlinePriceChange className='mt-1 mr-3 text-2xl' /><h1>payment</h1></button>
            <button className='flex w-44 mt-8 ml-6 border-transparent rounded-lg hover:bg-green-900 mr-4 py-1.5 opacity-95 px-2 hover:opacity-80 hover:text-white text-green-800 text-lg font-medium'><FaEllipsisH className='mt-1 mr-3 text-2xl' /><h1>service</h1></button>
        </div>

        <div className='grid grid-cols-2 gap-1 m-5'>
            <button className='flex flex-col my-4 items-center text-green-800 opacity-90' ><MdOutlineLocationOn className='text-2xl' /><p className='text-sm mt-3'>Location</p></button>
            <button className='flex flex-col my-4 items-center text-green-800 opacity-90' ><BsFillCalculatorFill className='text-lg' /><p className='text-sm mt-3'>Calculator</p></button>
            <button className='flex flex-col my-4 items-center text-green-800 opacity-90' ><BsNewspaper className='text-lg' /><p className='text-sm mt-3'>News</p></button>
            <button className='flex flex-col my-4 items-center text-green-800 opacity-90' ><FaPhoneAlt className='text-lg' /><p className='text-sm mt-3'>Contacts</p></button>
            <button className='flex flex-col my-4 items-center text-green-800 opacity-90' ><BsCoin className='text-lg' /><p className='text-sm mt-3'>Rate</p></button>
            <button className='flex flex-col my-4 items-center text-green-800 opacity-90' ><BsClipboardData className='text-lg' /><p className='text-sm mt-3'>Statistics</p></button>
        </div>
    </div >
}

export default Sidebar;