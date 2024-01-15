import React from "react";

function DetailsTab({ setDetailsTab, Content, detailsTab }) {
  return (
    <div className="top-0 left-0 h-full w-full z-[500] fixed">
      <div className="w-full h-full flex">
        <div
          className="h-full w-[10%] lg:w-[50%] z-[110] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
          onClick={() => setDetailsTab("")}
        ></div>
        <div className="bg-white h-full w-[90%] lg:w-[50%] z-[110] relative p-4">
          {/* close btn */}
          <CloseBtn setDetailsTab={setDetailsTab} />
          <Content setDetailsTab={setDetailsTab} itemCode={detailsTab} />
        </div>
      </div>
    </div>
  );
}

function CloseBtn({ setDetailsTab }) {
  return (
    <button
      type="button"
      onClick={() => setDetailsTab("")}
      data-drawer-hide="drawer-navigation"
      aria-controls="drawer-navigation"
      className="text-gray-400 z-50 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
