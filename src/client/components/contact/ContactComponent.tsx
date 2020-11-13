import * as React from 'react';
import NavBar from '../navigation/NavComponent';

const Contact: React.FC<IContactProps> = (props) => {

    return (
        
            <main className="container">
                <NavBar />
                <div className="row">
                    <div className="col-md-8 mt-3">
                        <div className="display-2">Contact</div>
                    </div>
                </div>
            </main>
       
    )
}

export interface IContactProps { }

export default Contact;