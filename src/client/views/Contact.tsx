import * as React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import styled from 'styled-components';
import NavBar from '../components/navigation/NavComponent';

const Contact: React.FC<IContactProps> = (props) => {

    const [subject, setSubject] = React.useState<string>('')
    const [body, setBody] = React.useState<string>('')

    const onSubmit = async () => {
        try {
            window.open(`mailto:test@example.com?subject=${subject}&body=${body}`);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <Background>
            <NavBar />
            <GoogleFontLoader
                fonts={[
                    {
                        font: 'Homemade Apple',
                        weights: [400, '400i'],
                    },
                    {
                        font: 'Beth Ellen',
                        weights: [400, '400i'],
                    },
                ]}
                subsets={['cyrillic-ext', 'greek']}
            />
            <main className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <StyledTitle className="my-5 text-muted">Contact</StyledTitle>
                </div>

                <div className="row d-flex justify-content-center align-items-center mb-5 ">
                    <div className="col-md-7 order-md-12 bg-white my-4 border border-left-0 border-custom-nav"
                        style={{minHeight: "400px"}}
                    >
                        <form className="form-group"
                            onSubmit={onSubmit}>
                            <input
                                type="text"
                                className="input-group my-5 pt-3 border bg-light border-custom-nav w-75 mx-auto"
                                placeholder="Email Title"
                                value={subject}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubject(e.target.value)}
                            />
                            {/* <input
                                type="text"
                                className="input-group my-1 p-1 border border-top-0 border-left-0 border-right-0 bg-light my-5 border-primary w-75 mx-auto"
                                placeholder="Your Message"
                                value={body}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBody(e.target.value)}
                                style={{ opacity: 0.5 }}
                            /> */}
                            <textarea
                                className="input-group my-3 p-1 border bg-light border-custom-nav w-75 mx-auto"
                                id="subject"
                                name="subject"
                                placeholder="Your Message"
                                value={body}
                                onChange={(e: React.ChangeEvent<any>) => setBody(e.target.value)}
                                style={{ height: "170px" }}>
                            </textarea>
                            <div className="row justify-content-center">
                                <button className="btn btn-block btn-custom-nav my-2 shoadow w-50">Email Me!</button>
                            </div>
                        </form>
                    </div>
                    <ColummBackground
                        style={{minHeight: "400px"}}
                        className="col-md-4 order-md-1 background border border-right-0 border-custom-nav">
                    </ColummBackground>
                </div>
            </main>
            </Background>
        </>
    )
}

const StyledTitle = styled.h1`
    font-family: 'Beth Ellen', sans-serif;
    font-size: 40px;
`;


const ColummBackground = styled.div`

background: linear-gradient(-45deg, #b8d8f5, #f5dab8, #eebcbc, #baefa3);
background-size: 400% 400%;
animation: gradient 15s ease infinite;
height: 100%;

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }

`

const Background = styled.div `
background-color: #f5dcdb;
height: 55%;
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
width: 100%;

`


export interface IContactProps { }

export default Contact;