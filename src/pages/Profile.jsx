import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
const Profile = () => {
    const api = useAxios();
    const { auth } = useAuth();
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getProfileData = async () => {
            try {
                setLoading(true);
                const response = await api.get(
                    `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${
                        auth?.user?.id
                    }`
                );
                setPosts(response?.data?.posts);
                setUser(response?.data?.user);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        getProfileData();
    }, []);

    return (
        <>
            {loading ? (
                "Loading profile data..."
            ) : (
                <>
                    hello {user.firstName} you have {posts.length} posts{" "}
                </>
            )}
        </>
    );
};

export default Profile;

