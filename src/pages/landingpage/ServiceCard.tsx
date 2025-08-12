

export interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  
}
export const ServiceCard = ({
  image,
  title,
  description,
 
}: ServiceCardProps) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="mb-3 text-xl font-bold tracking-wide text-gray-900">
          {title}
        </h3>
        <p className="mb-6 text-sm leading-relaxed text-gray-600">
          {description}
        </p>
        <button className="flex h-14 w-full cursor-pointer items-center justify-center bg-[#F9F8F7] text-base font-bold text-[#797672]">
          READ MORE
        </button>
      </div>
    </div>
  );
};
