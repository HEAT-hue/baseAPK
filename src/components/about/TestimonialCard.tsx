// jshint esversion:6
import Avatar from "@/assets/about/Avatar.png";

type TestimonialCardProp = {
    name: string,
    title: string,
    desc: string
}

export const TestimonialCard: React.FC<TestimonialCardProp> = ({name, title, desc}) => {
    return (
        <div className="bg-[#212121] p-[2rem] h-[300px] w-[300px] flex flex-col justify-between font-AeonikTrial-Regular text-white rounded-lg">
            {/* Testimonial */}
            <p className="text-sm">{desc}</p>

            <div className="flex gap-x-5 items-start">
                <img className="w-[50px] h-[50px] rounded-full" src={Avatar} alt="avatar" />

                <div className="flex flex-col items-center gap-y-3">
                    <p className="font-AeonikTrial-Bold text-lg text-brandColor">{name}</p>
                    <p className="font-AeonikTrial-Light">{title}</p>
                </div>
            </div>
        </div>
    )
}