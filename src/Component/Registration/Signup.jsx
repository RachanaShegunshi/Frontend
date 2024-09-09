import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import axios from 'axios'

const Signup = () => {

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [area, setArea] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user={
      fullName,
      email,
      phoneNumber,
      area,
      city,
      state,
      password,
      confirmPassword
    }
    console.log(user)

    try {
      const response = await fetch("http://localhost:8081/api/v1/user/signUp", {
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
      });

      if (response) {
        console.log(response)
        // const data = await response.json();
        // const token = response.config.headers.Authorization;
        // localStorage.setItem("token", token);
        // axios.defaults.headers.common["Authorization"] = token;
        // console.log(token);
      } else {
        alert("error in registration: ");
      }
    } catch (error) {
      console.error("Error:", error);
      // setResponseMessage('Error occurred while creating user');
    }
  };

  return (
    <>
      <section className="h-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card-registration my-4" style={{ borderRadius: '1rem', backgroundColor: "white" }}>
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block" style={{ background: "url(registration.jpg)", backgroundSize: 'cover', borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' }}>
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-center" >Customer Registration</h3>
                      <div className="row">
                        <div className="col-md-12 mb-4">
                          <div data-mdb-input-init className="form-outline">
                            {/* <label className="form-label" htmlFor="form3Example1m">First name</label> */}
                            <input type="text" value={fullName} onChange={e=> setFullName(e.target.value)} id="form3Example1m"  className="form-control form-control-lg" placeholder='FullName' />
                          </div>
                        </div>

                      </div>
                      <div className="row">
                        <div className="col-md-12 mb-4">
                          <div data-mdb-input-init className="form-outline">
                            <input type="text"  value={email} onChange={e=> setEmail(e.target.value)} id="form3Example1m1" className="form-control form-control-lg" placeholder='Email ID' />
                            {/* <label className="form-label" htmlFor="form3Example1m1">Mother's name</label> */}
                          </div>
                        </div>

                        <div className='row'>
                          <div className="col-md-12 mb-4">
                            <div data-mdb-input-init className="form-outline ">
                              <input type="text"  value={phoneNumber} onChange={e=> setPhoneNumber(e.target.value)} id="form3Example1n1" className="form-control form-control-lg" placeholder='PhoneNumber' />
                              {/* <label className="form-label" htmlFor="form3Example1n1">Father's name</label>*/}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="text"  value={area} onChange={e=> setArea(e.target.value)} id="form3Example8" className="form-control form-control-lg" placeholder='Area' />
                        {/* <label className="form-label" htmlFor="form3Example8">Address</label>*/}


                      </div>
                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="text"  value={city} onChange={e=> setCity(e.target.value)} id="form3Example9" className="form-control form-control-lg" placeholder='City' />
                        {/*<label className="form-label" htmlFor="form3Example9">DOB</label>*/}
                      </div>
                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="text"  value={state} onChange={e=> setState(e.target.value)} id="form3Example90" className="form-control form-control-lg" placeholder='State' />
                        {/* <label className="form-label" htmlFor="form3Example90">Pincode</label>*/}
                   </div>
                   
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input type="password"  value={password} onChange={e=> setPassword(e.target.value)} id="form3Example90" className="form-control form-control-lg" placeholder='Password' />
                      {/* <label className="form-label" htmlFor="form3Example90">Pincode</label>*/}
                      </div>
                      <div data-mdb-input-init className="form-outline mb-4">
                      <input type="password"  value={confirmPassword} onChange={e=> setConfirmPassword(e.target.value)} id="form3Example90" className="form-control form-control-lg" placeholder='Confirm Password' />
                      {/* <label className="form-label" htmlFor="form3Example90">Pincode</label>*/}
                      </div>

                      <div className="d-flex justify-content-end pt-3">
                        {/* <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-light btn-lg">Reset all</button>*/}
                        <button type="button" onClick={handleSubmit}data-mdb-button-init data-mdb-ripple-init className="btn btn-warning btn-lg ms-2">Submit form</button>
                      </div>
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

export default Signup


// to get the data from backend

// useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const data = await response.json();
//         setPosts(data);
//       } catch (error) {
//         console.error('Error fetching the posts:', error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <div>
//       <h1>Posts</h1>
//       {posts.length > 0 ? (
//         posts.map((post) => (
//           <div key={post.id}>
//             <h2>{post.title}</h2>
//             <p>{post.body}</p>
//           </div>
//         ))
//       ) : (
//         <p>Loading posts...</p>
//       )}
//     </div>
//   );
// };
