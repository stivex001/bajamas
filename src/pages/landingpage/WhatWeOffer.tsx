import service1 from "@/components/assets/images/service1.png";
import service2 from "@/components/assets/images/service2.png";
import service3 from "@/components/assets/images/service3.png";
import { ServiceCard, ServiceCardProps } from "./ServiceCard";

const defaultServices = [
  {
    image: service1,

    title: "STEEL WELDING",
    description:
      "Stainless steel is a popular building material that has long been praised for its strength and corrosion resistance",
  },
  {
    image: service2,
    title: "METAL WORKS",
    description:
      "Our process enhances construction speed and overall project success by utilizing skilled upfront planning",
  },
  {
    image: service3,
    title: "PIPE WELDING",
    description:
      "Our core welding team is used to working in difficult and demanding situations, and they accomplish",
  },
];

type Props = {
  sectionTitle?: string;
  sectionSubtitle?: string;
  services?: ServiceCardProps[];
};

const WhatWeOffer = (props: Props) => {
  const services = props.services || defaultServices;
  const sectionTitle = props.sectionTitle || "WHAT WE OFFER";
  const sectionSubtitle = props.sectionSubtitle || "Our Services";

  return (
    <section className="bg-[#F9F8F7] py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block">
            <span className="border-2 border-yellow-500 px-4 py-2 text-sm font-medium tracking-wide text-yellow-500">
              {sectionSubtitle}
            </span>
          </div>
          <h2 className="mb-8 text-4xl font-bold text-gray-900 md:text-5xl">
            {sectionTitle}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
