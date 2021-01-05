import * as React from 'react';
import { useState, useEffect } from 'react';
import { IGallery } from '../../utils/interfaces';
import { Link } from 'react-router-dom';
import { galleries } from '../../utils/galleris';
import styled from 'styled-components';
import GoogleFontLoader from 'react-google-font-loader';

const GalleryCard: React.FC<GalleryCardProps> = (props, index) => {
    return (

        // <section className="row justify-content-center">
        //     <div className="card" style={{ width: "18rem" }}>
        //         <img className="card-img-top embed-responsive-item" src={props.gallery.cover} />
        //         <div className="card-body">
        //             <h5 className="card-title"><Link to={{ pathname: `/gallery/${props.index}` }}>{props.gallery.name}</Link></h5>
        //             {/* <Link to={{pathname: `/gallery/${props.index}`}}>Click</Link> */}
        //         </div>
        //     </div>
        // </section>

        // <div className="container">
        //     <div className="row">
        //         <div className="col-md-6>


        //         <img className="card-img-top embed-responsive-item" src={props.gallery.cover} />
        //         <div className="card-body">
        //             <h5 className="card-title"><Link to={{ pathname: `/gallery/${props.index}` }}>{props.gallery.name}</Link></h5>

        //         </div>
        //     </div>
        // </div>
        // </div >

        <div>

            <GoogleFontLoader
                fonts={[
                    {
                        font: 'Permanent Marker',
                        weights: [400, '400i'],
                    },
                   
                ]}
                // subsets={['cyrillic-ext', 'greek']}
            />
            <StyledCard>
                <div className="col-md-5 mb-sm-5 my-3">

                    <div className="polaroid">
                        <Link to={{ pathname: `/gallery/${props.index}` }}><img className="card-img-top embed-responsive-item" src={props.gallery.cover} /></Link>
                            <p>{props.gallery.name}</p>
                         
                    </div>
                </div>
            </StyledCard>

        </div>



    );
}


const StyledCard = styled.div`
.polaroid {
  position: relative;
  width: 250px;
  border-radius: 0px;
  transition-property: transform;
  transition-duration: 1s;
  transition-timing-function:ease-in-out;
 
  
}
 
.polaroid img {
  border: 1 px solid darkgrey;
  background-color: white;
  padding: 15px 15px 60px 15px;
  box-shadow: 5px 10px 20px darkgrey;
  border-radius: 0px;

}

.polaroid p {
  position: absolute;
  top: 318px;
  text-align: center;
  width: 100%;
  bottom: 10px;
  color: #464646;
  font-family: 'Permanent Marker';
  font-size: 20px;
}

.polaroid:hover  {
 transform: scale(1.1);
}
`;


type gallery = {
    src?: string;
    width?: number;
    height?: number;
    id?: number;
    name?: string;
    cover?: string;
}

interface GalleryCardProps {
    gallery?: gallery;
    index?: number;
}

export default GalleryCard;