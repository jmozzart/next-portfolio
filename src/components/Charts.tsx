
import { motion } from "framer-motion";
import { get } from "http";

function getBrowser() {
    if (typeof window !== 'undefined') {
        const userAgent = window.navigator.userAgent;

        if (/MSIE|Trident/.test(userAgent)) {
            return 'Internet Explorer';
        } else if (/Edge/.test(userAgent)) {
            return 'Edge';
        } else if (/Firefox/.test(userAgent)) {
            return 'Firefox';
        } else if (/Chrome/.test(userAgent)) {
            return 'Chrome';
        } else if (/Safari/.test(userAgent)) {
            return 'Safari';
        } else {
            return 'Unknown';
        }
    }

    return 'Unknown';
}





function strokeDashoffset(percentage: number, runningTotal: number) {
    const circumference = 100
    const strokeDashoffset = circumference - runningTotal + 25

    return strokeDashoffset;
}

const COLORS = [
    //'#179FB7',
    '#ce4b99',
    '#b1c94e',
    '#377bbc',
    '#ce4b99',
    '#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const dataFormatter = (number: number) =>
    `$ ${Intl.NumberFormat('us').format(number).toString()}`;

const moneyRounder = (number: number) =>
    `$ ${Math.round(number / 1000)}K+`


interface DonutChartProps {
    data: {
        name: string;
        value: number;
    }[];
    type?: string;
}


export function DonutChart({ data, type }: DonutChartProps) {

    const total = data.reduce((acc: number, curr: any) => acc + curr.value, 0);

    const percentage = data.map((item: any) => {
        return {
            name: item.name,
            value: item.value,
            percentage: (item.value / total) * 100
        }
    }).sort((a, b) => b.value - a.value);

    return (
        <svg viewBox="0 0 42 44" >

            <circle cx="21" cy="21" r="15.91549430918954" className="dark:stroke-gray-800 stroke-gray-300" strokeWidth="5" fill="transparent" />

            {percentage.map((item: any, index: number) => {
                const runningTotal = percentage.slice(0, index).reduce((acc: number, curr: any) => acc + curr.percentage, 0);

                return (
                    <g key={index}>

                        <motion.circle cx="21" cy="21" r="15.91549430918954"
                            transform={`rotate(-90 21 21)`}
                            fill="transparent"
                            stroke={COLORS[index]}
                            strokeWidth="5"
                            initial={{
                                pathLength: getBrowser() === "Safari" ? (item.percentage / 100) + 0.01 : 0,
                                pathOffset: index === 0 ? 0 : (runningTotal / 100)
                            }}
                            whileInView={{
                                pathLength: (item.percentage / 100) + 0.01,
                                transition: { duration: 0.5,
                                    delay: index == 0 ? 0 : 0.5 * index
                                 }
                            }}
                            viewport={{ once: true }}
                        />

                        <circle cx={(index * 33) + 12 + "%"} cy="97%" r="0.7" fill={COLORS[index]}
                        />

                        <text fontSize="2" x={(index * 33) + 15 + "%"} y="98.5%" className="fill-gray-600 dark:fill-gray-200 font-mono"
                        > {item.name} </text>
                    </g>
                )
            })}
            <text fontSize={8} x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="fill-mainaccent-700 font-semibold">
                {type == "currency" ? moneyRounder(total) : (type == "percentage" ? (total / data.length) : total)}
            </text>
        </svg>
    )
}

interface GaugeChartProps {
    percentage: number;
    text: string;
}

export function GaugeChart({ percentage, text }: GaugeChartProps) {


    return (
        <svg viewBox="0 0 42 42"     >

            <circle className="stroke-gray-300" cx="21" cy="21" r="15.91549430918954" strokeWidth="5"
                fill="transparent"
            />

            <motion.circle cx="21" cy="21" r="15.91549430918954"

                stroke={COLORS[0]} strokeWidth="5" fill="transparent"
                initial={{
                    pathLength: getBrowser() === "Safari" ? (Number(percentage) / 100) + 0.01 : 0,
                }}
                whileInView={{

                    pathLength: (Number(percentage) / 100) + 0.01,
                    transition: {
                        duration: 0.8,
                        ease: "easeInOut",
                    }

                }}
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5 }

                }}
                viewport={{ once: true }}

            />


            <text fontSize="8" x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="fill-mainaccent-700 font-semibold">
                {text}
            </text>
        </svg>
    )
}


export function StarRating({ rating }: { rating: number }) {
    const width = 4121;
    const height = 4121;
    const newwidth = width / 5 * rating;
    return (


        <svg x="0px" y="0px" viewBox={`0 0 ${width} ${height}`}>
            <text fontSize="1800" x="40%" y="50%" textAnchor="middle" dominantBaseline="middle" className="fill-mainaccent-700 font-semibold">
                {rating}
            </text>
            <text fontSize="1000" x="65%" y="53%" textAnchor="middle" dominantBaseline="middle" className="fill-gray-400 font-semibold ">
                /5
            </text>
            <g transform={`translate(0, ${height - 800})`} >
                <defs>
                    <clipPath id="maskfv">
                        <motion.rect x="0" y="0" width={width} height={height} fill="red"
                            initial={{
                                width: getBrowser() === "Safari" ? newwidth : 0,
                            }}
                            whileInView={{ width: newwidth }}
                            transition={{ duration: 1.1 }}
                            viewport={{ once: true }}
                        />
                    </clipPath>
                </defs>
<g className="fill-amber-500">
                <path y="400" d="M439.6,41.5l90.2,182.8c6.3,12.7,18.4,21.5,32.4,23.6l201.8,29.3c35.3,5.1,49.4,48.6,23.9,73.5L642,493
	c-10.1,9.9-14.8,24.2-12.4,38.1l34.5,201c6,35.2-30.9,62-62.5,45.4l-180.5-94.9c-12.5-6.6-27.6-6.6-40.1,0l-180.5,94.9
	c-31.6,16.6-68.6-10.2-62.5-45.4l34.5-201c2.4-14-2.2-28.2-12.4-38.1l-146-142.3c-25.6-24.9-11.5-68.4,23.9-73.5l201.8-29.3
	c14-2,26.2-10.8,32.4-23.6l90.2-182.8C378.2,9.5,423.8,9.5,439.6,41.5z" clipPath="url(#maskfv)" />

                <path d="M1269.6,41.5l90.2,182.8c6.3,12.7,18.4,21.5,32.4,23.6l201.8,29.3c35.3,5.1,49.4,48.6,23.9,73.5l-146,142.3
	c-10.1,9.9-14.8,24.2-12.4,38.1l34.5,201c6,35.2-30.9,62-62.5,45.4l-180.5-94.9c-12.5-6.6-27.6-6.6-40.1,0l-180.5,94.9
	c-31.6,16.6-68.6-10.2-62.5-45.4l34.5-201c2.4-14-2.2-28.2-12.4-38.1l-146-142.3c-25.6-24.9-11.5-68.4,23.9-73.5l201.8-29.3
	c14-2,26.2-10.8,32.4-23.6l90.2-182.8C1208.2,9.5,1253.8,9.5,1269.6,41.5z"  clipPath="url(#maskfv)" />
                <path d="M2099.6,41.5l90.2,182.8c6.3,12.7,18.4,21.5,32.4,23.6l201.8,29.3c35.3,5.1,49.4,48.6,23.9,73.5l-146,142.3
	c-10.1,9.9-14.8,24.2-12.4,38.1l34.5,201c6,35.2-30.9,62-62.5,45.4l-180.5-94.9c-12.5-6.6-27.6-6.6-40.1,0l-180.5,94.9
	c-31.6,16.6-68.6-10.2-62.5-45.4l34.5-201c2.4-14-2.2-28.2-12.4-38.1l-146-142.3c-25.6-24.9-11.5-68.4,23.9-73.5l201.8-29.3
	c14-2,26.2-10.8,32.4-23.6l90.2-182.8C2038.2,9.5,2083.8,9.5,2099.6,41.5z"  clipPath="url(#maskfv)" />
                <path d="M2929.6,41.5l90.2,182.8c6.3,12.7,18.4,21.5,32.4,23.6l201.8,29.3c35.3,5.1,49.4,48.6,23.9,73.5l-146,142.3
	c-10.1,9.9-14.8,24.2-12.4,38.1l34.5,201c6,35.2-30.9,62-62.5,45.4L2911,682.6c-12.5-6.6-27.6-6.6-40.1,0l-180.5,94.9
	c-31.6,16.6-68.6-10.2-62.5-45.4l34.5-201c2.4-14-2.2-28.2-12.4-38.1l-146-142.3c-25.6-24.9-11.5-68.4,23.9-73.5l201.8-29.3
	c14-2,26.2-10.8,32.4-23.6l90.2-182.8C2868.2,9.5,2913.8,9.5,2929.6,41.5z"  clipPath="url(#maskfv)" />
                <path d="M3759.6,41.5l90.2,182.8c6.3,12.7,18.4,21.5,32.4,23.6l201.8,29.3c35.3,5.1,49.4,48.6,23.9,73.5l-146,142.3
	c-10.1,9.9-14.8,24.2-12.4,38.1l34.5,201c6,35.2-30.9,62-62.5,45.4L3741,682.6c-12.5-6.6-27.6-6.6-40.1,0l-180.5,94.9
	c-31.6,16.6-68.6-10.2-62.5-45.4l34.5-201c2.4-14-2.2-28.2-12.4-38.1l-146-142.3c-25.6-24.9-11.5-68.4,23.9-73.5l201.8-29.3
	c14-2,26.2-10.8,32.4-23.6l90.2-182.8C3698.2,9.5,3743.8,9.5,3759.6,41.5z"  clipPath="url(#maskfv)" />

            </g>
            </g>
        </svg>

    )
}

export function BarChart({ data }: { data: any[] }) {
    const total = data.reduce((acc: number, curr: any) => acc + curr.value, 0);

    return (
        <svg viewBox="0 0 42 44" className="block fill-gray-500">

            <circle cx="21" cy="21" r="15.91549430918954" stroke="#d2d3d4" strokeWidth="5" fill="transparent" />

            {data.map((item: any, index: number) => {
                const runningTotal = data.slice(0, index).reduce((acc: number, curr: any) => acc + curr.value, 0);

                return (
                    <g key={index}>

                        <motion.rect x="0" y={index * 10} width="42" height="5"
                            fill="transparent"
                            stroke={COLORS[index]}
                            initial={{
                                width: getBrowser() === "Safari" ? (item.value / total) * 42 : 0,
                            }}
                            whileInView={{
                                width: (item.value / total) * 42,
                                transition: { duration: 0.5, delay: 0.2 * index }
                            }}
                            viewport={{ once: true }}
                        />

                        <circle cx="0" cy={index * 10} r="0.7" fill={COLORS[index]}
                        />

                        <text fontSize="2" x="0" y={index * 10}
                        > {item.name} </text>
                    </g>
                )
            })}
            <text fontSize={8} x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="fill-mainaccent-700 font-semibold">
                {total}
            </text>
        </svg>
    )
}

export function ProgressBar({ percentage }: { percentage: number }) {
    return (
        <div className="w-full py-0.5">
            <div className="w-full h-4 md:h-5 bg-gray-300 rounded-r-full dark:bg-gray-700">
                <motion.div className="h-4 md:h-5 bg-mainaccent-700 rounded-r-full dark:bg-cyan-500"
                initial={{ width: 0 }}
                whileInView={{ width: `${percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                />
            </div>
        </div>
    )
}