"use client";

import Button from "./Button"; // make sure the path is correct

export default function VideoEditorCTA() {
  return (
    <section className="w-full py-20  bg-gradient-to-r from-blue-950/30 via-black/20 to-blue-950/30  flex justify-center items-center px-6">
      <div className=" backdrop-blur-md rounded-3xl  p-10  text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Elevate Your Videos Professionally
        </h2>
        <p className="text-gray-300 text-base md:text-lg mb-8">
          I help creators, freelancers, and businesses craft engaging videos
          that captivate and convert. Let’s discuss your project and make it
          stand out.
        </p>
        <Button href="https://calendly.com/your-link">Schedule a Call</Button>
      </div>
    </section>
  );
}
