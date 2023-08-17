import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/react';
import ProductCard from '../components/ProductCard';
import mockProducts from '../components/MockProducts';
import './Products.css';

const Products: React.FC = () => {
    

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar id='toolbar'>
          <IonRow>
          <IonTitle>Products</IonTitle>
          <IonButton routerLink="/products">Products</IonButton>
          <IonButton routerLink="/about">About</IonButton>   
          </IonRow>
   
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen id='products' >
      <IonGrid>
          <IonRow>
          {mockProducts.map((product) => (
          ProductCard(
            product.name,
            product.image,
            product.description,
            product.price.toFixed(2)
          )
        ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Products;
