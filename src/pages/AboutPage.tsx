// jshint esversion:6
import AboutImg from "@/assets/about/Hero_About.png";
import ImportImg from "@/assets/about/import.svg";
import GlassImg from "@/assets/about/glass.svg";
import { ProfileCard, TestimonialCard } from "@/components/about";
import AvatarImg from "@/assets/about/Avatar.png"
import { Footer } from "@/components/footer";

export const AboutPage: React.FC = () => {

    return (
        <div className="overflow-hidden">
            {/* Hero Image */}
            <section className="pb-[2rem]">
                <div className="w-full h-[178px] sm:h-[400px]">
                    <img className="object-cover w-full h-full" src={AboutImg} alt="About us" />
                </div>

                {/* Heading */}
                <div className="px-inline mt-5 flex flex-col gap-y-4">
                    <h1 className="font-Inter-Bold text-xl">Definity Innovations & Solutions LLC - Development Company</h1>
                    <p className="font-Inter-Regular">At Definity Innovations & Solutions, we are more than just a company;
                        we are a passionate team of innovators, creators, and problem-solvers dedicated to shaping the future of technology and design.
                        Our journey began with a simple belief: that every idea, no matter how big or small, has the potential to make a difference.
                        Our mission is to empower individuals and businesses with cutting-edge solutions that not only meet their needs but also exceed their expectations.
                        We are committed to delivering excellence in everything we do, from software development to UI/UX design, and product management.
                    </p>
                    <button className="px-3 bg-pry font-AeonikTrial-Regular text-vlack rounded py-3 w-max mt-4">Book Consultation</button>
                </div>
            </section>

            {/* Mission and Vision Statements */}
            <section className="flex flex-col sm:flex-row justify-center items-center gap-5 py-[5rem] mt-5 bg-[#E3D6F5] px-inline">
                {/* Mission statement */}
                <div className="p-7 bg-white rounded-lg flex flex-col gap-y-5 max-w-[350px] h-[480px]">
                    <img className="w-[36px] h-[36px]" src={ImportImg} alt="mission statememnt" />

                    <h3 className="font-AeonikTrial-Bold text-xl">Mission</h3>

                    <p className="text-sm font-AeonikTrial-Regular">
                        Our mission is to harness the power of technology and design to drive positive change.
                        We are dedicated to creating innovative solutions that solve real-world problems and enhance the lives of individuals and businesses.
                        With a relentless commitment to excellence, we strive to set new standards in our industry, delivering products and services that exceed expectations.
                        Our ultimate goal is to leave a lasting, positive impact on the world through our work, one project at a time.
                    </p>
                </div>

                {/* Vision statement */}
                <div className="p-7 bg-white rounded-lg flex flex-col gap-y-5 pb-12 max-w-[350px] h-[480px]">
                    <img className="w-[36px] h-[36px]" src={GlassImg} alt="mission statememnt" />

                    <h3 className="font-AeonikTrial-Bold text-xl">Vision</h3>

                    <p className="text-sm font-AeonikTrial-Regular">
                        Our vision is to be a beacon of innovation and excellence in the world of technology and design.
                        We aspire to be at the forefront of cutting-edge solutions, shaping industries and transforming businesses.
                        Our goal is to inspire a culture of creativity and continuous improvement, where every idea is a catalyst for positive change.
                        We envision a future where our work has a meaningful impact, where our clients' success stories become our legacy. Ultimately, our vision is to lead by example, demonstrating that through innovation, collaboration, and unwavering commitment to excellence, we can shape a brighter, more connected world.
                    </p>
                </div>
            </section>

            {/* Meet our leadership team */}
            <section className="py-7">
                <h3 className="font-Inter-Bold text-center text-xl py-9">Meet Our Leadership Team</h3>

                {/* Profile */}
                <div className="flex flex-wrap [&>*]:flex-shrink-0 justify-center gap-4">
                    <ProfileCard title="CEO / Founder" name="Dr Adeyemi O. Odebunmi" img={AvatarImg} />
                    <ProfileCard title="CO-Founder / CTO" name="Prof. Jophus Anamuah - Mensah" img={AvatarImg} />
                    <ProfileCard title="Design Lead" name="P.C Meshack Tetteh - Courtney" img={AvatarImg} />
                </div>
            </section>

            {/* Testimonials */}
            <section className="px-inline py-7">
                <h3 className="text-start text-pry font-AeonikTrial-Bold text-sm uppercase">Our Testimonials</h3>
                <p className="font-AeonikTrial-Bold text-lg mt-3 leading-tight capitalize">What our clients say about us</p>

                <p className="font-AeonikTrial-Regular text-sm mt-4">
                    At Definity Innovations & Solutions, our clients are at the heart of everything we do.
                    But don't just take our word for it—listen to what they have to say
                </p>

                {/* Testimonials */}
                <div className="mt-7 flex flex-wrap [&>*]:flex-shrink-0 justify-center gap-4 gap-y-5">

                    <TestimonialCard
                        desc="With a commitment to cutting-edge technologies and best practices, we craft software that is scalable, secure, and future-proof. Our goal is to empower your business with the digital tools it needs to thrive in an ever-evolving landscape."
                        title="CEO, Zapier"
                        name="Christian Lee"
                    />
                    <TestimonialCard
                        desc="With a commitment to cutting-edge technologies and best practices, we craft software that is scalable, secure, and future-proof. Our goal is to empower your business with the digital tools it needs to thrive in an ever-evolving landscape."
                        title="CEO, Zapier"
                        name="Christian Lee"
                    />
                    <TestimonialCard
                        desc="With a commitment to cutting-edge technologies and best practices, we craft software that is scalable, secure, and future-proof. Our goal is to empower your business with the digital tools it needs to thrive in an ever-evolving landscape."
                        title="CEO, Zapier"
                        name="Christian Lee"
                    />

                </div>
            </section>

            {/* Consultation */}
            <section className="px-inline py-7 bg-[#FFF2CC] font-AeonikTrial-Regular">
                <div className="flex flex-col gap-y-4 max-w-[700px] mx-auto">
                    <p className="text-brandColor text-center">UNLOCK THE POWER OF POSSIBILITY WITH A CONSULTATION</p>

                    <p className="font-AeonikTrial-Bold text-2xl text-center">Have a Project Idea in Mind?</p>

                    <p className="text-center leading-tight">Don't miss the chance to transform your ideas into actionable plans. Schedule your consultation now, and let's start shaping your success story together</p>
                </div>

                {/* Book consultation */}
                <div className="flex justify-center mt-5">
                    <button className="px-3 bg-pry font-AeonikTrial-Regular text-vlack rounded py-3 w-max mt-4">Book a 30 Minutes Consultation</button>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>


    )
}