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
    icon: "icon-engine.png",
    name: { uz: "Dvigatel", ru: "Двигатель" },
  },
  {
    id: 2,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    icon: "icon-speed.png",
    name: { uz: "Maks. Tezlik", ru: "Макс. Скорость" },
  },
  {
    id: 3,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    icon: "icon-transmission.png",
    name: { uz: "Transmissiya", ru: "Трансмиссия" },
  },
  {
    id: 4,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    icon: "icon-fuel.png",
    name: { uz: "Yoqilg'i sarfi", ru: "Расход топлива" },
  },
  {
    id: 5,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    icon: "icon-capacity.png",
    name: { uz: "Yukxona hajmi", ru: "Объем багажника" },
  },
  {
    id: 6,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    icon: "icon-drive.png",
    name: { uz: "Privod", ru: "Привод" },
  },
];

// Все возможные значения для атрибутов всех машин
export const allValues: IValues[] = [
  // Spark (modelId: 1)
  {
    id: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "1.25L", ru: "1.25Л" },
    attribute: allAttributes[0],
  },
  {
    id: 2,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "161 km/soat", ru: "161 км/ч" },
    attribute: allAttributes[1],
  },
  {
    id: 3,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "Avtomat", ru: "Автомат" },
    attribute: allAttributes[2],
  },
  // Nexia 3 (modelId: 2)
  {
    id: 4,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "1.5L", ru: "1.5Л" },
    attribute: allAttributes[0],
  },
  {
    id: 5,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "180 km/soat", ru: "180 км/ч" },
    attribute: allAttributes[1],
  },
  // Cobalt (modelId: 3)
  {
    id: 6,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "1.5L", ru: "1.5Л" },
    attribute: allAttributes[0],
  },
  {
    id: 7,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "563 L", ru: "563 Л" },
    attribute: allAttributes[4],
  },
  // Lacetti/Gentra (modelId: 4)
  {
    id: 8,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "1.5L DOHC", ru: "1.5Л DOHC" },
    attribute: allAttributes[0],
  },
  {
    id: 9,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "180 km/soat", ru: "180 км/ч" },
    attribute: allAttributes[1],
  },
  // Onix (modelId: 5)
  {
    id: 10,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "1.2L Turbo", ru: "1.2Л Турбо" },
    attribute: allAttributes[0],
  },
  {
    id: 11,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "6-pog'onali avtomat", ru: "6-ступ. автомат" },
    attribute: allAttributes[2],
  },
  // Tracker (modelId: 6)
  {
    id: 12,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "1.2L Turbo", ru: "1.2Л Турбо" },
    attribute: allAttributes[0],
  },
  {
    id: 13,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "Old privod", ru: "Передний привод" },
    attribute: allAttributes[5],
  },
  // Malibu (modelId: 7)
  {
    id: 14,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "2.0L Turbo", ru: "2.0Л Турбо" },
    attribute: allAttributes[0],
  },
  {
    id: 15,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "250 ot kuchi", ru: "250 л.с." },
    attribute: allAttributes[1],
  },
  // Damas (modelId: 8)
  {
    id: 16,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "0.8L", ru: "0.8Л" },
    attribute: allAttributes[0],
  },
  {
    id: 17,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "Mexanika", ru: "Механика" },
    attribute: allAttributes[2],
  },
  // Labo (modelId: 9)
  {
    id: 18,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "0.8L", ru: "0.8Л" },
    attribute: allAttributes[0],
  },
  {
    id: 19,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "550 kg yuk", ru: "Груз 550 кг" },
    attribute: allAttributes[4],
  },
  // Equinox (modelId: 10)
  {
    id: 20,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "2.0L Turbo", ru: "2.0Л Турбо" },
    attribute: allAttributes[0],
  },
  {
    id: 21,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: { uz: "To'liq privod", ru: "Полный привод" },
    attribute: allAttributes[5],
  },
];

// Все возможные цвета для всех моделей
export const allColors: IColors[] = [
  // Spark (modelId: 1)
  {
    id: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    image: [
      "https://vexstockimages.fastly.carvana.io/stockimages/2013_CHEVROLET_SPARK_LT%20HATCHBACK%204D_WHITE_stock_desktop_1920x1080.png?v=1645489194.656",
    ],
    modelId: 1,
    name: { uz: "Oq", ru: "Белый" },
    value: "#FFFFFF",
  },
  {
    id: 2,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    image: [
      "https://storage.yandexcloud.net/cdn.carso.ru/uploads/new_car/176/colors/chevrolet_spark_4.png",
    ],
    modelId: 1,
    name: { uz: "Qizil", ru: "Красный" },
    value: "#FF0000",
  },
  // Nexia 3 (modelId: 2)
  {
    id: 3,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    image: [
      "https://chelyabinsk.ruautoshop.com/auto/images/000001213975ddb2d345.png",
    ],
    modelId: 2,
    name: { uz: "Kulrang", ru: "Серый" },
    value: "#808080",
  },
  {
    id: 4,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    image: [
      "https://avtotexxizmat.uz/uploads/car-color/KK/KK/KA/1635147517.png",
    ],
    modelId: 2,
    name: { uz: "Qora", ru: "Черный" },
    value: "#000000",
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
  // Lacetti/Gentra (modelId: 4)
  {
    id: 7,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    image: ["https://chevrolet.uz/assets/images/lacetti/colors/1.png"],
    modelId: 4,
    name: { uz: "Qora", ru: "Черный" },
    value: "#000000",
  },
  {
    id: 8,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    image: ["https://chevrolet.uz/assets/images/lacetti/colors/4.png"],
    modelId: 4,
    name: { uz: "Kulrang", ru: "Мокрый асфальт" },
    value: "#5A5A5A",
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
  // Spark (modelId: 1)
  {
    id: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    modelId: 1,
    title: { uz: "Optimal AT", ru: "Оптимальная AT" },
    description: {
      uz: "Avtomat qutisi bilan",
      ru: "С автоматической коробкой",
    },
    discount: 0,
    price: 98000000,
    values: [allValues[0], allValues[1], allValues[2]],
  },
  // Nexia 3 (modelId: 2)
  {
    id: 2,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    modelId: 2,
    title: { uz: "Elegant Plus", ru: "Элегант Плюс" },
    description: {
      uz: "Yaxshilangan komplektatsiya",
      ru: "Улучшенная комплектация",
    },
    discount: 0,
    price: 127000000,
    values: [allValues[3], allValues[4]],
  },
  // Cobalt (modelId: 3)
  {
    id: 3,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    modelId: 3,
    title: { uz: "LTZ AT", ru: "LTZ AT" },
    description: { uz: "Keng va qulay", ru: "Просторный и комфортный" },
    discount: 5,
    price: 134000000,
    values: [allValues[5], allValues[6]],
  },
  // Lacetti/Gentra (modelId: 4)
  {
    id: 4,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    modelId: 4,
    title: { uz: "L-Style AT", ru: "L-Style AT" },
    description: { uz: "Klassik dizayn", ru: "Классический дизайн" },
    discount: 0,
    price: 153000000,
    values: [allValues[7], allValues[8]],
  },
  // Onix (modelId: 5)
  {
    id: 5,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    modelId: 5,
    title: { uz: "Premier 2", ru: "Premier 2" },
    description: {
      uz: "Zamonaviy texnologiyalar",
      ru: "Современные технологии",
    },
    discount: 0,
    price: 194000000,
    values: [allValues[9], allValues[10]],
  },
  // Tracker (modelId: 6)
  {
    id: 6,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    modelId: 6,
    title: { uz: "Redline", ru: "Redline" },
    description: { uz: "Shahar krossoveri", ru: "Городской кроссовер" },
    discount: 0,
    price: 285000000,
    values: [allValues[11], allValues[12]],
  },
  // Malibu (modelId: 7)
  {
    id: 7,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    modelId: 7,
    title: { uz: "Redline", ru: "Redline" },
    description: { uz: "Biznes klass sedan", ru: "Седан бизнес-класса" },
    discount: 10,
    price: 401000000,
    values: [allValues[13], allValues[14]],
  },
  // Damas (modelId: 8)
  {
    id: 8,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    modelId: 8,
    title: { uz: "DLX", ru: "DLX" },
    description: { uz: "Kichik biznes uchun", ru: "Для малого бизнеса" },
    discount: 0,
    price: 85000000,
    values: [allValues[15], allValues[16]],
  },
  // Labo (modelId: 9)
  {
    id: 9,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    modelId: 9,
    title: { uz: "Standart", ru: "Стандарт" },
    description: { uz: "Kichik yuklar uchun", ru: "Для небольших грузов" },
    discount: 0,
    price: 89000000,
    values: [allValues[17], allValues[18]],
  },
  // Equinox (modelId: 10)
  {
    id: 10,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    modelId: 10,
    title: { uz: "RS", ru: "RS" },
    description: {
      uz: "To'liq privodli krossover",
      ru: "Полноприводный кроссовер",
    },
    discount: 0,
    price: 430000000,
    values: [allValues[19], allValues[20]],
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
    name: { uz: "Chevrolet Spark", ru: "Шевроле Спарк" },
    description: {
      uz: "Shahar uchun ixcham avtomobil",
      ru: "Компактный автомобиль для города",
    },
    content: {
      ru: "<h3>Спарк</h3><p>Идеален для городской жизни.</p>",
      uz: "<h3>Spark</h3><p>Shahar hayoti uchun ideal.</p>",
    },
    banner:
      "https://wallpapercat.com/w/full/b/6/a/1686492-3840x2160-desktop-4k-chevrolet-spark-wallpaper-image.jpg",
    videos: ["spark.mp4"],
    colors: allColors.filter((c) => c.modelId === 1),
    variants: allVariants.filter((v) => v.modelId === 1),
  },
  {
    id: 2,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    name: { uz: "Chevrolet Nexia 3", ru: "Шевроле Нексия 3" },
    description: {
      uz: "Ishonchli va hamyonbop sedan",
      ru: "Надежный и доступный седан",
    },
    content: {
      ru: "<h3>Нексия 3</h3><p>Проверенный временем выбор.</p>",
      uz: "<h3>Nexia 3</h3><p>Vaqt sinovidan o'tgan tanlov.</p>",
    },
    banner:
      "https://www.autostrada.uz/wp-content/uploads/2018/09/Avtosalon-GM-Uzbekistan-v-Tashkente-Ofijialnyj-diler-GM-telefony-i-dogovora.jpg",
    videos: ["nexia.mp4"],
    colors: allColors.filter((c) => c.modelId === 2),
    variants: allVariants.filter((v) => v.modelId === 2),
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
      ru: "<h3>Кобальт</h3><p>Вместительность и комфорт.</p>",
      uz: "<h3>Cobalt</h3><p>Kenglik va qulaylik.</p>",
    },
    banner:
      "https://www.ixbt.com/img/n1/news/2024/5/5/chevrolet-cobalt-e1676385752690_large_large.jpg",
    videos: ["cobalt.mp4"],
    colors: allColors.filter((c) => c.modelId === 3),
    variants: allVariants.filter((v) => v.modelId === 3),
  },
  {
    id: 4,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    name: { uz: "Chevrolet Lacetti / Gentra", ru: "Шевроле Лачетти / Джентра" },
    description: {
      uz: "Klassik va qulay sedan",
      ru: "Классический и комфортный седан",
    },
    content: {
      ru: "<h3>Джентра</h3><p>Стиль и надежность.</p>",
      uz: "<h3>Gentra</h3><p>Uslub va ishonchlilik.</p>",
    },
    banner: "https://stat.uz/images/sanoat-15_12_2021-ichi.jpg",
    videos: ["lacetti.mp4"],
    colors: allColors.filter((c) => c.modelId === 4),
    variants: allVariants.filter((v) => v.modelId === 4),
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
      ru: "<h3>Оникс</h3><p>Новый уровень комфорта и технологий.</p>",
      uz: "<h3>Onix</h3><p>Qulaylik va texnologiyalarning yangi darajasi.</p>",
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
      ru: "<h3>Трекер</h3><p>Для тех, кто ищет приключения.</p>",
      uz: "<h3>Tracker</h3><p>Sarguzasht izlovchilar uchun.</p>",
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
      ru: "<h3>Малибу</h3><p>Статус и превосходство в каждой детали.</p>",
      uz: "<h3>Malibu</h3><p>Har bir detalda maqom va ustunlik.</p>",
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
      ru: "<h3>Дамас</h3><p>Надежный партнер для вашего дела.</p>",
      uz: "<h3>Damas</h3><p>Sizning ishingiz uchun ishonchli hamkor.</p>",
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
      ru: "<h3>Лабо</h3><p>Маневренность и практичность.</p>",
      uz: "<h3>Labo</h3><p>Manyovrchanlik va amaliylik.</p>",
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
      ru: "<h3>Эквинокс</h3><p>Простор и инновации для всей семьи.</p>",
      uz: "<h3>Equinox</h3><p>Butun oila uchun kenglik va innovatsiyalar.</p>",
    },
    banner: "https://images4.alphacoders.com/108/1083813.jpg",
    videos: ["equinox.mp4"],
    colors: allColors.filter((c) => c.modelId === 10),
    variants: allVariants.filter((v) => v.modelId === 10),
  },
];

// 📦 special offer
export const specialOffers: ISpecialOffer[] = [
  {
    id: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    name: { uz: "Chegirma", ru: "Скидка" },
    description: {
      uz: "Matiz uchun yozgi chegirma!",
      ru: "Летняя скидка на Matiz!",
    },
    image: "https://daryo.uz/static/2021/07/medium-680x453-1.jpg",
    content: { uz: "Aksiya", ru: "Акция" },
  },
];
