import report from "../data/report.jpeg";
import { Navbar, Container } from "react-bootstrap";
import SearchCity from "./SearchCity";
import { Link } from "react-router-dom";

const MyNavbar = () => {
    return (
        <>
            <Navbar className="w-100">
                <Container className="d-flex">
                    <Navbar.Brand as={Link} to="/" className="d-flex ">
                        <img src={report} alt="logo" className="logo" />
                        <h1 className="text-white ms-3 mt-2">WeatherReport</h1>
                    </Navbar.Brand>
                    <SearchCity />
                    <Link to="https://youtu.be/kVPe5VEImsg?si=6XOykRc6Udpsaa94&t=9">
                        <svg
                            fill="white"
                            version="1.1"
                            className="wut"
                            width="30px"
                            height="30px"
                            viewBox="0 0 395.001 395"

                        >
                            <g>
                                <g>
                                    <path d="M322.852,0H72.15C32.366,0,0,32.367,0,72.15v250.7C0,362.634,32.367,395,72.15,395h250.701    c39.784,0,72.15-32.366,72.15-72.15V72.15C395.002,32.367,362.635,0,322.852,0z M370.002,322.85    c0,25.999-21.151,47.15-47.15,47.15H72.15C46.151,370,25,348.849,25,322.85V72.15C25,46.151,46.151,25,72.15,25h250.701    c25.999,0,47.15,21.151,47.15,47.15L370.002,322.85L370.002,322.85z" />
                                    <path d="M197.501,79.908c-33.775,0-61.253,27.479-61.253,61.254c0,6.903,5.596,12.5,12.5,12.5c6.904,0,12.5-5.597,12.5-12.5    c0-19.99,16.263-36.254,36.253-36.254s36.253,16.264,36.253,36.254c0,11.497-8.314,19.183-22.01,30.474    c-12.536,10.334-26.743,22.048-26.743,40.67v40.104c0,6.902,5.597,12.5,12.5,12.5c6.903,0,12.5-5.598,12.5-12.5v-40.104    c0-6.832,8.179-13.574,17.646-21.381c13.859-11.426,31.106-25.646,31.106-49.763C258.754,107.386,231.275,79.908,197.501,79.908z" />
                                    <path d="M197.501,283.024c-8.842,0-16.034,7.193-16.034,16.035c0,8.84,7.192,16.033,16.034,16.033    c8.841,0,16.034-7.193,16.034-16.033C213.535,290.217,206.342,283.024,197.501,283.024z" />
                                </g>
                            </g>
                        </svg>
                    </Link>
                </Container>
            </Navbar>
        </>
    );
};

export default MyNavbar;
