import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
    const form = useRef();
    const [statusMessage, setStatusMessage] = useState('');
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_6umzolq",
                "template_0vm2pe6",
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

    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-base-200 dark:text-white">
                        Contact Us
                    </h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                        Got a technical issue? Want to send feedback about a beta feature? Need
                        details about our Business plan? Let us know.
                    </p>
                    {statusMessage && (
                        <div className="mb-8 text-center text-green-500">
                            {statusMessage}
                        </div>
                    )}
                    <form ref={form} onSubmit={sendEmail} className="space-y-8">
                        <div>
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="from_name"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="Tony Stark"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="from_email"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="name@google.com"
                                required
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                            >
                                Your message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                name="message"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Leave a comment..."
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-base-300 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
                        >
                            Send message
                        </button>
                    </form>
                    {showSuccessPopup && (
                        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white p-6 rounded shadow-lg">
                                <h3 className="text-xl font-bold text-center text-green-600">Success!</h3>
                                <p className="mt-2 text-center">Your message has been sent.</p>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default ContactForm;
