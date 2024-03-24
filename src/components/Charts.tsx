
import { motion } from "framer-motion";

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
  



const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
        const delay = 1 + i * 0.5;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 }
            }
        };
    }
};


function strokeDashoffset(percentage: number, runningTotal: number) {
    const circumference = 100
    const strokeDashoffset = circumference - runningTotal + 25
    return strokeDashoffset;
}

const COLORS = [
    '#179FB7',
    '#b1c94e',
    '#377bbc',
    '#ce4b99',
    '#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const dataFormatter = (number: number) =>
    `$ ${Intl.NumberFormat('us').format(number).toString()}`;


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
        <svg viewBox="0 0 42 44" className="block fill-gray-500">

            <circle cx="21" cy="21" r="15.91549430918954" stroke="#d2d3d4" strokeWidth="5" fill="transparent" />

            {percentage.map((item: any, index: number) => {
                const runningTotal = percentage.slice(0, index).reduce((acc: number, curr: any) => acc + curr.percentage, 0);

                return (
                    <g key={index}>
                       
                            <motion.circle cx="21" cy="21" r="15.91549430918954"

                                fill="transparent"
                                stroke={COLORS[index]}
                                strokeWidth="5"
                                initial={{
                                    pathLength: getBrowser() === "Safari" ? (item.percentage / 100) + 0.01 : 0,
                                    pathOffset: index === 0 ? 0 : (runningTotal / 100)
                                }}
                                whileInView={{
                                    
                                    pathLength: (item.percentage / 100) + 0.01,
                                    transition: { duration: 0.5, delay: 0.2 * index }
                                }}
                                viewport= {{ once: true }}
                            />
                     
                        {/*     <circle
                                cx="21"
                                cy="21"
                                r="15.91549430918954"
                                fill="transparent"
                                stroke={COLORS[index]}
                                strokeWidth="5"
                                strokeDasharray={`${item.percentage} ${100 - item.percentage}`}
                                strokeDashoffset={strokeDashoffset(item.percentage, runningTotal)}
                            /> */}
                   
                        <circle cx={(index * 33) + 12 + "%"} cy="97%" r="0.7" fill={COLORS[index]}
                        />

                        <text fontSize="2" x={(index * 33) + 15 + "%"} y="98.5%"
                        > {item.name} </text>
                    </g>
                )
            })}
            <text fontSize={type == "currency" ? 5 : 8} x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="fill-mainaccent-700 font-semibold">
                {type == "currency" ? dataFormatter(total) : total}
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
                /* <motion.path
                d="M5.084505690811,21a15.915494309189,15.915494309189 0 1,0 31.830988618378,0a15.915494309189,15.915494309189 0 1,0 -31.830988618378,0" */
                stroke={COLORS[0]} strokeWidth="5" fill="transparent"
                    initial={{ 
                        pathLength: getBrowser() === "Safari" ? (Number(percentage) / 100) + 0.01 : 0,
                    }}
                    whileInView={{
                        
                        pathLength: (Number(percentage) / 100) + 0.01,
                        transition: { duration: 0.8,
                            ease: "easeInOut",
                         }
                        
                    }}
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.5 }
                    
                    }}
                    viewport= {{ once: true }}

                />
          

            <text fontSize="8" x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="fill-mainaccent-700 font-semibold">
                {text}
            </text>
        </svg>
    )
}
