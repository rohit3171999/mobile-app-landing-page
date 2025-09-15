// A helper component to render star ratings
const StarRating = ({ rating, className = "" }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className={`flex items-center ${className}`}>
      {[...Array(fullStars)].map((_, i) => (
        <svg key={`full-${i}`} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
      ))}
      {halfStar && (
        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300 dark:text-gray-600" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
      ))}
    </div>
  );
};

const testimonials = [
  {
    quote: "This app has completely changed the way I work. It's intuitive, powerful, and beautifully designed. I can't imagine my daily routine without it anymore.",
    name: "Sarah L.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    quote: "A game-changer for productivity. The cloud sync is flawless and the interface is a joy to use. The best investment I've made in my personal toolkit this year.",
    name: "Michael B.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    quote: "Finally, an app that understands what I need. The customization options are fantastic. I've recommended it to my entire team and they all love it.",
    name: "Jessica P.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4.5,
  },
];

function TestimonialSection() {
  const averageRating = testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length;

  return (
    <section className="bg-white dark:bg-gray-800 py-16 sm:py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            What Our Users Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real stories from real people who have supercharged their productivity with our app.
          </p>
          <div className="flex justify-center items-center mt-6 space-x-2">
            <StarRating rating={averageRating} />
            <span className="text-gray-600 dark:text-gray-300 font-medium">
              {averageRating.toFixed(1)} out of 5 stars
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <figure key={index} className="flex flex-col bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <blockquote className="flex-grow">
                <p className="text-lg text-gray-800 dark:text-gray-200 before:content-['“'] before:mr-1 after:content-['”'] after:ml-1">
                  {testimonial.quote}
                </p>
              </blockquote>
              <figcaption className="flex items-center mt-6">
                <img className="w-14 h-14 rounded-full object-cover" src={testimonial.avatar} alt={`Avatar of ${testimonial.name}`} />
                <div className="ml-4">
                  <div className="text-base font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                  <StarRating rating={testimonial.rating} className="mt-1" />
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;