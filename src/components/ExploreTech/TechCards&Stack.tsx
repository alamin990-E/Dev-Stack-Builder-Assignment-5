import { use, useState } from "react";
import type { Itechnology } from "../Types/TechonologiesType";
import Techonology from "./TechCard";
import TechStack from "./TechStack";

export interface TechnologiesProps {
  promiseTechonologies: Promise<Itechnology[]>;
}

export default function Technologies({
  promiseTechonologies,
}: TechnologiesProps) {
  const techonologiesData = use(promiseTechonologies);
  const [buttonType, setButtonType] = useState<string[]>([]);

  const [selectedTech, setSelectedTech] = useState<Itechnology[]>([]);

  return (
    <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-7">
      {/* Techonologices Card */}
      <div className="col-span-1 md:col-span-2 lg:col-span-3 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {techonologiesData.map((techonology, ind) => (
            <Techonology
              key={ind}
              techonology={techonology}
              buttonType={buttonType}
              setButtonType={setButtonType}
              selectedTech={selectedTech}
              setSelectedTech={setSelectedTech}
            ></Techonology>
          ))}
        </div>
      </div>

      {/* Your Stack */}
      <div className="col-span-1 pt-6">
        <TechStack
          selectedTech={selectedTech}
          setSelectedTech={setSelectedTech}
           buttonType={buttonType}
              setButtonType={setButtonType}
        ></TechStack>
      </div>
    </div>
  );
}
