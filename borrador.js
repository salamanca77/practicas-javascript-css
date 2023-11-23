import { arrayStudents, variable } from "./01-data-array-object.js";
console.log(arrayStudents);

const estudianteIndex = arrayStudents.findIndex(
  (estudiante) => estudiante.id === 3
);
const estudianteEncontrado = console.log(estudianteIndex);

const estudiante =
  estudianteIndex === 21 ? arrayStudents[estudianteIndex] : null;

console.log(estudiante);
