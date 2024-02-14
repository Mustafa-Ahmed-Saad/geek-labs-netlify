import { FaDollarSign } from "react-icons/fa";
import { IoDocumentTextOutline, IoStatsChartSharp } from "react-icons/io5";
import { TbDatabaseDollar } from "react-icons/tb";

import DarkP from "../darkP/DarkP";
import Tab from "../tab/Tab";

const AlertDetails = () => (
  <div className="bg-main-light rounded-12 px-3 py-4">
    <div className="border border-1 border-secondary rounded-10 special-bg py-3">
      <div className="row">
        <div className="col-12 col-sm-6 col-lg-3 px-0">
          <Tab
            text={
              <>
                <FaDollarSign className="fs-4 me-1" />
                <span className="Nunito-sans-font">$TSLA</span>
              </>
            }
            badge={false}
            pipe={true}
            classes={"fs-10 text-white fw-light"}
          />
        </div>
        <div className="col-12 col-sm-6 col-lg-3 px-0">
          <Tab
            text={
              <>
                <IoDocumentTextOutline className="fs-4 me-1" />
                <span className="no-wrap-words Nunito-sans-font">
                  200 Contracts
                </span>
              </>
            }
            badge={false}
            pipe={true}
            classes={"fs-10 text-white fw-light responsive-pipe"}
          />
        </div>
        <div className="col-12 col-sm-6 col-lg-3 px-0">
          <Tab
            text={
              <>
                <IoStatsChartSharp className="fs-4 me-2" />
                <span className="Nunito-sans-font">12.2%</span>
              </>
            }
            badge={false}
            pipe={true}
            classes={"fs-10 text-white fw-light"}
          />
        </div>
        <div className="col-12 col-sm-6 col-lg-3 px-0">
          <Tab
            text={
              <>
                <TbDatabaseDollar className="fs-4 me-2" />
                <span className="Nunito-sans-font no-wrap-words">
                  High risk
                </span>
              </>
            }
            badge={false}
            pipe={false}
            classes={"fs-10 text-white fw-light"}
          />
        </div>
      </div>

      <p className="mt-3 px-4 mb-0">
        Someone Just bought xxxx contracts of $XYZ, this is notable because the
        relative volume on this options trade is X.X%.
      </p>
    </div>

    <DarkP text=" X company released a short report on $XYZ, High IV option sales opps" />
    <DarkP text="$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails." />
    <DarkP text="$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails." />
    <DarkP text="$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails." />
    <DarkP text="$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails." />
    <DarkP text="$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails." />
  </div>
);

export default AlertDetails;
