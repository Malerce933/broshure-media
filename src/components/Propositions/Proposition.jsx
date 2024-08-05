import React, { useState } from 'react';
import Points from "../Points";
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
const CORE_PROPOSITION = "Solid Base";

export function Proposition({ proposition, addToBasket, isActive, handleRemoveProposition }) {
    const { t } = useTranslation()
    const propositionsInfo = t('packetsInfo.propositions', { returnObjects: true });

    const [isModalVisible, setIsModalVisible] = useState(false);

    function handleClickOnBlock() {
        if (isActive && CORE_PROPOSITION != proposition.title) {
            handleRemoveProposition(proposition.title)
        }
        else {
            addToBasket(proposition.title, proposition.price, false);
        }
    }

    let classBlock = " prop mb-10 transition-transform transform-gpu duration-[400ms] hover:scale-[1.05]  cursor-pointer  relative flex  flex-col cursor-pointer text-white mb-10 w-[80%] px-[25px] lg:px-[63px] bg-proposition-gradient p-5  text-[12px] font-medium";
    let classButton = "  self-center box-border text-[24px] absolute left-1/2 bg-proposition-button transform translate-y-1/2 -translate-x-1/2 bottom-0 w-[112px] h-[42px] border-solid border-2 border-white flex justify-center items-center";

    if (isActive) {
        classBlock += " clicked";
        classButton += " clicked";
    }
    const propositionInfo = propositionsInfo.find(item => item.title === proposition.title)
    console.log(propositionsInfo)
    return (
        <>
            <Modal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)}>
                {
                    <div className=' info-container text-white'>
                        {
                            propositionInfo.points.map((item, index) =>
                                <div key={index}>
                                    <p className=' info-title mb-2 font-daysOne'>{item.text}</p>
                                    <p className=' info-description mb-4'>{item.description}</p>
                                </div>
                            )
                        }

                    </div>
                }
            </Modal>
            <div id="proposition " onClick={handleClickOnBlock} className={classBlock}>
                <button
                    className=" border-solid border-[3px] h-[25px] w-[25px] border-white rounded-full text-white flex justify-center items-center self-end lg:absolute lg:top-[4%]"
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsModalVisible(true);
                    }}
                >
                    i
                </button>
                {/* <p className=" proposition__title text-[24px] font-daysOne uppercase mb-[12px]">{proposition.title}</p> */}
                <Points data={proposition.points} className="before:top-[6px] step1:before:top-[8px] step3:before:top-[10px] lg:before:top-[11px] 3xl:before:top-[14px] before:w-[7px] before:h-[7px] 1090xl:before:w-[8px] 1090xl:before:h-[8px]"></Points>


            </div>
        </>

    );
}

export function Modal({ isVisible, onClose, children }) {


    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isVisible]);

    if (!isVisible) {
        return null;
    }

    return (
        <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div id="customModal" className=" flex flex-col modal custom-scrollbar overflow-y-auto w-[75%] h-[75%] bg-proposition-gradient p-8 pt-[9px] relative border-4 border-propositionBorder">
                <button
                    className="cross self-end block  text-gray-600 hover:text-gray-900"
                    onClick={onClose}
                >

                </button>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}