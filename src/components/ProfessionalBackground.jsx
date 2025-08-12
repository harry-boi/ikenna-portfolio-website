import React from "react";

const ProfessionalBackground = () => {
  const education = [
    {
      degree: "Master's in Business Information Systems",
      institution: "Torrens University Australia",
      icon: "🎓",
    },
    {
      degree: "Bachelor's degree in Computer Science",
      institution: "Torrens University Australia",
      icon: "💻",
    },
    {
      degree: "Bachelor's degree in Information Technology",
      institution: "Torrens University Australia",
      icon: "🔧",
    },
  ];

  const expertise = [
    "Business Analysis",
    "IT Systems",
    "Digital Marketing",
    "Content Creation",
    "Community Service",
    "Strategic Business Development",
  ];

  const countries = [
    {
      name: "Nigeria",
      flag: "🇳🇬",
      description: "Cultural roots and early experience",
    },
    {
      name: "Singapore",
      flag: "🇸🇬",
      description: "Gateway to Asia and global networking",
    },
    {
      name: "Turkey",
      flag: "🇹🇷",
      description: "International exposure and growth",
    },
    {
      name: "Dubai",
      flag: "AE",
      description: "International exposure and growth",
    },
    {
      name: "Thailand",
      flag: "🇹🇭",
      description: "Cultural immersion and creative inspiration",
    },
    {
      name: "Australia",
      flag: "🇦🇺",
      description: "Current home and business focus",
    },
  ];

  return (
    <section
      id="background"
      className="py-20 lg:py-32 bg-[#0A0A0A] relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-gray-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-gray-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Professional Background & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive foundation in technology, business, and
            international experience
          </p>
          <div className="w-20 h-[1px] bg-gray-700 mx-auto mt-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                <span className="text-3xl mr-4 p-2 bg-[#111111] rounded-lg border border-gray-800/50">
                  🎓
                </span>
                Educational Foundation
              </h3>
              <div className="space-y-6">
                {education.map((item, index) => (
                  <div
                    key={index}
                    className="group bg-[#111111] p-6 rounded-lg border border-gray-800/50 hover:border-gray-700 transition-all duration-500"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-lg mb-2 group-hover:text-gray-200 transition-colors">
                          {item.degree}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {item.institution}
                        </p>
                      </div>
                      <div className="text-2xl opacity-70 group-hover:opacity-100 transition-opacity">
                        {item.icon}
                      </div>
                    </div>
                    <div className="h-[1px] bg-gray-800 w-full mt-6 group-hover:bg-gray-700 transition-colors duration-300"></div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                <span className="text-3xl mr-4 p-2 bg-[#111111] rounded-lg border border-gray-800/50">
                  ⚡
                </span>
                Professional Expertise
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {expertise.map((skill, index) => (
                  <div
                    key={index}
                    className="group bg-[#111111] px-4 py-4 rounded-lg text-center border border-gray-800/50 hover:border-gray-700 transition-all duration-300"
                  >
                    <span className="font-medium text-sm text-gray-400 group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <span className="text-3xl mr-4 p-2 bg-[#111111] rounded-lg border border-gray-800/50">
                🌍
              </span>
              Global Experience
            </h3>

            <div className="space-y-8">
              {countries.map((country, index) => (
                <div key={index} className="relative group">
                  {index < countries.length - 1 && (
                    <div className="absolute left-8 top-16 w-[1px] h-20 bg-gray-800"></div>
                  )}

                  <div className="flex items-start space-x-6 p-1">
                    <div className="relative">
                      <div className="w-16 h-16 text-gray-400 bg-[#111111] rounded-lg flex items-center justify-center text-2xl border border-gray-800/50 group-hover:border-gray-700 transition-all duration-300">
                        {country.flag}
                      </div>
                    </div>

                    <div className="flex-1 pt-2">
                      <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-200 transition-colors">
                        {country.name}
                      </h4>
                      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                        {country.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#111111] p-8 rounded-lg border border-gray-800/50">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <span className="w-2 h-2 bg-gray-700 rounded-full mr-3"></span>
                Cultural Intelligence
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Having lived and worked across different continents, Ikenna has
                gained cultural intelligence and cross-cultural communication
                skills that enable him to engage diverse audiences effectively.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <div className="relative bg-[#111111] rounded-lg p-8 lg:p-12 border border-gray-800/50 overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-semibold mb-6 text-white">
                Building a Strong Personal Brand
              </h3>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
                Ikenna has worked with various organizations across multiple
                countries, contributing to youth support services, digital media
                projects, and strategic business development, while building a
                strong personal brand as a connector and community advocate.
              </p>
              <a
                href="https://www.linkedin.com/in/nwachukwu-ikenna-k/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-8 py-4 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                <span>Connect on LinkedIn</span>
                <svg
                  className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalBackground;
