import Navbar from '../../component/navbar/Navbar';

const Register = () => {
  return (
    <div>
      <Navbar />
      <div>
        <input type="text" name="" id="" placeholder="username" />
        <input type="email" name="" id="" placeholder="email" />
        <input type="password" name="" id="" placeholder="password" />
        <input type="button" value="REGISTER" />
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

export default Register;
