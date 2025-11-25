import Link from "next/link";

export default function PromoBanner() {
  return (
    <div className="bg-primary text-white py-12">
      <div className="w-11/12 mx-auto p-16 flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0 text-center md:text-start">
          Get 20% Off on All Smart Gadgets!
        </h2>

        <Link
          href={"/product"}
          className="btn bg-white text-primary font-semibold "
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}
