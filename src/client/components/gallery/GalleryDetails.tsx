// import React, { useState, useCallback } from "react";
// import { Link, NavLink } from 'react-router-dom';
// import styled from "styled-components";
// import GoogleFontLoader from "react-google-font-loader";
// import NavBar from '../navigation/NavComponent';
// // import { IGallery } from '../../utils/interfaces';
// import { useParams } from 'react-router-dom'
// import { galleries } from "../../utils/galleris";
// import PageNotFound from "../../views/PageNotFound";
// import Lightbox from "react-image-lightbox";

// const GalleryDetails: React.FC<GalleryDetailsProps> = () => {


//     const { id } = useParams<any>()

//     const [galleryId, setGalleryId] = useState<any>(id)
//     const [currentImage, setCurrentImage] = useState<any>(0);
//     const [viewerIsOpen, setViewerIsOpen] = useState<any>(false);



//     // const [photoIndex, setPhotoIndex] = useState(0);
//     // const [isOpen, setIsOpen] = useState(false);


//     const handleLightbox = () => {
//         setViewerIsOpen(!viewerIsOpen)

//     }

//     // const openLightbox = React.useCallback<any>((event: any, { photo, index }: any) => {
//     //     setCurrentImage(index);
//     //     setViewerIsOpen(true);
//     // }, []);

//     // const closeLightbox = () => {
//     //     setCurrentImage(0);
//     //     setViewerIsOpen(false);
//     // };


//     const handlePreview = () => {
//         setCurrentImage((currentImage + galleries.length - 1) % galleries.length)
//     }

//     const handleNext = () => {
//         setCurrentImage((currentImage + 1) % galleries.length)
//     }


//     if (galleryId > galleries.length || isNaN(galleryId)) {
//         return (
//             <>
//                 <PageNotFound />
//             </>
//         )
//     } else {
//         return (
//             <div>
//                 <Background>
//                     <NavBar />
//                     <GoogleFontLoader
//                         fonts={[
//                             {
//                                 font: 'Homemade Apple',
//                                 weights: [400, '400i'],
//                             },
//                             {
//                                 font: 'Beth Ellen',
//                                 weights: [400, '400i'],
//                             },
//                         ]}
//                         subsets={['cyrillic-ext', 'greek']}
//                     />
//                     <StyledMain className="container">
//                         {/* <div className="row d-flex justify-content-center align-items-center">
//                             <StyledTitle className="my-5 text-muted">{galleries[galleryId].name}</StyledTitle>
//                         </div> */}

//                         {/*after user clicks on image card on Gallery.tsx, map through images and display images */}

//                         {/* <div className="row justify-content-center">
//                           {galleries[`${galleryId}`].photos.map<any, any[]>((gallery: any) => ({
//                             ...gallery,
//                         }))}

//                         </div> */}

//                         {/*once images display, click single image to open light box. */}
//                         currentIndex={currentImage} 
                        
//                         {galleries[galleryId].photos} onClick={handleLightbox}

//                         <div>

                    
//                         {viewerIsOpen && (
//                             <Lightbox
//                                 mainSrc={galleries[currentImage]}
//                                 nextSrc={galleries[(currentImage + 1) % galleries.length]}
//                                 prevSrc={galleries[(currentImage + galleries.length - 1) % galleries.length]}

//                                 onCloseRequest={handleLightbox}


//                                 onMovePrevRequest={handlePreview}

//                                 onMoveNextRequest={handleNext}

//                             />
//                         )}
//                         </div>





//                     </StyledMain>
//                 </Background>
//             </div >
//         );
//     }
// }

// const StyledTitle = styled.h1`
//     font-family: 'Beth Ellen', sans-serif;
//     font-size: 40px;
// `;

// const StyledMain = styled.main`
//     margin-top: 5rem;
//     margin-bottom:  5rem;
//     @media (max-width: 812px) and (orientation: landscape) {
//         margin-top: 4.375rem;
//     }
//     img {
//       opacity: 0.75;
//       transition: all .4s ease;
//       -webkit-transition: all .4s ease; 
//       padding: 5px;
       
//     }
//     img:hover {
//       transform: scale(1.05);
//       box-shadow: 0 10px 20px rgba(0, 0, 0, 1), 0 4px 8px rgba(0, 0, 0, 1);
//       opacity: 1;
//     }
// `;

// const Background = styled.div`
//     background-color: #d7eecc;
//     height: 55%;
//     background-attachment: fixed;
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;
//     width: 100%;
// `;











// export interface GalleryDetailsProps { }

// export default GalleryDetails;