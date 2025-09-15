const screenshots = [
  {
    src: "https://tse2.mm.bing.net/th/id/OIP.fqZ9-PPqcG_cm0k3JfoINQHaEK?pid=Api&P=0&h=180",
    alt: "App screenshot showing the main dashboard.",
  },
  {
    src: "https://tse3.mm.bing.net/th/id/OIP.sv-zoywuB4JsiHgVWZ3m8wHaGK?pid=Api&P=0&h=180",
    alt: "App screenshot of the analytics page.",
  },
  {
    src: "https://tse3.mm.bing.net/th/id/OIP.qeHaY6RNpltf0R4w3a5AgAHaD4?pid=Api&P=0&h=180",
    alt: "App screenshot displaying the user profile section.",
  },
  {
    src: "https://tse1.mm.bing.net/th/id/OIP.LwiKJ3NI_K4bMWMvrcFq0AHaDz?pid=Api&P=0&h=180",
    alt: "App screenshot of the settings menu.",
  },
  {
    src: "https://tse2.mm.bing.net/th/id/OIP.uAgedlbZ7GFVC8V3ftTMrwHaEK?pid=Api&P=0&h=180",
    alt: "App screenshot showing a detailed task view.",
  },
  {
    src: "https://tse4.mm.bing.net/th?id=OIF.UR%2fEQiJH88AnIq%2fcCaYPYg&pid=Api&P=0&h=180",
    alt: "App screenshot of the team collaboration feature.",
  },
];

function GallerySection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            A Glimpse Inside the App
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore the clean, intuitive, and powerful user interface that
            makes productivity a breeze.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {screenshots.map((image, index) => (
            <div key={index} className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;