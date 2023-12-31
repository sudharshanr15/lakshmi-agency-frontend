import Link from "next/link";

const Total = ({ cart }) => {
  return (
    <div className="w-full fixed bottom-0 lg:relative bg-gray-100 py-8">
      <div className="lg:mt-48 mx-5 lg:mx-14 text-sm flex justify-between">
        <div>
          <p className="text-gray-400">{cart.length} products selected</p>
          <h1 className="text-2xl lg:text-3xl mt-3 text-blue-900">Total</h1>
        </div>
        <div>
          <p className="text-blue-800 cursor-pointer lg:pl-5 underline underline-offset-2">
            View Products
          </p>
        </div>
      </div>
      <div className="lg:flex lg:justify-end mx-5 lg:mx-14 mt-5">
        <button className="rounded-md w-full lg:w-fit border border-blue-900 text-blue-900 hover:bg-yellow-400 hover:text-black hover:border-0 lg:mx-5 mb-4 lg:mb-0 px-14 py-2 font-bold">
          Raise Quote
        </button>
        <Link href={"/dashboard/product"}>
          <div className="rounded-md w-full lg:w-fit border border-blue-900 text-blue-900 hover:bg-yellow-400 hover:text-black hover:border-0 px-14 py-2 font-bold">
            Add to cart
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Total;
