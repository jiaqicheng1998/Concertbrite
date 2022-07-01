import './WrongPlace.css'

const WrongPlace = () => {
    return (
        <div className="wrong_page">
            <div className="wrong_pic" style={{ backgroundImage: `url(https://cdn.dribbble.com/users/2155753/screenshots/6716126/error_prancheta_1_co_pia.png)` }}></div>
            <p>Oops! you are not supposed to be here!
                Please login and try again!
            </p>
        </div>
    )
}

export default WrongPlace;