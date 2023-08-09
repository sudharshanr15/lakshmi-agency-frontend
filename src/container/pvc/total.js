
const Total = () => {
  return (
    <div className="w-full fixed bottom-0 lg:relative bg-gray-100 py-8">
    <div className="lg:mt-48 mx-5 lg:mx-10 text-sm flex justify-between">
      <div>
        <p className="text-gray-400">4 products selected</p>
        <h1 className="text-2xl lg:text-3xl mt-3 text-blue-900">Total</h1>
      </div>
      <div>
        <a className="text-blue-600 underline underline-offset-2 font-thin">View Products</a>
        <h1 className="text-2xl lg:text-3xl mt-3 font-bold text-blue-900">&#8377;27,000</h1>
      </div>
    </div>
    <div className="lg:flex lg:justify-end mx-5 lg:mx-10 mt-5">
            <button className="rounded-md w-full lg:w-fit bg-yellow-500 lg:mx-2 mb-4 lg:mb-0 px-14 py-2 font-bold">Raise Quote</button>
            <button className="rounded-md w-full lg:w-fit border border-blue-900 text-blue-900 px-14 py-2 font-bold">Add to cart</button>
    </div>
    </div>
  )
}

export default Total
