import React, { useState, useEffect } from 'react';
import { ChevronDown, Users, TrendingUp, Code, Shield, Target, Database, UserPlus } from 'lucide-react';

const About = () => {
    const [activeSection, setActiveSection] = useState(0);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const companyInfo = [
        {
            title: "Strong Team Driven Culture",
            description: "At CapValis, we foster a collaborative, team-driven culture where innovation and expertise thrive.",
            icon: <Users className="w-8 h-8" />
        },
        {
            title: "Trading Excellence",
            description: "Our Traders, Quants and Analysts work in a fast-paced environment, tackling complex challenges daily.",
            icon: <TrendingUp className="w-8 h-8" />
        },
        {
            title: "Technology First",
            description: "Over 40% of our workforce drives next-generation solutions in our Technology department.",
            icon: <Code className="w-8 h-8" />
        }
    ];

    const trustReasons = [
        {
            title: "Tailored Solutions",
            description: [
                "We design personalized strategies for index and stocks.",
                "Our solutions are customized to meet unique financial goals, ensuring sustainable growth."
            ],
            icon: <Target className="w-6 h-6" />,
            // stats: "94% Client Satisfaction"
        },
        {
            title: "Expert Team",
            description: [
                "Our seasoned professionals offer reliable advice",
                "Proven success through strategic, expert guidance."
            ],
            icon: <Shield className="w-6 h-6" />,
            // stats: "25+ Years Combined Experience"
        },
        {
            title: "Data Intelligence",
            description: [
                "We leverage cutting-edge financial tools.",
                "Access to real-time data provides actionable insights and helps identify the best market opportunities."
            ],
            icon: <Database className="w-6 h-6" />,
            // stats: "1M+ Data Points Analyzed Daily"
        },
        {
            title: "Client Focus",
            description: [
                "Your success is our top priority.",
                "We work closely with you, providing transparent and customized support every step of the way."
            ],
            icon: <UserPlus className="w-6 h-6" />,
            // stats: "24/7 Support Available"
        }
    ];

    return (
        <div className="bg-black text-white">
            {/* Hero Section */}
            <section className="relative py-5 flex flex-col items-center justify-center overflow-hidden bg-black">
                <div 
                    className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-black to-black"
                    style={{
                        transform: `translateY(${scrollY * 0.5}px)`,
                        opacity: 1 - scrollY / 700
                    }}
                />
                <div className="container mx-auto px-4 z-10 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-blue-500">
                        About Capvalis
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Democratizing advanced financial analysis through cutting-edge technology and intuitive design.
                    </p>
                </div>
            

            {/* Company Info Section */}
            {/* <section className="py-5 relative bg-gradient-to-b from-gray-900 to-black"> */}
                <div className="container mx-auto px-4 py-5 ">
                    <div className="grid md:grid-cols-3 gap-8">
                        {companyInfo.map((info, idx) => (
                            <div 
                                key={idx}
                                className="group relative"
                                onMouseEnter={() => setActiveSection(idx)}
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                                <div className="relative border border-gray-800 rounded-xl p-8 h-full transition-all duration-500 group-hover:-translate-y-2 bg-gradient-to-b from-gray-900/50 to-black">
                                    <div className="text-blue-500 mb-6 opacity-75 group-hover:opacity-100 transition-opacity">
                                        {info.icon}
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                                        {info.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">{info.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-5 relative bg-gradient-to-b">
                <div className="container mx-auto px-4">
                    {/* <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-blue-500">
                        Why Clients Trust Us
                    </h2> */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {trustReasons.map((reason, idx) => (
                            <div 
                                key={idx}
                                className="group relative bg-gradient-to-b from-gray-900/50 to-black backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
                            >
                                <div className="text-blue-500 mb-6">
                                    {reason.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                                    {reason.title}
                                </h3>
                                {reason.description.map((desc, index) => (
                                    <div key={index} className="flex flex-row items-start mb-3">
                                        <span className="text-blue-500 mr-2 mt-1.5">•</span>
                                        <p className="text-gray-400">{desc}</p>
                                    </div>
                                ))}
                                <div className="text-sm text-blue-400 font-medium mt-4 border-t border-gray-800 pt-4">
                                    {reason.stats}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;