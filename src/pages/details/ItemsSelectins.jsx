function ItemsSelectins() {
  return (
    <div className="mt-2">
      <select
        name="itemType"
        className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 px-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
      >
        <option value="blacket">Blacket</option>
        <option value="jacket">Jacket</option>
        <option value="sweater">Sweater</option>
        <option value="towal">Towal</option>
        <option value="other">Other</option>
        <option value="none">none</option>
      </select>
    </div>
  );
}

export default ItemsSelectins;
