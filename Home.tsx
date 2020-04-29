import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import './Home.css';
import HomeComp from '../../components/HomeComp/HomeComp';
import {
  useDispatch,
} from 'react-redux'
import { useTypedSelector } from '../../redux/rootReducer'
import { thunkAddColor } from './../../redux/colors/thunk'
import { Color } from '../../redux/colors/types';

const Home: React.FC = () => {
  const colors = useTypedSelector(state => state.colors);
  const [localColors, setLocalColors] = useState<Color[]>([...colors]);
  const [text, setText] = useState<string>();
  const dispatch = useDispatch();

  function newColor() {
    const colorToAdd = text || '';
    if (colorToAdd === '') return
    dispatch(thunkAddColor(colorToAdd))
    setText('')
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cavavin</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Cavavin</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>
          {
            colors.map((color: Color, index: number) =>
              <p key={index}>
                {color.color}
              </p>
            )
          }
        </div>
        <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
        <IonButton onClick={newColor}>Add</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
