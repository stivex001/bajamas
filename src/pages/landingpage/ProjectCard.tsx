export type ProjectCardProps = {
  image: string;
  title: string;
  category: string;
};

export const ProjectCard = ({ image, title }: ProjectCardProps) => {
  return (
    <div className="group relative  cursor-pointer overflow-hidden bg-gray-900">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="bg-opacity-40 group-hover:bg-opacity-60 absolute inset-0 transition-all duration-300">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <h3 className="mb-2 text-3xl font-[900] tracking-wide text-white">
            {title}
          </h3>
        </div>

        <div className="absolute inset-0 scale-95 transform border-4 border-yellow-500 opacity-0 transition-opacity duration-300 group-hover:scale-100 group-hover:opacity-100"></div>
      </div>
    </div>
  );
};
