import opportunity1 from "/src/assets/opportunity1.svg"
import opportunity2 from "/src/assets/opportunity2.svg"
import opportunity3 from "/src/assets/opportunity3.svg"
import opportunity4 from "/src/assets/opportunity4.svg"
import opportunity5 from "/src/assets/opportunity5.svg"


const images = {
    "opportunity1": opportunity1,
    "opportunity2": opportunity2,
    "opportunity3": opportunity3,
    "opportunity4": opportunity4,
    "opportunity5": opportunity5,
}

export default function Opportunity({ isMobile, data }) {
    return (
        <li className=" flex lg:justify-start  justify-center  opportunity   w-full items-center relative z-20 h-[90px]">
            {isMobile == true ? <div className="  shrink-0 grow-0 p-6  flex justify-center  items-center">

                <img className="" src={images[data.image]} alt="" />
            </div> : undefined}

            <p style={{ fontSize: 'calc(14px + 6 * (100vw - 320px) / 1120)' }} className="ml-5 flex items-center text-[16px] max-w-[246px] lg:max-w-[344px] h-[90px] text-white">{data.text}</p>
        </li>
    );
}