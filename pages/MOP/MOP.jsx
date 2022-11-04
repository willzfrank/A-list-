import Navbar from '../../component/navbar/Navbar';

const MOP = () => {
  return (
    <div>
      <Navbar />
      <div className="mop">
        <h3>SELECT PAYMENT METHOD</h3>
        <div>
          <p>PayPal or Credit Card</p>
        </div>
        <button>CONTINUE</button>
      </div>
    </div>
  );
};

export default MOP;
