import Card from "./card";

const Content = () => {
  const products = [
    {
      name: "Delco Ply 6 Pieces Birchs Plywood 3mm Inch Sheet Perfect",
      mrp: 7000,
      price: 650.5,
      gst: 40.4,
      deliveryFee: 160.0,
      deliveryDate: "Apr 10",
    },
    {
      name: "Apple Ply 6 Pieces Birchs Plywood 3mm Inch Sheet Perfect",
      mrp: 7000,
      price: 650.5,
      gst: 40.4,
      deliveryFee: 160.0,
      deliveryDate: "Apr 10",
    },
    {
      name: "Delco Ply 6 Pieces Birchs Plywood 3mm Inch Sheet Perfect",
      mrp: 7000,
      price: 650.5,
      gst: 40.4,
      deliveryFee: 160.0,
      deliveryDate: "Apr 10",
    },
    {
      name: "Green Ply 6 Pieces Birchs Plywood 3mm Inch Sheet Perfect",
      mrp: 7000,
      price: 650.5,
      gst: 40.4,
      deliveryFee: 160.0,
      deliveryDate: "Apr 10",
    },
    {
      name: "Century Ply 6 Pieces Birchs Plywood 3mm Inch Sheet Perfect",
      mrp: 7000,
      price: 650.5,
      gst: 40.4,
      deliveryFee: 160.0,
      deliveryDate: "Apr 10",
    },
    {
      name: "Delco Ply 6 Pieces Birchs Plywood 3mm Inch Sheet Perfect",
      mrp: 7000,
      price: 650.5,
      gst: 40.4,
      deliveryFee: 160.0,
      deliveryDate: "Apr 10",
    },
    {
      name: "Black Costa Ply 6 Pieces Birchs Plywood 3mm Inch Sheet Perfect",
      mrp: 7000,
      price: 650.5,
      gst: 40.4,
      deliveryFee: 160.0,
      deliveryDate: "Apr 10",
    },
    {
      name: "Delco Ply 6 Pieces Birchs Plywood 3mm Inch Sheet Perfect",
      mrp: 7000,
      price: 650.5,
      gst: 40.4,
      deliveryFee: 160.0,
      deliveryDate: "Apr 10",
    },
  ];

  const content = products.map((val, pos) => (
    <Card
      name={val.name}
      mrp={val.mrp}
      price={val.price}
      gst={val.gst}
      deliveryfee={val.deliveryFee}
      deliverydate={val.deliveryDate}
      key={pos}
    />
  ));

  return (
    <div className="m-5 lg:m-10 pb-64 lg:pb-0 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
      {content}
    </div>
  );
};

export default Content;
