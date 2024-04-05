// features/cart/component/ProductList.jsx
import {useRecoilValue, useRecoilState} from 'recoil';
import { productListState } from './productState';
import { cartState, addToCart } from './cartState';

function ProductList() {
    const productList = useRecoilValue(productListState);
    const [cart, setCart] = useRecoilState(cartState); // 1. Get recoil state
    console.log(cart)
    const handleAddToCart = (product) => {
      const newCart = addToCart(cart, product); // 2. Use helper to create a new state
      setCart(newCart); // 3. Update recoil state
    }
  
    return (
      <div>
        <h2>Product List</h2>
  
        <ul className="product-list">
          {productList.map(product => (
            <li key={product.id}>
              {product.serviceName}
  
              {/* 2. ADD THIS BUTTON */}
              <button
                style={{ marginLeft: '1rem' }}
                onClick={() => handleAddToCart(product)}
              >
                Add to cart
            </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  export default ProductList;