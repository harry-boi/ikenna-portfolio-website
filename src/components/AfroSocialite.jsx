import React from 'react'

const AfroSocialite = () => {
  const initiatives = [
    {
      title: "The Wellness Day Initiative",
      description: "A monthly free community event promoting physical and mental wellness through group activities, yoga, games, and networking. The program actively combats loneliness, depression, and social isolation while fostering inclusion.",
      icon: "🧘",
      color: "from-green-500 to-emerald-600",
      features: ["Monthly Events", "Free Access", "Wellness Activities", "Community Building"]
    },
    {
      title: "Cultural Promotion & Engagement",
      description: "Active participation in festivals and multicultural events, such as the Adelaide Fringe Festival, distributing merchandise and sharing the organisation's mission with the public.",
      icon: "🎭",
      color: "from-purple-500 to-pink-600",
      features: ["Festival Participation", "Cultural Events", "Merchandise", "Public Outreach"]
    },
    {
      title: "Empowerment & Networking",
      description: "Providing platforms for entrepreneurs, creatives, and community leaders to connect, collaborate, and showcase their talents.",
      icon: "🤝",
      color: "from-blue-500 to-cyan-600",
      features: ["Entrepreneur Support", "Creative Platforms", "Networking Events", "Talent Showcase"]
    },
    {
      title: "Strategic Partnerships",
      description: "Collaborating with established businesses to create visibility for Afro Socialite and offer exclusive deals and special offers to Afro Socialite's premium members, strengthening both member value and partner exposure.",
      icon: "💼",
      color: "from-orange-500 to-red-600",
      features: ["Business Collaborations", "Member Benefits", "Partner Exposure", "Exclusive Deals"]
    }
  ]

  return (
    <section id="afrosocialite" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Afro Socialite Incorporated
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded as a multicultural community initiative, Afro Socialite has grown into a platform 
            known for promoting wellness, cultural engagement, and community empowerment.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Initiatives Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {initiatives.map((initiative, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              {/* Header */}
              <div className="flex items-start space-x-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${initiative.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {initiative.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {initiative.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {initiative.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2">
                {initiative.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className={`w-2 h-2 bg-gradient-to-r ${initiative.color} rounded-full`}></div>
                    <span className="text-sm text-gray-600 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Vision & Future */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-6">
            Vision for the Future
          </h3>
          <p className="text-lg text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
            Ikenna's vision for Afro Socialite extends beyond South Australia, aiming to replicate its 
            programs across other states in Australia and beyond. His belief is simple yet powerful: 
            <span className="font-semibold text-white"> when communities are connected, they are stronger.</span>
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-3">🌏</div>
              <h4 className="font-bold text-lg mb-2">National Expansion</h4>
              <p className="text-blue-100 text-sm">Replicating programs across Australian states</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-3">🚀</div>
              <h4 className="font-bold text-lg mb-2">Global Reach</h4>
              <p className="text-blue-100 text-sm">Extending impact beyond Australia</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-3">💪</div>
              <h4 className="font-bold text-lg mb-2">Stronger Communities</h4>
              <p className="text-blue-100 text-sm">Building connected, resilient societies</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join the Movement
            </h3>
            <p className="text-gray-600 mb-6">
              Be part of a community that celebrates diversity, promotes wellness, and creates lasting connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.afrosocialite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Visit Website
              </a>
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AfroSocialite
