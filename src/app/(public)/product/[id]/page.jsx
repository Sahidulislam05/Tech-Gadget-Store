import Link from "next/link";

const page = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    `https://tech-gadget-server.vercel.app/products/${id}`
  );
  const data = await res.json();
  const formatDate = (date) => new Date(date).toLocaleDateString();
  return (
    <div className="py-20 w-11/12 mx-auto">
      <div className="card max-w-6xl mx-auto border border-gray-200 ">
        <figure>
          <img
            className="rounded-2xl p-10 w-96"
            src={data.imageUrl}
            alt={data.title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {data.title}
            <div className="badge badge-secondary">
              Priority: {data.priority}
            </div>
          </h2>
          <p>{data.fullDescription}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">
              Price: ${data.price ? parseInt(data.price) : "0"}
            </div>
            <div className="badge badge-outline">
              Release Date: {formatDate(data.releaseDate)}
            </div>
            <Link key={data._id} href="/product" className="btn btn-primary">
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
