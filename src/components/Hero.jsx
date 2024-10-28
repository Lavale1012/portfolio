import image from "/public/profile.jpeg";

const Hero = () => {
  return (
    <div
      id="home"
      className=" px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32 "
    >
      <div className="flex flex-col justify-center items-center gap-10 text-white">
        <img
          src={image}
          alt=""
          className=" w-[300px] h-[300px] rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600"
        />
      </div>
    </div>
  );
};

export default Hero;
