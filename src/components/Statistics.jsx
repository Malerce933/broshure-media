import Title from "./Title";
import { SOCIALS } from "/src/data.js";
import { useTranslation } from "react-i18next";

export default function Statistics({ innerRef, isMobile }) {
    const { t } = useTranslation();

    let elipse = <div className="bg-ellipse w-[560px] h-[650px] -left-[-85%] -top-[-90%] scale-[1.4] absolute transform rotate-[-63.49deg] z-10  filter blur-[70px]"></div>
    if (isMobile) {
        elipse = <div className="bg-ellipse w-[560px] h-[650px] -left-[65%] -top-[30%] absolute transform rotate-[-63.49deg] z-10  filter blur-[60px]"></div>
    }

    return (


        <div ref={innerRef} className=" statistic relative  px-[50px] text-white">
            {elipse}
            <Title className="statistic__titlee relative z-20 text-center px-[20px]">{t("statistics.title")}</Title>

            <div className=" flex flex-col items-center  lg:flex-row lg:justify-center  lg:gap-[216px]">
                <div className=" relative z-20 px-[45px] mb-[50px] flex flex-col ">
                    <p className=" mb-[50px] statistic__title font-bold">{t("statistics.statistic")}</p>
                    <div className="h-[247px] w-[207px] border-solid border-2 border-white lg:w-[320px] lg:h-[461px]">
                        <ol className=" mx-[35px] my-[50px] lg:mx-[56px] lg:my-[105px]">
                            {SOCIALS.map((social, index) => <li key={index}><div className=" mb-[30px] lg:mb-[35px] flex items-center gap-[35px]"><img className="lg:w-[60px] lg:h-[60px]" src={social.image} alt="" /><p className=" font-daysOne statistic__info">{social.text}</p></div></li>)}
                        </ol>
                    </div>
                </div>
                <div className="mt-[50px] ml-[23px] relative z-20 h-[311.5px] statistic__diagrams lg:h-[461px]   border-solid border-l-2 border-white flex flex-col font-bold">
                    <div className="pb-[31px] ">
                        <p className="ml-5 leading-7   step1:text-nowrap lg:text-wrap 1130px:text-nowrap mb-[7px] statistic__sub-title">{t("statistics.text1")}<span className="statistic__span-sub-title">80</span> </p>
                        <div className="h-[83px] lg:h-[113px] w-full bg-custom-gradient"></div>
                    </div>
                    <div className="mb-[37px]">
                        <p className="ml-5 mb-[4px] statistic__sub-title">{t("statistics.text2")}<span className="statistic__span-sub-title">44</span></p>
                        <div className="h-[83px] lg:h-[113px] w-[65%] bg-custom-gradient"></div>
                    </div>
                </div>
            </div>

        </div>
    );
}