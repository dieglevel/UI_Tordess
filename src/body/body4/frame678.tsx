import { left, right } from "@/asset";
import Image from "next/image";

const Frame678 = () => {
    return (
        <div className=" bg-[#111111] relative hidden flex-col justify-center items-center  h-[800px] lg:flex">
            <div className=" flex flex-col items-center justify-start gap-56 relative">
                <div className=" flex flex-col items-start justify-center gap-4">
                    <div className=" flex flex-row items-center gap-2 ">
                        <div className="square w-4 h-4 rounded-sm shadow-sm shadow-[#55B8FF] border border-white">
                        </div>
                        <p className="text-[13px] lg:text-[17px] font-normal text-[#CED0CF]">Everyone's trading learning curve and challenges</p>
                    </div>
                    <div>
                        <p className="font-medium text-2xl lg:text-5xl">How to win monthly free trading competitions?</p>
                    </div>
                    <div className="lg:w-[625px] text-[14px] lg:text-[17px] font-normal text-[#CED0CF]">
                        <p>Join our monthly trading competitions to test your skills with $100,000 in virtual funds and win attractive prizes. Gain valuable experience and stand out in a supportive trading community.</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 ">
                    <div className="bg-[#1D1D1D] rounded-full w-12 h-12 flex items-center justify-center">
                        <Image src={left} alt="left"></Image>
                    </div>
                    <div className="bg-[#1D1D1D] rounded-full w-12 h-12 flex items-center justify-center">
                        <Image src={right} alt="right"></Image>
                    </div>

                </div>

                <div className="overflow-hidden flex flex-row absolute left-0 top-56 w-[10000px] gap-2 ">
                    <div className="p-6 rounded-2xl bg-[#1D1D1D] w-[392px] h-[144px]">
                        <p className="text-sm text-[#B0B0B0]">Unlock Unlimited Potential</p>
                        <p className="text-base">Earn as much profit as you can with a $100,000 virtual fund.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#1D1D1D] w-[392px] h-[144px]">
                        <p className="text-sm text-[#B0B0B0]">Stay within limit</p>
                        <p className="text-base w-full">Keep maximum daily loss to 5% and maximum loss to 10% of initial balance or lose your place in the competition.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#1D1D1D] w-[392px] h-[144px]">
                        <p className="text-sm text-[#B0B0B0]">Compete for attractive prizes</p>
                        <p className="text-base">Become one of the top traders to win attractive prizes.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#1D1D1D] w-[392px] h-[144px]">
                        <p className="text-sm text-[#B0B0B0]">Step up to the next level</p>
                        <p className="text-base">When you’re ready, progress to the prop-trade challenges.</p>
                    </div>
                </div>


            </div>
        </div>);
}

export default Frame678;