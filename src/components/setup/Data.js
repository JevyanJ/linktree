import img_me from "./assets/just me.jpg";
import img_camera from "./assets/camera.jpg";
import img_computer from "./assets/computer.jpg";
import img_headphones from "./assets/headphones.jpg";
import img_keyboard from "./assets/keyboard.jpg";
import img_led_ring from "./assets/led ring.jpg";
import img_light_panel from "./assets/light panel.jpg";
import img_mic from "./assets/mic.jpg";
import img_mouse from "./assets/mouse.jpg";
import img_screen from "./assets/screen.jpg";

const zones = [
  {
    title: "Cámara",
    img: img_camera,
    txt: ["Sony Alpha 6400", "APS-C", "Objetivo: Sony 16-50mm f/3.5-5.6"],
    alt: "En mi setup. Yo vestido de palmera con gafas de sol señalando a la cámara",
    width: [64.5, 71.5],
    height: [11.5, 19.5]
  },
  {
    title: "Ordenador",
    img: img_computer,
    alt: "En mi setup. Yo vestido de palmera con gafas de sol señalando al ordenador",
    txt: [
      "HP OMEN 15",
      "Intel Core i7-9750H",
      "SDRAM DDR4 16TB",
      "NVIDIA GeForce GTX 1660 Ti (6GB GDDR6)",
      "1TB SSD",
      "FHD IPS 15.6"
    ],
    width: [48.5, 61.6],
    height: [27.5, 47.5]
  },
  {
    title: "Auriculares",
    img: img_headphones,
    alt: "En mi setup. Yo vestido de palmera con gafas de sol señalando a los cascos",
    txt: ["Bose QuietComfort 35 II"],
    width: [69.5, 85.5],
    height: [69.5, 85]
  },
  {
    title: "Teclado",
    img: img_keyboard,
    alt: "En mi setup. Yo vestido de palmera con gafas de sol señalando al teclado",
    txt: ["HP OMEN 1100", "Switches: Cherry-MX Glue"],
    width: [42.8, 64],
    height: [54, 68]
  },
  {
    title: "Aro de luz",
    img: img_led_ring,
    alt: "En mi setup. Yo vestido de palmera con gafas de sol señalando al aro de luz",
    txt: ["Neewer 25CM", "120 leds", "Temperatura de color: 3200K-5600K"],
    width: [86.5, 97],
    height: [2, 32]
  },
  {
    title: "Panel de luz",
    img: img_light_panel,
    alt: "En mi setup. Yo vestido de palmera con gafas de sol señalando al panel de luz",
    txt: [
      "Elgato Key Light",
      "2500 lúmenes",
      "Temperatura de color: 2900-7000 K"
    ],
    width: [38.5, 53.5],
    height: [8, 24]
  },
  {
    title: "Micrófono",
    img: img_mic,
    alt: "En mi setup. Yo vestido de palmera con gafas de sol señalando al micrófono",
    txt: ["Samson Meteor Mic", "20Hz-20kHz", "Brazo YOTTO con filtro anti pop"],
    width: [43, 48.5],
    height: [39.5, 50]
  },
  {
    title: "Ratón",
    img: img_mouse,
    alt: "En mi setup. Yo vestido de palmera con gafas de sol señalando al ratón",
    txt: ["Logitech G203 2nd Gen", "Lightsync"],
    width: [64, 69.5],
    height: [68, 75.5]
  },
  {
    title: "Pantalla",
    img: img_screen,
    alt: "En mi setup. Yo vestido de palmera con gafas de sol señalando a la pantalla",
    txt: ["Philips 24M1N3200ZA/00 23.8", "IPS FullHD 165Hz"],
    width: [61.6, 86.5],
    height: [22.5, 51.5]
  }
];

const zone_default = {
  img: img_me,
  alt: "En mi setup. Yo vestido de palmera con gafas de sol mirando a cámara",
  txt: ["Pasa el puntero por encima"]
};
function between(x, interval) {
  return x >= interval[0] && x <= interval[1];
}

function checkZone(width, height, zone) {
  if (between(width, zone.width) && between(height, zone.height)) {
    return zone;
  }
  return;
}

function Data(width, heigth) {
  for (var i = 0; i < zones.length; i++) {
    let zone = checkZone(width, heigth, zones[i]);
    if (zone !== undefined) {
      return zone;
    }
  }
  return zone_default;
}

export default Data;
