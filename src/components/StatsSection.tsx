"use client"

import { DonutChart, StarRating } from '@/components/Charts';
import * as fadein from '@/components/AnimatedBlock';

const platforms = [
  {
    name: 'Upwork',
    projectsCount: 22,
    earnings: 3638.17,
    averageReviews: 5,
  },
  {
    name: 'Fiverr',
    projectsCount: 14,
    earnings: 981,
    averageReviews: 5,
  },
  {
    name: 'Direct',
    projectsCount: 3,
    earnings: 455,
    averageReviews: null,
  }
];

const projectscount = platforms.map(platform => ({ name: platform.name, value: platform.projectsCount }));
const earnings = platforms.map(platform => ({ name: platform.name, value: platform.earnings }));
const filteredPlatforms = platforms.filter(platform => platform.averageReviews !== null);
const aveReviews = filteredPlatforms.reduce((total, platform) => total + (platform.averageReviews || 0), 0) / filteredPlatforms.length;

const StatsSection = () => (
  <>
    <div className="mx-auto block md:flex flex-wrap justify-center">

      <fadein.div className="py-3 mx-10">
        <div className="flex justify-center mb-3">
          <svg width={300} height={310}>
            <DonutChart data={projectscount} type="integer" />
          </svg>
        </div>
        <div className="text-center block font-semibold text-gray-700 dark:text-gray-100">
          Projects Completed
        </div>
      </fadein.div>

      <fadein.div className="py-3 mx-10">
        <div className="flex justify-center mb-3">
          <svg width={300} height={310}>
            <DonutChart data={earnings} type="currency" />
          </svg>
        </div>
        <div className="text-center block font-semibold text-gray-700 dark:text-gray-100">
          Earnings Milestone
        </div>
      </fadein.div>

      <fadein.div className="py-3 mx-10">
        <div className="flex justify-center mb-3">
         
            <svg width={300} height={310} >
           <StarRating rating={aveReviews} />
          </svg>
        </div>
        <div className="text-center block font-semibold text-gray-700 dark:text-gray-100">
          Average Client Ratings
        </div>
      </fadein.div>

      
    </div>
  </>
);



export default StatsSection;