import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-10/12 mx-auto mt-5">
      <div className=" flex flex-col lg:flex-row-reverse justify-between items-center">
        <img
          src="https://i.ibb.co.com/H1b3CZW/Gadgets-Transparent-PNG-removebg-preview.png"
          className="max-w-sm rounded-lg "
        />

        <div>
          <h1 className="text-4xl md:text-6xl text-center md:text-start font-bold space-y-2 md:space-y-5">
            <p>Your Next-Level</p>
            <p className="text-primary">Tech Gadgets</p>
            <p>Are Here!</p>
          </h1>
          <p className=" text-lg text-gray-600 my-5">
            Explore premium gadgets designed for performance, durability, and
            modern lifestyle.
          </p>
          <Link href={"/product"} className="btn btn-primary mt-3">
            Visit Now
          </Link>
        </div>
      </div>
    </div>
  );
}
