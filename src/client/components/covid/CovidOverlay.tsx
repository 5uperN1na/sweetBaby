import React, { useState } from "react";
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

      <div className=" d-flex justify-content-center align-items-center my-5 p-5 ">
        <button type="button" className="button" onClick={open}>Covid-19 Precautions</button>
      </div>

      <div id="covidOverlay" className="overlay">
        <a className="closebtn" onClick={close}>&times;</a>
        <Background>

          <CenterDiv>
            <ContentDiv>


              <div className="overlay-content">

                <h5 className="text-center">Sweet Baby Care's Commitment to Health and Safety.</h5>

                <p className="text-justify">


                  At Sweet Baby Care, our priority is the health and safety of our kiddos.  COVID-19 has impacted families and communities all around us; we understand how difficult this past year has been.
                  Just know that we are taking those extra precautions so you and your family feel good about the daycare choice that you have made.  While following Federal and State guidelines, here are some additional steps we are taking:  We continue to keep the teacher-to-child ratio low.  We are incorporating extra handwashing breaks for the toddlers.  We have enhanced cleaning procedures before and after child arrival.  We are doing regular temperature checks and require facial masks inside the house.  To practice social distancing, we are asking that parents stay at the door at drop-off and pick-up time.
                  We are grateful for all of the Sweet Baby Care families along with a wonderful community that supports us.  We will get through this together! To learn more about the CDC Guidelines for child care centers, please read more <a href="https://www.cdc.gov/coronavirus/2019-ncov/community/schools-childcare/guidance-for-childcare.html"> here.</a>

                </p>

              </div>
            </ContentDiv>
          </CenterDiv>
        </Background>
      </div>

    </Layout>





  );
}


const CenterDiv = styled.section`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10%;
    right: 10%;

    @media (max-width: 470px) {
         
        left: 5%;
        right: 5%;
    }

    @media (min-width: 667px) and (max-width: 812px) and (orientation: landscape) {
        top: 70%;
        transform: translateY(-70%);
        left: 5%;
        right: 5%;
    }

    @media (min-width: 470px) and (max-width: 1300px) {
        left: 12%;
        right: 12%;
    }
`;

const ContentDiv = styled.div`
    height: 60vh;
    background-color: #FFFFFF;
    border-radius: 80%;
    // border: 4px solid #FFFFFF;
    transform: translateY(40%);

    @media (min-width: 667px) and (max-width: 812px) and (orientation: landscape) {
        height: 50vh;
    }
`;

const Background = styled.div`
background-color: #BFFFF5;
height: 40%;
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
width: 100%;
opacity: 1;

@media (min-width: 360px) and (max-width: 812px) and (orientation: landscape) {
  height: 60%;
}
`;


const Layout = styled.div`

.button {
  background-color: #ff726f;  
  border: #ff726f;  
  border-radius: 4px;
  color: white;
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  opacity: 0.7;
  transition: 0.3s;
}

.button:hover {
  opacity: 1;
}

.button:active{
  background: #ff726f;  
}


.button:focus{
  outline: none;
}

 

























.overlay {
  height: 100%;
  width: 100%;
  display: none;
  position: absolute;
  z-index: 11111;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 1;
  background-color: white;
  // overflow-x: hidden; 

  }
  
.overlay-content {
  width: 100%;
  height: 100%;
  color: grey;
  }

.overlay-content h5 {
  color: #505050;
  font-weight: bold;

 
  }

.overlay-content p {
  font-size: 18px;  
  margin-top: 20px;
}
  

.overlay .closebtn {
  position: absolute;
  top: 10px;
  right: 45px;
  font-size: 40px;
  color: grey;
  text-decoration: none;
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