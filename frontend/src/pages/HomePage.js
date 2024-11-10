import React from "react";
import { Helmet } from 'react-helmet-async';
import Navbar from "../Navbar";
import About from "./About";
import '../App.css'
import OurPerformance from "./OurPerformance";
import SocialMedia from "./SocialMedia";
import OurServices from "./OurServices";
// import { ChevronRight } from 'lucide-react';
// import {Link} from 'react-scroll'

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
                <main className="w-full px-8">
                    {/* main Section */}
                    <article id="mainhomepage" className="bgimage relative min-h-[90vh] flex w-full items-center px-8 py-12 sm:py-16 lg:py-20 border-b border-cyan-200">
                        <section className="relative w-full mx-auto ">
                            <div className="w-full">
                                <div className="inline-block mb-4 px-4 py-2 bg-blue-500/10 rounded-full">
                                    <p className="text-blue-400 font-medium">Advanced Stock Analysis Platform</p>
                                </div>
                                <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-semibold mb-6 lg:mb-8 leading-[1.1] font-serif bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-gray-500">
                                    WHY CAPVALIS?
                                </h1>
                                <ul className="space-y-6 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-serif mb-8">
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
                                <p className="font-extralight font-serif text-xl sm:text-2xl md:text-3xl text-gray-300 w-[80%]">
                                    At CAPVALIS, we redefine financial consultancy with a client-first approach, tailored strategies & deep market insights.
                                </p>
                            </div>
                        </section>
                    </article>

                    {/* About Section */}
                    <article id="about" className="py-2 sm:py-6 w-full border-b border-cyan-200">
                      <About />
                    </article>
                    <article id="about" className="py-2 sm:py-6 w-full border-b border-cyan-200">
                      <OurPerformance />
                    </article>
                    {/* OurServices Section */}
                    <article id="ourservices" className="py-2 sm:py-6 w-full border-b border-cyan-200">
                        <OurServices/>
                    </article>

                    {/* SocialMedia Section */}
                    <article id="socialmedia" className="py-2 sm:py-6 w-full border-b border-cyan-200">
                        <SocialMedia/>
                    </article>
                </main>
            </div>
        </>
    );
};

export default HomePage;