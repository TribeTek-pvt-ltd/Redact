import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostData, PostData } from "@/lib/post";

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  if (!postData) return notFound();

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center mt-20 mb-20 px-4 sm:px-6">
        {/* Background Blobs (Behind everything) */}
        <div className="absolute -top-40 -left-32 w-[400px] h-[400px] bg-[#0072ff]/20 blur-[140px] rounded-full animate-pulse-slow -z-10" />
        <div className="absolute -bottom-32 -right-32 w-[350px] h-[350px] bg-[#0072ff]/15 blur-[120px] rounded-full animate-pulse-slow -z-10" />

        {/* Banner Container - Own Ratio */}
        {postData.blogbanner && (
          <div className="
            relative w-full max-w-5xl 
            rounded-3xl overflow-hidden 
            border border-white/10 bg-white/5 
            shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]
            mb-10
          ">
            {/* 
                Image display respecting aspect ratio. 
                Using a standard img tag with w-full h-auto ensures it scales naturally.
             */}
            <img
              src={postData.blogbanner}
              alt={postData.title}
              className="w-full h-auto object-cover"
            />

            {/* Overlays for Depth & Glass Effect (On top of image only) */}
            <div className="absolute inset-0 z-[1] shadow-[inset_1px_1px_0_0_rgba(255,255,255,0.45)] pointer-events-none" />
            <div className="absolute inset-0 z-[1] shadow-[inset_-6px_-8px_20px_rgba(0,0,0,0.35)] pointer-events-none" />
            <div className="absolute inset-0 z-[1] bg-[radial-gradient(120%_90%_at_30%_-20%,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />
          </div>
        )}

        {/* Content (Text) - Below Banner */}
        <div className="relative z-10 px-6 sm:px-12 flex flex-col items-center gap-6 text-center max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-2xl whitespace-pre-line">
            {postData.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-medium max-w-3xl drop-shadow-lg">
            {postData.description}
          </p>
          <span className="text-gray-300 text-sm mt-2 font-medium bg-black/30 px-4 py-1 rounded-full backdrop-blur-sm border border-white/10">
            {new Date(postData.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </section>

      {/* ARTICLE SECTION */}
      <section className="container mx-auto mt-10 mb-20 py-10 px-6 sm:px-16">
        <article className="markdown-body max-w-4xl mx-auto text-gray-300 leading-relaxed">
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </section>
    </>
  );
}
