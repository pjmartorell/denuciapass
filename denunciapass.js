var form = document.getElementById("form");
let contenedorform = document.getElementById("contenedorform");
let contenedor = document.getElementById("contenedor");

function submitHandler(e) {
  contenedorform.style.display = "none";
  contenedor.style.display = "block";
  let nombre = document.getElementsByName("nombre")[0].value;
  let nombregenerado = (document.getElementById("nombregenerado").innerHTML =
    nombre);

  let apellidos = document.getElementsByName("apellidos")[0].value;
  let apellidosgenerado = (document.getElementById(
    "apellidosgenerado"
  ).innerHTML = apellidos);

  let dni = document.getElementsByName("dni")[0].value;
  let dnigenerado = (document.getElementById("dnigenerado").innerHTML = dni);

  let fecha = document.getElementsByName("fecha")[0].value;
  let fechagenerado = (document.getElementById("fechagenerado").innerHTML =
    fecha);
  let fechadenunciagenerado = (document.getElementById(
    "fechadenunciagenerado"
  ).innerHTML = fecha);

  let hora = document.getElementsByName("hora")[0].value;
  let horagenerado = (document.getElementById("horagenerado").innerHTML = hora);

  let domicilio = document.getElementsByName("domicilio")[0].value;
  let domiciliogenerado = (document.getElementById(
    "domiciliogenerado"
  ).innerHTML = domicilio);

  let localidad = document.getElementsByName("localidad")[0].value;
  let localidadgenerado = (document.getElementById(
    "localidadgenerado"
  ).innerHTML = localidad);
  let localidadjuzgadogenerado = (document.getElementById(
    "localidadjuzgadogenerado"
  ).innerHTML = localidad);
  let localidadenunciagenerado = (document.getElementById(
    "localidadenunciagenerado"
  ).innerHTML = localidad);

  let establecimiento = document.getElementsByName("establecimiento")[0].value;
  let establecimientogenerado = (document.getElementById(
    "establecimientogenerado"
  ).innerHTML = establecimiento);

  let localizacion = document.getElementsByName("localizacion")[0].value;
  let localizagenerado = (document.getElementById(
    "localizagenerado"
  ).innerHTML = localizacion);

  let municipio = document.getElementsByName("municipio")[0].value;
  let municipiogenerado = (document.getElementById(
    "municipiogenerado"
  ).innerHTML = municipio);

  let provincia = document.getElementsByName("provincia")[0].value;
  let provinciagenerado = (document.getElementById(
    "provinciagenerado"
  ).innerHTML = provincia);

  let nombretestigo = document.getElementsByName("nombretestigo")[0].value;
  let nombretestigogenerado = (document.getElementById(
    "nombretestigogenerado"
  ).innerHTML = nombretestigo);

  let apellidostestigo =
    document.getElementsByName("apellidostestigo")[0].value;
  let apellidostestigogenerado = (document.getElementById(
    "apellidostestigogenerado"
  ).innerHTML = apellidostestigo);

  let dnitestigo = document.getElementsByName("dnitestigo")[0].value;
  let dnitestigogenerado = (document.getElementById(
    "dnitestigogenerado"
  ).innerHTML = dnitestigo);

  let telefono = document.getElementsByName("telefono")[0].value;
  let telefonogenerado = (document.getElementById(
    "telefonogenerado"
  ).innerHTML = telefono);

  let domiciliotestigo =
    document.getElementsByName("domiciliotestigo")[0].value;
  let domiciliotestigogenerado = (document.getElementById(
    "domiciliotestigogenerado"
  ).innerHTML = domiciliotestigo);

  let localidadtestigo =
    document.getElementsByName("localidadtestigo")[0].value;
  let localidadtestigogenerado = (document.getElementById(
    "localidadtestigogenerado"
  ).innerHTML = localidadtestigo);

  let adjuntar = document.getElementsByName("adjuntar")[0].value;
  let ladjuntargenerado = (document.getElementById(
    "adjuntargenerado"
  ).innerHTML = adjuntar);

  e.preventDefault();
}

form.addEventListener("submit", submitHandler);

const print = document.getElementById("print");
print.addEventListener("click", () => {
  const elementoParaConvertir = document.getElementById("cuerpo");
  html2pdf()
    .set({
      margin: 1,
      filename: "documento.pdf",
      image: {
        type: "jpeg",
        quality: 0.98,
      },
      html2canvas: {
        scale: 3,
        letterRendering: true,
      },
      jsPDF: {
        unit: "in",
        format: "a4",
        orientation: "portrait",
      },
    })
    .from(elementoParaConvertir)
    .save()
    .catch((err) => console.log(err));
});
