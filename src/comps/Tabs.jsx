import React, { useState } from "react";
import Pitch from "./pitch/Pitch";
import Details from "./pitch/deets";
import Discuss from "./pitch/discuss";
import Updates from "./pitch/Update";
const investData = [
  {
    amt: "R 1000",
    rewards: ["Community Access & Benfits"],
    tnc: ["Community psrticipants only"],
    available: "10",
    total: "1000",
  },
  {
    amt: "R 1000",
    rewards: ["Community Access & Benfits"],
    tnc: ["Community psrticipants only"],
    available: "10",
    total: "1000",
  },
  {
    amt: "R 1000",
    rewards: ["Community Access & Benfits"],
    tnc: ["Community psrticipants only"],
    available: "10",
    total: "1000",
  },
];
export default function Tabs() {
  const [active, setActive] = useState(0);
  const tabs = ["Pitch", "Details", "Discussions", "Updates"];
  return (
    <div className="my-12 mx-5">
      <div className="flex justify-between my-2 flex-wrap">
        <div className="flex justify-start">
          {tabs.map((tab, i) => (
            <Pill setActive={setActive} id={i}>
              {tab}
            </Pill>
          ))}
        </div>
        <InModal />
      </div>
      <hr />
      <div className="flex flex-col-reverse lg:flex-row items-center">
        {active === 0 ? <Pitch data={"data"} /> : null}
        {active === 1 ? <Details data={"data"} /> : null}
        {active === 2 ? <Discuss data={"data"} /> : null}
        {active === 3 ? <Updates data={"data"} /> : null}
        <div id="investments" className=" border-t border-gray-300 my-7">
          <div id="docs" className="p-3">
            <div className="text-left w-full text-xl font-semibold">
              Documents
            </div>
            <button
              className="border border-gray-300 flex justify-between p-3 my-3 w-full"
              href="google"
            >
              <span className="font-mono text-sm">CosIQ.zip</span>
              <i className="bx bx-download ml-2" />
            </button>
          </div>
          <div id="invest" className="p-3 hidden lg:block">
            {investData.map((data) => {
              return (
                <div className="text-left border border-gray-200 m-4 p-3">
                  <span className="font-black text-xl p-2">{data.amt}</span>
                  <hr />
                  <div>
                    <span className="text-[12px] font-black">Rewards</span>
                    <ul>
                      {data.rewards.map((reward) => {
                        return (
                          <li className="font-light text-[12px]">
                            <i className="bx bx-check-circle text-green-500 mr-2" />
                            {reward}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div>
                    <span className="text-[12px] font-black">
                      Terms & Conditions
                    </span>
                    <ul>
                      {data.tnc.map((tnc) => {
                        return (
                          <li className="font-light text-[12px]">
                            <i className="bx bx-calendar-exclamation text-yellow-500 mr-2" />
                            {tnc}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <button className="w-full bg-blue-800 my-4 text-white p-2 text-[12px]">
                    Invest {data.amt}
                  </button>
                  <span className="text-[10px] font-light">
                    CSOP Limited [ {data.available} of {data.total} left ]
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
function Pill(props) {
  return (
    <button
      onClick={() => props.setActive(props.id)}
      className="px-4 rounded-3xl text-sm min-w-[70px] mx-1 active:bg-black border border-black active:text-white"
    >
      {props.children}
    </button>
  );
}

function InModal() {
  const [show, setShow] = useState(false);
  const onClick = () => setShow(!show);
  const onClose = () => setShow(!show);
  return (
    <React.Fragment>
      <div className=" hidden absolute h-full w-screen top-0 left-0 bg-gray-950 bg-opacity-25"></div>
      <button
        onClick={onClick}
        className="flex lg:hidden bg-blue-800 text-white p-1 font-light"
      >
        Invest
      </button>
      <div
        id="modal"
        className={`fixed ${
          show ? "block" : "hidden"
        }   top-0 w-screen left-0 h-full bg-gray-900 bg-opacity-50`}
        onClick={onClose}
      >
        <div className="bg-white max-w-lg h-3/4 mx-auto my-10 rounded-2xl overflow-y-auto">
          {investData.map((data) => {
            return (
              <div className="text-left border border-gray-200 m-4 p-3">
                <span className="font-black text-xl p-2">{data.amt}</span>
                <hr />
                <div>
                  <span className="text-[12px] font-black">Rewards</span>
                  <ul>
                    {data.rewards.map((reward) => {
                      return (
                        <li className="font-light text-[12px]">
                          <i className="bx bx-check-circle text-green-500 mr-2" />
                          {reward}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <span className="text-[12px] font-black">
                    Terms & Conditions
                  </span>
                  <ul>
                    {data.tnc.map((tnc) => {
                      return (
                        <li className="font-light text-[12px]">
                          <i className="bx bx-calendar-exclamation text-yellow-500 mr-2" />
                          {tnc}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <button className="w-full bg-blue-800 my-4 text-white p-2 text-[12px]">
                  Invest {data.amt}
                </button>
                <span className="text-[10px] font-light">
                  CSOP Limited [ {data.available} of {data.total} left ]
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}
