import Header from "../Header";
import Sidebar from "../Sidebar";

const Template = props => {
    return <>
        <Header />
        <Sidebar />
        <div style={{ paddingLeft: "300px" }} className="pt-20 pr-12 w-full">
            {props.children}
        </div>
    </>
}

export default Template