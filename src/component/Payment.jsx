import { Link } from "react-router-dom"

function Payment({totalPrice}){
    let discount = 0;
    let dileveryCharges = 0;
    if(totalPrice>0){
        discount = Math.round(totalPrice * 0.10)
        dileveryCharges = Math.round(totalPrice * 0.05)
   }
   
    const total = totalPrice + dileveryCharges - discount;
    return(
        <div className="border p-6 h-fit w-vw">
            <p className="text-xl mb-2">Payment detail</p>
            <hr />
            <div className="flex  mt-4">
                <p className="ml-4">Price</p>
                <p className="ml-auto mr-4">{'\u20B9'} {Math.floor(totalPrice)}</p>
            </div>
            <div className="flex mt-4">
                <p className="ml-4">Discount 10%</p>
                <p className="ml-auto mr-4">-{'\u20B9'} {discount}</p>
            </div>
            <div className="flex my-4 ">
                <p className="ml-4">Dilevery Charges</p>
                <p className="ml-auto mr-4">{'\u20B9'} {dileveryCharges}</p>
            </div>
            <hr />
            <div className="flex my-4 text-xl ">
                <p className="ml-4">Total Amount</p>
                <p className="ml-auto mr-4">{'\u20B9'} {Math.round(total)}</p>
            </div>
            <hr />
            <button className="w-full mb-2 p-2 bg-green-500 hover:bg-green-600 text-white rounded align-center text-xl" >Pay Now</button>
            <Link to="/" className="mt-4">Continue Shoping</Link>
        </div>
    )
}

export default Payment;