import { background3, background4, check, Down } from "@/asset";
import Image from "next/image";
import "./frame679.scss"


const Frame679 = () => {
    return (<>
        <div className=" flex flex-col items-center px-4 py-[76px] lg:py-[164px] lg:px-[264px] relative ">
            <div>
                <Image src={background3} alt="background3" fill></Image>
            </div>


            <div className="lg:max-w-[1200px] lg:w-[1200px] flex flex-col gap-4 lg:gap-9 w-full">
                <div className="flex items-center justify-start lg:justify-center ">
                    <div className="flex flex-col items-start justify-start lg:items-center lg:justify-center gap-2 lg:gap-4 lg:px-32">
                        <div className=" flex flex-row items-center gap-2 ">
                            <div className="square w-4 h-4 rounded-sm shadow-sm shadow-[#55B8FF] border border-white">
                            </div>
                            <p className="text-[13px] lg:text-[17px] font-normal text-[#CED0CF]">Your path to becoming a fully-funded Tordess trader</p>
                        </div>
                        <div>
                            <p className="lg:text-center font-medium text-2xl lg:text-6xl text-wrap">Your path to becoming a fully-funded Tordess trader</p>
                        </div>
                        <div className="lg:text-center text-[14px] lg:text-[17px] font-normal text-[#CED0CF]">
                            <p>Prove yourself in Tordess prop-trade challenges. Once you become a fully-funded Tordess trader (and future copy-trader), you can keep up to 90% of the profits while we cover your losses.</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center w-full">

                    {/* <div className="bg-gradient-to-b border-[#FDF41C50] bg-clip-border to-[#FDF41C24] w-full from-transparent p-4 rounded-[14px] shadow-md text-white border-2">
                    <p className="text-sm text-[#9C9C97]">Package 1</p>
                    <p className="text-xl text-white">$10,000</p>
                </div> */}

                    <div className="flex justify-between items-center bg-gradient-to-b border-[#FDF41C50] bg-clip-border to-[#FDF41C24] w-full from-transparent p-4 rounded-[14px] shadow-md text-white border-2">
                    <div className="rounded-[14px] w-full text-white">
                        <p className="text-sm text-[#9C9C97]">Package 1</p>
                        <p className="text-xl text-white">$10,000</p>
                    </div>
                        <Image src={Down} alt="down" className="block lg:hidden"></Image>
</div>

                    <div className="p-4 rounded-[14px] w-full text-white hidden lg:block">
                        <p className="text-sm text-[#9C9C97]">Package 2</p>
                        <p className="text-xl text-white">$20,000</p>
                    </div>

                    <div className="p-4 rounded-[14px] w-full text-white hidden lg:block">
                        <p className="text-sm text-[#9C9C97]">Package 3</p>
                        <p className="text-xl text-white">$30,000</p>
                    </div>

                    <div className="p-4 rounded-[14px] w-full text-white hidden lg:block">
                        <p className="text-sm text-[#9C9C97]">Package 4</p>
                        <p className="text-xl text-white">$40,000</p>
                    </div>
                </div>


                <div className="flex gap-2 justify-between relative w-[1200px]">

                    <div className="p-9 gap-9 w-full flex flex-col items-center bg-[rgb(255,255,255,5%)] rounded-[14px]">
                        <div className="p-4 rounded-[14px] w-full text-white">
                            <p className="text-sm text-[#9C9C97]">Stage 1</p>
                            <p className="text-2xl text-white">Tordess Challenge</p>
                        </div>

                        <div className="h-0.5 w-full border border-[#292826]">

                        </div>
                        <div className="flex flex-col gap-4 w-full">
                            <div className="flex gap-2 items-center">
                                <Image src={check} alt="check" className="w-4 h-4"></Image>
                                <p className="text-[#808080] text-sm">30 days trading periods</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Image src={check} alt="check" className="w-4 h-4"></Image>
                                <p className="text-[#808080] text-sm">10 days of trading at least</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Image src={check} alt="check" className="w-4 h-4"></Image>
                                <p className="text-[#808080] text-sm">Up to $500 daily lost accepted</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Image src={check} alt="check" className="w-4 h-4"></Image>
                                <p className="text-[#808080] text-sm">Up to $1000 lost accepted</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Image src={check} alt="check" className="w-4 h-4"></Image>
                                <p className="text-[#808080] text-sm">$1000 targeted profit</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Image src={check} alt="check" className="w-4 h-4"></Image>
                                <p className="text-[#808080] text-sm">Promote to Tier 2: Verification</p>
                            </div>
                        </div>

                        <div className="px-6 py-4 flex flex-col gap-0.5 border rounded-[15px] bg-[rgb(255,255,255,4%)] w-full">
                            <p className="text-sm text-[#9C9C97]">Refundable Fee</p>
                            <p className="text-xl text-white">$149</p>
                        </div>
                    </div>

                    <div className="p-9 gap-9 w-full flex flex-col items-center bg-[rgb(255,255,255,5%)] rounded-[14px]">
                        <div className="p-4 rounded-[14px] w-full text-white">
                            <p className="text-sm text-[#9C9C97]">Stage 2</p>
                            <p className="text-2xl text-white">Verification</p>
                        </div>

                        <div className="h-0.5 w-full border border-[#292826]">

                        </div>

                        <div className="flex flex-col gap-4 w-full">
                            <div className="flex gap-2 items-center">
                                <Image src={check} alt="check" className="w-4 h-4"></Image>
                                <p className="text-[#808080] text-sm">30 days trading periods</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Image src={check} alt="check" className="w-4 h-4"></Image>
                                <p className="text-[#808080] text-sm">10 days of trading at least</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Image src={check} alt="check" className="w-4 h-4"></Image>
                                <p className="text-[#808080] text-sm">Up to $500 daily lost accepted</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Image src={check} alt="check" className="w-4 h-4"></Image>
                                <p className="text-[#808080] text-sm">Up to $1000 lost accepted</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Image src={check} alt="check" className="w-4 h-4"></Image>
                                <p className="text-[#808080] text-sm">$1000 targeted profit</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Image src={check} alt="check" className="w-4 h-4"></Image>
                                <p className="text-[#808080] text-sm">Qualified as a fully-funded Tordess trader</p>
                            </div>
                        </div>

                        <div className="px-6 py-4 flex flex-col gap-0.5 border rounded-[15px] bg-[rgb(255,255,255,4%)] w-full">
                            <p className="text-sm text-[#9C9C97]">Refundable Fee</p>
                            <p className="text-xl text-white">Free</p>
                        </div>
                    </div>

                    <div className="p-9 gap-9 w-full flex flex-col items-center bg-[rgb(255,255,255,5%)] rounded-[14px]">
                        <div className="p-4 rounded-[14px] w-full text-white">
                            <p className="text-sm text-[#9C9C97]">Stage 3</p>
                            <p className="text-2xl text-white">Qualified Tordess Trader</p>
                        </div>

                        <div className="h-0.5 w-full border border-[#292826]">

                        </div>

                        <div className="flex flex-col gap-4 w-full">
                            <div className="flex gap-2 items-center">
                                <Image src={check} alt="check" className="w-4 h-4"></Image>
                                <p className="text-[#808080] text-sm">30 days trading periods</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Image src={check} alt="check" className="w-4 h-4"></Image>
                                <p className="text-[#808080] text-sm">10 days of trading at least</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Image src={check} alt="check" className="w-4 h-4"></Image>
                                <p className="text-[#808080] text-sm">Up to $500 daily lost accepted</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Image src={check} alt="check" className="w-4 h-4"></Image>
                                <p className="text-[#808080] text-sm">Up to $1000 lost accepted</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Image src={check} alt="check" className="w-4 h-4"></Image>
                                <p className="text-[#808080] text-sm">No targeted profit</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Image src={check} alt="check" className="w-4 h-4"></Image>
                                <p className="text-[#808080] text-sm">Keep up to 85% profit while</p>
                            </div>
                        </div>

                        <div className="px-6 py-4 flex flex-col gap-0.5 border rounded-[15px] bg-[rgb(255,255,255,4%)] w-full">
                            <p className="text-sm text-[#9C9C97]">Refundable Fee</p>
                            <p className="text-xl text-white">-</p>
                        </div>
                    </div>



                </div>



                <div className="flex justify-center items-center w-full ">
                    <div className="w-[458px] h-[56px] border border-[rgb(255,255,255,7%)] items-center flex justify-center rounded-full bg-[rgb(255,255,255,11%)]">
                        <p className="text-center">Join Challenge</p>
                    </div>
                        <Image src={background4} alt="background4" className=" absolute" layout="container"  width={3000}></Image>
                </div>

            </div>
        </div>
    </>);
}

export default Frame679;