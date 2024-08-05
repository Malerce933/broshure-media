import logo from "../assets/BEC Logo Final.svg"
export default function Header() {
    return (
        <div className="relative flex items-center justify-between w-full px-[25px] lg:py-[37px] py-[20px] bg-black bg-opacity-10 ">
            <div>
                <img className=" " src={logo} alt="Logo" />
            </div>
            <div className="flex flex-col items-center space-y-[5px] ">
                <span className="block w-7 h-[3px] bg-white"></span>
                <span className="block w-7 h-[3px] bg-white"></span>
                <span className="block w-7 h-[3px] bg-white"></span>
            </div>
        </div>
    );
}