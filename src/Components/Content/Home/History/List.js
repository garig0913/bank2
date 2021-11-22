import ListItem from "./ListItem";

const List = (props) => {
  return (
    <>
      {props.data.map((data) => (
        <ListItem date={data.date} desc={data.desc} amount={data.amount} partner={data.partner}>
          <p className="text-gray-500">{data.time}</p>
        </ListItem>
      ))}
    </>
  );
};

export default List;
