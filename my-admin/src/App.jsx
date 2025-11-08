import { Admin, Resource, ListGuesser } from "react-admin";
import './App.css'
import { createTrailbaseProvider } from '/workspaces/TAKE-FUCKING-2/my-admin/src/ra-trailbase.js';

const TRAILBASE_URL = "https://humble-space-engine-q795q76j7q9p3q6w-4000.app.github.dev/";
const {dataProvider} = await createTrailbaseProvider(TRAILBASE_URL);

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={ListGuesser} />
    <Resource name="comments" list={ListGuesser} />
  </Admin>
);

export default App;
