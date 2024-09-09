import React, { useState } from 'react'
import Layout from '../Layout/Layout'

const Signin = () => {

  //Google sign in'
  const signInWithGoogle = (event) =>{
    window.open(
      "http://localhost:8080/realms/ERP/protocol/openid-connect/auth?response_type=code&client_id=ERPFE&kc_idp_hint=google",
      "google login",
      "toolbar=no, menubar=no, width=700, height=700, top=100, left=300"
      );
  }



  return (
    <>
      <section className="vh-100 bg-dark" >
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div style={{ borderRadius: '1rem', backgroundColor: "white" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="registration.jpg" alt="login form" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="text-center mb-3 pb-1 ">
                          <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }} />
                          <span className="h1 fw-bold mb-0">LOGIN</span>
                        </div>
                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: 1 }}>Sign into your account</h5>
                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="email" id="form2Example17" className="form-control form-control-lg" placeholder='Email ID' />
                          {/*<label className="form-label" htmlFor="form2Example17">Email address</label>*/}
                        </div>
                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="password" id="form2Example27" className="form-control form-control-lg" placeholder='Password' />
                          {/* <label className="form-label" htmlFor="form2Example27">Password</label>*/}
                        </div>
                        <div className="pt-1 mb-4">
                          <button data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-lg btn-block" type="button">Login</button>
                        </div>
                        <a className="small text-muted" href="#!">Forgot password?</a>
                        <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <a href="#!" style={{ color: '#393f81' }}>Register here</a></p>
                        <div className="row">
                          <div className="col">
                            <button className='btn btn-info' onClick={signInWithGoogle}>
                              Continue With Google
                            </button>
                          </div>
                        </div>
                        <a href="#!" className="small text-muted">Terms of use.</a>
                        <a href="#!" className="small text-muted">Privacy policy</a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>

  )

}
export default Signin