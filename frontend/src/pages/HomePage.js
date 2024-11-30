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
                                <ul className="space-y-6 text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-serif mb-8">
                                    <li className="flex items-center">
                                        <span className="text-blue-500 mr-2">•</span>
                                        	Exclusive Trading Insights: Access expert-selected stock recommendations and market analysis.                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-blue-500 mr-2">•</span>
                                        	Cutting Edge Trading Tools: Utilize high-quality TradingView indicators and algorithms
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-blue-500 mr-2">•</span>
                                        	Hands-on Learning: Gain valuable knowledge through tailored trading courses.
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-blue-500 mr-2">•</span>
                                        	Community Driven Content: Join free and premium groups for real-time discussions and insights.                                    </li>
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
                <footer className="bg-black py-8 px-4">
    <div className="max-w-2xl mx-auto bg-gray-800/60 rounded-lg p-6 border border-gray-700/50 shadow-lg text-white">
        <div className="grid md:grid-cols-2 gap-4">
            <div>
                <h3 className="text-2xl font-bold mb-3 text-blue-400">Terms & Conditions</h3>
                <p className="text-gray-300 mb-4 text-sm">
                    By accessing our platform, you agree to our comprehensive terms of service.
                </p>
                <div className="grid grid-2 text-center w-[50%]  self-center">
                <a 
                    href="/TermsandCondition" 
                    className="inline-block bg-blue-600 hover:bg-blue-500 m-1 text-white px-3 py-1 rounded-md text-sm transition-colors duration-300"
                >
                    Terms&Conditions
                </a>
                <a 
                    href="/PrivacyPolicy" 
                    className="inline-block bg-blue-600 hover:bg-blue-500 m-1 text-white px-3 py-1 rounded-md text-sm transition-colors duration-300"
                >
                  PrivacyPolicy
                </a>
                <a 
                    href="/RefundPolicy" 
                    className="inline-block bg-blue-600 hover:bg-blue-500 m-1 text-white px-3 py-1 rounded-md text-sm transition-colors duration-300"
                >
                   RefundPolicy
                </a>
                </div>
            </div>
            <div>
                <h3 className="text-2xl font-bold mb-3 text-green-400">Contact Us</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                    <p><span className="font-semibold">ABHIV CONSULTANCY LLP</span></p>
                    <p>📍 2-A, Shankar Purwa, Kalyanpur, Bahadurpur, Lucknow</p>
                    <p>📞 <div href="tel:+919266971199" className="hover:text-green-400">+91 9266971199</div></p>
                    <p>✉️ <a href="mailto:capvalis.work@gmail.com" className="hover:text-blue-400">capvalis.work@gmail.com</a></p>
                </div>
            </div>
        </div>
        <div className="text-center text-gray-500 text-xs mt-4 border-t border-gray-700/50 pt-3">
            © 2024 Capvalis. All Rights Reserved | Last Updated: 30-11-2024
        </div>
    </div>
</footer>
            </div>
        </>
    );
};

export default HomePage;