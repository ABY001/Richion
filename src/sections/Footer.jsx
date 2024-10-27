import { useEffect, useState } from "react";
import { copyrightSign } from "../assets/icons"
import { headerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"
import PrivacyPolicy from "../components/PrivacyPolicy";
import TermsAndConditions from "../components/TermsAndConditions";

const Footer = () => {
  const [currentUrl, setCurrentUrl] = useState(window.location.href);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const toggleModal = (id) => {
    if (id === 1) {
      setIsPrivacyOpen(!isPrivacyOpen);
      setIsTermsOpen(false);
    } else {
      setIsTermsOpen(!isTermsOpen);
      setIsPrivacyOpen(false);
    }
  }

  useEffect(() => {
    const handleUrlChange = () => {
      setCurrentUrl(window.location.href);
    };

    window.addEventListener('popstate', handleUrlChange);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  useEffect(() => {
    if (window.location.href.includes("terms")) {
      setIsTermsOpen(true)
    } else if (window.location.href.includes("privacy")) {
      setIsPrivacyOpen(true)
    }
  }, [currentUrl])


  return (
    <footer className="max-container">
      {isPrivacyOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
            <PrivacyPolicy />
            <div className="flex justify-end">
              <button
                onClick={() => toggleModal(1)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {isTermsOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
            <TermsAndConditions />
            <div className="flex justify-end">
              <button
                onClick={() => toggleModal(2)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={headerLogo}
              alt=""
              className="rounded-lg"
              width={50}
              height={50}
            />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Download our app today to explore the latest styles and exclusive offers!
          </p>
          <div className="flex items-center gap-5 mt-8">
            {
              socialMedia.map((icon) => (
                <a
                  href={icon.link}
                  target="_blank"
                  key={icon.alt}
                  className="flex justify-center items-center cursor-pointer"
                >
                  <img src={icon.src} alt={icon.alt} width={170} height={50} />
                </a>
              ))
            }
          </div>
        </div>
        <div className="flex flex-1 justify-around lg:gap-10 gap-20 flex-wrap">
          {
            footerLinks.map((section, i) => (
              <div key={i}>
                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
                <ul>
                  {section.links.map((link) => (
                    <li
                      key={link.id}
                      onClick={() => i === 0 && toggleModal(link.id)}
                      className="text-white-400 mt-3 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                    >
                      <a href={i === 1 && link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          }
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-center items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign} alt="copyright" width={20} height={20} className="rounded-full m-0" />
          <p>Copyright. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
