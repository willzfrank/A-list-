import styles from '../../styles/Navbar.module.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.navTop}>
        <p>
          BLACK FRIDAY DEALS FROM $25.{' '}
          <span className={styles.navDealsButton}>VIEW DEALS</span>
        </p>
      </div>

      <div className={styles.navBottom}>
        <div>A-List</div>
        <div className={styles.navInputContainer}>
          <ul className={styles.navBottomList}>
            <li className={styles.navBottomListContent}>
              Store{' '}
              <KeyboardArrowDownIcon className={styles.navBottomListicon} />
            </li>
            <li className={styles.navBottomListContent}>
              Track Order{' '}
              <KeyboardArrowDownIcon className={styles.navBottomListicon} />
            </li>
            <li className={styles.navBottomListContent}>
              Help Centre{' '}
              <KeyboardArrowDownIcon className={styles.navBottomListicon} />
            </li>
          </ul>
          <div className={styles.navInputProfileContainer}>
            <SearchIcon />
            <FavoriteIcon />
            <PersonIcon />
            <ShoppingCartIcon />
          </div>
        </div>
        {/* <div >
          <a href="#">REGISTER</a>
          <a href="#">LOGIN</a>
          <div className={styles.ShoppingCartContainer}>
            <ShoppingCartIcon className={styles.ShoppingCartIcon} />
            <span className={styles.ShoppingCounter}>0</span>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
