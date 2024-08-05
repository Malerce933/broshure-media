import Title from "../Title";
import Opportunity from "./Opportunity";
import aboutBec from "/src/assets/aboutBec.svg"
import { useTranslation } from "react-i18next";
export default function Opportunities({ isMobile }) {

    const { t } = useTranslation();
    const opportunities = t('opportunities.opportunities', { returnObjects: true });

    let content =
        <ol>
            {opportunities.map((opportunity, index) => <Opportunity isMobile={isMobile} key={index} data={opportunity}></Opportunity>)}
        </ol>

    let elipse = <div className="bg-ellipse w-[590px] h-[283px] left-[60%] -top-[50%] absolute transform rotate-[-63.49deg] z-10  filter blur-[70px]"></div>
    if (!isMobile) {
        content =
            <div className="flex relative min-[1500px]:left-[8%] min-[1700px]:left-[12%] min-[2000px]:left-[18%] transform ">
                <img className="bec-image py-5" src={aboutBec} alt="" />
                <ol className=" lg:pl-4 w-full lg:flex lg:flex-col lg:justify-start lg:items-start ">
                    {opportunities.map((opportunity, index) => <Opportunity key={index} data={opportunity}></Opportunity>)}
                </ol>
            </div>
        elipse = <div className="bg-ellipse w-[590px] h-[283px] left-[20%] top-[45%] scale-[1.8] absolute transform rotate-[-63.49deg] z-10  filter blur-[70px]"></div>
    }
    return (
        <div id="opportunities" className=" relative px-[25px] lg:px-[140px]">
            {elipse}
            <Title className="opportunities__title  text-center px-[25px] leading-[40px] lg:leading-[60px]">{t("opportunities.title")}</Title>
            {content}
        </div>
    );
}