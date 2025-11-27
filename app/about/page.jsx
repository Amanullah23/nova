import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* HERO SECTION */}
      <section className="w-full bg-blue-800 text-white py-24 px-6 md:px-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 mt-10">
          About Us
        </h1>
        <p className="text-start text-lg max-w-3xl mx-auto text-gray-300">
          NOVA Inc. Construction is dedicated to building strong, sustainable,
          and innovative structures. With expertise in steel fabrication, civil
          projets, and modern construction practices, we combine technical
          excellence with client-focused solutions. Our mission is to create
          safe, durable, and cost- effective projects that contribute to
          community growth and future development.
        </p>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              NOVA INC Construction Company is a trusted name in the
              construction sector, delivering high-quality residential,
              commercial, and infrastructure projects. With years of experience
              and a team of skilled engineers, we focus on innovation,
              durability, and excellence.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to build long-lasting structures that support
              development, create value for clients, and contribute to a better
              future for local communities.
            </p>
          </div>

          <div>
            <img
              src="/b.png"
              className="rounded-xl shadow-lg"
              alt="Construction"
            />
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-20 px-6 md:px-20 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Our Core Values</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-4">Quality</h3>
            <p className="text-gray-700">
              We maintain the highest standards in all our projects, using
              modern materials and technology to ensure lasting construction.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-4">Integrity</h3>
            <p className="text-gray-700">
              Honesty and transparency guide our work, ensuring trusted
              relationships with clients and partners.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-4">Innovation</h3>
            <p className="text-gray-700">
              We continuously adapt new technologies and methods to improve
              efficiency and deliver exceptional results.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
