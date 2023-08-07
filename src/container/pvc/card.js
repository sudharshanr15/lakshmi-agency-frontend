
const Card = () => {
  return (
    <div className="p-4 border rounded-md text-gray-500">
        Apple Ply 6 Pieces Birchs Plywood 3mm Inch Sheet Perfect....
        <div className="flex justify-between py-3 text-sm">
            <div>
                <input className="p-1 w-20 rounded-md border" type="number" defaultValue={0}/>
                <p className="py-1 text-green-400">In Stock</p>
                <p className="pt-1">Standard Delivery Apr 2</p>
            </div>
            <div>
                <p className="py-1 ml-auto text-gray-400"><span className="text-xl font-bold text-blue-900">&#8377; 6,522.83 </span> MRP:<span className="line-through">7,000</span></p>
                <p className="py-1 w-fit ml-auto">&#8377;6,522.83 Excl. GST</p>
                <p className="pt-1 w-fit ml-auto text-green-400">Delivery Fee &#8377;200</p>
            </div>
        </div>
      </div>
  )
}

export default Card
