function DetailsTab({ hideShowDetailsTab, order, returnProduct }) {
  return (
    <div className="absolute top-0 left-0 h-full w-full z-[1000]">
      <div className="w-full h-full flex">
        <div
          className="h-full w-[40%] z-[110] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
          onClick={() => hideShowDetailsTab("")}
        ></div>
        <div className="bg-white h-full w-[60%] z-[110] relative p-4">
          {/* close btn */}
          <CloseBtn hideShowDetailsTab={hideShowDetailsTab} />
          {/* contents */}
          <div className="flex justify-between items-center mt-3">
            <div>
              <h2 className="font-medium text-lg">
                {returnProduct.item_name.substring(0, 15) + "..."}
              </h2>
              <h2 className="text-gray-500 font-semibold text-sm">
                Order ID : {order.name}
              </h2>
              <h2 className="text-gray-500 font-semibold text-sm">
                Ordered on {order.creation.substring(0, 10)}
              </h2>
            </div>
            <div>
              <h2 className="font-semibold">$ 2,140</h2>
              <h2 className="text-gray-500 font-semibold text-sm">
                Qty : {returnProduct.qty}
              </h2>
            </div>
          </div>
          <div className="mt-3">
            <h2 className="text-[#0A4E71] ">Refund Process : </h2>
            <ul className="list-disc mt-2 px-2 pl-4">
              <li>
                The amount will be Refunded to your Visa Debit ending in 2333 in
                Original Payment method in 2-3 Working Days after the order
                reaches us
              </li>
              <li>
                Delivery charges for return will be subtracted from the refund
                if the mistake is not from our end
              </li>
            </ul>
          </div>
          <div className="mt-3 flex items-center">
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.0625 9.625H16.625V6.66914C16.625 6.32187 16.4855 5.98828 16.2395 5.74219L13.5078 3.01055C13.2617 2.76445 12.9281 2.625 12.5809 2.625H11.375V1.3125C11.375 0.587891 10.7871 0 10.0625 0H3.0625C2.33789 0 1.75 0.587891 1.75 1.3125V2.625H0.21875C0.0984375 2.625 0 2.72344 0 2.84375V3.28125C0 3.40156 0.0984375 3.5 0.21875 3.5H7.65625C7.77656 3.5 7.875 3.59844 7.875 3.71875V4.15625C7.875 4.27656 7.77656 4.375 7.65625 4.375H1.09375C0.973437 4.375 0.875 4.47344 0.875 4.59375V5.03125C0.875 5.15156 0.973437 5.25 1.09375 5.25H6.78125C6.90156 5.25 7 5.34844 7 5.46875V5.90625C7 6.02656 6.90156 6.125 6.78125 6.125H0.21875C0.0984375 6.125 0 6.22344 0 6.34375V6.78125C0 6.90156 0.0984375 7 0.21875 7H5.90625C6.02656 7 6.125 7.09844 6.125 7.21875V7.65625C6.125 7.77656 6.02656 7.875 5.90625 7.875H1.75V11.375C1.75 12.8242 2.92578 14 4.375 14C5.82422 14 7 12.8242 7 11.375H10.5C10.5 12.8242 11.6758 14 13.125 14C14.5742 14 15.75 12.8242 15.75 11.375H17.0625C17.3031 11.375 17.5 11.1781 17.5 10.9375V10.0625C17.5 9.82187 17.3031 9.625 17.0625 9.625ZM4.375 12.6875C3.65039 12.6875 3.0625 12.0996 3.0625 11.375C3.0625 10.6504 3.65039 10.0625 4.375 10.0625C5.09961 10.0625 5.6875 10.6504 5.6875 11.375C5.6875 12.0996 5.09961 12.6875 4.375 12.6875ZM13.125 12.6875C12.4004 12.6875 11.8125 12.0996 11.8125 11.375C11.8125 10.6504 12.4004 10.0625 13.125 10.0625C13.8496 10.0625 14.4375 10.6504 14.4375 11.375C14.4375 12.0996 13.8496 12.6875 13.125 12.6875ZM15.3125 7H11.375V3.9375H12.5809L15.3125 6.66914V7Z"
                fill="#FF0000"
              />
            </svg>
            <h2 className="text-red-500 ml-2">
              Order will Picked up between 27 - 30 March
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

function CloseBtn({ hideShowDetailsTab }) {
  return (
    <button
      type="button"
      onClick={() => hideShowDetailsTab("")}
      data-drawer-hide="drawer-navigation"
      aria-controls="drawer-navigation"
      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
    >
      <svg
        aria-hidden="true"
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
      <span className="sr-only">Close menu</span>
    </button>
  );
}

export default DetailsTab;
