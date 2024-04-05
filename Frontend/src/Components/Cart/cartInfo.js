function CartInfo(props) {
    const cart = useRecoilValue(cartState);
    const total = useRecoilValue(cartTotal); // 1. Read selector value
  
    return (
      <div>
        <h2>Cart info:</h2>
  
        <ul className="cart-items">
          {cart.map(item => (
            <li key={item.id}>{item.product.title}: {item.quantity}</li>
          ))}
        </ul>
  
        {/* 2. Render it! Sweeeeet! 😍 */}
        <h4>Total: {total} VND</h4>
      </div>
    );
  }
  