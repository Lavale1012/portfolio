const Contacts = () => {
  return (
    <div id="Contact" className="flex min-h-[70vh] items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <h1 className=" text-center text-5xl md:text-7xl">
          <span className=" bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text">
            Wanna get in touch?
          </span>
        </h1>
        <p className=" text-center text-lg font-semibold text-gray-500">
          Want to chat? Send me an E-mail through this button and I'll respond
        </p>
        <a
          href="mailto:Lavale889@gmail.com"
          className=" text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Contacts;
