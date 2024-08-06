import imgFullScreen from "../assets/full-screen.png";
import lgFullScreen from "../assets/lgFull.png";
import girl from "../assets/girl.png";
import logo from "../assets/BEC Logo Final.svg";
import Header from "./Header.jsx";
import { useState, useEffect } from 'react';
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import { useTranslation } from 'react-i18next';

export default function FullScreen({ propositionsRef, whatBecRef, statisticsRef, contactsRef }) {
    const { t } = useTranslation();

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    const [modalMenu, setModalMenu] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleScrollToPropositions = () => {
        if (propositionsRef.current) {
            propositionsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScrollToWhatBec = () => {
        if (whatBecRef.current) {
            whatBecRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScrollToStatistics = () => {
        if (statisticsRef.current) {
            statisticsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScrollToContacts = () => {
        if (contactsRef.current) {
            contactsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleClickMenu = () => {
        setModalMenu(!modalMenu);
    };

    const handleClickMenuElements = () => {
        setModalMenu(false); // Закриваємо меню після кліку на один з елементів
    };

    let menu = (
        <div className="flex items-center flex-shrink-0">
            <LanguageSwitcher />
            <div onClick={handleClickMenu} className="flex-shrink-0 inline-flex flex-col items-center space-y-[5px]">
                <span className="block w-7 h-[3px] bg-white"></span>
                <span className="block w-7 h-[3px] bg-white"></span>
                <span className="block w-7 h-[3px] bg-white"></span>
            </div>
        </div>
    );


    if (modalMenu) {
        menu = (
            <div onClick={handleClickMenu} className="relative flex flex-col items-center space-y-[5px]">
                <span className="absolute block w-7 h-[3px] translate-x-[-50%] transform rotate-[-45deg] bg-white"></span>
                <span className="absolute block w-7 h-[3px] translate-x-[-50%]  translate-y-[-4.9px] transform rotate-[45deg] bg-white"></span>
            </div>
        );
    }

    let modalMenuContent = (
        <div className={`fixed flex opacity-90 items-center justify-center z-50 bg-customOrange top-0 right-0 w-[45%] h-full transition-transform transform ${modalMenu ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="absolute top-4 right-4">
                <button onClick={handleClickMenu} className="text-black text-2xl">&times;</button>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 py-10 font-daysOne  text-black burger-links">
                <button onClick={() => { handleScrollToWhatBec(); handleClickMenuElements(); }} className="text-[20px]">{t('full-screen.nav.about-us')}</button>
                <button onClick={() => { handleScrollToPropositions(); handleClickMenuElements(); }} className="text-[20px]">{t('full-screen.nav.propositions')}</button>
                <button onClick={() => { handleScrollToStatistics(); handleClickMenuElements(); }} className="text-[20px]">{t('full-screen.nav.statistics')}</button>
                <button onClick={() => { handleScrollToContacts(); handleClickMenuElements(); }} className="text-[20px]">{t('full-screen.nav.contacts')}</button>
            </div>

        </div>
    );

    let panel =
        <>
            <div className="shrink-0 grow-0 w-[120px] portraitt:w-auto lg:logo-lg">
                <img src={logo} alt="Logo" />
            </div>
            {menu}
        </>

    let fullScreen = <img className="absolute inset-0 -z-10 object-cover h-full w-full" src={imgFullScreen} alt="" />;

    if (!isMobile) {
        menu = (
            <div className="menu-lg flex shrink-0 flex-row items-center justify-between text-white">
                <button onClick={handleScrollToWhatBec} className="menu-element pointer-events-auto transition-transform transform-gpu duration-[400ms] hover:scale-[1.2] full-input">{t('full-screen.nav.about-us')}</button>
                <button onClick={handleScrollToPropositions} className="menu-element transition-transform transform-gpu duration-[400ms] hover:scale-[1.2] full-input">{t('full-screen.nav.propositions')}</button>
                <button onClick={handleScrollToStatistics} className="menu-element transition-transform transform-gpu duration-[400ms] hover:scale-[1.2] full-input">{t('full-screen.nav.statistics')}</button>
                <button onClick={handleScrollToContacts} className=" transition-transform transform-gpu duration-[400ms] hover:scale-[1.2] full-input">{t('full-screen.nav.contacts')}</button>

            </div>
        );

        fullScreen = (
            <>
                <div className="background-fill absolute right-0 -z-10 object-cover h-full w-[57.2%]" />
                <img className="background-fill absolute right-0 -z-20 object-cover h-full w-[57.2%]" src={lgFullScreen} alt="" />
                <img className="bg-lgFull absolute bottom-0 -right-[19%] -z-10 object-contain h-[67.4%] w-full" src={girl} alt="" />
            </>
        );

        panel =
            <div className="flex items-center flex-shrink-0">
                <div className="shrink-0 grow-0 w-[120px] portraitt:w-auto lg:logo-lg">
                    <img src={logo} alt="Logo" />
                </div>
                {menu}
            </div>


    }

    return (
        <div id="full-screen" className="mb-[160px] lg:mb-[250px] relative z-40 flex flex-col bg-black h-screen overflow-hidden">
            {modalMenuContent}
            {fullScreen}
            <div id="header" className="fixed z-50 filter backdrop-blur-sm top-0 flex items-center justify-between w-full px-[25px] lg:px-[50px] py-[20px] bg-black bg-opacity-10">
                {panel}

                {!isMobile && <LanguageSwitcher />}

            </div>

            <div></div>
            <div id="info" className="relative top-1/2 transform translate-y-[-50%] flex-grow flex flex-col justify-center mx-[50px] mb-[40px] text-white">
                <h2 className="text-white text-header font-daysOne mb-[18px]">BEST Engineering Competition</h2>
                <h3 className="text-white date-header text-nowrap font-karla leading-[33px] text-[28px]">{t('full-screen.date')}</h3>
                <button onClick={handleScrollToPropositions} style={{ fontSize: 'calc(16px + 4 * (100vw - 320px) / 1120)' }} className="full-screen-button transition-transform transform-gpu duration-[400ms] hover:scale-[1.1] block  bg-customOrange text-black p-[10px]">{t('full-screen.become')}</button>
            </div>
        </div>
    );
}
