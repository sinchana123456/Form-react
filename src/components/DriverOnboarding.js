import './DriverOnboarding.css';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const DriverOnboarding = () => {
  const [driverForm, setDriverForm] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    firstNameInArabic: '',
    middleNameInArabic: '',
    lastNameInArabic: '',
    dob: '',
    phone: '',
    country: '',
    state: '',
    city: '',
  });

  const [drivers, setDrivers] = useState([]);
  const [inProcessCount, setInProcessCount] = useState(0);
  const navigate = useNavigate();

  const RouteChange = () =>{
    navigate("/")
  }

  const handleInputChange = (event) => {
    setDriverForm({
      ...driverForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const currentYear = new Date().getFullYear();
    const dobYear = new Date(driverForm.dob).getFullYear();
    if (currentYear - dobYear < 18) {
      alert('Driver must be at least 18 years old');
      return;
    }
    if (!driverForm.firstName || !driverForm.lastName) {
      alert('First name and last name are required fields');
      return;
    }
    setDrivers([...drivers, { ...driverForm, status: 'Pending' }]);
    setInProcessCount(inProcessCount + 1);
    setDriverForm({
      firstName: '',
      middleName: '',
      lastName: '',
      gender: '',
      firstNameInArabic: '',
      middleNameInArabic: '',
      lastNameInArabic: '',
      dob: '',
      phone: '',
      nationality: '',
      state: '',
      city: '',
      sreetName: '',
      zipcode: ''
      });
  };

  const handleDriverDetails = (driver) => {
    console.log(driver);
    // alert(
    //   `NAME: ${driver.firstName} ${driver.middleName} ${driver.lastName}
    //    GENDER: ${driver.gender}\n
    //    NAMEINARABIC: ${driver.firstNameInArabic}${driver.middleNameInArabic}${driver.lastNameInArabic}
    //    DOB: ${driver.dob}\n
    //    PHONE: ${driver.phone}
    //    NATIONALITY: ${driver.nationality}
    //    STATE: ${driver.state}
    //    CITY: ${driver.city}`
    // );
  };

  useEffect(() => {
    handleDriverDetails()
  }, []);

  return (
    <div className='container'>
    <div className='container0'>
      <button className='button1' onClick={RouteChange}>Cancel</button>
      <button className='button2'>send</button>

    </div>
    <div className='first__Container'>
      <div >
        <h6 className='star1'>COUNTRY<h6 className='star'>*</h6></h6>
        <select className='first__input'>
             <option value="option1"> Select Country </option>
            <option value="option2"> India</option>
            <option value="option3">America</option>
        </select>  
        <h6 className='star1'>USER TYPE</h6>
        <input type="radio" ></input>Driver 
        <input type="radio" ></input>Broker & Driver
      </div>

      <div>
      <h5>Personal Details</h5>
      </div>

      <div className='line4'>
      <form onSubmit={handleFormSubmit}>
      <div >
          <label htmlFor="firstName">First Name *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={driverForm.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="middleName">Middle Name</label>
          <input
            type="text"
            id="middleName"
            name="middleName"
            value={driverForm.middleName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={driverForm.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="gender">Gender *</label>
          <select className='first__input'>
            <option value="option1">Male</option>
            <option value="option2">Female</option>
          </select>
        </div>
        <div>
          <label htmlFor="firstNameInArabic">First Name In Arabic</label>
          <input
            type="text"
            id="firstNameInArabic"
            name="firstNameInArabic"
            value={driverForm.firstNameInArabic}
            onChange={handleInputChange}
          />
        </div>
        <div >
          <label htmlFor="middleNameInArabic">Middle Name In Arabic </label>
          <input
            type="text"
            id="middleNameInArabic"
            name="middleNameInArabic"
            value={driverForm.middleNameInArabic}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="lastNameInArabic">Last Name In Arabic</label>
          <input
            type="text"
            id="lastNameInArabic"
            name="lastNameInArabic"
            value={driverForm.lastNameInArabic}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={driverForm.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="nationality">Nationality</label>
          <select className='first__input'>
            <option value="option1"> Select Country </option>
            <option value="option2"> India</option>
            <option value="option3">America</option>
          </select>  
        </div>
        <div>
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            value={driverForm.state}
            onChange={handleInputChange}
          />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={driverForm.city}
              onChange={handleInputChange}
            />
          </div>
          <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={driverForm.address}
            onChange={handleInputChange}
            />
          </div>
          <div>
          <label htmlFor="dob">DOB *</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={driverForm.dob}
            onChange={handleInputChange}
          />
          </div>
          <div>
        <h5>Present Adress</h5>
        <div>
            <label htmlFor="sreetName">Street Name</label>
            <input
              type="text"
              id="sreetName"
              name="sreetName"
              value={driverForm.sreetName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="zipcode">Zip Code</label>
            <input
              type="number"
              id="zipcode"
              name="zipcode"
              value={driverForm.zipcode}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </form>
      </div>
    </div>
    </div>
    )
  }

  export default DriverOnboarding;