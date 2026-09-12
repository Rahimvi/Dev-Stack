import HeroImg from "../assets/banner-stack.png";

export default function HeroSection() {
  return (
    <div className="hero h-112.5">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          alt="Tailwind CSS hero component"
          src={HeroImg}
          className="max-w-sm"
        />
        <div>
          <h1 className="text-5xl font-bold">
            Build Your Ideal <br />
            <span className="bg-linear-to-r from-[#F97316] to-[#EC4899] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="py-6">
            Explore frontend, backend, database, and tooling options,
            <br /> compare them side by side, and put together the stack that
            fits your next project.
          </p>
          <button className="btn bg-linear-to-r from-[#F97316] to-[#EC4899] text-white">
            Explore Technologies
          </button>
          <button className="btn ml-2">Learn More</button>
        </div>
      </div>
    </div>
  );
}
