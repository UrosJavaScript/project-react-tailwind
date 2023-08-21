import React from "react";
import Icon from "react-icons-kit";
import { gears } from "react-icons-kit/fa/gears";
import ListNews from "../ListNews";

const Home = () => {
  return (
    <>
      <section className="bg-secondaryColor">
        <div className="wrapper">
          {/* section-1 */}
          <div className="flex  items-center justify-between w-full py-[40px]">
            <div className="flex items-center gap-3">
              <div className="text-white">
                <Icon
                  className="p-2 border rounded-full bg-primaryColor"
                  size={22}
                  icon={gears}
                />
              </div>
              <h2 className="text-xl font-bold text-black">Blog</h2>
              <p className="text-base text-blackColor opacity-80">
                <i>We make digital business simple</i>
              </p>
            </div>
            <div>
              <p className="text-base font-normal text-blackColor">
                Home / Blog
              </p>
            </div>
          </div>
        </div>
      </section>

      <ListNews />
    </>
  );
};

export default Home;
