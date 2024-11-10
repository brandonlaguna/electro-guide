export function notacionCientifica(
  numero: number,
  digitosSignificativos: number
) {
  if (numero === 0) {
    return 0;
  }
  if (numero >= 1 && numero < 1000) {
    return numero.toFixed(2);
  } else {
    let exponente = Math.floor(Math.log10(Math.abs(numero)));
    let mantisa = numero / Math.pow(10, exponente);
    let mantisaString = mantisa.toString();
    // Encontrar el punto decimal y cortar la mantisa
    let puntoDecimalIndex = mantisaString.indexOf(".");
    let mantisaCortada = mantisaString.slice(
      0,
      puntoDecimalIndex + digitosSignificativos + 2
    );
    return mantisaCortada + "x10^" + exponente;
  }
}

export const replaceIllegalCharacter = (
  value: any,
  legalCharacter: string
): string => {
  const chars = value.split("");
  let response = "";
  for (const letra of chars) {
    if (letra.match(legalCharacter) !== null) {
      response += letra;
    }
  }
  return response;
};

export const maskOnAxis = (e: string, setValue: any) => {
  let validX = "0";
  let validY = "0";
  const separated: string[] = replaceIllegalCharacter(e, "^[0-9,]+$")
    .substring(0, 100)
    .split(",");
  if (separated.length > 0 && separated.length <= 2) {
    let numberX: number = parseInt(separated[0]);
    let numberY: number = parseInt(separated[1]);
    if (numberX != undefined && numberX > 0) {
      if (numberX <= 100) {
        validX = numberX.toString();
      } else {
        validX = numberX.toString().substring(0, 2);
      }
    }

    if (numberY != undefined && numberY > 0) {
      if (numberY <= 100) {
        validY = numberY.toString();
      } else {
        validY = numberY.toString().substring(0, 2);
      }
    }
  }
  setValue(`${validX},${validY}`);
};
