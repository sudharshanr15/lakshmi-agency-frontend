
function Row(){

  return (
    <>
     <div className="border rounded-lg mt-2">
      <div className="flex justify-between p-4 mt-2">
        <div className="ml-4">
          <h1 className="text-[#0a4e71] font-bold text-2-xl">
            Ordered On 22 May 2022
          </h1>
          <div className="">
            <p className="mt-2  text-[#b9babc] md:text-1xl flex-end">
              Total items 3
            </p>
          </div>
          <div className="flex">
            <p className="mt-2  text-black md:text-1xl ">
              Order ID : AISR7234351
            </p>
          </div>
        </div>
        <div className="ml-4 justify-end">
          <h1 className="text-[#0a4e71] font-bold text-2-xl text-right">
            ₹21,400
          </h1>
          <div className="">
            <p className="mt-2  text-[#b9babc] md:text-1xl text-right">
              ₹18,400 + ₹200(delivery fee)
            </p>
            <p className="mt-2 text-right"> 
              <span className="bg-[#f9ece4] text-[#fd3130] md:text-1xl p-2 rounded-xl font-semibold">
              Over Due
              </span>
            </p>
            
          </div>
        </div>
      </div>
    </div>
    </>)
}

export function DuePayment() {
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
        <div className="rounded-lg   bg-[#F9ECE4]">
          <div className="flex justify-between p-4 mt-2">
            <div className="ml-4">
              <h1 className="text-[#6A7079] text-1xl">
                Outstanding amount(till date)
              </h1>
            </div>
            <div className="ml-4 justify-end">
              <h1 className="text-[#FF0000] font-bold text-2-xl text-right">
                ₹1,30,000
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:mx-24  p-5 rounded-md">
        <div className="flex justify-">
          <h1 className="text-black text-1xl text-2xl font-semibold lg:-mb-7">
            Over Due Payment list
          </h1>
        </div>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-auto mx-2 gap-2 lg:gap-2 md:mx-auto justify-between lg:mx-20 mt-4  p-5 rounded-md mb-32">
       <Row/>
       <Row/>
       <Row/>
       <Row/>
       <Row/>
       <Row/>
       <Row/>
      </div>
    </div>
  );
}
