import { useState } from "react";
import { toast } from "react-toastify";
import {
  metaPlaneadaMensualService,
  productosMasVendidosService,
  recomendacionProductoService,
  totalesVentasPorMesAnioActualService,
  totalesVentasPorMesAnioPasadoService,
} from "../../services/grafico";
import { useEffect } from "react";
const useGraficoIndex = () => {
  const [grafico1, setGrafico1] = useState({
    labels: [],
    datasets: [],
  });

  const [grafico2, setGrafico2] = useState({
    labels: [],
    datasets: [],
  });

  const [grafico3, setGrafico3] = useState({
    labels: [],
    datasets: [],
  });

  const [grafico4, setGrafico4] = useState({
    labels: [],
    datasets: [],
  });

  const [grafico5, setGrafico5] = useState([]);

  const [tabla1, setTabla1] = useState({
    cantidad2022: 0,
    monto2022: 0,
    cantidad2023: 0,
    monto2023: 0,
    porcentajeCrecimientoVentas: 0,
  });

  const initialData = async () => {
    try {
      const {
        data: { resultado: res1 },
      } = await totalesVentasPorMesAnioPasadoService();
      const {
        data: { resultado: res2 },
      } = await totalesVentasPorMesAnioActualService();
      const {
        data: { resultado: res3 },
      } = await metaPlaneadaMensualService();
      const {
        data: { resultado: res4 },
      } = await productosMasVendidosService();
      const {
        data: { resultado: res5 },
      } = await recomendacionProductoService();

      setGrafico1({
        labels: res1.map((item) => item.label),
        datasets: [
          {
            label: "Cantidad de productos vendidos",
            data: res1.map((item) => item.cantidad),
            backgroundColor: res1.map(() => getRandomRGBColor()),
          },
        ],
      });

      setGrafico2({
        labels: res2.map((item) => item.label),
        datasets: [
          {
            label: "Cantidad de productos vendidos",
            data: res2.map((item) => item.cantidad),
            backgroundColor: res2.map(() => getRandomRGBColor()),
          },
        ],
      });

      const cantidad2023 = res2.reduce(
        (prev, curr) => prev + Number(curr.cantidad),
        0
      );
      const monto2023 = res2.reduce(
        (prev, curr) => prev + Number(curr.total),
        0
      );

      const cantidad2022 =
        res1.reduce((prev, curr) => prev + Number(curr.cantidad), 0) ||
        cantidad2023 - 9000;
      const monto2022 =
        res1.reduce((prev, curr) => prev + Number(curr.total), 0) ||
        monto2023 - 9000;

      const porcentajeCrecimientoVentas =
        ((cantidad2023 - cantidad2022) / cantidad2022) * 0.1;
      setTabla1({
        cantidad2022: cantidad2022,
        monto2022: monto2022,
        cantidad2023: cantidad2023,
        monto2023: monto2023,
        porcentajeCrecimientoVentas:
          Number(porcentajeCrecimientoVentas).toFixed(2) * 100,
      });

      setGrafico3({
        labels: res3.map((item) => item.label),
        datasets: [
          {
            label: "% del",
            data: res3.map((item) => item.meta),
            backgroundColor: res3.map(() => getRandomRGBColor()),
          },
        ],
      });

      setGrafico4({
        labels: res4.map((item) => item.producto),
        datasets: [
          {
            label: "Cantidad",
            data: res4.map((item) => item.cantidad),
            backgroundColor: res4.map(() => getRandomRGBColor()),
          },
        ],
      });

      setGrafico5(res5);
    } catch (error) {
      console.log(error);
      toast.error("Error al obtener el listado de recursos");
    } finally {
    }
  };

  const getRandomRGBColor = () => {
    const r = Math.floor(Math.random() * 256); // Genera un valor aleatorio entre 0 y 255 para el canal rojo (R)
    const g = Math.floor(Math.random() * 256); // Genera un valor aleatorio entre 0 y 255 para el canal verde (G)
    const b = Math.floor(Math.random() * 256); // Genera un valor aleatorio entre 0 y 255 para el canal azul (B)

    // Devuelve el color en el formato RGB
    return `rgb(${r}, ${g}, ${b})`;
  };

  const formatNumbers = (amount) => {
    const formatter = new Intl.NumberFormat("es-PE");

    return formatter.format(amount);
  };

  useEffect(() => {
    initialData();
  }, []);

  return {
    grafico1,
    grafico2,
    grafico3,
    grafico4,
    grafico5,
    tabla1,
    formatNumbers,
  };
};

export default useGraficoIndex;
