import * as React from 'react';
import NavBar from '../navigation/NavComponent';

const About: React.FC<IAboutProps> = (props) => {

    return (
        <>
            <NavBar />
            <main className="container">
                <div className="row">
                    <div className="col-md-8 mt-3">
                        <div className="display-2">About</div>
                    </div>
                </div>
            </main>
        </>
    )
}

export interface IAboutProps { }

export default About;