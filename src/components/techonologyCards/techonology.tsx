import type { Itechnology } from "../TechonologiesType";

export interface TechonologyProps {
  techonology: Itechnology;
}

export default function Techonology({ techonology }: TechonologyProps) {
  return (
    <div className="card border border-gray-100 shadow-sm transition-transform duration-50 hover:-translate-y-1">
      <div className="card-body">
        <div>
          {/* Image and Badge */}
          <div className="flex justify-between items-center">
            <img className="w-8 h-8" src={techonology.icon} alt="" />
            <span className="badge text-xs rounded-2xl p-3">
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
            <button className="btn btn-primary text-white w-full bg-black rounded-lg">Add to Stack</button>
          </div>
      </div>
    </div>
  );
}
