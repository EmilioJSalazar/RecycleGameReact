import GlassBottle from "../images/wine-bottle.svg";
import AppleCore from "../images/apple-core.svg";
import CardboardBox from "../images/cardboard-box.svg";
import CoffeeCup from "../images/coffee-cup2.svg";
import DrinksCan from "../images/drinks-can.svg";
import MilkCarton from "../images/milk-carton.svg";
import Newspaper from "../images/newspaper.svg";
import Papers from "../images/paper.svg";
import PlasticBag from "../images/plastic-bag.svg";
import PlasticBottle from "../images/plastic-bottle.svg";
import Shirt from "../images/shirt.svg";
import SweetWrapper from "../images/sweet-wrapper.svg";
import TeaBag from "../images/tea-bag.svg";
import TinCan from "../images/tin-can.svg";

const items = [
  {
    name: "Botellas de vidrio",
    src: GlassBottle,
    bin: "reciclaje",
    fact: "Las familias usan alrededor de 330 botellas y frascos de vidrio cada año."
  },
  {
    name: "Taza de café",
    src: CoffeeCup,
    bin: "desecho general",
    fact: "¡A veces puedes llevar las tazas de café a la tienda para reciclarlas!"
  },
  {
    name: "Periódicos",
    src: Newspaper,
    bin: "reciclaje",
    fact: "¡Se necesita un árbol para hacer 230 periódicos o revistas!"
  },
  {
    name: "Bolsas de té",
    src: TeaBag,
    bin: "desecho de comida",
    fact: "¡Las bolsitas de té se pueden convertir en abono para tus plantas!"
  },
  {
    name: "Cáscara de manzana",
    src: AppleCore,
    bin: "desecho de comida",
    fact: "¡Los alimentos no consumidos se pueden usar para hacer comida para animales!"
  },
  {
    name: "Cajas de cartón",
    src: CardboardBox,
    bin: "reciclaje",
    fact: "¡Aplana las cajas de cartón antes de que vayan a la basura!"
  },
  {
    name: "Latas de bebida",
    src: DrinksCan,
    bin: "reciclaje",
    fact: "¡Una lata de bebida reciclada podría estar de vuelta en las tiendas como una nueva bebida dentro de los 60 días!"
  },
  {
    name: "Cartones de leche",
    src: MilkCarton,
    bin: "reciclaje",
    fact:
      "Los cartones de bebidas generalmente se pueden reciclar, pero no siempre... ¡vea si puede encontrar las reglas para su área!"
  },
  {
    name: "Papeles",
    src: Papers,
    bin: "reciclaje",
    fact: "Se recicla al rededor del 37% de papel en todo el mundo, sin embargo el objetivo es que algún día llegue a ser el 100%."
  },
  {
    name: "Bolsa de plástico",
    src: PlasticBag,
    bin: "desecho general",
    fact: "¡Si consigues una bolsa reutilizable no necesitarás tantas bolsas de plástico!"
  },
  {
    name: "Botellas de plástico",
    src: PlasticBottle,
    bin: "reciclaje",
    fact: "¡El plástico puede tardar hasta 500 años en descomponerse por completo!"
  },
  {
    name: "Ropa",
    src: Shirt,
    bin: "desecho general",
    fact:
      "Es posible que no puedas reciclar la ropa en casa, ¡pero probablemente puedas llevarla a un centro de reciclaje!"
  },
  {
    name: "Envoltorios de dulces",
    src: SweetWrapper,
    bin: "desecho general",
    fact:
      "¡Cada año, tiramos suficiente plástico para dar la vuelta al mundo 5 veces!"
  },
  {
    name: "Lata",
    src: TinCan,
    bin: "reciclaje",
    fact: "¡La comida enlatada puede durar dos años!"
  }
];

export default items;
