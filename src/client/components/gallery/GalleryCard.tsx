import * as React from 'react';
import { useState, useEffect } from 'react';
import { IGallery } from '../../utils/interfaces';
import { Link } from 'react-router-dom';

const GalleryCard: React.FC<GalleryCardProps> = (props, index) => {
    return (
        <section className="row justify-content-center">
            <div className="card" style={{ width: "18rem"}}>
                <div className="card-body">
                <h5 className="card-title">{props.gallery.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to={{pathname: `/gallery/${props.index}`}}>Click</Link>
                </div>
            </div>
        </section>
    );
}

type gallery = {
    src?: string;
    width?: number;
    height?: number;
    id?: number;
    name?: string;
}

interface GalleryCardProps {
    gallery?:gallery;
    index?: number;
}

export default GalleryCard;