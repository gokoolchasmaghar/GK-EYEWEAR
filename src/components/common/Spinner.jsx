function Spinner({ size = "md", fullPage = false }) {
  const sizeClasses = {
    sm: "w-5 h-5 border-2",
    md: "w-8 h-8 border-2",
    lg: "w-12 h-12 border-3",
  };

  const spinner = (
    <div
      className={`${sizeClasses[size]} border-gray-300 border-t-[#0f1c3f] rounded-full animate-spin`}
    />
  );

  if (fullPage) {
    return (
      <div className="fixed inset-0 bg-white/80 flex items-center justify-center z-50">
        {spinner}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-10">
      {spinner}
    </div>
  );
}

export default Spinner;