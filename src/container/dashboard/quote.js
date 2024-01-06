export function Quote() {
  return (
    <div className="lg:mx-24 mx-6 lg:mt-10 mt-4 bg-[#2e3437] p-5 rounded-md">
      <div className="flex justify-between">
        <h1 className="text-white text-1xl md:text-2xl font-semibold">
          Get the <span className="text-[#ffca4d]">Best Quote</span> On products
          in the Market
        </h1>

        <div className="mr-0">
          <button className="px-4 py-2  text-[#004b71] bg-[#ffca4d]  rounded-md focus:outline-none flex font-semibold">
            Raise Quotes
          </button>
        </div>
      </div>
    </div>
  );
}
