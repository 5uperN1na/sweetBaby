import * as React from 'react'
import NavBar from '../components/navigation/NavComponent';


const Pastel: React.FC<IPastelProps> = (props) => {

    const handleClick = async () => {
        try {
            var hue = Math.floor(Math.random() * 360);
            var pastel = 'hsl(' + hue + ', 100%, 87.5%)';
            setBackground(pastel)
        } catch (error) {
            console.log(error);
        }
    }

    const [background, setBackground] = React.useState<string>('pink')

    return (
        <>
            <NavBar />

            <div className="row d-flex justify-content-center align-items-center mt-5">
                <div style={{ height: "200px", width: "200px", backgroundColor: `${background}` }} > </div>
            </div>
            <div className="row d-flex justify-content-center align-items-center mt-5">
                <div 
                onClick ={handleClick}
                className="btn btn-primary">Generate</div>

            </div>

        </>
    )

}

export interface IPastelProps { }

export default Pastel