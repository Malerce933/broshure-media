import katyaImg from "/src/assets/katya.png"
import rulaImg from "/src/assets/rula.png"
import anyaImg from "/src/assets/anya.png"

const images = {
    "katya": katyaImg,
    "rula": rulaImg,
    "anya": anyaImg,

}

import phone from "/src/assets/phone.svg"
import emailImg from "/src/assets/email.svg"
export default function Contact({ image, name, position, number, email }) {
    return (
        <li className=" border-2 border-customOrange contact2 contact1 contact1  mb-5 lg:mb-0">
            <div className=" flex flex-col h-full items-center px-6 lg:px-[30px]">
                <img className="contact-image object-cover w-full max-h-[283px]" src={images[image]} alt="" />
                <div className=" flex-1">
                    <p className=" text-nowrap contact-name ">{name}</p>
                    <p className=" text-center  contact-role ">{position}</p>
                </div>

                <div className="  contact-border w-full border-b-[1px] border-white"></div>
                <a className="self-start" href={`tel:${number}`}>
                    <div className=" contact-info flex items-center t mb-[10px]">
                        <img className="mr-2" src={phone} alt="" />
                        <p>{number}</p>
                    </div>
                </a>
                <a className="self-start" href={`mailto:${email}`}>
                    <div className=" contact-info h-5 flex items-center  mb-[24px]">
                        <img className="mr-2" src={emailImg} alt="" />


                        <p>{email}</p>
                    </div>
                </a>
            </div>
        </li>
    );
}