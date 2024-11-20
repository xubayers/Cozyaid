/* eslint-disable react/prop-types */
function PageHeader({ title, desc }) {
  return (
    <div className="my-7 text-center flex flex-col items-center justify-center ">
      <h2 className="md:text-4xl text-2xl  font-bold animate__animated animate__fadeInUp dark:text-gray-400">
        {title}
      </h2>
      <p className="text-lg md:w-7/12  my-2 text-black/70 animate__animated animate__fadeInUp delay-100 dark:text-gray-400">
        {desc}
      </p>
    </div>
  );
}

export default PageHeader;
