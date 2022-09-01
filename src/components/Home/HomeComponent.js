import videoHomePage from "../../assets/video-homepage.mp4";
function HomeComponent() {
    return (
        <div className="home-content">
            <video autoPlay muted loop>
                <source src={videoHomePage} />
            </video>
        </div>

    )
}
export default HomeComponent;