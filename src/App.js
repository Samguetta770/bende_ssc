
import './App.css';
import Header from "./Parts/Header";
import Titre from "./Parts/Titre";
import FranceMap from "./Parts/FranceMap";
import QuestionaireTest from "./Parts/QuestionaireTest";
import CommentCaMarche from "./Parts/CommentCaMarche";
import CombienCaCoute from "./Parts/CombienCaCoute";
import Videos from "./Parts/Videos";
import FinDePage from "./Parts/FinDePage";
import PartenaireSection from "./Parts/PartenaireSection";

import { Analytics } from '@vercel/analytics/react';
import Temoignage from "./Parts/Temoignage";

function App() {
  return (
      <body>
       <Header/>
       <Titre/> <br/><br/>
       <QuestionaireTest/>
       <Analytics/>
       <CommentCaMarche/>
       <CombienCaCoute/>

       <Videos/>
       <FinDePage/>
       <PartenaireSection/>












     </body>)
}

export default App;
