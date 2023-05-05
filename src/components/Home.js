import "./Home.css"
import React from 'react';
import { useNavigate} from 'react-router-dom';
import { FaGlobe} from 'react-icons/fa';
import { HiOutlineDocumentPlus, HiChevronRight, HiArrowUp, HiUser} from 'react-icons/hi2';
import Table from "./Table"

const Home = () => {
    let navigate = useNavigate();

const RouteChange = () => { 
  navigate("/add-user");
}

  return (
    <>
        <select className='select'>
            <option value="option1"><FaGlobe/>Select country</option>
            <option value="option2">India</option>
            <option value="option3">America</option>
        </select>
        <input type="date" className='input'/>
        <button className='button__icon'><HiOutlineDocumentPlus/></button>
        <div>
            <card className="main__card">
                <title className='title'>Total New Drivers</title>
                <title className='title__bottom'> <HiUser color="109887" size="20px"/> 340</title>
            </card>
        </div>
        <div>
            <card className="card1">
                <title className='title1'>Active Drivers</title>
                <title className='title__bottom1'> <HiUser color="109887" size="20px"/> 340</title>
            </card>
        </div>
        <div>
            <card className="card2">
                <title className='title1'>In Process</title>
                <title className='title__bottom1'> <HiUser color="109887" size="20px"/> 120</title>
            </card>
        </div>
        <div>
            <card className="card3">
                <title className='title1'>Inactive Drivers </title>
                <title className='title__bottom1'> <HiUser color="109887" size="20px"/> 120</title>
            </card>
        </div>
        <div>
            <card className="card4">
                <title className='title1'>Rejected  Drivers</title>
                <title className='title__bottom1'><HiUser color="109887" size="20px"/> 220</title>
            </card>
        </div>
        <div>
            <button className='card__button' onClick={RouteChange}> Add New Driver <HiChevronRight/></button>
        </div>
        <div>
            <card className="card5">
                <title className='title1'>Total New Drivers <HiUser color="109887" size="20px"/></title>
                <title className='title__bottom1'> <h3>30%<HiArrowUp color="109887" size="20px"/> </h3>  340</title>
            </card>
        </div>
        <div>
            <Table/>
        </div>
    </>
  )
}

export default Home;