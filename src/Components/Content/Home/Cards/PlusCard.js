import { AiOutlinePlus } from "react-icons/ai";

const PlusCard = props => {
    return <div className={`w-24 h-${props.height} rounded-lg flex flex-col justify-center items-center plus`}>
        <AiOutlinePlus className="text-2xl" />
        <p className="text-sm mt-3">
            {props.top}
            <br /> {props.bottom}
        </p>
    </div>
}

export default PlusCard