import { CardServices } from "./card-services";

export function Services() {
    return (
        <div className="bg-[#f5f5f5] py-5">
            <h2 className="text-blue-950 mb-10 text-center font-bold relative text-2xl lg:text-3xl ">
                SERVIÇOS
                <span className="block mt-2 border-t-4 border-emerald-700 w-1/4 mx-auto" />
            </h2>
            <CardServices />
        </div>
    )
}