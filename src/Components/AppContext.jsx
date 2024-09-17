import { createContext, useState, useContext, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export function AppProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const localCartData = sessionStorage.getItem("productCart");
        return localCartData ? JSON.parse(localCartData) : [];
    });

    const { isAuthenticated, user, logout } = useAuth0();

    useEffect(() => {
        sessionStorage.setItem("productCart", JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        if (!isAuthenticated) {
            sessionStorage.removeItem("productCart");
        }
    }, [isAuthenticated]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: product.quantity } : item
                );
            }
            return [...prevCart, product];
        });
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    const updateCartQuantity = (productId, quantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    const removeProductFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    return (
        <AppContext.Provider value={{ cart, setCart, addToCart, removeFromCart, updateCartQuantity, removeProductFromCart, logout, user, isAuthenticated }}>
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => useContext(AppContext);
