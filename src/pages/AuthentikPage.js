import classNames from "classnames"

import xcode from '../content/xCode.png'
import swift from '../content/swift.png'
import swiftUI from '../content/swiftui.png'
import avFoundation from '../content/avFoundation.png'
import mlCore from '../content/mlCore.png'
import firebase from '../content/firebase.png'






function AuthentikPage(){

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

    // const pointListItemClasses = classNames(
    //     'flex',
    //     'items-center',
    //     'text-center',
    //     'whitespace-pre-line'
    // )

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

    // const keyTakeAwaySpanClasses = classNames(
    //     'font-[Oxanium-Bold]'
    // )

    return (
        <div>
            <h1 className={mainTitleClasses}>Authentik Social Media</h1>
            <p className={paragraphClasses}>
                Authentik is a solo build project to create a social media app with the purpose of eliminating bots, fake accounts, phishing and unauthenticated users by forcing members to submit a identification photo to join the network.
            </p>
            <p className={paragraphClasses}>
                Users are asked to submit a photo of themselves upon registration. This photo will then be processed, and users must authenticate using their camera that they are the same person as identified in the picture.
            </p>
            <p className={paragraphClasses}>
                This app was built using Swift, SwiftUI, AVFoundation, ML Core, Firebase, and XCode. Users are identified by comparing feature embeddings from both the live camera on their phone, and to their submitted picture.
            </p>
            <h3 className={subTitleClasses}>
                Core Tech:
            </h3>
            <div className='flex flex-wrap max-w-inherit'>
                <img src={xcode} alt='xcode' className={ipImagesClasses} />
                <img src={firebase} alt='firebase' className={ipImagesClasses} />
                <img src={mlCore} alt='mlCore' className={ipImagesClasses} />
                <img src={avFoundation} alt='avFoundation' className={ipImagesClasses} />
                <img src={swift} alt='swift' className={ipImagesClasses} />
                <img src={swiftUI} alt='swiftUI' className={ipImagesClasses} />

            </div>
        </div>
    );
}

export default AuthentikPage;