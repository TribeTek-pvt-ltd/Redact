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
      <section className="relative flex items-center justify-center text-center mt-20 overflow-hidden">
        <div className="absolute -top-40 -left-32 w-[400px] h-[400px] bg-[#0072ff]/20 blur-[140px] rounded-full animate-pulse-slow" />
        <div className="absolute -bottom-32 -right-32 w-[350px] h-[350px] bg-[#0072ff]/15 blur-[120px] rounded-full animate-pulse-slow" />

        <div className="relative z-10 max-w-4xl px-6 sm:px-12 py-32 flex flex-col items-center gap-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            {postData.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-500 font-medium max-w-3xl">
            {postData.description}
          </p>
          <span className="text-gray-400 text-sm mt-2">
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
