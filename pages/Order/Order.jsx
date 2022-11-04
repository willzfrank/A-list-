import Navbar from '../../component/navbar/Navbar';

const Order = () => {
  return (
    <div>
      <Navbar />
      <div className="order--top">
        <div>
          <div> icon</div>
          <div>
            <h4>Customer</h4>
            <p>willz</p>
            <p>willzudoh4@gmail.com</p>
          </div>
        </div>
        <div>
          <div> icon</div>
          <div>
            <h4>Order info</h4>
            <p>Shipping: Nigeria</p>
            <p>Pay method: PayPal</p>
          </div>
        </div>
        <div>
          <div> icon</div>
          <div>
            <h4>Deliver to</h4>
            <p>
              Address: Lagos, House 13, Angel Close /canal close off
              Townsplanning Shagari estate, Ipaja, Lagos., 100278
            </p>
          </div>
        </div>
      </div>
      <div className="order--bottom">
        <img src="" alt="" />
        <p>Best waterproof shoe for hiking</p>
        <div>
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
        <div>
          <div>
            <p>products</p>
            <p>$789.00</p>
          </div>
          <div>
            <p>Shipping</p>
            <p>$0.00</p>
          </div>
          <div>
            <p>Tax</p>
            <p>$118.35</p>
          </div>
          <div>
            <p>Total</p>
            <p>$907.35</p>
          </div>
          <button>place order</button>
        </div>
      </div>
      <p>TOTAL:$789.00</p>
    </div>
  );
};

export default Order;
