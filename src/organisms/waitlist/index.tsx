import { useState } from "react";
import axios from "axios";
import "./style.css";
import { toast } from "react-toastify"
import { useEffect } from "react";

const LoginFormComponent = () => {
  const [email, setEmail] = useState("");
  const [industry, setIndustry] = useState("");
  const [buttonText, setbuttonText] = useState("Join Waitlist");
  const API_URL = import.meta.env.VITE_BASE_API_URL

  useEffect(() => {
    async function getWaitlist() {
      try{
        const response = await axios.get(`${API_URL}/waitlist`)
        console.log(response)
      }catch (e) {
        console.log("error", e)
      }
    }

    // getWaitlist()
  }, [])

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleIndustryChange = (e) => {
    setIndustry(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const industry = e.target.industry.value;
    const data = { email, industry };
    const response = await axios.post(`${API_URL}/waitlist`, data)
    if(response.data === "Added to waitlist")
      return toast.success("You've joined the waitlist successfully")

    if(response.data === "Already added to waitlist")
      return toast.success(response.data)
      
  };

  return (
    <div className="LoginFormComponent my-4 ">
      <form onSubmit={handleSubmit} className="mt-8 form-width">
        <div className="mb-4 ">
          <input
            className="input-email shadow appearance-none border rounded-[8px] w-full bg-white py-[14px] px-[16px] text-gray-700 leading-base text-base focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="mb-4">
          <select
            className=" input-industry shadow  border rounded-[8px] w-full py-[14px] px-[16px] text-gray-700 leading-base text-base  focus:outline-none focus:shadow-outline bg-[#ffffff]"
            id="industry"
            name="industry"
            value={industry}
            onChange={handleIndustryChange}
          >
            <option value="">Select industry type</option>
            <option value="3D Printing">3D Printing</option>
            <option value="Agritech (Agricultural Technology)">
              Agritech (Agricultural Technology)
            </option>
            <option value="Artificial Intelligence (AI)">
              Artificial Intelligence (AI)
            </option>
            <option value="Augmented Reality (AR) / Virtual Reality (VR)">
              Augmented Reality (AR) / Virtual Reality (VR)
            </option>
            <option value="Automotive Technology">Automotive Technology</option>
            <option value="Direct-to-Consumer (D2C)">
              Direct-to-Consumer (D2C)
            </option>
            <option value="E-commerce">E-commerce</option>
            <option value="EdTech (Education Technology)">
              EdTech (Education Technology)
            </option>
            <option value="FashionTech">FashionTech</option>
            <option value=" Event Technology"> Event Technology</option>
            <option value="Financial Technology (Fintech)">
              Financial Technology (Fintech)
            </option>
            <option value="FoodTech">FoodTech</option>
            <option value="Gaming GovTech (Government Technology)">
              Gaming GovTech (Government Technology)
            </option>
            <option value="Healthcare Technology">
              Healthcare Technology(Healthtech)
            </option>
            <option value=" RetailTech "> RetailTech </option>
            <option value="Robotics">Robotics</option>
            <option
              value="Social Media Software as a Service
            (SaaS)"
            >
              Social Media Software as a Service (SaaS)
            </option>
            <option value="Space Technology (SpaceTech)">
              Space Technology (SpaceTech)
            </option>
            <option value=" Smart Home Technology">
              {" "}
              Smart Home Technology
            </option>
            <option
              value=" Smart
            Cities"
            >
              {" "}
              Smart Cities
            </option>
            <option value="Robotics Process Automation (RPA)">
              Robotics Process Automation (RPA)
            </option>
            <option
              value="Renewable
            Energy"
            >
              Renewable Energy
            </option>
            <option value="PropTech (Real Estate Technology)">
              PropTech (Real Estate Technology)
            </option>
            <option value="Personal Finance">Personal Finance</option>
            <option
              value="Personal Development and Productivity
            Apps"
            >
              Personal Development and Productivity Apps
            </option>
            <option value="Nanotechnology">Nanotechnology</option>
            <option value="Mobile Apps">Mobile Apps</option>
            <option value="Media and Entertainment">
              Media and Entertainment
            </option>
            <option
              value="Logistics and
            Supply Chain"
            >
              Logistics and Supply Chain
            </option>
            <option value=" MarTech (Marketing Technology)">
              {" "}
              MarTech (Marketing Technology)
            </option>
            <option value="Legal Cannabis Industry">
              Legal Cannabis Industry
            </option>
            <option value=" LegalTech (Legal Technology)">
              LegalTech (Legal Technology)
            </option>
            <option value="Internet of Things (IoT)">
              Internet of Things (IoT)
            </option>
            <option value="Insurtech (Insurance Technology)">
              Insurtech (Insurance Technology)
            </option>
            <option value="Industrial IoT">Industrial IoT(IIoT)</option>
            <option value="HR Tech (Human Resources Technology)">
              HR Tech (Human Resources Technology)
            </option>
            <option
              value="Transportation Technology (e.g.,
            Autonomous Vehicles)"
            >
              Transportation Technology (e.g., Autonomous Vehicles)
            </option>
            <option value="Wellness and Healthcare Apps">
              Wellness and Healthcare Apps
            </option>

            {/* Add more options as needed */}
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="button-join text-white font-bold py-[14px] px-[16px] rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginFormComponent;
