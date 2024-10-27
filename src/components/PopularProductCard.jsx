import { star } from "../assets/icons"

const PopularProductCard = ({ thumbnail, name, amount }) => {
  // Function to format price in Naira
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(price);
  };

  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <a
        href="https://www.richionstore.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={thumbnail} alt={name} className="w-[280px] h-[280px]" />
        <div className="mt-3 flex justify-start gap-2.5">
          <img src={star} alt="rating" width={20} height={20} />
          <p className="font-montserrat text-lg leading-normal text-slate-gray">(4.5)</p>
        </div>
        <h3 className="mt-2 text-lg leading-normal font-semibold font-palanquin">{name}</h3>
        <p className="mt-2 font-semibold font-montserrat text-orange font-2xl leading-normal">{formatPrice(amount)}</p>
      </a>
    </div>
  )
}

export default PopularProductCard