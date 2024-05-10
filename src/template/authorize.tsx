import FullScreenLoader from "@/components/loader"
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import axios from "axios"

export default function AuthorizationPage() {

    const navigate = useNavigate();
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const state = params.get('state');
    const API_URL: string = import.meta.env['VITE_BASE_API_URL']
    const authCookieId: string = import.meta.env['VITE_AUTH_COOKIE_ID']

    const getLinkedInData = async () => {
        console.log('Authorization Code:', code);
        console.log('State:', state);
        const data = { code, state };
    
        await axios.post(API_URL + "/linkedininfo", data)
          .then(async (response) => {
            console.log("linkedin response", response)
            if (response.status === 200) {
              try {
                const checkLinkedInLogin_response: any = await checkLinkedInLogin(response.data);
                if(checkLinkedInLogin_response.success === true){
                  console.log("checkLinkedInLogin_response.token >>> ",checkLinkedInLogin_response?.token);
                  Cookies.set(authCookieId, checkLinkedInLogin_response?.token, { expires: 7 });
                  navigate('/home')
                }else{
                    console.log("here ikem")
                //   await saveLinkedInData(response.data)
                }
              } catch (error) {
                console.error('Error:', error);
              }
            }
          }).catch((error) => {
            console.error('Error:', error);
          });
      }

      const checkLinkedInLogin = async (data) => {
        const linkedinData = {
            linkedinData: data.data
        };
        return new Promise((resolve, reject) => {
            axios.post(API_URL + "/user/checkLogin", linkedinData)
                .then((response) => {
                    console.log("checkLinkedInLogin response >> ", response);
                    if (response.status === 200) {
                        resolve(response.data);
                    } else {
                        reject(new Error("Failed to check LinkedIn login"));
                    }
                })
                .catch((error) => {
                    resolve(error);
                });
        });
    };

    getLinkedInData()

    return(
        <main className="h-screen w-screen flex justify-center items-center bg-[#FFFFFF]">
            <FullScreenLoader/>
        </main>
    )
}