import { useRef } from 'react'
import { useSelector } from 'react-redux';
import { BiChevronRight } from 'react-icons/bi';
import { RxDot } from "react-icons/rx";

import classNames from 'classnames';

import Navbar from './components/Navbar';
import SectionPanel from './components/SectionPanel';
import Card from './components/Card';

import Sidebar from './components/Sidebar';

import Page from './pages/Page';
import IndustrialProjectsPage from './pages/IndustrialProjectsPage';
import MorganStanleyPage from './pages/MorganStanleyPage';
import FednavPage from './pages/FednavPage';
import ImageClassificationProjectPage from './pages/ImageClassificationProjectPage';
import PersonalWebsitePage from './pages/PersonalWebsitePage';
import FacialRecognitionPage from './pages/FacialRecognitionPage';
import AuthentikPage from './pages/AuthentikPage';

import headshot from './content/headshot.jpeg'
import mcgillLogo from './content/mcgillEngLogo.png'
import degree from './content/Degree.png'

function App() {


  const pageState = useSelector((state) => {
    return state.nav.page
  })

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const extraRef = useRef(null);


  useSelector((state) => {
    console.log('Section Selector Run')

    if (state.nav.currentSection !== '' && state.nav.currentSection !== 'modal') {
      console.log('Inside scrolling:')
      console.log(state.nav.currentSection)
      switch (state.nav.currentSection) {
        case '/home':
          homeRef.current.scrollIntoView({
            behavior: 'smooth'
          });
          return;
        case '/about':
          aboutRef.current.scrollIntoView({
            behavior: 'smooth'
          });
          return;
        case '/experience':
          experienceRef.current.scrollIntoView({
            behavior: 'smooth'
          });
          return;
        case '/skills':
          skillsRef.current.scrollIntoView({
            behavior: 'smooth'
          });
          return;
        case '/projects':
          projectsRef.current.scrollIntoView({
            behavior: 'smooth'
          });
          return;
        case '/contact':
          contactRef.current.scrollIntoView({
            behavior: 'smooth'
          });
          return;
        case '/extra':
          extraRef.current.scrollIntoView({
            behavior: 'smooth'
          });
          return;

        default:
          return;
      }
    }
    return state.nav.currentSection;
  });

  let currentPage = null;

  if (pageState) {
    switch (pageState) {
      case 'industrialProjectsPage':
        currentPage = <IndustrialProjectsPage />
        break;
      case 'morganStanleyPage':
        currentPage = <MorganStanleyPage />
        break;
      case 'fednavPage':
        currentPage = <FednavPage />
        break;
      case 'imageClassificationProjectPage':
        currentPage = <ImageClassificationProjectPage />
        break;
      case 'personalWebsitePage':
        currentPage = <PersonalWebsitePage />
        break;
      case 'faceRecPage':
        currentPage = <FacialRecognitionPage />
        break;
      case 'authentikPage':
        currentPage = <AuthentikPage/>
        break
      default:
        currentPage = null;
    }
  }

  //Global app tailwin css definitons:
  const appClassNames = classNames(
    'font-[Oxanium]',
    'relative',
    // 'max-w-[1000px]'
  )

  const experienceCardClassNames = classNames(
    'w-[500px]',
    'p-[2vh]',
    'm-[5vh]',
    'shadow-[0_0_30px_0px_rgba(0,0,0,0.4)]'
  )

  const projectCardItemClassNames = classNames(
    'w-[300px]',
    'm-3',
    'p-3',
    'z-0',
    'shadow',
    'text-[1.8vh]',
    'hover:scale-100',
    'hover:z-0'
  )

  const projectTitleClassnames = classNames(
    'text-[3vh]',
  )

  const skillListItemClasses = classNames(
    'flex',
    'items-center',
    'text-center',
    'text-[2vh]'
  )

  const jobListItemClasses = classNames(
    'flex',
    'items-center',
    'text-center',
    'text-[3vh]'
  )

  return (
    <div className='flex flex-col'>
      <Navbar />

      <div className={appClassNames}>
        <SectionPanel ref={homeRef}>
          <div className='flex flex-col sm:flex-row items-center'>
            <div className='flex flex-col pr-[10vh]'>
              <h1 className='text-[2em] mb-[2vh]'>Hello, my name is</h1>
              <h1 className='font-[Oxanium-Bold] text-[4em]'>Kyle Myers</h1>
              <p className='whitespace-normal text-[2em]'>
                I'm a graduated in
                <span className="font-[Oxanium-Bold]"> software engineering </span>
                with a particular interest in
                <span className="font-[Oxanium-Bold]"> machine learning, artificial intelligence, robotics and comupter vision</span>.
                This is my protfolio website to show off my projects that I've been working on. Enjoy :D
              </p>
            </div>
            <img className='w-[300px] h-[300px] rounded-full' src={headshot} alt='headshot' />
          </div>

        </SectionPanel>
        <SectionPanel ref={aboutRef} className=''>

          <div className='flex flex-row'>
            <div className='flex flex-col max-w-[50vw]'>
              <h1 className='text-[4vh] mb-[2vh]'>About</h1>
              <p className='whitespace-pre-line text-[1.2em]'>
                Hi, my name is Kyle, and I'm a graduated software engineer from McGill
                university in Montreal, Canada. {'\n\n'}
                Software started catching my eye when I
                was in highschool building games and programs with C#.
                From there I've honed my skills and have a broad range of knowledge
                spaning from backend engineering with java, C and python, to front end development
                with React, Vue and Node, with a strong understanding and passion for
                artificial intelligence, machine learning and comupter vision. {'\n\n'}
                I'm currently helping build and deploy a supply chain / logistics
                cloud application for tracking information regarding purchase orders,
                client information, sales statistics and much more.
              </p>
            </div>

            <div className='pl-[5vw] pr-[5vw] pr-10 min-w-[400px]'>
              <img src={mcgillLogo} className='max-w-[30vw]' alt='degree' />
              <img src={degree} className='max-w-[30vw] object-right mt-7' alt='certificate' />
            </div>
          </div>
        </SectionPanel>
        <SectionPanel ref={experienceRef} title='Experience'>
          <div className='flex flex-wrap justify-around'>
            <Card className={experienceCardClassNames} title='Industrial Projects' date='May 2022 - Current' id='industrialProjectsPage'>
              Software Engineer{'\n\n'}
              Responsible for the website creation and
              full stack development and deployment of supply chain and logistics software. {'\n\n'}
            </Card>
            <Card className={experienceCardClassNames} title='Morgan Stanley' date='January 2021 - April 2021' id='morganStanleyPage'>
              Software Engineer Intership {'\n\n'}
              Created a POC API Gateway built in spring used to manage and filter
              all incoming transacation requests leverage Kerberos authenticaltion and
              authorization functionality.{'\n\n'}
              Built using Spring Cloud Gateway on top of the Spring Boot framework with Java.
            </Card>
            <Card className={experienceCardClassNames} title='Fednav' date='May 2020 - August 2020' id='fednavPage'>
              Software Engineeer Internship {'\n\n'}
              Resonsilbe for analysis and translating shipping systems designed in C into GO.{'\n\n'}
              Presented to the entire Port of Montreal (200+ people) and the Board of Directors for
              an ongoing strategy regarding the state of the shipping fleet in the St Laurence
            </Card>
          </div>
        </SectionPanel>
        <SectionPanel ref={projectsRef} title='Projects'>
          <div className='flex flex-wrap mt-10 justify-around'>
            <Card title='Authentik Social Media' className={projectCardItemClassNames} titleClasses={projectTitleClassnames} hasFooter={false} id='authentikPage'>
              Creating a facial recognition sign up social media application requiring user face verification upon sign up, login and posting.
            </Card>
            <Card title='Facial Recognition Webcam' className={projectCardItemClassNames} titleClasses={projectTitleClassnames} hasFooter={false} id='faceRecPage'>
              Creating a deep learning facial recognition for my face using VGG16 base architecture with the Tensorflow functional model.
            </Card>
            <Card title='Personal Website' className={projectCardItemClassNames} titleClasses={projectTitleClassnames} hasFooter={false} id='personalWebsitePage'>
              Created this personal website using React.js, along with the React Redux library for a custom navigation and state system.
            </Card>
            <Card title='Image Classification' className={projectCardItemClassNames} titleClasses={projectTitleClassnames} hasFooter={false} id='imageClassificationProjectPage'>
              Image classification using tensorflow and convolutional neural network - binary classificaiton to identify happy people and sad people
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
        <SectionPanel ref={contactRef} title='Contact' className='min-w-[700px] whitespace-pre-line'>
          <h1 className='text-[2.5vh] mb-[2vh]'>I'm currently looking for work as a software engineer in the following domains:</h1>
          <ul className='text-[2.5vh] font-[Oxanium-Bold] mb-[2vh]'>
            <li className={jobListItemClasses}><RxDot />Machine Learning Software Engineer</li>
            <li className={jobListItemClasses}><RxDot />Full Stack - Software Engineer</li>
          </ul>
          <h1 className='text-[2.5vh] mb-[2vh]'>Ideally looking for work in a small startup company  that is just starting out, or in a large tech firm that I can learn a lot from and expand my skills</h1>
          <h1 className='text-[2.5vh] mb-[2vh]'>If I check any of those boxes for you,
            please feel free to let me know on my email {' '}
            <address className='inline font-[Oxanium-Bold] hover:text-blue-300'><a href="mailto:kyle.myers@mail.mcgill.ca">kyle.myers@mail.mcgill.ca</a></address>
            {' '} or you can contact me on any of the links to my socials.</h1>
          <h1 className='text-[2.5vh] mb-[2vh]'>Thanks for coming!</h1>
        </SectionPanel>
      </div>

      {(pageState === '') ? null :

        <Page>
          {currentPage}
        </Page>

      }
      <Sidebar />
      {/* <div className={appClassNames} ref={appRef}>
                    <Navbar />
                    <div className={containerSectionClasses}>
                        <Sidebar />
                        <HorizontalScrollSection ref={scrollSectionRef} />
                    </div>

                </div>
                {(pageState === '') ? null :

                    <Page>
                        {currentPage}
                    </Page>

                } */}
    </div>

  )
}
export default App;
