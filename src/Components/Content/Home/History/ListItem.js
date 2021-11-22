const ListItem = (props) => {
  return (
    <>
      <div className="w-10/12 flex flex-col border-b border-gray-400">
        <h1 className="text-blue-800 font-semibold my-3">{props.date}</h1>
        {props.children}
        <div className="w-full flex justify-between my-3">
          <h1 className="text-lg">{props.desc}</h1>
          {props.amount < 0 ? (
            <h1 className="text-red-700 font-medium">{props.amount}</h1>
          ) : (
            <h1 className="text-green-700 font-medium">{props.amount}</h1>
          )}
        </div>
        {props.partner ? (
          <p className="text-sm font-medium text-gray-600 mb-2">hartssan dans {props.partner}</p>
        ) : null}
      </div>
    </>
  );
};

export default ListItem;
