const Info = props => {
    return <div className='flex justify-between mb-10'>
        <h1>{props.first}</h1>
        <h1 className='border-b border-green-600'>{props.second}</h1>
    </div>
}

export default Info