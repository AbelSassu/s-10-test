import eh from "../data/eh.jpg";

const MyNotFound = () => {
    return (
        <div className="d-flex justify-content-center">
            <img src={eh} alt="404 not found" width={500} />
        </div>
    );
};
export default MyNotFound;