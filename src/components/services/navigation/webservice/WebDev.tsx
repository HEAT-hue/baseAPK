// jshint esversion:6
import { ServiceCard } from "../ServiceCard"
import MonitorIcon from "@/assets/services/monitor.svg";
import RankingIcon from "@/assets/services/ranking.svg";
import SecurityIcon from "@/assets/services/security-user.svg";
import VerifyIcon from "@/assets/services/verify.svg";


export const WebDevService: React.FC = () => {
    return (
        <>
            <h3 className="font-AeonikTrial-Bold text-lg">Unlock the Digital Frontier with Our <span className="text-sec">Web Development Services</span></h3>

            {/* Description */}
            <p className="mt-3 font-AeonikTrial-Regular">
                In today's digital landscape, your online presence is your gateway to the world. At Definity Innovations & Solutions, we understand the power of the web and how it can transform businesses and ideas into thriving digital experiences.
                Our Web Development services are at the forefront of innovation, driven by a passion for crafting web solutions that not only meet but exceed expectations. Whether you're a start-up with a bold vision or an established business seeking to enhance your online footprint, we have the expertise and creativity to bring your concepts to life.
            </p>

            {/* Services */}
            <div className="mt-9 flex flex-col gap-y-7">
                <ServiceCard
                    title="Formidable Front- End"
                    SVG={MonitorIcon}
                    desc="Our front-end professionals ensure that  they craft visually stunning and highly intuitive front-end solutions that captivate users. Our expertise lies in turning design concepts into interactive, responsive, and user-friendly web experiences. With an unwavering commitment to detail and user-centric design, we ensure that your front-end not only meets but exceeds expectations. "
                />
                <ServiceCard
                    title="Reliable Back- End"
                    SVG={MonitorIcon}
                    desc="Behind every great digital experience lies a robust and efficient back-end system.  Our back - end wizards specialize in developing the hidden engine that drives your web applications and services. Our back-end solutions are the backbone of reliability, security, and functionality, ensuring that your digital presence runs seamlessly. We handle data storage, server management, and application logic, allowing you to focus on what matters most – delivering exceptional user experiences."
                />
                <ServiceCard
                    title="Top Security"
                    SVG={SecurityIcon}
                    desc="In today's interconnected landscape, security is paramount. We prioritize the protection of your digital assets and user data. Our comprehensive security solutions are designed to keep your web applications and systems fortified against threats. We employ state-of-the-art technologies and industry best practices to ensure the utmost defence. Rest easy knowing that your digital world is shielded by our expertise. "
                />
                <ServiceCard
                    title="SEO Friendly"
                    SVG={VerifyIcon}
                    desc="In the digital age, being discoverable is key. Our strategies are designed to enhance your website's visibility on search engines, driving more organic traffic to your digital doorstep. With a focus on optimizing content, improving site structure, and staying on top of search engine algorithms, we ensure that you rise to the top of search results. "
                />
            </div>

            {/* Consultation */}
            <section className="py-7 mt-5 flex flex-col gap-y-7 font-AeonikTrial-Regular">
                <h3 className="text-sec text-xl font-AeonikTrial-Bold text-center">Looking to Develop your Web application ? </h3>

                <p>This is a great time to work efficiently and innovate while our team can become your reliable tech partner.</p>

                {/* Book consultation */}
                <div className="flex justify-center">
                    <button className="px-3 bg-pry text-vlack rounded py-3 w-max">Book a 30 Minutes Consultation</button>
                </div>
            </section>

            {/* PWeb development process */}
            <section className="py-7">
                <div className="py-5 border-b">
                    <h3 className="uppercase text-pry text-smm font-AeonikTrial-Bold">Step by step</h3>
                    <p className="font-AeonikTrial-Bold mt-2 text-2xl">Web Development Process</p>
                </div>

                {/* Process list */}
                <ol className="mt-3 flex flex-col gap-y-4">

                    {/* PLANNING AND STRATEGY */}
                    <li className="border-b border-red-800 py-5">
                        <h4 className="font-AeonikTrial-Bold text-[#CB9901] text-lg">1.  PLANNING & STRATEGY</h4>
                        <ul className="text-sm mt-2 flex flex-col gap-y-1 pl-4">
                            <li className="before:content-['_-']"> Define project goals, objectives, and scope.</li>
                            <li className="before:content-['_-']"> Research target audience and competitors.</li>
                            <li className="before:content-['_-']"> Create a project plan, including timelines and milestones.</li>
                        </ul>
                    </li>

                    {/* DESIGN */}
                    <li className="border-b border-red-800 py-5">
                        <h4 className="font-AeonikTrial-Bold text-[#CB9901] text-lg">2.  DESIGN</h4>
                        <ul className="text-sm mt-2 flex flex-col gap-y-2 pl-4">
                            <li className="before:content-['_-']"> Develop wireframes or prototypes to outline the site's layout and functionality.</li>
                            <li className="before:content-['_-']"> Design the user interface (UI) and user experience (UX) elements.</li>
                            <li className="before:content-['_-']"> Obtain feedback and iterate on designs as necessary.</li>
                        </ul>
                    </li>

                    {/* FRONTEND DEVELOPMENT */}
                    <li className="border-b border-red-800 py-5">
                        <h4 className="font-AeonikTrial-Bold text-[#CB9901] text-lg">3. FRONT - END DEVELOPMENT</h4>
                        <ul className="text-sm mt-2 flex flex-col gap-y-2 pl-4">
                            <li className="before:content-['_-']"> Write HTML, CSS, and JavaScript code to build the visual elements of the website.</li>
                            <li className="before:content-['_-']"> Ensure responsiveness for various devices and screen sizes.</li>
                            <li className="before:content-['_-']"> Implement user interactions and animations.</li>
                        </ul>
                    </li>

                    {/* BACKEND DEVELOPMENT */}
                    <li className="border-b border-red-800 py-5">
                        <h4 className="font-AeonikTrial-Bold text-[#CB9901] text-lg">4. BACK - END DEVELOPMENT</h4>
                        <ul className="text-sm mt-2 flex flex-col gap-y-2 pl-4">
                            <li className="before:content-['_-']"> Develop server-side logic and functionality.</li>
                            <li className="before:content-['_-']"> Set up databases and data storage solutions.</li>
                            <li className="before:content-['_-']"> Implement authentication and security measures.</li>
                            <li className="before:content-['_-']"> Create APIs if needed for data communication.</li>
                        </ul>
                    </li>

                    {/* TESTING & QA */}
                    <li className="border-b border-red-800 py-5">
                        <h4 className="font-AeonikTrial-Bold text-[#CB9901] text-lg">5. TESTING & QA</h4>
                        <ul className="text-sm mt-2 flex flex-col gap-y-2 pl-4">
                            <li className="before:content-['_-']"> Conduct thorough testing to identify and fix bugs and issues.</li>
                            <li className="before:content-['_-']"> Perform cross-browser and cross-device testing to ensure compatibility.</li>
                            <li className="before:content-['_-']"> Test website performance and load times.</li>
                        </ul>
                    </li>

                    {/* DEPLOYMENT AND MAINTENANCE */}
                    <li className="border-b border-red-800 py-5">
                        <h4 className="font-AeonikTrial-Bold text-[#CB9901] text-lg">6. DEPLOYMENT & MAINTENANCE</h4>
                        <ul className="text-sm mt-2 flex flex-col gap-y-2 pl-4">
                            <li className="before:content-['_-']"> Prepare the website for deployment to a hosting server.</li>
                            <li className="before:content-['_-']"> Configure server settings and domain names.</li>
                            <li className="before:content-['_-']">  Deploy the website to a production environment.</li>
                            <li className="before:content-['_-']"> Monitor and maintain the website, making regular updates and improvements as needed.</li>
                        </ul>
                    </li>
                </ol>
            </section>
        </>
    )
}