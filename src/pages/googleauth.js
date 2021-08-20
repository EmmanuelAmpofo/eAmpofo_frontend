import React from 'react';
import { useHistory } from "react-router-dom";
import {GoogleLogin} from 'react-google-login'

function GoogleClientLogin(){
    const history = useHistory()
    function GoogleResponse (response){
      if(response.profileObj){
        let data = response.profileObj;
        console.log(data)
        history.push('/join')
      }else{
        const {error} = response;
        switch (error) {
          case '':
            
            break;
        
          default:
            alert(error)
            break;
        }
      }
    }
     
    return(
      <GoogleLogin
        clientId = "272363126551-uq08f8915557rg163036p2tar044cum2.apps.googleusercontent.com"
        buttonText = "Sign in with google"
        onSuccess = {GoogleResponse}
        onFailure= {GoogleResponse}
      />
    )
  }

  export default GoogleClientLogin;