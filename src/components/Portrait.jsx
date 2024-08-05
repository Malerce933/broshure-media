import Title from "./Title";

import portrait1 from '/src/assets/portrait1.png'
import portrait2 from '/src/assets/portrait2.png'
import Points from "./Points";
import { useTranslation } from "react-i18next";

export default function Portrait({ isMobile }) {
    const { t } = useTranslation();
    const specialities = t('portrait.specialities', { returnObjects: true });

    let elipse = ""
    if (isMobile) [
        elipse = <div className="bg-ellipse w-[915px] h-[600px] left-[30%] -top-[60%] absolute transform rotate-[-63.49deg] z-10  filter blur-[70px]"></div>
    ]

    return (
        <div className="portrait relative z-30 flex flex-col items-center text-white px-[25px]">
            {elipse}
            <Title className=" portrait__title text-center relative z-20 mx-[65px]">{t('portrait.title')}</Title>
            <div className=" flex flex-col 1090xl:flex-row 1090xl:gap-[170px] 1090xl:justify-center ">
                <div className=" mb-[30px] px-5 portraitt:px-0 ">
                    <p className="partner__title font-daysOne leading-10   mb-[9px]">{t('portrait.student')}</p>
                    <p className="partner__title font-daysOne mb-[13px]">{t('portrait.age')}<span className=" partner__span-title">17-21</span> </p>
                    <p className="partner__sub-title font-daysOne mb-[14px]">{t('portrait.majors')}</p>
                    <Points data={specialities} className="before:top-[10px] 1090xl:before:top-[16px] before:w-[6px] before:h-[6px] 1090xl:before:w-[8px] 1090xl:before:h-[8px]"></Points>
                </div>

                <div className=" flex flex-col  relative z-20 items-start mx-5">
                    <div className=" mb-5  relative partner__image">
                        <img className="partner__image absolute object-cover h-full w-full" src={portrait1} alt="" />
                    </div>
                    <div className="1090xl:mb-[10px] relative self-end partner__image ">
                        <img className="partner__image absolute object-cover h-full w-full" src={portrait2} alt="" />
                    </div>

                </div>
            </div>

        </div>
    );
}
