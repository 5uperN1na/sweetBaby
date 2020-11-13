import * as React from 'react';
import NavBar from '../navigation/NavComponent';

const Covid: React.FC<ICovidProps> = (props) => {

    return (
        
            <main className="container">
                <NavBar />
                <div className="row">
                    <div className="col-md-8 mt-3">
                        <div className="display-2">Covid</div>
                    </div>
                </div>
            </main>
       
    )
}

export interface ICovidProps { }

export default Covid;