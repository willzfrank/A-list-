import Navbar from '../../component/navbar/Navbar';

const Login = () => {
  return (
    <div>
      <Navbar />
      <div>
        <input type="email" name="" id="" placeholder="email" />
        <input type="password" name="" id="" placeholder="password" />
        <input type="button" value="LOGIN" />
        <p>
          <b>
            <a href="#">Create Account</a>
          </b>
        </p>
      </div>
    </div>
  );
};

export default Login;
