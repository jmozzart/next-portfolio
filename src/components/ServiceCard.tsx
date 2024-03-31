import {Mdiv} from "@/components/AnimatedBlock";
import Link from "next/link";


type ServiceCardProps = {
    icon: JSX.Element;
    title: string;
    description: string;
}


export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
    const slugifiedTitle = title.toLowerCase().replace(" ", "-");
    return (
      <Mdiv className="w-96 flex flex-col mx-auto">
        <div className="h-28 relative flex justify-center w-full top-12">
          <span className="relative rounded-full bg-gray-800 dark:bg-mainaccent-700 w-28 h-28">
            <svg className="fill-white dark:fill-black w-28 h-28 scale-50">{icon}</svg>
          </span>
        </div>
        <div className="rounded-xl bg-white dark:bg-black shadow-md px-7 pt-9 pb-6 text-center h-72 flex flex-col justify-between">
            <div>
                <h4 className="font-bold text-xl mt-8">{title}</h4>
                <p>{description}</p>
            </div>
            <Link href={`/services/${slugifiedTitle}`}
            className="bg-mainaccent-700 text-white rounded-lg p-2 dark:text-gray-900 dark:font-medium">Learn More</Link>
        </div>
      </Mdiv>
    );
  }
