import { useDispatch } from 'react-redux';
import { setPageState } from "../store";
import { RemoveScroll } from 'react-remove-scroll';

import classNames from 'classnames';

import ReactDOM from 'react-dom';
function Page({ children }) {

    const dispatch = useDispatch();

    const handleClick = (event) => {
        console.log('Returning to main screen')
        dispatch(setPageState(''))
    }

    const outterPageClasses = classNames(
        'fixed',
        'inset-0',
        'bg-black/50',
        'z-50',
        'overflow-y-hidden'
    )

    const innerPageClasses = classNames(
        'absolute',
        'inset-20',
        'p-10',
        'bg-white/100',
        'text-[2vh]',
        'overflow-y-scroll',


    )

    return ReactDOM.createPortal(
        <div className={outterPageClasses} onClick={handleClick}>
            <RemoveScroll>
                <div className={innerPageClasses}>
                    {children}
                </div>
            </RemoveScroll>

        </div>,
        document.querySelector('.page-container')
    );

}
export default Page;