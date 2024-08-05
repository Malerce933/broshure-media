import Title from "../Title";
import Contact from "./Contact";
import { useTranslation } from "react-i18next";
export default function Contacts({ innerRef }) {
    const { t } = useTranslation()
    const contacts = t('contacts.contacts', { returnObjects: true });
    return (
        <div ref={innerRef} className="contacts flex flex-col relative text-white ">
            <Title className="contacts__title text-center lg:text-center px-[40px]">{t("contacts.title")}</Title>
            <ol className=" flex flex-col lg:flex-row lg:justify-between items-center lg:items-start">
                {contacts.map((contact, index) => <Contact key={index} {...contact}></Contact>)}
            </ol>
        </div>
    );
} 