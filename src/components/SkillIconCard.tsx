

interface SkillProps {
    icon: JSX.Element;
    name: string;
    isHidden: boolean;
    viewMore: () => void;
  }

const SkillIconCard = ({ icon, name, isHidden, viewMore }: SkillProps) => (
    <div className={`${isHidden ? "hidden md:flex" : "flex"}
          flex-col mb-10 px-3 items-center cursor-pointer`}
      onClick={viewMore}
    >
      <div>
        <svg width={70} height={70} className=" fill-gray-700 dark:fill-gray-300">
          {icon}
        </svg>
      </div>
      <p className="text-center font-semibold  text-gray-700 dark:text-gray-100">{name}</p>
    </div>
  );
  

  export default SkillIconCard;