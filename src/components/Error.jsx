// eslint-disable-next-line react/prop-types
const Error = ({mensaje}) => {
  return (
    <div
      className="bg-red-100 border-l-4 border-red-500 text-red-700 px-4 py-3 mb-2 rounded-md"
      role="alert"
    >
      <p className="font-bold">{ mensaje }</p>
    </div>
  );
};

export default Error;
