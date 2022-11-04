import Image from 'next/image';
import styles from '../../styles/Items.module.css';
import image from '../../assets/avatar3.png';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
const Items = () => {
  return (
    <div className={styles.ItemContainer}>
      <Image
        src={image}
        alt=""
        max-width="100%"
        height={250}
        objectFit="contain"
      />
      <div className={styles.ItemContent}>
        <p>Best waterproof shoe for hiking</p>
        <div className={styles.ItemStarContainer}>
          <div>
            <StarIcon className={styles.StarOutlineIcon} />
            <StarIcon className={styles.StarOutlineIcon} />
            <StarIcon className={styles.StarOutlineIcon} />
            <StarHalfIcon className={styles.StarOutlineIcon} />
            <StarOutlineIcon />
          </div>
          <p className={styles.ItemStarReview}>102 reviews</p>
        </div>
        <h3 className={styles.ItemPrice}>$789</h3>
      </div>
    </div>
  );
};

export default Items;
