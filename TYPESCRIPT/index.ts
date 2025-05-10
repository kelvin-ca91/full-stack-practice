let cadena: string = 'Hola Mundo';
let numero: number = 10;
let booleano: boolean = true;
let arreglo: number[] = [1, 2, 3, 4, 5];
let arreglo2: Array<number> = [1, 2, 3, 4, 5];

let arreglo3: (number | string | Array<number> | {})[] = [
  1,
  2,
  3,
  '4',
  '5',
  [],
  {},
];

let cualquierTipo: any = ['Hola', 1, true, {}];

type TEstadoCivil = 'Soltero' | 'Casado' | 'Divorciado';

interface IPersona {
  nombre: string;
  edad?: number;
  apellido: string;
  estadoCivil: TEstadoCivil;
}

interface IPersonaPadrinos {
  nombre: string;
  estadoCivil: TEstadoCivil;
}

let _persona: IPersona = {
  nombre: 'Juan',
  apellido: 'Pérez',
  estadoCivil: 'Soltero',
};

let _persona2: IPersona = {
  nombre: 'Juan',
  apellido: 'Pérez',
  estadoCivil: 'Casado',
};
let _persona3: IPersona = {
  nombre: 'Juan',
  apellido: 'Pérez',
  estadoCivil: 'Divorciado',
};
