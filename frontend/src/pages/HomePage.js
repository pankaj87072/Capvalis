import React from "react";
import { Helmet } from 'react-helmet-async';
import Navbar from "../Navbar";

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
                <header>
                    <Navbar/>
                </header>
                <main className="container mx-auto px-4">
                    {/* Hero Section */}
                    <article className="bgimage min-h-[80vh] flex items-center ">
                        <section className="w-full ml-[10%] ">
                            <div className="max-w-4xl">
                                <h1 className="text-4xl md:text-6xl lg:text-8xl font-semibold mb-6 lg:mb-8 leading-tight">
                                    WHY CAPVALIS?
                                </h1>
                                <ul className="space-y-4 text-xl md:text-2xl lg:text-4xl">
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
                            </div>
                        </section>
                    </article>

                    {/* About Section */}
                    <article className="min-h-[80vh] py-16">
                        <section className="about-section">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                                About CAPVALIS
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold mb-4">Our Mission</h3>
                                    <p className="text-gray-300 text-lg">
                                        Empowering investors with cutting-edge technology and real-time data to make informed decisions in the dynamic world of stock trading.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold mb-4">Why Choose Us</h3>
                                    <ul className="space-y-2 text-gray-300 text-lg">
                                        <li>• Advanced algorithmic analysis</li>
                                        <li>• Customizable dashboard</li>
                                        <li>• Expert insights and reports</li>
                                    </ul>
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