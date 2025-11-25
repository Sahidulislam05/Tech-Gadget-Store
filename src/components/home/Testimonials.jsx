export default function Testimonials() {
  const reviews = [
    { name: "Rahim", msg: "Amazing quality gadgets! Totally worth it." },
    { name: "Jenny", msg: "Fast delivery and great customer support!" },
    { name: "Kamal", msg: "Best tech store in BD, highly recommended." },
  ];

  return (
    <div className="w-11/12 mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        What Our Customers Say
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="card bg-base-200 shadow hover:shadow-lg transition"
          >
            <div className="card-body">
              <p className="text-xl italic">{r.msg}</p>
              <h4 className="font-bold text-primary mt-3">{r.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
