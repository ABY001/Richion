import Button from "../components/Button"
import { offer } from "../assets/images"
import { arrowRight } from "../assets/icons"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="" width={773} height={687} className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          Special <span className="text-orange"> Offer </span><br />
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
        <p className="mt-6 lg:max-w-lg info-text">Navigate a realm of possibilities designed to fulfill your unique desires surpassing the loftiest expectations.</p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label='Get Started' linkURL={"https://play.google.com/store/apps/details?id=com.richion.mobile&hl=en_US"} iconURL={arrowRight} imgAlt="arrow right" />
          <Button label='Learn More' backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" iconURL={arrowRight} imgAlt="arrow right" />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer