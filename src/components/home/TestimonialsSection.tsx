
import React from "react";

const testimonials = [
  {
    id: 1,
    quote: "HomePrep Wizard saved us so much time and stress when we moved into our first apartment. Everything was set up within days!",
    author: "Sarah & Michael",
    role: "Newlywed Couple",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    id: 2,
    quote: "The Premium Package exceeded our expectations. Quality furniture and professional installation made the experience seamless.",
    author: "David Thompson",
    role: "New Homeowner",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    quote: "The interior consultation transformed our space completely. The designer understood exactly what we wanted.",
    author: "Jennifer Lewis",
    role: "Home Renovator",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from homeowners who transformed their spaces with our packages and services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-2xl card-shadow transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex-1">
                <svg className="w-10 h-10 text-teal-light mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10.3 19.4c0.8-1.2 1.9-2.1 3.1-2.7v-1.1c-1.4 0.7-3.4 2.3-3.4 7.9v2c0 0.6 0.4 1 1 1h6c0.6 0 1-0.4 1-1v-6c0-0.6-0.4-1-1-1h-5.8c-0.3 0-0.6 0.1-0.8 0.3-0.2 0.2-0.2 0.5-0.1 0.8v-0.2zM21.3 19.4c0.8-1.2 1.9-2.1 3.1-2.7v-1.1c-1.4 0.7-3.4 2.3-3.4 7.9v2c0 0.6 0.4 1 1 1h6c0.6 0 1-0.4 1-1v-6c0-0.6-0.4-1-1-1h-5.8c-0.3 0-0.6 0.1-0.8 0.3-0.2 0.2-0.2 0.5-0.1 0.8v-0.2z"></path>
                </svg>
                <p className="text-gray-600 mb-4">{testimonial.quote}</p>
              </div>
              <div className="flex items-center mt-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
