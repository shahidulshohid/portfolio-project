import headerImg from "../../assets/headerImg.jpg";
import './ImageComponent.css'; 

const ImageComponent = () => {
  return (
    <div className="com">
      <a className="th" href="https://unsplash.com/photos/UrfpprfDB0k" target="_blank" rel="noopener noreferrer">
        <img 
          src={headerImg}
          alt="Unsplash Image" 
        />
      </a>
    </div>
  );
};

export default ImageComponent;
