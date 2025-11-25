import Link from "next/link";

export default function BestSellers() {
  const products = [
    {
      id: 1,
      title: "Smart Watch",
      price: "$120",
      img: "https://i.ibb.co.com/k2b3WLKv/CT-AURAP1.webp",
    },
    {
      id: 2,
      title: "Wireless Headphone",
      price: "$80",
      img: "https://i.ibb.co.com/WWGbv6jC/CMF-Headphone-Pro-By-Nothing-9-430x421.webp",
    },
    {
      id: 3,
      title: "Gaming Mouse",
      price: "$40",
      img: "https://i.ibb.co.com/PscMdwNM/l20m01-600x.webp",
    },
    {
      id: 4,
      title: "Mechanical Keyboard",
      price: "$150",
      img: "https://i.ibb.co.com/kVsrj4Qh/360-F-602010207-lxt-Ntq-EGXZx35-Kp-D5o9zxea-VEi-Zt9-Tfl.jpg",
    },
  ];

  return (
    <div className="w-11/12 mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Best Selling Gadgets
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((p) => (
          <div
            key={p.id}
            className="card bg-base-200 shadow hover:shadow-xl transition"
          >
            <figure>
              <img
                src={p.img}
                alt={p.title}
                className="p-2 h-40 object-contain"
              />
            </figure>
            <div className="card-body">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-primary font-bold">{p.price}</p>
              <Link href={"/product"} className="btn btn-outline btn-sm">
                View more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
