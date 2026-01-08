"use client";

import Button from "./Button"; // make sure the path is correct
import { useCalendly } from "@/app/hooks/useCalendly";

export default function VideoEditorCTA() {
  const { openCalendly } = useCalendly(); // ← moved inside  ✔

  //export default function VideoEditorCTA() {
  return (
    <section className="w-full py-20   flex justify-center items-center px-6">
      <div className=" backdrop-blur-md rounded-3xl  p-10  text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Cut through the noise. Call Redact{" "}
        </h2>
        <p className="text-gray-300 text-base md:text-lg mb-8">
          I help creators, freelancers, and businesses craft engaging videos
          that captivate and convert. Let’s discuss your project and make it
          stand out.
        </p>
        <Button onClick={openCalendly}>Schedule a Call</Button>      </div>
    </section>
  );
}
