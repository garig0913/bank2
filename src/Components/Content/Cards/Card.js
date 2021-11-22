const Card = props => {
    return <div className='w-24 h-28 rounded-lg flex flex-col justify-center items-center card'>
        {props.icon}
        <p className='text-sm mt-3'>{props.text}</p>
    </div>
}

export default Card