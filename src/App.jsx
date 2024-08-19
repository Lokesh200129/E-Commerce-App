import ProductCard from './component/ProductCard'
import Payment from './component/Payment'
import Cart from './component/Cart'
import Navbar from './component/Navbar'
import './App.css'
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] =useState(0);
  const [cartCount, setCartCount] = useState(0)


  // Function for adding product into cart
  const addToCart = (product) => {
    const isPresent = cart.some(prod => prod.id === product.id);
    if (!isPresent) {
      setCart([...cart, {...product, quantity: 1}]);
      setCartCount((prev)=> prev +=1)
    }
  };

  // Function for removing product into cart
  const removeFromCart = (obj)=>{
    const newCart = cart.filter(item => item.id !== obj.id)
    setCart(newCart)
    
  }

  // Function for increasing product quantity
  const increaseQuantity = (id) =>{
    setCart(cart.map(item=> item.id === id ? {...item, quantity: item.quantity +1} : item))
  }

  // Function for decreasing product quantity
  const decreseQuantity = (id) =>{
    setCart(cart.map((item)=> item.id === id ? {...item, quantity:item.quantity -1} : item))
    
  }
  
  // This hook fetch data from third-party api and set in to data state variable
  useEffect(()=>{
    async function result() {
      try{
        const res =  await fetch('https://fakestoreapi.com/products')
        const response = await res.json();
        setData(()=>response)
      }catch{
          console.log("error occured")
      }
     
    }
    result()
  }, [])

  // This hook calculate the final price of all the item added into cart
  useEffect(()=>{
    function totalPrice(){
      const totalAmount = cart.reduce((inital , product)=> inital + (product.price * product.quantity || 1),0)
       setTotal(totalAmount)
    }
    totalPrice()
  },[ cart])

  return (
    <BrowserRouter>
    {/* Navbar */}
      <Navbar  cartCount={cartCount} />
        <Routes>
          <Route path='/' element={
            // All Product Listings 
              <div  className='m-auto mt-9 w-screen grid grid-cols-2 gap-4 md:w-4/5 md:grid md:grid-cols-4 md:gap-4 '>
                {data.length >0 ? (data.map((item) => (
                         <ProductCard 
                            key={item.id} 
                            image={item.image} 
                            name={item.title} 
                            detail={item.description} 
                            price={item.price} 
                            rating={item.rating.rate}
                            count={item.rating.count} 
                            addtoCart={() => addToCart(item)}
                          />
                      )
                    )
                  ) : <p>Fetching Products</p>
                }
              </div>
            }
          >
          </Route>
          <Route path='/cart' element={
                // All Product Added Into The Cart
                <div className='mt-9 w-screen grid md:w-4/5 md:grid md:grid-cols-3 gap-4'>
                  <div className='grid md:grid md:col-span-2 gap-4' >
                    { cart.length > 0 ? (cart.map((item)=>(
                          <Cart 
                              key={item.id} 
                              image={item.image} 
                              name={item.title}  
                              price={item.price}
                              remove={()=> removeFromCart(item)}
                              quantity={item.quantity} 
                              increaseQuantity={()=> increaseQuantity(item.id)}
                              decreseQuantity={()=>decreseQuantity(item.id)} 
                            />
                          )
                        )
                      ) : <p>No Item Added To Cart</p> 
                    }
                  </div>
                  <Payment totalPrice={total} />
                </div>
            }
          >
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
