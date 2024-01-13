import Link from "next/link";

const Total = ({ cart }) => {
  return (
    <div className="w-full fixed bottom-0 z-10 lg:z-0 lg:relative bg-gray-100 py-5">
      <div className="mx-5 lg:mx-14 text-sm flex justify-between items-end">
        <div>
          <h1 className="text-xl lg:text-2xl mt-3 text-blue-900">
            Total {cart.length} products selected
          </h1>
        </div>
        <Link href={"/dashboard/product"}>
          <div className="rounded-md w-full lg:w-fit text-center bg-yellow-400 text-black px-2 lg:px-14 py-2 font-bold">
            Preview & Request Order
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Total;
