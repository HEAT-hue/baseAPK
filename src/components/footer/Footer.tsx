// jshint esversion:6
import FacebookIcon from "@/assets/footer/facebook.svg"
import InstagramIcon from "@/assets/footer/instagram.svg"
import TwitterIcon from "@/assets/footer/instagram.svg";
import LinkedInIcon from "@/assets/footer/linkedin.svg";


export const Footer: React.FC = () => {
    return (
        <div className="bg-[#292D32] py-5 px-inline">
            <div className="flex flex-col gap-y-7">

                {/* About the company */}
                <div className="flex flex-col gap-y-5">
                    {/* Company title */}
                    <h3 className="text-pry text-xl font-AeonikTrial-Bold">Definity Innovations &amp; Solutions</h3>

                    {/* Company description */}
                    <p className="text-white text-sm">Definity Innovations and solutions is a technology company that empowers businesses with cutting edge solutions that makes them stay ahead in the evolving digital landscape. </p>

                    {/* Social links */}
                    <div className="flex gap-x-5">
                        {/* Facebook link */}
                        <a href="#" className="p-2 bg-white rounded-full">
                            <img className="w-[18px] h-[18px]" src={FacebookIcon} alt="" />
                        </a>

                        {/* Twitter link */}
                        <a href="#" className="p-2 bg-white rounded-full">
                            <img className="w-[18px] h-[18px]" src={TwitterIcon} alt="" />
                        </a>
                        {/* Facebook link */}
                        <a href="#" className="p-2 bg-white rounded-full">
                            <img className="w-[18px] h-[18px]" src={InstagramIcon} alt="" />
                        </a>
                        {/* Facebook link */}
                        <a href="#" className="p-2 bg-white rounded-full">
                            <img className="w-[18px] h-[18px]" src={LinkedInIcon} alt="" />
                        </a>

                    </div>
                </div>

                {/* Company Info and links */}
                <div className="flex flex-col gap-y-5"  >

                    {/* Company Info */}
                    <div>
                        <h3 className="text-brandColor font-AeonikTrial-Bold text-lg">COMPANY INFORMATION</h3>

                        <div className="flex flex-col gap-y-4 mt-3">
                            {/* Location */}
                            <div>
                                <div className="flex flex-col gap-y-3">
                                    <h4 className="text-brandColor font-AeonikTrial-Bold text-[15px]">Head Office:</h4>
                                    <p className="text-white">Port harcourt, Nigeria</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <div className="flex flex-col gap-y-3">
                                    <h4 className="text-brandColor font-AeonikTrial-Bold  text-[15px]">Email</h4>
                                    <a href="mailto:info@definityinnovation.com" className="text-white">info@definityinnovation.com</a>
                                </div>
                            </div>

                            {/* Phone number */}
                            <div>
                                <div className="flex flex-col gap-y-3">
                                    <h4 className="text-brandColor font-AeonikTrial-Bold  text-[15px]">Phone Number</h4>
                                    <a href="tel:++234 902 567 8999" className="text-white">+234 902 567 8999</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-brandColor font-AeonikTrial-Bold text-lg">QUICK LINKS</h3>

                        <ul className="text-white font-AeonikTrial-Regular flex flex-col gap-y-2 mt-3">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#home">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footerk content */}
            <div className="mt-9">
                <p className="text-xs font-Manrope-Regular text-center text-white flex items-center justify-center gap-x-1">
                    <span className="text-base">&copy;</span>
                    <span>2023 - Definity Innovations and Solutions Limited - All rights reserved</span>
                    {/* <div className="w-[10px] h-[1px] bg-white"></div> */}
                </p>
            </div>
        </div>
    )
}