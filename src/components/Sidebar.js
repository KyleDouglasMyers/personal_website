import classNames from 'classnames';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillLock } from 'react-icons/ai';
import { FaXTwitter } from "react-icons/fa6";

function Sidebar() {

    // Tailwind Class Names

    const sidebarClassNames = classNames(
        'flex',
        'flex-row',
        'text-[2.5vw]',
        'min-w-[7vw]',
        'border-r-[2px]',
        'border-black',
        'items-center',
        'justify-around',
        'pt-[5vh]',
        'pb-[5vh]'

    )

    const sidebarItemClassNames = classNames(
        // 'mt-[5vh]',
        'custom-pulse',
    )

    return (
        <div className={sidebarClassNames}>

            <a href='https://www.linkedin.com/in/kyle-douglas-myers/'><AiFillLinkedin className={sidebarItemClassNames} /></a>
            <a href='https://github.com/KyleDouglasMyers'><AiFillGithub className={sidebarItemClassNames} /></a>
            <a href='https://www.instagram.com/kyle.myers__/'><AiFillInstagram className={sidebarItemClassNames} /></a>
            <a href='https://twitter.com/kyle_d_myers'><FaXTwitter className={sidebarItemClassNames} /></a>
            <a href='https://twitter.com/kyle_d_myers'><AiFillLock className={sidebarItemClassNames} /></a>
        </div>
    );
}

export default Sidebar;