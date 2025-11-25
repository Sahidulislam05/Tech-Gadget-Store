export default function Features() {
  return (
    <div className="w-11/12 mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Why Choose Us?
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="card bg-base-300 shadow hover:shadow-lg transition">
          <div className="card-body items-center text-center">
            <span className="text-4xl">⚡</span>
            <h3 className="font-bold text-xl">Fast Delivery</h3>
            <p className="text-sm text-gray-500">
              Get your gadgets delivered in 48 hours.
            </p>
          </div>
        </div>

        <div className="card bg-base-300 shadow hover:shadow-lg transition">
          <div className="card-body items-center text-center">
            <span className="text-4xl">🔒</span>
            <h3 className="font-bold text-xl">Secure Payment</h3>
            <p className="text-sm text-gray-500">
              100% secure encrypted payment methods.
            </p>
          </div>
        </div>

        <div className="card bg-base-300 shadow hover:shadow-lg transition">
          <div className="card-body items-center text-center">
            <span className="text-4xl">🎧</span>
            <h3 className="font-bold text-xl">24/7 Support</h3>
            <p className="text-sm text-gray-500">We’re here to help anytime.</p>
          </div>
        </div>

        <div className="card bg-base-300 shadow hover:shadow-lg transition">
          <div className="card-body items-center text-center">
            <span className="text-4xl">💎</span>
            <h3 className="font-bold text-xl">Premium Quality</h3>
            <p className="text-sm text-gray-500">Products you can trust.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
