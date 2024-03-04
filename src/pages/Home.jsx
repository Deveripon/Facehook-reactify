import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>Home Page</h1>
            <Link
                to='/profile'
                className='bg-gray-300 p-2 rounded'>
                Profile
            </Link>
        </>
    );
};

export default Home;

