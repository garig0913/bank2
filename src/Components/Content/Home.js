import '../../static/style/Home.css'
import Info from './Info'
import { GiBank } from 'react-icons/gi'
import { BsBank } from 'react-icons/bs'
import { SiDeutschebank } from 'react-icons/si'
import { AiOutlinePlus } from 'react-icons/ai'

const Home = () => {
    return <div className="grid grid-cols-2 gap-10 mt-10">
        <div className='grids flex flex-col'>
            <div className='text-md text-lg font-medium text-green-700'>
                <Info first='Account Information' second='Total' />
                <div className='rounded-xl bg-green-700 h-44 mt-6 text-white flex justify-center items-center mb-11'>
                    <div className='h-36 w-full mx-6 rounded-xl flex justify-between'>
                        <div className='mt-3'>
                            <h1 className='text-md font-bold mb-5'>Main Account</h1>
                            <div className='flex font-light'>
                                <p>HARILTSAH/</p>
                                <p>IRGED/</p>
                                <p>MNT</p>
                            </div>
                            <div className='justify-between'>
                                <p className='font-light'>5065 464 345</p>
                                <h1 className=''>1.00 MNT</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <Info first='Card Information' second='Total' />
                <div className='ad rounded-xl h-72 mt-6 text-gray-100 flex justify-center items-center mb-11'>
                    <div className='w-full h-full grad flex flex-col justify-between'>
                        <h1 className='text-2xl m-8'>AZ JARGAL, DURSAMJ<br /> DUUREN AMDARTSGAAYA</h1>
                        <div className='w-1/2'>
                            <p className='text-sm text-gray-300 m-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        </div>
                    </div>
                </div>
                <Info first='Saved schema' second='Total' />
                <div className='rounded-xl mt-6 flex justify-evenly items-center mb-11 text-4xl'>
                    <div className='w-24 h-24 rounded-lg flex flex-col justify-center items-center plus'>
                        <AiOutlinePlus className='text-2xl' />
                        <p className='text-sm mt-1'>Zagvar<br /> nemeh</p>
                    </div>

                    <div className='w-24 h-24 rounded-lg flex flex-col justify-center items-center card'>
                        <BsBank id='logo' className='p-2 rounded-lg' />
                        <p className='text-sm mt-3'>Golomt</p>
                    </div>
                    <div className='w-24 h-24 rounded-lg flex flex-col justify-center items-center card'>
                        <GiBank id='logo' className='p-2 rounded-lg' />
                        <p className='text-sm mt-3'>VA</p>
                    </div>
                    <div className='w-24 h-24 rounded-lg flex flex-col justify-center items-center card'>
                        <SiDeutschebank id='logo' className='p-2 rounded-lg' />
                        <p className='text-sm mt-3'>Khan Bank</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='grids flex flex-col bg-gray-200'></div>
    </div>
}

export default Home