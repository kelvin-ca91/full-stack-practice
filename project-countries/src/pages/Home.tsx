import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import FieldsetCustom from '../components/FieldsetCustom';

import './Home.css';
import { useState } from 'react';

const Home = () => {
  const [list] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return (
    <div>
      <FieldsetCustom />
      // Crear components para movies
      <div className="grid gap-4 lg:grid-cols-6 md:grid-cols-4 grid-cols-2">
        {list.map((item) => {
          return (
            <Card>
              <CardHeader>
                <CardTitle>Heroes</CardTitle>
                <CardDescription>Este es un heroe de prueba</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Es una pelicula de un hombre con poderes aracnidos</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <div className="border-2 border-blue-500 p-4">
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
