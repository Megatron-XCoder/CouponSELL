import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    const testimonials = [
        {
            name: "Kenzie Edgar",
            img: "https://i.pravatar.cc/100?img=1",
            text: "I saved so much money using these coupons! Highly recommend to everyone looking to get the best deals.",
        },
        {
            name: "Stevie Tifft",
            img: "https://i.pravatar.cc/100?img=2",
            text: "A fantastic service with incredible discounts. I never shop without checking for coupons here first!",
        },
        {
            name: "Tommie Ewart",
            img: "https://i.pravatar.cc/100?img=3",
            text: "The best site for finding great deals on all my favorite stores. The coupons always work!",
        },
        {
            name: "Charlie Howse",
            img: "https://i.pravatar.cc/100?img=4",
            text: "Super easy to use and always has the latest coupons. I've saved a ton of money!",
        },
        {
            name: "Nevada Herbertson",
            img: "https://i.pravatar.cc/100?img=5",
            text: "I love this site! It has helped me save so much on everyday purchases. Definitely a must-visit for all shoppers.",
        },
        {
            name: "Kris Stanton",
            img: "https://i.pravatar.cc/100?img=6",
            text: "Great selection of coupons and discounts. I always find what I'm looking for. Highly recommended!",
        },
    ];

    return (
        <>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')"
                }}
            />
            <div className=" bg-base-500 flex items-center justify-center">
                <div className="w-full bg-base- border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
                    <div className="w-full max-w-6xl mx-auto">
                        <div className="text-center max-w-xl mx-auto">
                            <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-500">
                                What people <br />
                                are saying.
                            </h1>
                            <h3 className="text-2xl mb-5 text-white font-light">
                                See how much our users are saving with our coupons.
                            </h3>
                            <div className="text-center mb-10">
                                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1" />
                                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1" />
                                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500" />
                                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1" />
                                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1" />
                            </div>
                        </div>
                        <Slider {...settings}>
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="px-3">
                                    <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                        <div className="w-full flex mb-4 items-center">
                                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                <img src={testimonial.img} alt={testimonial.name} />
                                            </div>
                                            <div className="flex-grow pl-3">
                                                <h6 className="font-bold text-sm uppercase text-gray-600">
                                                    {testimonial.name}
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <p className="text-sm leading-tight">
                        <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                          &quot;
                        </span>
                                                {testimonial.text}
                                                <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                          &quot;
                        </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonials;
