import { LuDot } from "react-icons/lu";

import classNames from "classnames"

// Image imports
import morganStanleyLogo from '../content/morganStanleyLogo.jpeg'
import springLogo from '../content/springLogo.png';
import travisCiLogo from '../content/travisCiLogo.png';
import dockerLogo from '../content/dockerLogo.png';
import kubernetesLogo from '../content/kubernetesLogo.jpeg';
import kerberosLogo from '../content/kerberosLogo.png';


function MorganStanleyPage() {

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
        'max-h-[15vh]',
        'max-w-[25vw]',
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
            <h1 className={mainTitleClasses}>Morgan Stanely</h1>
            <p className={paragraphClasses}>
                Morgan Stanley is a multinational investment bank and financial services company ranking 61st in the list of Fortune 500 companies. They have offices more than 75,000 employees in 41 countries and the firm's clients include corporations, governments, institutions, and individual people all around the world.
            </p>
            <img src={morganStanleyLogo} alt='morganStanleyLogo' className='max-w-[30vw]'/>
            <p className={paragraphClasses}>
                I was fortunate enough to work for one of the best financial companies in the world as a software engineering intern. I spent 4 months talking and working with some of the most experienced individuals behind the technology stack responsible for banking and trading information processing. I was also exposed to a variety of experienced individuals on the fin-tech quant team as that was a huge interest of mine.
            </p>
            <p className={paragraphClasses}>
                My roles and responsibilities working at Morgan Stanley were as follows:
            </p>
            <h3 className={subTitleClasses}>
                Creating a spring cloud gateway:
            </h3>
            <ul>
                <li className={pointListItemClasses}><LuDot />Create a proof of concept Spring Cloud Gateway for managing incoming and outgoing settlement requests</li>
                <li className={pointListItemClasses}><LuDot />Configure Docker images for Spring Cloud Gateway</li>
                <li className={pointListItemClasses}><LuDot />Deploy the gateway to a Docker dev container managed by Kubernetes</li>
                <li className={pointListItemClasses}><LuDot />Integrate application deployment with TravisCI</li>
                <li className={pointListItemClasses}><LuDot />Create the gateway to function within the existing microservice architecture</li>
                <li className={pointListItemClasses}><LuDot />Look into adding the gateway and its instances to a Kerberos Realm for authentication</li>
                <li className={pointListItemClasses}><LuDot />Present the value and POC to the entire settlements team and the Montreal vice president for backend development</li>
            </ul>
            <p className={paragraphClasses + ' underline'}>
                Key business takeaways:
            </p>
            <p className={paragraphClasses}>
                <span className={keyTakeAwaySpanClasses}>Decreased average request latency by 13.4% (development data)</span>
            </p>
            <p className={paragraphClasses}>
                <span className={keyTakeAwaySpanClasses}>Decreased gateway application size by 47.2%</span>
            </p>
            <p className={paragraphClasses}>
                <span className={keyTakeAwaySpanClasses}>Major decreases in routing complexity using Spring Cloud Gateway</span>
            </p>
            <p className={paragraphClasses}>
                <span className={keyTakeAwaySpanClasses}>Incorporated into TravisCI, Docker, Kubernetes and Kerberos</span>
            </p>
            <div className='flex flex-wrap max-w-inherit'>
                <img src={springLogo} alt='springLogo' className={ipImagesClasses} />
                <img src={travisCiLogo} alt='travisCiLogo' className={ipImagesClasses} />
                <img src={dockerLogo} alt='dockerLogo' className={ipImagesClasses} />
                <img src={kubernetesLogo} alt='kubernetesLogo' className={ipImagesClasses} />
                <img src={kerberosLogo} alt='kerberosLogo' className={ipImagesClasses} />
            </div>
        </div>
    );
}
export default MorganStanleyPage;