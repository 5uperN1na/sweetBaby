import * as React from 'react';
import { useState, useEffect } from 'react';
import { IGallery } from '../../utils/interfaces';

const GalleryCard: React.FC<GalleryCardProps> = ({ gallery }) => {

    return (

        <section className="row justify-content-center col-mx-3">
            <div className="card-sm">
                <div className="card-title">
                    {gallery.name}
                </div>
                <div className="card-body">
                    {gallery.photos}
                </div>
            </div>

        </section >

    );
}

interface GalleryCardProps {
    gallery: IGallery
}

export default GalleryCard;