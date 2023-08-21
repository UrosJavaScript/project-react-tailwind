import React, { useEffect, useState } from "react";
import Icon from "react-icons-kit";
import { facebook } from "react-icons-kit/fa/facebook";
import { twitter } from "react-icons-kit/fa/twitter";
import { instagram } from "react-icons-kit/fa/instagram";
import { googlePlus } from "react-icons-kit/fa/googlePlus";
import { pinterest } from "react-icons-kit/fa/pinterest";
import { angleUp } from "react-icons-kit/fa/angleUp";
import Logo from "../../assets/images/logo.svg";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const validateEmail = (value) => {
    // Regex pattern for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setIsValid(validateEmail(value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid && email == "") {
      setMessage("Invalid email!");
    } else {
      setIsValid(true);
      setMessage("Subscribed with email " + email);
    }
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <footer className="py-[70px] bg-blackColor w-full">
        <div className="wrapper">
          <div className="flex max-md:flex-col gap-[14%] text-secondaryColor mb-3 max-md:mb-6">
            {/* col1 */}
            <div className="flex flex-col flex-1 gap-5">
              <div>
                <img src={Logo} alt="logo" className="w-[100px]" />
              </div>
              <p className="text-base text-secondaryColor opacity-80">
                company Blog is a technology blog. We make digital business
                simple.
              </p>
              <div className="flex gap-4">
                <a
                  href="/"
                  className="transition duration-300 text-secondaryColor hover:text-primaryColor"
                >
                  <Icon size={22} icon={facebook} />
                </a>
                <a
                  href="/"
                  className="transition duration-300 text-secondaryColor hover:text-primaryColor"
                >
                  <Icon icon={twitter} size={22} />
                </a>
                <a
                  href="/"
                  className="transition duration-300 text-secondaryColor hover:text-primaryColor"
                >
                  <Icon icon={instagram} size={22} />
                </a>
                <a
                  href="/"
                  className="transition duration-300 text-secondaryColor hover:text-primaryColor"
                >
                  <Icon icon={googlePlus} size={22} />
                </a>
                <a
                  href="/"
                  className="transition duration-300 text-secondaryColor hover:text-primaryColor"
                >
                  <Icon icon={pinterest} size={22} />
                </a>
              </div>

              <form
                className="flex flex-col max-md:my-6"
                onSubmit={handleSubmit}
              >
                <div className="flex gap-3 max-md:flex-col">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    onChange={handleChange}
                    className="flex-1 focus:outline-none text-blackColor px-[30px] py-[15px] border border-primaryColor rounded-sm"
                  />

                  <div className="flex-1">
                    <button
                      type="submit"
                      className="font-bold text-white bg-primaryColor py-[15px] px-[30px] border border-primaryColor rounded-sm transition duration-300 hover:bg-blackColor"
                    >
                      SUBMIT
                    </button>
                  </div>
                </div>
                <p className="mt-2 text-xs font-bold text-orange-700 uppercase">
                  {message ? message : null}
                </p>
              </form>
            </div>

            {/* col2 */}
            <div className="flex flex-1 gap-6 max-md:flex-col">
              <div className="flex-1 ">
                <h3 className="mb-5 text-lg font-semibold">
                  Popular Categories
                </h3>

                <ul className="flex flex-col gap-3">
                  <li className="flex justify-between border-b border-dashed opacity-70">
                    <a
                      href="/"
                      className="transition duration-300 hover:text-primaryColor"
                    >
                      <span>Marketing</span>
                    </a>
                    <span>(21)</span>
                  </li>
                  <li className="flex justify-between border-b border-dashed opacity-70">
                    <a
                      href="/"
                      className="transition duration-300 hover:text-primaryColor"
                    >
                      <span>SEO Service</span>
                    </a>
                    <span>(15)</span>
                  </li>
                  <li className="flex justify-between border-b border-dashed opacity-70">
                    <a
                      href="/"
                      className="transition duration-300 hover:text-primaryColor"
                    >
                      <span>Digital Agency</span>
                    </a>
                    <span>(31)</span>
                  </li>
                  <li className="flex justify-between border-b border-dashed opacity-70">
                    <a
                      href="/"
                      className="transition duration-300 hover:text-primaryColor"
                    >
                      <span>Make Money</span>
                    </a>
                    <span>(22)</span>
                  </li>
                  <li className="flex justify-between opacity-70">
                    <a
                      href="/"
                      className="transition duration-300 hover:text-primaryColor"
                    >
                      <span>Blogging</span>
                    </a>
                    <span>(66)</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <h3 className="mb-5 text-lg font-semibold">Copyrights</h3>
                <ul className="flex flex-col gap-3">
                  <li className="flex justify-between border-b border-dashed opacity-70">
                    <a
                      href="/"
                      className="transition duration-300 hover:text-primaryColor"
                    >
                      <span>About Us</span>
                    </a>
                  </li>
                  <li className="flex justify-between border-b border-dashed opacity-70">
                    <a
                      href="/"
                      className="transition duration-300 hover:text-primaryColor"
                    >
                      <span>Advertising</span>
                    </a>
                  </li>
                  <li className="flex justify-between border-b border-dashed opacity-70">
                    <a
                      href="/"
                      className="transition duration-300 hover:text-primaryColor"
                    >
                      <span>Write For Us</span>
                    </a>
                  </li>
                  <li className="flex justify-between border-b border-dashed opacity-70">
                    <a
                      href="/"
                      className="transition duration-300 hover:text-primaryColor"
                    >
                      <span>Trademark</span>
                    </a>
                  </li>
                  <li className="flex justify-between opacity-70">
                    <a
                      href="/"
                      className="transition duration-300 hover:text-primaryColor"
                    >
                      <span>License & Help</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-[100%] md:text-center">
            <span className="text-sm text-secondaryColor">
              <span className="font-normal opacity-60">
                &copy; company Blog Design &nbsp;
              </span>
              <span className="font-medium">company Team.</span>
            </span>
          </div>

          <div>
            <button
              className={`fixed bottom-5 right-5 z-10 p-4 bg-primaryColor text-white  ${
                isVisible ? "visible" : "invisible"
              }`}
              onClick={scrollToTop}
            >
              <Icon icon={angleUp} size={22} />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
