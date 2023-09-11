import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Navigation, Pagination, Autoplay } from "swiper";
const ClineReviwe = () => {
  return (
    <section className="py-20 text-black ">
      <div className="text-center">
        <h1 className="text-3xl">Clients <span className="text-green-600">Feedback</span></h1>
      </div>


      <div className="flex max-w-6xl px-5 mx-auto items-center relative justify-center mt-9">
        <div className="lg:w-2/3 w-full">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{ 768: { slidesPerView: 2 } }}
            autoplay={{ delay: 2000 }}
            loop={true}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="h-fit w-full p-4 bg-slate-700 rounded-xl flex items-center justify-center flex-col border-2 cursor-wait">
                <img
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8mEIWZjRFdiO4YIkq790lTaNzTtCH6DcwrQ&usqp=CAU"
                  }
                  alt=""
                  className="rounded-full h-20 w-20"
                />
                <h3 className="text-xl my-4">Name</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Doloribus sunt ex iure vero ut reiciendis beatae soluta magni
                  impedit eaque!
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ClineReviwe;
