import { gallery1, gallery2, gallery3, gallery4 } from "../../assets";
import { FaMagnifyingGlass } from "react-icons/fa6";
const CustomerImages = () => {
  return (
    <div className="md:flex justify-center">
      <div className="relative group">
        <img
          src={gallery1}
          className="h-[250px] object-cover w-full"
          alt="gallery1"
          loading="lazy"
        />
        <div className="absolute top-[45%] left-[45%] xs:left-[48%] md:left-[43%] lg:left-[45%] group-hover:rotate-[135deg] transition-all opacity-0 group-hover:opacity-100 duration-700 p-7 bg-[var(--secondary-color)]" />
        <FaMagnifyingGlass className="absolute top-[52%] left-[50.4%] opacity-0 group-hover:opacity-100 duration-700 transition-opacity" />
      </div>
      <div className="relative group">
        <img
          src={gallery2}
          className="h-[250px] object-cover w-full"
          alt="gallery2"
          loading="lazy"
        />
        <div className="absolute top-[45%] left-[45%] xs:left-[48%] md:left-[43%] lg:left-[45%] group-hover:rotate-[135deg] transition-all opacity-0 group-hover:opacity-100 duration-700 p-7 bg-[var(--secondary-color)]" />
        <FaMagnifyingGlass className="absolute top-[52%] left-[50.4%] opacity-0 group-hover:opacity-100 duration-700 transition-opacity" />
      </div>
      <div className="relative group">
        <img
          src={gallery3}
          className="h-[250px] object-cover w-full"
          alt="gallery3"
          loading="lazy"
        />
        <div className="absolute top-[45%] left-[45%] xs:left-[48%] md:left-[43%] lg:left-[45%] group-hover:rotate-[135deg] transition-all opacity-0 group-hover:opacity-100 duration-700 p-7 bg-[var(--secondary-color)]" />
        <FaMagnifyingGlass className="absolute top-[52%] left-[50.4%] opacity-0 group-hover:opacity-100 duration-700 transition-opacity" />
      </div>
      <div className="relative group">
        <img
          src={gallery4}
          className="h-[250px] object-cover w-full"
          alt="gallery4"
          loading="lazy"
        />
        <div className="absolute top-[45%] left-[45%] xs:left-[48%] md:left-[43%] lg:left-[45%] group-hover:rotate-[135deg] transition-all opacity-0 group-hover:opacity-100 duration-700 p-7 bg-[var(--secondary-color)]" />
        <FaMagnifyingGlass className="absolute top-[52%] left-[50.4%] opacity-0 group-hover:opacity-100 duration-700 transition-opacity" />
      </div>
    </div>
  );
};

export default CustomerImages;
