import "./button.css"


const HeaderCenter = () => {
    return (<>
        <div className=" lg:absolute lg:top-[357px] lg:left-[128px] lg:w-[554px] w-full flex flex-col gap-8 pb-6 px-4 lg:pb-0 lg:px-0">

            <div className="flex flex-col gap-2">
                <span className="font-medium lg:text-7xl text-4xl inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FFF61E] to-[#E785FF]">You bring the skills.
                    we bring the funds.
                </span>
                <span className="text-1xl lg:block hidden text-[#CED0CF]">Join a community of crypto traders, learn to manage risk, and trade for long-term gains.</span>
                <span className="text-md lg:hidden block text-[#CED0CF]">Unlock substantial trading capital with minimal personal risk and retain 90% of your profits. Join a community of traders s learning to manage risk and trade for long-term gains, and secure funding to focus on your strategy.</span>
            </div>

            <div>
                <div className=" w-[200px] rounded-full p-1 border border-transparent bg-clip-border bg-gradient-to-r from-[#FFF61E] to-[#E785FF]">
                    <div className="flex items-center justify-center p-7 py-[10px] bg-black rounded-full">
                        Getting Started
                    </div>
                </div>
            </div>
            
        </div>
    </>);
}

export default HeaderCenter;