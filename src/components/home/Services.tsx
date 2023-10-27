// jshint esversion:6

type ServicesProp = {
    title: string,
    SVG: string,
    desc: string
}

export const Services: React.FC<ServicesProp> = ({ title, SVG, desc }) => {
    return (
        <div className="bg-white p-4 pb-[3rem] rounded-3xl shadow-lg w-[190px]">
            <img className="w-[25px] h-[25px]" src={SVG} alt="img" />

            <div className="mt-3">
                <h3 className="font-AeonikTrial-Bold text-lg leading-[1.2]">{title}</h3>
                <p className="text-xs mt-3">{desc}</p>
            </div>
        </div>
    )
}