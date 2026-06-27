import { blogPosts } from "../../../data/products";

function BlogPostsSection() {
  return (
    <section className="bg-[#eef1f5] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl md:text-5xl font-bold tracking-wide mb-12">
          BLOG POSTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id}>
              <div className="aspect-[4/3] overflow-hidden mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-[4000ms] ease-out hover:scale-125"
                />
              </div>

              <h3 className="text-lg font-medium tracking-wide mb-3">
                {post.title}
              </h3>

              <a
                href={post.link}
                className="text-sm underline underline-offset-2 hover:text-gray-600 transition-colors"
              >
                Read more
              </a>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="bg-[#5a4a3a] text-white px-12 py-3 text-sm font-medium tracking-widest hover:bg-[#4a3a2a] transition-colors">
            VIEW ALL
          </button>
        </div>
      </div>
    </section>
  );
}

export default BlogPostsSection;