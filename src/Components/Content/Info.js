const Info = props => {
    return <div className='flex justify-between mb-12 text-md font-medium text-green-700'>
        <h1>{props.first}</h1>
        <h1 className='border-b-2 border-green-600'>{props.second}</h1>
    </div>
}

export default Info