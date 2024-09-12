import classNames from "classnames";
import {useDispatch} from 'react-redux';
import { setPageState, changeSection } from "../store";

function Card({ className, children, id = 'pageName', title, titleClasses, bodyClasses, date, hasFooter = true}) {

    const dispatch = useDispatch()

    const handleClick = (event) => {
        console.log('CLICKED');
        dispatch(changeSection(''))
        dispatch(setPageState(id));    
    };

    const cardClassNames = classNames(
        
        //Hover and transition properties
        'transition',
        'ease-in-out',
        'transform',
        'hover:-translate-y-1',
        'hover:scale-110',
        'hover:text-white',
        'hover:bg-black',
        'duration-700',
        className
    );

    const titleClassNames = classNames(
        'text-[4vh]',
        titleClasses
    )

    const bodyClassNames = classNames(
        'whitespace-pre-line',
        'mt-[2vh]',
        'mb-[2vh]',
        bodyClasses
    )

    const footerClassNames = classNames(
        'mt-[5vh]',
    )

    return (
        <div className={cardClassNames} onClick={handleClick}>
            <h1 className={titleClassNames}>{title}</h1>
            <p className={bodyClassNames}>{children}</p>
            {hasFooter && <p className={footerClassNames}>{date}</p>}
        </div>
    );

}
export default Card;