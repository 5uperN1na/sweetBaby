import * as React from 'react';
import styled from "styled-components";
import GoogleFontLoader from 'react-google-font-loader';


const Schedule: React.FC<IScheduleProps> = (props) => {

    return (

        <StyledAlert>
            <div className="row d-flex justify-content-center align-items-center">

                <div className="alert  alert-dismissible">

                    <StyledImg>
                        <a href="/schedule2" className="alert-link">Sweet Baby Care Schedule</a>

                        <img src="/images/calendar.png" alt="abc icon" width="2%" />

                    </StyledImg>


                </div>
            </div>







        </StyledAlert>

    );

}


const StyledAlert = styled.div`

.alert{
    background-color: #ffe98e;
    color: gray;
    font-family: 'Long Cang';
    text-align: center;
    font-size: 25px;
  
    

}

a {
    background-color: #ffe98e;
    color: gray;
    font-family: 'Long Cang';
    text-align: center;
    font-size: 25px;
}
  
 
`;


const StyledImg = styled.image`

img{
    padding-left: 5px;

}
 
 

 
`;










export interface IScheduleProps { }

export default Schedule;