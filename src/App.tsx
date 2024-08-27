import {
  Admin,
  Resource,
  useStore,
  StoreContextProvider,
  Login,
  localStorageStore
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { Layout } from './layout';
import { themes, ThemeName } from './themes/themes';

import Grade from "./grade";
import Honour from "./honour";
import Work from "./work";
import Course from "./course";
import Experience from "./experience";
import { Dashboard } from './dashboard';

const store = localStorageStore(undefined, 'studes');

const App = () => {
  const [themeName] = useStore<ThemeName>('themeName', 'soft');
  const lightTheme = themes.find(theme => theme.name === themeName)?.light;
  const darkTheme = themes.find(theme => theme.name === themeName)?.dark;
  authProvider.login({"username":"guest","password":"guest"});
//  localStorage.setItem("user", JSON.stringify(userToPersist));

  return (
  <Admin dataProvider={dataProvider} authProvider={authProvider}
          layout={Layout}        
          store={store} 
          loginPage={<Login backgroundImage={"/png/login.jpg"}></Login>}
          dashboard={Dashboard}
          defaultTheme="dark"   
          lightTheme={lightTheme}
          darkTheme={darkTheme}>
    <Resource name="grade" {...Grade} />
    <Resource name="honour" {...Honour} />
    <Resource name="work" {...Work} />
    <Resource name="course" {...Course} />
    <Resource name="experience" {...Experience} />
  </Admin>
  );
};
const AppWrapper = () => (
  <StoreContextProvider value={store}>
      <App />
  </StoreContextProvider>
);

export default AppWrapper;
