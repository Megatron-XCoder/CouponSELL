import { Carousel } from "flowbite-react";

function CarouselSlider() {
    return (
        <div className="h-56 sm:h-64 xl:h-96 2xl:h-90 px-10 py-8 bg-base-100 pt-24">
            <Carousel pauseOnHover>
                <img className="object-fill h-96 w-[70em]" src="https://www.shutterstock.com/image-vector/3d-yellow-great-discount-sale-260nw-2056851839.jpg" alt="Decorative image 1" />
                <img className="object-fill h-96 w-[60em]" src="https://i.ytimg.com/vi/L2X3fYVw1G0/hqdefault.jpg" alt="Decorative image 5" />
                <img className="object-fill h-96 w-[60em]" src="https://premiumdada.com/wp-content/uploads/2022/08/Linkedin-Premium-6-Month.jpg" alt="Decorative image 4" />
                <img className="object-fill h-96 w-[70em]" src="https://cdn.prod.website-files.com/605826c62e8de87de744596e/6304972b0f458d536743e9d9_reebok.jpg" alt="Decorative image 2" />
                <img className="object-fill h-80 w-[70em]" src="https://topdogsocialmedia.com/wp-content/uploads/2019/04/LinkedIn-Premium-Benefits-2048x1099-1.jpg" alt="Decorative image 3" />
            </Carousel>
        </div>
    );
}

export default CarouselSlider;
