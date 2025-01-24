// app/components/ui/skeleton

export function PostSkeleton () {
    return (
      <div className="animate-pulse">
        <div className="h-6 bg-gray-200 rounded-md w-2/3 mb-4"></div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded-md w-full"></div>
          <div className="h-4 bg-gray-200 rounded-md w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded-md w-4/6"></div>
        </div>
        <div className="flex gap-2 mt-4">
          <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
          <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    );
   };
   
