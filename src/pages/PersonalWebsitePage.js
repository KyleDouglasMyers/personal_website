
import { AiFillGithub } from 'react-icons/ai';

import classNames from "classnames"
// Image imports
import reactJsLogo from '../content/reactLogo.png'
import tailwindLogo from '../content/tailwindLogo.png'
import reduxLogo from '../content/reduxLogo.png'


function PersonalWebsitePage() {

    const mainTitleClasses = classNames(
        'text-[4vh]',
        'mb-[2vh]',
    )

    const paragraphClasses = classNames(
        'mt-[2vh]',
        'mb-[2vh]'

    )

    const ipImagesClasses = classNames(
        'max-h-[20vh]',
        'max-w-[20vw]',
        'object-contain',
        'm-[2vw]',
        //Transition classes
        // 'transition',
        // 'ease-in-out',
        // 'transform',
        // 'hover:scale-150',
        // 'hover:z-10'

    )

    return (
        <div>
            <div className='flex flex-row justify-between'>
                <h1 className={mainTitleClasses}>Personal website</h1>
                <a href='https://github.com/KyleDouglasMyers/personal_website_v2' className='text-[4vh] transition ease-in-out hover:scale-110'><AiFillGithub /></a>
            </div>
            <p className={paragraphClasses}>
                This is the personal website the you are currently on! It's designed to be a responsive portfoli and an access point for my online projects
            </p>
            <p className={paragraphClasses}>
                There is also a fully self made navigation system created using react redux by creating a navigation slice (for practice using redux).
                This slice is also involved in making each page (for each experience and card) appear.
            </p>
            <div className='flex flex-row max-w-inherit'>
                <img src={reactJsLogo} alt='reactLogo' className={ipImagesClasses} />
                <img src={tailwindLogo} alt='tailwindLogo' className={ipImagesClasses} />
                <img src={reduxLogo} alt='reduxLogo' className={ipImagesClasses} />
            </div>

        </div>
    )
}
export default PersonalWebsitePage;