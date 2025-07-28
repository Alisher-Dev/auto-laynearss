import {
  IModel,
  IColors,
  IVariants,
  IValues,
  IAttribute,
  ISpecialOffer,
} from "@/types/type";

//  атрибуты, которые могут быть у любой машины
export const allAttributes: IAttribute[] = [
  {
    id: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    icon: "/icon-engine.svg",
    name: { uz: "Dvigatel", ru: "Двигатель" },
  },
  {
    id: 2,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    icon: "/icon-speed.svg",
    name: { uz: "Maks. Tezlik", ru: "Макс. Скорость" },
  },
  {
    id: 3,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    icon: "/icon-transmission.svg",
    name: { uz: "Transmissiya", ru: "Трансмиссия" },
  },
  {
    id: 4,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    icon: "/icon-fuel.svg",
    name: { uz: "Yoqilg'i sarfi", ru: "Расход топлива" },
  },
  {
    id: 5,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    icon: "/icon-capacity.svg",
    name: { uz: "Yukxona hajmi", ru: "Объем багажника" },
  },
  {
    id: 6,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    icon: "/icon-drive.svg",
    name: { uz: "Privod", ru: "Привод" },
  },
  {
    id: 7,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    icon: "/icon-power.svg",
    name: { uz: "Quvvat", ru: "Мощность" },
  },
  {
    id: 8,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    icon: "/icon-acceleration.svg",
    name: { uz: "0-100 km/s tezlanish", ru: "Разгон 0-100 км/ч" },
  },
];

// Все возможные значения для атрибутов всех машин
export const allValues: IValues[] = [
  // Coptiva (modelId: 1)
  {
    id: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "1.5L Turbo", ru: "1.5Л Турбо" },
    attribute: allAttributes[0],
  },
  {
    id: 2,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "180 km/soat", ru: "180 км/ч" },
    attribute: allAttributes[1],
  },
  {
    id: 3,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "6-pog'onali avtomat", ru: "6-ступ. автомат" },
    attribute: allAttributes[2],
  },
  {
    id: 4,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "147 o.k.", ru: "147 л.с." },
    attribute: allAttributes[6],
  },
  {
    id: 5,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "429 L / 1051 L", ru: "429 Л / 1051 Л" },
    attribute: allAttributes[4],
  },
  {
    id: 6,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "Aralash: 8.7 L", ru: "Смешанный: 8.7 Л" },
    attribute: allAttributes[3],
  },
  {
    id: 7,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "Old g'ildirakdan tortish", ru: "Передний привод" },
    attribute: allAttributes[5],
  },
  {
    id: 8,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "9.5 soniya", ru: "9.5 сек" },
    attribute: allAttributes[7],
  },

  // Cobalt (modelId: 3)
  {
    id: 15,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "1.5L DOHC", ru: "1.5Л DOHC" },
    attribute: allAttributes[0],
  },
  {
    id: 16,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "563 L", ru: "563 Л" },
    attribute: allAttributes[4],
  },
  {
    id: 17,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "106 o.k.", ru: "106 л.с." },
    attribute: allAttributes[6],
  },
  {
    id: 18,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "6-pog'onali avtomat", ru: "6-ступ. автомат" },
    attribute: allAttributes[2],
  },
  {
    id: 19,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "Aralash: 6.7 L", ru: "Смешанный: 6.7 Л" },
    attribute: allAttributes[3],
  },
  {
    id: 20,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "12.6 soniya", ru: "12.6 сек" },
    attribute: allAttributes[7],
  },
  {
    id: 21,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "5-pog'onali mexanika", ru: "5-ступ. механика" },
    attribute: allAttributes[2],
  },
  {
    id: 22,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "11.7 soniya", ru: "11.7 сек" },
    attribute: allAttributes[7],
  },

  // Onix (modelId: 5)
  {
    id: 28,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "1.2L Turbo", ru: "1.2Л Турбо" },
    attribute: allAttributes[0],
  },
  {
    id: 29,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "6-pog'onali avtomat", ru: "6-ступ. автомат" },
    attribute: allAttributes[2],
  },
  {
    id: 30,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "132 o.k.", ru: "132 л.с." },
    attribute: allAttributes[6],
  },
  {
    id: 31,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "Aralash: 5.9 L", ru: "Смешанный: 5.9 Л" },
    attribute: allAttributes[3],
  },
  {
    id: 32,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "469 L", ru: "469 Л" },
    attribute: allAttributes[4],
  },

  // Tracker (modelId: 6)
  {
    id: 33,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "1.2L Turbo", ru: "1.2Л Турбо" },
    attribute: allAttributes[0],
  },
  {
    id: 34,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "Old privod", ru: "Передний привод" },
    attribute: allAttributes[5],
  },
  {
    id: 35,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "132 o.k.", ru: "132 л.с." },
    attribute: allAttributes[6],
  },
  {
    id: 36,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "6-pog'onali avtomat", ru: "6-ступ. автомат" },
    attribute: allAttributes[2],
  },
  {
    id: 37,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "390 L", ru: "390 Л" },
    attribute: allAttributes[4],
  },

  // Malibu (modelId: 7)
  {
    id: 38,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "2.0L Turbo", ru: "2.0Л Турбо" },
    attribute: allAttributes[0],
  },
  {
    id: 39,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "250 km/soat", ru: "250 км/ч" },
    attribute: allAttributes[1],
  },
  {
    id: 40,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "253 o.k.", ru: "253 л.с." },
    attribute: allAttributes[6],
  },
  {
    id: 41,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "9-pog'onali avtomat", ru: "9-ступ. автомат" },
    attribute: allAttributes[2],
  },
  {
    id: 42,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "1.5L Turbo", ru: "1.5Л Турбо" },
    attribute: allAttributes[0],
  },
  {
    id: 43,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "163 o.k.", ru: "163 л.с." },
    attribute: allAttributes[6],
  },
  {
    id: 44,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "Variator (CVT)", ru: "Вариатор (CVT)" },
    attribute: allAttributes[2],
  },

  // Damas (modelId: 8)
  {
    id: 45,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "0.8L", ru: "0.8Л" },
    attribute: allAttributes[0],
  },
  {
    id: 46,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "5-pog'onali mexanika", ru: "5-ступ. механика" },
    attribute: allAttributes[2],
  },
  {
    id: 47,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "38 o.k.", ru: "38 л.с." },
    attribute: allAttributes[6],
  },
  {
    id: 48,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "Orqa privod", ru: "Задний привод" },
    attribute: allAttributes[5],
  },
  {
    id: 49,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "7 o'rin / 450 kg yuk", ru: "7 мест / 450 кг груза" },
    attribute: allAttributes[4],
  },

  // Labo (modelId: 9)
  {
    id: 50,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "0.8L", ru: "0.8Л" },
    attribute: allAttributes[0],
  },
  {
    id: 51,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "550 kg yuk", ru: "Груз 550 кг" },
    attribute: allAttributes[4],
  },
  {
    id: 52,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "38 o.k.", ru: "38 л.с." },
    attribute: allAttributes[6],
  },
  {
    id: 53,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "5-pog'onali mexanika", ru: "5-ступ. механика" },
    attribute: allAttributes[2],
  },
  {
    id: 54,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "Orqa privod", ru: "Задний привод" },
    attribute: allAttributes[5],
  },

  // Equinox (modelId: 10)
  {
    id: 55,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "2.0L Turbo", ru: "2.0Л Турбо" },
    attribute: allAttributes[0],
  },
  {
    id: 56,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "To'liq privod (AWD)", ru: "Полный привод (AWD)" },
    attribute: allAttributes[5],
  },
  {
    id: 57,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "237 o.k.", ru: "237 л.с." },
    attribute: allAttributes[6],
  },
  {
    id: 58,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "9-pog'onali avtomat", ru: "9-ступ. автомат" },
    attribute: allAttributes[2],
  },
  {
    id: 59,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "846 L", ru: "846 Л" },
    attribute: allAttributes[4],
  },
  {
    id: 60,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "1.5L Turbo", ru: "1.5Л Турбо" },
    attribute: allAttributes[0],
  },
  {
    id: 61,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "175 o.k.", ru: "175 л.с." },
    attribute: allAttributes[6],
  },
  {
    id: 62,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "Old privod", ru: "Передний привод" },
    attribute: allAttributes[5],
  },
];

// Все возможные цвета для всех моделей (НЕ ТРОНУТО)
export const allColors: IColors[] = [
  // Coptiva (modelId: 1)
  {
    id: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    image: ["https://chevrolet.uz/assets/images/captiva/colors/GIR.png"],
    modelId: 1,
    name: { uz: "Kulrang", ru: "Серый" },
    value: "#808080",
  },
  {
    id: 2,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    image: ["https://chevrolet.uz/assets/images/captiva/colors/J0U.png"],
    modelId: 1,
    name: { uz: "Qizil", ru: "Красный" },
    value: "#FF0000",
  },
  // Cobalt (modelId: 3)
  {
    id: 5,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    image: ["https://chevrolet.uz/assets/images/cobalt/colours/1.png"],
    modelId: 3,
    name: { uz: "Oq", ru: "Белый" },
    value: "#FFFFFF",
  },
  {
    id: 6,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    image: ["https://chevrolet.uz/assets/images/cobalt/colours/6.png"],
    modelId: 3,
    name: { uz: "Moviy", ru: "Синий" },
    value: "#0000FF",
  },
  // Onix (modelId: 5)
  {
    id: 9,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    image: [
      "https://olamavto.uz/uploads/products/2TR3qVwZdUOIFNePR4m7MWDFtn5Xnmg1NghlwErL.png",
    ],
    modelId: 5,
    name: { uz: "Oq", ru: "Белый" },
    value: "#FFFFFF",
  },
  {
    id: 10,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    image: ["https://chevrolet.uz/assets/images/onix/colors/01/4.png"],
    modelId: 5,
    name: { uz: "Moviy", ru: "Синий" },
    value: "#2c5c8c",
  },
  // Tracker (modelId: 6)
  {
    id: 11,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    image: [
      "https://chevrolet.com.ph/wp-content/uploads/2022/08/tracker-Agate-Red-Metallic-min.png",
    ],
    modelId: 6,
    name: { uz: "Qizil", ru: "Красный" },
    value: "#c00109",
  },
  {
    id: 12,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    image: [
      "https://chevrolet.com.ph/wp-content/uploads/2022/08/tracker-Black-Meet-Kettle-Metallic-min.png",
    ],
    modelId: 6,
    name: { uz: "Qora", ru: "Черный" },
    value: "#000000",
  },
  // Malibu (modelId: 7)
  {
    id: 13,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    image: [
      "https://ddztmb1ahc6o7.cloudfront.net/bannisterchevkamloops/wp-content/uploads/2024/03/26140043/2024.malibu.profile.png",
    ],
    modelId: 7,
    name: { uz: "Kulrang", ru: "Серый" },
    value: "#808080",
  },
  {
    id: 14,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    image: [
      "https://inv.assets.sincrod.com/ChromeColorMatch/us/TRANSPARENT_cc_2024CHC110016_01_1280_GAZ.png",
    ],
    modelId: 7,
    name: { uz: "Oq", ru: "Белый" },
    value: "#FFFFFF",
  },
  // Damas (modelId: 8)
  {
    id: 15,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    image: ["https://chevrolet.uz/assets/icons/new/Damas.png"],
    modelId: 8,
    name: { uz: "Oq", ru: "Белый" },
    value: "#FFFFFF",
  },
  // Labo (modelId: 9)
  {
    id: 16,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    image: ["https://chevrolet.uz/assets/images/labo/colors/01.png"],
    modelId: 9,
    name: { uz: "Oq", ru: "Белый" },
    value: "#FFFFFF",
  },
  // Equinox (modelId: 10)
  {
    id: 17,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    image: ["https://chevrolet.uz/assets/images/equinox/colours/6.png"],
    modelId: 10,
    name: { uz: "Qora", ru: "Черный" },
    value: "#000000",
  },
];

// Все возможные варианты (комплектации) для всех моделей
export const allVariants: IVariants[] = [
  // Coptiva (modelId: 1)
  {
    id: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    modelId: 1, // Предположим, Captiva — modelId: 2
    title: { uz: "LT Turbo", ru: "LT Turbo" },
    description: {
      uz: "Boshlang'ich komplektatsiya, 1.5 turbo motor va avtomat uzatma",
      ru: "Базовая комплектация с 1.5 турбо мотором и автоматической коробкой",
    },
    discount: 0,
    price: 235000000,
    values: [allValues[0], allValues[4], allValues[6], allValues[7]],
  },
  {
    id: 2,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    modelId: 1,
    title: { uz: "Premier Plus", ru: "Premier Plus" },
    description: {
      uz: "To‘liq to‘plam: charm salon, panoramali tom, 360 kamera",
      ru: "Максимальная комплектация: кожаный салон, панорамная крыша, 360 камера",
    },
    discount: 0,
    price: 275000000,
    values: [
      allValues[0],
      allValues[1],
      allValues[2],
      allValues[3],
      allValues[4],
      allValues[5],
    ],
  },
  // Cobalt (modelId: 3)
  {
    id: 5,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    modelId: 3,
    title: { uz: "LS MT", ru: "LS MT" },
    description: { uz: "Mexanika, bazaviy", ru: "Механика, базовый" },
    discount: 0,
    price: 125000000,
    values: [
      allValues[14],
      allValues[15],
      allValues[16],
      allValues[20],
      allValues[21],
    ],
  },
  {
    id: 6,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    modelId: 3,
    title: { uz: "LTZ AT", ru: "LTZ AT" },
    description: {
      uz: "To'liq komplektatsiya, avtomat",
      ru: "Полная комплектация, автомат",
    },
    discount: 5,
    price: 141000000,
    values: [
      allValues[14],
      allValues[15],
      allValues[16],
      allValues[17],
      allValues[18],
      allValues[19],
    ],
  },
  // Onix (modelId: 5)
  {
    id: 8,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    modelId: 5,
    title: { uz: "1LT MT", ru: "1LT MT" },
    description: {
      uz: "Turbo dvigatelli boshlang'ich versiya",
      ru: "Начальная версия с турбо-двигателем",
    },
    discount: 0,
    price: 185000000,
    values: [allValues[27], allValues[29], allValues[31], allValues[32]],
  },
  {
    id: 9,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    modelId: 5,
    title: { uz: "Premier 2 AT", ru: "Premier 2 AT" },
    description: {
      uz: "Maksimal texnologiyalar",
      ru: "Максимум технологий",
    },
    discount: 0,
    price: 210000000,
    values: [
      allValues[27],
      allValues[28],
      allValues[29],
      allValues[30],
      allValues[31],
      allValues[32],
    ],
  },
  // Tracker (modelId: 6)
  {
    id: 10,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    modelId: 6,
    title: { uz: "LS AT", ru: "LS AT" },
    description: {
      uz: "Boshlang'ich krossover komplektatsiyasi",
      ru: "Базовая комплектация кроссовера",
    },
    discount: 0,
    price: 225000000,
    values: [
      allValues[33],
      allValues[34],
      allValues[35],
      allValues[36],
      allValues[37],
    ],
  },
  {
    id: 11,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    modelId: 6,
    title: { uz: "Redline AT", ru: "Redline AT" },
    description: {
      uz: "Sport uslubidagi shahar krossoveri",
      ru: "Городской кроссовер в спортивном стиле",
    },
    discount: 0,
    price: 285000000,
    values: [
      allValues[33],
      allValues[34],
      allValues[35],
      allValues[36],
      allValues[37],
    ],
  },
  // Malibu (modelId: 7)
  {
    id: 12,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    modelId: 7,
    title: { uz: "LT 1.5L Turbo", ru: "LT 1.5Л Турбо" },
    description: {
      uz: "Tejamkor biznes-klass",
      ru: "Экономичный бизнес-класс",
    },
    discount: 10,
    price: 330000000,
    values: [allValues[42], allValues[43], allValues[44]],
  },
  {
    id: 13,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    modelId: 7,
    title: { uz: "Premier 2.0L Turbo", ru: "Premier 2.0Л Турбо" },
    description: {
      uz: "Maksimal quvvat va hashamat",
      ru: "Максимум мощности и роскоши",
    },
    discount: 10,
    price: 401000000,
    values: [allValues[38], allValues[39], allValues[40], allValues[41]],
  },
  // Damas (modelId: 8)
  {
    id: 14,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    modelId: 8,
    title: { uz: "D2 STYLE  PLUS", ru: "D2 STYLE  PLUS" },
    description: {
      uz: "7 o'rinli yo'lovchi versiyasi",
      ru: "Пассажирская версия на 7 мест",
    },
    discount: 0,
    price: 96932000,
    values: [
      allValues[45],
      allValues[46],
      allValues[47],
      allValues[48],
      allValues[49],
    ],
  },
  {
    id: 15,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    modelId: 8,
    title: { uz: "Van", ru: "Van" },
    description: {
      uz: "Yuk tashish uchun furgon",
      ru: "Грузовой фургон для перевозок",
    },
    discount: 0,
    price: 92000000,
    values: [allValues[45], allValues[46], allValues[47], allValues[48]],
  },
  // Labo (modelId: 9)
  {
    id: 16,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    modelId: 9,
    title: { uz: "Standart", ru: "Стандарт" },
    description: {
      uz: "Ochiq bortli kichik yuk mashinasi",
      ru: "Компактный грузовик с открытым бортом",
    },
    discount: 0,
    price: 96000000,
    values: [
      allValues[50],
      allValues[51],
      allValues[52],
      allValues[53],
      allValues[54],
    ],
  },
  // Equinox (modelId: 10)
  {
    id: 17,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    modelId: 10,
    title: { uz: "LT 1.5L FWD", ru: "LT 1.5Л FWD" },
    description: {
      uz: "Old privodli qulay krossover",
      ru: "Комфортный кроссовер с передним приводом",
    },
    discount: 0,
    price: 380000000,
    values: [allValues[59], allValues[60], allValues[61], allValues[62]],
  },
  {
    id: 18,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    modelId: 10,
    title: { uz: "RS 2.0L AWD", ru: "RS 2.0Л AWD" },
    description: {
      uz: "To'liq privodli sport versiyasi",
      ru: "Спортивная версия с полным приводом",
    },
    discount: 0,
    price: 445000000,
    values: [
      allValues[55],
      allValues[56],
      allValues[57],
      allValues[58],
      allValues[59],
    ],
  },
];

// =================================================================
// 🚗 ГЛАВНЫЙ МАССИВ С МОДЕЛЯМИ АВТОМОБИЛЕЙ
// =================================================================
// Этот массив собирает все данные, фильтруя их по `modelId`.
// =================================================================
export const model: IModel[] = [
  {
    id: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    name: { uz: "Chevrolet Captiva ", ru: "Шевроле Каптива" },
    description: {
      uz: "Shahar uchun ixcham avtomobil",
      ru: "Компактный автомобиль для города",
    },
    content: {
      uz: `<h3>Chevrolet Captiva: Shahar Ritmida Yorqin Harakatlaning</h3>
           <h4>Dinamik va Tejamkor</h4>
           <p>Chevrolet Captiva – bu shahar hayotining dinamik ritmi uchun yaratilgan ixcham va chaqqon xetchbek. Uning 1.25 litrli tejamkor dvigateli yoqilg'i sarfini kamaytiradi (shahar rejimida 30 mpg va trassada 38 mpg), bu esa har kunlik qatnovlar uchun ideal tanlovdir. [16] Kichik o'lchamlari va ajoyib manevr qobiliyati tufayli tirbandliklarda harakatlanish va tor joylarga parkovka qilish osonlashadi. [36] Captiva – bu faqatgina avtomobil emas, bu sizning shahar sarguzashtlaridagi ishonchli hamrohingizdir.</p>
           <h4>Zamonaviy Texnologiyalar va Qulaylik</h4>
           <p>Captiva saloni o'zining ixchamligiga qaramay, hayratlanarli darajada keng va qulay. Zamonaviy Chevrolet Infotainment 3 tizimi va 7 dyuymli sensorli ekran Apple CarPlay® va Android Auto™ bilan osongina ulanadi, bu esa sevimli musiqangizni tinglash va marshrutlarni qulay rejalashtirish imkonini beradi. [16] Salondagi rangli aksentlar va o'ylangan saqlash joylari har bir sayohatingizga o'zgacha uslub va funksionallik qo'shadi. Orqa o'rindiqlarni yig'ish orqali yukxona hajmini 170 litrdan 568 litrgacha kengaytirish mumkin, bu esa kutilmagan xaridlar uchun qo'shimcha joy yaratadi. [36]</p>
           <h4>Xavfsizlik Birinchi O'rinda</h4>
           <p>Chevrolet Captiva o'zining mustahkam po'lat karkasi va 10 ta standart xavfsizlik yostiqchasi bilan sizning xotirjamligingizni ta'minlaydi. Orqa ko'rinish kamerasi parkovka qilishni osonlashtiradi, mavjud bo'lgan To'qnashuv haqida ogohlantirish va Favqulodda tormozlash tizimi kabi ilg'or funksiyalar esa yo'lda qo'shimcha himoya qatlamini yaratadi. [16] Captiva bilan har bir sayohat nafaqat qulay, balki maksimal darajada xavfsiz bo'ladi.</p>`,
      ru: `<h3>Chevrolet Captiva: Зажги в Ритме Города</h3>
           <h4>Динамичный и Экономичный</h4>
           <p>Chevrolet Captiva – это компактный и маневренный хэтчбек, созданный для динамичного ритма городской жизни. Его экономичный двигатель объемом 1.25 литра обеспечивает низкий расход топлива (в среднем 6.2 л/100км), делая его идеальным выбором для ежедневных поездок. [48] Благодаря своим компактным размерам и превосходной маневренности, вы легко сможете передвигаться в плотном потоке и парковаться в самых узких местах. [36] Captiva – это не просто автомобиль, это ваш надежный партнер в городских приключениях.</p>
           <h4>Современные Технологии и Комфорт</h4>
           <p>Несмотря на свою компактность, салон Captiva удивительно просторен и комфортен. Современная система Chevrolet Infotainment 3 с 7-дюймовым сенсорным экраном легко интегрируется с Apple CarPlay® и Android Auto™, позволяя вам наслаждаться любимой музыкой и легко строить маршруты. [16] Цветные акценты в интерьере и продуманные места для хранения добавляют стиль и функциональность в каждую поездку. Сложив задние сиденья, можно увеличить объем багажника со 170 до 568 литров, что обеспечивает дополнительное пространство для неожиданных покупок. [36]</p>
           <h4>Безопасность Превыше Всего</h4>
           <p>Chevrolet Captiva обеспечивает ваше спокойствие благодаря прочному стальному каркасу и стандартным подушкам безопасности. Камера заднего вида облегчает парковку, а доступные передовые функции, такие как система предупреждения о возможном столкновении и автоматическое экстренное торможение, создают дополнительный уровень защиты на дороге. [16] С Spark каждая поездка будет не только комфортной, но и максимально безопасной.</p>`,
    },
    banner: "https://www.ixbt.com/img/n1/news/2024/9/6/captiva1_large.JPG",
    videos: ["spark.mp4"],
    colors: allColors.filter((c) => c.modelId === 1),
    variants: allVariants.filter((v) => v.modelId === 1),
  },
  {
    id: 3,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    name: { uz: "Chevrolet Cobalt", ru: "Шевроле Кобальт" },
    description: {
      uz: "Keng salonli oilaviy avtomobil",
      ru: "Семейный автомобиль с просторным салоном",
    },
    content: {
      uz: `<h3>Chevrolet Cobalt: Oilangiz Uchun Kenglik va Qulaylik</h3>
           <h4>Segmentidagi Eng Katta Yukxona</h4>
           <p>Chevrolet Cobalt o'z sinfidagi eng katta yukxonalardan birini taklif etadi – hajmi 563 litrni tashkil etadi! [12, 20] Bu oilaviy sayohatlar, katta xaridlar yoki hatto kichik biznes ehtiyojlari uchun idealdir. Endi sizga joy yetishmasligi haqida qayg'urishning hojati yo'q. Bundan tashqari, 60/40 nisbatda yig'iladigan orqa o'rindiqlar uzun hajmli yuklarni tashish uchun qo'shimcha imkoniyat yaratadi, bu esa avtomobilning amaliyligini yanada oshiradi.</p>
           <h4>Keng va Qulay Salon</h4>
           <p>Cobaltning keng saloni haydovchiga ham, yo'lovchilarga ham maksimal qulaylikni ta'minlaydi. [34] Chevrolet’ning "ikki kamerali kokpit" konsepsiyasi simmetrik dizayn va ergonomik boshqaruvni o'zida mujassam etgan. Oyoqlar uchun keng joy va baland shiftlar tufayli hatto eng uzun bo'yli yo'lovchilar ham o'zlarini erkin his qilishadi. [31] Konditsioner, qulay boshqaruv elementlari va sifatli materiallar har bir sayohatni yoqimli tajribaga aylantiradi. Bu siz va yaqinlaringiz uchun haqiqiy mobil uy.</p>
           <h4>Ishonchlilik va Samaradorlik</h4>
           <p>Cobalt ishonchli 1.5 litrli dvigatel (106 ot kuchi) va silliq ishlaydigan 6 pog'onali avtomat uzatmalar qutisi bilan jihozlangan. [12, 33] Bu kombinatsiya avtomobil to'la yuklangan bo'lishidan qat'i nazar, yetarli dinamika va yoqilg'i tejamkorligini ta'minlaydi. Tormozlarning antiblokirovka tizimi (ABS) va xavfsizlik yostiqchalari kabi standart xavfsizlik xususiyatlari yo'lda sizning xotirjamligingizni kafolatlaydi. Cobalt — bu har kuni ishonishingiz mumkin bo'lgan, oilangiz va biznesingiz uchun mukammal yechimdir. [31]</p>`,
      ru: `<h3>Chevrolet Cobalt: Простор и Комфорт для Вашей Семьи</h3>
           <h4>Рекордный Багажник в Классе</h4>
           <p>Chevrolet Cobalt предлагает один из самых больших багажников в своем сегменте – впечатляющие 563 литра! [12, 20] Это делает его идеальным выбором для семейных путешествий, крупных покупок или даже для нужд малого бизнеса. Вам больше не придется беспокоиться о нехватке места. Кроме того, складывающиеся в пропорции 60/40 задние сиденья позволяют перевозить длинномерные предметы, еще больше повышая практичность автомобиля.</p>
           <h4>Просторный и Удобный Салон</h4>
           <p>Вместительный салон Cobalt обеспечивает максимальный комфорт как для водителя, так и для пассажиров. [34] Фирменная концепция Chevrolet «двойной кокпит» сочетает в себе симметричный дизайн и эргономичное расположение элементов управления. Благодаря большому пространству для ног и высокому потолку даже самые высокие пассажиры будут чувствовать себя свободно. [31] Кондиционер, удобно расположенные переключатели и качественные материалы отделки превращают каждую поездку в приятное путешествие. Это настоящий дом на колесах для вас и ваших близких.</p>
           <h4>Надежность и Эффективность</h4>
           <p>Cobalt оснащен надежным 1.5-литровым двигателем (106 л.с.) и плавной 6-ступенчатой автоматической коробкой передач. [12, 33] Эта комбинация обеспечивает достаточную динамику и топливную экономичность независимо от загруженности автомобиля. Стандартные функции безопасности, такие как антиблокировочная система тормозов (ABS) и подушки безопасности, гарантируют ваше спокойствие на дороге. Cobalt — это идеальное решение для вашей семьи и бизнеса, на которое можно положиться каждый день. [31]</p>`,
    },
    banner:
      "https://www.ixbt.com/img/n1/news/2024/5/5/chevrolet-cobalt-e1676385752690_large_large.jpg",
    videos: ["cobalt.mp4"],
    colors: allColors.filter((c) => c.modelId === 3),
    variants: allVariants.filter((v) => v.modelId === 3),
  },
  {
    id: 5,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    name: { uz: "Chevrolet Onix", ru: "Шевроле Оникс" },
    description: {
      uz: "Zamonaviy va texnologik sedan",
      ru: "Современный и технологичный седан",
    },
    content: {
      uz: `<h3>Chevrolet Onix: Innovatsiyalar va Uslubning Yangi Davri</h3>
           <h4>Kelajak Dizayni va Texnologiyalari</h4>
           <p>Chevrolet Onix – bu zamonaviy dizayn, ilg'or texnologiyalar va ajoyib dinamikani o'zida birlashtirgan yangi avlod sedani. Uning sport uslubidagi tashqi ko'rinishi, LED kunduzgi chiroqlari va dadil chiziqlari yo'lda barchaning e'tiborini tortadi. Onix nafaqat o'zining ko'rinishi bilan, balki texnologik ustunligi bilan ham ajralib turadi. Yuqori versiyalarda to'liq raqamli asboblar paneli va simsiz Apple CarPlay hamda Android Auto'ni qo'llab-quvvatlaydigan katta sensorli ekran mavjud. Bu sizning haydash tajribangizni yuqori darajaga olib chiqadi.</p>
           <h4>Samaradorlik va Quvvat</h4>
           <p>Onix kapoti ostida sizni yoqimli ajablanish kutmoqda: kuchli va shu bilan birga tejamkor 1.2 litrli turbo dvigatel. Bu dvigatel shahar trafigida chaqqonlikni va trassada ishonchli quvvatni ta'minlaydi. 6 pog'onali avtomat uzatmalar qutisi bilan birgalikda u silliq va sezgir haydashni kafolatlaydi. Onix yoqilg'i tejamkorligi bo'yicha o'z sinfidagi yetakchilardan biri bo'lib, bu sizga yoqilg'i quyish shoxobchalariga kamroq tashrif buyurish va ko'proq tejash imkonini beradi.</p>
           <h4>Murosasiz Xavfsizlik</h4>
           <p>Chevrolet uchun xavfsizlik har doim birinchi o'rinda turadi va Onix ham bundan mustasno emas. Avtomobil 6 ta xavfsizlik yostiqchasi, Elektron barqarorlikni nazorat qilish (ESC) tizimi va To'qnashuv haqida ogohlantirish kabi ilg'or tizimlar bilan jihozlangan. Yuqori komplektatsiyalarda ko'rinmas hududlar monitoringi va avtomatik favqulodda tormozlash kabi qo'shimcha yordamchi tizimlar mavjud. Onix bilan siz va yo'lovchilaringiz har doim ishonchli himoya ostida bo'lasiz, bu esa har bir sayohatni xotirjam va zavqli qiladi.</p>`,
      ru: `<h3>Chevrolet Onix: Новая Эра Инноваций и Стиля</h3>
           <h4>Дизайн и Технологии Будущего</h4>
           <p>Chevrolet Onix – это седан нового поколения, который объединяет в себе современный дизайн, передовые технологии и впечатляющую динамику. Его спортивный облик, подчеркнутый светодиодными дневными ходовыми огнями и смелыми линиями, приковывает взгляды на дороге. Onix выделяется не только внешностью, но и технологическим превосходством. В топовых версиях доступна полностью цифровая приборная панель и большой сенсорный экран с беспроводной поддержкой Apple CarPlay и Android Auto, что выводит ваш опыт вождения на новый уровень.</p>
           <h4>Эффективность и Мощность</h4>
           <p>Под капотом Onix вас ждет приятный сюрприз: мощный и одновременно экономичный 1.2-литровый турбированный двигатель. Этот мотор обеспечивает превосходную динамику в городском потоке и уверенную тягу на трассе. В паре с 6-ступенчатой автоматической коробкой передач он гарантирует плавное и отзывчивое вождение. Onix является одним из лидеров в своем классе по топливной экономичности, что позволяет вам реже заезжать на заправку и больше экономить.</p>
           <h4>Бескомпромиссная Безопасность</h4>
           <p>Безопасность всегда является приоритетом для Chevrolet, и Onix не исключение. Автомобиль оснащен 6 подушками безопасности, системой электронной стабилизации (ESC) и передовыми системами, такими как предупреждение о фронтальном столкновении. В более дорогих комплектациях доступны дополнительные ассистенты, включая мониторинг слепых зон и автоматическое экстренное торможение. С Onix вы и ваши пассажиры всегда будете под надежной защитой, что делает каждую поездку спокойной и приятной.</p>`,
    },
    banner:
      "https://fuelcarmagazine.com/wp-content/uploads/2020/09/%C2%A9-Fuel-Car-Magazine.jpg",
    videos: ["onix.mp4"],
    colors: allColors.filter((c) => c.modelId === 5),
    variants: allVariants.filter((v) => v.modelId === 5),
  },
  {
    id: 6,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    name: { uz: "Chevrolet Tracker", ru: "Шевроле Трекер" },
    description: {
      uz: "Dinamik shahar krossoveri",
      ru: "Динамичный городской кроссовер",
    },
    content: {
      uz: `<h3>Chevrolet Tracker: Sarguzashtlarga Chegara Qo'ymang</h3>
           <h4>Shahar va Undan Tashqarida Uslub</h4>
           <p>Chevrolet Tracker – bu shahar hayotining barcha talablariga javob beradigan va ayni paytda yangi sarguzashtlarga tayyor bo'lgan zamonaviy krossover. Uning dadil dizayni, atletik ko'rinishi va baland klirensi uni olomon orasidan ajratib turadi. [30] Tracker bilan siz nafaqat shahar ko'chalarida o'zingizni ishonchli his qilasiz, balki tabiat qo'yniga chiqishdan ham tortinmaysiz. Bu avtomobil faol hayot tarzini sevuvchilar va har kuni yangi narsalarni kashf qilishni xohlaydiganlar uchun yaratilgan.</p>
           <h4>Innovatsion Texnologiyalar Ichkarida</h4>
           <p>Tracker saloniga qadam qo'yganingizda, sizni zamonaviy va texnologik muhit kutib oladi. Katta sensorli MyLink multimedia tizimi smartfoningiz bilan osongina birlashadi va barcha kerakli ilovalarni qo'l ostingizda saqlaydi. Panoramali lyuk (yuqori versiyalarda) salonni yorug'lik va havo bilan to'ldirib, kenglik hissini yanada kuchaytiradi. Yaxshilab o'ylangan ergonomika va sifatli materiallar haydovchi va yo'lovchilar uchun maksimal qulaylikni ta'minlaydi, bu esa har bir sayohatni zavqli qiladi.</p>
           <h4>Quvvat va Xavfsizlik Muvofiqligi</h4>
           <p>Tracker samarali turbo dvigatel bilan jihozlangan bo'lib, u ajoyib dinamikani past yoqilg'i sarfi bilan uyg'unlashtiradi. [39] Bu sizga har qanday vaziyatda tezlashish uchun yetarli quvvat beradi. Xavfsizlik borasida Tracker murosaga kelmaydi: bir nechta xavfsizlik yostiqchalari, ABS, ESC tizimlari va orqa parkovka datchiklari standart jihozlarga kiradi. [6] Bundan tashqari, To'qnashuv haqida ogohlantirish va piyodalarni aniqlash tizimi kabi ilg'or haydovchiga yordam berish tizimlari sizning yo'ldagi xotirjamligingizni ta'minlaydi. Tracker bilan har bir sarguzasht ishonchli va xavfsiz bo'ladi.</p>`,
      ru: `<h3>Chevrolet Tracker: Не Знайте Границ в Приключениях</h3>
           <h4>Стиль в Городе и за его Пределами</h4>
           <p>Chevrolet Tracker – это современный кроссовер, который отвечает всем требованиям городской жизни и в то же время готов к новым приключениям. Его смелый дизайн, атлетичный силуэт и высокий клиренс выделяют его из толпы. [30] С Tracker вы будете чувствовать себя уверенно не только на городских улицах, но и смело отправитесь на природу. Этот автомобиль создан для тех, кто ведет активный образ жизни и хочет открывать для себя что-то новое каждый день.</p>
           <h4>Инновационные Технологии Внутри</h4>
           <p>Шагнув в салон Tracker, вы попадаете в современное и технологичное пространство. Большой сенсорный дисплей мультимедийной системы MyLink легко интегрируется с вашим смартфоном, делая все необходимые приложения доступными под рукой. Панорамный люк (в топовых версиях) наполняет салон светом и воздухом, усиливая ощущение простора. Продуманная эргономика и качественные материалы отделки обеспечивают максимальный комфорт для водителя и пассажиров, превращая каждую поездку в удовольствие.</p>
           <h4>Баланс Мощности и Безопасности</h4>
           <p>Tracker оснащен эффективным турбированным двигателем, который сочетает в себе впечатляющую динамику с низким расходом топлива. [39] Это дает вам достаточно мощности для уверенного ускорения в любой ситуации. В вопросах безопасности Tracker не идет на компромиссы: несколько подушек безопасности, системы ABS, ESC и задние парковочные датчики входят в стандартное оснащение. [6] Кроме того, передовые системы помощи водителю, такие как предупреждение о столкновении и система обнаружения пешеходов, обеспечивают ваше спокойствие на дороге. С Tracker каждое приключение будет надежным и безопасным.</p>`,
    },
    banner: "https://yuz.uz/file/news/8ca7aabc4448a3e52cd32c186010018b.jpg",
    videos: ["tracker.mp4"],
    colors: allColors.filter((c) => c.modelId === 6),
    variants: allVariants.filter((v) => v.modelId === 6),
  },
  {
    id: 7,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    name: { uz: "Chevrolet Malibu", ru: "Шевроле Малибу" },
    description: {
      uz: "Hashamatli biznes-klass sedan",
      ru: "Роскошный седан бизнес-класса",
    },
    content: {
      uz: `<h3>Chevrolet Malibu: Biznes va Hayot uchun Hashamat</h3>
           <h4>Nafis Dizayn va Maqom</h4>
           <p>Chevrolet Malibu – bu shunchaki sedan emas, bu sizning muvaffaqiyatingiz va yuksak didingiz aksi. Uning silliq, aerodinamik shakllari va LED chiroqlari bilan bezatilgan dadil old qismi yo'lda o'zgacha taassurot qoldiradi. [11] Har bir chiziq, har bir detal nafislik va ishonchni ifodalaydi. Sport va Midnight Edition kabi maxsus versiyalar qora rangdagi eksklyuziv elementlar bilan avtomobilning o'ziga xosligini yanada kuchaytiradi. Malibu bilan siz har doim diqqat markazida bo'lasiz, bu esa biznes uchrashuvlari va maxsus tadbirlar uchun mukammal tanlovdir.</p>
           <h4>Premium Qulaylik va Texnologiyalar</h4>
           <p>Malibu saloniga kirib, siz hashamat va texnologiyalar dunyosiga sho'ng'iysiz. Perforatsiyalangan teri o'rindiqlar (yuqori versiyalarda), old o'rindiqlarni ventilyatsiya qilish va isitish imkoniyati, shuningdek, ikki zonalı iqlim nazorati har qanday ob-havoda maksimal qulaylikni ta'minlaydi. Chevrolet Infotainment 3 Plus tizimiga ega 8 dyuymli sensorli ekran va premium Bose audiotizimi sayohatingizni zavqli qiladi. Akustik laminatlangan old oyna esa tashqi shovqinlardan himoyalab, salonda osoyishta muhit yaratadi.</p>
           <h4>Murosasiz Quvvat va Xavfsizlik</h4>
           <p>Malibu samarali 1.5 litrli (160 o.k.) yoki kuchli 2.0 litrli (250 o.k.) turbo dvigatellar bilan taklif etiladi, bu esa ajoyib dinamika va sezgir boshqaruvni kafolatlaydi. [2] MacPherson old podveskasi va ko'p bo'g'inli orqa podveska tizimi yo'lning har qanday notekisliklarini silliqlaydi va barqaror harakatni ta'minlaydi. [10] Chevy Safety Assist standart to'plami oldindan to'qnashuv haqida ogohlantirish, chiziqni saqlash yordami va avtomatik favqulodda tormozlash kabi ilg'or funksiyalarni o'z ichiga oladi. [10] Malibu bilan har bir kilometr nafaqat hashamatli, balki xavfsizdir.</p>`,
      ru: `<h3>Chevrolet Malibu: Роскошь для Бизнеса и Жизни</h3>
           <h4>Изысканный Дизайн и Статус</h4>
           <p>Chevrolet Malibu – это не просто седан, это отражение вашего успеха и безупречного вкуса. Его плавные, аэродинамические формы и выразительная передняя часть, украшенная светодиодной оптикой, производят неизгладимое впечатление на дороге. [11] Каждая линия, каждая деталь излучает элегантность и уверенность. Специальные версии, такие как Sport и Midnight Edition, добавляют эксклюзивные черные акценты, еще больше подчеркивая индивидуальность автомобиля. С Malibu вы всегда будете в центре внимания, что делает его идеальным выбором для деловых встреч и особых случаев.</p>
           <h4>Премиальный Комфорт и Технологии</h4>
           <p>Войдя в салон Malibu, вы погружаетесь в мир роскоши и технологий. Сиденья из перфорированной кожи (в топовых версиях), доступные функции вентиляции и подогрева передних сидений, а также двухзонный климат-контроль обеспечивают максимальный комфорт в любую погоду. Система Chevrolet Infotainment 3 Plus с 8-дюймовым сенсорным экраном и премиальная аудиосистема Bose делают каждую поездку наслаждением. Акустически ламинированное лобовое стекло защищает от внешнего шума, создавая в салоне спокойную и умиротворяющую атмосферу.</p>
           <h4>Бескомпромиссная Мощность и Безопасность</h4>
           <p>Malibu предлагается с эффективным 1.5-литровым (160 л.с.) или мощным 2.0-литровым (250 л.с.) турбодвигателем, гарантирующим впечатляющую динамику и отзывчивое управление. [2] Передняя подвеска MacPherson и многорычажная задняя подвеска обеспечивают плавность хода и превосходную устойчивость на любых дорогах. [10] Стандартный пакет Chevy Safety Assist включает в себя передовые функции, такие как предупреждение о фронтальном столкновении, помощь в удержании полосы и автоматическое экстренное торможение. [10] С Malibu каждый километр пути – это не только роскошь, но и безопасность.</p>`,
    },
    banner:
      "https://wallpapercat.com/w/full/d/4/3/1679903-3840x2160-desktop-4k-chevrolet-malibu-wallpaper-image.jpg",
    videos: ["malibu.mp4"],
    colors: allColors.filter((c) => c.modelId === 7),
    variants: allVariants.filter((v) => v.modelId === 7),
  },
  {
    id: 8,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    name: { uz: "Chevrolet Damas", ru: "Шевроле Дамас" },
    description: {
      uz: "Kichik biznes uchun universal yordamchi",
      ru: "Универсальный помощник для малого бизнеса",
    },
    content: {
      uz: `<h3>Chevrolet Damas: Katta Biznes Uchun Kichik Yordamchi</h3>
           <h4>Maksimal Amaliylik va Sig'im</h4>
           <p>Chevrolet Damas – bu kichik biznes, yetkazib berish xizmatlari va katta oilalar uchun yaratilgan afsonaviy, ko'p qirrali avtomobil. [14] Uning ixcham o'lchamlari (uzunligi 3485 mm) tor shahar ko'chalarida va tirbandliklarda beqiyos manevr qobiliyatini ta'minlaydi. [23] Shunga qaramay, uning ichki hajmi hayratlanarli darajada katta. Damas yo'lovchi (7 o'rinli) va yuk (560 kg gacha yuk ko'tarish qobiliyati) versiyalarida mavjud. [23] Bu har qanday vazifaga moslasha oladigan haqiqiy mehnatkashdir.</p>
           <h4>Tejamkorlik va Ishonchlilik</h4>
           <p>Damas ishonchli va oddiy 0.8 litrli dvigatel (38 o.k.) bilan jihozlangan bo'lib, u yoqilg'i sarfini minimal darajada ushlab turadi (90 km/soat tezlikda taxminan 7.8 l/100 km). [23, 24] Bu ekspluatatsiya xarajatlarini sezilarli darajada kamaytiradi va biznesingiz rentabelligini oshiradi. Avtomobilning oddiy va mustahkam konstruksiyasi uning chidamliligini va har qanday yo'l sharoitida uzoq yillar davomida beminnat xizmat qilishini kafolatlaydi. [25] Damas – bu sarmoyangizni tezda oqlaydigan aqlli tanlovdir.</p>
           <h4>Oddiylik va Funksionallik</h4>
           <p>Damas dizaynining asosida funksionallik yotadi. Katta yon eshiklar yuk ortish va tushirishni yoki yo'lovchilarni chiqarishni osonlashtiradi. Minimalistik, ammo qulay salon haydovchiga kerak bo'lgan barcha narsalarni o'z ichiga oladi va ortiqcha detallar bilan chalg'itmaydi. Damasning asosiy vazifasi – ishlash va foyda keltirishdir. Aynan shu sababli u ko'p yillardan buyon tadbirkorlar va kichik biznes vakillari orasida o'z mashhurligini yo'qotmay kelmoqda. Bu sizning biznesingiz uchun sodiq va ishonchli sherikdir.</p>`,
      ru: `<h3>Chevrolet Damas: Маленький Помощник для Большого Бизнеса</h3>
           <h4>Максимальная Практичность и Вместительность</h4>
           <p>Chevrolet Damas – это легендарный универсальный автомобиль, созданный для малого бизнеса, служб доставки и больших семей. [14] Его компактные размеры (длина 3485 мм) обеспечивают непревзойденную маневренность на узких городских улицах и в плотном потоке. [23] Несмотря на это, его внутренний объем поражает. Damas доступен в пассажирской (до 7 мест) и грузовой (грузоподъемность до 560 кг) версиях, что делает его настоящим трудягой, способным адаптироваться под любые задачи. [23]</p>
           <h4>Экономичность и Надежность</h4>
           <p>Damas оснащен надежным и неприхотливым 0.8-литровым двигателем (38 л.с.), который обеспечивает минимальный расход топлива (около 7.8 л/100 км при 90 км/ч). [23, 24] Это значительно снижает эксплуатационные расходы и повышает рентабельность вашего бизнеса. Простая и прочная конструкция автомобиля гарантирует его долговечность и безотказную работу в любых дорожных условиях на протяжении многих лет. [25] Damas – это умное вложение, которое быстро себя окупит.</p>
           <h4>Простота и Функциональность</h4>
           <p>В основе дизайна Damas лежит функциональность. Большие сдвижные боковые двери облегчают погрузку и выгрузку товаров или посадку пассажиров. Минималистичный, но удобный салон предоставляет водителю все необходимое, не отвлекая лишними деталями. Главная задача Damas – работать и приносить пользу. Именно поэтому он уже много лет сохраняет свою невероятную популярность среди предпринимателей и представителей малого бизнеса. Это верный и надежный партнер для вашего дела.</p>`,
    },
    banner: "https://chevrolet.uz/assets/images/damas/exterior/1.jpg",
    videos: ["damas.mp4"],
    colors: allColors.filter((c) => c.modelId === 8),
    variants: allVariants.filter((v) => v.modelId === 8),
  },
  {
    id: 9,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    name: { uz: "Chevrolet Labo", ru: "Шевроле Лабо" },
    description: {
      uz: "Kichik yuk tashish uchun ixcham yuk mashinasi",
      ru: "Компактный грузовик для малых перевозок",
    },
    content: {
      uz: `<h3>Chevrolet Labo: Biznesingiz Uchun Harakatchanlik va Quvvat</h3>
           <h4>Ixchamlikdagi Katta Imkoniyatlar</h4>
           <p>Chevrolet Labo – bu shahar va qishloq joylarida kichik hajmdagi yuklarni tashish uchun ideal yechim bo'lgan ixcham yuk mashinasi. Damas modelining modifikatsiyasi bo'lib, u ochiq bortli kuzovga ega, bu esa qurilish materiallari, qishloq xo'jaligi mahsulotlari yoki boshqa har qanday yuklarni tashishni osonlashtiradi. [26] Uning 550 kg gacha bo'lgan yuk ko'tarish qobiliyati kichik biznes va xususiy tadbirkorlar uchun keng imkoniyatlar ochadi. Labo – bu kichik o'lchamdagi katta yordamchi. [22]</p>
           <h4>Tejamkorlik Harakatda</h4>
           <p>Labo, Damas kabi, ishonchli va tejamkor 0.8 litrli dvigatel (38 o.k.) bilan jihozlangan bo'lib, u 5 pog'onali mexanik uzatmalar qutisi bilan birga ishlaydi. [3, 22] Bu kombinatsiya yoqilg'i sarfini minimal darajada ushlab turishga imkon beradi (taxminan 7.8 l/100 km), bu esa transport xarajatlaringizni sezilarli darajada optimallashtiradi. [3] Labo'ning asosiy maqsadi – minimal xarajat bilan maksimal foyda keltirish. Uning oddiy va ishonchli mexanikasi uzoq muddatli va uzluksiz ishlashni kafolatlaydi.</p>
           <h4>Manevrchanlik va Ko'p Qirralilik</h4>
           <p>Labo'ning eng katta afzalliklaridan biri bu uning ajoyib manevrchanligidir. U tor ko'chalarda, bozorlarda yoki qurilish maydonchalarida osongina harakatlana oladi, bu yerda katta yuk mashinalari o'ta olmaydi. Ochiq kuzov har xil turdagi yuklarni tashish uchun qulaylik yaratadi va uni turli xil biznes ehtiyojlariga moslashtirish imkonini beradi. [24] Fermerlar, quruvchilar, yetkazib berish xizmatlari – bularning barchasi Labo'ning amaliyligi va ko'p qirraliligidan foyda ko'rishi mumkin. Bu sizning biznesingizni yangi bosqichga olib chiqadigan ishonchli vositadir.</p>`,
      ru: `<h3>Chevrolet Labo: Мобильность и Мощь для Вашего Бизнеса</h3>
           <h4>Большие Возможности в Компактном Формате</h4>
           <p>Chevrolet Labo – это компактный грузовик, идеальное решение для перевозки небольших грузов в городских и сельских условиях. Являясь модификацией модели Damas с открытым бортовым кузовом, он упрощает транспортировку строительных материалов, сельскохозяйственной продукции или любых других товаров. [26] Его грузоподъемность до 550 кг открывает широкие возможности для малого бизнеса и частных предпринимателей. Labo – это большой помощник в малых габаритах. [22]</p>
           <h4>Экономичность в Движении</h4>
           <p>Как и Damas, Labo оснащен надежным и экономичным 0.8-литровым двигателем (38 л.с.) в паре с 5-ступенчатой механической коробкой передач. [3, 22] Эта комбинация позволяет поддерживать расход топлива на минимальном уровне (около 7.8 л/100 км), что значительно оптимизирует ваши транспортные расходы. [3] Главная цель Labo – приносить максимальную пользу при минимальных затратах. Его простая и надежная механика гарантирует долгую и бесперебойную работу.</p>
           <h4>Маневренность и Универсальность</h4>
           <p>Одним из главных преимуществ Labo является его выдающаяся маневренность. Он легко проедет по узким улицам, рынкам или строительным площадкам, где не пройдет большой грузовик. Открытый кузов обеспечивает удобство при перевозке разнообразных грузов и позволяет адаптировать его под различные бизнес-нужды. [24] Фермеры, строители, службы доставки – все они могут извлечь выгоду из практичности и универсальности Labo. Это надежный инструмент, который выведет ваш бизнес на новый уровень.</p>`,
    },
    banner:
      "https://driversvillage.uz/storage/dv/car_gal_photo/177/d0LOYWSWPx7tXYWaseU4SSfoBfIqg7nEDR57AO9c.jpg",
    videos: ["labo.mp4"],
    colors: allColors.filter((c) => c.modelId === 9),
    variants: allVariants.filter((v) => v.modelId === 9),
  },
  {
    id: 10,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    name: { uz: "Chevrolet Equinox", ru: "Шевроле Эквинокс" },
    description: {
      uz: "Qulay va texnologik oilaviy krossover",
      ru: "Комфортный и технологичный семейный кроссовер",
    },
    content: {
      uz: `<h3>Chevrolet Equinox: Oilangiz Sarguzashtlari Uchun Mukammal Hamroh</h3>
           <h4>Kenglik va Moslashuvchanlik</h4>
           <p>Chevrolet Equinox – bu faol va zamonaviy oilalar uchun yaratilgan ideal krossover. Uning keng va qulay saloni besh kishigacha bo'lgan yo'lovchilarga qulay joylashish imkonini beradi. [5] 60/40 nisbatda yig'iladigan orqa o'rindiqlar yukxona hajmini 847 litrgacha kengaytirish imkonini beradi, bu esa katta hajmli yuklarni yoki sport anjomlarini tashish uchun juda qulay. [35] Equinox bilan har bir oilaviy sayohat yoki kundalik qatnov maksimal darajada qulay bo'ladi.</p>
           <h4>Ilg'or Texnologiyalar va Ulanish</h4>
           <p>Equinox sizni va oilangizni doimo aloqada bo'lishini ta'minlaydi. Katta 11.3 dyuymli sensorli ekranli zamonaviy axborot-ko'ngilochar tizimi simsiz Apple CarPlay® va Android Auto™ ni qo'llab-quvvatlaydi. [21] O'rnatilgan Google xizmatlari (Google Maps, Assistant) navigatsiya va ma'lumot qidirishni osonlashtiradi. [4] Bundan tashqari, avtomobilda mavjud Wi-Fi ulanish nuqtasi uzoq safarlarda yo'lovchilarning zerikmasligini ta'minlaydi. Equinox – bu shunchaki avtomobil emas, bu sizning aqlli gadjetingizdir.</p>
           <h4>Murosasiz Xavfsizlik</h4>
           <p>Oilaviy avtomobil uchun xavfsizlik eng muhim mezonlardan biridir va Equinox bu borada yuqori standartlarga javob beradi. U NHTSA (Milliy yo'l harakati xavfsizligi boshqarmasi) tomonidan yuqori 5 yulduzli umumiy xavfsizlik reytingini olgan. [4] Chevy Safety Assist standart to'plamiga Oldindan to'qnashuv haqida ogohlantirish, Piyodalarni aniqlash bilan avtomatik tormozlash va Chiziqni saqlash yordami kabi funksiyalar kiradi. [21] Bundan tashqari, to'liq uzatmali (AWD) tizim va StabiliTrak barqarorlashtirish tizimi har qanday ob-havo va yo'l sharoitida ishonchli boshqaruvni ta'minlaydi.</p>`,
      ru: `<h3>Chevrolet Equinox: Идеальный Спутник для Ваших Семейных Приключений</h3>
           <h4>Простор и Гибкость</h4>
           <p>Chevrolet Equinox – это идеальный кроссовер, созданный для активных и современных семей. Его просторный и комфортабельный салон с легкостью вмещает до пяти пассажиров, обеспечивая комфорт для каждого. [5] Складывающиеся в пропорции 60/40 задние сиденья позволяют увеличить объем багажника до впечатляющих 847 литров, что идеально подходит для перевозки крупногабаритного багажа или спортивного инвентаря. [35] С Equinox каждая семейная поездка или ежедневная поездка будет максимально комфортной.</p>
           <h4>Передовые Технологии и Связь</h4>
           <p>Equinox гарантирует, что вы и ваша семья всегда будете на связи. Современная информационно-развлекательная система с большим 11.3-дюймовым сенсорным экраном поддерживает беспроводное подключение Apple CarPlay® и Android Auto™. [21] Встроенные сервисы Google (Карты, Ассистент) делают навигацию и поиск информации интуитивно понятными. [4] Кроме того, доступная точка доступа Wi-Fi не даст заскучать пассажирам в дальних поездках. Equinox – это не просто автомобиль, это ваш умный гаджет на колесах.</p>
           <h4>Бескомпромиссная Безопасность</h4>
           <p>Безопасность – ключевой критерий для семейного автомобиля, и Equinox соответствует самым высоким стандартам. Он получил высокий 5-звездочный общий рейтинг безопасности от NHTSA (Национальное управление безопасностью движения на трассах). [4] Стандартный пакет Chevy Safety Assist включает такие функции, как предупреждение о фронтальном столкновении, автоматическое торможение с функцией обнаружения пешеходов и помощь в удержании полосы движения. [21] Кроме того, доступная система полного привода (AWD) и система стабилизации StabiliTrak обеспечивают уверенное управление в любых погодных и дорожных условиях.</p>`,
    },
    banner: "https://images4.alphacoders.com/108/1083813.jpg",
    videos: ["equinox.mp4"],
    colors: allColors.filter((c) => c.modelId === 10),
    variants: allVariants.filter((v) => v.modelId === 10),
  },
];

// 📦 special offer (НЕ ТРОНУТО)
export const specialOffers: ISpecialOffer[] = [
  {
    id: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    name: {
      uz: "D2 STYLE PLUS kredit dasturi",
      ru: "Кредитная программа на D2 STYLE PLUS",
    },
    description: {
      uz: "Yangi D2 STYLE PLUS avtomobilini qulay to‘lovlar bilan rasmiy daromadli yoki daromadsiz tarzda xarid qiling!",
      ru: "Новая D2 STYLE PLUS — в кредит на удобных условиях для всех, с официальным доходом или без!",
    },
    image:
      "https://frankfurt.apollo.olxcdn.com/v1/files/irkqt0010u1z2-UZ/image",
    content: {
      uz: `
        <p><strong>D2 STYLE PLUS</strong> avtomobili uchun <span style="color:#d35400;">kredit shartlari</span> bilan tanishing:</p>
        <p>Rasmiy daromadga ega bo‘lganlar va daromadsiz mijozlar uchun <strong>turli imkoniyatlar</strong> mavjud!</p>
        <div style="overflow-x: auto; width: 100%;">
        <table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif;font-size:14px;margin-top:1rem;">
  <thead>
    <tr>
      <th style="border:1px solid #ccc;padding:8px 10px;text-align:center;background:#f2f2f2;font-weight:bold;">Kredit muddati (oy)</th>
      <th style="border:1px solid #ccc;padding:8px 10px;text-align:center;background:#f2f2f2;font-weight:bold;">Boshlang‘ich to‘lov (%)</th>
      <th style="border:1px solid #ccc;padding:8px 10px;text-align:center;background:#f2f2f2;font-weight:bold;">Boshlang‘ich summa</th>
      <th style="border:1px solid #ccc;padding:8px 10px;text-align:center;background:#f2f2f2;font-weight:bold;">Rasmiy daromadlilar (%)</th>
      <th style="border:1px solid #ccc;padding:8px 10px;text-align:center;background:#f2f2f2;font-weight:bold;">Oylik to‘lov</th>
      <th style="border:1px solid #ccc;padding:8px 10px;text-align:center;background:#f2f2f2;font-weight:bold;">Daromadsiz mijozlar (%)</th>
      <th style="border:1px solid #ccc;padding:8px 10px;text-align:center;background:#f2f2f2;font-weight:bold;">Oylik to‘lov</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">13</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">30%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">29 079 600</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">0%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">5 219 415</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">0%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">5 219 415</td></tr>
    <tr><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">22</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">50%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">48 466 000</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">0%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">2 203 000</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">0%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">2 203 000</td></tr>
    <tr><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">24</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">20%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">19 386 400</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">11%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">3 946 746</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">-</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">-</td></tr>
    <tr><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">24</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">30%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">29 079 600</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">9%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">3 099 819</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">10%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">3 131 044</td></tr>
    <tr><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">24</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">50%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">48 466 000</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">3%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">2 083 127</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">4%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">2 104 632</td></tr>
    <tr><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">24</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">60%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">58 159 200</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">0%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">1 615 533</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">-</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">1 615 533</td></tr>
    <tr><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">30</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">50%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">48 466 000</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">6%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">1 743 754</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">7%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">1 765 709</td></tr>
    <tr><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">36</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">20%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">19 386 400</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">15%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">2 688 144</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">-</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">-</td></tr>
    <tr><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">36</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">30%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">29 079 600</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">13%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">2 286 216</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">14%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">2 319 034</td></tr>
    <tr><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">36</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">50%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">48 466 000</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">9%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">1 541 206</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">10%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">1 563 861</td></tr>
    <tr><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">36</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">70%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">67 852 400</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">6%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">807 767</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">-</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">807 767</td></tr>
    <tr><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">48</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">20%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">19 386 400</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">17%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">2 237 582</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">-</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">-</td></tr>
    <tr><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">48</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">30%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">29 079 600</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">17%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">1 922 956</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">17%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">1 957 884</td></tr>
    <tr><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">48</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">50%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">48 466 000</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">12%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">1 280 219</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">13%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">1 300 221</td></tr>
    <tr><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">60</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">20%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">19 386 400</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">19%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">2 017 576</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">-</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">-</td></tr>
    <tr><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">60</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">30%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">29 079 600</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">18%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">1 686 307</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">18%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">1 723 035</td></tr>
    <tr><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">60</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">50%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">48 466 000</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">14%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">1 127 719</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">15%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">1 153 063</td></tr>
  </tbody>
  
</table>
      </div>
        <p><strong>Izoh:</strong> Kredit foiz stavkalari mijozning daromad holatiga qarab farq qiladi. Dastlabki to‘lov qancha yuqori bo‘lsa, oylik to‘lov shuncha kam bo‘ladi.</p>
        <p>Qo‘shimcha ma’lumot olish uchun biz bilan bog‘laning yoki ofisimizga tashrif buyuring.</p>
      `,
      ru: `
        <p><strong>D2 STYLE PLUS</strong> — условия <span style="color:#d35400;">автокредита от Asaka Bank</span>:</p>
        <p>Для клиентов с официальным доходом и без него действуют <strong>разные удобные условия</strong>!</p>
        <div style="overflow-x: auto; width: 100%;">
        <table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif;font-size:14px;margin-top:1rem;">
  <thead>
    <tr>
      <th style="border:1px solid #ccc;padding:8px 10px;text-align:center;background:#f2f2f2;font-weight:bold;">Срок (мес.)</th>
      <th style="border:1px solid #ccc;padding:8px 10px;text-align:center;background:#f2f2f2;font-weight:bold;">Первонач. взнос (%)</th>
      <th style="border:1px solid #ccc;padding:8px 10px;text-align:center;background:#f2f2f2;font-weight:bold;">Сумма взноса</th>
      <th style="border:1px solid #ccc;padding:8px 10px;text-align:center;background:#f2f2f2;font-weight:bold;">С офиц. доходом (%)</th>
      <th style="border:1px solid #ccc;padding:8px 10px;text-align:center;background:#f2f2f2;font-weight:bold;">Ежемес. платёж</th>
      <th style="border:1px solid #ccc;padding:8px 10px;text-align:center;background:#f2f2f2;font-weight:bold;">Без дохода (%)</th>
      <th style="border:1px solid #ccc;padding:8px 10px;text-align:center;background:#f2f2f2;font-weight:bold;">Ежемес. платёж</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">13</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">30%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">29 079 600</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">0%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">5 219 415</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">0%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">5 219 415</td></tr>
    <tr><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">22</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">50%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">48 466 000</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">0%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">2 203 000</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">0%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">2 203 000</td></tr>
    <tr><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">24</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">20%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">19 386 400</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">11%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">3 946 746</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">-</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">-</td></tr>
    <tr><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">24</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">30%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">29 079 600</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">9%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">3 099 819</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">10%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">3 131 044</td></tr>
    <tr><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">24</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">50%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">48 466 000</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">3%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">2 083 127</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">4%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">2 104 632</td></tr>
    <tr><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">24</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">60%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">58 159 200</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">0%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">1 615 533</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">-</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">1 615 533</td></tr>
    <tr><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">30</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">50%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">48 466 000</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">6%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">1 743 754</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">7%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">1 765 709</td></tr>
    <tr><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">36</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">20%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">19 386 400</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">15%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">2 688 144</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">-</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">-</td></tr>
    <tr><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">36</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">30%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">29 079 600</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">13%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">2 286 216</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">14%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">2 319 034</td></tr>
    <tr><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">36</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">50%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">48 466 000</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">9%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">1 541 206</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">10%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">1 563 861</td></tr>
    <tr><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">36</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">70%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">67 852 400</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">6%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">807 767</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">-</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">807 767</td></tr>
    <tr><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">48</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">20%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">19 386 400</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">17%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">2 237 582</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">-</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">-</td></tr>
    <tr><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">48</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">30%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">29 079 600</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">17%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">1 922 956</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">17%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">1 957 884</td></tr>
    <tr><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">48</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">50%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">48 466 000</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">12%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">1 280 219</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">13%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">1 300 221</td></tr>
    <tr><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">60</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">20%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">19 386 400</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">19%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">2 017 576</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">-</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">-</td></tr>
    <tr><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">60</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">30%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">29 079 600</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">18%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">1 686 307</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">18%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">1 723 035</td></tr>
    <tr><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">60</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">50%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">48 466 000</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">14%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">1 127 719</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">15%</td><td style="border:1px solid #ccc;padding:8px 10px;text-align:center;">1 153 063</td></tr>
  </tbody>
  </table>
  </div>

        <p><strong>Примечание:</strong> Чем больше первоначальный взнос, тем ниже ежемесячный платёж. Уточняйте детали в отделении или по телефону.</p>
      `,
    },
  },
];

// managers list
export const managersList = [
  {
    id: 1,
    fullName: "AXMEDJANOV HURMATBEK RAXIMBAYEVICH",
    position: "Savdo bo'limi boshlig'i",
    phone: "+998 (99) 506-8934",
  },
  {
    id: 2,
    fullName: "JUMABOYEV HAMZA MANSUR O‘G‘LI",
    position: "Marketing xodimi",
    phone: "+998 (91) 912-8983",
  },
  {
    id: 3,
    fullName: "MADAMINOV DILSHOD XUDAYNAZAROVICH",
    position: "Marketing xodimi",
    phone: "+998 (93) 281-6666",
  },
  {
    id: 4,
    fullName: "XUSAINOV KAMOLADDIN ILXOMOVICH",
    position: "Marketing xodimi",
    phone: "+998 (99) 014-6474",
  },
  {
    id: 5,
    fullName: "ABDULLAYEV ISLOMBEK SATIMOVICH",
    position: "Marketing xodimi",
    phone: "+998 (91) 434-1347",
  },
  {
    id: 6,
    fullName: "YUSUPOV SHAXBOZ USMONBEK O'G'LI",
    position: "Marketing xodimi",
    phone: "+998 (97) 525-5757",
  },
  {
    id: 7,
    fullName: "MATCHANOV XUSHNUD ABDURASHIDOVICH",
    position: "Savdo agenti",
    phone: "+998 (91) 276-6777",
  },
  {
    id: 8,
    fullName: "ATABAEV BEKZOD KAMILOVICH",
    position: "Savdo maslaxatchisi",
    phone: "+998 (91) 868-7974",
  },
  {
    id: 9,
    fullName: "ARTIQOV DAVLATNAZAR SHAVKATOVICH",
    position: "Savdo agenti",
    phone: "+998 (99) 505-6062",
  },
];
