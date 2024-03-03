import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "../../assets/icons/home.svg";
import NotificationsIcon from "../../assets/icons/notification.svg";
import avater from "../../assets/images/avatars/avatar_1.png";
import Logo from "../../assets/images/logo.svg";
import Logout from "../Auth/Logout";
const Header = () => {
    const navigate = useNavigate();
    return (
        <nav className='sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-4'>
            <div className='container flex flex-col items-center justify-between gap-6 sm:flex-row'>
                {/* Logo */}

                <img
                    onClick={() => {
                        navigate("/");
                    }}
                    className='max-w-[100px] rounded-full lg:max-w-[130px]'
                    src={Logo}
                />

                {/* nav links  */}
                <div className='flex items-center space-x-4'>
                    <Link
                        to='/'
                        className='btn-primary'>
                        <img
                            src={HomeIcon}
                            alt='Home'
                        />
                        Home
                    </Link>
                    <button
                        onClick={() => {
                            navigate("/");
                        }}
                        className='icon-btn'>
                        <img
                            src={NotificationsIcon}
                            alt='Notification'
                        />
                    </button>

                    <button
                        onClick={() => {
                            navigate("/profile");
                        }}
                        className='flex-center !ml-8 gap-3'>
                        <span className='text-lg font-medium lg:text-xl'>
                            Sumit
                        </span>{" "}
                        <img
                            className='max-h-[32px] max-w-[32px] lg:max-h-[44px] lg:max-w-[44px]'
                            src={avater}
                            alt=''
                        />
                    </button>
                    <Logout />
                </div>
                {/* nav links ends */}
            </div>
        </nav>
    );
};

export default Header;

