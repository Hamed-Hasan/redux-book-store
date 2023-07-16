
import strength from "../../Images/strength.png";

import "./Strength.css";
import { AiOutlineCheck } from 'react-icons/ai';
const Strength = () => {
  return (
    <div className="bg-white w-full block lg:flex justify-center items-center py-14">
      <>
        <div className=" w-full lg:w-1/3 px-2">
          <img src={strength} alt="" />
        </div>
      </>
      <>
        <div className="lg:w-[60ch] px-4">
          <h2 className="font-[Nunito] text-4xl font-extrabold my-5 text-blue-900">
            Our <span className="text-blue-500">Strength</span>
          </h2>
          <p className="my-2">
            Comprising a team of committed, visionary dedicated people based on
            Sydney’s Northern Beaches,
            <br />
          </p>

          <br />

          <div className="line-container flex items-center">
            <div className="check-content">
              <AiOutlineCheck  />
            </div>
            <p>Streamlined Workflow</p>
          </div>

          <div className="line-container flex items-center">
            <div className="check-content">
            <AiOutlineCheck  />
            </div>
            <p>‘One-Click’ Customer Management</p>
          </div>

          <div className="line-container flex items-center">
            <div className="check-content">
            <AiOutlineCheck  />
            </div>
            <p>Automated Service Reminders</p>
          </div>

          <div className="line-container flex items-center">
            <div className="check-content">
            <AiOutlineCheck  />
            </div>
            <p>Efficient Customer Inspections</p>
          </div>

          <div className="line-container flex items-center">
            <div className="check-content">
            <AiOutlineCheck  />
            </div>
            <p>Technician Productivity Tracking</p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Strength;
