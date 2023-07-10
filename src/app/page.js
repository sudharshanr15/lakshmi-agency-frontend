'use client'


export function Card() {
    return (
        <>
            <div className="container grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-auto mx-2 gap-2 lg:gap-7 md:mx-auto justify-between mt-60">
                
               <div className="bg-[#fdfaf0] rounded-lg">
                    <div className="flex justify-start p-4 mt-2"> 
                            <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>
                            </div>
                            <div className="ml-4">
                            <h1 className="text-[#555961] text-2-xl">Quote</h1>
                                <div className="flex">
                                <p className="mt-2 font-bold text-1xl md:text-2xl">150</p>
                                <div className="flex  text-lime-600 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
                                        </svg>
                                        <p className="mt-3  md:text-1xl ">12.3%</p>
                                </div>
                                </div>  
                            </div>
                    </div>
               </div>

               <div className="bg-[#ecf8e7] rounded-lg">
                    <div className="flex justify-start p-4 mt-2"> 
                        <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-4">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                        </div>
                        <div className="ml-4">
                         <h1 className="text-[#555961] text-2-xl">Quote</h1>
                            <div className="flex">
                               <p className="mt-2 font-bold text-1xl md:text-2xl">150</p>
                               <div className="flex  text-lime-600 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
                                    </svg>
                                    <p className="mt-3  md:text-1xl ">12.3%</p>
                               </div>
                            </div>  
                        </div>
                    </div>
               </div>

               <div className="bg-[#e4eef1] rounded-lg">
                    <div className="flex justify-start p-4 mt-2"> 
                        <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-4">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                        </div>
                        <div className="ml-4">
                         <h1 className="text-[#555961] text-2-xl">Savings</h1>
                            <div className="flex">
                               <p className="mt-2 font-bold text-1xl md:text-2xl">30,000</p>
                               <div className="flex  text-lime-600 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
                                    </svg>
                                    <p className="mt-3  md:text-1xl ">12.3%</p>
                               </div>
                            </div>  
                        </div>
                    </div>
               </div>

               <div className="bg-[#fcece4] rounded-lg">
                <div className="flex justify-start p-4 mt-2"> 
                            <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>
                            </div>
                            <div className="ml-4">
                            <h1 className="text-[#555961] text-2-xl">Purchased</h1>
                                <div className="flex">
                                <p className="mt-2 font-bold text-1xl md:text-2xl">1,30,000</p>
                                <div className="flex  text-lime-600 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
                                        </svg>
                                        <p className="mt-3  md:text-1xl ">12.3%</p>
                                </div>
                                </div>  
                            </div>
                        </div>
               </div>
            </div>

        </>
    )
}

// export function Card(){
//     return (
//         <>
//             <div className="p-5 grid grid-cols-2 gap-2">
//                 <div className="bg-orange-300">
//                       <p className="text-opacity-20">
//                         Order
//                       </p>
//                 </div>

//                 <div className="bg-orange-300">
//                       <p>
//                         Order
//                       </p>
//                 </div>
//             </div>
//         </>
//     )
// }