import {
  FaLaptopCode,
  FaTools,
  FaSmileBeam,
  FaShippingFast,
} from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="bg-base-100 w-11/12 mx-auto ">
      <section className="mt-10">
        <div className=" ">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Our Mission
          </h2>
          <p className="text-center text-lg opacity-80 max-w-3xl mx-auto leading-relaxed">
            Discover the latest gadgets, premium accessories, and top-tier tech
            gear all in one place. At TechGadget Store, our mission is to bring
            innovative and high-quality tech products to customers at affordable
            prices. We focus on delivering the best shopping experience, from
            browsing to doorstep delivery.
          </p>
        </div>
      </section>

      {/* ---------- Why Choose Us ---------- */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card bg-base-300 shadow-lg p-6 text-center hover:scale-105 transition">
              <FaLaptopCode className="text-5xl mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Latest Gadgets</h3>
              <p className="opacity-80">
                Stay ahead with our collection of cutting-edge devices and
                accessories.
              </p>
            </div>

            <div className="card bg-base-300 shadow-lg p-6 text-center hover:scale-105 transition">
              <FaTools className="text-5xl mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Quality Assured</h3>
              <p className="opacity-80">
                Every product is tested to ensure premium performance and
                durability.
              </p>
            </div>

            <div className="card bg-base-300 shadow-lg p-6 text-center hover:scale-105 transition">
              <FaSmileBeam className="text-5xl mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Customer First</h3>
              <p className="opacity-80">
                Your satisfaction is our priority—we provide support whenever
                you need it.
              </p>
            </div>

            <div className="card bg-base-300 shadow-lg p-6 text-center hover:scale-105 transition">
              <FaShippingFast className="text-5xl mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="opacity-80">
                Quick and reliable shipping ensures you get your gadgets faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Our Story ---------- */}
      <section className="py-16 px-6 bg-base-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
            alt="Tech store"
            className="rounded-2xl shadow-lg object-cover w-full h-80"
          />

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
            <p className="opacity-80 text-lg leading-relaxed">
              TechGadget Store started with a simple idea: make premium tech
              accessible for everyone. From humble beginnings, our brand has
              grown into a trusted destination for gadget lovers.
              <br />
              <br />
              Today, we serve thousands of customers across the country—helping
              them stay connected, productive, and entertained with our curated
              tech collection.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Team Section ---------- */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="card bg-base-200 shadow-lg p-6 text-center hover:shadow-xl transition"
              >
                <div className="avatar mx-auto mb-4">
                  <div className="w-28 rounded-full">
                    <img
                      src={`https://randomuser.me/api/portraits/men/${
                        item + 10
                      }.jpg`}
                      alt="Team Member"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold">Team Member {item}</h3>
                <p className="opacity-80 text-sm">
                  Expert in tech & innovation
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
