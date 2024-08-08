import { icon } from "@/asset";
import Image from "next/image";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
    MenubarLabel
} from "@/components/ui/menubar"

const Navbar = () => {
    return (
        <div className="flex justify-between p-4 lg:p-9">
            <div className="flex items-center gap-1">
                <div className="w-8 h-8">
                    <Image src={icon} alt="icon" />
                </div>
                <p className="font-semibold">Tordess</p>
            </div>

            <div>
                <Menubar className="border-none bg-transparent gap-9 ">
                    <MenubarMenu>

                        <MenubarLabel className="hidden lg:block font-light">Competion</MenubarLabel>
                        <MenubarLabel className="hidden lg:block font-light">Market</MenubarLabel>
                        <MenubarLabel className="hidden lg:block font-light">Leaderboard</MenubarLabel>
                        <MenubarLabel className="hidden lg:block font-light">Refer</MenubarLabel>
                        <MenubarLabel className="hidden lg:block font-light">Help Center</MenubarLabel>
                        <div className="flex gap-4 lg:gap-2">
                            <MenubarLabel className="border rounded-lg px-4 hidden lg:block border-opacity-15 font-light border-white">Sign In</MenubarLabel>

                            <MenubarLabel className="bg-white text-black rounded-lg px-4 flex items-center ">Trade Now</MenubarLabel>
                            <MenubarLabel className="border rounded-lg px-4 block lg:hidden border-opacity-15 border-white"></MenubarLabel>
                        </div>

                    </MenubarMenu>
                </Menubar>
            </div>
        </div>);
}

export default Navbar;