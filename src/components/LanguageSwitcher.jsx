import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState(localStorage.getItem('language') || 'ua');

  useEffect(() => {
    i18n.changeLanguage(activeLanguage);
  }, [activeLanguage, i18n]);

  const changeLanguage = (lng) => {
    setActiveLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return (
    <div className='flex-shrink-0 switcher lg:justify-self-end relative text-white inline-flex mr-[13px] lg:mr-[0px] lg:ml-[30px] justify-self-end justify-center '>
      <button
        className={`flex-1 transition duration-700 ease-in-out ${activeLanguage === 'ua' ? 'bg-propositionBorder text-black' : ''}`}
        onClick={() => changeLanguage('ua')}
      >
        UA
      </button>
      <button
        className={`flex-1 transition duration-700 ease-in-out ${activeLanguage === 'en' ? 'bg-propositionBorder text-black' : ''}`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
