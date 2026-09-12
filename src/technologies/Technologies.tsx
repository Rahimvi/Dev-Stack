import { use, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StackItemCard from "../components/StackItemCard";
import TechnologiCard from "../components/TechnologiCard";
import type { TechItem, TechItemList } from "../type/type";

const promiseData = async (): Promise<TechItemList> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

const technologiesPromise = promiseData();

export default function Technologies() {
  const technologies = use(technologiesPromise);
  const [addStack, setAddStack] = useState<TechItem[]>([]);

  const handleAddToStack = (tech: TechItem) => {
    setAddStack((prev) => [...prev, tech]);
    toast.success(`Added ${tech.name} to stack!`);
  };

  const handleRemoveFromStack = (id: string) => {
    const removedItem = addStack.find((item) => item.id === id);
    setAddStack((prev) => prev.filter((item) => item.id !== id));
    if (removedItem) {
      toast.info(`Removed ${removedItem.name} from stack`);
    }
  };

  const handleClearAll = () => {
    setAddStack([]);
    toast.error("Cleared all items from your stack!");
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <ToastContainer />
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
        <div className="col-span-12 lg:col-span-9 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {technologies.map((tech) => (
              <TechnologiCard
                key={tech.id}
                tech={tech}
                addStack={addStack}
                onAddToStack={handleAddToStack}
              />
            ))}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-3">
          <div className="rounded-3xl border border-gray-100 shadow-sm p-4">
            <h2 className="font-bold text-xl text-slate-900">Your Stack</h2>
            {addStack.length === 0 ? (
              <div>
                <p className="text-gray-400 mt-2 mb-2">
                  No technologies selected yet.
                </p>
                <div className="rounded-3xl border border-gray-100 p-8">
                  <p className="text-gray-400 ">Your stack is empty.</p>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-gray-400 mt-2 mb-2">
                  {addStack.length} Technology Selected
                </p>
                {addStack.map((stack) => (
                  <StackItemCard
                    key={stack.id}
                    item={stack}
                    onRemove={handleRemoveFromStack}
                  />
                ))}
                <button
                  onClick={handleClearAll}
                  className="btn border border-[#ED8C85] text-[#D82C20] w-full rounded-3xl mt-2 mb-2"
                >
                  Remove All
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
