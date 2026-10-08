import Image from 'next/image';
import React from 'react';
import Header from '@/assets/hero_img.jpg'

const Banner = () => {
    return (
        <section className="bg-base-200">
      <div className="container mx-auto px-4">
        <div className="hero min-h-[500px]">
          <div className="hero-content flex-col lg:flex-row-reverse gap-10 w-full">

            {/* Right - Image */}
            <div className="w-full lg:w-1/2">
              <Image className='rounded-xl'alt ="Header Image" src={Header}></Image>
            </div>

            {/* Left - Content */}
            <div className="w-full lg:w-1/2">
              <span className="badge badge-primary mb-4">
                New Collection
              </span>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Discover Your Next
                <span className="text-primary"> Favourite Book</span>
              </h1>

              <p className="py-6 text-base-content/70 text-lg">
                Explore our collection of amazing books from bestselling
                authors. Find your next great read and start your journey today.
              </p>

              <div className="flex gap-3">
                <button className="btn btn-primary">
                  Explore Books
                </button>

                <button className="btn btn-outline">
                  Learn More
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    );
};

export default Banner;