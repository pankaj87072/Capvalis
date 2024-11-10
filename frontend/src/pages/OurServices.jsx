import React, { useState } from 'react';
import { 
  LineChart, 
  TrendingUp, 
  BookOpen, 
  Users, 
  Shield, 
  Award,
  ArrowRight,
  CheckCircle 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OurServices = () => {
  const navigate=useNavigate();
  const [activeService, setActiveService] = useState(null);
  
  const services = [
    {
      id: 1,
      icon: <LineChart className="w-6 h-6" />,
      title: "Trading View Indicator",
      description: "Advanced technical and fundamental analysis of global markets",
      features: [
        "Real-time market insights",
        "Technical analysis tools",
        "Market sentiment indicators",
        "Economic calendar"
      ],
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      icon: <TrendingUp className="w-6 h-6" />,
      title: "WhatsApp",
      description: "Premium trading signals with high accuracy rates",
      features: [
        "24/7 signal alerts",
        "Multi-market coverage",
        "Risk management advice",
        "Entry/Exit points"
      ],
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 3,
      icon: <BookOpen className="w-6 h-6" />,
      title: "Coming Soon...",
      description: "Premium trading signals with high accuracy rates",
      features: [
        "24/7 signal alerts",
        "Multi-market coverage",
        "Risk management advice",
        "Entry/Exit points"
      ],
      color: "from-green-500 to-emerald-600"
    }
  ];
  const handlebuyclick=(service)=>{
    navigate('/Plans', {state: { 
    servicetitle:service.title,
    }} );
  }
  const stats = [
    { icon: <Shield className="w-6 h-6" />, value: "99.9%", label: "Uptime" },
    { icon: <Users className="w-6 h-6" />, value: "0K+", label: "Active Users" },
    { icon: <Award className="w-6 h-6" />, value: "90%", label: "Success Rate" }
  ];
  const handlewhatsappredirect=()=>{
    console.log("redirecting to whatsapp....");
  }
 
  return (
    <div className="min-h-[60vh] w-full bg-black p-6 overflow-hidden">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Our Services
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Comprehensive trading solutions designed to enhance your trading experience and maximize your potential
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-4 mb-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative group"
            onMouseEnter={() => setActiveService(service.id)}
            onMouseLeave={() => setActiveService(null)}
          >
            <div className={`h-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6
                          transition-all duration-300 hover:transform hover:-translate-y-2
                          ${activeService === service.id ? 'shadow-xl shadow-blue-500/20' : ''}`}>
              {/* Icon Header */}
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} 
                            flex items-center justify-center mb-4
                            transform transition-transform group-hover:scale-110`}>
                {service.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button className={`w-full py-3 px-4 rounded-lg font-medium
                               bg-gradient-to-r ${service.color} text-white
                               transition-all duration-300 hover:opacity-90
                               flex items-center justify-center gap-2`} onClick={()=>{handlebuyclick(service)}}>
                {service.title==='WhatsApp'?'Join':'Buy Now'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-800/30 rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
                <div className="text-blue-500">
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-3xl -z-10" />
    </div>
  );
};

export default OurServices;