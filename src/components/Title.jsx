import classNames from 'classnames';

export default function Title({ children, className }) {
    return (
        <h2 style={{ fontSize: 'calc(24px + 24 * (100vw - 320px) / 1120)' }} className={classNames("tracking-normal text uppercase font-daysOne text-white text-title lg:text-[56px] mb-[35px]", className)}>{children}</h2>
    );
}
