import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartContainer = () => {
    const { cartItems, total, amount } = useSelector((store) => store.cart);
    console.log(cartItems);
    if (amount < 1) {
        return (
            <section className="cart">
                <h2>your bag</h2>
                <h4 className="empty-cart">is currently empty</h4>
            </section>
        );
    }

    return (
        <section className="cart">
            <header>
                <h2>your bag</h2>
            </header>
            <div>
                {cartItems.map((item) => {
                    return <CartItem key={item.id} {...item} />;
                })}
            </div>
        </section>
    );
};

export default CartContainer;