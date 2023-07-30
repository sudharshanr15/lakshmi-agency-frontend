export function Payment() {
  const orders = [
    {
      orderedOn: "22May 2022",
      amount: "₹2100",
      totalItems: 3,
      totalAmount: "₹18,400 + ₹200(delivery fee)",
      orderId: "AISR7234351",
      dueDate: "24 Jan'23",
    },
    {
      orderedOn: "22May 2022",
      amount: "₹2100",
      totalItems: 3,
      totalAmount: "₹18,400 + ₹200(delivery fee)",
      orderId: "AISR7234351",
      dueDate: "24 Jan'23",
    },
    {
      orderedOn: "22May 2022",
      amount: "₹2100",
      totalItems: 3,
      totalAmount: "₹18,400 + ₹200(delivery fee)",
      orderId: "AISR7234351",
      dueDate: "24 Jan'23",
    },
    {
      orderedOn: "22May 2022",
      amount: "₹2100",
      totalItems: 3,
      totalAmount: "₹18,400 + ₹200(delivery fee)",
      orderId: "AISR7234351",
      dueDate: "24 Jan'23",
    },
  ];
  const orderElements = orders.map((order, index) => (
    <div className="border rounded-lg mt-2" key={index}>
      <div className="flex justify-between m-3 md:m-5">
        <h1 className="text-[#0a4e71] text-sm md:text-1xl font-semibold">
          Ordered On {order.orderedOn}
        </h1>
        <span>{order.amount}</span>
      </div>
      <div className="flex text-[#b9babc] justify-between m-3 mt-2  md:m-5">
        <h1 className="text-sm md:text-lg">Total items : {order.totalItems}</h1>
        <span className="text-sm md:text-lg">{order.totalAmount}</span>
      </div>
      <div className="flex justify-between m-3 mt-2  md:m-5">
        <h1 className="mt-1 text-sm md:text-lg"> Order ID : {order.orderId}</h1>
        <span className="bg-[#f9ece4] rounded-md">
          <p className=" text-[#fd3130] p-2 md:p-3 text-sm md:text-1xl w-auto text-center font-medium rounded-xl">
            Due on : {order.dueDate}
          </p>
        </span>
      </div>
    </div>
  ));
  return (
    <div className="lg:mt-40 ">
      <div className="lg:mx-24 mx-6  p-5 rounded-md">
        <div className="flex justify-">
          <h1 className="text-black text-1xl text-2xl font-semibold ">
            Outstanding amount
          </h1>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-auto mx-2 gap-2 lg:gap-2 md:mx-auto justify-between lg:mx-20   p-5 rounded-md ">
        <div className="rounded-lg   bg-[#e7eef1]">
          <div className="flex justify-between p-4 mt-2">
            <div className="ml-4">
              <h1 className="text-[#0a4e71] text-1xl">
                Outstanding amount(till date)
              </h1>
            </div>
            <div className="ml-4 justify-end">
              <h1 className="text-[#0a4e71] font-bold text-2-xl text-right">
                ₹1,30,000
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:mx-24  p-5 rounded-md">
        <div className="flex justify-">
          <h1 className="text-black text-1xl text-2xl font-semibold lg:-mb-7">
            Pending Payment list
          </h1>
        </div>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-auto mx-2 gap-2 lg:gap-2 md:mx-auto justify-between lg:mx-20  p-5 rounded-md mb-32">
        {orderElements}
      </div>
    </div>
  );
}
