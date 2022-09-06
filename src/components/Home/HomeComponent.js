import videoHomePage from "../../assets/video-homepage.mp4";
function HomeComponent() {
    return (
        <div className="home-content">
            <div className="homepage-video">
                <video autoPlay muted loop>
                    <source src={videoHomePage} />
                </video>
            </div>
            <div className="homepage-content">
                <div className="title-content">
                    There's a better way to ask
                </div>
                <div className="detail-content">
                    You don't want to make a boring form. And your audience won't answer one. Create a typeform instead—and make everyone happy.
                </div>
                <div >
                    <button className="btn-getstart">
                        Get started - it's free
                    </button>
                </div>
            </div>
        </div>

    )
}
export default HomeComponent;