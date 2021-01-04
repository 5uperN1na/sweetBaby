import React, { useState } from "react";
import styled from "styled-components";


const CovidModal2: React.FC<ICovidModal2Props> = (props) => {

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


                <div id="myModal" className="modal">


                    <div className="modal-content">

                        <Close>
                            <a className="close" onClick={close}>&times;</a>
                        </Close>

                        <h5 className="text-center my-4">Sweet Baby Care's Commitment to Health and Safety</h5>
                        <p className="text-justify my-3">
                            At Sweet Baby Care, our priority is the health and safety of our kiddos.  COVID-19 has impacted families and communities all around us; we understand how difficult this past year has been.
                            Just know that we are taking those extra precautions so you and your family feel good about the daycare choice that you have made.  While following Federal and State guidelines, here are some additional steps we are taking:  We continue to keep the teacher-to-child ratio low.  We are incorporating extra handwashing breaks for the toddlers.  We have enhanced cleaning procedures before and after child arrival.  We are doing regular temperature checks and require facial masks inside the house.  To practice social distancing, we are asking that parents stay at the door at drop-off and pick-up time.
                            We are grateful for all of the Sweet Baby Care families along with a wonderful community that supports us.  We will get through this together! To learn more about the CDC Guidelines for child care centers, please read more <a href="https://www.cdc.gov/coronavirus/2019-ncov/community/schools-childcare/guidance-for-childcare.html"> here.</a>
                        </p>
                    </div>
                </div>

            </div>

        </Layout>

    );
}


const Close = styled.div`
position: absolute;
top: 45px;
right: 75px;


@media only screen and (max-width: 414px) {
    position: absolute;
    top: 15px;
    right: 50px;
    
  
 
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
 
.modal {
  display: none; 
  position: fixed;  
//   z-index: 1;  
//   padding-top: 100px;  
  left: 0;
  top: 0;
  width: 100%;  
  height: 200%;  
  // overflow: auto;  
//   background-color: rgb(0,0,0);  
//   background-color: rgba(0,0,0,0.4); 

 
  
}

 
.modal-content {
  padding: 10%;
  margin: auto;
  color: #000;
  border: 1px solid #888;
  font-size: 16px;
  width: 100%;
  height: 200%;
  box-shadow: 3px 3px 3px black;
  background-color: rgba(255, 254, 191, 0.8);	
  
 
}


.modal-content h5{
    font-size: 18px;
   
  }


.close {
  color: #000;
  font-size: 50px;
  font-weight: bold;
 
  
}

.close:hover,.close:focus {
  
  color: #aaaaaa;
  text-decoration: none;
  cursor: pointer;
}


@media only screen and (max-width: 360px) {
    .button {
      margin-top: 30px;
    }
 
}

@media only screen and (max-width: 414px) {
  .modal-content{
    font-size: 14px;
  
  }



}




 
    

    

  

`;




export interface ICovidModal2Props { }

export default CovidModal2;