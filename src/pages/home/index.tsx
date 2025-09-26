import MyImage from "@/assets/pic.jpg";

export const Home = () => {
  return (
    <div className="h-screen w-full flex flex-col-2 justify-center space-x-12 items-center p-26">
      <div>
        <h1 className="text-black dark:text-white ml-50">Hello</h1>
        <h2 className="mt-10 ml-15 an">
          My name is Hean Kimleng. I'm Full Stack Developer
        </h2>
        <h2>
          who enjoys turning ideas into functional and user-friendly
          applications.
        </h2>
        <div className="mt-10 ml-50">
          <style>{`
                  .button-wrapper::before {
                      animation: spin-gradient 4s linear infinite;
                  }
              
                  @keyframes spin-gradient {
                      from {
                          transform: rotate(0deg);
                      }
              
                      to {
                          transform: rotate(360deg);
                      }
                  }
              `}</style>
          <div className="relative inline-block p-0.5 rounded-full overflow-hidden hover:scale-105 transition duration-300 active:scale-100 before:content-[''] before:absolute before:inset-0 before:bg-[conic-gradient(from_0deg,_#00F5FF,_#00F5FF30,_#00F5FF)] button-wrapper">
            <a 
               download href="/public/Hean kimleng_CV.pdf"
            >
              <button className="relative z-10 bg-gray-800 text-white rounded-full px-8 py-3 font-medium text-sm">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
      <div>
        <img src={MyImage} alt="profile" className=" w-100 h-120 rounded-3xl mb-20" />
      </div>
    </div>
  );
};
export default Home;
