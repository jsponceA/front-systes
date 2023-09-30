import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
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
      label: "Producto-" + Math.random(),
      data: [11],
      //backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Producto-" + Math.random(),
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      //backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Producto-" + Math.random(),
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      //backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Producto-" + Math.random(),
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      //backgroundColor: "rgba(255, 99, 132, 0.5)",
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
            data={barData}
            options={{
              responsive: true,
              maintainAspectRatio: true,
              plugins: {
                title: {
                  display: true,
                  text: "PRODUCTOS MAS VENDIDOS EN LOS ULTIMOS 12 MESES",
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default GraficosIndex;
