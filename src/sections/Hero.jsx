import { useState } from "react"
import { arrowRight } from "../assets/icons"
import { InternetService } from "../assets/images"
import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import { shoes, statistics } from "../constants"

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(InternetService);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        {/* <p className="text-xl font-montserrat text-orange">Our summer collection</p> */}
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            Welcome to
          </span><br />
          <span className="text-orange inline-block mt-3">
            Richion
          </span> Digitals
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish, high-quality fashion at Richion Digitals. From clothing and apparel to cutting-edge gadgets, we offer the perfect blend of style, comfort, and innovation for your everyday needs. Elevate your look with items that provide both fashion and functionality, ensuring you stay ahead of the trends.
        </p>
        <Button linkURL={"https://play.google.com/store/apps/details?id=com.richion.mobile&hl=en_US"} label='Get Started' iconURL={arrowRight} imgAlt="arrow right" />
        {/* <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat font-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div> */}
      </div>

      <div className="relative flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={currentImage}
          alt='shoe colletion'
          width={610}
          height={502}
          className='object-contain relative z-10'
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => { setCurrentImage(shoe) }}
                InternetService={currentImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero