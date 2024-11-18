/* eslint-disable react/prop-types */
function PageHeader({ title, desc }) {
  return (
    <div className="my-7 text-center flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="text-lg w-7/12 my-2 text-black/70">{desc}</p>
    </div>
  );
}

export default PageHeader;
