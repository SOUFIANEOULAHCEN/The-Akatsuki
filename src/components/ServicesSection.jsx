import Card from "./Card";
import ChessKingIcon from "./ChessKingIcon";
import KunaiIcon from "./KunaiIcon";
import ChakraIcon from "./ChakraIcon";
import EyeIcon from "./EyeIcon";
import HandshakeIcon from "./HandshakeIcon";
import AkatsukiCloudIcon from "./AkatsukiCloudIcon";

const services = [
  {
    title: "Tactical Planning",
    description: "Strategic brilliance is at the core of the Akatsuki's operations. We craft meticulous plans, always two steps ahead, ensuring success in even the most dangerous of missions.",
    Icon: ChessKingIcon
  },
  {
    title: "Elite Combat Training",
    description: "Each member of the Akatsuki has undergone intense combat training, mastering deadly techniques and abilities. We offer unparalleled martial and chakra-based combat education to those who seek the ultimate power.",
    Icon: KunaiIcon
  },
  {
    title: "Chakra Mastery",
    description: "Unlock the full potential of your chakra. The Akatsuki teaches mastery over energy and elemental control, making you capable of wielding abilities that can change the very fabric of reality.",
    Icon: ChakraIcon
  },
  {
    title: "Surveillance & Intelligence",
    description: "Information is power. Akatsuki gathers intelligence using advanced techniques, ensuring that no secret stays hidden for long. We offer intelligence services to ensure you're always in the know.",
    Icon: EyeIcon
  },
  {
    title: "World-Shaping Alliances",
    description: "Forming temporary alliances is an essential part of the Akatsuki's mission. We broker powerful partnerships, working with those who share our goal of reshaping the world.",
    Icon: HandshakeIcon
  },
  {
    title: "Unyielding Loyalty",
    description: "Once you join the Akatsuki, your loyalty is never questioned. We provide unwavering support to our members, ensuring that they are never left behind in their pursuit of power and glory.",
    Icon: AkatsukiCloudIcon
  }
];

export default function ServicesSection() {
  return (
    <section className="bg-black w-full flex flex-col gap-12 h-auto px-[5%] py-[5%]">
      <div>
        <div className="flex items-center leading-tight">
          <span className="border border-gray-100 w-16 h-2 bg-gray-100"></span>
          <h1 className="text-gray-100 text-5xl font-bold mx-2">Services.</h1>
        </div>
        <p className="text-red-600 text-lg mt-2">OUR SERVICES FOR CLIENTS</p>
      </div>
      {/* cards section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} {...service} />
        ))}
      </div>
    </section>
  );
}

