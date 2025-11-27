import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function PricingPage() {
  return (
    <main>
      <Navbar />
      <section className="w-full py-35 px-6 md:px-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-10 ">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Plan 1 */}
          <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-4">Basic Plan</h3>
            <p className="text-4xl font-bold mb-4">$49</p>
            <p className="text-gray-600 mb-6">
              For small projects and startups
            </p>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>✔ 10GB Storage</li>
              <li>✔ Standard Support</li>
              <li>✔ 5 Projects</li>
            </ul>
            <button className="bg-lime-600 text-white w-full py-2 rounded-lg cursor-pointer">
              <a href="/#contact"> Choose Plan </a>
            </button>
          </div>

          {/* Plan 2 */}
          <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:scale-105 transition border-2 border-lime-600">
            <h3 className="text-xl font-bold mb-4">Standard Plan</h3>
            <p className="text-4xl font-bold mb-4">$99</p>
            <p className="text-gray-600 mb-6">Best for growing companies</p>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>✔ 50GB Storage</li>
              <li>✔ Priority Support</li>
              <li>✔ 20 Projects</li>
            </ul>
            <button className="bg-lime-600 text-white w-full py-2 rounded-lg cursor-pointer">
              <a href="/#contact">Choose Plan</a>
            </button>
          </div>

          {/* Plan 3 */}
          <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-4">Premium Plan</h3>
            <p className="text-4xl font-bold mb-4">$199</p>
            <p className="text-gray-600 mb-6">
              For enterprise & large projects
            </p>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>✔ 200GB Storage</li>
              <li>✔ 24/7 Support</li>
              <li>✔ Unlimited Projects</li>
            </ul>
            <button className="bg-lime-600 text-white w-full py-2 rounded-lg cursor-pointer">
              <a href="/#contact"> Choose Plan </a>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mt-20 items-center">
          <div >
            <Image
              src="/b.png"
              alt="Pricing Illustration"
              width={500}
              height={500}
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold">Need a larger plan?</h1>
            <p className="text-md text-gray-500 py-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
              tristique eget amet, tempus eu at consecttur.
            </p>
            <button className="bg-lime-500 cursor-pointer rounded-full px-5 py-3 hover:bg-lime-800 hover:text-white">
              <a href="/#contact">Contact Us</a>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
