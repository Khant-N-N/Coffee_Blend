import { CgNotes } from "react-icons/cg";
import { TbTruckDelivery } from "react-icons/tb";
import { GiCoffeeBeans } from "react-icons/gi";

const Service = () => {
  return (
    <div className="text-black text-center bg-[var(--secondary-color)] flex flex-col lg:flex-row gap-5 justify-center items-center py-36">
      <div
        data-aos="fade-up"
        data-aos-delay="0"
        className="flex flex-col items-center justify-center gap-6 max-w-[350px]"
      >
        <div className="border border-black/60 p-5">
          <CgNotes className="text-[2.7rem] " />
        </div>
        <h3 className="text-[1.2rem]">EASY TO ORDER</h3>
        <p className="text-black/60">
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="flex flex-col items-center justify-center gap-6 max-w-[350px]"
      >
        <div className="border border-black/60 p-5">
          <TbTruckDelivery className="text-[2.7rem] " />
        </div>
        <h3 className="text-[1.2rem]">FASTEST DELIVERY</h3>
        <p className="text-black/60">
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="flex flex-col items-center justify-center gap-6 max-w-[350px]"
      >
        <div className="border border-black/60 p-5">
          <GiCoffeeBeans className="text-[2.7rem] " />
        </div>
        <h3 className="text-[1.2rem]">QUALITY COFFEE</h3>
        <p className="text-black/60">
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic
        </p>
      </div>
    </div>
  );
};

export default Service;
