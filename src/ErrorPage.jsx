import * as React from 'react'
import Layout from "./Layout"
import {useNavigate} from 'react-router-dom'

export default function ErrorPage()
{
    const navigate = useNavigate();
    React.useEffect(() => {
        // Navigate to the home page after 3 seconds
        const timeoutId = setTimeout(() => {
        navigate("/home");
        }, 3000);
    
        // Clean up the timeout when the component is unmounted
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
        <Layout>
            <h1 style={{color: "#FFFFFF", fontSize: "50px", fontFamily: "Poppins", textAlign: "center", marginTop: "15%"}}>404 Error Page</h1>
        </Layout>
        </>
    )
}