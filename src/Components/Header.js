import logo from '../static/images/Bank-Transparent.png'
import '../static/style/header.css'
import { BsEye, BsBell, BsPower } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import Timer from './Timer'

const Header = props => {
    const { fullname } = props;
    return <header className="w-full bg-white px-30 z-30 py-5 fixed top-0 left-0 flex justify-between shadow-sm items-center">
        <div className="pl-4 flex items-center gap-3">
            <img className="w-8 ml-3" src={logo} alt='' />
            <h1 className="font-bold uppercase text-xl">
                Khan Bank
            </h1>
        </div>

        <div className='pr-4 flex items-center gap-10'>
            <div className='flex mt-0.5'>
                <h1 className='mx-1.5 text-gray-600'>Disconnect in:</h1><Timer initialMinute='15' />
            </div>

            <button className='border rounded-full header-icon shadow-inner p-2 text-xl border-transparent text-blue-900 hover:bg-gray-400 hover:text-white'>
                <BsEye />
            </button>
            <button className='border rounded-full header-icon p-2 text-xl border-transparent text-blue-900 hover:bg-gray-400 hover:text-white'>
                <BsBell />
            </button>
            <button className='border rounded-full header-icon p-2 text-xl border-transparent text-blue-900 hover:bg-gray-400 hover:text-white'>
                <AiOutlineUser />
            </button>
            <h1>garig</h1>
            <button className='border rounded-full header-icon p-2 text-xl border-transparent text-blue-900 hover:bg-gray-400 hover:text-white mr-10'>
                <BsPower />
            </button>

        </div>
    </header>
}

export default Header;