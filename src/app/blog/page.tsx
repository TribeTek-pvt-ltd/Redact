import Link from "next/link";
import { getAllPostSlugs, getPostData, PostData } from "@/lib/post";

export default async function BlogsListPage() {
  // Fetch all slugs
  const slugs = getAllPostSlugs();

  // Fetch all posts data
  const postsData = await Promise.all(slugs.map(({ slug }) => getPostData(slug)));
  const posts: PostData[] = postsData.filter((p): p is PostData => p !== null);

  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center h-[60vh] text-center">
        {/* Optional: subtle background grid or glow */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight text-white bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,107,44,0.4)]">
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
    <Link
      key={post.slug}
      href={`/blog/${post.slug}`}
      className="
        group block
        rounded-3xl overflow-hidden
        border border-white/10
        bg-white/5 backdrop-blur-lg
        shadow-[0_8px_32px_rgba(0,0,0,0.3)]
        transition-all duration-500

        hover:bg-white/10
        hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)]
        hover:border-[#0072ff]/40
      "
    >
      <div className="p-8 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-2xl font-semibold text-[#0072ff] group-hover:text-[#0072ff] transition">
            {post.title}
          </h3>
          <p className="text-gray-400 mt-3 line-clamp-3 leading-relaxed">
            {post.description}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
          <span>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span className="font-semibold text-white group-hover:underline">
            Read more →
          </span>
        </div>
      </div>
    </Link>
  ))}
</div>

        
      </section>
    </main>
  );
}
