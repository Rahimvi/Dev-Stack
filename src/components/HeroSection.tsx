import HeroImg from "../assets/banner-stack.png";

export default function HeroSection() {
  return (
    <section className="w-full bg-white py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight sm:leading-tight lg:leading-tight">
              Build Your Ideal <br className="hidden sm:inline" />
              <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 text-white font-semibold text-sm transition-transform duration-150 active:scale-95 shadow-xs">
                Explore Technologies
              </button>
              <button className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center w-full">
            <img
              alt="Dev Stack illustration hero banner"
              src={HeroImg}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
