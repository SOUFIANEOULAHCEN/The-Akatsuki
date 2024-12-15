import EyeIcon from "./EyeIcon";

export default function Card({
  title = "Tactical Planning",
  description = "Strategic brilliance is at the core of the Akatsuki's operations. We craft meticulous plans, always two steps ahead, ensuring success in even the most dangerous of missions.",
  Icon = EyeIcon,
}) {
  return (
    <div className="max-w-[400px] p-6 bg-[#1A1B26] rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-[#922C44] group">
      <div className="mb-4">
        <Icon
          color="#922C44"
          size={45}
          className="transition-all duration-300 group-hover:[&>path]:stroke-[#fff] group-hover:[&>circle]:stroke-[#fff]"
        />
      </div>
      <div className="text-gray-100">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}

