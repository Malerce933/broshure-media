import Title from "./Title";
import BestLviv from "/src/assets/BestLviv.svg"
import map from "/src/assets/map.svg"
import addMap from "/src/assets/addMap.svg"
import { useTranslation } from "react-i18next";

export default function Aboutbest() {
    const { t } = useTranslation();
    return (
        <div className="about flex flex-col relative text-white px-[25px] lg:px-[180px] lg:items-center ">
            <Title className="about__title text-center px-[20px]">{t("about-best.title")}</Title>
            <div className=" lg:self-center self-center w-[70%] lg:w-auto flex flex-col lg:flex-row lg:gap-[93px] lg:justify-center ">
                <img className=" self-center lg:self-start best-lviv mb-[30px] px-12" src={BestLviv} alt="" />
                <div className=" best-text mb-[25px] lg:w-[549px]">{t("about-best.text")}</div>
            </div>

            <div className="bg-ellipse w-[320px] scale-[2.3] h-[290px] left-[50%] transform translate-x-[-50%] top-[60%] absolute  z-10  filter blur-[60px]" src={addMap} alt="" > </div>
            <div className="flex flex-col lg:flex-row relative justify-center ">
                <div className=" order-2 lg:order-1 flex flex-col self-center lg:absolute lg:right-[-10%] lg:top-[10%] ">
                    <p className=" best-sub-map1 lg:mb-[30px] flex items-center text-[16px] lg:text-[32px]"><span className="best-sub-map2 mr-3 text-[24px] font-daysOne lg:text-[32px]">85</span>{t("about-best.subText1")}</p>
                    <p className=" best-sub-map1 lg:mb-[30px] flex items-center text-[16px] lg:text-[32px]"><span className="best-sub-map2 mr-3 text-[24px] font-daysOne lg:text-[32px]">30</span>{t("about-best.subText2")}</p>
                    <p className=" best-sub-map1 lg:mb-[30px] flex items-center text-[16px] lg:text-[32px]"><span className="best-sub-map2 mr-3 text-[24px] font-daysOne lg:text-[32px]">35</span>{t("about-best.subText3")}</p>
                </div>
                <img className=" best-map order-1  lg:order-2 self-center w-[276px] h-[252px] mb-[66px] lg:w-[858px] lg:h-[786px]" src={map} alt="" />
            </div>


        </div>
    );
}