import React from 'react';
import { Instagram, Send, MessageCircle } from 'lucide-react';

const SocialMedia = () => {
  const socialPlatforms = [
    {
      name: 'Instagram',
      icon: <Instagram className="w-12 h-12" />,
      color: 'from-pink-500 via-purple-500 to-indigo-500',
      handle: '@yourcompany',
      followers: '10.5K',
      engagement: '25%',
      description: 'Follow us for daily market insights and trading tips'
    },
    {
      name: 'Telegram',
      icon: <Send className="w-12 h-12" />,
      color: 'from-blue-400 via-blue-500 to-blue-600',
      handle: 't.me/yourcompany',
      members: '5.2K',
      activity: 'Very Active',
      description: 'Join our community for real-time market updates'
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-12 h-12" />,
      color: 'from-green-400 via-green-500 to-green-600',
      handle: '+1 (234) 567-8900',
      response: '< 30 mins',
      status: 'Online',
      description: 'Direct support and personalized trading assistance'
    }
  ];

  return (
    <div className="min-h-[60vh] w-full bg-gradient-to-b from-gray-900 to-black p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Connect With Us
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with market trends, receive instant support, and join our growing community across all social platforms
          </p>
        </div>

        {/* Social Media Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialPlatforms.map((platform) => (
            <div
              key={platform.name}
              className="relative group"
            >
              {/* Card */}
              <div className="h-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 
                            transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl 
                            hover:shadow-blue-500/20">
                {/* Platform Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${platform.color} 
                                  transform transition-transform group-hover:scale-110`}>
                      {platform.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{platform.name}</h3>
                      <p className="text-gray-400">{platform.handle}</p>
                    </div>
                  </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-900/50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-white">
                      {platform.followers || platform.members}
                    </div>
                    <div className="text-sm text-gray-400">
                      {platform.name === 'WhatsApp' ? 'Active Users' : 'Followers'}
                    </div>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-white">
                      {platform.engagement || platform.activity || platform.response}
                    </div>
                    <div className="text-sm text-gray-400">
                      {platform.name === 'WhatsApp' ? 'Response Time' : 'Engagement'}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-6">
                  {platform.description}
                </p>

                {/* Action Button */}
                <button className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300
                                 bg-gradient-to-r ${platform.color} text-white
                                 hover:opacity-90 hover:shadow-lg`}>
                  {platform.name === 'WhatsApp' ? 'Message Us' : 
                   platform.name === 'Telegram' ? 'Join Channel' : 'Follow Us'}
                </button>

                {/* Status Indicator */}
                {platform.name === 'WhatsApp' && platform.status === 'Online' && (
                  <div className="absolute top-6 right-6 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-400">Online</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800/30 rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400">Support Available</div>
          </div>
          <div className="bg-gray-800/30 rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-white mb-2">100K+</div>
            <div className="text-gray-400">Community Members</div>
          </div>
          <div className="bg-gray-800/30 rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-white mb-2">5 min</div>
            <div className="text-gray-400">Average Response Time</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;