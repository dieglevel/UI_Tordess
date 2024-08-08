import { image1, Vector2, Gradient } from "@/asset";
import Image from "next/image";

const BodyBody = () => {
    return ( <>
        <div className="absolute bottom-0 flex flex-row justify-center px-5">
            <Image src={image1} alt="image" className="object-cover object-top lg:h-[750px]"></Image>
        </div> 

        <div className="absolute bottom-0 w-full h-full">
            <Image src={Vector2} alt="Vector2" fill></Image>
        </div>
        <div className="absolute bottom-0 w-full h-full">
            <Image src={Gradient} alt="Gradient" fill></Image>
        </div>
    </> 
    );
}
 
export default BodyBody; 