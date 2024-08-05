import React, { useState } from 'react';
import { useRef, useEffect } from 'react';
import FullScreen from './components/FullScreen';
import Title from "./components/Title";
import PhotoSlider from "./components/PhotoSlider";
import Description from "./components/Description";
import WhatBec from "./components/WhatBec";
import TdVsCs from "./components/TdVsCs/TdVsCs";
import Opportunities from "./components/Opportunities/Opportunities";
import Statistics from "./components/Statistics";
import Portrait from "./components/Portrait";
import Propositions from "./components/Propositions/Propositions";
import Partners from "./components/Partners";
import Aboutbest from "./components/AboutBest";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer";
import { Proposition } from './components/Propositions/Proposition';
import { SLIDES } from './data';

import { useTranslation } from 'react-i18next';

export default function App() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    const { i18n } = useTranslation();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, [i18n]);


    const [selectedPropositions, setSelectedPropositions] = useState([{ title: "Solid Base", price: 350, isSub: false }]);
    const propositionsRef = useRef(null);
    const whatBecRef = useRef(null);
    const statisticsRef = useRef(null);
    const contactsRef = useRef(null);

    const addToBasket = (title, price, isSub) => {
        setSelectedPropositions(propositions => {
            for (const proposition of propositions) {
                if (proposition.title == title) {
                    return propositions
                }
            }
            return [...propositions, { title, price, isSub }]
        });
    };
    const handleRemoveProposition = (name) => {
        setSelectedPropositions(propositions => {
            const newPropositions = [...propositions]; // Створюємо копію масиву
            const index = newPropositions.findIndex(proposition => proposition.title === name); // Знаходимо індекс пропозиції
            if (index !== -1) {
                newPropositions.splice(index, 1); // Видаляємо пропозицію, якщо вона знайдена
            }
            return newPropositions;
        });
    };


    return (
        <div className=" relative overflow-hidden  flex flex-col  bg-black">

            <FullScreen propositionsRef={propositionsRef} whatBecRef={whatBecRef} statisticsRef={statisticsRef} contactsRef={contactsRef} />
            <WhatBec isMobile={isMobile} innerRef={whatBecRef} />
            <PhotoSlider isMobile={isMobile} images={SLIDES} />
            <TdVsCs isMobile={isMobile} />
            <Opportunities isMobile={isMobile} />
            <Propositions isMobile={isMobile} innerRef={propositionsRef} selectedPropositions={selectedPropositions} addToBasket={addToBasket} handleRemoveProposition={handleRemoveProposition} />
            <Statistics isMobile={isMobile} innerRef={statisticsRef} />
            <Partners isMobile={isMobile} />
            <Aboutbest />
            <Contacts innerRef={contactsRef} />
            <Footer />
        </div>
    );
}
