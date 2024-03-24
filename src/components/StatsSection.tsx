"use client"

import * as Icons from '@/components/Icons';
import { DonutChart, GaugeChart } from '@/components/Charts';
import * as fadein from '@/components/AnimatedBlock';



const data = [
  {
    name: 'Upwork',
    value: 22,
  },
  {
    name: 'Fiverr',
    value: 14,
  },
  {
    name: 'Direct',
    value: 2,
  }
];
const earnings = [
  {
    name: 'Upwork',
    value: 3638.17,
  },
  {
    name: 'Fiverr',
    value: 981,
  },
  {
    name: 'Direct',
    value: 155,
  }
];

const StatsSection = () => (
  <>
    <div className="mx-auto block md:flex justify-center">

      <div className="py-3 mx-10">
        <div className="flex justify-center mb-3">
          <svg width={300} height={310}>
            <DonutChart data={data} type="integer" />
          </svg>
        </div>
        <fadein.div className="text-center block font-semibold text-gray-700">
          Projects Completed
        </fadein.div>
      </div>

      <div className="py-3 mx-10">
        <div className="flex justify-center mb-3">
          <svg width={300} height={310}>
            <DonutChart data={earnings} type="currency" />
          </svg>
        </div>
        <fadein.div className="text-center block font-semibold text-gray-700">
          Earnings Milestone
        </fadein.div>
      </div>

      <div className="py-3 mx-10">
        <div className="flex justify-center mb-3">
          <svg width={300} height={310}>
            <GaugeChart percentage={100} text="100%" /> 
          </svg>
        </div>
        <fadein.div className="text-center block font-semibold text-gray-700">
          Upwork Job Success Score
        </fadein.div>
      </div>

      <div className="py-3 mx-10">
        <div className="flex justify-center mb-3">
          <svg width={300} height={310}>
            <GaugeChart percentage={70} text="7/10" />
          </svg>
        </div>
        <fadein.div className="text-center block font-semibold text-gray-700">
          Fiverr Success Score
        </fadein.div>
      </div>

    </div>
  </>
);



export default StatsSection;