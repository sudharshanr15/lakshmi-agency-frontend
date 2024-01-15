import React from "react";

const Icon = ({ isActive }) => {
  if (!isActive) {
    return <IconAdd />;
  } else {
    return <IconSub />;
  }
};

const IconAdd = () => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 2.5C6.98 2.5 2.5 6.98 2.5 12.5C2.5 18.02 6.98 22.5 12.5 22.5C18.02 22.5 22.5 18.02 22.5 12.5C22.5 6.98 18.02 2.5 12.5 2.5ZM11.5 7.5V11.5H7.5V13.5H11.5V17.5H13.5V13.5H17.5V11.5H13.5V7.5H11.5ZM4.5 12.5C4.5 16.91 8.09 20.5 12.5 20.5C16.91 20.5 20.5 16.91 20.5 12.5C20.5 8.09 16.91 4.5 12.5 4.5C8.09 4.5 4.5 8.09 4.5 12.5Z"
        fill="#0A4E71"
      />
    </svg>
  );
};

const IconSub = () => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 2.5C6.98 2.5 2.5 6.98 2.5 12.5C2.5 18.02 6.98 22.5 12.5 22.5C18.02 22.5 22.5 18.02 22.5 12.5C22.5 6.98 18.02 2.5 12.5 2.5ZM4.5 12.5C4.5 16.91 8.09 20.5 12.5 20.5C16.91 20.5 20.5 16.91 20.5 12.5C20.5 8.09 16.91 4.5 12.5 4.5C8.09 4.5 4.5 8.09 4.5 12.5ZM7.5 11.5V13.5H17.5V11.5H7.5Z"
        fill="#0A4E71"
      />
    </svg>
  );
};

export default Icon;
