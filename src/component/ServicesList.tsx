import ServiceCard from "./ServiceCard";
import FlipCard from "./FlipCard";
type Filters = {
  companyType: string;
};

type Service = {
  id: number;
  logo: string;
  name: string;
  type: string;
  rating: number;
  description: string;
  completionTime: string;
  price: string;
  clients: number;
};
type Flips = {
  id: number;
  logo: string;
  elaborate: string;
};

type ServicesListProps = {
  filters: Filters;
};

const ServicesList = ({ filters }: ServicesListProps) => {
  const services: Service[] = [
    {
      id: 1,
      logo: "/intell.jpg",
      name: "Gobiz Cosec Firm",
      type: "Secretarial service firm",
      rating: 4.9,
      description:
        "Incorporate your company with us and get 2 FREE CTC copies.",
      completionTime: "Complete in 2-3 working days",
      price: "RM 1,600",
      clients: 2483,
    },
    {
      id: 2,
      logo: "/iphone.jpg",
      name: "Consistent Net",
      type: "Secretarial service firm",
      rating: 3.2,
      description: "Get 20% off for 1st month of Secretary services",
      completionTime: "Complete in 7+ working days",
      price: "RM 1,499",
      clients: 1191,
    },
    {
      id: 3,
      logo: "/calling.avif",
      name: "Sarah Connor",
      type: "Licensed Secretary",
      rating: 5.0,
      description:
        "With more than 15 years in the industry, your company is in good hands",
      completionTime: "Complete in 2-3 working day",
      price: "RM 1,250",
      clients: 3290,
    },
    {
      id: 4,
      logo: "/WAU_logo.png",
      name: "Expert Services",
      type: "Secretarial service firm",
      rating: 1.1,
      description: "We deliver the best Secretarial Services in Malaysia",
      completionTime: "Complete in 12-14 working days",
      price: "RM 2,200",
      clients: 48,
    },
  ];
  const flips: Flips[] = [
    {
      id: 1,
      logo: "/intell.jpg",
      elaborate:"This is first flip card",
    },
    {
      id: 2,
      logo: "/iphone.jpg",
      elaborate:"This is second flip card",
    },
    {
      id: 3,
      logo: "/calling.avif",
      elaborate:"This is third flip card",
    },
    {
      id: 4,
      logo: "/WAU_logo.png",
      elaborate:"This is fourth flip card",
    },
  ];

  const filteredServices = services.filter((service) =>
    service.type.toLowerCase().includes(filters.companyType.toLowerCase())
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))
        ) : (
          <p className="text-gray-500 col-span-full">No services found.</p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {flips.length > 0 ? (
          flips.map((flip) => <FlipCard key={flip.id} FlipData ={flip} />)
        ) : (
          <p className="text-gray-500 col-span-full">No services found.</p>
        )}
      </div>
    </>
  );
};

export default ServicesList;
