import React from "react";

function SkeletonLoader() {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-md animate-pulse">
      {/* Image Skeleton */}
      <div className="h-64 bg-gray-200"></div>

      {/* Content Skeleton */}
      <div className="p-5">
        <div className="h-3 bg-gray-200 rounded w-20 mb-3"></div>
        <div className="h-5 bg-gray-200 rounded mb-4"></div>
        <div className="h-5 bg-gray-200 rounded w-32 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-24 mb-4"></div>
        <div className="h-10 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}

export function SkeletonGrid({ count = 12 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array(count)
        .fill()
        .map((_, i) => (
          <SkeletonLoader key={i} />
        ))}
    </div>
  );
}

export default SkeletonLoader;
