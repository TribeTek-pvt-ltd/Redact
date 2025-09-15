"use client";

export default function VideoEditorCTA() {
  return (
    <section className="w-full  text-white py-20 flex flex-col items-center justify-center text-center px-6">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Need a Professional Video Editor?
      </h2>
      <p className="text-lg md:text-xl mb-8 max-w-2xl">
        I help freelancers, businesses, and creators craft engaging videos that
        capture attention and deliver results. Let’s discuss your project and
        take your content to the next level.
      </p>
      <a
        href="https://calendly.com/your-link" // replace with your booking link
        target="_blank"
        rel="noopener noreferrer"
        className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-4 px-10 rounded-lg text-lg transition">
        Schedule a Call
      </a>
    </section>
  );
}
