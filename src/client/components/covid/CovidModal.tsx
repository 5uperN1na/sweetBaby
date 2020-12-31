import React, { useState } from "react";
import styled from "styled-components";


const CovidModal: React.FC<ICovidModalProps> = (props) => {

    function open() {
        document.getElementById("myModal").style.display = "block";
    }

    function close() {
        document.getElementById("myModal").style.display = "none";
    }

    return (
        <Layout>

            <div className="d-flex justify-content-center align-items-center my-5 p-5 ">
                <button type="button" className="button" onClick={open}>Covid-19 Precautions</button>
            </div>
            <div className="row  justify-content-center align-items-center">
                {/* <div className="col-md-8"> */}

                <div id="myModal" className="modal">


                    <div className="modal-content">
                        <a className="close" onClick={close}>&times;</a>

                        <h5 className="text-center my-4">Sweet Baby Care's Commitment to Health and Safety</h5>
                        <p className="text-justify my-3">
                            At Sweet Baby Care, our priority is the health and safety of our kiddos.  COVID-19 has impacted families and communities all around us; we understand how difficult this past year has been.
                            Just know that we are taking those extra precautions so you and your family feel good about the daycare choice that you have made.  While following Federal and State guidelines, here are some additional steps we are taking:  We continue to keep the teacher-to-child ratio low.  We are incorporating extra handwashing breaks for the toddlers.  We have enhanced cleaning procedures before and after child arrival.  We are doing regular temperature checks and require facial masks inside the house.  To practice social distancing, we are asking that parents stay at the door at drop-off and pick-up time.
                    We are grateful for all of the Sweet Baby Care families along with a wonderful community that supports us.  We will get through this together! To learn more about the CDC Guidelines for child care centers, please read more <a href="https://www.cdc.gov/coronavirus/2019-ncov/community/schools-childcare/guidance-for-childcare.html"> here.</a>
                        </p>
                    </div>
                </div>

            </div>
            {/* </div> */}
            {/* </div> */}

        </Layout>

    );
}


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
 
.modal {
  display: none; 
  position: fixed;  
  z-index: 1;  
  padding-top: 100px;  
  left: 0;
  top: 0;
  width: 150%;  
  height: 150%;  
  overflow: auto;  
  background-color: rgb(0,0,0);  
  background-color: rgba(0,0,0,0.4); 
}

 
.modal-content {
  background-color: #FFFEBF;
  padding: 20px;
  margin: auto;
  border: 1px solid #888;
  width: 80%;
  box-shadow: 3px 3px 3px black;
  opacity: 1;
 
}

.close {
  position: absolute;
  color: #aaaaaa;
  font-size: 28px;
  font-weight: bold;
  top: 20px;
  right: 20px;
  
}

.close:hover,.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}


@media only screen and (max-width: 360px) {
    .button {
      margin-top: 30px;
    }

    .modal-content {
        margin-top: 39px;
        
      }



  }

`;




export interface ICovidModalProps { }

export default CovidModal;