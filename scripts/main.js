import { dataCourses } from './data.js';
var seriesTbody = document.getElementById("series");
var tarjetaContainer = document.getElementById("tarjetaContainer");
renderCoursesInTable(dataCourses);
function renderCoursesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n                          <td><a href=\"#").concat(c.nombre, "\">").concat(c.nombre, "</a></td>\n                           <td>").concat(c.canal, "</td>\n                           <td>").concat(c.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
        trElement.addEventListener("click", function () { return mostrarTarjeta(c); });
    });
}
function mostrarTarjeta(serie) {
    var tarjetaHTML = "\n    <div class=\"card\">\n      <div class=\"card-body\">\n       <img src= \"".concat(serie.imagen, "\" style=\"height: 300px; width: 500px;>\n        <h5 class=\"card-title\">").concat(serie.nombre, "</h5>\n        <p class=\"card-text\"> ").concat(serie.descripcion, "</p>\n        <a href=\"").concat(serie.enlace, "\"> ").concat(serie.enlace, " </a>\n      </div>\n    </div>\n  ");
    tarjetaContainer.innerHTML = tarjetaHTML;
}
