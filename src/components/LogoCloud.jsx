"use client";
import React, { useEffect, useState } from "react";
import { clients, testimonials } from "../constant";
import { Star } from "lucide-react";

export default function LogoCloude() {
  
  const [currentClientIndex, setCurrentClientIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentClientIndex((prev) => (prev + 1) % clients.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [clients.length]);

  return (
    //  Clients Section
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-slate-600">
            Proud to have worked with these amazing brands and many more
          </p>
        </div>

        {/* Client Logos Slider */}
        <div className="relative overflow-hidden bg-slate-50 rounded-xl py-8 mb-16">
          <div className="flex animate-marquee space-x-16">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 w-32 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center text-2xl font-bold text-slate-600"
              >
                {client.logo}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}