

import benefits from "../../Images/benefits.png";
import "./Benefits.css";
import { AiOutlineInbox, AiOutlineDollarCircle,AiOutlineRotateLeft} from 'react-icons/ai';
import { FaPeopleArrows} from 'react-icons/fa';

const Benefits = () => {
  return (
    <div className="bg-white w-full block lg:flex justify-center items-center py-14 mb-10">
      <>
        <div className="w-full px-2 lg:w-1/3">
          <img src={benefits} alt="" />
        </div>
      </>

      <div className="lg:w-[60ch] px-4">
        <>
          <h2 className="font-[Nunito] text-4xl font-extrabold my-5 text-blue-900">
            Customer <span className="text-blue-500">Benefits</span>
          </h2>
          <p className="my-5">
            Our objective is to Reduce our clients overall Logistics Cost and
            Increase their Customer Order Servicability <br />
            <br />
          </p>
        </>

        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="strength-option shadow hover:shadow-lg transition-all duration-300">
              <p className="strength-icon">
                <AiOutlineInbox />
              </p>
              <h3 className="font-bold text-md my-2 uppercase">
                Parts Inventory
              </h3>
              <p className="text-xs leading-4">
                Manage your stocktake with ease. Keep track of all your parts as
                you buy and sell..
              </p>
            </div>

            <div className="strength-option shadow hover:shadow-lg transition-all duration-300">
              <p className="strength-icon">
                <AiOutlineDollarCircle />
              </p>
              <h3 className="font-bold text-md my-2 uppercase">
                Flexible Pricing Levels
              </h3>
              <p className="text-xs leading-4">
                Easily customise your invoice according to your customers
                pricing levels.
              </p>
            </div>

            <div className="strength-option shadow hover:shadow-lg transition-all duration-300">
              <p className="strength-icon">
                <FaPeopleArrows />
              </p>
              <h3 className="font-bold text-md my-2 uppercase">Support Team</h3>
              <p className="text-xs leading-4">
                Workshop Mate is supported, owned and operated in Australia.
                Call or email us when you need support
              </p>
            </div>

            <div className="strength-option shadow hover:shadow-lg transition-all duration-300">
              <p className="strength-icon">
                <AiOutlineRotateLeft />
              </p>
              <h3 className="font-bold text-md my-2 uppercase">
                Service History
              </h3>
              <p className="text-xs leading-4">
                Just at a simple click Service History lets you know the
                customer name and vehicle history
              </p>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Benefits;
