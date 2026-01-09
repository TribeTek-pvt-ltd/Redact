import Link from "next/link";
import { getAllPostSlugs, getPostData, PostData } from "@/lib/post";

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
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="
        group relative block
        rounded-3xl overflow-hidden
        border border-white/20
        bg-white/10 backdrop-blur-xl
        shadow-[0_18px_40px_-16px_rgba(0,0,0,0.55)]
        transition-all duration-500
        aspect-video
        
        hover:shadow-[0_12px_40px_rgba(0,114,255,0.3)]
        hover:border-[#0072ff]/40
      "
            >
              {/* Background Image with Overlay */}
              {post.image && (
                <div
                  className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${post.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
              )}

              {/* Glass layers (Premium effect from IndustryCard) */}
              <div className="absolute inset-0 z-[1] rounded-3xl shadow-[inset_1px_1px_0_0_rgba(255,255,255,0.45)]" />
              <div className="absolute inset-0 z-[1] rounded-3xl shadow-[inset_-6px_-8px_20px_rgba(0,0,0,0.35)]" />
              <div className="absolute inset-0 z-[1] rounded-3xl bg-[radial-gradient(120%_90%_at_30%_-20%,rgba(255,255,255,0.08),transparent_60%)]" />
              <div className="absolute inset-0 z-[1] rounded-3xl ring-1 ring-white/10" />

              {/* Glow blobs */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500/30 rounded-full blur-3xl z-[1]" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl z-[1]" />

              <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

              <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end h-full">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#3b82f6] transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mt-2 line-clamp-2 leading-relaxed font-medium text-sm sm:text-base">
                    {post.description}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-gray-400">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="font-bold text-white flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read more <span className="text-[#3b82f6]">→</span>
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
