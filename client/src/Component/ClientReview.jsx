import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Navigation, Pagination, Autoplay } from "swiper";
import { useState } from "react";
import { useEffect } from "react";
import People from "./People";

const ClineReviwe = () => {
  const [reviwe, setReviwe] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/feedbacks')
      .then(res => res.json())
      .then(data => setReviwe(data))
  }, [])



  return (
    <section className="py-20 text-black">
      {reviwe.length > 0 && <div className="text-center">
        <h1 className="text-3xl">Clients <span className="text-green-600">Feedback</span></h1>
      </div>}

      {/* TODO: not delete this */}

      <div className="flex max-w-6xl px-5 mx-auto items-center relative justify-center mt-9 ">
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
            {
              reviwe && reviwe.map((data, i) => <SwiperSlide key={i}>
                <People data={data} />
              </SwiperSlide>)
            }
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ClineReviwe;
