interface ServiceCardProps {
  logo: string;
  name: string;
  type: string;
  rating: number;
  description: string;
  completionTime: string;
  price: string;
  clients: number;
}
const ServiceCard = ({
  logo,
  name,
  type,
  rating,
  description,
  completionTime,
  price,
  clients,
}: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden flex flex-col">
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-center mb-6 h-32">
          <img src={logo} alt={name} className="max-h-full object-contain" />
        </div>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500">{type}</p>
          </div>
          <div className="flex items-center bg-gray-100 px-2 py-1 rounded">
            <span className="font-bold mr-1">{rating}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-yellow-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
        <p className="mt-3 text-gray-800 font-medium">{description}</p>
        <div className="mt-4 text-sm text-gray-600">
          <p>{completionTime}</p>
        </div>
        <div className="mt-auto pt-4 flex items-end justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900">{price}</span>
            <span className="text-gray-500 text-sm ml-2">
              ({clients} clients)
            </span>
          </div>
        </div>
      </div>
      <div className="">
        <button className=" py-3 px-4 text-center text-gray-800 hover:bg-gray-100 font-medium rounded-full">
          Message
        </button>
        <button className=" py-3 px-4 text-center text-white bg-blue-800 hover:bg-blue-900 font-medium rounded-full">
          Incorporate
        </button>
      </div>
    </div>
  );
};
export default ServiceCard;
