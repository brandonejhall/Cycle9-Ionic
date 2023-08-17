import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import "./ProductCard.css";

function ProductCard(title : string,image : string ,description: string, price:string) {
  return (
    <IonCard color="light" id="main-card">
      <img alt={title} src={image} />
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
        <IonCardSubtitle>{price}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>{description}</IonCardContent>
    </IonCard>
  );
}
export default ProductCard;