"use client"

import { DonutChart, StarRating } from '@/components/Charts';
import {Mdiv} from '@/components/AnimatedBlock';

const platforms = [
  {
    name: 'Upwork',
    projectsCount: 81,
    earnings: 35400,
    averageReviews: 4.7,
  },
  {
    name: 'Fiverr',
    projectsCount: 14,
    earnings: 2100,
    averageReviews: 4.8,
  },
  {
    name: 'Direct',
    projectsCount: 19,
    earnings: 14853,
    averageReviews: null,
  }
];

const projectscount = platforms.map(platform => ({ name: platform.name, value: platform.projectsCount }));
const earnings = platforms.map(platform => ({ name: platform.name, value: platform.earnings }));
const filteredPlatforms = platforms.filter(platform => platform.averageReviews !== null);
const aveReviews = Number((filteredPlatforms.reduce((total, platform) => total + (platform.averageReviews || 0), 0) / filteredPlatforms.length).toFixed(1));

const StatsSection = () => (
  <>
    <div className="mx-auto block md:flex flex-wrap justify-around">

      <Mdiv className="mx-auto mb-6">
        <div className="flex justify-center mb-3">
          <svg width={300} height={310}>
            <DonutChart data={projectscount} type="integer" />
          </svg>
        </div>
        <div className="text-center block font-semibold text-gray-700 dark:text-gray-100">
          Projects Completed
        </div>
      </Mdiv>

      <Mdiv className="mx-auto mb-6">
        <div className="flex justify-center mb-3">
          <svg width={300} height={310}>
            <DonutChart data={earnings} type="currency" />
          </svg>
        </div>
        <div className="text-center block font-semibold text-gray-700 dark:text-gray-100">
          Earnings Milestone
        </div>
      </Mdiv>

      <Mdiv className="mx-auto mb-6">
        <div className="flex justify-center mb-3">
         
            <svg width={300} height={310} >
           <StarRating rating={aveReviews} />
          </svg>
        </div>
        <div className="text-center block font-semibold text-gray-700 dark:text-gray-100">
          Average Client Ratings
        </div>
      </Mdiv>

      
    </div>
  </>
);



export default StatsSection;