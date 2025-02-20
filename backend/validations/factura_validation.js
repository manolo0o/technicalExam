export const validateCantidad = (cantidad, saldo) => {
  if (cantidad > saldo) {
    return 'La cantidad no puede ser mayor al saldo disponible.';
  }
  return '';
};

export const calculateTotalProd = (precioUnitario, cantidad) => {
  return precioUnitario * cantidad;
};

export const calculateTotal = (totalProd) => {
  return totalProd; // Assuming only one product for simplicity
};