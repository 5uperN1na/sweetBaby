import * as React from 'react';
import styled from "styled-components";



const PageNotFound: React.FC<IPageNotFoundProps> = (props) => {

  return (

    <Layout>



      <div className="row justify-content-center">

        <div className="col-md-12">
        <a href="/" className="alert-link">
            <img className="animated-gif" src="../images/pagenotfound.gif" alt="Card image cap" />
           
             </a>


        </div>

      </div>
    </Layout>


  );
}



// const Background = styled.div`
//     background-color: #b2d0f1;
//     height: 100%;
//     // background-attachment: fixed;
//     // background-position: center;
//     // background-repeat: no-repeat;
//     // background-size: cover;
//     width: 150%;

//   `;

const Layout = styled.div`

  img.animated-gif{
    width: 100%;
    height: auto;
    align-items: center;
 
    
   
  }

  `;

 




export interface IPageNotFoundProps { }

export default PageNotFound;