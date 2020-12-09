import * as React from 'react';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


const Covid: React.FC<ICovidProps> = (props) => {

    const [show, setShow] = useState(true);

    if (show) {

        return (
            <Alert variant="warning" onClose={() => setShow(false)} dismissible>
                <p>Sweet Baby Care's commitment to safety and health.</p>
                <Alert.Link href="https://www.cdc.gov/coronavirus/2019-ncov/community/schools-childcare/guidance-for-childcare.html">Read More</Alert.Link>
            </Alert>
            
        );

    }
    return <Button onClick={() => setShow(true)}>COVID-19 Precautions</Button>;
}

export interface ICovidProps { }

export default Covid;