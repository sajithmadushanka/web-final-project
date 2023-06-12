
import CartItem from "../components/cart/cart_item";
import Navbar from "../components/reusabal/Navbar";
import "../styles/css/cart/cart.css";


function CartPage() {
    

    return ( <>
          
    <title> Cart </title>

 
        {/* nav bar */}
        <Navbar></Navbar>

        <div className="MY-CART">
            <h1>My Cart</h1>
        </div>

        <div className="select-all">
            <p>Select All</p>
            <input type="checkbox" name="select-all" value="select-all"  id="select-all" />
        </div>


        <div className="main">
            <div>
                {/* cart items */}
                <CartItem></CartItem>
                <CartItem></CartItem>
                
            </div>


            <div className="place-order-container">
                <h2>Total</h2>
                <p>RS: 4556.00</p>
                <button>place order</button>
            </div>
            
        </div>
       
    
  

    </> );
}

export default CartPage;