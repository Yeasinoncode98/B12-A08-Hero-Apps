import React from "react";
import GooglePlay from "../assets/google.png";
import appStore from "../assets/Group.png";
import Heroimg from "../assets/hero.png";
import { Link } from "react-router";
const Hero = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-[80px] ">
      <div className="flex justify-center items-center flex-col space-y-3 max-w-[1140px] mx-auto">
        <h1 className="font-bold text-4xl text-center">We Build</h1>
        <h1 className="font-bold text-4xl text-center">
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive{" "}
          </span>{" "}
          Apps
        </h1>
        <p className="text-center mt-5">
          At Hero.io we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="space-x-3 mt-5">
          {/* Image and playstore and appstore link added  */}
          <a
            href="https://play.google.com/store/games?hl=en&pli=1"
            className="btn"
          >
            <img src={GooglePlay} alt="Google Play Store" /> Google Play
          </a>
          <a href="https://www.apple.com/app-store/" className="btn">
            <img src={appStore} alt="App Store" /> App Store
          </a>
        </div>
        <div className="mt-[20px]">
          <img src={Heroimg} alt="" />
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-full flex justify-center items-center flex-col text-white min-h-[300px] space-y-6 max-sm:p-5">
        <h1 className="text-3xl font-bold text-center">
          Trusted by Millions, Built for You
        </h1>

        <div className="flex space-x-30 max-sm:space-x-0 max-sm:space-y-10  text-center max-sm:flex-col">
          <div className="space-y-1">
            <h1 className="text-sm text-gray-300">Total DOwnloads</h1>
            <h1 className="font-bold text-4xl">19.6M</h1>
            <h1 className="text-sm text-gray-300">21% More Than Last Month</h1>
          </div>
          <div className="space-y-1">
            <h1 className="text-sm text-gray-300">Total Reviews</h1>
            <h1 className="font-bold text-4xl">906K</h1>
            <h1 className="text-sm text-gray-300">46% more than last month</h1>
          </div>
          <div className="space-y-1">
            <h1 className="text-sm text-gray-300">Active Apps</h1>
            <h1 className="font-bold text-4xl">132+</h1>
            <h1 className="text-sm text-gray-300">31 more will Launch</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
