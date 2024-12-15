import React from 'react'
import { FiCloud, FiZap } from 'react-icons/fi';
import { GiShuriken } from 'react-icons/gi';
import Card from './FeatureCard';

function Features() {
    const cardData = [
        {
          icon: <FiZap />,
          title: "Mastery of Jutsu",
          description:
            "Each Akatsuki member is a master of their unique abilities. Whether it's manipulating powerful chakra, summoning terrifying beasts, or controlling the elements.",
        },
        {
          icon: <FiCloud />,
          title: "Mastery of Jutsu",
          description:
            "Each Akatsuki member is a master of their unique abilities. Whether it's manipulating powerful chakra, summoning terrifying beasts, or controlling the elements.",
        },
        {
          icon: <GiShuriken />,
          title: "Mastery of Jutsu",
          description:
            "Each Akatsuki member is a master of their unique abilities. Whether it's manipulating powerful chakra, summoning terrifying beasts, or controlling the elements.",
        },
      ];
    
      return (
        <div className="flex flex-col md:flex-row gap-6 justify-center  ">
          {cardData.map((card, index) => (
           <div
           key={index}
           className=" border-2 rounded-lg border-transparent hover:border-red-500"
         >
              <Card
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
      );
    };

export default Features
