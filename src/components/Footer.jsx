import BestLviv from "/src/assets/BestLviv.svg"
import instagram from "/src/assets/instagram.svg"
import telegram from "/src/assets/telegram.svg"
import linkedin from "/src/assets/linkedin.svg"
export default function Footer() {
    return (
        <div className=" footer relative items-center justify-between h-6 flex text-white    ">
            <p className=" footer__text font-daysOne ">2024</p>
            <img className=" absolute left-1/2 footer__best  transform translate-x-[-50%] " src={BestLviv} alt="" />
            <div className="flex justify-center items-center  ">
                <a href="https://www.instagram.com/best_lviv/" target="_blank" rel="noopener noreferrer"><img className="mr-[17px] footer__social " src={instagram} alt="" /></a><a target="_blank" rel="noopener noreferrer" href="https://t.me/bestlviv"><img className="mr-[17px] footer__social" src={telegram} alt="" /></a><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/bestlviv/"> <img className="footer__social" src={linkedin} alt="" /></a>

            </div>
        </div>
    );
}