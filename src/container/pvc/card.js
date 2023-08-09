
const Card = ({name,mrp,price,gst,deliveryfee,deliverydate}) => {
  return (
    <div className="p-4 border rounded-md text-gray-500">
        {name}
        <div className="flex justify-between py-3 text-sm">
            <div>
                <input className="p-1 w-20 rounded-md border" type="number" defaultValue={0}/>
                <p className="py-1 text-green-400">In Stock</p>
                <p className="pt-1">Standard Delivery {deliverydate}</p>
            </div>
            <div>
                <p className="py-1 ml-auto text-gray-400"><span className="text-xl font-bold text-blue-900">&#8377; {price} </span> MRP:<span className="line-through">{mrp}</span></p>
                <p className="py-1 w-fit ml-auto">&#8377;{gst} Excl. GST</p>
                <p className="pt-1 w-fit ml-auto text-green-400">Delivery Fee &#8377;{deliveryfee}</p>
            </div>
        </div>
      </div>
  )
}

export default Card
