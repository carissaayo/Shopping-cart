import "./ProductScreen.css";
import { useGlobalContext } from '../context';

const ProductScreen = () => {

      const {addToCart} = useGlobalContext()

  return (
    <div className="productscreen">
      <div className="productscreen__left">
        <div className="left_image">
          <img src="/images/iphone12.jpg" alt="product name" />
        </div>
        <div className="left__info">
          <p className="left__name">Product</p>
          <p>Price:$400</p>
          <p>
            Description: Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Exercitationem ipsa voluptates vero? Voluptatum quidem
            delectus culpa optio explicabo, dolorem hic deserunt, accusamus
            quisquam repudiandae nihil consequuntur modi numquam saepe
            molestias!
          </p>
        </div>
      </div>
      <div className="productscreen__right">
        <div className="right__info">
          <p>
            Price: <span>$400</span>
          </p>
          <p>
            Status: <span>In Stock</span>
          </p>
          <p>
            Qty
            <select name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p><button type="button" onClick={addToCart}>Add To Cart</button></p>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
