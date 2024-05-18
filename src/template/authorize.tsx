import FullScreenLoader from "@/components/loader"
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import axios from "axios"
import { authToken } from "@/store/user.atom";
import { useEffect } from "react";

export default function AuthorizationPage() {

    const navigate = useNavigate();
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const state = params.get('state');
    const error = params.get('error')
    const API_URL: string = import.meta.env['VITE_BASE_API_URL']
    const authCookieId: string = import.meta.env['VITE_AUTH_COOKIE_ID']
    const linkedinUserURL = "https://api.linkedin.com/v2/me"

    const getLinkedInData = async () => {
        console.log('Authorization Code:', code);
        console.log('State:', state);
        const data = { code, state };
    
        await axios.post(API_URL + "/auth/linkedin", data)
          .then(async (response) => {
            console.log("linkedin response", response)
            if (response.status === 200) {
              // authToken.set(response.data)
              try {
                // const user = await axios.get(linkedinUserURL, {headers: {
                //   'Authorization': 'Bearer ' + response.data.access_token
                // }})
              } catch (error) {
                console.error('Error:', error);
              }
            }
          }).catch((error) => {
            console.error('Error:', error);
          });
    }

    useEffect(() => {
      if(error) return navigate('/home')
      getLinkedInData()
    }, [])

    return(
        <main className="h-screen w-screen flex justify-center items-center bg-[#FFFFFF]">
            <FullScreenLoader/>
        </main>
    )
}