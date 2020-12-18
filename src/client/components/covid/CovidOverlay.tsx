import React, { useState } from "react";
import GoogleFontLoader from "react-google-font-loader";
import styled from "styled-components";


const CovidOverlay: React.FC<ICovidOverlayProps> = (props) => {

  function open() {
    document.getElementById("covidOverlay").style.display = "block";
  }

  function close() {
    document.getElementById("covidOverlay").style.display = "none";
  }

  return (
    <Layout>

      <GoogleFontLoader
        fonts={[
          {
            font: 'Architects Daughter',
            weights: [400, '400i'],
          },
        ]}
    
      />

      <div className=" d-flex justify-content-center align-items-center my-5 p-5 ">
        <button type="button" className="button" onClick={open}>Covid-19 Precautions</button>
      </div>

      <div id="covidOverlay" className="overlay">
        <a className="closebtn" onClick={close}>&times;</a>

        <div className="container">  
        <div className="overlay-content">

 
          <h5 className="text-center">Sweet Baby Care's Commitment to Health and Safety.</h5>
          
          <p className="text-justify">

            
          At Sweet Baby Care, our priority is the health and safety of our kiddos.  COVID-19 has impacted families and communities all around us; we understand how difficult this past year has been.    
          Just know that we are taking those extra precautions so you and your family feel good about the daycare choice that you have made.  While following Federal and State guidelines, here are some additional steps we are taking:  We continue to keep the teacher-to-child ratio low.  We are incorporating extra handwashing breaks for the toddlers.  We have enhanced cleaning procedures before and after child arrival.  We are doing regular temperature checks and require facial masks inside the house.  To practice social distancing, we are asking that parents stay at the door at drop-off and pick-up time.

          </p>

          <p className="text-justify">

            We are grateful for all of the Sweet Baby Care families along with a wonderful community that supports us.  We will get through this together! To learn more about the CDC Guidelines for child care centers, please read more <a href="https://www.cdc.gov/coronavirus/2019-ncov/community/schools-childcare/guidance-for-childcare.html"> here.</a>

          

          </p>

          </div>
        </div>
      </div>


    </Layout>
  );
}

const Layout = styled.div`

.button {
  background-color: #ff7a7a;  
  border: #ff7a7a;
  color: white;
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

.button:active{
  background:#ff7a7a; 
}

.button:focus{
  outline: none;
}

.overlay {
  height: 90%;
  width: 100%;
  display: none;
  position: fixed;
  z-index: 1;
  top: 70px;
  left: 0%;
  background-color: rgba(215, 238, 204);
  background-color: rgba(215, 238, 204 1);  
  overflow-x: hidden; 
  }
  
.overlay-content {
  position: relative;
  top: 15%;
  width: 100%;
  
  font-family: 'Architects Daughter';
  color: grey;
  }

.overlay-content h5 {
  margin-top: 27px;
  color: #505050;
  font-weight: bold;
  justify-content: flex-start;
  
  
  }

.overlay-content p {
  font-size: 18px;
  }

.overlay-content span {
  font-size: 16px;
  font-weight: bold;
  
  }
  
.container{
  padding: 30px;
  }

.overlay .closebtn {
  position: absolute;
  top: 10px;
  right: 45px;
  font-size: 40px;
  color: grey;
  text-decoration: none;
  font-family: 'Architects Daughter';
  cursor: pointer;
  }
  
  @media screen and (max-height: 450px) {
  .overlay a {font-size: 20px}
  .overlay .closebtn {
  font-size: 40px;
  top: 28px;
  right: 35px;
    }
  }


`;




export interface ICovidOverlayProps { }

export default CovidOverlay;