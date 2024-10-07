import React from "react";
import { Helmet } from 'react-helmet-async';
import Navbar from "../Navbar";
import { ChevronRight } from 'lucide-react';

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>CAPVALIS - Advanced Stock Analysis Platform</title>
                <meta name="description" content="Transform your investment strategy with CAPVALIS. Access real-time stock data, comprehensive analytics, and an intuitive interface for smarter trading decisions." />
                <meta name="keywords" content="stock analysis, real-time trading, financial analytics, investment platform, CAPVALIS" />
                <link rel="canonical" href="https://capvalis.com" />
            </Helmet>
            <div className="min-h-screen w-full bg-black text-white overflow-x-hidden">
                <Navbar />
                <main className="container mx-auto px-4 sm:px-6 lg:px-8 ">
                    {/* Hero Section */}
                    <article className="bgimage relative min-h-[90vh] flex items-center py-12 sm:py-16 lg:py-20 ">
                        {/* Background Elements */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute -top-1/2 -right-1/2 w-[100%] h-[100%] bg-blue-500/10 rounded-full blur-3xl" />
                            <div className="absolute -bottom-1/2 -left-1/2 w-[100%] h-[100%] bg-purple-500/10 rounded-full blur-3xl" />
                        </div>
                        
                        <section className="relative w-full lg:w-[90%] mx-auto">
                            <div className="max-w-4xl">
                                <div className="inline-block mb-4 px-4 py-2 bg-blue-500/10 rounded-full">
                                    <p className="text-blue-400 font-medium">Advanced Stock Analysis Platform</p>
                                </div>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold mb-6 lg:mb-8 leading-[1.1] font-serif bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                                    WHY CAPVALIS?
                                </h1>
                                <ul className="space-y-6 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif mb-8">
                                <li className="flex items-center">
                                        <span className="text-blue-500 mr-2">•</span>
                                        Real-Time Stock Data
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-blue-500 mr-2">•</span>
                                        Comprehensive Analytics
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-blue-500 mr-2">•</span>
                                        User-Friendly Interface
                                    </li>
                                </ul>
                                <p className="font-extralight font-serif text-xl sm:text-2xl md:text-3xl text-gray-300">
                                    At CAPVALIS, we redefine financial consultancy with a client-first approach, tailored strategies & deep market insights.
                                </p>
                                <div className="mt-8 flex flex-wrap gap-4  ">
                                    <button className="px-6 py-3 border border-gray-700 rounded-lg font-medium text-lg hover:border-blue-500 transition-colors bg-blue-500 hover:bg-blue-600">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </section>
                    </article>

                    {/* About Section */}
                    <article className="py-20 sm:py-28">
                        <section className="max-w-7xl mx-auto">
                            <div className="flex flex-col lg:flex-row gap-16">
                                <div className="lg:w-1/2">
                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 font-serif">
                                        About CAPVALIS
                                    </h2>
                                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                        At CAPVALIS, we're on a mission to democratize advanced financial analysis. Our platform combines cutting-edge technology with intuitive design to give you a competitive edge in the market.
                                    </p>
                                    <div className="grid sm:grid-cols-2 gap-8">
                                        {[
                                            {
                                                title: "Our Mission",
                                                description: "Empowering investors with cutting-edge technology and real-time data for informed decisions."
                                            },
                                            {
                                                title: "Why Choose Us",
                                                list: [
                                                    "Advanced algorithmic analysis",
                                                    "Customizable dashboard",
                                                    "Expert insights and reports"
                                                ]
                                            }
                                        ].map((item, index) => (
                                            <div key={index} className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-blue-500 transition-colors">
                                                <h3 className="text-xl font-semibold mb-4 font-serif">{item.title}</h3>
                                                {item.description ? (
                                                    <p className="text-gray-300">{item.description}</p>
                                                ) : (
                                                    <ul className="space-y-2 text-gray-300">
                                                        {item.list.map((listItem, listIndex) => (
                                                            <li key={listIndex} className="flex items-center">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3" />
                                                                {listItem}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="lg:w-1/2">
                                    <div className="aspect-square bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg border border-gray-800 p-8">
                                        {/* Placeholder for an interactive element, chart, or image */}
                                        <div className="w-full h-full rounded-lg bg-gray-900/50 flex items-center justify-center">
                                            <p className="text-gray-500 font-medium">Interactive Demo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </article>
                </main>
            </div>
        </>  
    );
};

export default HomePage;