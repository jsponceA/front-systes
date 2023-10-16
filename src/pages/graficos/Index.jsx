import { Chart as ChartJS, registerables } from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import useGraficoIndex from "../../hooks/graficos/useGraficoIndex";

ChartJS.register(...registerables);

const GraficosIndex = () => {
  const {
    grafico1,
    grafico2,
    grafico3,
    grafico4,
    grafico5,
    tabla1,
    formatNumbers,
  } = useGraficoIndex();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <Bar
            data={grafico1}
            options={{
              responsive: true,
              maintainAspectRatio: true,
              plugins: {
                title: {
                  display: true,
                  text: "CANTIDAD DE PRODUCTOS VENDIDOS EN EL AÑO - 2022",
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
            data={grafico2}
            options={{
              responsive: true,
              maintainAspectRatio: true,
              plugins: {
                title: {
                  display: true,
                  text: "CANTIDAD DE PRODUCTOS VENDIDOS EN EL AÑO - 2023",
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
                    (%) PORCENTAJE DE CRECIMIENTO DE VENTAS ANUAL{" "}
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
                  <td>{formatNumbers(tabla1.cantidad2022)} Unidades</td>
                  <td>S/ {formatNumbers(tabla1.monto2022)}</td>
                  <td>{formatNumbers(tabla1.cantidad2023)} Unidades</td>
                  <td>S/ {formatNumbers(tabla1.monto2023)}</td>
                  <td className="text-center">
                    <p className="fs-2 my-auto">
                      {tabla1.porcentajeCrecimientoVentas}%
                    </p>
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
            data={grafico3}
            options={{
              responsive: true,
              maintainAspectRatio: true,
              plugins: {
                title: {
                  display: true,
                  text: "PORCENTAJE DE VENTAS PLANEADAS PARA CADA MES - 2023",
                },
              },
            }}
          />
        </div>
        <div className="col-md-6">
          <Bar
            data={grafico4}
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
                  text: "PRODUCTOS MAS VENDIDOS EN LOS ULTIMOS 12 MESES",
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
                    <p className="fs-2 my-auto">52%</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-12 my-3">
          <hr />
        </div>
        <div className="col-md-12 my-3">
          <div className="table-responsive">
            <table className="table table-sm table-hover table-bordered custom-table ">
              <thead>
                <tr className="text-nowrap">
                  <td className="text-center ">
                    SE RECOMIENDA COMPRAR EL SIGUIENTE PRODUCTO PARA LOS
                    PROXIMOS MESES{" "}
                  </td>
                  <td>
                    PORCENTAJE DE CRECIMIENTO DE VENTAS DE ESTE PRODUCTO PARA EL
                    PROXIMO MES
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">
                    <p className="fs-2 my-auto">{grafico5.producto}</p>
                  </td>
                  <td className="text-center">
                    <p className="fs-2 my-auto">10%</p>
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
