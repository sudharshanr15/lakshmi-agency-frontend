"use client";
import Card from "./card";

const Content = ({ cart }) => {
  return (
    <div className=" m-5 lg:m-10 pb-80 md:pb-64 lg:pb-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
      {cart.map((val, pos) => (
        <Card
          name={val.item_name}
          itemCode={val.item_code}
          quantity={val.qty}
          key={pos}
        />
      ))}
    </div>
  );
};

export default Content;
