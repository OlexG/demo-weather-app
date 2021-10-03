function Status({ title, number, status }) {
  return (
    <div className="shadow-md bg-white px-10 py-4 rounded-lg mt-2">
      <p className="font-thin text-lg">{title}</p>
      <p className="text-5xl">{number}</p>
      <p className="">{status}</p>
    </div>
  );
}

export default Status;
