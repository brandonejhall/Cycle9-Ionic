import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonImg ,
  IonBackButton,
  IonButtons,
} from '@ionic/react';

import './About.css'

const About = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-content'>
        <div className="ion-padding">
          <h1>Brandon Hall</h1>
          <h1>The Focal Point</h1>
          <IonImg
      src="https://media.licdn.com/dms/image/C5603AQFIMAN4qKAYHw/profile-displayphoto-shrink_800_800/0/1619404438049?e=2147483647&v=beta&t=6Km0N3rXgYbXKYYn0X2UAKkSvI9W933OPrwL2Y2DpnQ"
      alt="Brandon Hall"
    ></IonImg>
          <p>
            I am interested in Web Development because I would like to have the ability to create and add to the ever expanding internet.
            I also see it as an opportunity to express my self on a platform which i have been actively using for years.Web Development would
            also teach me skills which only can assist me in other courses and future endevours.I also find the development and maintenance of websites
            fascinating.
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default About;
