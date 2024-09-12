import { FaGoogleDrive } from "react-icons/fa";

import classNames from "classnames"

// Image imports
import kerasLogo from '../content/kerasLogo.png'
import tfLogo from '../content/tfLogo.png'
import icModel from '../content/icModel.png'
import icLoss from '../content/icLoss.png'
import icAccuracy from '../content/icAccuracy.png'


function ImageClassificationProjectPage() {

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

    return (
        <div>
            <div className='flex flex-row justify-between'>
                <h1 className={mainTitleClasses}>'Happy Sad' Image Classification Project</h1>
                <a href='https://drive.google.com/drive/folders/1uLaJixerPW8TRHOolqzm_tu8r_1lazAJ?usp=drive_link' className='text-[4vh] transition ease-in-out hover:scale-110'><FaGoogleDrive /></a>
            </div>
            <p className={paragraphClasses}>
                This project was designed to classify images into 2 sets: happy or sad. The data obtained for this project was the first 150 images on google when you search 'happy' and 'sad' people
            </p>
            <p className={paragraphClasses}>
                By using the tensorflow/keras' sequential modeling, we could build a very accurate model with a few convolution and max pooling layers, resulting in a validation accuracy of 100%
            </p>
            <p className={paragraphClasses}>
                Although this was a starter project, there could be a lot more data introduced into the training of the model, as well as some data augmentation layers from the tensor flow library.
            </p>
            <div className='flex flex-row max-w-inherit'>
                <img src={kerasLogo} alt='kerasLogo' className={ipImagesClasses} />
                <img src={tfLogo} alt='tfLogo' className={ipImagesClasses} />
            </div>
            <div className='flex flex-row max-w-inherit'>
                <img src={icModel} alt='icModel' className={ipImagesClasses} />
                <img src={icLoss} alt='icLoss' className={ipImagesClasses} />
                <img src={icAccuracy} alt='icAccuracy' className={ipImagesClasses} />
            </div>
        </div>
    )
}
export default ImageClassificationProjectPage;