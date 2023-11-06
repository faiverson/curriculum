"use client"

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Accordion from 'components/Accordion'
import Burger from 'components/Burger'
import Navbar from 'components/Navbar'
import ScrollToTopButton from 'components/ScrollToTopButton'
import Image from 'next/image'
import Link from 'next/link'
import Flag from 'react-world-flags'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, []);

  if (!mounted) {
    return null
  }

  return (
    <>
      <main id='main'>
        <header>
          <div className="box-border dark:bg-bold-black border-[0.1rem]-bold-black-alternative bg-neutral-100 h-12 print:pt-40">
            <div className='h-full flex flex-row-reverse justify-between'>
              <button className='pr-2 dark:text-white text-bg-bold-black hover:scale-110 active:scale-100 duration-200 ' onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}>
                {theme === 'dark'
                  ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                  : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                  </svg>
                }
              </button>
              <Burger />
              <div className="w-full py-0 print:hidden md:flex items-center container mx-auto flex-auto max-w-6xl hidden">
                <Navbar className="uppercase flex gap-6 px-12 print:hidden" />
              </div>
            </div>
          </div>
        </header>
        <section id="cover" className="cover">
          <div className="section-center flex px-12 flex-col md:flex-row print:flex-row">
            <div className="info">
              <div className="info-title font-source">Hi, I&rsquo;m</div>
              <h1 className="name">Fabian Torres</h1>
              <div className="flex flex-col">
                <div className="more-item">👨‍💻 Senior Software Developer</div>
                <div className="more-item">🏡 Cordoba, Argentina</div>
              </div>
              <div className="hidden relative mt-4 md:mt-8 print:mt-8 md:block print:block">
                <button className="contact-button" type="button"><Link href={'mailto:fa.iverson@gmail.com'}>Contact me</Link></button>
              </div>
            </div>
            <div className="profile">
              <Image alt="Fabian Torres"
                fill={true}
                src="/img/sl8477.webp"
                placeholder="blur"
                priority={false}
                style={{ objectFit: 'contain' }}
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0dXSvBwACzgFG0/TLDgAAAABJRU5ErkJggg==" />
              <svg className="confetti-up" viewBox="0 0 56 34">
                <path d="M0 33.5L36.5 0L55.5 12L36.5 33.5H0Z" className="dark:fill-yellow-confetti fill-red-confetti" />
              </svg>
              <svg className="confetti-right" viewBox="0 0 43 51">
                <path d="M9.5 38L0 0L42.5 30L36 50.5L9.5 38Z" className="dark:fill-blue-confetti fill-blue-400" />
              </svg>
              <svg className="confetti-left" viewBox="0 0 25 35">
                <path d="M0 23L20.5 0L24.5 27.5L15 34.5L0 23Z" className="fill-bg-black" />
              </svg>
            </div>
            <div className="text-center my-4 md:hidden print:hidden">
              <Link href={'mailto:fa.iverson@gmail.com'} className="contact-button" type="button"><Link href={'mailto:fa.iverson@gmail.com'}>Contact me</Link></Link>
            </div>
          </div>
        </section>

        {/* summary */}
        <section id="summary" className="summary">
          <div className="section-center">
            <h2 className="subtitle">Summary</h2>
            <div className="summary-wrapper">
              <div className="summary-icon">
                <svg viewBox="0 0 232 192">
                  <path d="M87.2139 28.7496L110.458 51.2244L106.553 8.46097L89.2154 4.6467L87.2139 28.7496Z" className="dark:fill-yellow-confetti fill-red-confetti" />
                  <path d="M85.8939 72.3088L110.797 67.1468L92.7888 52.9374L83.8638 56.8396L85.8939 72.3088Z" className="dark:fill-bold-grey fill-stone-800" />
                  <rect width="284.781" height="29.7162" transform="matrix(-1 0 0 1 185.78 161.788)" className=" dark:fill-blue-confetti fill-blue-400" />
                  <path d="M101.731 85.0062C106.314 80.4235 113.77 80.4238 118.354 85.0072C119.764 86.4183 128.765 95.4272 130.14 96.8036V65.7571C130.14 62.6177 131.363 59.6664 133.583 57.4467L144.663 46.3657C146.883 44.1457 149.835 42.9233 152.974 42.9233H220.247C226.727 42.9233 232 48.1957 232 54.6763V164.893C232 171.374 226.727 176.646 220.247 176.646H141.893C135.413 176.646 130.14 171.374 130.14 164.893V130.06L101.732 101.628C97.1382 97.0344 97.1372 89.5998 101.731 85.0062ZM153.646 50.7587C152.906 50.7587 151.48 50.6304 150.204 51.906L139.123 62.987C137.88 64.2305 137.975 65.5931 137.975 66.4294H153.646V50.7587ZM137.976 164.893C137.976 167.054 139.733 168.811 141.893 168.811H220.247C222.407 168.811 224.164 167.054 224.164 164.893V54.6763C224.164 52.5161 222.407 50.7587 220.247 50.7587H161.482V70.347C161.482 72.5106 159.728 74.2647 157.564 74.2647H137.976V104.646C137.976 104.646 149.534 116.214 149.534 116.214L155.072 121.752C155.502 122.182 155.826 122.706 156.019 123.283L161.559 139.905C162.029 141.312 161.662 142.865 160.613 143.914C159.562 144.965 158.009 145.329 156.604 144.86L139.982 139.32C139.405 139.128 138.881 138.804 138.451 138.373L137.976 137.898V164.893ZM146.762 124.522L141.221 130.063L143.338 132.179L151.648 134.949L148.878 126.638L146.762 124.522ZM135.682 124.521L141.222 118.981C138.272 116.028 125.169 102.914 122.39 100.133L116.85 105.673L135.682 124.521ZM107.273 96.0882L111.312 100.13L116.852 94.5898L112.812 90.5465C111.284 89.0189 108.799 89.0192 107.271 90.5465C105.744 92.0744 105.736 94.5512 107.273 96.0882Z" className="dark:fill-bold-grey fill-stone-800" />
                  <path d="M157.565 82.1001H212.413C214.576 82.1001 216.33 83.8542 216.33 86.0178C216.33 88.1814 214.576 89.9354 212.413 89.9354H157.565C155.402 89.9354 153.648 88.1814 153.648 86.0178C153.648 83.8542 155.402 82.1001 157.565 82.1001Z" className="dark:fill-bold-grey fill-stone-800" />
                  <path d="M173.236 97.7708H212.413C214.576 97.7708 216.33 99.5248 216.33 101.688C216.33 103.852 214.576 105.606 212.413 105.606H173.236C171.072 105.606 169.318 103.852 169.318 101.688C169.318 99.5248 171.072 97.7708 173.236 97.7708Z" className="dark:fill-yellow-confetti fill-red-confetti" />
                  <path d="M173.236 113.441H212.413C214.576 113.441 216.33 115.195 216.33 117.359C216.33 119.523 214.576 121.277 212.413 121.277H173.236C171.072 121.277 169.318 119.523 169.318 117.359C169.318 115.195 171.072 113.441 173.236 113.441Z" className="dark:fill-bold-grey fill-stone-600" />
                  <path d="M173.236 129.112H212.413C214.576 129.112 216.33 130.866 216.33 133.03C216.33 135.193 214.576 136.947 212.413 136.947H173.236C171.072 136.947 169.318 135.193 169.318 133.03C169.318 130.866 171.072 129.112 173.236 129.112Z" className="dark:fill-yellow-confetti fill-blue-400" />
                  <path d="M157.565 153.14H181.071C183.235 153.14 184.989 154.894 184.989 157.058C184.989 159.222 183.235 160.976 181.071 160.976H157.565C155.401 160.976 153.647 159.222 153.647 157.058C153.647 154.894 155.401 153.14 157.565 153.14Z" className="dark:fill-bold-grey fill-stone-800" />
                  <path d="M139.555 168.392H-26.3606V176.646H146.159L139.555 168.392Z" className="dark:fill-bold-grey fill-stone-800" />
                </svg>
              </div>
              <div className="break-words dark:text-bold-grey text-stone-600 text-base pr-4 lg:pr-12 lg:max-w-[38.11em]">
                <p>I am an accomplished Software Developer boasting 20 years of extensive experience across diverse project environments. My career has been marked by a strong commitment to teamwork and a relentless focus on delivering client-centric solutions. My skill set primarily centers around JavaScript and PHP. I am proficient in both, where I&apos;ve not only mastered the languages but also several frameworks and libraries.</p>
              </div>
            </div>
          </div>
        </section>

        {/* overview */}
        <section id="overview" className="overview">
          <div className="section-center">
            <h2 className="subtitle">Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 lg:gap-x-44 lg:gap-y-8 gap-y-4 print:gap-y-2">
              <div className="wrapper-item">
                <div className="item">
                  <svg className="icon" viewBox="0 0 56 34" style={{ minWidth: '5.5em', maxWidth: '5.5em', width: '5.5em', minHeight: '3.3em', maxHeight: '3.3em', height: '3.3em' }}>
                    <path d="M0 33.5L36.5 0L55.5 12L36.5 33.5H0Z" className="dark:fill-yellow-confetti fill-red-confetti" />
                  </svg>
                  <div className="number">+20</div>
                  <div><span>&nbsp;years of Professional Experience</span></div>
                </div>
              </div>
              <div className="wrapper-item">
                <div className="item">
                  <svg className="icon" viewBox="0 0 56 34" style={{ minWidth: '5.5em', maxWidth: '5.5em', width: '5.5em', minHeight: '3.3em', maxHeight: '3.3em', height: '3.3em' }}>
                    <path d="M0 33.5L36.5 0L55.5 12L36.5 33.5H0Z" className="fill-red-confetti dark:fill-yellow-confetti " />
                  </svg>
                  <div className="number">2</div>
                  <div><span>&nbsp;Languages</span></div>
                </div>
              </div>
              <div className="wrapper-item">
                <div className="item">
                  <svg className="icon" viewBox="0 0 56 34" style={{ minWidth: '5.5em', maxWidth: '5.5em', width: '5.5em', minHeight: '3.3em', maxHeight: '3.3em', height: '3.3em' }}>
                    <path d="M0 33.5L36.5 0L55.5 12L36.5 33.5H0Z" className="fill-red-confetti dark:fill-yellow-confetti " />
                  </svg>
                  <div className="number">+10</div>
                  <div><span>&nbsp;of Experience with Laravel</span></div>
                </div>
              </div>
              <div className="wrapper-item">
                <div className="item">
                  <svg className="icon" viewBox="0 0 56 34" style={{ minWidth: '5.5em', maxWidth: '5.5em', width: '5.5em', minHeight: '3.3em', maxHeight: '3.3em', height: '3.3em' }}>
                    <path d="M0 33.5L36.5 0L55.5 12L36.5 33.5H0Z" className="fill-red-confetti dark:fill-yellow-confetti " />
                  </svg>
                  <div className="number">+5</div>
                  <div><span>&nbsp;of Experience with React</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* skills */}
        <section className="skills">
          <div className="section-center">
            <h2 className="subtitle">Skills ✍</h2>
            <ul className="flex flex-wrap flex-col lg:flex-row mx-2 lg:mx-4 bullet">
              <li><div className="bullet" /><div className="text">React, Angular, Vue</div></li>
              <li><div className="bullet" /><div className="text">Laravel</div></li>
              <li><div className="bullet" /><div className="text">HTML/CSS</div></li>
              <li><div className="bullet" /><div className="text">Node</div></li>
              <li><div className="bullet" /><div className="text">Databases: MySQL, SQL Server, MongoDB, PostgreSQL, FireBase </div></li>
              <li><div className="bullet" /><div className="text">Drupal, Zend, CodeIgniter, WordPress, Joomla, Slim, Yii, Tonic, CakePHP</div></li>
              <li><div className="bullet" /><div className="text">Prototype, MooTools, Ext.js, Backbone.js, jQuery, Node.js, Express Js, Require.js, Angular.js, Backbone Marionette</div></li>
              <li><div className="bullet" /><div className="text">Methodologies: Agile, Extreme Programming (XP), Feature-Driven Development (FDD), DevOps, CI</div></li>
              <li><div className="bullet" /><div className="text">RestAPI, SOAP, GraphQL</div></li>
              <li><div className="bullet" /><div className="text">Design Patterns knowledge, Git, SASS, LESS</div></li>
              <li><div className="bullet" /><div className="text">Tools & IDE experience: VSCode, Eclipse, NetBeans, Aptana, Websphere, PHPStorm, DreamWeaver, Sublime Text</div></li>
            </ul>
          </div>
        </section>

        {/* Work History */}
        <section id="work-history" className="work">
          <div className="section-center">
            <h2 className="subtitle">Work History 👨‍💼</h2>
            <div className="items dark:text-white text-stone-700">
              <Accordion company={'OnyxCorp LLC'} date={'2017.04 - 2023.09 (6 years & 5 months)'} position={'Senior Software Engineer'} alignment={'left'} industry={['Cybersecurity', 'Communication Technology', 'Information Technology']}>
                <p><Link href="https://mode.io" target="_blank">Mode</Link> is a secure communication platform with post-quantum encryption for messaging, video calling, and file sharing.</p>
                <p>I created the structure for the administration portal where the client can add and remove user licenses, configure global settings, view and handle devices and staff, assign roles and permissions.</p>
                <p>The project tech stack is composed of React for the front-end user interface and Laravel for the back-end server logic. We use GraphQL for flexible data querying.</p>
                <p>The challenge was to design a modular architecture to facilitate the management of the company&apos;s manager app, a specialized reseller app, and individual customer apps for each client sharing logic and modules among these applications.</p>
              </Accordion>
              <Accordion company={'Rack Performance'} date={'2018.02 - 2018.07 (5 months)'} position={'Senior Software Engineer'} alignment={'right'} industry={['Health and Fitness', 'Planning']}>
                <p><Link href="https://rackcoach.com" target="_blank">Rack Performance</Link> optimize your performance training program by giving you more control, more efficiency and more wins in your weight room.</p>
                <p>My role revolved around enhancing the user interface (UI) and crafting a fresh design. I was tasked with improving the overall user experience by refining the UI elements and creating a completely new design that was more user-friendly and aesthetically appealing. This involved optimizing the layout, navigation, and visual elements to meet our design goals and enhance the user&apos;s interaction with our product</p>
                <p>I created the new interface with Vue.js</p>
              </Accordion>
              <Accordion company={'AthleteEquip'} date={'2016.10 - 2017.11 (1 year & 1 month)'} position={'Senior Software Engineer'} alignment={'left'} industry={['Education', 'Health and Fitness', 'Planning']}>
                <p><Link href="https://www.youtube.com/@trainingwitheps/AthleteEquip" target="_blank">AthleteEquip</Link> was a company that provided elite-level sport-specific strength, speed, and conditioning workout solutions to athletes and teams. I had the opportunity to contribute to the development of innovative software that revolutionized athletic training by integrating technology into the training process and enhancing the way athletes and teams monitored and improved their performance.</p>
                <p>The company was sold to Rack Performance</p>
                <p>I used Laravel for building the back-end infrastructure and Vue.js for enhancing the front-end user interface</p>
              </Accordion>
              <Accordion company={'Jakentra'} date={'2017.02 - 2017.04 (2 months)'} position={'Software Developer'} alignment={'right'} industry={['Services', 'Financial', 'Insurance']}>
                <p><Link href="https://www.jakentra.com" target="_blank">Jakentra</Link> is a custom software and online tool developer specializing in solutions for the Insurance and Financial Services Industry.</p>
                <p>I was brought on board to fulfill a specific role while the lead programmer was recovering from a medical condition that temporarily hindered their ability to work.</p>
              </Accordion>
              <Accordion company={'ProcessMaker Inc'} date={'2016.05 - 2016.11 (6 months)'} position={'Senior Software Engineer'} alignment={'left'} industry={['Workflow Automation', 'Integration', 'BPM Software']}>
                <p><Link href="https://www.processmaker.com" target="_blank">ProcessMaker</Link> is Low-Code Business Process Automation (BPA) Software.</p>
                <p>Automate repetitive tasks and mission-critical workflows to optimize resource allocation.</p>
                <p>My primary responsibility was to design and implement a queue system, subjecting it to rigorous stress testing using Apache JMeter to evaluate its performance under high concurrency. I successfully executed this task using Laravel in conjunction with Amazon SQS.</p>
              </Accordion>
              <Accordion company={'FEM Inc'} date={'2014.05 - 2016.11 (2 years & 1 month)'} position={'Software Developer'} alignment={'right'} industry={['Video Player', 'Video Embedding', 'Analytics']}>
                <p><Link href="https://www.fem-inc.com/" target="_blank">FEM</Link> is a lightweight javascript video widget that can be embedded into many different sites. The widget contains videos from YouTube, Brightcove, Kaltura and other video players.</p>
                <p>I implemented it entirely using vanilla JavaScript adding FB, Twitter sharing to the widget, integrating with 3rd party JS libraries and I use the framework Jasmine for testing</p>
              </Accordion>
              <Accordion company={'Hanger'} date={'2013.11 - 2014.09 (10 months)'} position={'Software Developer'} alignment={'left'} industry={['Services', 'Apparel', 'Fashion']}>
                <p>Hanger was a tiny startup with the primary concept of sharing and exchanging used clothing.</p>
                <p>I did an API using Phalcon framework to be consumed by an iphone app</p>
              </Accordion>
              <Accordion company={'LBSI'} date={'2013.12 - 2014.05 (5 months)'} position={'Software Developer'} alignment={'right'} industry={['Legal Technology', 'Legal Practice', 'Management Software']}>
                <p><Link href="https://www.lawfirmbookkeeper.com" target="_blank">Law Firm Bookkeeping Solutions Inc. (LBSI)</Link> is the billing and bookkeeping solution for the modern law firm. They eliminate the need for a back-office entirely by streamlining all of your billing, bookkeeping, financial management and consulting needs.</p>
                <p>My role involved the creation of an invoice feature by leveraging different components of the application. I implemented a dynamic, drag-and-drop interface that allowed users to build invoices seamlessly.</p>
                <p>This solution was achieved through the utilization of Backbone and Backbone Marionette, making the process both interactive and efficient</p>
              </Accordion>
              <Accordion company={'Fanattac'} date={'2012.11 - 2013.06 (8 months)'} position={'Software Developer'} alignment={'left'} industry={['Social Media', 'Music']}>
                <p>Fanattac was a  music social network where users can follow artists and promote their own band with resemblance to Facebook in those days</p>
                <p>My role was optimize the database and the queries, adding some new features and change some styles</p>
              </Accordion>
              <Accordion company={'Toptal'} date={'Since 2013.03'} position={'Senior Software Engineer'} alignment={'right'}>
                <p>My profile is: <Link href="http://www.toptal.com/resume/fabian-torres" target="_blank">http://www.toptal.com/resume/fabian-torres</Link></p>
                <p><Link href="http://www.toptal.com" target="_blank">Toptal</Link> means Top Talent and it is a marketplace for software developers and companies</p>
                <p>The projects I participated as toptal member were:</p>
                <ul className='list-disc pl-4'>
                  <li>OnyxCorp LLC</li>
                  <li>AthleteEquip</li>
                  <li>Jakentra</li>
                  <li>ProcessMaker Inc</li>
                  <li>LBSI</li>
                  <li>Hanger</li>
                  <li>Fanattac</li>
                </ul>
              </Accordion>
              <Accordion company={'Santex Group'} date={'2009.12 - 2013.03 (3 years & 3 months)'} position={'Software Developer Engineer'} alignment={'left'} industry={['Information Technology', 'Software Development Services']}>
                <p><Link href="https://santexgroup.com/" target="_blank">Santex</Link>  is a software development company with offices in various locations around the world, including the United States, Argentina, Uruguay, and other countries. They offer services related to software development, custom application development, and IT consulting.</p>
                <p>During my career in Santex I did several projects</p>
                <ul className="list-disc pl-4">
                  <li>In these 3 years some projects have required me to do diverse activities such as: Coding and Architecture definition</li>
                  <li>Designed customized solutions for proposals to potential customers.</li>
                  <li>Developed conversion and system implementation plans.</li>
                  <li>I had the chance to write technical documentation to transfer knowledge to other team members</li>
                  <li>Carried out coding and architecture definition</li>
                  <li>Programming Languages: JavaScript, HTML, PHP, CSS</li>
                  <li>Collaborated with project managers to select ambitious, but realistic coding milestones on pre-release software project development.</li>
                </ul>
              </Accordion>
              <Accordion company={'Mindsmack'} date={'2007.01 - 2009.12 (2 years & 11 months)'} position={'Software Developer'} alignment={'right'} industry={['Software Services']}>
                <p><Link href="https://mindsmack.com">Mindsmack</Link>  started back in 1999 creating online experiences for some of the biggest brands.</p>
                <p>As a Smacker I achieved:</p>
                <ul className="list-disc pl-4">
                  <li>Revised, modularized and updated old code bases to modern development standards, reducing operating costs, and improving functionality.</li>
                  <li>Corrected, modified and upgraded software to improve performance.</li>
                  <li>Coordinated deployments of new software, feature updates and fixes.</li>
                  <li>Tested and deployed scalable and highly available software products.</li>
                  <li>Estimated work hours and tracked progress using Scrum methodology.</li>
                  <li>Wrote clear, clean code for various projects.</li>
                  <li>Worked with design teams and Senior Software Engineers to build customized software products for consumers.</li>
                </ul>
              </Accordion>
              <Accordion company={'ExporTech'} date={'2003.01 - 2003.12 (11 months)'} position={'Junior Software Developer'} alignment={'left'} industry={['Software Services']}>
                <p>ExporTech was a software company delivering websites to Spain and other Europe countries</p>
                <p>I collaborated with project managers to select ambitious, but realistic coding milestones on pre-release software project development.</p>
                <p>I discussed issues with team members to provide resolution and apply best practices.</p>
                <p>Built databases and table structures for web applications.</p>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="education">
          <div className="section-center">
            <h2 className="subtitle">Education 🏫</h2>
            <div className="items dark:text-white text-stone-700">
              <Accordion company={'UTN'} date={'2000.03 - 2007.12 (7 years & 9 months)'} position={'System Engineer'} alignment={'right'} type={'secondary'} />
              <Accordion company={'San Antonio De Padua'} date={'1995.03 - 1999.11 (4 years & 8 months)'} position={'High School Diploma'} alignment={'left'} type={'secondary'} />
            </div>
          </div>
        </section>

        {/* Accomplishments */}
        <section id="accomplishments" className="accomplishments overflow-hidden relative">
          <div className="icon">
            <svg viewBox="0 0 392 192">
              <path d="M205.566 28.7494L182.323 51.2241L186.228 8.46073L203.565 4.64645L205.566 28.7494Z" className='dark:fill-yellow-confetti fill-turquoise-confetti' />
              <path d="M206.887 72.3086L181.984 67.1466L199.992 52.9372L208.917 56.8393L206.887 72.3086Z" className='dark:fill-white dark:fill-bg-bold-black' />
              <rect x="107" y="161.788" width="284.781" height="29.7162" className='dark:fill-yellow-confetti fill-turquoise-confetti' />
              <mask id="path-4-outside-1" maskUnits="userSpaceOnUse" x="0" y="39" width="321" height="139" className='dark:fill-white dark:fill-bg-bold-black'>
                <rect y="39" width="321" height="139" className='dark:fill-white dark:fill-bg-bold-black' />
                <path fillRule="evenodd" clipRule="evenodd" d="M62.1209 69.0935C62.464 69.4272 62.6202 69.9089 62.5392 70.3813L61.1152 78.6868C60.7239 80.965 61.6439 83.2244 63.5144 84.5838C64.5706 85.3522 65.8078 85.7422 67.0521 85.7422C68.0108 85.7422 68.9742 85.5108 69.8648 85.0432L77.3233 81.1213C77.7474 80.8992 78.2538 80.8992 78.678 81.1213L86.1364 85.0432C88.1831 86.1194 90.6164 85.9432 92.4869 84.5838C94.3574 83.2256 95.2761 80.965 94.8849 78.6868L93.4609 70.3813C93.3798 69.9089 93.5361 69.4272 93.8792 69.0924L99.9136 63.2107C101.569 61.5963 102.154 59.2289 101.439 57.0294C100.724 54.8311 98.8597 53.2579 96.5721 52.9254L88.2325 51.714C87.7578 51.6447 87.3489 51.3474 87.1363 50.9174L83.407 43.3615C82.3837 41.2877 80.3123 40 78 40C75.6878 40 73.6164 41.2877 72.593 43.3615L68.8638 50.9186C68.6523 51.3474 68.2423 51.6459 67.7676 51.7152L59.4291 52.9265C57.1416 53.259 55.2758 54.8311 54.5614 57.0294C53.8471 59.2289 54.431 61.5975 56.0865 63.2119L62.1209 69.0935ZM58.911 58.444C58.9956 58.1855 59.2787 57.571 60.0859 57.4535L68.4255 56.241C70.39 55.9555 72.0866 54.723 72.9655 52.943L76.6947 45.3859C77.0566 44.6539 77.7274 44.5752 78 44.5752C78.2714 44.5752 78.9435 44.6539 79.3054 45.387L83.0346 52.943C83.9134 54.723 85.61 55.9567 87.5745 56.2422L95.9141 57.4535C96.7213 57.571 97.0045 58.1855 97.0891 58.444C97.1725 58.7025 97.3052 59.3663 96.7201 59.9362L90.6857 65.8178C89.2652 67.2031 88.6167 69.1981 88.9515 71.1544L90.3767 79.4599C90.5142 80.2647 90.0172 80.723 89.7975 80.8828C89.5778 81.0425 88.9879 81.3739 88.2654 80.9944L80.8057 77.0725C79.0492 76.149 76.9508 76.149 75.1943 77.0725L67.7359 80.9944C67.0121 81.375 66.4235 81.0437 66.2026 80.8828C65.9829 80.723 65.4859 80.2647 65.6245 79.4599L67.0485 71.1544C67.3846 69.1981 66.736 67.2031 65.3143 65.8178L59.2799 59.935C58.6948 59.3651 58.8276 58.7025 58.911 58.444ZM155 170.468L319.141 168.391V176.646L153.108 175.524C152.98 175.547 152.847 175.558 152.712 175.558H130.784C129.519 175.558 128.496 174.534 128.496 173.271C128.496 172.008 129.519 170.983 130.784 170.983H150.426V146.605C150.426 144.135 148.417 142.125 145.946 142.125H10.054C7.58429 142.125 5.57399 144.135 5.57399 146.605V170.983H121.634C122.897 170.983 123.921 172.008 123.921 173.271C123.921 174.534 122.897 175.558 121.634 175.558H3.28758C2.02454 175.558 1 174.534 1 173.271V146.605C1 141.612 5.06172 137.551 10.054 137.551H11.8634V121.474C11.8634 116.482 15.9251 112.42 20.9174 112.42H29.6635V101.945C29.6635 96.9523 33.7241 92.8906 38.7175 92.8906H117.284C122.276 92.8906 126.338 96.9512 126.338 101.945V112.42H135.083C140.075 112.42 144.137 116.482 144.137 121.474V137.551H145.946C150.938 137.551 155 141.612 155 146.605V170.468ZM16.4374 121.474V137.551H139.563V121.474C139.563 119.005 137.552 116.995 135.083 116.995H55.311C54.0479 116.995 53.0234 115.971 53.0234 114.708C53.0234 113.445 54.0479 112.42 55.311 112.42H121.762V101.945C121.762 99.4737 119.753 97.4646 117.283 97.4646H38.7163C36.2466 97.4646 34.2363 99.4737 34.2363 101.945V112.42H46.1618C47.4249 112.42 48.4482 113.445 48.4482 114.708C48.4482 115.971 47.4249 116.995 46.1618 116.995H20.9174C18.4477 116.995 16.4374 119.005 16.4374 121.474ZM29.2863 65.3609H47.1253C48.3883 65.3609 49.4128 64.3363 49.4128 63.0733C49.4128 61.8102 48.3883 60.7869 47.1253 60.7869H29.2863C28.0233 60.7869 26.9999 61.8102 26.9999 63.0733C26.9999 64.3363 28.0233 65.3609 29.2863 65.3609ZM32.9063 81.3726L46.1701 75.2735C47.318 74.746 48.6762 75.2489 49.2037 76.3956C49.7313 77.5435 49.2284 78.9017 48.0805 79.4292L34.8167 85.5283C34.5077 85.6716 34.1823 85.7386 33.8627 85.7386C32.9968 85.7386 32.1685 85.244 31.7831 84.4062C31.2556 83.2583 31.7584 81.9001 32.9063 81.3726ZM32.9063 44.7737L46.1701 50.8727C46.4791 51.0161 46.8045 51.0831 47.1241 51.0831C47.99 51.0831 48.8183 50.5896 49.2037 49.7507C49.7313 48.6028 49.2284 47.2446 48.0805 46.717L34.8167 40.618C33.6688 40.0904 32.3106 40.5933 31.7831 41.7412C31.2556 42.8879 31.7584 44.2462 32.9063 44.7737ZM126.714 65.3609H108.875C107.612 65.3609 106.588 64.3363 106.588 63.0733C106.588 61.8102 107.612 60.7869 108.875 60.7869H126.714C127.977 60.7869 129.001 61.8102 129.001 63.0733C129.001 64.3363 127.977 65.3609 126.714 65.3609ZM109.83 75.2737C108.682 74.7462 107.324 75.2479 106.796 76.3958C106.269 77.5437 106.772 78.9019 107.92 79.4294L121.183 85.5285C121.493 85.6718 121.818 85.7388 122.137 85.7388C123.003 85.7388 123.832 85.2442 124.217 84.4064C124.744 83.2585 124.242 81.9003 123.095 81.3728L109.83 75.2737ZM109.83 50.8727C109.521 51.0161 109.195 51.0831 108.876 51.0831C108.01 51.0831 107.183 50.5896 106.796 49.7507C106.269 48.6028 106.772 47.2446 107.92 46.717L121.183 40.618C122.332 40.0904 123.689 40.5933 124.217 41.7412C124.744 42.8879 124.242 44.2462 123.095 44.7737L109.83 50.8727Z" />
              </mask>
              <path fillRule="evenodd" clipRule="evenodd" d="M62.1209 69.0935C62.464 69.4272 62.6202 69.9089 62.5392 70.3813L61.1152 78.6868C60.7239 80.965 61.6439 83.2244 63.5144 84.5838C64.5706 85.3522 65.8078 85.7422 67.0521 85.7422C68.0108 85.7422 68.9742 85.5108 69.8648 85.0432L77.3233 81.1213C77.7474 80.8992 78.2538 80.8992 78.678 81.1213L86.1364 85.0432C88.1831 86.1194 90.6164 85.9432 92.4869 84.5838C94.3574 83.2256 95.2761 80.965 94.8849 78.6868L93.4609 70.3813C93.3798 69.9089 93.5361 69.4272 93.8792 69.0924L99.9136 63.2107C101.569 61.5963 102.154 59.2289 101.439 57.0294C100.724 54.8311 98.8597 53.2579 96.5721 52.9254L88.2325 51.714C87.7578 51.6447 87.3489 51.3474 87.1363 50.9174L83.407 43.3615C82.3837 41.2877 80.3123 40 78 40C75.6878 40 73.6164 41.2877 72.593 43.3615L68.8638 50.9186C68.6523 51.3474 68.2423 51.6459 67.7676 51.7152L59.4291 52.9265C57.1416 53.259 55.2758 54.8311 54.5614 57.0294C53.8471 59.2289 54.431 61.5975 56.0865 63.2119L62.1209 69.0935ZM58.911 58.444C58.9956 58.1855 59.2787 57.571 60.0859 57.4535L68.4255 56.241C70.39 55.9555 72.0866 54.723 72.9655 52.943L76.6947 45.3859C77.0566 44.6539 77.7274 44.5752 78 44.5752C78.2714 44.5752 78.9435 44.6539 79.3054 45.387L83.0346 52.943C83.9134 54.723 85.61 55.9567 87.5745 56.2422L95.9141 57.4535C96.7213 57.571 97.0045 58.1855 97.0891 58.444C97.1725 58.7025 97.3052 59.3663 96.7201 59.9362L90.6857 65.8178C89.2652 67.2031 88.6167 69.1981 88.9515 71.1544L90.3767 79.4599C90.5142 80.2647 90.0172 80.723 89.7975 80.8828C89.5778 81.0425 88.9879 81.3739 88.2654 80.9944L80.8057 77.0725C79.0492 76.149 76.9508 76.149 75.1943 77.0725L67.7359 80.9944C67.0121 81.375 66.4235 81.0437 66.2026 80.8828C65.9829 80.723 65.4859 80.2647 65.6245 79.4599L67.0485 71.1544C67.3846 69.1981 66.736 67.2031 65.3143 65.8178L59.2799 59.935C58.6948 59.3651 58.8276 58.7025 58.911 58.444ZM155 170.468L319.141 168.391V176.646L153.108 175.524C152.98 175.547 152.847 175.558 152.712 175.558H130.784C129.519 175.558 128.496 174.534 128.496 173.271C128.496 172.008 129.519 170.983 130.784 170.983H150.426V146.605C150.426 144.135 148.417 142.125 145.946 142.125H10.054C7.58429 142.125 5.57399 144.135 5.57399 146.605V170.983H121.634C122.897 170.983 123.921 172.008 123.921 173.271C123.921 174.534 122.897 175.558 121.634 175.558H3.28758C2.02454 175.558 1 174.534 1 173.271V146.605C1 141.612 5.06172 137.551 10.054 137.551H11.8634V121.474C11.8634 116.482 15.9251 112.42 20.9174 112.42H29.6635V101.945C29.6635 96.9523 33.7241 92.8906 38.7175 92.8906H117.284C122.276 92.8906 126.338 96.9512 126.338 101.945V112.42H135.083C140.075 112.42 144.137 116.482 144.137 121.474V137.551H145.946C150.938 137.551 155 141.612 155 146.605V170.468ZM16.4374 121.474V137.551H139.563V121.474C139.563 119.005 137.552 116.995 135.083 116.995H55.311C54.0479 116.995 53.0234 115.971 53.0234 114.708C53.0234 113.445 54.0479 112.42 55.311 112.42H121.762V101.945C121.762 99.4737 119.753 97.4646 117.283 97.4646H38.7163C36.2466 97.4646 34.2363 99.4737 34.2363 101.945V112.42H46.1618C47.4249 112.42 48.4482 113.445 48.4482 114.708C48.4482 115.971 47.4249 116.995 46.1618 116.995H20.9174C18.4477 116.995 16.4374 119.005 16.4374 121.474ZM29.2863 65.3609H47.1253C48.3883 65.3609 49.4128 64.3363 49.4128 63.0733C49.4128 61.8102 48.3883 60.7869 47.1253 60.7869H29.2863C28.0233 60.7869 26.9999 61.8102 26.9999 63.0733C26.9999 64.3363 28.0233 65.3609 29.2863 65.3609ZM32.9063 81.3726L46.1701 75.2735C47.318 74.746 48.6762 75.2489 49.2037 76.3956C49.7313 77.5435 49.2284 78.9017 48.0805 79.4292L34.8167 85.5283C34.5077 85.6716 34.1823 85.7386 33.8627 85.7386C32.9968 85.7386 32.1685 85.244 31.7831 84.4062C31.2556 83.2583 31.7584 81.9001 32.9063 81.3726ZM32.9063 44.7737L46.1701 50.8727C46.4791 51.0161 46.8045 51.0831 47.1241 51.0831C47.99 51.0831 48.8183 50.5896 49.2037 49.7507C49.7313 48.6028 49.2284 47.2446 48.0805 46.717L34.8167 40.618C33.6688 40.0904 32.3106 40.5933 31.7831 41.7412C31.2556 42.8879 31.7584 44.2462 32.9063 44.7737ZM126.714 65.3609H108.875C107.612 65.3609 106.588 64.3363 106.588 63.0733C106.588 61.8102 107.612 60.7869 108.875 60.7869H126.714C127.977 60.7869 129.001 61.8102 129.001 63.0733C129.001 64.3363 127.977 65.3609 126.714 65.3609ZM109.83 75.2737C108.682 74.7462 107.324 75.2479 106.796 76.3958C106.269 77.5437 106.772 78.9019 107.92 79.4294L121.183 85.5285C121.493 85.6718 121.818 85.7388 122.137 85.7388C123.003 85.7388 123.832 85.2442 124.217 84.4064C124.744 83.2585 124.242 81.9003 123.095 81.3728L109.83 75.2737ZM109.83 50.8727C109.521 51.0161 109.195 51.0831 108.876 51.0831C108.01 51.0831 107.183 50.5896 106.796 49.7507C106.269 48.6028 106.772 47.2446 107.92 46.717L121.183 40.618C122.332 40.0904 123.689 40.5933 124.217 41.7412C124.744 42.8879 124.242 44.2462 123.095 44.7737L109.83 50.8727Z" className='dark:fill-white dark:fill-bg-bold-black' />
              <path className='dark:fill-white dark:fill-bg-bold-black' d="M62.5392 70.3813L61.5536 70.2121L61.5535 70.2123L62.5392 70.3813ZM62.1209 69.0935L61.4229 69.8096L61.4237 69.8104L62.1209 69.0935ZM61.1152 78.6868L62.1007 78.8561L62.1008 78.8558L61.1152 78.6868ZM63.5144 84.5838L64.1026 83.7751L64.1023 83.7748L63.5144 84.5838ZM69.8648 85.0432L70.3297 85.9285L70.3302 85.9283L69.8648 85.0432ZM77.3233 81.1213L76.8594 80.2353L76.8579 80.2362L77.3233 81.1213ZM78.678 81.1213L79.1434 80.2362L79.1418 80.2353L78.678 81.1213ZM86.1364 85.0432L85.671 85.9283L85.671 85.9283L86.1364 85.0432ZM92.4869 84.5838L91.8993 83.7746L91.899 83.7748L92.4869 84.5838ZM94.8849 78.6868L93.8993 78.8558L93.8993 78.8561L94.8849 78.6868ZM93.4609 70.3813L94.4465 70.2123L94.4465 70.2121L93.4609 70.3813ZM93.8792 69.0924L93.1812 68.3762L93.1807 68.3767L93.8792 69.0924ZM99.9136 63.2107L100.612 63.9268L100.612 63.9266L99.9136 63.2107ZM101.439 57.0294L100.488 57.3384L100.488 57.3388L101.439 57.0294ZM96.5721 52.9254L96.7159 51.9358L96.7158 51.9358L96.5721 52.9254ZM88.2325 51.714L88.088 52.7035L88.0887 52.7036L88.2325 51.714ZM87.1363 50.9174L86.2395 51.36L86.2399 51.3607L87.1363 50.9174ZM83.407 43.3615L82.5103 43.804L82.5103 43.804L83.407 43.3615ZM72.593 43.3615L71.6963 42.9189L71.6963 42.9189L72.593 43.3615ZM68.8638 50.9186L67.967 50.4761L67.9669 50.4763L68.8638 50.9186ZM67.7676 51.7152L67.9113 52.7048L67.9121 52.7047L67.7676 51.7152ZM59.4291 52.9265L59.2854 51.9369L59.2853 51.9369L59.4291 52.9265ZM54.5614 57.0294L53.6104 56.7203L53.6103 56.7205L54.5614 57.0294ZM56.0865 63.2119L55.3883 63.9278L55.3885 63.928L56.0865 63.2119ZM60.0859 57.4535L59.942 56.4639L59.9419 56.464L60.0859 57.4535ZM58.911 58.444L57.9606 58.133L57.9593 58.1369L58.911 58.444ZM68.4255 56.241L68.2817 55.2514L68.2817 55.2514L68.4255 56.241ZM72.9655 52.943L73.8621 53.3857L73.8622 53.3855L72.9655 52.943ZM76.6947 45.3859L75.7982 44.9427L75.7979 44.9433L76.6947 45.3859ZM79.3054 45.387L80.2021 44.9445L80.2021 44.9444L79.3054 45.387ZM83.0346 52.943L82.1379 53.3856L82.1379 53.3857L83.0346 52.943ZM87.5745 56.2422L87.4307 57.2318L87.4308 57.2318L87.5745 56.2422ZM95.9141 57.4535L96.0582 56.464L96.0579 56.4639L95.9141 57.4535ZM97.0891 58.444L98.0407 58.1369L98.0395 58.133L97.0891 58.444ZM96.7201 59.9362L96.0224 59.2198L96.0221 59.22L96.7201 59.9362ZM90.6857 65.8178L89.9877 65.1017L89.9875 65.1019L90.6857 65.8178ZM88.9515 71.1544L87.9659 71.3231L87.9659 71.3235L88.9515 71.1544ZM90.3767 79.4599L91.3624 79.2916L91.3623 79.2908L90.3767 79.4599ZM88.2654 80.9944L87.8 81.8795L87.8004 81.8797L88.2654 80.9944ZM80.8057 77.0725L80.3404 77.9576L80.3404 77.9576L80.8057 77.0725ZM75.1943 77.0725L74.7289 76.1873L74.7289 76.1874L75.1943 77.0725ZM67.7359 80.9944L67.2704 80.1093L67.2704 80.1093L67.7359 80.9944ZM66.2026 80.8828L66.7915 80.0746L66.7908 80.074L66.2026 80.8828ZM65.6245 79.4599L66.61 79.6297L66.6101 79.6289L65.6245 79.4599ZM67.0485 71.1544L66.063 70.9851L66.0629 70.9854L67.0485 71.1544ZM65.3143 65.8178L64.6163 66.5339L64.6165 66.5341L65.3143 65.8178ZM59.2799 59.935L59.978 59.2189L59.9776 59.2186L59.2799 59.935ZM319.141 168.391H320.141V167.378L319.128 167.391L319.141 168.391ZM155 170.468H154V171.481L155.013 171.468L155 170.468ZM319.141 176.646L319.134 177.646L320.141 177.652V176.646H319.141ZM153.108 175.524L153.115 174.524L153.025 174.524L152.937 174.539L153.108 175.524ZM150.426 170.983V171.983H151.426V170.983H150.426ZM5.57399 170.983H4.57399V171.983H5.57399V170.983ZM11.8634 137.551V138.551H12.8634V137.551H11.8634ZM29.6635 112.42V113.42H30.6635V112.42H29.6635ZM126.338 112.42H125.338V113.42H126.338V112.42ZM144.137 137.551H143.137V138.551H144.137V137.551ZM16.4374 137.551H15.4374V138.551H16.4374V137.551ZM139.563 137.551V138.551H140.563V137.551H139.563ZM121.762 112.42V113.42H122.762V112.42H121.762ZM34.2363 112.42H33.2363V113.42H34.2363V112.42ZM46.1701 75.2735L45.7525 74.3649L45.7523 74.365L46.1701 75.2735ZM32.9063 81.3726L33.3239 82.2812L33.3241 82.2811L32.9063 81.3726ZM49.2037 76.3956L50.1124 75.978L50.1122 75.9777L49.2037 76.3956ZM48.0805 79.4292L47.6629 78.5206L47.6627 78.5207L48.0805 79.4292ZM34.8167 85.5283L34.399 84.6197L34.3959 84.6211L34.8167 85.5283ZM31.7831 84.4062L30.8745 84.8238L30.8746 84.8242L31.7831 84.4062ZM46.1701 50.8727L46.5909 49.9656L46.5878 49.9642L46.1701 50.8727ZM32.9063 44.7737L33.3241 43.8652L33.3239 43.8651L32.9063 44.7737ZM49.2037 49.7507L48.2951 49.3331L48.295 49.3333L49.2037 49.7507ZM48.0805 46.717L47.6627 47.6256L47.6629 47.6257L48.0805 46.717ZM34.8167 40.618L35.2345 39.7094L35.2343 39.7094L34.8167 40.618ZM31.7831 41.7412L32.6916 42.1592L32.6917 42.1588L31.7831 41.7412ZM109.83 75.2737L110.248 74.3652L110.248 74.3651L109.83 75.2737ZM107.92 79.4294L108.337 78.5209L108.337 78.5208L107.92 79.4294ZM121.183 85.5285L121.603 84.6207L121.601 84.6199L121.183 85.5285ZM124.217 84.4064L125.125 84.8244L125.126 84.824L124.217 84.4064ZM123.095 81.3728L123.513 80.4643L123.513 80.4642L123.095 81.3728ZM109.83 50.8727L109.412 49.9642L109.409 49.9656L109.83 50.8727ZM106.796 49.7507L105.888 50.1683L105.888 50.1692L106.796 49.7507ZM107.92 46.717L108.337 47.6257L108.337 47.6256L107.92 46.717ZM121.183 40.618L120.766 39.7092L120.765 39.7094L121.183 40.618ZM124.217 41.7412L123.308 42.1588L123.308 42.1592L124.217 41.7412ZM123.095 44.7737L123.513 45.6823L123.513 45.6822L123.095 44.7737ZM63.5248 70.5504C63.6614 69.7543 63.3982 68.9409 62.8181 68.3767L61.4237 69.8104C61.5298 69.9136 61.5791 70.0636 61.5536 70.2121L63.5248 70.5504ZM62.1008 78.8558L63.5248 70.5502L61.5535 70.2123L60.1295 78.5178L62.1008 78.8558ZM64.1023 83.7748C62.5393 82.6389 61.774 80.7585 62.1007 78.8561L60.1296 78.5176C59.6738 81.1715 60.7485 83.8098 62.9265 85.3927L64.1023 83.7748ZM67.0521 84.7422C66.018 84.7422 64.987 84.4185 64.1026 83.7751L62.9261 85.3924C64.1542 86.2859 65.5976 86.7422 67.0521 86.7422V84.7422ZM69.4 84.1578C68.6529 84.55 67.849 84.7422 67.0521 84.7422V86.7422C68.1726 86.7422 69.2956 86.4715 70.3297 85.9285L69.4 84.1578ZM76.8579 80.2362L69.3994 84.1581L70.3302 85.9283L77.7887 82.0064L76.8579 80.2362ZM79.1418 80.2353C78.4271 79.8612 77.5741 79.8612 76.8594 80.2353L77.7871 82.0072C77.9207 81.9372 78.0805 81.9372 78.2141 82.0072L79.1418 80.2353ZM86.6018 84.1581L79.1434 80.2362L78.2125 82.0064L85.671 85.9283L86.6018 84.1581ZM91.899 83.7748C90.3364 84.9105 88.3115 85.0571 86.6018 84.1581L85.671 85.9283C88.0548 87.1817 90.8964 86.9759 93.0748 85.3927L91.899 83.7748ZM93.8993 78.8561C94.2262 80.7592 93.4614 82.6403 91.8993 83.7746L93.0744 85.3929C95.2533 83.8108 96.3261 81.1708 95.8705 78.5176L93.8993 78.8561ZM92.4753 70.5502L93.8993 78.8558L95.8705 78.5178L94.4465 70.2123L92.4753 70.5502ZM93.1807 68.3767C92.6022 68.9413 92.3386 69.7539 92.4753 70.5504L94.4465 70.2121C94.421 70.064 94.47 69.9131 94.5776 69.808L93.1807 68.3767ZM99.2156 62.4946L93.1812 68.3762L94.5771 69.8085L100.612 63.9268L99.2156 62.4946ZM100.488 57.3388C101.085 59.1758 100.599 61.1459 99.2154 62.4947L100.612 63.9266C102.539 62.0468 103.223 59.2819 102.39 56.72L100.488 57.3388ZM96.4282 53.915C98.3389 54.1927 99.8908 55.5018 100.488 57.3384L102.39 56.7203C101.558 54.1604 99.3805 52.3231 96.7159 51.9358L96.4282 53.915ZM88.0887 52.7036L96.4283 53.915L96.7158 51.9358L88.3762 50.7244L88.0887 52.7036ZM86.2399 51.3607C86.5981 52.085 87.2878 52.5867 88.088 52.7035L88.377 50.7245C88.2277 50.7027 88.0998 50.6099 88.0326 50.4741L86.2399 51.3607ZM82.5103 43.804L86.2395 51.36L88.033 50.4748L84.3038 42.9189L82.5103 43.804ZM78 41C79.9316 41 81.6554 42.0716 82.5103 43.804L84.3038 42.9189C83.112 40.5039 80.693 39 78 39V41ZM73.4898 43.804C74.3447 42.0716 76.0685 41 78 41V39C75.3071 39 72.8881 40.5039 71.6963 42.9189L73.4898 43.804ZM69.7605 51.3611L73.4898 43.804L71.6963 42.9189L67.967 50.4761L69.7605 51.3611ZM67.9121 52.7047C68.712 52.5879 69.4035 52.0851 69.7607 51.3609L67.9669 50.4763C67.9011 50.6098 67.7725 50.7039 67.6231 50.7257L67.9121 52.7047ZM59.5729 53.9162L67.9113 52.7048L67.6238 50.7256L59.2854 51.9369L59.5729 53.9162ZM55.5125 57.3384C56.1091 55.5024 57.6618 54.1939 59.573 53.9161L59.2853 51.9369C56.6213 52.3242 54.4424 54.1598 53.6104 56.7203L55.5125 57.3384ZM56.7846 62.4959C55.4018 61.1474 54.9156 59.1761 55.5125 57.3383L53.6103 56.7205C52.7785 59.2816 53.4602 62.0476 55.3883 63.9278L56.7846 62.4959ZM62.8189 68.3774L56.7845 62.4957L55.3885 63.928L61.4229 69.8096L62.8189 68.3774ZM59.9419 56.464C58.5742 56.663 58.0912 57.7339 57.9606 58.133L59.8614 58.755C59.877 58.7073 59.9113 58.6304 59.9676 58.5683C59.9931 58.5403 60.0221 58.5163 60.0576 58.4967C60.092 58.4776 60.1457 58.4554 60.23 58.4431L59.9419 56.464ZM68.2817 55.2514L59.942 56.4639L60.2298 58.4431L68.5694 57.2306L68.2817 55.2514ZM72.0688 52.5003C71.3356 53.9852 69.9205 55.0132 68.2817 55.2514L68.5694 57.2306C70.8595 56.8978 72.8376 55.4608 73.8621 53.3857L72.0688 52.5003ZM75.7979 44.9433L72.0687 52.5005L73.8622 53.3855L77.5914 45.8284L75.7979 44.9433ZM78 43.5752C77.5774 43.5752 76.411 43.7032 75.7982 44.9427L77.5911 45.829C77.6291 45.7522 77.667 45.7078 77.6958 45.681C77.7253 45.6534 77.757 45.6333 77.7912 45.6179C77.867 45.5838 77.9501 45.5752 78 45.5752V43.5752ZM80.2021 44.9444C79.5895 43.7033 78.4216 43.5752 78 43.5752V45.5752C78.049 45.5752 78.1321 45.5837 78.2081 45.618C78.2424 45.6334 78.2742 45.6535 78.3039 45.6813C78.3326 45.7082 78.3707 45.7527 78.4087 45.8296L80.2021 44.9444ZM83.9313 52.5004L80.2021 44.9445L78.4086 45.8296L82.1379 53.3856L83.9313 52.5004ZM87.7183 55.2526C86.0799 55.0145 84.6646 53.9856 83.9312 52.5003L82.1379 53.3857C83.1623 55.4604 85.1402 56.8989 87.4307 57.2318L87.7183 55.2526ZM96.0579 56.4639L87.7182 55.2526L87.4308 57.2318L95.7704 58.4432L96.0579 56.4639ZM98.0395 58.133C97.9088 57.7339 97.4259 56.663 96.0582 56.464L95.7701 58.4431C95.8544 58.4554 95.9081 58.4776 95.9425 58.4967C95.9779 58.5163 96.0069 58.5403 96.0324 58.5683C96.0888 58.6304 96.123 58.7073 96.1387 58.755L98.0395 58.133ZM97.4178 60.6526C98.4093 59.687 98.1695 58.5358 98.0407 58.1369L96.1374 58.7511C96.1529 58.7991 96.1703 58.8813 96.1612 58.9644C96.1571 59.002 96.1478 59.0384 96.1307 59.075C96.114 59.1105 96.0836 59.1602 96.0224 59.2198L97.4178 60.6526ZM91.3837 66.534L97.4181 60.6523L96.0221 59.22L89.9877 65.1017L91.3837 66.534ZM89.9372 70.9856C89.6578 69.3536 90.1989 67.6894 91.3839 66.5338L89.9875 65.1019C88.3316 66.7168 87.5755 69.0426 87.9659 71.3231L89.9372 70.9856ZM91.3623 79.2908L89.9371 70.9852L87.9659 71.3235L89.3911 79.629L91.3623 79.2908ZM90.3856 81.6915C90.7261 81.4439 91.5952 80.6546 91.3624 79.2916L89.391 79.6283C89.4054 79.7126 89.4008 79.7708 89.3933 79.8093C89.3856 79.8491 89.3717 79.884 89.353 79.9166C89.3117 79.9889 89.2494 80.0448 89.2093 80.074L90.3856 81.6915ZM87.8004 81.8797C89.0248 82.5227 90.0448 81.9394 90.3856 81.6915L89.2093 80.074C89.1696 80.1029 89.0972 80.1449 89.0156 80.1619C88.9788 80.1696 88.9414 80.172 88.9013 80.167C88.8624 80.1622 88.8059 80.1487 88.7303 80.109L87.8004 81.8797ZM80.3404 77.9576L87.8 81.8795L88.7307 80.1092L81.2711 76.1873L80.3404 77.9576ZM75.6597 77.9576C77.1248 77.1873 78.8752 77.1873 80.3404 77.9576L81.2711 76.1873C79.2233 75.1107 76.7768 75.1107 74.7289 76.1873L75.6597 77.9576ZM68.2013 81.8795L75.6597 77.9576L74.7289 76.1874L67.2704 80.1093L68.2013 81.8795ZM65.6136 81.6909C65.9562 81.9406 66.9756 82.5242 68.2014 81.8794L67.2704 80.1093C67.1942 80.1494 67.1374 80.163 67.0986 80.1678C67.0586 80.1728 67.0214 80.1704 66.985 80.1628C66.9042 80.1459 66.8321 80.1042 66.7915 80.0746L65.6136 81.6909ZM64.639 79.2902C64.4041 80.654 65.274 81.4439 65.6144 81.6915L66.7908 80.074C66.7506 80.0448 66.6885 79.989 66.6474 79.917C66.6288 79.8846 66.615 79.8499 66.6074 79.8103C66.6001 79.772 66.5955 79.714 66.61 79.6297L64.639 79.2902ZM66.0629 70.9854L64.6389 79.2909L66.6101 79.6289L68.0341 71.3233L66.0629 70.9854ZM64.6165 66.5341C65.8024 67.6896 66.3432 69.3535 66.063 70.9851L68.0341 71.3237C68.4259 69.0427 67.6696 66.7166 66.0122 65.1016L64.6165 66.5341ZM58.5819 60.651L64.6163 66.5339L66.0124 65.1018L59.978 59.2189L58.5819 60.651ZM57.9593 58.1369C57.8305 58.536 57.5909 59.6859 58.5822 60.6514L59.9776 59.2186C59.9163 59.1589 59.8859 59.1092 59.8693 59.0738C59.8521 59.0372 59.8429 59.001 59.8388 58.9637C59.8297 58.8812 59.8471 58.7993 59.8627 58.7511L57.9593 58.1369ZM319.128 167.391L154.987 169.468L155.013 171.468L319.154 169.391L319.128 167.391ZM320.141 176.646V168.391H318.141V176.646H320.141ZM153.102 176.524L319.134 177.646L319.148 175.646L153.115 174.524L153.102 176.524ZM152.712 176.558C152.905 176.558 153.095 176.542 153.28 176.51L152.937 174.539C152.864 174.552 152.79 174.558 152.712 174.558V176.558ZM130.784 176.558H152.712V174.558H130.784V176.558ZM127.496 173.271C127.496 175.086 128.967 176.558 130.784 176.558V174.558C130.072 174.558 129.496 173.982 129.496 173.271H127.496ZM130.784 169.983C128.967 169.983 127.496 171.456 127.496 173.271H129.496C129.496 172.56 130.072 171.983 130.784 171.983V169.983ZM150.426 169.983H130.784V171.983H150.426V169.983ZM149.426 146.605V170.983H151.426V146.605H149.426ZM145.946 143.125C147.864 143.125 149.426 144.687 149.426 146.605H151.426C151.426 143.583 148.969 141.125 145.946 141.125V143.125ZM10.054 143.125H145.946V141.125H10.054V143.125ZM6.57399 146.605C6.57399 144.687 8.13657 143.125 10.054 143.125V141.125C7.032 141.125 4.57399 143.583 4.57399 146.605H6.57399ZM6.57399 170.983V146.605H4.57399V170.983H6.57399ZM121.634 169.983H5.57399V171.983H121.634V169.983ZM124.921 173.271C124.921 171.456 123.45 169.983 121.634 169.983V171.983C122.345 171.983 122.921 172.559 122.921 173.271H124.921ZM121.634 176.558C123.45 176.558 124.921 175.086 124.921 173.271H122.921C122.921 173.982 122.345 174.558 121.634 174.558V176.558ZM3.28758 176.558H121.634V174.558H3.28758V176.558ZM0 173.271C0 175.086 1.47225 176.558 3.28758 176.558V174.558C2.57682 174.558 2 173.982 2 173.271H0ZM0 146.605V173.271H2V146.605H0ZM10.054 136.551C4.50944 136.551 0 141.06 0 146.605H2C2 142.165 5.61401 138.551 10.054 138.551V136.551ZM11.8634 136.551H10.054V138.551H11.8634V136.551ZM10.8634 121.474V137.551H12.8634V121.474H10.8634ZM20.9174 111.42C15.3728 111.42 10.8634 115.93 10.8634 121.474H12.8634C12.8634 117.034 16.4774 113.42 20.9174 113.42V111.42ZM29.6635 111.42H20.9174V113.42H29.6635V111.42ZM28.6635 101.945V112.42H30.6635V101.945H28.6635ZM38.7175 91.8906C33.1717 91.8906 28.6635 96.4001 28.6635 101.945H30.6635C30.6635 97.5045 34.2764 93.8906 38.7175 93.8906V91.8906ZM117.284 91.8906H38.7175V93.8906H117.284V91.8906ZM127.338 101.945C127.338 96.3988 122.828 91.8906 117.284 91.8906V93.8906C121.724 93.8906 125.338 97.5035 125.338 101.945H127.338ZM127.338 112.42V101.945H125.338V112.42H127.338ZM135.083 111.42H126.338V113.42H135.083V111.42ZM145.137 121.474C145.137 115.93 140.627 111.42 135.083 111.42V113.42C139.523 113.42 143.137 117.034 143.137 121.474H145.137ZM145.137 137.551V121.474H143.137V137.551H145.137ZM145.946 136.551H144.137V138.551H145.946V136.551ZM156 146.605C156 141.06 151.491 136.551 145.946 136.551V138.551C150.386 138.551 154 142.165 154 146.605H156ZM156 170.468V146.605H154V170.468H156ZM17.4374 137.551V121.474H15.4374V137.551H17.4374ZM139.563 136.551H16.4374V138.551H139.563V136.551ZM138.563 121.474V137.551H140.563V121.474H138.563ZM135.083 117.995C137 117.995 138.563 119.557 138.563 121.474H140.563C140.563 118.452 138.104 115.995 135.083 115.995V117.995ZM55.311 117.995H135.083V115.995H55.311V117.995ZM52.0234 114.708C52.0234 116.523 53.4957 117.995 55.311 117.995V115.995C54.6002 115.995 54.0234 115.419 54.0234 114.708H52.0234ZM55.311 111.42C53.4957 111.42 52.0234 112.893 52.0234 114.708H54.0234C54.0234 113.997 54.6002 113.42 55.311 113.42V111.42ZM121.762 111.42H55.311V113.42H121.762V111.42ZM120.762 101.945V112.42H122.762V101.945H120.762ZM117.283 98.4646C119.201 98.4646 120.762 100.026 120.762 101.945H122.762C122.762 98.9215 120.306 96.4646 117.283 96.4646V98.4646ZM38.7163 98.4646H117.283V96.4646H38.7163V98.4646ZM35.2363 101.945C35.2363 100.026 36.7987 98.4646 38.7163 98.4646V96.4646C35.6945 96.4646 33.2363 98.9213 33.2363 101.945H35.2363ZM35.2363 112.42V101.945H33.2363V112.42H35.2363ZM46.1618 111.42H34.2363V113.42H46.1618V111.42ZM49.4482 114.708C49.4482 112.893 47.9778 111.42 46.1618 111.42V113.42C46.8719 113.42 47.4482 113.996 47.4482 114.708H49.4482ZM46.1618 117.995C47.9778 117.995 49.4482 116.523 49.4482 114.708H47.4482C47.4482 115.419 46.8719 115.995 46.1618 115.995V117.995ZM20.9174 117.995H46.1618V115.995H20.9174V117.995ZM17.4374 121.474C17.4374 119.557 18.9996 117.995 20.9174 117.995V115.995C17.8957 115.995 15.4374 118.452 15.4374 121.474H17.4374ZM47.1253 64.3609H29.2863V66.3609H47.1253V64.3609ZM48.4128 63.0733C48.4128 63.784 47.836 64.3609 47.1253 64.3609V66.3609C48.9406 66.3609 50.4128 64.8886 50.4128 63.0733H48.4128ZM47.1253 61.7869C47.8367 61.7869 48.4128 62.3632 48.4128 63.0733H50.4128C50.4128 61.2573 48.9399 59.7869 47.1253 59.7869V61.7869ZM29.2863 61.7869H47.1253V59.7869H29.2863V61.7869ZM27.9999 63.0733C27.9999 62.3625 28.5756 61.7869 29.2863 61.7869V59.7869C27.471 59.7869 25.9999 61.2579 25.9999 63.0733H27.9999ZM29.2863 64.3609C28.5763 64.3609 27.9999 63.7847 27.9999 63.0733H25.9999C25.9999 64.8879 27.4703 66.3609 29.2863 66.3609V64.3609ZM45.7523 74.365L32.4885 80.464L33.3241 82.2811L46.5878 76.1821L45.7523 74.365ZM50.1122 75.9777C49.3539 74.3292 47.402 73.6068 45.7525 74.3649L46.5877 76.1822C47.234 75.8851 47.9985 76.1685 48.2952 76.8135L50.1122 75.9777ZM48.4981 80.3379C50.1478 79.5797 50.8705 77.6277 50.1124 75.978L48.2951 76.8132C48.592 77.4593 48.309 78.2237 47.6629 78.5206L48.4981 80.3379ZM35.2345 86.4368L48.4983 80.3378L47.6627 78.5207L34.399 84.6197L35.2345 86.4368ZM33.8627 86.7386C34.3225 86.7386 34.7921 86.6421 35.2376 86.4354L34.3959 84.6211C34.2234 84.7012 34.0421 84.7386 33.8627 84.7386V86.7386ZM30.8746 84.8242C31.429 86.0293 32.6204 86.7386 33.8627 86.7386V84.7386C33.3732 84.7386 32.9079 84.4586 32.6916 83.9883L30.8746 84.8242ZM32.4887 80.4639C30.839 81.2221 30.1163 83.1741 30.8745 84.8238L32.6917 83.9887C32.3948 83.3426 32.6779 82.5781 33.3239 82.2812L32.4887 80.4639ZM46.5878 49.9642L33.3241 43.8652L32.4885 45.6823L45.7523 51.7813L46.5878 49.9642ZM47.1241 50.0831C46.9447 50.0831 46.7634 50.0456 46.5909 49.9656L45.7493 51.7799C46.1947 51.9865 46.6643 52.0831 47.1241 52.0831V50.0831ZM48.295 49.3333C48.0789 49.8037 47.6144 50.0831 47.1241 50.0831V52.0831C48.3657 52.0831 49.5578 51.3755 50.1124 50.1681L48.295 49.3333ZM47.6629 47.6257C48.309 47.9226 48.592 48.687 48.2951 49.3331L50.1124 50.1683C50.8705 48.5186 50.1478 46.5666 48.4981 45.8084L47.6629 47.6257ZM34.399 41.5265L47.6627 47.6256L48.4983 45.8085L35.2345 39.7094L34.399 41.5265ZM32.6917 42.1588C32.9886 41.5128 33.7531 41.2297 34.3992 41.5266L35.2343 39.7094C33.5846 38.9512 31.6326 39.6739 30.8745 41.3236L32.6917 42.1588ZM33.3239 43.8651C32.6775 43.568 32.3951 42.8036 32.6916 42.1592L30.8746 41.3233C30.116 42.9723 30.8393 44.9243 32.4887 45.6823L33.3239 43.8651ZM108.875 66.3609H126.714V64.3609H108.875V66.3609ZM105.588 63.0733C105.588 64.8879 107.059 66.3609 108.875 66.3609V64.3609C108.165 64.3609 107.588 63.7847 107.588 63.0733H105.588ZM108.875 59.7869C107.059 59.7869 105.588 61.2579 105.588 63.0733H107.588C107.588 62.3625 108.164 61.7869 108.875 61.7869V59.7869ZM126.714 59.7869H108.875V61.7869H126.714V59.7869ZM130.001 63.0733C130.001 61.2573 128.528 59.7869 126.714 59.7869V61.7869C127.425 61.7869 128.001 62.3632 128.001 63.0733H130.001ZM126.714 66.3609C128.529 66.3609 130.001 64.8886 130.001 63.0733H128.001C128.001 63.784 127.424 64.3609 126.714 64.3609V66.3609ZM107.705 76.8134C108.001 76.1681 108.765 75.8851 109.412 76.1824L110.248 74.3651C108.599 73.6073 106.646 74.3276 105.888 75.9782L107.705 76.8134ZM108.337 78.5208C107.691 78.2239 107.408 77.4595 107.705 76.8134L105.888 75.9782C105.129 77.6279 105.852 79.5799 107.502 80.3381L108.337 78.5208ZM121.601 84.6199L108.337 78.5209L107.502 80.338L120.765 86.437L121.601 84.6199ZM122.137 84.7388C121.959 84.7388 121.778 84.7017 121.603 84.6207L120.764 86.4362C121.209 86.642 121.677 86.7388 122.137 86.7388V84.7388ZM123.308 83.9885C123.092 84.4588 122.627 84.7388 122.137 84.7388V86.7388C123.38 86.7388 124.571 86.0295 125.125 84.8244L123.308 83.9885ZM122.677 82.2812C123.322 82.578 123.605 83.3425 123.308 83.9889L125.126 84.824C125.884 83.1745 125.161 81.2226 123.513 80.4643L122.677 82.2812ZM109.412 76.1823L122.677 82.2813L123.513 80.4642L110.248 74.3652L109.412 76.1823ZM108.876 52.0831C109.336 52.0831 109.805 51.9865 110.251 51.7799L109.409 49.9656C109.237 50.0456 109.055 50.0831 108.876 50.0831V52.0831ZM105.888 50.1692C106.444 51.3749 107.633 52.0831 108.876 52.0831V50.0831C108.386 50.0831 107.922 49.8043 107.704 49.3322L105.888 50.1692ZM107.502 45.8084C105.852 46.5666 105.129 48.5186 105.888 50.1683L107.705 49.3331C107.408 48.687 107.691 47.9226 108.337 47.6257L107.502 45.8084ZM120.765 39.7094L107.502 45.8085L108.337 47.6256L121.601 41.5265L120.765 39.7094ZM125.126 41.3236C124.367 39.6738 122.417 38.9514 120.766 39.7092L121.6 41.5268C122.248 41.2295 123.011 41.5128 123.308 42.1588L125.126 41.3236ZM123.513 45.6822C125.161 44.924 125.884 42.9721 125.125 41.3233L123.308 42.1592C123.605 42.8038 123.322 43.5683 122.677 43.8652L123.513 45.6822ZM110.248 51.7813L123.513 45.6823L122.677 43.8651L109.412 49.9642L110.248 51.7813Z" mask="url(#path-4-outside-1)" />
            </svg>
          </div>
          <div className="section-center">
            <h2 className="subtitle">Accomplishments 🎖</h2>
            <div className="dark:text-white text-stone-700 flex align-bottom gap-16">
              <ul className="flex flex-wrap flex-col lg:flex-row mx-2 lg:mx-4 bullet">
                <li><div className="bullet" /><div className="text">Worked with project managers, developers, designers and stakeholders to resolve technical issues.</div></li>
                <li><div className="bullet" /><div className="text">Provided technical support to solve problems and support new projects.</div></li>
                <li><div className="bullet" /><div className="text">Developed robust, scalable, modular and API-centric infrastructures.</div></li>
                <li><div className="bullet" /><div className="text">Analyzed proposed technical solutions based on customer requirements.</div></li>
                <li><div className="bullet" /><div className="text">Promoted experience with Kubernetes and Docker.</div></li>
                <li><div className="bullet" /><div className="text">Coordinated efficient large-scale software deployments.</div></li>
                <li><div className="bullet" /><div className="text">Designed and developed highly scalable web applications</div></li>
                <li><div className="bullet" /><div className="text">Received recognition for consistently producing high-quality, maintainable, and well-documented code within the development team.</div></li>
                <li><div className="bullet" /><div className="text">Continuously stayed updated with the latest PHP and JavaScript trends, integrating new technologies and best practices into projects to maintain competitiveness.</div></li>
                <li><div className="bullet" /><div className="text">Contributed to open-source PHP projects like Lighthouse, demonstrating expertise and giving back to the developer community.</div></li>
                <li><div className="bullet" /><div className="text">Refactored legacy code bases to improve code efficiency, reducing page load times and enhancing overall application performance.</div></li>
                <li><div className="bullet" /><div className="text">Acted as a mentor to junior developers as apart of a program in Santex, providing guidance and support in coding best practices, resulting in their professional growth and improved team performance.</div></li>
                <li><div className="bullet" /><div className="text">Implemented rigorous testing procedures and code reviews, resulting in a significant reduction in the number of bugs and errors in production code.</div></li>
                <li><div className="bullet" /><div className="text">Strengthened application security by proactively identifying and addressing vulnerabilities, protecting user data and ensuring compliance with industry standards. (eg, MODE)</div></li>
                <li><div className="bullet" /><div className="text">Introduced modern PHP and JavaScript frameworks (e.g., Laravel, React) to projects, increasing development speed and maintainability of code.</div></li>
                <li><div className="bullet" /><div className="text">Demonstrated technical leadership by providing guidance on architecture decisions and leading codebase refactoring.</div></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section id="languages" className="languages">
          <div className="section-center">
            <h2 className="subtitle">Languages 🗣</h2>
            <div className="flex gap-12 dark:text-white text-stone-700 px-4">
              <div className="flex gap-2"><Flag code={'es'} width="24" /> Spanish (native)</div>
              <div className="flex gap-2"><Flag code={'us'} width="24" /> English (B2)</div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="timeline">
          <div className="section-center">
            <h2 className="subtitle">Timeline 🛣️</h2>
            <div className="line relative dark:text-white text-stone-700">
              <div className="row">
                <div className="item-wrapper">
                  <div className="dot" />
                  <div className="item">
                    <div className="company">OnyxCorp LLC</div>
                    <div className="title">Senior Software Engineer</div>
                    <div className="date">Apr 2017 - Sep 2023</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="item-wrapper">
                  <div className="dot" />
                  <div className="item">
                    <div className="company">Rack Performance</div>
                    <div className="title">Senior Software Engineer</div>
                    <div className="date">Mar 2013 - Dec 2020</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="item-wrapper">
                  <div className="dot" />
                  <div className="item">
                    <div className="company">AthleteEquip</div>
                    <div className="title">Senior Software Engineer</div>
                    <div className="date">Oct 2016 - Nov 2017</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="item-wrapper">
                  <div className="dot" />
                  <div className="item">
                    <div className="company">AthleteEquip</div>
                    <div className="title">Senior Software Engineer</div>
                    <div className="date">Oct 2016 - Nov 2017</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="item-wrapper">
                  <div className="dot" />
                  <div className="item">
                    <div className="company">Jakentra</div>
                    <div className="title">Software Developer Engineer</div>
                    <div className="date">Feb 2017 - Apr 2017</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="item-wrapper">
                  <div className="dot" />
                  <div className="item">
                    <div className="company">ProcessMaker Inc</div>
                    <div className="title">Software Developer Engineer</div>
                    <div className="date">May 2016 - Nov 2016</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="item-wrapper">
                  <div className="dot" />
                  <div className="item">
                    <div className="company">FEM Inc</div>
                    <div className="title">Software Developer</div>
                    <div className="date">May 2014 - Nov 2016</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="item-wrapper">
                  <div className="dot" />
                  <div className="item">
                    <div className="company">Hanger</div>
                    <div className="title">Software Developer</div>
                    <div className="date">Nov 2013 - Aug 2014</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="item-wrapper">
                  <div className="dot" />
                  <div className="item">
                    <div className="company">LBSI</div>
                    <div className="title">Software Developer</div>
                    <div className="date">Dec 2013 - May 2014</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="item-wrapper">
                  <div className="dot" />
                  <div className="item">
                    <div className="company">Fanattac</div>
                    <div className="title">Software Developer</div>
                    <div className="date">Nov 2012 - Jun 2013</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="item-wrapper">
                  <div className="dot" />
                  <div className="item">
                    <div className="company">Santex Group</div>
                    <div className="title">Software Developer</div>
                    <div className="date">Dec 2009 - Mar 2013</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="item-wrapper">
                  <div className="dot" />
                  <div className="item">
                    <div className="company">Mindsmack</div>
                    <div className="title">Software Developer</div>
                    <div className="date">Jan 2007 - Dec 2009</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="item-wrapper">
                  <div className="dot" />
                  <div className="item">
                    <div className="company">Exportech</div>
                    <div className="title">Junior Software Developer</div>
                    <div className="date">Jan 2003 - Nov 2003</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="item-wrapper">
                  <div className="dot" />
                  <div className="item">
                    <div className="company">UTN</div>
                    <div className="title">System Engineer</div>
                    <div className="date">Mar 2000 - Dec 2007</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="item-wrapper">
                  <div className="dot" />
                  <div className="item">
                    <div className="company">San Antonio De Padua</div>
                    <div className="title">High School Diploma</div>
                    <div className="date">Mar 1995  - Nov 1999</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ScrollToTopButton />
    </>

  )
}
