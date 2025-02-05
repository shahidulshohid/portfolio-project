import AboutPage from "../AboutPage/AboutPage";
import ContactPage from "../ContactPage/ContactPage";
import EducationPage from "../EducationPage/EducationPage";
import Header from "../Header/Header";
import MyPortfolio from "../MyPortfolio/MyPortfolio";

const HomePage = () => {
    return (
        <div id="home">
            <Header></Header>
            <AboutPage></AboutPage>
            <EducationPage></EducationPage>
            <MyPortfolio></MyPortfolio>
            <ContactPage></ContactPage>
        </div>
    );
};

export default HomePage;