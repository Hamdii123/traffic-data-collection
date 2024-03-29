  import './App.css';
  import "primereact/resources/themes/lara-light-indigo/theme.css";
  
  import "primereact/resources/primereact.min.css";
  import '/node_modules/primeflex/primeflex.css'

  import { httpClient } from './HttpClient';
  import { Route, BrowserRouter as Router , Routes} from 'react-router-dom';
  import ReportFrom from './components/reportForm/ReportFrom';

  
  import Keycloak from 'keycloak-js';
import HomePage from './components/homePage/HomePage';

  /*
    Init Options
  */
  let initOptions = {
    url: 'http://127.0.1:4000/',
    realm: 'prjetsoc',
    clientId: 'myclient',
  }

  let kc = new Keycloak(initOptions);

  kc.init({
    onLoad: 'login-required', // Supported values: 'check-sso' , 'login-required'
    checkLoginIframe: true,
    pkceMethod: 'S256'
  }).then((auth) => {
    if (!auth) {
      window.location.reload();
    } else {
      // Remove below logs if you are using this on production 
      console.info("Authenticated");
      console.log('auth', auth)
      console.log('Keycloak', kc)
      console.log('Access Token', kc.token)

      // http client will use this header in every request it sends 
      httpClient.defaults.headers.common['Authorization'] = `Bearer ${kc.token}`;

      kc.onTokenExpired = () => {
        console.log('token expired')
      }
    }
  }, () => {
    // Notify the user if necessary 
    console.error("Authentication Failed");
  });

  function App() {

  
    return (
      <div className="App">

    <Router>
      <div>
        <Routes>
          <Route path="/report" element={<ReportFrom />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>


      </div>
    );
  }


  export default App;
