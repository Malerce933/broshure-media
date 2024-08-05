import Title from "../Title";
import Subject from "./Subject";

import { useTranslation } from "react-i18next";

export default function TdVsCs() {
    const { t } = useTranslation();
    const subjects = t('subjects', { returnObjects: true });
    return (
        <div className="vs bg-black  relative text-white px-[50px] lg:flex lg:flex-col lg:items-center">
            {/* <div className=" absolute z-30 bg-lines w-[2770px] h-[2400px] -left-[1300px] transform rotate-[-27.55deg]"> */}
            {/* <img className=" absolute z-30  w-[2000px] h-[2000px] transform rotate-[-27.55deg]  -top-20 -left-[200px]" src="/src/assets/lines.svg" alt="" /> */}
            {/* </div> */}

            <Title className=" relative z-50 vs__title text-center">CASE STUDY VS TEAM DESIGN</Title>
            <div className=" bg-black p-5 lg:flex relative z-30 lg:gap-[196px]   ">
                {subjects.map((item, index) => <Subject t={t} key={index} subject={item} isLast={index === subjects.length - 1}></Subject>)}
            </div>

        </div>
    );
}