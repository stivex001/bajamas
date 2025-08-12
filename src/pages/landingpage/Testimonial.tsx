
import { Quote } from 'lucide-react';


type TestimonialCardProps = {
  quote: string;
  name: string;
  position: string;
  avatar?: string;
};

type Props = {
  sectionTitle?: string;
  sectionSubtitle?: string;
  testimonials?: TestimonialCardProps[];
};

const TestimonialCard = ({
  quote,
  name,
  position,
  avatar,
}: TestimonialCardProps) => {
  return (
    <div className="relative rounded-lg bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl">
      {/* Quote icon */}
      <div className="absolute -top-4 left-8">
        <div className="rounded-full bg-gray-100 p-3">
          <Quote className="h-6 w-6 text-yellow-500" />
        </div>
      </div>

      {/* Quote text */}
      <div className="mb-6 pt-6">
        <p className="text-sm leading-relaxed text-gray-600 italic">
          &ldquo;{quote}&ldquo;
        </p>
      </div>

      {/* Author info */}
      <div className="flex items-center space-x-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className="h-12 w-12 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600">
              <span className="text-lg font-bold text-white">
                {name.charAt(0)}
              </span>
            </div>
          )}
        </div>

        
        <div>
          <h4 className="text-sm font-bold text-gray-900">{name}</h4>
          <p className="text-xs text-gray-500">{position}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonial = (props: Props) => {
  const defaultTestimonials = [
    {
      quote:
        "It is a company we can count on. They are responsive, they bring new ideas and they care about the success of our organization. I'd recommend them to any athletic department.",
      name: 'CHRISTINE EVE',
      position: 'Co-Founder',
    },
    {
      quote:
        'I have just had two of the most productive work weeks I have had in years. Ben was perfectly matched to my temperament, and has been taking all the backlogged work off my plate and finishing it.',
      name: 'JESSICA BROWN',
      position: 'Co-Founder',
    },
    {
      quote:
        "It is a company we can count on. They are responsive, they bring new ideas and they care about the success of our organization. I'd recommend them to any athletic department.",
      name: 'JOHN SMITH',
      position: 'Co-Founder',
    },
  ];

  const testimonials = props.testimonials || defaultTestimonials;
  const sectionTitle = props.sectionTitle || 'WHAT THEY SAY';
  const sectionSubtitle = props.sectionSubtitle || 'Testimonials';

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-5xl px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block">
            <span className="border-2 border-yellow-500 px-4 py-2 text-sm font-medium tracking-wide text-yellow-500">
              {sectionSubtitle}
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            {sectionTitle}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              position={testimonial.position}
            //   avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
