export function QuoteCard(){
    return(
        <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-auto mx-2 gap-2 lg:gap-7 md:mx-auto justify-between lg:mx-20 lg:mt-10 mt-4  p-5 rounded-md">
          <div className="bg-[#e4eef1] rounded-lg">
            <div className="flex justify-start p-4 mt-2">
              <div className="ml-4">
                <h1 className="text-[#555961] text-2-xl">Outstanding amount</h1>
                <div className="flex">
                  <p className="mt-1 text-[#155f80] font-bold text-1xl md:text-2xl">₹10</p>
                  <div className="flex ">
                   
                    <p className="mt-1 text-[#b9babc] md:text-1xl "> &nbsp; (Till date)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#fcece4] rounded-lg">
            <div className="flex justify-start p-4 mt-2">
              <div className="ml-4">
                <h1 className="text-[#555961] text-2-xl">Over due</h1>
                <div className="flex">
                  <p className="mt-1 text-[#ff081d] font-bold text-1xl md:text-2xl">₹30</p>
                  <div className="flex  ">
                   
                    <p className="mt-1 text-[#b9babc] md:text-1xl "> &nbsp; (Till date)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#e4eef1] rounded-lg">
            <div className="flex justify-start p-4 mt-2">
              <div className="ml-4">
                <h1 className="text-[#555961] text-2-xl">Check in hand</h1>
                <div className="flex">
                  <p className="mt-1 text-[#155f80] font-bold text-1xl md:text-2xl">120</p>
                  <div className="flex  text-lime-600 ">
                   
                    <p className="mt-1 text-[#b9babc] md:text-1xl "> &nbsp; (12 Jan23)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#fcece4] rounded-lg">
            <div className="flex justify-start p-4 mt-2">
              <div className="ml-4">
                <h1 className="text-[#555961] text-2-xl">Bounced check</h1>
                <div className="flex">
                  <p className="mt-1 text-[#ff081d] font-bold text-1xl md:text-2xl">₹30</p>
                  <div className="flex  ">
                   
                    <p className="mt-1 text-[#b9babc] md:text-1xl "> &nbsp; (12 Jan23)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}