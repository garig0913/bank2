import '../../../static/style/Home.css'
import Info from './Info'
import Card from './Cards/Card'
import History from './History/History'
import BigCard from "./Cards/BigCard";
import PlusCard from "./Cards/PlusCard";
import { GiBank } from "react-icons/gi";
import { BsBank } from "react-icons/bs";
import { SiDeutschebank } from "react-icons/si";

const Home = () => {
    let d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();

    const data = [
        {
            date: "2021.10.31",
            time: hour + ":" + min,
            desc: "Dans hotolsnii huraamj",
            amount: 3223.0 + "₮",
            partner: 50625434,
        },
        {
            date: "2021.10.31",
            time: hour + ":" + min,
            desc: "Dans hotolsnii huraamj",
            amount: +1360.02 + "₮",
            partner: 50625434,
        },
        {
            date: "2021.10.31",
            time: hour + ":" + min,
            desc: "Dans hotolsnii huraamj",
            amount: -2500.09 + "₮",
        },
    ];
    return (
        <div className="grid grid-cols-2 gap-10 mt-10">
            {/* grid1 */}
            <div className="grids flex flex-col ">
                <div>
                    <Info first="Account Information" second="Total" />
                    <BigCard
                        header="Main Account"
                        middle="HARILTSAH/IRGED/MNT"
                        bg="bg-green-800"
                        text="text-white"
                    >
                        <h1 className="">1.00 MNT</h1>
                    </BigCard>
                    <Info first="Card Information" second="Total" />
                    <div className="ad rounded-xl h-72 mt-6 text-gray-100 flex justify-center items-center mb-11">
                        <div className="w-full h-full grad flex flex-col justify-between">
                            <h1 className="text-2xl m-8">
                                AZ JARGAL, DURSAMJ
                                <br /> DUUREN AMDARTSGAAYA
                            </h1>
                            <div className="w-1/2">
                                <p className="text-sm text-gray-300 m-8">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam
                                </p>
                            </div>
                        </div>
                    </div>
                    <Info first="Saved schema" second="Total" />
                    <div className="rounded-xl mt-6 flex justify-evenly items-center mb-11 text-5xl">
                        <PlusCard top="Zagvar" bottom="Nemeh" height="28" />
                        <Card text="Golomt" icon={<BsBank id="logo" className="p-2 rounded-lg" />} />
                        <Card text="Khan Bank" icon={<GiBank id="logo" className="p-2 rounded-lg" />} />
                        <Card text="VA" icon={<SiDeutschebank id="logo" className="p-2 rounded-lg" />} />
                    </div>
                </div>
            </div>

            {/* grid2 */}
            <div className="grids flex flex-col ">
                <Info first="Payment Information" second="Total" />
                <div className="flex">
                    <PlusCard top="Zarlaga" bottom="Nemeh" height="40" />
                    <BigCard
                        header="Expenses"
                        bg="bg-white"
                        middle="Pay living expenses such as Electricity,Phone,Cable,etc with ease"
                        text="text-black"
                    />
                </div>

                <Info first="Last Transaction" second="Total" />
                <History data={data} />
            </div>
        </div>
    );
};

export default Home;
