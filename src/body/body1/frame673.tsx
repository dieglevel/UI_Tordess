import BodyBody from "./body";

const Frame673 = () => {
    return (<div className="p-2 lg:px-9  ">
        <div className="h-[415px] relative lg:h-[984px] flex flex-col items-center justify-start border py-9 lg:pb-0 lg:pt-9  rounded-2xl bg-[#121212]">
            <div className="flex flex-col justify-center items-center gap-2">
                <div className="flex flex-row text-md lg:text-3xl font-normal items-center gap-2">
                    <div>
                        <p>Tordess help traders</p>
                    </div>

                    <div className="border border-[#3B3B3B] flex items-center justify-center px-2 py-1 lg:px-5 lg:py-[10px] bg-gradient-to-r from-[#232323] to-[#2C2C2C] rounded-xl">
                        <p className="text-md lg:text-1xl font-bold text-white">minimize volatility</p>
                    </div>
                </div>

                <div className="flex flex-row items-center gap-2">
                    <div className="underline flex flex-row text-md font-medium items-center gap-2 bg-clip-text bg-gradient-to-r from-[#FDF41C] to-[#CFB1FF]">
                        <p className="underline font-medium lg:text-3xl text-md inline-block text-transparent ">
                            achieve consistent returns
                        </p>
                    </div>

                    <p className="font-normal  lg:text-3xl text-md inline-block">and</p>

                    <div className="underline flex flex-row text-md font-thin items-center gap-2 bg-clip-text bg-gradient-to-r from-[#FDF41C] to-[#CFB1FF]">
                        <p className="font-medium lg:text-3xl text-md inline-block text-transparent">
                            grow
                        </p>
                    </div>
                </div>

                <div className="flex flex-row text-md lg:text-3xl font-medium items-center">
                    <p>throught our prop-trade challenges.</p>
                </div>
            </div>

            <BodyBody></BodyBody>
        </div>

    </div>);
}

export default Frame673;