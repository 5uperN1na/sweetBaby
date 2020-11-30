import * as React from 'react';
import { useState, useEffect } from 'react';
import { IGallery, IPhoto } from '../../utils/interfaces';
import { Link } from 'react-router-dom';

const GalleryCard: React.FC<GalleryCardProps> = ({ gallery, photo }) => {
    return (
        <section className="row justify-content-center">
            <div className="card" style={{ width: "18rem"}}>
                <img src={photo.src} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">{gallery?.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to={{pathname: `/gallery/view/${gallery.id}`}}>Click</Link>
                </div>
            </div>
        </section>
    );
}

interface GalleryCardProps {
    photo: IPhoto;
    gallery: IGallery;
}

export default GalleryCard;