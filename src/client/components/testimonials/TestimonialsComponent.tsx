import * as React from 'react';
import NavBar from '../navigation/NavComponent';

const Testimonials: React.FC<ITestimonialsProps> = (props) => {

    return (
        
            <main className="container">
                <NavBar />
                <div className="row">
                    <div className="col-md-8 mt-3">
                        <div className="display-2">Testimonials</div>
                    </div>
                </div>
            </main>
       
    )
}

export interface ITestimonialsProps { }

export default Testimonials;