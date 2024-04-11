import { Serie } from './Serie.js';
import { dataCourses } from './data.js';

const seriesTbody: HTMLElement = document.getElementById("series")!; 

const tarjetaContainer = document.getElementById("tarjetaContainer")!;

renderCoursesInTable(dataCourses);

function renderCoursesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.id}</td>
                          <td><a href="#${c.nombre}">${c.nombre}</a></td>
                           <td>${c.canal}</td>
                           <td>${c.temporadas}</td>`;
    seriesTbody.appendChild(trElement);

    trElement.addEventListener("click", () => mostrarTarjeta(c));
  });
}



function mostrarTarjeta(serie: Serie) {
  const tarjetaHTML = `
    <div class="card">
      <div class="card-body">
       <img src= "${serie.imagen}" style="height: 300px; width: 500px;>
        <h5 class="card-title">${serie.nombre}</h5>
        <p class="card-text"> ${serie.descripcion}</p>
        <a href="${serie.enlace}"> ${serie.enlace} </a>
      </div>
    </div>
  `;

  tarjetaContainer.innerHTML = tarjetaHTML;
}