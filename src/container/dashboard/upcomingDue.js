export function UpcomingDue({ dues }) {
  return (
    <>
      <div className="lg:mx-24 mx-6 lg:mt-10 p-5 rounded-md hidden sm:block">
        <div className="flex justify-between">
          <h1 className="text-black text-1xl md:text-2xl font-semibold">
            Upcoming due
          </h1>
        </div>
        <div className="relative overflow-x-auto shadow-md md:mt-8 mt-5">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-[#e4eef1] dark:text-gray-400  md:mx-6">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Due Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Pending
                </th>
                <th scope="col" className="px-6 py-3">
                  Total Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {dues.map((due, i) => (
                <tr
                  key={i}
                  className="bg-white border-b   hover:bg-gray-50 dark:hover:bg-gray-600 md:mx-8"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    {due.name}
                  </th>
                  <td className="px-6 py-4">{due.due_date}</td>
                  <td className="px-6 py-4">{due.name}</td>
                  <td className="px-6 py-4">₹{due.total_taxes_and_charges}</td>
                  <td className="px-6 py-4">₹{due.rounded_total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <MobileUpcomingDues dues={dues} />
    </>
  );
}

function MobileUpcomingDues({ dues }) {
  return (
    <div className="sm:hidden block mt-4 ">
      <div className="flex justify-between">
        <h1 className="text-black text-1xl md:text-2xl ml-2 font-semibold">
          Upcoming due
        </h1>
      </div>
      <div className="overflow-x-auto shadow-md md:mt-8 mt-5">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-[#e4eef1] dark:text-gray-400  md:mx-6">
            <tr>
              <th scope="col" className="px-4 py-3">
                ID
              </th>
              <th scope="col" className="px-4 py-3">
                Due Date
              </th>
              <th scope="col" className="px-4 py-3">
                Pending
              </th>
              <th scope="col" className="px-4 py-3">
                Total Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {dues.map((due, i) => (
              <tr
                key={i}
                className="bg-white border-b  hover:bg-gray-50 dark:hover:bg-gray-600 md:mx-8"
              >
                <th
                  scope="row"
                  className="px-4 py-3 text-xs font-medium whitespace-nowrap"
                >
                  {due.name}
                </th>
                <td className="px-4 py-3 text-xs">{due.due_date}</td>
                <td className="px-4 py-3 text-xs">
                  ₹{due.total_taxes_and_charges}
                </td>
                <td className="px-4 py-3 text-xs">₹{due.rounded_total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
