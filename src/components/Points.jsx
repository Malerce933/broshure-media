
import classNames from 'classnames';

export default function Points({ data, className }) {
    console.log(data)
    return (
        <ol>

            {data.map((item, index) => <li className={classNames(" relative partner__text  before: content-[''] before:block  before:bg-orange-400 before:absolute pl-[15px] before:left-0  mb-[10px] 1090xl:mb-[5px]", className)} key={index}>{item}</li>)}
        </ol>
    );
}
