import * as React from 'react';
import NavBar from '../navigation/NavComponent';

const About: React.FC<IAboutProps> = (props) => {

    return (
        
            <main className="container">
                <NavBar />
                <div className="row">
                    <div className="col-md-8 mt-3">
                        <div className="display-2">About</div>
                    </div>
                </div>
            </main>
       
    )
}

export interface IAboutProps { }

export default About;