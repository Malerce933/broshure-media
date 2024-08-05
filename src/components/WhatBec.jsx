import Title from "./Title";
import Description from "./Description";
import ellipse from "/src/assets/ellipse.svg"
import { useTranslation } from "react-i18next";

export default function WhatBec({ isMobile, innerRef }) {
    const { t } = useTranslation();

    let backGroundOrange = <div className="bg-ellipse w-[416px] h-[413px] left-[-60%] transform rotate-[48.74deg] top-[-13%] absolute  z-10  filter blur-[70px] lg:opacity-0"> </div>
    let lines = <div className="absolute bg-lines1 bg-contain  bg-no-repeat w-[2300px] h-[1500px] z-10 left-[-37.5%] transform  top-[50%]"></div>
    let backGroundBlack1 = <div className="absolute bg-ellipse-black w-[1700.39px] rounded-full h-[460.22px] left-[-160%] top-[70%] z-10 filter blur-[70px] transform rotate-[-90.56deg]"></div>
    let backGroundBlack2 = <div className="absolute bg-ellipse-black w-[1700.39px] rounded-full h-[674.22px] left-[100%] top-[100%] z-10 filter blur-[70px] transform rotate-[-26.56deg]"></div>

    if (isMobile) {
        backGroundBlack1 = ""
        backGroundBlack2 = ""
        backGroundOrange = <div className="bg-ellipse w-[416px] h-[413px] left-[-60%] transform rotate-[48.74deg] top-[-56%] absolute  z-10  filter blur-[70px] lg:opacity-0"> </div>
        lines = <div className="absolute bg-linesMob step1:bg-[length:750px_1600px] bg-[length:600px_1250px] step1:top-[0%] left-[0%] top-[40%]   step2:bg-[length:900px_1700px] step2:top-[-10%] step3:bg-[length:1250px_2200px] step3:top-[-90%]  bg-no-repeat  w-[1200px] h-[2100px] z-10  transform  "></div>

    }

    return (
        <div ref={innerRef} className="what flex flex-col items-center self-center relative text-white px-[50px]   ">
            {backGroundOrange}
            {lines}
            {backGroundBlack1}
            {backGroundBlack2}

            <Title className="what__title relative z-20 text-center lg:mb-[54px]">{t('what-bec.title')}</Title>
            <div className="what__text text-center  relative z-20 lg:w-[724px]">
                <p className="  leading-[150%] mb-[10px]">{t('what-bec.text1')}</p>
                <p className="  leading-[150%] "></p>
                <p className="  leading-[150%]  mb-[24px]">{t('what-bec.text2')}</p>
            </div>

            <a target="_blank" rel="noopener noreferrer" href="https://bec-2024.best-lviv.org.ua/ua" className=" items-center justify-center bg-black relative z-30 flex what__button transition-transform transform-gpu duration-[400ms] hover:scale-[1.1]  border-2  border-customOrange text-white py-[10px]">{t('what-bec.more')}</a>
        </div>
    );
}