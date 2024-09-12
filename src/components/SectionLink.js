import { useDispatch } from 'react-redux';
import { changeSection } from "../store";
function Link({ children, section, className }) {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(changeSection(section));
    };

    return (
        <div onClick={handleClick} className={className}>{children}</div>

    );
}
export default Link;