import { Serie } from './Serie.js';
import { dataCourses } from './data.js';

const seriesTbody: HTMLElement = document.getElementById("series")!; 

renderCoursesInTable(dataCourses);

function renderCoursesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.id}</td>
                           <td>${c.nombre}</td>
                           <td>${c.canal}</td>
                           <td>${c.temporadas}</td>`;
    seriesTbody.appendChild(trElement);
  });
}