import { useState, useEffect,useContext  } from 'react';
import React from 'react'
import '../../css/style.css';
import {useHistory} from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';

function SearchDoctor({setDoctors}) {
  const auth = useContext(AuthContext);
    const history = useHistory();
    const [search, setSearch] = useState({
      state: "", city: "", type: "", spec: ""
    });
  
    let name, value;
    const handleInputs = (e) => {
      name = e.target.name;
      value = e.target.value;
      setSearch({ ...search, [name]: value });
    }
  
    const postData = async (e) => {
      e.preventDefault();
    
      const { state, city, type, spec } = search;
      let Specialization = spec;
      let Online;
      if(type == "Online")
      Online=true;
      else
      Online=false;
      
      console.log(state);
      console.log(city);
      console.log(type);
      console.log(spec);
      const tempdata = [];
      try {
        const res = await fetch("/searchDoctor", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + auth.token,
            },
            body: JSON.stringify({
              city, state, Specialization,Online
            })
        });
        const data = await res.json();

        if (res.status === 404 ) {
          window.alert("No Such Doctor Exists");
          console.log("Error Occurred");
      }
      else  if (res.status === 422 || !data) {
            window.alert("Some error accured while fetching doctors, Please try again");
            console.log("Error Occurred");
        } else {
            console.log(" Doctors fetched successfully");
            console.log(data);
            data.map((doctor)=>{
              let degreestring="";
              doctor.Degree.map((degree)=>{degreestring = degreestring + degree.Name + ", "});
              degreestring = degreestring.slice(0,degreestring.length-1);
              let tempdoctor = {name:doctor.firstname+doctor.lastname,spec:doctor.Specialization,Address:doctor.Address,city:doctor.city,state:doctor.state,fees:doctor.Fees,degree:degreestring,mobile:doctor.mobile,email:doctor.email,id:doctor._id};
              tempdata.push(tempdoctor);
            });
            console.log(tempdata);
            setDoctors(tempdata);
        }
    }
    catch (e) {
        console.log("error occured in fetching" + e);
    }
    }
    return (
        <>
    
          <div className="Book Appointment">
    
            <h2 className="text-center">Book Appointment</h2>
            <form method="POST" className="sign-in-form">
            <div className="box">
            <div className="row g-2">
            <div className="col-md">
              <div className="form-floating mb-3">
                <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example"
                 name="state"
                 value={search.state}
                 onChange={handleInputs}>
                  <option selected>Select</option>
                 <option value="Andhra Pradesh">
                                Andhra Pradesh
                              </option>
                              <option value="Arunachal Pradesh">
                                Arunachal Pradesh
                              </option>
                              <option value="Assam">Assam</option>
                              <option value="Bihar">Bihar</option>
                              <option value="Chhattisgarh">Chhattisgarh</option>
                              <option value="Goa">Goa</option>
                              <option value="Gujarat">Gujarat</option>
                              <option value="Haryana">Haryana</option>
                              <option value="Himachal Pradesh">
                                Himachal Pradesh
                              </option>
                              <option value="Jammu and Kashmir">
                                Jammu and Kashmir
                              </option>
                              <option value="Jharkhand">Jharkhand</option>
                              <option value="Karnataka">Karnataka</option>
                              <option value="Kerala">Kerala</option>
                              <option value="Madhya Pradesh">
                                Madhya Pradesh
                              </option>
                              <option value="Maharashtra">Maharashtra</option>
                              <option value="Manipur">Manipur</option>
                              <option value="Meghalaya">Meghalaya</option>
                              <option value="Mizoram">Mizoram</option>
                              <option value="Nagaland">Nagaland</option>
                              <option value="Odisha">Odisha</option>
                              <option value="Punjab">Punjab</option>
                              <option value="Rajasthan">Rajasthan</option>
                              <option value="Sikkim">Sikkim</option>
                              <option value="Tamil Nadu">Tamil Nadu</option>
                              <option value="Telangana">Telangana</option>
                              <option value="Tripura">Tripura</option>
                              <option value="Uttar Pradesh">
                                Uttar Pradesh
                              </option>
                              <option value="Uttarakhand">Uttarakhand</option>
                              <option value="West Bengal">West Bengal</option>
                </select>
                <label for="floatingInput">state</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="city"
                  name="city"
                  value={search.city}
                  onChange={handleInputs} />
                <label for="floatingInput">city</label>
              </div>
            </div>
          </div>

          <div className="row g-2">
            <div className="col-md">
              <div className="form-floating mb-3">
                <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example"
                  name="type"
                  value={search.type}
                  onChange={handleInputs}>
                  <option selected>Select</option>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                </select>
                <label for="floatingInput">Type</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="specialisation"
                  name="spec"
                  value={search.spec}
                  onChange={handleInputs}/>
                <label for="floatingInput">specialisation</label>
              </div>
            </div>
          </div>
    
    
              
              <div className="text-center">
                <button className="btn btn-primary" type="submit" onClick={postData}>Submit</button>
              </div>
              </div>
            </form>
    
          </div>
    
        </>
      )
    }
    
    export default SearchDoctor

    
