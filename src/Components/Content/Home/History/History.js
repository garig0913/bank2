import DropDown from "./DropDown";
import List from "./List";

const History = (props) => {
  return (
    <>
      <div className="w-full h-auto bigCard flex flex-col items-center rounded-xl border">
        <DropDown />
        <List data={props.data} />
      </div>
    </>
  );
};

export default History;
