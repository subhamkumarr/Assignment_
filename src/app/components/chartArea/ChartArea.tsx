import ImageWithFallback from "../common/ImageWithFallback";

type ChartAreaProps = {
    name: string;
    value: string;
    percentage: number;
}

export default function ChartArea({ name, value, percentage }: ChartAreaProps) {
    return (
        <div className="cursor-pointer flex flex-col border-gray-light justify-center py-9 min-h-40 border bg-gradient-to-r min-w-[368px] from-white-shade rounded-lg font-semibold px-5">
            <div className="text-large">{name}</div>
            <div className="flex items-center justify-between">
                <p className="text-2xl">{value}</p>
                <div className="text-green text-small">
                    +{percentage}%
                    <ImageWithFallback src='/arrow_icon.svg' alt="" width={20} height={10} />
                </div>
            </div>
        </div>
    );
}



