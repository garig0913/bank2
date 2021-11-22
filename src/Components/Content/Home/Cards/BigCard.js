const BigCard = props => {
    return <div className={`rounded-xl ${props.bg} h-40 ${props.text} flex justify-center items-center mb-11 bigCard mx-3 border`}>
        <div className='h-36 w-full mx-6 rounded-xl flex justify-between'>
            <div className='mt-2'>
                <h1 className='text-md font-bold mb-5'>{props.header}</h1>
                <div className='flex font-light'>
                    <p>{props.middle}</p>
                </div>
                <div className='justify-between'>
                    <p className='font-light'>5065 464 345</p>
                    {props.children}
                </div>
            </div>
        </div>
    </div>
}

export default BigCard