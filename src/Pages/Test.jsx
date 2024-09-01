import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../Redux/authSlice.cjs";

const Test = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector(state => state.authorization.token);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch('/db/me', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            const json = await response.json();
        }
        fetchUser();
    }, []);

    const logoutHandler = (e) => {
        e.preventDefault();
        dispatch(setToken(''));
        localStorage.setItem("token", "");
        navigate('/');
    }
    return (
        <>
            <section className="accountCont">
                <h1>My account</h1>
                <button onClick={logoutHandler}>Log Out</button>
            </section>
        </>

    )
}

export default Test;
