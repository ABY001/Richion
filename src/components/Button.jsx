const Button = ({
    label,
    linkURL = "#",
    iconURL,
    imgAlt,
    backgroundColor,
    borderColor,
    textColor,
    fullWidth, }) => {
    return (
        <a
            href={linkURL}
            target={linkURL === "#" ? "_self" : "_blank"}
            rel="noopener noreferrer"
        >
            <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${fullWidth && 'w-full'}
        ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : 'bg-orange text-white border-orange'}`}>
                {label}
                {iconURL && <img
                    src={iconURL}
                    alt={imgAlt}
                    className='ml-2 rounded-full bg-white w-5 h-5'
                />}
            </button>
        </a>
    )
}

export default Button