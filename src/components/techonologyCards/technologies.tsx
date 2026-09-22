import { use } from "react"
import type { Itechnology } from "../TechonologiesType"
import Techonology from "./techonology"

export interface TechnologiesProps {
    promiseTechonologies: Promise<Itechnology[]>
}

export default function Technologies({ promiseTechonologies }: TechnologiesProps) {
      const techonologiesData = use(promiseTechonologies)
      
    return (
        <div className="grid grid-cols-4 ">
            
            {/* Techonologices Card */}
            <div className="col-span-3 pt-6">
                <div className="grid grid-cols-3 gap-4">
                {
                    techonologiesData.map((techonology, ind) => <Techonology 
                    key={ind} techonology={techonology}
                    ></Techonology>)
                }

            </div>
            </div>

            {/* Your Stack */}
            <div className="col-span-1">

            </div>
           
        </div>
    )
}