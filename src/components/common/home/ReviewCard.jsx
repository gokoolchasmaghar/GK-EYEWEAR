function ReviewCard({ review }) {
  return (
    <div className="flex-shrink-0 w-[260px] md:w-[280px] transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
      {/* Customer image */}
      <div className="aspect-square overflow-hidden mb-3">
        <img
          src={review.image}
          alt={review.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Rating stars */}
      <div className="flex gap-1 mb-2">
        {Array.from({ length: review.rating }).map((_, i) => (
          <span
            key={i}
            className="bg-[#8a5a2e] text-white text-xs w-5 h-5 flex items-center justify-center"
          >
            ★
          </span>
        ))}
      </div>

      {/* Name */}
      <p className="font-semibold text-blue-600 flex items-center gap-1 mb-1">
        {review.name}
        {review.verified && (
          <span className="text-blue-500 text-sm" title="Verified">
            ✔
          </span>
        )}
      </p>

      {/* Comment */}
      <p className="text-sm text-gray-700 line-clamp-3">{review.comment}</p>
    </div>
  );
}

export default ReviewCard;