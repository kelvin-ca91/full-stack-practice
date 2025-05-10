import FieldsetCustom from '../components/FieldsetCustom';

const Home = () => {
  return (
    <div>
      <FieldsetCustom />
      // Crear components para movies
      <div>
        <h1>Heroes</h1>
        <ul>
          <li>
            <p>Titulo: SPIDERMAN</p>
            <p>
              Descripcion: Es una pelicula de un hombre con poderes aracnidos
            </p>
          </li>
        </ul>
      </div>
      {/* <fieldset>
        <legend>List Countries Language spanish</legend>
        <ul>
          <li>Lima</li>
          <li>Rio de Janeiro</li>
          <li>Buenos Aires</li>
        </ul>
      </fieldset> */}
    </div>
  );
};

export default Home;
