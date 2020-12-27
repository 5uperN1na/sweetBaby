import * as React from 'react';
import styled from "styled-components";
import GoogleFontLoader from 'react-google-font-loader';


const Schedule: React.FC<IScheduleProps> = (props) => {

    return (

        <StyledAlert>
            <div className="row d-flex justify-content-center align-items-center">

                <div className="alert  alert-dismissible">
 
                        <a href="/schedule2" className="alert-link">Daily Schedule</a>
                </div>
            </div>

        </StyledAlert>

    );

}


const StyledAlert = styled.div`

.alert{
    background-color: #ffe98e;
    color: gray;
    text-align: center;
    font-size: 15px;
    padding: 10px 24px;
}

a {
    background-color: #ffe98e;
    color: gray;
    text-align: center;
    font-size: 15px;
    padding: 10px 24px;
}
  
 
`;














export interface IScheduleProps { }

export default Schedule;