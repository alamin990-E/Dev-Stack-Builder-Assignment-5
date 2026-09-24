import { RxCross1 } from "react-icons/rx";
import type { Itechnology } from "../Types/TechonologiesType";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

export interface TechStackProps {
   selectedTech:Itechnology[]
   setSelectedTech: Dispatch<SetStateAction<Itechnology[]>>;
   buttonType: string[];
  setButtonType: Dispatch<SetStateAction<string[]>>;
}

export default function TechStack({ buttonType,setButtonType,selectedTech,setSelectedTech }: TechStackProps) {

    const handleRemoveTech =(techonology:Itechnology)=>{
        const resTech = selectedTech.filter(techCard => techCard.name !== techonology.name)
        setSelectedTech(resTech)
        const resButton = buttonType.filter(buttonId => buttonId !== techonology.id)
        setButtonType(resButton)
        toast.info(`${techonology.name} has been removed from your stack!`)
    }
    const handleRemoveAll =()=>{
        setSelectedTech([])
        setButtonType([])
        toast.info("All technologies removed from your stack!")
        
    }
    
    
    return (
          <div className="border border-gray-200 rounded-[10px]  p-5 space-y-3">
          {selectedTech.length === 0 ? (
            <div>
              {/* Your Stack Deafult */}
              <h2 className="text-[#0F172A] text-[18px] font-bold mb-2.5">
                Your Stack
              </h2>
              <p className="text-[#475569] text-sm mb-4">
                No technologies selected yet.
              </p>
              <div className="border border-dashed border-gray-200  rounded-[10px] grid items-center justify-center">
                <p className="text-[#475569] text-sm p-6">
                  Your stack is empty.
                </p>
              </div>
            </div>
          ) : (
            <div>
               <h2 className="text-[#0F172A] text-[18px] font-bold mb-2.5">
                Your Stack
              </h2>
              <p className="text-[#475569] text-sm mb-4">
                {selectedTech.length} Technology Selected
              </p>

              <div className="flex  flex-col gap-4">
                {selectedTech.map((techonology, ind) => {
                  return (
                    <div
                      key={ind}
                      className="flex justify-between items-center p-2.5 rounded-xl border border-gray-200"
                    >
                      <div className="flex justify-center items-center gap-3">
                        <img
                          className="h-9 w-9"
                          src={techonology.icon}
                          alt={techonology.name}
                        />
                        <div>
                          <h2 className="text-[#0F172A] text-sm font-medium">
                            {techonology.name}
                          </h2>
                          <p className="text-[#475569] text-xs">
                            {techonology.category}
                          </p>
                        </div>
                      </div>
                      <div>
                        <RxCross1 onClick={()=>{handleRemoveTech(techonology)}} size={20} className="text-[#94A3B8] cursor-pointer" />
                      </div>
                    </div>
                  );
                })}
                <button onClick={handleRemoveAll} className="btn w-full mt-4 shadow-none rounded-[10px]  hover:bg-gray-100 border border-[#D82C20] text-[#D82C20] ">Remove All</button>
              </div>
            </div>
          )}
        </div>
    )
}