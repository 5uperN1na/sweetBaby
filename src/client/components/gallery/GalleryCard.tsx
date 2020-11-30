import * as React from 'react';
import { useState, useEffect } from 'react';
import { IGallery } from '../../utils/interfaces';
import { Link } from 'react-router-dom';
import { galleries } from '../../utils/galleris';
import styled from 'styled-components';

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


        <StyledCard>
        <div className="col-md-5 mb-sm-5 my-3">

            <div className="polaroid">
                <Link to={{ pathname: `/gallery/${props.index}` }}><img className="card-img-top embed-responsive-item" src={props.gallery.cover} /></Link>

                <p>{props.gallery.name}</p>
            </div>
        </div>
        </StyledCard>

    );
}


const StyledCard = styled.div`
 
 

.polaroid {
  position: relative;
  width: 250px;

 
}
 
.polaroid img {
 
  border: 15px solid #fff;
  border-bottom: 60px solid #fff;
  -webkit-box-shadow: 3px 3px 3px #777;
     -moz-box-shadow: 3px 3px 3px #777;
          box-shadow: 3px 3px 3px #777;
}

 
.polaroid p {
  position: absolute;
  text-align: center;
  width: 100%;
  bottom: 10px;
  font: 400 20px/1 'Kaushan Script', cursive;
  color: #FF7E9B;
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