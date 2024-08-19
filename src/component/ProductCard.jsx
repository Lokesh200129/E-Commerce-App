function ProductCard({ image, name, price, rating, count, addtoCart }) {
    const link = "https://img.icons8.com/?size=50&id=MLMkQW8hDiAy&format=png&color=000000"
    return (
        <>
            <div className="w-full sm:w-1/2 md:w-52 h-auto rounded-lg p-2 border border-slate-500 flex flex-col">
                <figure>
                    <img className="h-40 w-full md:w-44 rounded-xl " src={image} alt="Product" />
                </figure>

                <figcaption className="flex flex-col flex-grow text-left ml-2 mt-2">
                    <div className="flex text-sm">
                        <div className="w-14 px-2 bg-green-600 text-white flex items-center rounded">
                            <p>{rating}</p>
                            <img className="invert h-5 ml-1" src={link} alt="" />
                        </div>
                        <p className="ml-2 text-zinc-700">{count} Rating</p>
                    </div>
                    <p><b>{name}</b></p>
                    <p>{'\u20B9'}{price}</p>
                </figcaption>
                <button className="w-full mt-auto bg-green-500 hover:bg-green-600 text-white rounded-md align-center" onClick={addtoCart}>Add To Cart</button>
            </div>
        </>
    )
}

export default ProductCard;