import Navbar from '../../component/navbar/Navbar';

const Cart = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div>
          {' '}
          <div className="cart--cart--total--header">
            Total Cart Products(1)
          </div>
          <div>
            <img src="" alt="" />
            <p>Best waterproof shoe for hiking</p>
            <div className="subtotal--container">
              <div className="quantity">
                <p>QUANTITY</p>
                <select name="" id=""></select>
              </div>
              <div className="subtotal">
                <p>SUBTOTAL</p>
                <p>$789</p>
              </div>
            </div>
          </div>
        </div>
        <p>TOTAL:$789.00</p>
      </div>
      <div className="cart--footer">
        <button>continued shopping</button>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
