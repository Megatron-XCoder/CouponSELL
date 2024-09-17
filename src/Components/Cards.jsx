import { useState, useEffect } from 'react';
import { useAppContext } from './AppContext.jsx';

// eslint-disable-next-line react/prop-types
function Cards({ product }) {
    const { addToCart, removeFromCart, cart } = useAppContext();
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        // eslint-disable-next-line react/prop-types
        const cartItem = cart.find((item) => item.id === product.id);
        if (cartItem) {
            setQuantity(cartItem.quantity);
        } else {
            setQuantity(0);
        }
        // eslint-disable-next-line react/prop-types
    }, [cart, product.id]);

    const handleAddToCart = () => {
        const newQuantity = 1;
        setQuantity(newQuantity);
        addToCart({ ...product, quantity: newQuantity });
    };

    const incrementQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        addToCart({ ...product, quantity: newQuantity });
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            addToCart({ ...product, quantity: newQuantity });
        } else if (quantity === 1) {
            setQuantity(0);
            // eslint-disable-next-line react/prop-types
            removeFromCart(product.id);
        }
    };

    return (
        <div className="card bg-base-100 w-full sm:w-80 shadow-xl m-4 text-white">
            <figure>
                <img
                    /* eslint-disable-next-line react/prop-types */
                    src={product.imageSrc}
                    /* eslint-disable-next-line react/prop-types */
                    alt={product.imageAlt}
                    className="w-full h-auto" />
            </figure>
            <div className="card-body">
                {/* eslint-disable-next-line react/prop-types */}
                <h2 className="card-title text-xl font-bold sm:text-2xl">{product.name}</h2>
                {/* eslint-disable-next-line react/prop-types */}
                <p className="text-sm text-gray-400 sm:text-base">{product.description}</p>
                {/* eslint-disable-next-line react/prop-types */}
                <h2 className="card-title text-xl font-bold sm:text-2xl">Requirements :</h2>
                {/* eslint-disable-next-line react/prop-types */}
                <p className="text-sm text-gray-400 mb-4 sm:text-base">Your account can’t have a current active subscription when activating.</p>
                <div className="card-actions justify-between items-center">
                    {/* eslint-disable-next-line react/prop-types */}
                    <div className="text-lg font-semibold">${product.price}</div>
                    {quantity === 0 ? (
                        <button
                            className="btn btn-primary text-[13px] sm:text-[15px]"
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </button>
                    ) : (
                        <div className="flex items-center space-x-2">
                            <button
                                className="btn btn-outline btn-primary text-[13px] sm:text-[15px]"
                                onClick={decrementQuantity}
                            >
                                -
                            </button>
                            <span className="text-[13px] sm:text-[15px]">{quantity}</span>
                            <button
                                className="btn btn-outline btn-primary text-[13px] sm:text-[15px]"
                                onClick={incrementQuantity}
                            >
                                +
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Cards;
