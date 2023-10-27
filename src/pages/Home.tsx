// jshint esversion:6
import AIImage from "@/assets/home/ai-nuclear-energy-background.png";
import NuclearImage from "@/assets/home/programming-background.png";
import MonitorIcon from "@/assets/home/monitor.svg"
import BrushIcon from "@/assets/home/brush.svg"
import MobileIcon from "@/assets/home/mobile.svg"
import SettingIcon from "@/assets/home/setting-5.svg"
import ShapeIcon from "@/assets/home/shapes.svg"
import AddIcon from "@/assets/home/add.svg"
import EducationIcon from "@/assets/home/teacher.svg"
import FintechIcon from "@/assets/home/monero.svg"
import HealthcareIcon from "@/assets/home/health.svg"
import EcommerceIcon from "@/assets/home/shopping-cart.svg";
import BusinessIcon from "@/assets/home/favorite-chart.svg";
import ManufactureIcon from "@/assets/home/status.svg";
import PatternImage from "@/assets/home/pattern.png";
import DomainPatterImage from "@/assets/home/domain_pattern.svg";
import { Services } from "@/components/home";
import { Footer } from "@/components/footer";


export const HomePage: React.FC = () => {

    const layerStyle = {
        background: `url(${PatternImage}) no-repeat center center/cover `
    }

    const domainStyle = {
        background: `#FFF2CC url(${DomainPatterImage}) no-repeat center center/cover `
    }

    return (
        <>
            {/* Hero Section */}
            <section className="grid grid-cols-1 gap-y-7 sm:grid-cols-2">
                <div className="font-AeonikTrial-Regular  px-inline">
                    <h1 className="text-2xl">Elevating Your Digital <br /> Presence
                        <br /> with <span className="text-pry">Innovative Solutions.</span></h1>

                    <p className="mt-2 text-lightBlack">Definity Innovations and solutions is a technology company that empowers businesses with
                        cutting edge solutions that makes them stay ahead in the evolving digital landscape. </p>

                    {/* CTA */}
                    <div className="mt-5 flex justify-center gap-x-5">
                        <button className="px-3 bg-sec font-AeonikTrial-Regular text-white rounded py-3 ">Explore Services</button>
                        <button className="px-3 bg-pry font-AeonikTrial-Regular text-vlack rounded py-3">Book Consultation</button>
                    </div>
                </div>

                {/* Hero Image Container */}
                <div className="py-9 w-full justify-self-end px-inline" style={layerStyle}>
                    <div className="h-[337px] w-[309px] ml-auto relative">
                        <img src={AIImage} className="w-[223px] h-[275px] absolute z-10 top-0 left-0" alt="AI image" />
                        <img src={NuclearImage} className="w-[223px] h-[275px] absolute bottom-0 right-0" alt="AI image" />
                    </div>
                </div>
            </section>

            {/* Services  offered*/}
            <section className="py-7 relative">
                <h3 className="capitalize text-center text-black md:text-pry font-AeonikTrial-Bold text-xl">What we offer</h3>

                <p className="text-sm font-AeonikTrial-Regular w-[300px] text-center mx-auto mt-3">Our experienced tech team will provide tailored solutions to drive your business forward</p>

                <div className="w-full flex flex-nowrap gap-x-6 px-inline py-8 overflow-scroll [&>*]:flex-shrink-0">
                    <Services
                        title="Custom Software Development"
                        desc="Create custom software tailored for your unique needs, including front-end, and core back-end technology."
                        SVG={MonitorIcon}
                    />
                    <Services
                        title="UI/UX Design"
                        desc="Create beautiful, pixel-perfect, and easy-to-use designs that delight your end users."
                        SVG={BrushIcon}
                    />
                    <Services
                        title="Mobile App Development"
                        desc="Build performant, scalable, and secure mobile applications for iOS and Android devices."
                        SVG={MobileIcon}
                    />
                    <Services
                        title="QA and Testing"
                        desc="Create custom software tailored for your unique needs, including front-end, and core back-end technology."
                        SVG={SettingIcon}
                    />
                    <Services
                        title="Platform and Infrastructure"
                        desc="Ensure applications are secure, fault tolerant and highly available with our DevOps and Security engineers."
                        SVG={ShapeIcon}
                    />
                    <Services
                        title="Teaching and Partnerships"
                        desc="We offer a range of educational programs, workshops, and partnerships that empower individuals and businesses to thrive in the digital world"
                        SVG={MonitorIcon}
                    />
                </div>

                {/* CTA */}
                <div className="mt-5 flex justify-center gap-x-5">
                    <button className="px-3 bg-sec font-AeonikTrial-Regular text-white rounded py-3 ">Explore Services</button>
                </div>

                {/* Background */}
                <div className="absolute inset-0 z-[-1]">
                    <div className="bg-[#FFF2CC] h-[60%]"></div>
                    <div className="bg-[#E3D6F5] h-[40%]"></div>
                </div>
            </section>

            {/* What we can do */}
            <section className="px-inline py-7">
                <h3 className="text-start text-pry font-AeonikTrial-Bold text-xl uppercase">WHAT WE CAN DO</h3>

                {/* Abilities */}
                <div className="flex flex-col gap-y-3 mt-5">
                    <p className="font-AeonikTrial-Bold text-lg">Our Tech - stacks</p>
                    <p className="text-sm">Definity Innovation and Solutions applies the latest approaches that allow us to create and scale excellent products for our clients from the ground up.</p>
                </div>

                {/* Tech Stacks */}
                <div className="mt-12 flex flex-col gap-y-5">
                    <div className="flex items-center justify-between bg-[#F0F0F0] p-5 rounded-md">
                        <p className="font-AeonikTrial-Bold">Back - End Technologies</p>
                        <img src={AddIcon} alt="add" />
                    </div>
                    <div className="flex items-center justify-between bg-[#F0F0F0] p-5 rounded-md">
                        <p className="font-AeonikTrial-Bold">Front - End Technologies</p>
                        <img src={AddIcon} alt="add" />
                    </div>
                    <div className="flex items-center justify-between bg-[#F0F0F0] p-5 rounded-md">
                        <p className="font-AeonikTrial-Bold">Mobile - End Technologies</p>
                        <img src={AddIcon} alt="add" />
                    </div>
                    <div className="flex items-center justify-between bg-[#F0F0F0] p-5 rounded-md">
                        <p className="font-AeonikTrial-Bold">Design Tools</p>
                        <img src={AddIcon} alt="add" />
                    </div>
                    <div className="flex items-center justify-between bg-[#F0F0F0] p-5 rounded-md">
                        <p className="font-AeonikTrial-Bold">Product Management Tools</p>
                        <img src={AddIcon} alt="add" />
                    </div>
                    <div className="flex items-center justify-between bg-[#F0F0F0] p-5 rounded-md">
                        <p className="font-AeonikTrial-Bold">Databases</p>
                        <img src={AddIcon} alt="add" />
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-7 flex justify-center gap-x-5">
                    <button className="px-6 bg-sec font-AeonikTrial-Bold text-white rounded py-4 text-sm">View our Services</button>
                </div>
            </section>

            {/* Choose us */}
            <section className="#F7F7FD px-inline py-9 bg-[#f7f7fd]">
                <h1 className="text-xl mx-auto font-AeonikTrial-Bold text-center leading-relaxed w-[16ch]">Choose Us: Your Path to Innovation and <span className="text-pry">Success</span></h1>

                {/* Expertise */}
                <div className="w-full flex flex-nowrap gap-x-6 px-inline py-8 overflow-scroll [&>*]:flex-shrink-0 mt-2 rounded-lg">
                    <div className="w-[320px] bg-white p-8 rounded-[2rem] flex flex-col gap-y-3 first-letter:">
                        <p className="font-AeonikTrial-Bold text-lg leading-tight">Expertise Across the Tech Spectrum</p>
                        <p className="font-AeonikTrial-Regular text-sm">Our team consists of seasoned developers, designers, and experts who excel in various areas of technology.</p>
                    </div>

                    <div className="w-[320px] bg-gradient-to-tr from-[#a78542] from-10% to-[#ffc20d] to-90% text-white p-8 rounded-[2rem] flex flex-col gap-y-3 first-letter:">
                        <p className="font-AeonikTrial-Bold text-lg leading-tight">Proven Track Record of Success:</p>
                        <p className="font-AeonikTrial-Regular text-sm">Our portfolio is a testament to our ability to deliver impactful results.</p>
                    </div>

                    <div className="w-[320px] bg-white p-8 rounded-[2rem] flex flex-col gap-y-3 first-letter:">
                        <p className="font-AeonikTrial-Bold text-lg leading-tight">Collaborative Approach, Transparent Communication:</p>
                        <p className="font-AeonikTrial-Regular text-sm">We believe in working hand-in-hand with our clients.</p>
                    </div>
                </div>
            </section>

            {/* Our Domains */}
            <section className="px-inline py-9 bg-[#FFF9E6]" style={domainStyle}>
                <h3 className="text-start text-pry font-AeonikTrial-Bold text-sm uppercase">Our Domains</h3>
                <p className="font-AeonikTrial-Bold text-lg mt-3 leading-tight">Some of the Industries we provide our expertise  </p>

                <div className="flex flex-wrap gap-5 justify-center mt-7">

                    {/* Domain */}
                    <p className="flex flex-col gap-y-4 justify-center items-center w-[145px] h-[145px] bg-white rounded-lg">

                        {/* Domain Icon */}
                        <div className="p-3 bg-[#FFF9E6] rounded-full">
                            <img className="w-[30px] h" src={EducationIcon} alt="image" />
                        </div>

                        {/* Domain title */}
                        <p className="font-AeonikTrial-Bold text-lg">Education</p>
                    </p>

                    {/* Domain */}
                    <p className="flex flex-col gap-y-4 justify-center items-center w-[145px] h-[145px] bg-white rounded-lg">

                        {/* Domain Icon */}
                        <div className="p-3 bg-[#FFF9E6] rounded-full">
                            <img className="w-[30px] h" src={FintechIcon} alt="image" />
                        </div>

                        {/* Domain title */}
                        <p className="font-AeonikTrial-Bold text-lg">Fintech</p>
                    </p>


                    {/* Domain */}
                    <p className="flex flex-col gap-y-4 justify-center items-center w-[145px] h-[145px] bg-white rounded-lg">

                        {/* Domain Icon */}
                        <div className="p-3 bg-[#FFF9E6] rounded-full">
                            <img className="w-[30px] h" src={HealthcareIcon} alt="image" />
                        </div>

                        {/* Domain title */}
                        <p className="font-AeonikTrial-Bold text-lg">Health-care</p>
                    </p>


                    {/* Domain */}
                    <p className="flex flex-col gap-y-4 justify-center items-center w-[145px] h-[145px] bg-white rounded-lg">

                        {/* Domain Icon */}
                        <div className="p-3 bg-[#FFF9E6] rounded-full">
                            <img className="w-[30px] h" src={EcommerceIcon} alt="image" />
                        </div>

                        {/* Domain title */}
                        <p className="font-AeonikTrial-Bold text-lg">E-commerce</p>
                    </p>


                    {/* Domain */}
                    <p className="flex flex-col gap-y-4 justify-center items-center w-[145px] h-[145px] bg-white rounded-lg">

                        {/* Domain Icon */}
                        <div className="p-3 bg-[#FFF9E6] rounded-full">
                            <img className="w-[30px] h" src={BusinessIcon} alt="image" />
                        </div>

                        {/* Domain title */}
                        <p className="font-AeonikTrial-Bold text-lg">Business</p>
                    </p>

                    {/* Domain */}
                    <p className="flex flex-col gap-y-4 justify-center items-center w-[145px] h-[145px] bg-white rounded-lg">

                        {/* Domain Icon */}
                        <div className="p-3 bg-[#FFF9E6] rounded-full">
                            <img className="w-[30px] h" src={ManufactureIcon} alt="image" />
                        </div>

                        {/* Domain title */}
                        <p className="font-AeonikTrial-Bold text-lg">Manufacture</p>
                    </p>


                </div>
            </section>

            {/* Footer */}
            <Footer />

        </>
    )
}