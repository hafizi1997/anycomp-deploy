import { useState } from "react";
import Card from "./Card";

type FlipCardProps = {
  FlipData: {
    id: number;
    logo: string;
    elaborate: string;
  };
};

const FlipCard: React.FC<FlipCardProps> = ({ FlipData }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="card-wrapper">
      <div
        className={`card-flipper ${flipped ? "flipped" : ""}`}
        onClick={handleFlip}
      >
        {/* Front Side */}
        <div className="front">
          <Card className="hover:border-[#0080ff]/50 transition-all duration-300 group flex flex-col h-full">
            <img
              src={FlipData.logo}
              alt="About Visual"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
          </Card>
        </div>

        {/* Back Side */}
        <div className="back">
          <p className="text-dark-500 text-sm">{FlipData.elaborate}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
