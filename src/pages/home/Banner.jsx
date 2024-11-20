import { Carousel } from "@material-tailwind/react";

function Banner() {
  const images = [
    {
      id: 1,
      url: "https://i.ibb.co.com/6v92Sw0/Urgent-Support-Needed-for-Palestinian-Families-Act-Now-copy-100.jpg",
    },
    {
      id: 2,
      url: "https://i.ibb.co.com/D5yD7gK/Urgent-Relief-general-without-text-1-100.jpg",
    },
    {
      id: 3,
      url: "https://i.ibb.co.com/12HKt2h/Capsssture.png",
    },
  ];
  return (
    <div className="relative">
      <Carousel
        className="rounded-xl 2xl:h-[550px] lg:h-[520px] md:h-[470px] h-[520px] "
        navigation={({ setActiveIndex, activeIndex, length }) => {
          return (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          );
        }}
      >
        {images.map((img) => (
          <img
            key={img.id}
            src={img.url}
            alt={`image ${img.id}`}
            className="h-full w-full object-cover brightness-50"
          />
        ))}
      </Carousel>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-30">
        <h1 className="animate__animated animate__fadeInUp text-center lg:text-6xl md:text-5xl text-4xl  font-semibold text-white/90 my-4">
          Winter{" "}
          <span className="text-myPrimary relative before:contents-[''] before:h-1 before:w-10 before:bg-myPrimary before:absolute before:bottom-0 before:left-0">
            Warmth
          </span>{" "}
          Drive
        </h1>

        <p className="md:text-xl lg text-center text-white/80 animate__animated animate__fadeInUp delay-100">
          Providing warmth, confidence, and hope through basic need programs
          that connect under resourced kids to community resources needed to
          thrive
        </p>
      </div>
    </div>
  );
}

export default Banner;
