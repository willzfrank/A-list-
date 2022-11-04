import Navbar from '../../component/navbar/Navbar';
import Review from '../../component/Review/Review';
import Image from 'next/image';

const Products = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <Image src="" alt="" width={200} height={200} />
        </div>
        <div>
          <h2>Best waterproof shoe for hiking</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div>
            <div>
              <p>Price</p>
              <p>$789</p>
            </div>
            <div>
              <p>Status</p>
              <p>In Stock</p>
            </div>
            <div>
              <p>Reviews</p>
              <span>stars</span>
              <p>102 reviews</p>
            </div>
            <div>
              <p>Quantity</p>
              <select name="" id=""></select>
            </div>
          </div>
          <button>ADD TO CART</button>
        </div>
      </div>
      <Review />
    </div>
  );
};

export default Products;
