import { background2, tableitem1, tableitem2, tableitem3, tableitem4, tableitem5, tableitem6 } from "@/asset";
import Image from "next/image";
import "./frame677.scss"

const Frame677 = () => {
    return (<>
        <div className="relative mb-32 w-full">
            <div className="absolute -top-12 lg:-top-96 w-full">
                <Image src={background2} alt="background2" className="w-full" ></Image>
            </div>
<div className="flex items-center justify-center">
                <div className="px-4 py-16 lg:px-64 lg:py-40 flex flex-col items-start justify-center gap-4">
                    <div className=" flex flex-row items-center gap-2 ">
                        <div className="square w-4 h-4 rounded-sm shadow-sm shadow-[#55B8FF] border border-white">
                        </div>
                        <p className="text-[13px] lg:text-[17px] font-normal text-[#CED0CF]">Practice, learn, get support and win</p>
                    </div>
                    <div>
                        <p className="font-medium text-2xl lg:text-6xl">What do we provide traders?</p>
                    </div>
                    <div className="lg:w-[625px] text-[14px] lg:text-[17px] font-normal text-[#CED0CF]">
                        <p>We’re more than just a platform for trading— we’re a comprehensive ecosystem designed to help you succeed in the volatile world of crypto trading.</p>
                    </div>
                </div>
</div>

            <div className="px-3 lg:px-0 lg:flex lg:flex-row  justify-center items-start">
                <div className="flex flex-col justify-between gap-[60px] lg:border-t-2 lg:border-r-2 pt-8 pl-4 lg:pl-0">
                    <div className="flex flex-col gap-1 lg:w-[528px] lg:h-[70px]">
                        <p className="font-semibold text-xl">Free monthly competitions</p>
                        <p className="font-normal text-sm text-[#CED0CF]">Get a free virtual fund of $100,000 every month to prove your trading expertise.</p>
                    </div>
                    <div className="">
                        <Image src={tableitem1} alt="tableitem1"></Image>
                    </div>
                </div>
                <div className="flex flex-col justify-between gap-[60px] pl-4 border-t-2  pt-8 px-7">
                    <div className="flex flex-col gap-1 lg:w-[528px] lg:h-[70px]">
                        <p className="font-semibold text-xl">Be the top of the tops</p>
                        <p className="font-normal text-sm text-[#CED0CF]">The top traders in Tordess free monthly competitions will compete for a funded account of $10,000 and many other attractive prizes.</p>
                    </div>
                    <div className="">
                        <Image src={tableitem2} alt="tableitem2"></Image>
                    </div>
                </div>
            </div>
            <div className="px-3 lg:px-0 lg:flex lg:flex-row  justify-center items-start">
                <div className="flex flex-col justify-between gap-[60px] border-t-2 lg:border-r-2 pt-8 pl-4 lg:pl-0">
                    <div className="flex flex-col gap-1 lg:w-[528px] lg:h-[70px]">
                        <p className="font-semibold text-xl">Win big by joining paid challenge</p>
                        <p className="font-normal text-sm text-[#CED0CF]">Subscribe to paid prop-trade challengesto earn your right to trade with our capital.</p>
                    </div>
                    <div className="">
                        <Image src={tableitem3} alt="tableitem3"></Image>
                    </div>
                </div>
                <div className="flex flex-col justify-between gap-[60px] pl-4 border-t-2  pt-8 px-7">
                    <div className="flex flex-col gap-1 lg:w-[528px] lg:h-[70px]">
                        <p className="font-semibold text-xl">Be our funded traders with the funds up to $100,000</p>
                        <p className="font-normal text-sm text-[#CED0CF]">Outperform your peers to trade our capital and keep up to 90% of profits. We cover losses.</p>
                    </div>
                    <div className="">
                        <Image src={tableitem4} alt="tableitem4"></Image>
                    </div>
                </div>
            </div>
            <div className="px-3 lg:px-0 lg:flex lg:flex-row  justify-center items-start">
                <div className="flex flex-col justify-between gap-[60px] border-t-2 lg:border-r-2 pt-8 pl-4 lg:pl-0">
                    <div className="flex flex-col gap-1 lg:w-[528px] lg:h-[70px]">
                        <p className="font-semibold text-xl">Future profit shares by getting a copy-trader badge</p>
                        <p className="font-normal text-sm text-[#CED0CF]">Your success will eventually lead to copy-trader status and profit shares.</p>
                    </div>
                    <div className="">
                        <Image src={tableitem5} alt="tableitem5"></Image>
                    </div>
                </div>
                <div className="flex flex-col justify-between gap-[60px] pl-4 border-t-2  pt-8 px-7">
                    <div className="flex flex-col gap-1 lg:w-[528px] lg:h-[70px]">
                        <p className="font-semibold text-xl">Community support</p>
                        <p className="font-normal text-sm text-[#CED0CF]">Engaging in our communities and expert-led webinars offers valuable insights, keeps you updated on market trends, and connects you with experienced traders.</p>
                    </div>
                    <div className="">
                        <Image src={tableitem6} alt="tableitem6"></Image>
                    </div>
                </div>
            </div>

        </div>
    </>);
}

export default Frame677;