import { grain, frame19 } from "@/asset";
import Image from "next/image";
import Navbar from "./nav";
import HeaderCenter from "./center";


const Frame674 = () => {
    return (<>
        <div className="relative min-h-screen w-full flex flex-col justify-between">

            <Navbar></Navbar>
            <HeaderCenter></HeaderCenter>
            <div className="absolute top-0 lg:top-0  lg:left-0 inset-0 -z-50 left-[-500px]">
                <Image src={frame19} alt="grain" className="absolute " fill objectFit="cover" />
            </div>
        </div>
    </>);
}

export default Frame674;