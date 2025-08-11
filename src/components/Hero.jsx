import React from "react";
import heroImage from "../assets/images/hero_image.png";
const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#0A0A0A] overflow-hidden">
      <div className="w-full mx-auto relative bg-[#0A0A0A] py-12 lg:py-16">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-gray-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-gray-900/20 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="w-[90%] md:w-[80%] mx-auto h-full flex flex-col lg:flex-row justify-between items-center relative z-10 gap-8 lg:gap-4">
          {/* Text Content */}
          <div className="h-full lg:w-[50%] w-full mt-20 md:mt-3 text-white flex flex-col gap-4 justify-center">
            <h1 className="xl:text-6xl lg:text-5xl md:text-5xl text-4xl font-semibold text-white">
              Hi there, I am
            </h1>
            <h1 className="xl:text-6xl lg:text-5xl md:text-5xl text-4xl font-semibold text-white">
              Ikenna Nwachukwu
            </h1>

            <p className="lg:text-2xl sm:text-xl text-lg lg:my-6 my-2 text-gray-400 leading-relaxed">
              A visionary leader dedicated to promoting community wellness,
              cultural inclusion, and social empowerment. Bridging cultures and
              creating platforms where people from all walks of life can
              connect, thrive, and be celebrated.
            </p>

            {/* Buttons */}
            <div className="flex sm:flex-row flex-col gap-4 lg:mt-4 mt-2">
              <a
                href="mailto:Ikenna.n@afrosocialite.com"
                className="md:px-8 px-4 md:py-4 py-2 md:text-lg text-base font-medium bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-center"
              >
                Contact Me
              </a>
              <button
                onClick={scrollToAbout}
                className="md:px-8 px-4 md:py-4 py-2 md:text-lg text-base font-medium border border-gray-700 text-white rounded-lg hover:border-gray-600 transition-colors duration-300"
              >
                About Me
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:w-[45%] md:w-[60%] w-[80%] max-w-md lg:max-w-none">
            <div className="absolute -top-4 -right-4 w-full h-full bg-gray-900/20 rounded-lg blur-xl"></div>
            <div className="relative">
              <div className="w-full aspect-[4/5] rounded-lg overflow-hidden border border-gray-800/50 bg-[#111111]">
                <img
                  src={heroImage}
                  alt="Ikenna Nwachukwu"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              <div className="absolute inset-0 border border-gray-800/50 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
