import { useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { customerReviews } from "../../../data/products";
import ReviewCard from "./ReviewCard";

function CustomerReviewsSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Thin divider line */}
      <div className="max-w-7xl mx-auto px-6">
        <hr className="border-t border-gray-200" />
      </div>

      {/* Heading - white background */}
      <div className="bg-white py-12">
        <h2 className="text-center text-3xl md:text-5xl font-bold tracking-wide px-6">
          SEE WHY OUR CUSTOMERS LOVE US!
        </h2>
      </div>

      {/* Reviews - light blue background, full width */}
      <section className="bg-[#eef1f5] py-12">
        <div className="relative w-full px-4 md:px-8">
          {/* Scrollable reviews row */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-2 scrollbar-hide"
          >
            {customerReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          {/* Left arrow button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/3 -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 transition-colors"
            aria-label="Previous reviews"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right arrow button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/3 -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 transition-colors"
            aria-label="Next reviews"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </section>
    </>
  );
}

export default CustomerReviewsSection;