import AboutPage from "../AboutPage/AboutPage";
import ContactPage from "../ContactPage/ContactPage";
import Header from "../Header/Header";
import MyPortfolio from "../MyPortfolio/MyPortfolio";

const HomePage = () => {
    return (
        <div id="home">
            <Header></Header>
            <AboutPage></AboutPage>
            <MyPortfolio></MyPortfolio>
            <ContactPage></ContactPage>
        </div>
    );
};

export default HomePage;