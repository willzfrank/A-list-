import Navbar from '../../component/navbar/Navbar';

const Delivery = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h2>DELIVERY ADDRESS</h2>
        <input type="text" name="" id="" placeholder="Enter address" />
        <input type="textl" name="" id="" placeholder="Enter city" />
        <input type="text" name="" id="" placeholder="Enter postal code" />
        <input type="text" name="" id="" placeholder="Country" />
        <input type="button" value="Continue" />
        <p>
          I have an account{' '}
          <b>
            <a href="#">Login</a>
          </b>
        </p>
      </div>
    </div>
  );
};

export default Delivery;
