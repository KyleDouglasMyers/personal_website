import { LuDot } from "react-icons/lu";

import classNames from "classnames";

//Image imports
import IndustrialProjectsLogo from '../content/industrialProjectsLogo.jpg'
import ipScreenshot1 from '../content/ipScreenshot1.png'
import ipScreenshot2 from '../content/ipScreenshot2.png'
import ipScreenshot3 from '../content/ipScreenshot3.png'

import reactJsLogo from '../content/reactLogo.png'
import coreUiLogo from '../content/coreUILogo.jpg'
import emailJSLogo from '../content/emailJSLogo.png'
import googleMapsApi from '../content/googleMapsApiLogo.png'


function IndustrialProjectsPage() {

    const mainTitleClasses = classNames(
        'text-[4vh]',
        'mb-[2vh]',
    )

    const subTitleClasses = classNames(
        'text-[3vh]',
        'mb-[2vh]',
        'mt-[2vh]',
        'underline'
    )
    const paragraphClasses = classNames(
        'mt-[2vh]',
        'mb-[2vh]'

    )

    const pointListItemClasses = classNames(
        'flex',
        'items-center',
        'text-center',
        'whitespace-pre-line'
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

    const keyTakeAwaySpanClasses = classNames(
        'font-[Oxanium-Bold]'
    )


    return (
        <div>
            <h1 className={mainTitleClasses}>Industrial Projects Ltd</h1>
            <p className={paragraphClasses}>
                Industrial Projects Ltd. is an eastern Canadian distributor for pneumatic and hydraulic valves. They also distribute filter components, induing but not limited to housings, bags and cartridges.
            </p>
            <img src={IndustrialProjectsLogo} alt='ipLogo'/>

            <p className={paragraphClasses}>
                When I arrived at Industrial projects they were tracking orders using papers, their website had not been updated since 2013 and emails were being stored locally. They hired me to bring they technology stack up to date, and to do a full reform of order tracking.
            </p>
            <p className={paragraphClasses}>
                My responsibilities as a software engineering intern were as follows:
            </p>
            <h3 className={subTitleClasses}>
                Create and deploy a new website:
            </h3>
            <ul>
                <li className={pointListItemClasses}><LuDot />Be a visual improvement to the old website</li>
                <li className={pointListItemClasses}><LuDot />Allow for contact forms to be send directly to the customer service email</li>
                <li className={pointListItemClasses}><LuDot />Make the website responsive to most display screens</li>
                <li className={pointListItemClasses}><LuDot />Make the entire website content translate from English to French with ease</li>
                <li className={pointListItemClasses}><LuDot />Deploy the website to a server using the Azure cloud infrastructure</li>
                <li className={pointListItemClasses}><LuDot />Configure and update all DNS routings and settings for the website</li>
                <li className={pointListItemClasses}><LuDot />Create code that would allow for easy future additions for new products and team members</li>
                <li className={pointListItemClasses}><LuDot /><span>Website url:{'  '} <a className='underline hover:text-blue-200' href="https://www.industrialprojects.ca">https://www.industrialprojects.ca</a></span></li>
            </ul>
            <div className='flex flex-row max-w-inherit'>
                <img src={ipScreenshot1} alt='ipScreenshot1' className={ipImagesClasses} />
                <img src={ipScreenshot2} alt='ipScreenshot2' className={ipImagesClasses} />
                <img src={ipScreenshot3} alt='ipScreenshot3' className={ipImagesClasses} />
            </div>
            <p className={paragraphClasses + ' underline'}>
                Key business takeaways:
            </p>
            <p className={paragraphClasses}>
                <span className={keyTakeAwaySpanClasses}>Increased sales inquires by 15.4%</span>
            </p>
            <p className={paragraphClasses}>
                <span className={keyTakeAwaySpanClasses}>Directly generated 7.45% increase in gross profit</span>
            </p>
            <p className={paragraphClasses}>
                <span className={keyTakeAwaySpanClasses}>Increased new customers by 4.9%</span>
            </p>

            <div className='flex flex-row max-w-inherit'>
                <img src={reactJsLogo} alt='reactLogo' className={ipImagesClasses} />
                <img src={coreUiLogo} alt='coreUILogo' className={ipImagesClasses} />
                <img src={emailJSLogo} alt='emailJsLogo' className={ipImagesClasses} />
                <img src={googleMapsApi} alt='googleMapsApi' className={ipImagesClasses} />
            </div>
            <h3 className={subTitleClasses}>
                Create and deploy a new order tracking system using cloud infrastructure:
            </h3>
            <ul>
                <li className={pointListItemClasses}><LuDot />Allow sign ins for sales and purchasing agents</li>
                <li className={pointListItemClasses}><LuDot />Add and delete orders as needed with correct new number</li>
                <li className={pointListItemClasses}><LuDot />Track the following information for the orders:</li>
                <ul className='ml-[2vw]'>
                    <li className={pointListItemClasses}><LuDot />Allow sign ins for sales and purchasing agents</li>
                    <li className={pointListItemClasses}><LuDot />Date</li>
                    <li className={pointListItemClasses}><LuDot />Order number</li>
                    <li className={pointListItemClasses}><LuDot />Client purchase order number</li>
                    <li className={pointListItemClasses}><LuDot />Client company name</li>
                    <li className={pointListItemClasses}><LuDot />Items purchased</li>
                    <li className={pointListItemClasses}><LuDot />Total price</li>
                    <li className={pointListItemClasses}><LuDot />Supplier</li>
                    <li className={pointListItemClasses}><LuDot />Employee responsible</li>

                </ul>
                <li className={pointListItemClasses}><LuDot />Be available on all laptops and desktop computers (no phone displays needed)</li>
                <li className={pointListItemClasses}><LuDot />Be able to print out every month order list</li>
                <li className={pointListItemClasses}><LuDot />Comment on each item</li>
                <li className={pointListItemClasses}><LuDot />Make the lists sortable by order number</li>
            </ul>
            <h3 className={subTitleClasses}>Update emailing system for office (non-coding)</h3>
            <p className={paragraphClasses}>Transfer email system from a locally hosted email server previously using Videotron to Microsoft 365 email servers for better efficiency and usability</p>
            <p className={paragraphClasses}>Updating the DNS routing for these emails</p>
        </div>
    );
}
export default IndustrialProjectsPage;