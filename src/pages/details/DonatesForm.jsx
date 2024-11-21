import toast from "react-hot-toast";
import ItemsSelectins from "./ItemsSelectins";

function DonatesForm() {
  const donatesHandler = (e) => {
    e.preventDefault();
    toast.success("Thank you ! We will reach your destination soon.");
    e.target.reset();
  };
  return (
    <div className="flex min-h-full  flex-1 flex-col justify-center px-6 py-6 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className=" text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-gray-400">
          Donate Here
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={donatesHandler}>
          <div>
            <label
              htmlFor="itemQuantity"
              className="block text-sm/6 font-medium text-gray-900 dark:text-gray-400"
            >
              Item Quantity
            </label>
            <div className="mt-2">
              <input
                id="itemQuantity"
                name="itemQuantity"
                type="number"
                required
                placeholder="Item Quantity"
                className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 px-2"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="itemType"
                className="block text-sm/6 font-medium text-gray-900 dark:text-gray-400"
              >
                Item Type
              </label>
            </div>
            <div className="grid  grid-cols-2 gap-2">
              <ItemsSelectins />
              <ItemsSelectins />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="pickupAddress"
                className="block text-sm/6 font-medium text-gray-900 dark:text-gray-400"
              >
                PickUp Address
              </label>
            </div>
            <div className="mt-2">
              <input
                placeholder="PickUp Address"
                id="pickupAddress"
                name="pickupAddress"
                type="text"
                required
                className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 px-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 "
              />
            </div>
          </div>

          <div>
            <button className="flex w-full justify-center rounded-md bg-mySecondery px-3 py-2 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Donate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DonatesForm;
