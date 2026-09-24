import { toast } from "react-toastify";
import type { Itechnology } from "../Types/TechonologiesType";
import type { Dispatch, SetStateAction } from "react";
import { RxCheck } from "react-icons/rx";

export interface TechonologyProps {
  techonology: Itechnology;
  buttonType: string[];
  setButtonType: Dispatch<SetStateAction<string[]>>;
  selectedTech: Itechnology[];
  setSelectedTech: Dispatch<SetStateAction<Itechnology[]>>;
}

export default function Techonology({
  techonology,
  buttonType,
  setButtonType,
  selectedTech,
  setSelectedTech,
}: TechonologyProps) {
  const isAdded = buttonType.some((techid) => techid === techonology.id);

  const handleButton = (techonology: Itechnology) => {
    if (isAdded === true) {
      toast.error(`${techonology.name} is already in your stack !`);
    } else {
      setButtonType([...buttonType, techonology.id]);
      setSelectedTech([...selectedTech, techonology]);
      toast.success(`${techonology.name} added to your stack !`);
    }
  };
  return (
    <div className="card border border-gray-200 rounded-[10px]">
      <div
        className={`card-body ${isAdded === true ? "border rounded-[10px] border-[#EC4899]" : ""}`}
      >
        <div>
          {/* Image and Badge (Nested Ternary) */}
          <div className="flex justify-between items-center">
            <img
              className="w-9.5 h-9"
              src={techonology.icon}
              alt={techonology.name}
            />
            <span
              className={`badge text-xs rounded-2xl p-3 ${
                techonology.badge === "Popular"
                  ? "bg-orange-100 text-orange-600"
                  : techonology.badge === "Fast"
                    ? "bg-violet-100 text-violet-600"
                    : techonology.badge === "Essential"
                      ? "bg-blue-100 text-blue-600"
                      : techonology.badge === "Containers"
                        ? "bg-green-100 text-green-600"
                        : "bg-pink-100 text-pink-600"
              }`}
            >
              {techonology.badge}
            </span>
          </div>

          {/* Name and Description */}
          <div className="mt-5 space-y-3 mb-5">
            <h2 className="text-[#0F172A] text-base font-bold">
              {techonology.name}
            </h2>
            <p className="text-[#475569] text-sm mt-2">
              {techonology.description}
            </p>
          </div>

          {/*category , Difficulty and Rating  */}
          <div className="flex justify-between items-center text-sm text-[#475569]">
            <span className="px-2 py-1 bg-gray-100 rounded-md text-[#475569]">
              {techonology.category}
            </span>
            <span>{techonology.difficulty}</span>
            <span className="flex items-center gap-0.5">
              <span className="text-amber-500">★</span> {techonology.rating}
            </span>
          </div>
        </div>

        {/* Button */}
        <div className="mt-4">
          <button
            onClick={() => handleButton(techonology)}
            className={`btn btn-primary w-full shadow-none rounded-lg
            ${
              isAdded === true
                ? "bg-pink-100 text-pink-500 border border-gray-200 shadow-none cursor-not-allowed"
                : "bg-black text-white"
            }`}
          >
            {isAdded === true ? (
              <div className="flex gap-0.5 justify-center items-center">
                <RxCheck className="text-xl text-[#EC4899]" />
                Added to Stack
              </div>
            ) : (
              <div>Add to Stack</div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
