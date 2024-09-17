import { useAppContext } from '../Components/AppContext.jsx'; // Update the path as needed
import {Button} from "flowbite-react";
import emailjs from '@emailjs/browser';
import {useRef, useState} from "react";


export function PaymentPage() {
    const { cart } = useAppContext();
    const form = useRef();
    const [statusMessage, setStatusMessage] = useState('');
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);



    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_6umzolq",
                "template_t57vw51",
                form.current,{
                    publicKey: 'hdCO_Y5hgdRs82EWa',
                }
            )
            .then(
                () => {
                    setStatusMessage('Your message has been sent successfully!');
                    setShowSuccessPopup(true);
                    form.current.reset(); // Clear input fields
                    setTimeout(() => {
                        setShowSuccessPopup(false);
                    }, 3000); // Hide popup after 3 seconds
                },
                (error) => {
                    setStatusMessage('Failed to send the message. Please try again later.');
                    setShowSuccessPopup(false);
                }
            );
    };

    // Calculate total amount from cart
    const totalAmount = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

    return (
        <>
            <div className="flex justify-center items-center min-h-screen w-full">
                <section className="w-[90em] h-[40em] rounded-lg bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
                    {statusMessage && (
                        <div className="mb-8 text-center text-green-500">
                            {statusMessage}
                        </div>
                    )}
                    <form ref={form} onSubmit={sendEmail}  className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                        <ol className="items-center flex w-full max-w-2xl text-center text-sm font-medium dark:text-gray-400 sm:text-base">
                            <li className="after:border-1 flex items-center text-primary-700 after:mx-6 text-blue-500 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-blue-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
                            <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
                                <svg
                                    className="me-2 h-4 w-4 sm:h-5 sm:w-5 text-blue-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8.5 11.5L11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    />
                                </svg>
                                Cart
                            </span>
                            </li>
                            <li className="after:border-1 flex items-center text-primary-700 after:mx-6 text-blue-500 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
                            <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
                                <svg
                                    className="me-2 h-4 w-4 sm:h-5 sm:w-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8.5 11.5L11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    />
                                </svg>
                                Checkout
                            </span>
                            </li>
                            <li className="flex shrink-0 items-center">
                                <svg
                                    className="me-2 h-4 w-4 sm:h-5 sm:w-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8.5 11.5L11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    />
                                </svg>
                                Order summary
                            </li>
                        </ol>
                        <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
                            <div className="min-w-0 flex-1 space-y-8">
                                <div className="space-y-4">
                                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        Billing Details
                                    </h2>
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div>
                                            <label
                                                htmlFor="your_name"
                                                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                id="your_name"
                                                name="user_name"
                                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                                placeholder="Tony Stark"
                                                required=""
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="your_email"
                                                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Your Email
                                            </label>
                                            <input
                                                type="email"
                                                id="your_email"
                                                name="user_email"
                                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                                placeholder="name@email.com"
                                                required=""
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="your_country"
                                                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Your Country
                                            </label>
                                            <input
                                                type="text"
                                                id="your_country"
                                                name="country"
                                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                                placeholder="United States"
                                                required=""
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="your_city"
                                                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Your City
                                            </label>
                                            <input
                                                type="text"
                                                id="your_city"
                                                name="city"
                                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                                placeholder="New York"
                                                required=""
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="phone-input-3"
                                                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Phone Number
                                            </label>
                                            <div className="flex items-center">
                                                <input
                                                    type="text"
                                                    id="phone-input-3"
                                                    name="user_number"
                                                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                                    placeholder="1234567890"
                                                    required=""
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="zipcode"
                                                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Zip Code
                                            </label>
                                            <input
                                                type="text"
                                                id="zipcode"
                                                name="zipcode"
                                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                                placeholder="123456"
                                                required=""
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="address"
                                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            id="address"
                                            name="address"
                                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                            placeholder="St.434 college road, belgium..."
                                            required=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 py-[4.5em] lg:mt-0 lg:w-2/5">
                                <div className="p-4 bg-gray-100 dark:bg-gray-800">
                                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        Order Summary
                                    </h2>
                                    <div className="mt-4 space-y-4">
                                        <div className="flex justify-between text-sm font-medium text-gray-900 dark:text-white">
                                            <span>Subtotal</span>
                                            <span>${totalAmount.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm font-medium text-gray-900 dark:text-white">
                                            <span>Taxes and Charges</span>
                                            <span>$2.00</span>
                                        </div>
                                        <div className="flex justify-between text-sm font-medium text-gray-900 dark:text-white">
                                            <span>Total</span>
                                            <span>${(totalAmount + 2).toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 flex btn btn-primary items-center justify-center">
                                    <Button
                                        type="submit"
                                        className="px-6 text-white bg-primary-700 rounded-lg"
                                    >
                                        Submit Payment
                                    </Button>
                                    {showSuccessPopup && (
                                        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
                                            <div className="bg-white p-6 rounded shadow-lg">
                                                <h3 className="text-xl font-bold text-center text-green-600">Success!</h3>
                                                <p className="mt-2 text-center">Thanks for Showing Interest in our product..<br/> Owner will contact you shortly...</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </>
    );
}

export default PaymentPage;
