import { forwardRef, useRef } from 'react'
import { useSelector } from 'react-redux';
import { BiChevronRight } from 'react-icons/bi';
import { RxDot } from "react-icons/rx";


import classNames from 'classnames'

import SectionPanel from './SectionPanel'
import Card from './Card'


//Photo imports
import headshot from '../content/headshot.jpeg'
import mcgillLogo from '../content/mcgillEngLogo.png'
import degree from '../content/Degree.png'

const HorizontalScrollSection = forwardRef(function HorizontalScrollSection(props, ref) {

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);
    const extraRef = useRef(null);


    useSelector((state) => {
        console.log('Section Selector Run')

        if (state.nav.currentSection !== '') {
            switch (state.nav.currentSection) {
                case '/home':
                    homeRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        inline: 'start'
                    });
                    return;
                case '/about':
                    aboutRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        inline: 'start'
                    });
                    return;
                case '/experience':
                    experienceRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        inline: 'start'
                    });
                    return;
                case '/skills':
                    skillsRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        inline: 'start'
                    });
                    return;
                case '/projects':
                    projectsRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        inline: 'start'
                    });
                    return;
                case '/contact':
                    contactRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        inline: 'start'
                    });
                    return;
                case '/extra':
                    extraRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        inline: 'start'
                    });
                    return;

                default:
                    return;
                    ;
            }
        }
        return state.nav.currentSection;
    });


    // Tailwin css classnames
    const HorizontalScrollSectionClasses = classNames(
        'flex',
        'flex-row',
        'overflow-y-hidden',
        'whitespace-nowrap',
        'scrollbar-hide'
    )

    const skillListItemClasses = classNames(
        'flex',
        'items-center',
        'text-center',
        'text-[2vh]'
    )

    const experienceCardClassNames = classNames(
        'w-[35vw]',
        'max-h-[65vh]',
        'p-[2vh]',
        'm-[5vh]',
        'shadow-[0_0_30px_0px_rgba(0,0,0,0.4)]'
    )

    const projectCardItemClassNames = classNames(
        'm-3',
        'p-3',
        'shadow',
        'text-[1.8vh]',
        'hover:scale-100'
    )

    const projectTitleClassnames = classNames(
        'text-[3vh]',
    )

    // Form classes if needed
    // const formLabelClasses = classNames(
    //     'm-[1vh]',
    //     'flex',
    //     ' flex-col'
    // )

    // const formInputClasses = classNames(
    //     'mt-[1vh]',
    //     'border',
    //     'pl-[4px]'
    // )

    const jobListItemClasses = classNames(
        'flex',
        'items-center',
        'text-center',
        'text-[3vh]'
    )

    return (
        <div ref={ref} className={HorizontalScrollSectionClasses}>
            <SectionPanel ref={homeRef} title='Hello, my name is' className='min-w-[50vw]'>
                <h1 className='font-[Oxanium-Bold] text-[7vh]'>Kyle Myers</h1>
                <p className='whitespace-normal text-[1.3vw]'>
                    I'm a graduated in
                    <span className="font-[Oxanium-Bold]"> software engineering </span>
                    with a particular interest in
                    <span className="font-[Oxanium-Bold]"> machine learning, artificial intelligence, robotics and comupter vision</span>.
                    This is my protfolio website to show off my projects that I've been working on. Enjoy :D
                </p>
                <div className='flex flex-row justify-center'>
                    <img className='w-[20vw] h-[30vh] mt-[5vh] rounded-full' src={headshot} alt='headshot' />
                </div>

            </SectionPanel>
            <SectionPanel ref={aboutRef} title='About' className='min-w-[80vw]'>
                <div className='flex flex-row'>
                    <p className='whitespace-pre-line text-[1.2vw] w-[50%]'>
                        Hi, my name is Kyle, and I'm a graduated software engineer from McGill
                        university in Montreal, Canada. {'\n\n'}
                        Software started catching my eye when I
                        was in highschool building games and programs with C#.
                        From there I've honed my skills and have a broad range of knowledge
                        spaning from backend engineering with java, C and python, to front end development
                        with React, Vue and Node, with a strong understanding and passion for
                        artificial intelligence, machine learning and comupter vision. {'\n\n'}
                        I'm currently running my family business and restructuring the current
                        technology stack.
                    </p>
                    <div className='pl-[5vw] pr-[5vw] pr-10 min-w-[400px]'>
                        <img src={mcgillLogo} className='max-w-[30vw]' alt='degree' />
                        <img src={degree} className='max-w-[30vw] object-right mt-7' alt='certificate' />
                    </div></div>
            </SectionPanel>
            <SectionPanel ref={experienceRef} title='Experience' className='min-w-[120vw]'>
                <div className='flex flex-row justify-around'>
                    <Card className={experienceCardClassNames} title='Industrial Projects' date='August 2022 - Current' id='industrialProjectsPage'>
                        Lead Software Engineer{'\n\n'}
                        Responsible for the website creation, including
                        full stack development and deployment. {'\n\n'}
                        Research into purchase order automation machine learning and applying computer vision principles to scanned PDFS.
                    </Card>
                    <Card className={experienceCardClassNames} title='Morgan Stanley' date='January 2021 - April 2021' id='morganStanleyPage'>
                        Software Engineer Intership {'\n\n'}
                        Created a POC API Gateway built in spring used to manage and filter
                        all incoming transacation requests leverage Kerberos authenticaltion and
                        authorization functionality.{'\n\n'}
                        Built using Spring Cloud Gateway on top of the Spring Boot framework for Java.
                    </Card>
                    <Card className={experienceCardClassNames} title='Fednav' date='May 2020 - August 2020' id='fednavPage'>
                        Leadership / Software Engineeer Internship {'\n\n'}
                        Resonsilbe for analysis and translating systems designed in C into GO.{'\n\n'}
                        Presented to the entire Port of Montreal (200+ people) and the Board of Directors for
                        an ongoing strategy regarding the state of the shipping fleet in the St Laurence
                    </Card>
                </div>
            </SectionPanel>
            <SectionPanel ref={skillsRef} title='Skills' className='min-w-[75vw]'>
                <p className='whitespace-pre-line text-[1.4vw] mb-[4vh]'>
                    During the past 4-5 years, I've gathered a wide variety fo skill
                    to use at my disposal. {'\n\n'}
                    Here are some of the skills, laguages and frameworks
                    I've worked with:
                </p>
                <div className='flex flex-row text-[1.5vw]'>
                    <ul className="min-w-[20vw] ml-[2vw] mr-2[vw]">
                        <li className='mb-2'>Frameworks and Libraries:</li>
                        <li className={skillListItemClasses}><BiChevronRight />OpenCV</li>
                        <li className={skillListItemClasses}><BiChevronRight />NumPy</li>
                        <li className={skillListItemClasses}><BiChevronRight />TensorFlow</li>
                        <li className={skillListItemClasses}><BiChevronRight />PyTorch</li>
                        <li className={skillListItemClasses}><BiChevronRight />React.js</li>
                        <li className={skillListItemClasses}><BiChevronRight />Spring Framework</li>
                        <li className={skillListItemClasses}><BiChevronRight />Kerberos</li>
                        <li className={skillListItemClasses}><BiChevronRight />Django</li>
                        <li className={skillListItemClasses}><BiChevronRight />Vue.js</li>
                        <li className={skillListItemClasses}><BiChevronRight />Flask</li>

                    </ul>
                    <ul className="min-w-[15vw] ml-[2vw] mr-2[vw]">
                        <li className='mb-2'>Languages:</li>
                        <li className={skillListItemClasses}><BiChevronRight />Python</li>
                        <li className={skillListItemClasses}><BiChevronRight />Java</li>
                        <li className={skillListItemClasses}><BiChevronRight />Javascript</li>
                        <li className={skillListItemClasses}><BiChevronRight />C</li>
                        <li className={skillListItemClasses}><BiChevronRight />HTML & CSS</li>
                        <li className={skillListItemClasses}><BiChevronRight />SQL</li>
                        <li className={skillListItemClasses}><BiChevronRight />Bash/Linux</li>
                        <li className={skillListItemClasses}><BiChevronRight />Swift</li>
                        <li className={skillListItemClasses}><BiChevronRight />OCamel</li>
                        <li className={skillListItemClasses}><BiChevronRight />Go</li>
                    </ul>
                    <ul className="min-w-[20vw] ml-[2vw] mr-2[vw]">
                        {/* expand these sections to talk more about them */}
                        <li className='mb-2'>Concepts and Theory</li>
                        <li className={skillListItemClasses}><BiChevronRight />Algorithms and Data Structures</li>
                        <li className={skillListItemClasses}><BiChevronRight />Artificial Intelligence (Monte Carlo, etc.)</li>
                        <li className={skillListItemClasses}><BiChevronRight />Machine Learning (segmentation, features, etc.) </li>
                        <li className={skillListItemClasses}><BiChevronRight />Distributed Systems (FIFO, etc.)</li>
                        <li className={skillListItemClasses}><BiChevronRight />Parallel Computing (threading, complexity)</li>
                        <li className={skillListItemClasses}><BiChevronRight />Advanced Mathematics (cal3, stats, odes)</li>
                        <li className={skillListItemClasses}><BiChevronRight />Signals and Networks</li>
                    </ul>
                </div>
            </SectionPanel>
            <SectionPanel ref={projectsRef} title='Projects' className='min-w-[1000px]'>
                <div className='flex flex-row flex-wrap mt-10'></div>
                <Card title='Facial Recognition Webcam' className={projectCardItemClassNames} titleClasses={projectTitleClassnames} hasFooter={false} id='faceRecPage'>
                    Creating a deep learning facial recognition for my face using VGG16 base architecture with the Tensorflow functional model.
                </Card>
                <Card title='Personal Website' className={projectCardItemClassNames} titleClasses={projectTitleClassnames} hasFooter={false} id='personalWebsitePage'>
                    Created this personal website using React.js, along with the React Redux library for a custom navigation and state system.
                </Card>
                <Card title='Image Classification' className={projectCardItemClassNames} titleClasses={projectTitleClassnames} hasFooter={false} id='imageClassificationProjectPage'>
                    Image classification using tensorflow and convolutional neural network - binary classificaiton to identify happy people and sad people
                </Card>
            </SectionPanel>
            <SectionPanel ref={contactRef} title='Contact' className='min-w-[700px] whitespace-pre-line'>
                <h1 className='text-[2.5vh] mb-[2vh]'>I'm currently looking for work as a software engineer in the following domains:</h1>
                <ul className='text-[2.5vh] font-[Oxanium-Bold] mb-[2vh]'>
                    <li className={jobListItemClasses}><RxDot />Machine Learning Engineer - Infrastructure</li>
                    <li className={jobListItemClasses}><RxDot />Machine Learning Engineer - Research</li>
                    <li className={jobListItemClasses}><RxDot />Backend Software Engineer</li>
                    <li className={jobListItemClasses}><RxDot />Frontend Software Engineer</li>
                </ul>
                <h1 className='text-[2.5vh] mb-[2vh]'>Ideally looking for work in a small startup company  that is just starting out, or in a large tech firm that I can learn a lot from and expand my skills</h1>
                <h1 className='text-[2.5vh] mb-[2vh]'>If I check any of those boxes for you,
                    please feel free to let me know on my email {' '}
                    <address className='inline font-[Oxanium-Bold] hover:text-blue-300'><a href="mailto:kyle.myers@mail.mcgill.ca">kyle.myers@mail.mcgill.ca</a></address>
                    {' '} or you can contact me on any of the links to my socials.</h1>
                <h1 className='text-[2.5vh] mb-[2vh]'>Thanks for coming!</h1>
                {/* FORM CODE FOR LATER IF NEEDED / WANTED*/}
                {/* <form className='flex flex-col mt-5'>
                    <label className={formLabelClasses} value='Name'>Name:
                        <input className={formInputClasses} type='text' />
                    </label>
                    <label className={formLabelClasses}>Company:
                        <input className={formInputClasses} type='text' />
                    </label>
                    <label className={formLabelClasses}>Email:
                        <input className={formInputClasses} type='text' />
                    </label>
                    <label className={formLabelClasses}>Message:
                        <textarea className='min-h-[10vh] min-w-[10vw] max-w-[40vw] mt-2 border pl-1 text-start' type='textarea' />
                    </label>
                    <button className='max-w-[100px] m-3 hover:text-blue-500 border'>Send</button>
                </form> */}
            </SectionPanel>

            {/* <SectionPanel ref={extraRef} title='Extra'>

            </SectionPanel> */}
        </div>
    )
})
export default HorizontalScrollSection