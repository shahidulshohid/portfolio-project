import AboutPage from "../AboutPage/AboutPage";
import ContactPage from "../ContactPage/ContactPage";
import Header from "../Header/Header";
import MyPortfolio from "../MyPortfolio/MyPortfolio";

const HomePage = () => {
    return (
        <div id="home">
            <Header></Header>
            <MyPortfolio></MyPortfolio>
            <AboutPage></AboutPage>
            <ContactPage></ContactPage>
        </div>
    );
};

export default HomePage;