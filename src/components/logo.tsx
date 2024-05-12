import { Link } from "react-router-dom"

export default function ValleyLogo() {
    return(
        <Link to="/home">
            <img
            src="/logos/black-logo.png"
            alt="company logo"
            className="w-[137px] h-10 object-contain object-center"
            />
        </Link>
    )
}