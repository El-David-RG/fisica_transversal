function calcularPagoAgua(consumo_m3) {

    const tarifasAbastecimiento = [11.35, 0.1445, 0.1858, 0.8256, 1.1869, 1.2901];
    const tarifasAlcantarillado = [5.68, 0.0723, 0.0929, 0.4129, 0.5935, 0.6450];


    const cuotaFijaAbastecimiento = 11.52;
    const cuotaFijaAlcantarillado = 5.77;


    let tarifaAbastecimiento = tarifasAbastecimiento[tarifasAbastecimiento.length - 1];
    let tarifaAlcantarillado = tarifasAlcantarillado[tarifasAlcantarillado.length - 1];

    for (let i = 0; i < tarifasAbastecimiento.length; i++) {
        if (consumo_m3 <= (i + 1) * 15) {
            tarifaAbastecimiento = tarifasAbastecimiento[i];
            break;
        }
    }

    for (let i = 0; i < tarifasAlcantarillado.length; i++) {
        if (consumo_m3 <= (i + 1) * 15) {
            tarifaAlcantarillado = tarifasAlcantarillado[i];
            break;
        }
    }


    const costoTotalSinIVA = cuotaFijaAbastecimiento + (tarifaAbastecimiento * consumo_m3) +
        cuotaFijaAlcantarillado + (tarifaAlcantarillado * consumo_m3);


    const costoTotalConIVA = costoTotalSinIVA * 1.10;

    return costoTotalConIVA;
}


const consumo = 5;
const pagoTotal = calcularPagoAgua(consumo);
console.log("El pago total a realizar es:", pagoTotal.toFixed(2), "€");
