import { Link } from "react-router-dom"
function Navbar({ cartCount }) {

    return (
        <div className="md:w-4/5 w-full m-auto mb-4 h-14 rounded bg-blue-200 flex flex-row-reverse z-0 fixed top-0 ">
            <Link to="/cart" className="mt-3 mr-12 bg-transparent   "  >
                <div className="relative inline-block cursor-pointer" >
                    <img
                        src="https://img.icons8.com/?size=100&id=9671&format=png&color=000000" // or the path to your local image
                        alt="Icon"
                        className="w-8 h-8"
                    />
                    {cartCount > 0 && (
                        <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full transform translate-x-1/2 -translate-y-1/2">
                            {cartCount}
                        </div>
                    )}
                </div>
            </Link>
        </div>

    )
}

export default Navbar;
