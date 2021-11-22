import { AiOutlinePlus } from "react-icons/ai";
import AccountItem from "./AccountItem";

const CardSection = () => {
    const data = [{
        accNumber: '506324953',
        huleegdejDun: '256000',
        uldegdelVal: '5100'
    },
    {
        accNumber: '506324953',
        huleegdejDun: '256000',
        uldegdelVal: '5100'
    },
    {
        accNumber: '506324953',
        huleegdejDun: '256000',
        uldegdelVal: '5100'
    }]
    return <>
        <div className='w-4/5 h-4/5 flex flex-col justify-center items-center'>
            <main className='w-full h-full m-10'>
                <p className='font-medium'>Account List</p>
                <h1 className='uppercase font-light my-4'>Deposit Account</h1>
                <div className='w-full h-full shadow-lg rounded-lg py-4 px-6'>
                    {data.map(item => (
                        <AccountItem accNumber={item.accNumber} huleegdejDun={item.huleegdejDun} uldegdelVal={item.uldegdelVal} />
                    ))}
                </div>

            </main>
        </div>
    </>
}

export default CardSection