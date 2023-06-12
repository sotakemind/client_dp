import jsonServerProvider from 'ra-data-json-server';
import { Admin, EditGuesser, ListGuesser, Resource } from 'react-admin';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={ListGuesser} edit={EditGuesser} recordRepresentation="name" />
    <Resource name="category" list={ListGuesser} edit={EditGuesser} recordRepresentation="name" />
    <Resource name="products" list={ListGuesser} edit={EditGuesser} recordRepresentation="name" />
    <Resource name="reviews" list={ListGuesser} edit={EditGuesser} recordRepresentation="name" />
  </Admin>
);

export default App;