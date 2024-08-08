import { background2 } from "@/asset";
import Frame673 from "@/src/body/body1/frame673";
import Frame676 from "@/src/body/body2/frame676";
import Frame677 from "@/src/body/body3/frame677";
import Frame678 from "@/src/body/body4/frame678";
import Frame679 from "@/src/footer/fram679";
import Frame674 from "@/src/header/Frame674";
import Image from "next/image";

const Page = () => {
    return (<div className="min-h-screen flex flex-col ">
        <Frame674></Frame674>
        <div className=" flex flex-col bg-[#050505] overflow-hidden">
            <Frame673></Frame673>
            <Frame676></Frame676>
            <Frame677></Frame677>
            <Frame678></Frame678>
            <Frame679></Frame679>

        </div>

    </div>);
}

export default Page;