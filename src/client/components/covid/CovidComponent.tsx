import * as React from 'react';
import styled from "styled-components";
import GoogleFontLoader from 'react-google-font-loader';


const Covid: React.FC<ICovidProps> = (props) => {
 

        return (

            <StyledAlert>
            <GoogleFontLoader
            fonts={[
             
                {
                    font: 'Long Cang',
                     
                },
            ]}
            
        />
            <div className="alert  alert-dismissible">
                <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                Sweet Baby Care is committed to the health and safety of each child. &nbsp; <a href="https://www.cdc.gov/coronavirus/2019-ncov/community/schools-childcare/guidance-for-childcare.html" className="alert-link">Read more regarding COVID-19 precautions.</a>.
            </div>
            </StyledAlert>

        );

    }
 

const StyledAlert = styled.div`

.alert{
    background-color: #bbd2fd;
    color: black;
    font-family: 'Long Cang';
    text-align: center;
    font-size: 25px;
  
    

}

a {
    background-color: #bbd2fd;
    color: black;
    font-family: 'Long Cang';
    text-align: center;
    font-size: 25px;
}
  
 
`;



export interface ICovidProps { }

export default Covid;