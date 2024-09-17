import Cards from "./Cards.jsx";

const products = [
    {
        id: 1,
        name: 'LinkedIn Premium (6 Months)',
        href: '#',
        color: 'Blue',
        price: 49.00,
        imageSrc: "6monthPremium.jpeg",
        imageAlt: '6Months',
        description: "Elevate your professional journey with our 6-month LinkedIn Premium subscription. Whether" +
            " you're looking to advance in your career, connect with industry leaders, or showcase your expertise," +
            " LinkedIn Premium provides the tools you need to succeed.",
    },
    {
        id: 2,
        name: 'LinkedIn Premium (12 Months)',
        href: '#',
        color: 'Gold',
        price: 99.00,
        imageSrc: "12monthPremium.png",
        imageAlt: '12Months',
        description: "Transform your career trajectory with our 12-month LinkedIn Premium subscription. Designed for" +
            " professionals committed to long-term growth and success, this package offers unparalleled access to" +
            " the tools and insights you need to thrive in today’s competitive market.",
    },
];

function CardGroup() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-4 bg-white">
            {products.map((product) => (
                <Cards key={product.id} product={product} />
            ))}
        </div>
    );
}

export default CardGroup;
