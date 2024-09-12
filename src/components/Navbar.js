import SectionLink from "./SectionLink";
import classNames from "classnames";

function Navbar() {

    // Tailwind Class Names

    // Nav bar container tailwind classes
    const navBarClasses = classNames(
        'sticky',
        'h-[7em]',
        'inset-0',
        'flex',
        'flex-row',
        'justify-evenly',
        'items-center',
        'bg-white',
        'z-10',
        'shadow',

    )

    // Individual nav button classes
    const navItemClasses = classNames(
        'p-2',
        'cursor-pointer',
        'custom-pulse',
        'text-[1em]'
    )


    // Output
    return (
        <div className={navBarClasses}>
            <SectionLink section='/home' className={navItemClasses}>Home</SectionLink>
            <SectionLink section='/about' className={navItemClasses}>About</SectionLink>
            <SectionLink section='/experience' className={navItemClasses}>Experience</SectionLink>
            <SectionLink section='/projects' className={navItemClasses}>Projects</SectionLink>
            <SectionLink section='/skills' className={navItemClasses}>Skills</SectionLink>
            <SectionLink section='/contact' className={navItemClasses}>Contact</SectionLink>
            {/* <SectionLink section='/extra' className={navItemClasses}>Extra</SectionLink> */}
        </div>
    );
}
export default Navbar;

