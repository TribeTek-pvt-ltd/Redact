import Link from "next/link";
import { getAllPostSlugs, getPostData, PostData } from "@/lib/post";
import BlogCard from "@/components/BlogCard";

export default async function BlogsListPage() {
  const slugs = getAllPostSlugs();
  const posts = await Promise.all(slugs.map(({ slug }) => getPostData(slug)));

  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center h-[60vh] text-center">
        {/* Optional: subtle background grid or glow */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="relative z-10 px-6">
          <h1 className="text-4xl mt-20 sm:text-6xl md:text-8xl font-extrabold mb-6 sm:mb-8 text-left leading-tight">
            Insights & Innovation
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Explore our thoughts, strategies, and stories shaping the future of digital innovation.
          </p>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="container mx-auto px-6 sm:px-12 lg:px-10 py-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>


      </section>
    </main>
  );
}
