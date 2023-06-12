import image1 from "../../assets/products-img/01.jpg"

function CartItem() {
    return ( 
    <>
        <div className="line">
                    <input type="checkbox" name="select-all" value="select-all" className="checkbox" />
                    <div className="item_card">
                        <img src={image1} alt="cart image" />
                        <div>
                            <p>t-shirt new item here</p>
                            <p>Rs - 550.00</p>
                        </div>
                        <div className="delete">
                            <button>
                                <h1>-</h1>
                            </button>
                        </div>
                    </div>
        </div>
    
    </> );
}

export default CartItem;


