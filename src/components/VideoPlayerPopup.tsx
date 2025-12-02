"use client";

interface VideoPlayerPopupProps {
  url: string;
  onClose: () => void;
}

// Converts normal YouTube URL → embed URL
const convertToEmbedUrl = (url: string) => {
  if (url.includes("watch?v=")) {
    return url.replace("watch?v=", "embed/");
  }
  return url;
};

export default function VideoPlayerPopup({
  url,
  onClose,
}: VideoPlayerPopupProps) {
  const embedUrl = convertToEmbedUrl(url);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-[90%] max-w-3xl">
        <iframe
          className="w-full h-[400px] md:h-[500px] rounded-xl"
          src={`${embedUrl}?autoplay=1`}
          allow="autoplay; encrypted-media"
          allowFullScreen></iframe>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-500">
          Close
        </button>
      </div>
    </div>
  );
}
