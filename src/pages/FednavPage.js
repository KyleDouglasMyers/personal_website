import { LuDot } from "react-icons/lu";

import classNames from "classnames"

// Image imports
import fenavLogo from '../content/fednavLogo.png';
import goLogo from '../content/goLogo.webp';
import cLogo from '../content/cLogo.png';



function FednavPage() {

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
        'max-w-[30vw]',
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
            <h1 className={mainTitleClasses}>Fednav Ltd.</h1>
            <p className={paragraphClasses}>
                Fednav is a Canadian company privately held that operates within the maritime transport sector, facilitating the movement of more than 30 million tonnes of bulk and break bulk cargo globally. It's fleet consists of around 120 vessels under long-term and spot charters.
            </p>
            <img src={fenavLogo} alt='fednavLogo'/>
            <p className={paragraphClasses}>
                During my internship at Fednav, I contributed to transitioning their shipping information software from C to Go. We chose Go for its simplicity, strong concurrency, and extensive library, which helped streamline development and enhancing efficiency in managing Fednav's shipping operations.
            </p>
            <p className={paragraphClasses}>
                My job was to help update the web servers and client code used for monitoring the status and location of the ships in route, along with the World Customs Organization (WCO) Harmonized System codes used to identify cargo categories incoming into Canada.
            </p>
            <p className={paragraphClasses}>
                I also was involved in creating a presentation regarding the future economic status of the St-Laurences rivers dry bulk shipping business. We presented a 45 minute presentation once to the Board of Directors, and the next at the Port of Montreal in front of 200+ individuals.
            </p>
            <p className={paragraphClasses}>
                My responsibilities were:
            </p>
            <h3 className={subTitleClasses}>
                Update the Harmonized System code transfer software from C to Go:
            </h3>
            <ul>
                <li className={pointListItemClasses}><LuDot />Researching to understand the benefits of transitioning from C to Go</li>
                <li className={pointListItemClasses}><LuDot />Evaluating the suitability of Go for Fednav's shipping programs</li>
                <li className={pointListItemClasses}><LuDot />Presenting findings to the team</li>
                <li className={pointListItemClasses}><LuDot />Making sure functionality and performance were maintained or improved during the transition</li>
                <li className={pointListItemClasses}><LuDot />Participating in testing activities to ensure that converted code functions correctly</li>
                <li className={pointListItemClasses}><LuDot />Identifying and resolving any issues or bugs that arise during the transition process</li>
                <li className={pointListItemClasses}><LuDot />Documenting the conversion process, including code changes and challenges encountered</li>
            </ul>
            <p className={paragraphClasses + ' underline'}>
                Key business takeaways:
            </p>
            <p className={paragraphClasses}>
                <span className={keyTakeAwaySpanClasses}>Decreased TCP/IP application layer complexity</span>
            </p>
            <p className={paragraphClasses}>
                <span className={keyTakeAwaySpanClasses}>Go request processing latency remained within 10% of original C latency</span>
            </p>
            <p className={paragraphClasses}>
                <span className={keyTakeAwaySpanClasses}>Used Go netowrking libraries and have experience with concurrency</span>
            </p>
            <div className='flex flex-row max-w-inherit'>
                <img src={goLogo} alt='goLogo' className={ipImagesClasses} />
                <img src={cLogo} alt='cLogo' className={ipImagesClasses} />
            </div>
            <h3 className={subTitleClasses}>
                Create a presentation on dry bulk shipping strategies in the St. Lawrence River:
            </h3>
            <ul>
                <li className={pointListItemClasses}><LuDot />Do research on the dry bulk shipping business in the St Lawrence river</li>
                <li className={pointListItemClasses}><LuDot />Create part of a presentation on new technology on future ships</li>
                <li className={pointListItemClasses}><LuDot />Evaluate and present how machine learning can be used for the shipping industry</li>
                <li className={pointListItemClasses}><LuDot />Evaluate and present how new ships can use alternate fuel sources in the future</li>

            </ul>
        </div>
    );
}
export default FednavPage;