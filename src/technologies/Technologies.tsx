import { use } from "react";
import TechnologiCard from "../components/TechnologiCard";
import type { TechItemList } from "../type/type";

const promiseData = async (): Promise<TechItemList> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

const technologiesPromise = promiseData();

export default function Technologies() {
  const technologies = use(technologiesPromise);
  console.log(technologies, "techno");

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <h3 className="text-3xl font-bold">
        Explore the{" "}
        <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
          Technologies
        </span>
      </h3>
      <p className="mt-2">
        Pick one technology per category to build your ideal stack.
      </p>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-9 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {technologies.map((tech) => (
              <TechnologiCard key={tech.id} tech={tech} />
            ))}
          </div>
        </div>
        <div className="col-span-3 p-4">
          <div className=" rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="font-bold text-xl text-slate-900">Your Stack</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
