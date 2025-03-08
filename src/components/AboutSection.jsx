import React from 'react';
import '../styles/AboutSection.css'; 

import menuImage1 from '../assets/assets/menu/menu-about-1.jpg';
import menuImage2 from '../assets/assets/menu/menu-about-2.jpg';
import menuImage3 from '../assets/assets/menu/menu-about-3.jpg';

const AboutSection = () => {
  return (
    <div className="aboutSectionWrapper">
      <div className="aboutSection">
        <h1 className="aboutTitle">Lorem ipsum</h1>
        <div className="aboutContent">
          <div>
            <h2 className="aboutContentTitle">Lorem 1</h2>
            <img src={menuImage1} alt="Menu Item 1" />
          </div>
          <div>
            <h2 className="aboutContentTitle">Lorem 2</h2>
            <img src={menuImage2} alt="Menu Item 2" />
          </div>
          <div>
            <h2 className="aboutContentTitle">Lorem 3</h2>
            <img src={menuImage3} alt="Menu Item 3" />
          </div>
        </div>
      </div>

      <div className="aboutTextSection">
        <div>
          <h2 className="aboutContentTitle">Lorem 1 Text</h2>
          <p className="aboutContentText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor felis sit amet metus efficitur, non porttitor elit pretium. Curabitur nec tortor id purus scelerisque convallis. Aenean non tempus purus, ut sollicitudin purus. Proin condimentum dui ut interdum rhoncus. Integer sed turpis malesuada, consequat odio vel, luctus nisi. Integer vel suscipit mi. Vivamus at leo vitae arcu sodales hendrerit. Sed viverra viverra eros sit amet blandit. Quisque at purus ut nunc interdum congue.
          </p>
        </div>
        <div>
          <h2 className="aboutContentTitle">Lorem 2 Text</h2>
          <p className="aboutContentText">
            Vivamus auctor, nulla id pretium suscipit, nisi odio varius erat, vel efficitur odio ligula nec nisl. Aliquam erat volutpat. Phasellus malesuada eu nisi sed ullamcorper. Ut euismod sollicitudin dui sit amet convallis. Nam pretium ante quis interdum tristique. Nulla feugiat erat ac ligula ullamcorper, et varius lorem hendrerit. Cras tincidunt dui ut nibh facilisis, non accumsan sem posuere.
          </p>
        </div>
        <div>
          <h2 className="aboutContentTitle">Lorem 3 Text</h2>
          <p className="aboutContentText">
            Nulla facilisi. Ut sollicitudin, libero non interdum vehicula, nulla ipsum aliquet neque, vel elementum velit purus et orci. Proin id dui tincidunt, consequat nulla at, interdum dui. Nunc gravida maximus nulla, vel laoreet justo lobortis nec. Curabitur vel lorem id dui tincidunt convallis. Vivamus euismod velit at mauris accumsan, a mollis ligula aliquet. Fusce sit amet orci venenatis, viverra enim ac, luctus erat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
