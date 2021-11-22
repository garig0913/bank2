import DropDown from "./DropDown"

const History = props => {
    return <>
        <div className='w-full h-auto bigCard flex flex-col items-center'>
            <DropDown />
            {props.data.map(data => (
                <div className='border-b border-gray-400 p'><p>{data.desc}</p></div>
            ))}
        </div>
    </>
}

export default History