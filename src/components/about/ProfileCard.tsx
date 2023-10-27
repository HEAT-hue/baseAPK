// jshint esversion:6

type ProfileCardProp = {
    img: string,
    title: string
    name: string
}

export const ProfileCard: React.FC<ProfileCardProp> = ({img, title, name}) => {
    return (
        <>
            <div className="w-[300px]">
                <img className="w-full h-[300px]"  src={img} alt="Avatar" />

                <div className="bg-[#F7F7F7] p-7 flex flex-col gap-y-3">
                    {/* Name */}
                    <p className="font-Inter-Bold text-sm">{name}</p>

                    <div className="flex gap-3">
                        {/* Rectangle */}
                        <div className="w-[14px] h-[20px] bg-sec"></div>

                        {/* Title */}
                        <p className="text-sec text-sm">{title}</p>
                    </div>
                </div>  
            </div>
        </>
    )
}