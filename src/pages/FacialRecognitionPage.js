import { AiFillGithub } from 'react-icons/ai';

import classNames from "classnames"

import AnacondaLogo from "../content/AnacondaLogo.png"
import JupyterlabLogo from "../content/jupyterlabLogo.png"
import kerasLogo from '../content/kerasLogo.png'
import tfLogo from '../content/tfLogo.png'
import facialAugData from "../content/facialExampleFrames.png"
import FaceRecModel from "../content/facialRecModel.png"
import FaceRecModelClass from "../content/faceRecModelClass.png"
import FacialRecHist from "../content/facialRecHist.png"
import FaceRecrealTimeLoop from "../content/faceRecRealTimeLoop.png"




function FacialRecognitionPage() {

    const mainTitleClasses = classNames(
        'text-[4vh]',
        'mb-[2vh]',
    )

    const paragraphClasses = classNames(
        'mt-[2vh]',
        'mb-[2vh]'

    )

    const ipImagesClasses = classNames(
        'max-h-[15vh]',
        'max-w-[15vw]',
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
                <h1 className={mainTitleClasses}>Facial Recognition Project</h1>
                <a href='https://github.com/KyleDouglasMyers/facerecognitionproject/blob/main/FaceDetection.ipynb' className='text-[4vh] transition ease-in-out hover:scale-110'><AiFillGithub /></a>
            </div>
            <p className={paragraphClasses}>
                This projects was made using Keras and Tensorflow in a Anaconda environment using JupyterLab. The goal of the project was to create a real-time facial Recognition software that allowed me to track my face as it moved throughout the frame of my computer webcam.
            </p>
            <div className='flex flex-wrap max-w-inherit justify-center'>
                <img src={AnacondaLogo} alt='reactLogo' className={ipImagesClasses} />
                <img src={JupyterlabLogo} alt='tailwindLogo' className={ipImagesClasses} />
                <img src={kerasLogo} alt='reduxLogo' className={ipImagesClasses} />
                <img src={tfLogo} alt='reduxLogo' className={ipImagesClasses} />
            </div>
            <p className={paragraphClasses}>
                This project was made using Francois Chollet’s Deep Learning with Python and Nicholas Rennotte’s YouTube guide on facial recognition.
            </p>
            <p className={paragraphClasses}>
                I began by creating a dataset of images with my face by reading frames during a video capture loop. Next, I annotated the pictures of using labelme software.
                After the annotations were complete, I used the albumentations library to augment the photos to create more data using the original set form the webcam.
            </p>
            <p className={paragraphClasses}>
                Here are some of the results of the augmented data:
            </p>
            <img src={facialAugData} alt='facialAugData' />
            <p className={paragraphClasses}>
                After data augmentation and annotation was finished, I created a functional model using the base of the VGG16 layer, and a few Dense and GlobalMaxPooling layers to output corners of the bounding boxes, and the class (if there was a person inside the frame or not).
            </p>
            <img src={FaceRecModel} alt='faceRecModelSummary' className='max-w-[40vw]' />
            <p className={paragraphClasses}>
                After customizing the localization and classification error functions, I created the FaceTracker class.
            </p>
            <img src={FaceRecModelClass} alt='faceRecModelClass' className='max-w-[40vw]' />
            <p className={paragraphClasses}>
                This class has custom train_step and test_step functions to update weight using the gradientTape. By watching the gradient as the localization and classification loss (and then total loss), I used the gradient from the total loss as a function of the trainable weights to update our model.
            </p>
            <p className={paragraphClasses}>
                After that, I used the fit function to train the model on the training data along with the validation data partition to guide training.

                Here are the resulting graphs. Note that the bottom axis are the number of epochs, and the left axis is the magnitude of respective loss.
            </p>
            <img src={FacialRecHist} alt='histogram' className='max-w-[60vw]' />
            <p className={paragraphClasses}>
                After this was done, I saved the model, and used it to evaluate each frame during a video capture sequence, and was able to track my face in the frame.
            </p>
            <img src={FaceRecrealTimeLoop} alt='histogram' className='max-w-[40vw]' />
        </div>
    )
}
export default FacialRecognitionPage;