import { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useAppContext } from './AppContext.jsx';
import { useAuth0 } from "@auth0/auth0-react";
import {NavLink} from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Navbar({scrollToTop, scrollToCardGroup, scrollToContactForm}) {
    const { cart, updateCartQuantity, removeProductFromCart, logout, user, isAuthenticated } = useAppContext();
    const [open, setOpen] = useState(false);
    const { loginWithRedirect } = useAuth0();

    const incrementQuantity = (productId) => {
        const product = cart.find((item) => item.id === productId);
        if (product) {
            updateCartQuantity(productId, product.quantity + 1);
        }
    };

    const decrementQuantity = (productId) => {
        const product = cart.find((item) => item.id === productId);
        if (product && product.quantity > 1) {
            updateCartQuantity(productId, product.quantity - 1);
        }
    };

    const subtotal = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

    const handleCartClick = () => {
        setOpen(true);
    };

    return (
        <div className="navbar bg-white px-4 md:px-8 lg:px-24 fixed z-10 w-full">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className=" lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink>Home</NavLink>
                        <NavLink>Coupons</NavLink>
                        <NavLink>Contact</NavLink>
                    </ul>
                </div>
                <NavLink onClick={scrollToTop} className="font-bold text-black text-2xl">CouponSell</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu text-black text-[17px] font-semibold gap-x-10 menu-horizontal px-1">
                    <NavLink onClick={scrollToTop}>Home</NavLink>
                    <NavLink onClick={scrollToCardGroup}>Coupons</NavLink>
                    <NavLink onClick={scrollToContactForm}>Contact</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex gap-x-4">
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle"
                            onClick={handleCartClick}
                        >
                            <div className="indicator">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-7 w-7 mr-2 text-gray-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="badge badge-sm indicator-item mr-2 border-primary text-white h-4">{cart.length}</span>
                            </div>
                        </div>
                        <Dialog open={open} onClose={setOpen} className="relative z-10">
                            <DialogBackdrop
                                transition
                                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out"
                            />
                            <div className="fixed inset-0 overflow-hidden">
                                <div className="absolute inset-0 overflow-hidden">
                                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                        <DialogPanel
                                            transition
                                            className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out"
                                        >
                                            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                                    <div className="flex items-start justify-between">
                                                        <DialogTitle className="text-lg font-medium text-gray-900">Shopping cart</DialogTitle>
                                                        <div className="ml-3 flex h-7 items-center">
                                                            <button
                                                                type="button"
                                                                onClick={() => setOpen(false)}
                                                                className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                            >
                                                                <span className="absolute -inset-0.5" />
                                                                <span className="sr-only">Close panel</span>
                                                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="mt-8">
                                                        <div className="flow-root">
                                                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                                {cart.map((product) => (
                                                                    <li key={product.id} className="flex py-6">
                                                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                            <img
                                                                                alt={product.imageAlt}
                                                                                src={product.imageSrc}
                                                                                className="h-full w-full object-cover object-center"
                                                                            />
                                                                        </div>
                                                                        <div className="ml-4 flex flex-1 flex-col">
                                                                            <div>
                                                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                                                    <h3>
                                                                                        <NavLink href={product.href}>{product.name}</NavLink>
                                                                                    </h3>
                                                                                    <p className="ml-4">${product.price}</p>
                                                                                </div>
                                                                                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                                                            </div>
                                                                            <div className="flex flex-1 items-end justify-between mt-3 text-sm">
                                                                                <div className="flex items-center space-x-2">
                                                                                    <button
                                                                                        type="button"
                                                                                        onClick={() => decrementQuantity(product.id)}
                                                                                        className="bg-gray-200 rounded-md px-2 py-1 text-gray-600 hover:bg-gray-300"
                                                                                    >
                                                                                        -
                                                                                    </button>
                                                                                    <span className="text-gray-900">{product.quantity}</span>
                                                                                    <button
                                                                                        type="button"
                                                                                        onClick={() => incrementQuantity(product.id)}
                                                                                        className="bg-gray-200 rounded-md px-2 py-1 text-gray-600 hover:bg-gray-300"
                                                                                    >
                                                                                        +
                                                                                    </button>
                                                                                </div>
                                                                                <button
                                                                                    type="button"
                                                                                    onClick={() => removeProductFromCart(product.id)}
                                                                                    className="font-medium text-red-600 hover:text-red-500"
                                                                                >
                                                                                    Remove
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                        <p>Subtotal</p>
                                                        <p>${subtotal.toFixed(2)}</p>
                                                    </div>
                                                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                                    <div className="mt-6">
                                                        <NavLink
                                                            to="/Payment"
                                                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                                        >
                                                            Checkout
                                                        </NavLink>
                                                    </div>
                                                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                        <p>
                                                            or{' '}
                                                            <button
                                                                type="button"
                                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                onClick={() => setOpen(false)}
                                                            >
                                                                Continue Shopping<span aria-hidden="true"> &rarr;</span>
                                                            </button>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </DialogPanel>
                                    </div>
                                </div>
                            </div>
                        </Dialog>
                    </div>
                    {isAuthenticated ? (
                        <div className="flex items-center space-x-4">
                            <span className="font-semibold text-gray-900">{user.name}</span>
                            <button className="btn text-[18px] px-6" onClick={() => logout({ returnTo: window.location.origin })}>
                                Log Out
                            </button>
                        </div>
                    ) : (
                        <button className="btn text-[18px] px-6" onClick={() => loginWithRedirect()}>
                            Log In
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
