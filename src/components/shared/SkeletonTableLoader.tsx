import { Skeleton } from "@/components/ui/skeleton";

const SkeletonTableLoader = () => {
  return (
    <div className="my-6">
      <Skeleton className="w-full h-[38px] bg-tertiary" />
      <section className="mt-10 space-y-1">
        <Skeleton className="w-full h-[50px] bg-tertiary" />
        <Skeleton className="w-full h-[50px] bg-tertiary" />
        <Skeleton className="w-full h-[50px] bg-tertiary" />
        <Skeleton className="w-full h-[50px] bg-tertiary" />
        <Skeleton className="w-full h-[50px] bg-tertiary" />
      </section>
    </div>
  );
};

export default SkeletonTableLoader;
