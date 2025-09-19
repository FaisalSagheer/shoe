"use client";
import React from "react";
import { Play, Star, Users, Trophy } from "lucide-react";

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-10">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="absolute bg-cover bg-center bg-no-repeat w-[140vw] h-[100vh]"
          src="./assets/bg-hero.png"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-white text-background px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4 mr-2" />
              #1 Rated Shoe Shop
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Design.Innovate.
              <span className="block">Iterate.Ten Years in the Making.</span>
            </h1>

            <p className="text-xl text-gray-100 mb-8 leading-relaxed font-sans">
              A decade of expertise transforming raw concepts into tangible,
              market-ready footwear. My process is a refined cycle of deliberate
              design, material innovation, and precise iteration, ensuring every
              product delivers on both form and function.
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
                Start Your Journey
              </button>
              <button className="flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                <Play className="h-5 w-5 mr-2" />
                Watch Story
              </button>
            </div> */}

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-orange-500 mr-2" />
                  <span className="text-3xl font-bold text-white">5K+</span>
                </div>
                <p className="text-gray-400">Active Members</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Trophy className="h-8 w-8 text-orange-500 mr-2" />
                  <span className="text-3xl font-bold text-white">15+</span>
                </div>
                <p className="text-gray-400">Expert Trainers</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-8 w-8 text-orange-500 mr-2" />
                  <span className="text-3xl font-bold text-white">4.9</span>
                </div>
                <p className="text-gray-400">Rating</p>
              </div>
            </div> */}
          </div>

          <div className="pt-50 text-center">
            <h4 className="text-4xl">
            Shoes Walking Animation
            </h4>
            <img src="./assets/hero-img.png" alt="/" />
            {/* <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Quick Start Membership
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                  <span className="text-white">Monthly Plan</span>
                  <span className="text-orange-500 font-bold">$49/mo</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-orange-500 rounded-lg">
                  <span className="text-white">Annual Plan</span>
                  <span className="text-white font-bold">$39/mo</span>
                </div>
                <button className="w-full bg-white text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Get Started Today
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
