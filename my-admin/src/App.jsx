import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import { createTrailbaseProvider } from "/workspaces/TAKE-FUCKING-2/my-admin/ra-trailbase.js";

const TRAILBASE_URL = "https://humble-space-engine-q795q76j7q9p3q6w-4000.app.github.dev/";
const {dataProvider} = createTrailbaseProvider(TRAILBASE_URL);

const App = () =>
   (
  <Admin dataProvider={dataProvider}>
    <Resource name="authors" list={AuthorsList} edit={EditGuesser}/>
    <Resource name="books" list={ListGuesser} edit={EditGuesser}/>
    <Resource name="users" list={ListGuesser} edit={EditGuesser}/>
  </Admin>
);

export default App;
