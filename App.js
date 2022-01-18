import './App.css';
import GameStart from "./components/GameStart";
import {useState} from "react";
import Main from "./components/Main";
import Shop from "./components/Shop";
import Arena from "./components/Arena";




const players = [
  {
    image: "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blte097d3ac18c5b8ed/6165ec51ff59d903990f26e3/EE3E9KVL9ROW1613677289232.png",
    race: "Human",
    damage: 3,
    health: 150,
    energy: 50,
    stamina: 3,
    strength: 1,
    inventorySlots: 3,
    gold: 100
  },
  {
    image: "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/bltad40c8b16ba5146c/6165db02ff59d903990f26dd/3BSJB91SIUBO1613677288515.png",
    race: "Dwarf",
    damage: 5,
    health: 90,
    energy: 30,
    stamina: 4,
    strength: 3,
    inventorySlots: 5,
    gold: 300
  },
  {
    image: "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/bltdd9c3bc7630ea097/6165ee1b85a779070bc77f55/A62H0NRB056O1613677289519.png",
    race: "Elf",
    damage: 4,
    health: 100,
    energy: 40,
    stamina: 5,
    strength: 1,
    inventorySlots: 2,
    gold: 200
  },
  {
    image: "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt5440cbe6b11972e4/6165e787c7341a058edee6c1/ZGHFCTYH33H41613677288710.png",
    race: "Gnome",
    damage: 3,
    health: 80,
    energy: 80,
    stamina: 7,
    strength: 1,
    inventorySlots: 4,
    gold: 1000
  },

  {
    image: "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt8a0bea138cdc9f77/6165eebb70b75d5011e405d4/GYI6XASNQ8YE1613677290450.png",
    race: "Orc",
    damage: 7,
    health: 120,
    energy: 40,
    stamina: 1,
    strength: 10,
    inventorySlots: 5,
    gold: 50
  },
  {
    image: "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blte86b6ed1f29656b9/6165e7dedfd0436b6dcf6e2e/YAAFZMAKCVPG1613677288954.png",
    race: "Goblin",
    damage: 5,
    health: 90,
    energy: 90,
    stamina: 5,
    strength: 2,
    inventorySlots: 3,
    gold: 200
  },
  {
    image: "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt9d279b401555fd09/6165efc047c23d6a01ffdf49/NF9Y4RYPBLZ91613677291342.png",
    race: "Troll",
    damage: 6,
    health: 100,
    energy: 70,
    stamina: 4,
    strength: 4,
    inventorySlots: 3,
    gold: 100
  },
  {
    image: "https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt0b1f2cd145aedbcd/6165f001a3e18902e03811d3/4UX5EM1CFKV81613677292421.png",
    race: "Undead",
    damage: 4,
    health: 40,
    energy: 50,
    stamina: 10,
    strength: 1,
    inventorySlots: 8,
    gold: 400
  },
]
const trader = {
  weapons: [
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Sword_04.gif",
      maxDamage: 4,
      price: 50,
      energyPerHit: 20,
      effects: []
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Mace_01.gif",
      maxDamage: 6,
      price: 70,
      energyPerHit: 19,
      effects: []
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Axe_23.gif",
      maxDamage: 7,
      price: 80,
      energyPerHit: 18,
      effects: []
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_ThrowingAxe_03.gif",
      maxDamage: 8,
      price: 120,
      energyPerHit: 17,
      effects: []
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Sword_27.gif",
      maxDamage: 9,
      price: 150,
      energyPerHit: 17,
      effects: []
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_ThrowingAxe_01.gif",
      maxDamage: 10,
      price: 200,
      energyPerHit: 16,
      effects: []
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Hammer_15.gif",
      maxDamage: 11,
      price: 500,
      energyPerHit: 15,
      effects: ["s1"]
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Hammer_09.gif",
      maxDamage: 13,
      price: 600,
      energyPerHit: 17,
      effects: ["s1"]
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Pick_02.gif",
      maxDamage: 13,
      price: 700,
      energyPerHit: 15,
      effects: ["s1"]
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Mace_03.gif",
      maxDamage: 12,
      price: 800,
      energyPerHit: 14,
      effects: ["s1"]
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Sword_47.gif",
      maxDamage: 13,
      price: 900,
      energyPerHit: 15,
      effects: ["s1"]
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Sword_16.gif",
      maxDamage: 15,
      price: 1500,
      energyPerHit: 14,
      effects: ["s1", "i1"]
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Hammer_16.gif",
      maxDamage: 15,
      price: 2000,
      energyPerHit: 15,
      effects: ["s2", "i1", "d1"]
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Mace_02.gif",
      maxDamage: 13,
      price: 4000,
      energyPerHit: 18,
      effects: ["d2", "s1", "h2", "sta1"]
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Sword_34.gif",
      maxDamage: 14,
      price: 10000,
      energyPerHit: 12,
      effects: ["e2", "h3", "i1"]
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Sword_26.gif",
      maxDamage: 12,
      price: 12000,
      energyPerHit: 14,
      effects: ["s3", "sta3", "h2"]
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_04.gif",
      maxDamage: 9,
      price: 15000,
      energyPerHit: 8,
      effects: ["h4", "d3", "s2", "i1"]
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Mace_07.gif",
      maxDamage: 18,
      price: 20000,
      energyPerHit: 25,
      effects: ["s4", "i3", "h7"]
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Axe_04.gif",
      maxDamage: 16,
      price: 23000,
      energyPerHit: 14,
      effects: ["i3", "sta5", "d4", "s3"]
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Mace_34.gif",
      maxDamage: 17,
      price: 250000,
      energyPerHit: 17,
      effects: ["s3", "i4", "h3", "d3"]
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Sword_23.gif",
      maxDamage: 15,
      price: 30000,
      energyPerHit: 15,
      effects: ["sta5", "s3", "i2", "h2", "e3"]
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Axe_11.gif",
      maxDamage: 14,
      price: 35000,
      energyPerHit: 14,
      effects: ["sta4", "s3", "i2", "h4", "e2"]
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Weapon_ShortBlade_03.gif",
      maxDamage: 18,
      price: 50000,
      energyPerHit: 13,
      effects: ["sta4", "s3", "i2", "h4", "e2", "d4"]
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Mace_35.gif",
      maxDamage: 18,
      price: 60000,
      energyPerHit: 15,
      effects: ["sta3", "s3", "i5", "h3", "e2", "d2"]
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Mace_67.gif",
      maxDamage: 18,
      price: 70000,
      energyPerHit: 16,
      effects: ["sta5", "s3", "i3", "h3", "e4", "d3"]
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Mace_69.gif",
      maxDamage: 20,
      price: 100000,
      energyPerHit: 15,
      effects: ["sta6", "s5", "i5", "h4", "e2", "d5"]
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Weapon_Shortblade_67.gif",
      maxDamage: 18,
      price: 150000,
      energyPerHit: 13,
      effects: ["sta6", "s5", "i5", "h4", "e2", "d8"]
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Axe_08.gif",
      maxDamage: 19,
      price: 200000,
      energyPerHit: 14,
      effects: ["sta5", "s5", "i8", "h6", "e4", "d6"]
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Weapon_ShortBlade_21.gif",
      maxDamage: 10,
      price: 250000,
      energyPerHit: 10,
      effects: ["sta6", "s8", "i6", "h8", "e6", "d6"]
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Mace_40.gif",
      maxDamage: 14,
      price: 300000,
      energyPerHit: 14,
      effects: ["sta6", "s8", "i5", "h7", "e6", "d10"]
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Weapon_ShortBlade_06.gif",
      maxDamage: 11,
      price: 350000,
      energyPerHit: 12,
      effects: ["sta7", "s6", "i4", "h6", "e7", "d7"]
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Sword_43.gif",
      maxDamage: 18,
      price: 400000,
      energyPerHit: 14,
      effects: ["sta6", "s6", "i10", "h6", "e6", "d6"]
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Mace_48.gif",
      maxDamage: 25,
      price: 500000,
      energyPerHit: 8,
      effects: ["sta6", "s6", "i10", "h6", "e6", "d6"]
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Weapon_Glave_01.gif",
      maxDamage: 30,
      price: 800000,
      energyPerHit: 5,
      effects: ["sta7", "s7", "i8", "h7", "e7", "d7"]
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Weapon_Hand_10.gif",
      maxDamage: 30,
      price: 1000000,
      energyPerHit: 3,
      effects: ["sta10", "s10", "i10", "h10", "e10", "d10"]
    }

  ],
  potions: [
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_21.gif",
      title: "Health + 10",
      effect: {
        health: 10
      },
      price: 200
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_21.gif",
      title: "Health + 20",
      effect: {
        health: 20
      },
      price: 400
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_21.gif",
      title: "Health + 30",
      effect: {
        health: 30
      },
      price: 600
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_21.gif",
      title: "Health + 40",
      effect: {
        health: 40
      },
      price: 800
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_21.gif",
      title: "Health + 50",
      effect: {
        health: 50
      },
      price: 1000
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_21.gif",
      title: "Health + 60",
      effect: {
        health: 60
      },
      price: 1200
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_21.gif",
      title: "Health + 70",
      effect: {
        health: 70
      },
      price: 1400
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_21.gif",
      title: "Health + 80",
      effect: {
        health: 80
      },
      price: 1800
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_21.gif",
      title: "Health + 90",
      effect: {
        health: 90
      },
      price: 1800
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_21.gif",
      title: "Health + 100",
      effect: {
        health: 100
      },
      price: 2000
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_156.gif",
      title: "Energy + 10",
      effect: {
        energy: 10
      },
      price: 300
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_156.gif",
      title: "Energy + 20",
      effect: {
        energy: 20
      },
      price: 600
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_156.gif",
      title: "Energy + 30",
      effect: {
        energy: 30
      },
      price: 900
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_156.gif",
      title: "Energy + 40",
      effect: {
        energy: 40
      },
      price: 1200
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_156.gif",
      title: "Energy + 50",
      effect: {
        energy: 50
      },
      price: 1500
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_156.gif",
      title: "Energy + 60",
      effect: {
        energy: 60
      },
      price: 1800
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_156.gif",
      title: "Energy + 70",
      effect: {
        energy: 70
      },
      price: 2100
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_156.gif",
      title: "Energy + 80",
      effect: {
        energy: 80
      },
      price: 2400
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_156.gif",
      title: "Energy + 90",
      effect: {
        energy: 90
      },
      price: 2700
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_156.gif",
      title: "Energy + 100",
      effect: {
        energy: 100
      },
      price: 3000
    },
  ],
}
const monsters = [
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/b/b1/Basilisk.png",
    name: "Basilisk",
    maxDamage: 5,
    health: 100
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/7/75/VampireBat.png",
    name: "Bat",
    maxDamage: 8,
    health: 80
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/a/a4/Bear.png",
    name: "Bear",
    maxDamage: 20,
    health: 150
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/6/60/Beetle.png",
    name: "Beetle",
    maxDamage: 3,
    health: 300
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/6/6f/Boar.png",
    name: "Boar",
    maxDamage: 7,
    health: 85
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/0/01/Vulture.png",
    name: "Carrion bird",
    maxDamage: 6,
    health: 170
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/3/36/Chimera.png",
    name: "Chimaera",
    maxDamage: 12,
    health: 190
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/3/33/Clefthoof.png",
    name: "Clefthoof",
    maxDamage: 50,
    health: 500
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/6/63/Crab.png",
    name: "Crab",
    maxDamage: 8,
    health: 120
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/4/46/Crocolisk.png",
    name: "Crocolisk",
    maxDamage: 38,
    health: 420
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/5/51/Devilsaur.png",
    name: "Devilsaur",
    maxDamage: 25,
    health: 250
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/6/6c/Diemetradon.png",
    name: "Diemetradon",
    maxDamage: 12,
    health: 90
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/3/34/Dragonhawk1.png",
    name: "Dragonhawk",
    maxDamage: 120,
    health: 20
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/0/03/Elekk.png",
    name: "Elekk",
    maxDamage: 34,
    health: 160
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/7/73/Fox.png",
    name: "Fox",
    maxDamage: 5,
    health: 50
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/2/2f/Gryphon.png",
    name: "Gryphon",
    maxDamage: 18,
    health: 350
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/8/84/Gorilla.png",
    name: "Gorilla",
    maxDamage: 30,
    health: 240
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/c/c3/Horse.png",
    name: "Horse",
    maxDamage: 3,
    health: 150
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/9/9d/Hydra.png",
    name: "Hydra",
    maxDamage: 40,
    health: 500
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/e/ee/HyenaBlue.png",
    name: "Hyena",
    maxDamage: 9,
    health: 120
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/e/e5/Cat_lion.png",
    name: "Lion",
    maxDamage: 13,
    health: 200
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/b/b8/Lynx.png",
    name: "Lynx",
    maxDamage: 12,
    health: 150
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/9/9c/Mastiff.png",
    name: "Mastiff",
    maxDamage: 7,
    health: 80
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/2/27/Monkey.png",
    name: "Monkey",
    maxDamage: 4,
    health: 300
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/0/08/Netherray.png",
    name: "Nether ray",
    maxDamage: 6,
    health: 120
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/b/be/OwlWhite.png",
    name: "Owl",
    maxDamage: 7,
    health: 70
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/3/36/Panther.png",
    name: "Panther",
    maxDamage: 19,
    health: 40
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/1/16/Parrot.png",
    name: "Parrot",
    maxDamage: 2,
    health: 30
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/6/66/Raven.png",
    name: "Raven",
    maxDamage: 8,
    health: 150
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/c/c2/Rhino.png",
    name: "Rhinoceros",
    maxDamage: 120,
    health: 1500
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/a/ab/Scorpion.png",
    name: "Scorpid",
    maxDamage: 25,
    health: 300
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/1/1a/Sea_Snake.png",
    name: "Sea snake",
    maxDamage: 5,
    health: 50
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/8/89/Serpent.png",
    name: "Serpent",
    maxDamage: 12,
    health: 80
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/1/14/Shark.png",
    name: "Shark",
    maxDamage: 15,
    health: 210
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/5/51/Sporebat.png",
    name: "Spore bat",
    maxDamage: 9,
    health: 150
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/1/10/Stag.png",
    name: "Stag",
    maxDamage: 4,
    health: 200
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/1/12/Strider.png",
    name: "Tallstrider",
    maxDamage: 20,
    health: 80
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/3/3c/Threshadon.png",
    name: "Threshadon",
    maxDamage: 70,
    health: 800
  },
  {
    image: "https://static.wikia.nocookie.net/wowwiki/images/e/e9/Turtle.png",
    name: "Turtle",
    maxDamage: 3,
    health: 5000
  }
]

function App() {

  const [game, setGame]=useState('start');
  const [myPlayer, setMyPlayer]=useState( {
    image: '',
    race: '',
    damage: 0,
    health: 0,
    energy: 0,
    stamina: 0,
    strength: 0,
    inventorySlots: 0,
    gold: 0
  });
  const [myInventory, setMyInventory] = useState([]);
  const [money, setMoney] = useState(0);

  const gameStatus=(st) => {
    setGame(st);
    console.log('game status', st);
  };
  const choosePlayer=(pl) => {
    setMyPlayer(pl);
    setMoney(pl.gold);
    console.log('renkuosi zaideja', pl);
  };

  const addInventory=(item) => {
    if (myPlayer.inventorySlots>myInventory.length && money>=item.price && game==='shop') {
      setMyInventory([...myInventory, item]);
      setMoney(money-item.price);
    }
  }




  return (
    <div className="App">
      {game==='start' && <GameStart players={players} monsters={monsters} gameStatus={gameStatus} choosePlayer={choosePlayer} game={game}/>}
      {game==='main' && <Main player={myPlayer} myInventory={myInventory} gameStatus={gameStatus} money={money}/>}
      {game==='shop' && <Shop player={myPlayer} trader={trader} addInventory={addInventory} myInventory={myInventory} gameStatus={gameStatus} money={money}/> }
      {game==='arena' && <Arena player={myPlayer} trader={trader} addInventory={addInventory} myInventory={myInventory} gameStatus={gameStatus} money={money} monsters={monsters}/> }
    </div>
  );
}

export default App;




// In arena player fights monster,
//     player can equip one weapon form inventory and player can drink health potions
// weapons determine how much damage player does to the monster
// When monster dies, player is rewarded random amount of money from 1 to 1000
// when monster dies another one is spawned



// const monsters = [
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/b/b1/Basilisk.png/revision/latest/scale-to-width-down/350?cb=20121201154614",
//     name: "Basilisk",
//     maxDamage: 5,
//     health: 100
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/7/75/VampireBat.png/revision/latest/scale-to-width-down/300?cb=20061203004624",
//     name: "Bat",
//     maxDamage: 8,
//     health: 80
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/a/a4/Bear.png/revision/latest/scale-to-width-down/300?cb=20061203004840",
//     name: "Bear",
//     maxDamage: 20,
//     health: 150
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/6/60/Beetle.png/revision/latest/scale-to-width-down/250?cb=20121201160459",
//     name: "Beetle",
//     maxDamage: 3,
//     health: 300
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/6/6f/Boar.png/revision/latest/scale-to-width-down/300?cb=20061203005151",
//     name: "Boar",
//     maxDamage: 7,
//     health: 85
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/0/01/Vulture.png/revision/latest/scale-to-width-down/300?cb=20061203005421",
//     name: "Carrion bird",
//     maxDamage: 6,
//     health: 170
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/3/36/Chimera.png/revision/latest/scale-to-width-down/350?cb=20061210085044",
//     name: "Chimaera",
//     maxDamage: 12,
//     health: 190
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/3/33/Clefthoof.png/revision/latest/scale-to-width-down/292?cb=20070118031744",
//     name: "Clefthoof",
//     maxDamage: 50,
//     health: 500
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/6/63/Crab.png/revision/latest/scale-to-width-down/247?cb=20061210074317",
//     name: "Crab",
//     maxDamage: 8,
//     health: 120
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/4/46/Crocolisk.png/revision/latest/scale-to-width-down/324?cb=20080828013142",
//     name: "Crocolisk",
//     maxDamage: 38,
//     health: 420
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/5/51/Devilsaur.png/revision/latest/scale-to-width-down/336?cb=20061210073105",
//     name: "Devilsaur",
//     maxDamage: 25,
//     health: 250
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/6/6c/Diemetradon.png/revision/latest/scale-to-width-down/266?cb=20061210065247",
//     name: "Diemetradon",
//     maxDamage: 12,
//     health: 90
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/3/34/Dragonhawk1.png/revision/latest/scale-to-width-down/350?cb=20121130043554",
//     name: "Dragonhawk",
//     maxDamage: 120,
//     health: 20
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/0/03/Elekk.png/revision/latest/scale-to-width-down/275?cb=20091104215421",
//     name: "Elekk",
//     maxDamage: 34,
//     health: 160
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/7/73/Fox.png/revision/latest/scale-to-width-down/280?cb=20121201052045",
//     name: "Fox",
//     maxDamage: 5,
//     health: 50
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/2/2f/Gryphon.png/revision/latest/scale-to-width-down/242?cb=20101007210234",
//     name: "Gryphon",
//     maxDamage: 18,
//     health: 350
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/8/84/Gorilla.png/revision/latest/scale-to-width-down/250?cb=20061203010022",
//     name: "Gorilla",
//     maxDamage: 30,
//     health: 240
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/c/c3/Horse.png/revision/latest/scale-to-width-down/170?cb=20091104211439",
//     name: "Horse",
//     maxDamage: 3,
//     health: 150
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/9/9d/Hydra.png/revision/latest/scale-to-width-down/337?cb=20061210172748",
//     name: "Hydra",
//     maxDamage: 40,
//     health: 500
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/e/ee/HyenaBlue.png/revision/latest/scale-to-width-down/300?cb=20080828010402",
//     name: "Hyena",
//     maxDamage: 9,
//     health: 120
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/e/e5/Cat_lion.png/revision/latest/scale-to-width-down/259?cb=20070107043059",
//     name: "Lion",
//     maxDamage: 13,
//     health: 200
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/b/b8/Lynx.png/revision/latest/scale-to-width-down/250?cb=20080901054230",
//     name: "Lynx",
//     maxDamage: 12,
//     health: 150
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/9/9c/Mastiff.png/revision/latest/scale-to-width-down/187?cb=20100817202813",
//     name: "Mastiff",
//     maxDamage: 7,
//     health: 80
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/2/27/Monkey.png/revision/latest/scale-to-width-down/300?cb=20121130044608",
//     name: "Monkey",
//     maxDamage: 4,
//     health: 300
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/0/08/Netherray.png/revision/latest/scale-to-width-down/246?cb=20070107034620",
//     name: "Nether ray",
//     maxDamage: 6,
//     health: 120
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/b/be/OwlWhite.png/revision/latest/scale-to-width-down/300?cb=20091018094959",
//     name: "Owl",
//     maxDamage: 7,
//     health: 70
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/3/36/Panther.png/revision/latest/scale-to-width-down/337?cb=20091103152906",
//     name: "Panther",
//     maxDamage: 19,
//     health: 40
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/1/16/Parrot.png/revision/latest/scale-to-width-down/200?cb=20091018094553",
//     name: "Parrot",
//     maxDamage: 2,
//     health: 30
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/6/66/Raven.png/revision/latest/scale-to-width-down/250?cb=20091017112052",
//     name: "Raven",
//     maxDamage: 8,
//     health: 150
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/c/c2/Rhino.png/revision/latest/scale-to-width-down/300?cb=20121201165729",
//     name: "Rhinoceros",
//     maxDamage: 120,
//     health: 1500
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/a/ab/Scorpion.png/revision/latest/scale-to-width-down/250?cb=20061204032117",
//     name: "Scorpid",
//     maxDamage: 25,
//     health: 300
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/1/1a/Sea_Snake.png/revision/latest/scale-to-width-down/200?cb=20100806204454",
//     name: "Sea snake",
//     maxDamage: 5,
//     health: 50
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/8/89/Serpent.png/revision/latest/scale-to-width-down/250?cb=20090216040417",
//     name: "Serpent",
//     maxDamage: 12,
//     health: 80
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/1/14/Shark.png/revision/latest/scale-to-width-down/286?cb=20061210084713",
//     name: "Shark",
//     maxDamage: 15,
//     health: 210
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/5/51/Sporebat.png/revision/latest/scale-to-width-down/316?cb=20070118032859",
//     name: "Spore bat",
//     maxDamage: 9,
//     health: 150
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/1/10/Stag.png/revision/latest/scale-to-width-down/240?cb=20061210085407",
//     name: "Stag",
//     maxDamage: 4,
//     health: 200
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/1/12/Strider.png/revision/latest/scale-to-width-down/288?cb=20061204032950",
//     name: "Tallstrider",
//     maxDamage: 20,
//     health: 80
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/3/3c/Threshadon.png/revision/latest/scale-to-width-down/267?cb=20070107033740",
//     name: "Threshadon",
//     maxDamage: 70,
//     health: 800
//   },
//   {
//     image: "https://static.wikia.nocookie.net/wowwiki/images/e/e9/Turtle.png/revision/latest/scale-to-width-down/295?cb=20061210074624",
//     name: "Turtle",
//     maxDamage: 3,
//     health: 5000
//   }
// ]

