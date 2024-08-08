import { item1, item2, item3 } from "@/asset";
import "./underline.scss"
import Image from "next/image";

const Frame676 = () => {
    return (<>
        <div className="pt-32 lg:pt-64 px-4 lg:px-0 flex flex-col gap-12">
            <div className="leading-tight font-medium text-2xl lg:text-[56px] flex flex-col gap items-center justify-center">
                <p>
                    Shapern your trading skills and
                </p>
                <p>
                    become a <span className="underline-gradient">Funded Trader</span>
                
                </p>
            </div>

            <div className="flex flex-col  lg:flex-row items-center lg:items-start lg:justify-start  gap-4 lg:gap-6 lg:h-[551px] lg:w-[1200px]  m-auto">
                <div className="border rounded-xl bg-[#171717] flex flex-col justify-start items-center lg:w-1/3 h-full">
                    <div>
                        <Image src={item1} alt="item1" className="w-full" />
                    </div>
                    <div className="p-4 lg:p-9">
                        <div className="font-semibold text-xl ">
                            <p>Monthly free competitions</p>
                        </div>
                        <div className="font-normal text-sm text-[#D1D1D1]">
                            <p>Join free monthly competitions with attractive prizes for the top traders.</p>
                        </div>
                    </div>
                </div>

                <div className="border rounded-xl bg-[#171717] flex flex-col justify-start items-center lg:w-1/3 h-full">
                    <div>
                        <Image src={item2} alt="item2" className="w-full h-full" />
                    </div>
                    <div className="p-4 lg:p-9 h-full">
                        <div className="font-semibold text-xl ">
                            <p>Join paid challenge and be funded</p>
                        </div>
                        <div className="font-normal text-sm text-[#D1D1D1]">
                            <p>Enter paid challenges to earn the right to trade up to $100,000 of our money. Top traders get the funds to trade and keep 90% of profit.</p>
                        </div>
                    </div>
                </div>

                <div className="border rounded-xl bg-[#171717] flex flex-col justify-start items-center lg:w-1/3 h-full ">
                   <div>
                        <Image src={item3} alt="item3" className="w-full h-full" />
                   </div>
                    <div className="p-4 lg:p-9 h-full">
                        <div className="font-semibold text-xl ">
                            <p>Powerful trading tools</p>
                        </div>
                        <div className="font-normal text-sm text-[#D1D1D1]">
                            <p>We provide high performance and powerful trading tools to unlock your ability.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        

    </>);
}

export default Frame676;