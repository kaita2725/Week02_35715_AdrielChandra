import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

<<<<<<< HEAD
const App: React.FC = () => {
      const [ calculatedBMI, setCalculatedBMI  ] = useState<number>();
      const [ bmi_criteria, setCriteriaResult  ] = useState<string>("Test");
      const heightInputRef = useRef<HTMLIonInputElement>(null);
      const weightInputRef = useRef<HTMLIonInputElement>(null);

      const calculateBMI = () => {
        const enteredWeight = weightInputRef.current!.value;
        const enteredHeight = heightInputRef.current!.value;

        if(!enteredWeight || !enteredHeight) return;

        const bmi : number = +enteredWeight / ((+enteredHeight/100) * (+enteredHeight/100));
        // console.log(bmi);
        setCalculatedBMI(bmi);
        setCriteriaResult(bmi_result(bmi));
      };

      const bmi_result = (bmi: number): string => {
        if(bmi <= 18.5) {return "kurus";}
        else if(bmi >= 18.5 && bmi <= 24.9) {return "Normal";}
        else if(bmi >= 25 && bmi <= 29.9) {return "Gemuk";}
        else if(bmi >= 30){return "Obesitas";}
        else {return "error"}
      }

      const resetAll = () => {
        heightInputRef.current!.value = " ";
        weightInputRef.current!.value = " ";
        setCalculatedBMI(0);
        setCriteriaResult("Kriteria")
      }
      setupIonicReact();
  return (
=======
const App: React.FC = () => (
>>>>>>> parent of e605d68 (commit)
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
