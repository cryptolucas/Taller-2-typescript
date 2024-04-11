import { dataCourses } from './data.js';
var seriesTbody = document.getElementById("series");
renderCoursesInTable(dataCourses);
function renderCoursesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n                           <td>").concat(c.nombre, "</td>\n                           <td>").concat(c.canal, "</td>\n                           <td>").concat(c.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
