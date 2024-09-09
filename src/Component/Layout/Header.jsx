import { useKeycloak } from '@react-keycloak/web';
import  { useEffect } from 'react'
import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    const { keycloak, initialized } = useKeycloak();
 
    const socailMediaSingup = (keycloakData, onSuccess) => {
      console.log(keycloakData.tokenParsed.email);
  
      setTimeout(() => {
        onSuccess && onSuccess(res);
      }, 2000);
    }
    useEffect(() => {
      if (keycloak.authenticated) {
        console.log("keycloak.authenticated", keycloak.authenticated);
        socailMediaSingup(keycloak, (res) => {
          if (res.data.status === 200) {
            if (res.data.result.isDetailsAvailable) {
            //   // If details are available take the user to dashborad page
            //   if (nonLoggedInUserData && nonLoggedInUserData.redirectUrl) {
            //     history.push(nonLoggedInUserData.redirectUrl);
            //   } else {
            //     history.push("/homebuyer/explore");
            //   }
            } else {
              //If details are not available take the user to home buyer details page
              //history.push("/homebuyerdetails");
            }
          }
        });
      }
    }, [keycloak.authenticated]);
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{ fontWeight: 'bold' , fontSize: 35}}>Grocery Shop</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/signin">Signin</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/Admin">Admin</Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header