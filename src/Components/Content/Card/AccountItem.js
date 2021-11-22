
import { FaEllipsisH } from 'react-icons/fa'
import { IoReceiptSharp } from 'react-icons/io5'
import { RiExchangeLine } from 'react-icons/ri'
import { CgArrowsExchangeAlt } from 'react-icons/cg'

const AccountItem = props => {
    return <>
        <div className='w-full h-10 flex justify-evenly items-center border-b border-gray-300 my-10 pb-5'>
            {props.logo}
            <div className='flex flex-col items-center justify-center' >
                <p>HARILTSAH/IRGED/MNT</p>
                <p>{props.accNumber}</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p>Barilt hiisen/Huleegdej bui dun</p>
                <p>{props.huleegdejDun}</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p>Bolomjit Uldegdel</p>
                <p>{props.uldegdelVal}</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <IoReceiptSharp className='text-red-600' />
                <p>Huulga</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <FaEllipsisH />
                <p>Delgerengui</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <RiExchangeLine className='text-yellow-700 text-xl' />
                <p>Guilgee</p>
            </div>
        </div>
    </>
}

export default AccountItem