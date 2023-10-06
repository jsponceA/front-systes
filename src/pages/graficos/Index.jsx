import { Chart as ChartJS, registerables } from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import useGraficoIndex from "../../hooks/graficos/useGraficoIndex";

ChartJS.register(...registerables);

const labels = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Setiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const data = {
  labels,
  datasets: [
    {
      label: "Cantidad de productos vendidos",
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: [
        "rgb(240, 163, 10)",
        "rgb(135, 206, 235)",
        "rgb(154, 205, 50)",
        "rgb(255, 105, 180)",
        "rgb(72, 61, 139)",
        "rgb(50, 205, 50)",
        "rgb(255, 69, 0)",
        "rgb(173, 216, 230)",
        "rgb(255, 140, 0)",
        "rgb(218, 112, 214)",
        "rgb(255, 99, 71)",
        "rgb(60, 179, 113)",
      ],
      borderColor: [
        "rgb(240, 163, 10)",
        "rgb(135, 206, 235)",
        "rgb(154, 205, 50)",
        "rgb(255, 105, 180)",
        "rgb(72, 61, 139)",
        "rgb(50, 205, 50)",
        "rgb(255, 69, 0)",
        "rgb(173, 216, 230)",
        "rgb(255, 140, 0)",
        "rgb(218, 112, 214)",
        "rgb(255, 99, 71)",
        "rgb(60, 179, 113)",
      ],
    },
  ],
};

const pieData = {
  labels,
  datasets: [
    {
      label: "Meta planeada",
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: [
        "rgb(240, 163, 10)",
        "rgb(135, 206, 235)",
        "rgb(154, 205, 50)",
        "rgb(255, 105, 180)",
        "rgb(72, 61, 139)",
        "rgb(50, 205, 50)",
        "rgb(255, 69, 0)",
        "rgb(173, 216, 230)",
        "rgb(255, 140, 0)",
        "rgb(218, 112, 214)",
        "rgb(255, 99, 71)",
        "rgb(60, 179, 113)",
      ],
      borderColor: [
        "rgb(240, 163, 10)",
        "rgb(135, 206, 235)",
        "rgb(154, 205, 50)",
        "rgb(255, 105, 180)",
        "rgb(72, 61, 139)",
        "rgb(50, 205, 50)",
        "rgb(255, 69, 0)",
        "rgb(173, 216, 230)",
        "rgb(255, 140, 0)",
        "rgb(218, 112, 214)",
        "rgb(255, 99, 71)",
        "rgb(60, 179, 113)",
      ],
    },
  ],
};

const GraficosIndex = () => {
  const {
    listadoGraficos,
    productosMasVendidos,
    handleChangeFiltrosGrafico,
    isLoadingGraficos,
    modalEliminarGrafico,
    setModalEliminarGrafico,
    idGraficoProp,
    handleKeyInputFiltros,
    handlePageClick,
    openModalEliminar,
    barData,
  } = useGraficoIndex();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <Bar
            data={data}
            options={{
              responsive: true,
              maintainAspectRatio: true,
              plugins: {
                title: {
                  display: true,
                  text: "PRODUCTOS MAS VENDIDOS EN LOS ULTIMOS 12 MESES - 2022",
                },
              },
            }}
          />
        </div>
        <div className="col-md-12 my-3">
          <hr />
        </div>
        <div className="col-md-12">
          <Bar
            data={data}
            options={{
              responsive: true,
              maintainAspectRatio: true,
              plugins: {
                title: {
                  display: true,
                  text: "PRODUCTOS MAS VENDIDOS EN LOS ULTIMOS 12 MESES - 2023",
                },
              },
            }}
          />
        </div>
        <div className="col-md-12 my-3">
          <hr />
        </div>
        <div className="col-md-12 my-3">
          <div className="table-responsive">
            <table className="table table-sm table-hover table-bordered custom-table ">
              <thead>
                <tr className="text-nowrap">
                  <td colSpan={2} className="text-center">
                    VENTAS DEL AÑOS PASADO ( 2022 )
                  </td>
                  <td colSpan={2} className="text-center">
                    VENTAS DEL AÑO ACTUAL ( 2023 )
                  </td>
                  <td rowSpan={2} className="text-center ">
                    (%) PORCENTAJE DE CRECIMIENTO DE VENTAS{" "}
                  </td>
                </tr>
                <tr className="text-nowrap">
                  <td className="text-center">CANTIDAD</td>
                  <td className="text-center">MONTO (S/)</td>
                  <td className="text-center">CANTIDAD</td>
                  <td className="text-center">MONTO (S/)</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>123456</td>
                  <td>S/ 484848</td>
                  <td>123456</td>
                  <td>S/ 484848</td>
                  <td className="text-center">
                    <p className="fs-2 my-auto">45%</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-12 my-3">
          <hr />
        </div>
        <div className="col-md-6">
          <Pie
            data={pieData}
            options={{
              responsive: true,
              maintainAspectRatio: true,
              plugins: {
                title: {
                  display: true,
                  text: "META PLANEADA PARA CADA MES - 2023",
                },
              },
            }}
          />
        </div>
        <div className="col-md-6">
          <Bar
            data={data}
            options={{
              responsive: true,
              maintainAspectRatio: true,
              indexAxis: "y",
              elements: {
                bar: {
                  borderWidth: 2,
                },
              },
              plugins: {
                legend: {
                  display: false,
                  position: "right",
                },
                title: {
                  display: true,
                  text: "PRODUCTOS MAS VENDIDOS",
                },
              },
            }}
          />
        </div>
        <div className="col-md-12 my-3">
          <hr />
        </div>
        <div className="col-md-12 my-3">
          <div className="table-responsive">
            <table className="table table-sm table-hover table-bordered custom-table ">
              <thead>
                <tr className="text-nowrap">
                  <td className="text-center ">(%) NIVEL DE EFICACIA </td>
                  <td className="text-center ">(%) NIVEL DE PRODUCTIVIDAD </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">
                    <p className="fs-2 my-auto">37%</p>
                  </td>
                  <td className="text-center">
                    <p className="fs-2 my-auto">72%</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraficosIndex;
