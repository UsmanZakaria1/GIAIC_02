"use client";

import React from "react";
import Image from "next/image";
import Navbar from "./Components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#252b42] min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-[600px] text-center">
        <p className="text-blue-400 text-lg font-semibold mb-4">Welcome</p>
        <h1 className="text-white text-5xl font-bold mb-4">Selling on the internet like a pro</h1>
        <p className="text-white text-lg mb-8">
          We know how large objects will act, but things on a small scale just do not act that way.
        </p>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">Get Quote Now</button>
          <button className="border-2 border-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-500 hover:text-white">Learn More</button>
        </div>
      </section>

      {/* Information Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-16 pb-24">
        <div className="bg-white p-6 rounded-md shadow-md">
          <div className="h-16 w-16 bg-red-100 rounded-full mb-4"></div>
          <h3 className="text-xl font-bold mb-2">Training Courses</h3>
          <p className="text-gray-600">The gradual accumulation of information about atomic and small-scale behaviour...</p>
        </div>
        <div className="bg-white p-6 rounded-md shadow-md">
          <div className="h-16 w-16 bg-green-100 rounded-full mb-4"></div>
          <h3 className="text-xl font-bold mb-2">2,769 Online Courses</h3>
          <p className="text-gray-600">The gradual accumulation of information about atomic and small-scale behaviour...</p>
        </div>
        <div className="bg-blue-500 p-6 rounded-md shadow-md text-white">
          <div className="h-16 w-16 bg-white rounded-full mb-4"></div>
          <h3 className="text-xl font-bold mb-2">Training Courses</h3>
          <p>The gradual accumulation of information about atomic and small-scale behaviour...</p>
        </div>
      </section>
    </div>
  );
}
