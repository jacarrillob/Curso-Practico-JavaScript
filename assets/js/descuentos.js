function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function calcularPrecioPorcentaje() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    discountValue
  );

  const ResultPrice = document.getElementById("ResultPrice");
  ResultPrice.innerHTML = "El precio con descuento es: $" + precioConDescuento;
}

// Solución #1: arrays y switch

function calcularPrecioDescuentoCupon1(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

const coupons = ["C1", "C2", "C3"];

function calcularPrecioCupon1() {
  const inputPrice1 = document.getElementById("InputPrice1");
  const priceValue1 = inputPrice1.value;

  const InputCupon1 = document.getElementById("InputCupon1");
  const discountValueCupon1 = InputCupon1.value;

  let descuento1;

  switch (discountValueCupon1) {
    case coupons[0]: // "C1"
      descuento1 = 15;
      break;
    case coupons[1]: // "C2"
      descuento1 = 30;
      break;
    case coupons[2]: // "C3"
      descuento1 = 25;
      break;
  }

  const precioConDescuento = calcularPrecioDescuentoCupon1(
    priceValue1,
    descuento1
  );

  const ResultCupon1 = document.getElementById("ResultCupon1");
  ResultCupon1.innerHTML = "El precio con descuento es: $" + precioConDescuento;
}

// Solución #2: legibilidad, error first y muerte al switch

function calcularPrecioDescuentoCupon2(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

const coupons2 = ["C1", "C2", "C3"];

function calcularPrecioCupon2() {
  const inputPrice2 = document.getElementById("InputPrice2");
  const priceValue2 = inputPrice2.value;

  const InputCupon2 = document.getElementById("InputCupon2");
  const discountValueCupon2 = InputCupon2.value;

  if (!coupons2.includes(discountValueCupon2)) {
    alert("El cupón " + discountValueCupon2 + "no es válido");
  } else if (discountValueCupon2 === "C1") {
    descuento2 = 15;
  } else if (discountValueCupon2 === "C2") {
    descuento2 = 30;
  } else if (discountValueCupon2 === "C3") {
    descuento2 = 25;
  }

  const precioConDescuento = calcularPrecioDescuentoCupon2(
    priceValue2,
    descuento2
  );

  const ResultCupon2 = document.getElementById("ResultCupon2");
  ResultCupon2.innerHTML = "El precio con descuento es: $" + precioConDescuento;
}

// Solución #3: arrays y condicionales mucho más inteligentes

function calcularPrecioDescuentoCupon3(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

const coupons3 = [
  {
    name: "C1",
    descuento3: 15,
  },
  {
    name: "C2",
    descuento3: 30,
  },
  {
    name: "C3",
    descuento3: 25,
  },
];

function calcularPrecioCupon3() {
  const inputPrice3 = document.getElementById("InputPrice3");
  const priceValue3 = inputPrice3.value;

  const InputCupon3 = document.getElementById("InputCupon3");
  const discountValueCupon3 = InputCupon3.value;

  const isCouponValueValid = function (coupon) {
    return coupon.name === discountValueCupon3;
  };

  const userCoupon = coupons3.find(isCouponValueValid);

  if (!userCoupon) {
    alert("El cupón " + discountValueCupon3 + "no es válido");
  } else {
    const descuento3 = userCoupon.descuento3;
    
    const precioConDescuento = calcularPrecioDescuentoCupon3(
      priceValue3,
      descuento3
    );

    const ResultCupon3 = document.getElementById("ResultCupon3");
    ResultCupon3.innerHTML =
      "El precio con descuento es: $" + precioConDescuento;
  }
}
