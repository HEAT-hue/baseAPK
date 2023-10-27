// jshint esversion:6

type ServicesProp = {
    title: string,
    SVG: string,
    desc: string
}

export const ServiceCard: React.FC<ServicesProp> = ({ title, SVG, desc }) => {
    return (
        <div className="border-[#EDEDED] bg-[#F7F7FD] p-7 pb-12  h-[430px] rounded-2xl shadow">
            <div className="p-3 bg-[#F1EAFA] w-max rounded-full">
                <img className="w-[25px] h-[25px]" src={SVG} alt="img" />
            </div>

            <div className="mt-5">
                <h3 className="font-AeonikTrial-Bold text-xl leading-[1.2]">{title}</h3>
                <p className="text-sm mt-3">{desc}</p>
            </div>
        </div>
    )
}