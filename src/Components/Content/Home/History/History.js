import List from "./List";

const History = (props) => {
  return (
    <>
      <div className="w-full h-auto bigCard flex flex-col items-center rounded-xl border">
        <select className='p-2 w-4/5 rounded-md shadow-sm m-4 focus:outline-none border' id='dans'>
          <option value='1'>506435323 - HARILTSAH/IRGED/MNT</option>
          <option value='2'>506435323 - HARILTSAH/IRGED/MNT</option>
          <option value='3'>506435323 - HARILTSAH/IRGED/MNT</option>
        </select>
        <List data={props.data} />
      </div>
    </>
  );
};

export default History;
