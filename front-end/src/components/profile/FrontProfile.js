import './FrontProfile.css';
import yes from './images/yes.png';
import noSoSad from './images/noSoSad.png';

export default function FrontProfile(props) {
  return (
    <div className="container">
      <div className="front-wrapper">
        <div className="profile-top">
          <img
            className="front-profile-pic"
            src="https://img.freepik.com/premium-vector/cute-welsh-corgi-dog-waving-paw-cartoon_42750-623.jpg"
            alt="front profile card"
          />
        </div>
        <div className="content">
          <h2 className="user-name"> {props.name} </h2>
        </div>
        <div className="profile-footer">
          <div>
            <p className="profile-title">AGE</p>
            <p className="num">{props.age}</p>
          </div>
          <div className="city">
            <p className="profile-title">CITY</p>
            <p className="num">{props.address}</p>
          </div>
          <div>
            <p className="profile-title">TREATS</p>
            <p className="num">{props.treats}</p>
          </div>
        </div>
        <div className="love-me-not">
          <button onClick={() => console.log('clicked NO!')}>
            <img className="sad-btn" src={noSoSad} alt="no love me" />
          </button>
          <button onClick={() => console.log('clicked YES!')}>
            <img className="love-btn" src={yes} alt="yes love me" />
          </button>
        </div>
        <div className="empty-bottom">.</div>
      </div>
    </div>
  );
}
