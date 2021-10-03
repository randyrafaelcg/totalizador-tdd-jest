describe("Totalizador ", () => {
  it("deberia calcular para un cantidad", () => {
    expect(calcularTotal(2, 1, "")).toEqual(2);
  });
  it("deberia calcular para un cantidad", () => {
    expect(calcularTotal(2, 2, "")).toEqual(4);
  });
  it("deberia calcular para un estado por defecto", () => {
    expect(calcularTotal(2, 2, "CA")).toEqual(4.33);
  });
  it("deberia calcular para un estado por defecto", () => {
    expect(calcularTotal(3, 2, "CA")).toEqual(6.495);
  });
  it("deberia calcular para un estado por defecto", () => {
    expect(calcularTotal(3, 2, "UT")).toEqual(6.399);
  });
  it("deberia calcular para un estado por defecto", () => {
    expect(calcularTotal(3, 2, "TX")).toEqual(6.375);
  });
  it("deberia calcular para un estado por defecto", () => {
    expect(calcularTotal(3, 2, "NV")).toEqual(6.48);
  });
  it("deberia calcular para un descuento", () => {
    expect(calcularTotal(1000, 1, "")).toEqual(970);
  });
  it("deberia calcular para un descuento", () => {
    expect(calcularTotal(3000, 1, "")).toEqual(2850);
  });
  it("deberia calcular para un descuento", () => {
    expect(calcularTotal(7000, 1, "")).toEqual(6510);
  });
  it("deberia calcular para un descuento", () => {
    expect(calcularTotal(10000, 1, "")).toEqual(9000);
  });
  it("deberia calcular para un descuento", () => {
    expect(calcularTotal(30000, 1, "")).toEqual(25500);
  });
});

function impuestoEstado(estado) {
  let impuestos = { CA: 0.0825, UT: 0.0665, NV: 0.08, TX: 0.0625, AL: 0.04, "": 0 };
  return impuestos[estado];
}

function Descuento(res)
{
    let valordescuento=0;
    if(res<1000)
        valordescuento=0;
        else if(res>=1000 && res<3000)
            valordescuento = 0.03;
            else if(res>=3000 && res<7000)
                valordescuento = 0.05;
                else if(res>=7000 && res<10000)
                    valordescuento = 0.07;
                    else if(res>=10000 && res<30000)
                        valordescuento = 0.1;
                        else if(res>=30000)
                            valordescuento = 0.15;
    res = res * valordescuento;
    return res;
}

function calcularTotal(cantidad, precio, estado) {
  let subTotal = cantidad * precio;
  let impuesto = impuestoEstado(estado);

  subTotal = subTotal + subTotal * impuesto - Descuento(subTotal);
  return subTotal;
}