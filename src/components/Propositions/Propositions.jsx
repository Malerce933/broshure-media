import React, { useState, useEffect } from 'react';
import Title from "../Title";
import { Proposition } from "/src/components/Propositions/Proposition.jsx";
import { useTranslation } from 'react-i18next';

export default function Propositions({ innerRef, addToBasket, handleRemoveProposition, selectedPropositions, isMobile }) {
    const { t } = useTranslation();
    const propositions = t('packets.propositions', { returnObjects: true });

    let content = (
        <div className=" relative z-30 mb-5 px-[25px] flex flex-col items-start w-full">
            {/* {propositions.map((proposition, index) => (
                <Proposition key={index} proposition={proposition} handleRemoveProposition={handleRemoveProposition} addToBasket={addToBasket} isActive={selectedPropositions.some(element => element.title === proposition.title)} ></Proposition>
            ))} */}
        </div>
    );

    let elipse = <div className="bg-ellipse w-[564px] h-[652px] left-[60%] top-[-30%] absolute scale-[1.2] transform rotate-[-63.49deg] z-10 filter blur-[70px]"></div>
    // let lines = <div className="absolute bg-linesMob2 bg-[length:800px_1250px] top-[-33%] left-[-60%] step01:bg-[length:1000px_1250px] step01:top-[-34%] step01:left-[-50%] step1:bg-[length:1270px_1250px]  step1:top-[-36%] step1:left-[-36%]    step2:bg-[length:1470px_1550px] step2:top-[-44%] step2:left-[-26%] step3:bg-[length:1590px_1550px] step3:top-[-44%] step3:left-[-16%]  bg-no-repeat  w-[1200px] h-[2100px] z-10  transform rotate-[16.38deg]  "></div>


    // if (!isMobile) {
    //     // lines = <div className="absolute bg-lines2  bg-no-repeat w-[2300px] h-[1500px] z-10s  left-[-5%] transform  top-[112%]"></div>
    //     content = (
    //         <div className="relative z-30 mb-5 flex flex-col items-start w-full">
    //             <div className="flex w-full lg:mb-[91px]">
    //                 <Proposition addToBasket={addToBasket} proposition={propositions[0]} handleRemoveProposition={handleRemoveProposition} isActive={selectedPropositions.some(element => element.title === propositions.title)}></Proposition>
    //             </div>
    //             <div className="flex w-full lg:gap-[37px] lg:mb-[91px]">
    //                 <Proposition addToBasket={addToBasket} proposition={propositions[1]} handleRemoveProposition={handleRemoveProposition} isActive={selectedPropositions.some(element => element.title === propositions.title)}></Proposition>
    //                 <Proposition addToBasket={addToBasket} proposition={propositions[2]} handleRemoveProposition={handleRemoveProposition} isActive={selectedPropositions.some(element => element.title === propositions.title)}></Proposition>
    //             </div>
    //             <div className="flex w-full lg:mb-[91px]">
    //                 <Proposition addToBasket={addToBasket} proposition={propositions[3]} handleRemoveProposition={handleRemoveProposition} isActive={selectedPropositions.some(element => element.title === propositions.title)}></Proposition>
    //             </div>
    //         </div>
    //     );

    //     elipse = <div className="bg-ellipse w-[564px] h-[652px] left-[-30%] top-[10%] absolute scale-[2] transform rotate-[-63.49deg] z-10 filter blur-[70px]"></div>
    // }

    return (
        <div ref={innerRef}>

            <div id="propositions" className="propositions relative  text-white mx-3 flex flex-col items-center lg:mx-[72px]">
                {/* {lines} */}
                {elipse}
                <Title className=" relative z-30 propositions__title text-center text-wrap mx-[57px] mb-[30px] lg:mb-[64px]">{t("packets.title")}</Title>
                {content}
                {/* <div className=" relative px-[25px] lg:px-0 z-30 self-start lg:self-start  lg:mx-0">
                    {t("packets.discontText3")}
                </div> */}
            </div>
        </div>
    );
}
