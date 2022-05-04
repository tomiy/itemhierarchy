import Item from "./Item.js";
import Recipe from "./Recipe.js";
import * as Workstations from "./Workstations.js";

// Raw Materials
export const ANIMAL_HIDE = new Item("Animal Hide");
export const RAT = new Item("Rat"); // Vermin Nest
export const PLANT_FIBER = new Item("Plant Fiber");
export const LUMBER = new Item("Lumber");
export const STONE = new Item("Stone");
export const BONE = new Item("Bone");
export const CLAY = new Item("Clay");
export const COPPER_ORE = new Item("Copper Ore");
export const SULFUR_ORE = new Item("Sulfur Ore");
export const IRON_ORE = new Item("Iron Ore");
export const SILVER_ORE = new Item("Silver Ore");
export const GOLDEN_JEWELRY = new Item("Golden Jewelry");
export const BLOOD_ROSE = new Item("Blood Rose");
export const HELLS_CLARION = new Item("Hells Clarion");
export const MOURNING_LILY = new Item("Mourning Lily");
export const FIRE_BLOSSOM = new Item("Fire Blossom");
export const PRISTINE_HIDE = new Item("Pristine Hide");
export const FISH_OIL = new Item("Fish Oil");
export const COTTON = new Item("Cotton");
export const COARSE_THREAD = new Item("Coarse Thread");
export const GHOST_SHROOM = new Item("Ghost Shroom");
export const HIGHLAND_LOTUS = new Item("Highland Lotus");
export const SILKWORM = new Item("Silkworm");
export const SUNFLOWER = new Item("Sunflower");
export const SNOW_FLOWER = new Item("Snow Flower");
export const CRUDE_SAPPHIRE = new Item("Crude Sapphire");
export const CRUDE_RUBY = new Item("Crude Ruby");
export const CRUDE_TOPAZ = new Item("Crude Topaz");
export const CRUDE_EMERALD = new Item("Crude Emerald");
export const CRUDE_MISTSTONE = new Item("Crude Miststone");
export const CRUDE_AMETHYST = new Item("Crude Amethyst");
export const DEFILED_HEART = new Item("Defiled Heart");
export const TAINTED_HEART = new Item("Tainted Heart");
export const UNSULLIED_HEART = new Item("Unsullied Heart");
export const WATER_FILLED_CANTEEN = new Item("Water Filled Canteen");

// Blood Press
export const BLOOD_ESSENCE = new Item("Blood Essence");
export const GREATER_BLOOD_ESSENCE = new Item("Greater Blood Essence");

// Sawmill
export const PLANK = new Item("Plank");
export const SAWDUST = new Item("Sawdust");
export const REINFORCED_PLANK = new Item("Reinforced Plank");

// Grinder
export const STONE_BRICK = new Item("Stone Brick");
export const STONE_DUST = new Item("Stone Dust");
export const GRAVE_DUST = new Item("Grave Dust");
export const STONE_BODY = new Item("Stone Body");
export const CLAY_MOLD = new Item("Clay Mold");
export const GEM_DUST = new Item("Gem Dust");
export const GHOST_CRYSTAL = new Item("Ghost Crystal");
export const SPECTRAL_DUST = new Item("Spectral Dust");

// Forge
export const COPPER_INGOT = new Item("Copper Ingot");
export const WHETSTONE = new Item("Whetstone");
export const SULFUR = new Item("Sulfur");
export const IRON_INGOT = new Item("Iron Ingot");
export const QUARTZ = new Item("Quartz");
export const GLASS = new Item("Glass");
export const SCOURGESTONE = new Item("Scourgestone");
export const DARK_SILVER_INGOT = new Item("Dark Silver Ingot");
export const GOLD_INGOT = new Item("Gold Ingot");

// Tannery
export const LEATHER = new Item("Leather");
export const EMPTY_CANTEEN = new Item("Empty Canteen");
export const PRISTINE_LEATHER = new Item("Pristine Leather");

// Loom
export const CLOTH = new Item("Cloth");
export const COTTON_YARN = new Item("Cotton Yarn");
export const WOOL_THREAD = new Item("Wool Thread");
export const GHOST_YARN = new Item("Ghost Yarn");
export const SILK = new Item("Silk");
export const IMPERIAL_THREAD = new Item("Imperial Thread");

// Paper Press
export const PAPER = new Item("Paper");
export const SCROLL = new Item("Scroll");
export const SCHEMATIC = new Item("Schematic");

// Gem Cutting Table
export const REGULAR_SAPPHIRE = new Item("Regular Sapphire");
export const REGULAR_RUBY = new Item("Regular Ruby");
export const REGULAR_TOPAZ = new Item("Regular Topaz");
export const REGULAR_EMERALD = new Item("Regular Emerald");
export const REGULAR_MISTSTONE = new Item("Regular Miststone");
export const REGULAR_AMETHYST = new Item("Regular Amethyst");

// Inventory
export const BONE_SWORD = new Item("Bone Sword");
export const BONE_AXES = new Item("Bone Axes");
export const BONE_MACE = new Item("Bone Mace");
export const BONE_SPEAR = new Item("Bone Spear");
export const BONE_RING = new Item("Bone Ring");
export const BONEGUARD_CHESTGUARD = new Item("Boneguard Chestguard");
export const BONEGUARD_LEGGINGS = new Item("Boneguard Leggings");
export const BONEGUARD_GLOVES = new Item("Boneguard Gloves");
export const BONEGUARD_BOOTS = new Item("Boneguard Boots");

// Simple Workbench
export const REINFORCED_BONE_SWORD = new Item("Reinforced Bone Sword");
export const REINFORCED_BONE_AXES = new Item("Reinforced Bone Axes");
export const REINFORCED_BONE_MACE = new Item("Reinforced Bone Mace");
export const REINFORCED_BONE_SPEAR = new Item("Reinforced Bone Spear");
export const COPPER_SWORD = new Item("Copper Sword");
export const COPPER_AXES = new Item("Copper Axes");
export const COPPER_MACE = new Item("Copper Mace");
export const COPPER_SPEAR = new Item("Copper Spear");
export const MERCILESS_COPPER_SWORD = new Item("Merciless Copper Sword");
export const MERCILESS_COPPER_AXES = new Item("Merciless Copper Axes");
export const MERCILESS_COPPER_MACE = new Item("Merciless Copper Mace");
export const MERCILESS_COPPER_SPEAR = new Item("Merciless Copper Spear");
export const BLOOD_ROSE_RING = new Item("Blood Rose Ring");
export const GRAVEDIGGER_RING = new Item("Gravedigger Ring");
export const THE_EMBER_CHAIN = new Item("The Ember Chain");
export const THE_FROZEN_EYE = new Item("The Frozen Eye");
export const DUSKWATCHERS_RING = new Item("Duskwatcher's Ring");
export const MIST_SIGNET = new Item("Mist Signet");
export const PLATED_BONEGUARD_CHESTGUARD = new Item("Plated Boneguard Chestguard");
export const PLATED_BONEGUARD_LEGGINGS = new Item("Plated Boneguard Leggings");
export const PLATED_BONEGUARD_GLOVES = new Item("Plated Boneguard Gloves");
export const PLATED_BONEGUARD_BOOTS = new Item("Plated Boneguard Boots");
export const NIGHSTALKER_VEST = new Item("Nightstalker Vest");
export const NIGHSTALKER_LEGGINGS = new Item("Nightstalker Leggings");
export const NIGHSTALKER_GLOVES = new Item("Nightstalker Gloves");
export const NIGHSTALKER_BOOTS = new Item("Nightstalker Boots");
export const MERCILESS_NIGHSTALKER_VEST = new Item("Merciless Nightstalker Vest");
export const MERCILESS_NIGHSTALKER_LEGGINGS = new Item("Merciless Nightstalker Leggings");
export const MERCILESS_NIGHSTALKER_GLOVES = new Item("Merciless Nightstalker Gloves");
export const MERCILESS_NIGHSTALKER_BOOTS = new Item("Merciless Nightstalker Boots");
export const TRAVELERS_WRAP = new Item("Traveler's Wrap");

// Smithy
export const IRON_BODY = new Item("Iron Body");
export const IRON_SWORD = new Item("Iron Sword");
export const IRON_AXES = new Item("Iron Axes");
export const IRON_MACE = new Item("Iron Mace");
export const IRON_SPEAR = new Item("Iron Spear");
export const IRON_REAPER = new Item("Iron Reaper");
export const IRON_SLASHERS = new Item("Iron Slashers");
export const MERCILESS_IRON_SWORD = new Item("Merciless Iron Sword");
export const MERCILESS_IRON_AXES = new Item("Merciless Iron Axes");
export const MERCILESS_IRON_MACE = new Item("Merciless Iron Mace");
export const MERCILESS_IRON_SPEAR = new Item("Merciless Iron Spear");
export const MERCILESS_IRON_REAPER = new Item("Merciless Iron Reaper");
export const MERCILESS_IRON_SLASHERS = new Item("Merciless Iron Slashers");

// Alchemy Table
export const VERMIN_SALVE = new Item("Vermin Salve");
export const BLOOD_ROSE_BREW = new Item("Blood Rose Brew");
export const MINOR_GARLIC_RESISTANCE_BREW = new Item("Minor Garlic Resistance Brew");
export const MINOR_SUN_RESISTANCE_BREW = new Item("Minor Sun Resistance Brew");

WATER_FILLED_CANTEEN.addRecipe(new Recipe(Workstations.ENVIRONMENT).addComponent(EMPTY_CANTEEN, 1));

BLOOD_ESSENCE.addRecipe(new Recipe(Workstations.BLOOD_PRESS).addComponent(RAT, 4).setRecipeTime(30).setRecipeYield(10));
BLOOD_ESSENCE.addRecipe(new Recipe(Workstations.BLOOD_PRESS).addComponent(DEFILED_HEART, 4).setRecipeTime(30).setRecipeYield(20));
BLOOD_ESSENCE.addRecipe(new Recipe(Workstations.BLOOD_PRESS).addComponent(TAINTED_HEART, 4).setRecipeTime(60).setRecipeYield(60));
GREATER_BLOOD_ESSENCE.addRecipe(new Recipe(Workstations.BLOOD_PRESS).addComponent(UNSULLIED_HEART, 4).setRecipeTime(180));
GREATER_BLOOD_ESSENCE.addRecipe(new Recipe(Workstations.BLOOD_PRESS).addComponent(BLOOD_ESSENCE, 250).setRecipeTime(180));

PLANK.addRecipe(new Recipe(Workstations.SAWMILL).addComponent(LUMBER, 20).setRecipeTime(20));
SAWDUST.addRecipe(new Recipe(Workstations.SAWMILL).addComponent(LUMBER, 20).setRecipeTime(20));
REINFORCED_PLANK.addRecipe(new Recipe(Workstations.SAWMILL).addComponent(PLANK, 4).addComponent(IRON_INGOT, 4).setRecipeTime(60));

STONE_BRICK.addRecipe(new Recipe(Workstations.GRINDER).addComponent(STONE, 12).setRecipeTime(20));
STONE_DUST.addRecipe(new Recipe(Workstations.GRINDER).addComponent(STONE, 12).setRecipeTime(20));
GRAVE_DUST.addRecipe(new Recipe(Workstations.GRINDER).addComponent(BONE, 100).setRecipeTime(60));
STONE_BODY.addRecipe(new Recipe(Workstations.GRINDER).addComponent(CLAY, 12).addComponent(STONE_BRICK, 4).setRecipeTime(60));
CLAY_MOLD.addRecipe(new Recipe(Workstations.GRINDER).addComponent(CLAY, 12).addComponent(WATER_FILLED_CANTEEN, 1).setRecipeTime(30));
SPECTRAL_DUST.addRecipe(new Recipe(Workstations.GRINDER).addComponent(GEM_DUST, 4).addComponent(GHOST_CRYSTAL, 40).setRecipeTime(60));

COPPER_INGOT.addRecipe(new Recipe(Workstations.FORGE).addComponent(COPPER_ORE, 20).setRecipeTime(30));
WHETSTONE.addRecipe(new Recipe(Workstations.FORGE).addComponent(COPPER_INGOT, 1).addComponent(STONE_DUST, 12).setRecipeTime(60));
SULFUR.addRecipe(new Recipe(Workstations.FORGE).addComponent(SULFUR_ORE, 20).setRecipeTime(90));
IRON_INGOT.addRecipe(new Recipe(Workstations.FORGE).addComponent(IRON_ORE, 20).setRecipeTime(180));
GLASS.addRecipe(new Recipe(Workstations.FORGE).addComponent(QUARTZ, 20).setRecipeTime(60));
SCOURGESTONE.addRecipe(new Recipe(Workstations.FORGE).addComponent(GLASS, 4).addComponent(GRAVE_DUST, 4).addComponent(WHETSTONE, 4).setRecipeTime(180));
DARK_SILVER_INGOT.addRecipe(new Recipe(Workstations.FORGE).addComponent(SCOURGESTONE, 1).addComponent(SILVER_ORE, 20).setRecipeTime(180));
GOLD_INGOT.addRecipe(new Recipe(Workstations.FORGE).addComponent(SULFUR, 8).addComponent(GOLDEN_JEWELRY, 8).setRecipeTime(600));

LEATHER.addRecipe(new Recipe(Workstations.TANNERY).addComponent(ANIMAL_HIDE, 16).setRecipeTime(30));
EMPTY_CANTEEN.addRecipe(new Recipe(Workstations.TANNERY).addComponent(LEATHER, 4).addComponent(PLANT_FIBER, 20).setRecipeTime(10));
PRISTINE_LEATHER.addRecipe(new Recipe(Workstations.TANNERY).addComponent(FISH_OIL, 4).addComponent(PRISTINE_HIDE, 20).setRecipeTime(90));

CLOTH.addRecipe(new Recipe(Workstations.LOOM).addComponent(LEATHER, 4).addComponent(PLANT_FIBER, 12).setRecipeTime(60));
COTTON_YARN.addRecipe(new Recipe(Workstations.LOOM).addComponent(COTTON, 20).setRecipeTime(180));
WOOL_THREAD.addRecipe(new Recipe(Workstations.LOOM).addComponent(FIRE_BLOSSOM, 12).addComponent(COARSE_THREAD, 8).setRecipeTime(60));
GHOST_YARN.addRecipe(new Recipe(Workstations.LOOM).addComponent(GHOST_SHROOM, 8).addComponent(COTTON_YARN, 4).setRecipeTime(180));
SILK.addRecipe(new Recipe(Workstations.LOOM).addComponent(HIGHLAND_LOTUS, 8).addComponent(SILKWORM, 4).addComponent(CLOTH, 4).setRecipeTime(180));
IMPERIAL_THREAD.addRecipe(new Recipe(Workstations.LOOM).addComponent(WOOL_THREAD, 8).addComponent(SUNFLOWER, 12).addComponent(SNOW_FLOWER, 12).setRecipeTime(60));

PAPER.addRecipe(new Recipe(Workstations.PAPER_PRESS).addComponent(PLANT_FIBER, 4).addComponent(SAWDUST, 12).setRecipeTime(10));
SCROLL.addRecipe(new Recipe(Workstations.PAPER_PRESS).addComponent(GEM_DUST, 12).addComponent(PAPER, 4).setRecipeTime(20));
SCHEMATIC.addRecipe(new Recipe(Workstations.PAPER_PRESS).addComponent(SILVER_ORE, 24).addComponent(SPECTRAL_DUST, 4).addComponent(SCROLL, 8).setRecipeTime(20));

REGULAR_SAPPHIRE.addRecipe(new Recipe(Workstations.GEM_CUTTING_TABLE).addComponent(CRUDE_SAPPHIRE, 4).setRecipeTime(180));
REGULAR_RUBY.addRecipe(new Recipe(Workstations.GEM_CUTTING_TABLE).addComponent(CRUDE_RUBY, 4).setRecipeTime(180));
REGULAR_TOPAZ.addRecipe(new Recipe(Workstations.GEM_CUTTING_TABLE).addComponent(CRUDE_TOPAZ, 4).setRecipeTime(180));
REGULAR_EMERALD.addRecipe(new Recipe(Workstations.GEM_CUTTING_TABLE).addComponent(CRUDE_EMERALD, 4).setRecipeTime(180));
REGULAR_MISTSTONE.addRecipe(new Recipe(Workstations.GEM_CUTTING_TABLE).addComponent(CRUDE_MISTSTONE, 4).setRecipeTime(180));
REGULAR_AMETHYST.addRecipe(new Recipe(Workstations.GEM_CUTTING_TABLE).addComponent(CRUDE_AMETHYST, 4).setRecipeTime(180));

BONE_SWORD.addRecipe(new Recipe(Workstations.INVENTORY).addComponent(BONE, 30).setRecipeTime(10));
BONE_AXES.addRecipe(new Recipe(Workstations.INVENTORY).addComponent(BONE, 30).setRecipeTime(10));
BONE_MACE.addRecipe(new Recipe(Workstations.INVENTORY).addComponent(BONE, 30).setRecipeTime(10));
BONE_SPEAR.addRecipe(new Recipe(Workstations.INVENTORY).addComponent(BONE, 30).setRecipeTime(10));
BONE_RING.addRecipe(new Recipe(Workstations.INVENTORY).addComponent(BONE, 40).setRecipeTime(10));
BONEGUARD_CHESTGUARD.addRecipe(new Recipe(Workstations.INVENTORY).addComponent(BONE, 30).setRecipeTime(10));
BONEGUARD_LEGGINGS.addRecipe(new Recipe(Workstations.INVENTORY).addComponent(BONE, 30).setRecipeTime(10));
BONEGUARD_GLOVES.addRecipe(new Recipe(Workstations.INVENTORY).addComponent(BONE, 20).addComponent(ANIMAL_HIDE, 30).setRecipeTime(10));
BONEGUARD_BOOTS.addRecipe(new Recipe(Workstations.INVENTORY).addComponent(BONE, 20).addComponent(ANIMAL_HIDE, 30).setRecipeTime(10));
TRAVELERS_WRAP.addRecipe(new Recipe(Workstations.INVENTORY).addComponent(CLOTH, 4).addComponent(LEATHER, 4).setRecipeTime(10));

REINFORCED_BONE_SWORD.addRecipe(new Recipe(Workstations.SIMPLE_WORKBENCH).addComponent(BONE_SWORD, 1).addComponent(PLANK, 4).addComponent(STONE, 120).setRecipeTime(5));
REINFORCED_BONE_AXES.addRecipe(new Recipe(Workstations.SIMPLE_WORKBENCH).addComponent(BONE_AXES, 1).addComponent(PLANK, 4).addComponent(STONE, 120).setRecipeTime(5));
REINFORCED_BONE_MACE.addRecipe(new Recipe(Workstations.SIMPLE_WORKBENCH).addComponent(BONE_MACE, 1).addComponent(PLANK, 4).addComponent(STONE, 120).setRecipeTime(5));
REINFORCED_BONE_SPEAR.addRecipe(new Recipe(Workstations.SIMPLE_WORKBENCH).addComponent(BONE_SPEAR, 1).addComponent(PLANK, 4).addComponent(STONE, 120).setRecipeTime(5));
COPPER_SWORD.addRecipe(new Recipe(Workstations.SIMPLE_WORKBENCH).addComponent(COPPER_INGOT, 16).addComponent(PLANK, 12).setRecipeTime(30));
COPPER_AXES.addRecipe(new Recipe(Workstations.SIMPLE_WORKBENCH).addComponent(COPPER_INGOT, 16).addComponent(PLANK, 12).setRecipeTime(30));
COPPER_MACE.addRecipe(new Recipe(Workstations.SIMPLE_WORKBENCH).addComponent(COPPER_INGOT, 16).addComponent(PLANK, 12).setRecipeTime(30));
COPPER_SPEAR.addRecipe(new Recipe(Workstations.SIMPLE_WORKBENCH).addComponent(COPPER_INGOT, 16).addComponent(PLANK, 12).setRecipeTime(30));
MERCILESS_COPPER_SWORD.addRecipe(new Recipe(Workstations.SIMPLE_WORKBENCH).addComponent(COPPER_SWORD, 1).addComponent(CRUDE_SAPPHIRE, 2).addComponent(WHETSTONE, 8).addComponent(LEATHER, 4).setRecipeTime(5));
MERCILESS_COPPER_AXES.addRecipe(new Recipe(Workstations.SIMPLE_WORKBENCH).addComponent(COPPER_AXES, 1).addComponent(CRUDE_RUBY, 2).addComponent(WHETSTONE, 8).addComponent(LEATHER, 4).setRecipeTime(5));
MERCILESS_COPPER_MACE.addRecipe(new Recipe(Workstations.SIMPLE_WORKBENCH).addComponent(COPPER_MACE, 1).addComponent(CRUDE_TOPAZ, 2).addComponent(WHETSTONE, 8).addComponent(LEATHER, 4).setRecipeTime(5));
MERCILESS_COPPER_SPEAR.addRecipe(new Recipe(Workstations.SIMPLE_WORKBENCH).addComponent(COPPER_SPEAR, 1).addComponent(CRUDE_EMERALD, 2).addComponent(WHETSTONE, 8).addComponent(LEATHER, 4).setRecipeTime(5));
BLOOD_ROSE_RING.addRecipe(new Recipe(Workstations.SIMPLE_WORKBENCH).addComponent(PLANT_FIBER, 80).addComponent(BLOOD_ROSE, 30).addComponent(BONE_RING, 1).setRecipeTime(5));
GRAVEDIGGER_RING.addRecipe(new Recipe(Workstations.SIMPLE_WORKBENCH).addComponent(GRAVE_DUST, 8).addComponent(MOURNING_LILY, 40).setRecipeTime(20));
THE_EMBER_CHAIN.addRecipe(new Recipe(Workstations.SIMPLE_WORKBENCH).addComponent(GREATER_BLOOD_ESSENCE, 1).addComponent(CRUDE_EMERALD, 4).addComponent(GRAVE_DUST, 8).setRecipeTime(30));
THE_FROZEN_EYE.addRecipe(new Recipe(Workstations.SIMPLE_WORKBENCH).addComponent(GREATER_BLOOD_ESSENCE, 1).addComponent(CRUDE_SAPPHIRE, 4).addComponent(GRAVE_DUST, 8).setRecipeTime(30));
DUSKWATCHERS_RING.addRecipe(new Recipe(Workstations.SIMPLE_WORKBENCH).addComponent(GREATER_BLOOD_ESSENCE, 1).addComponent(CRUDE_TOPAZ, 4).addComponent(GRAVE_DUST, 8).setRecipeTime(30));
MIST_SIGNET.addRecipe(new Recipe(Workstations.SIMPLE_WORKBENCH).addComponent(GREATER_BLOOD_ESSENCE, 1).addComponent(CRUDE_MISTSTONE, 4).addComponent(GRAVE_DUST, 8).setRecipeTime(30));
PLATED_BONEGUARD_CHESTGUARD.addRecipe(new Recipe(Workstations.SIMPLE_WORKBENCH).addComponent(BONEGUARD_CHESTGUARD, 1).addComponent(ANIMAL_HIDE, 60).setRecipeTime(5));
PLATED_BONEGUARD_LEGGINGS.addRecipe(new Recipe(Workstations.SIMPLE_WORKBENCH).addComponent(BONEGUARD_LEGGINGS, 1).addComponent(ANIMAL_HIDE, 60).setRecipeTime(5));
PLATED_BONEGUARD_GLOVES.addRecipe(new Recipe(Workstations.SIMPLE_WORKBENCH).addComponent(BONEGUARD_GLOVES, 1).addComponent(ANIMAL_HIDE, 60).setRecipeTime(5));
PLATED_BONEGUARD_BOOTS.addRecipe(new Recipe(Workstations.SIMPLE_WORKBENCH).addComponent(BONEGUARD_BOOTS, 1).addComponent(ANIMAL_HIDE, 60).setRecipeTime(5));
NIGHSTALKER_VEST.addRecipe(new Recipe(Workstations.SIMPLE_WORKBENCH).addComponent(LEATHER, 6).addComponent(COARSE_THREAD, 4).setRecipeTime(20));
NIGHSTALKER_LEGGINGS.addRecipe(new Recipe(Workstations.SIMPLE_WORKBENCH).addComponent(LEATHER, 6).addComponent(COARSE_THREAD, 4).setRecipeTime(20));
NIGHSTALKER_GLOVES.addRecipe(new Recipe(Workstations.SIMPLE_WORKBENCH).addComponent(LEATHER, 6).addComponent(COARSE_THREAD, 4).setRecipeTime(20));
NIGHSTALKER_BOOTS.addRecipe(new Recipe(Workstations.SIMPLE_WORKBENCH).addComponent(LEATHER, 6).addComponent(COARSE_THREAD, 4).setRecipeTime(20));
MERCILESS_NIGHSTALKER_VEST.addRecipe(new Recipe(Workstations.SIMPLE_WORKBENCH).addComponent(NIGHSTALKER_VEST, 1).addComponent(LEATHER, 4).addComponent(COARSE_THREAD, 4).addComponent(COPPER_INGOT, 8).setRecipeTime(5));
MERCILESS_NIGHSTALKER_LEGGINGS.addRecipe(new Recipe(Workstations.SIMPLE_WORKBENCH).addComponent(NIGHSTALKER_LEGGINGS, 1).addComponent(LEATHER, 4).addComponent(COARSE_THREAD, 4).addComponent(COPPER_INGOT, 8).setRecipeTime(5));
MERCILESS_NIGHSTALKER_GLOVES.addRecipe(new Recipe(Workstations.SIMPLE_WORKBENCH).addComponent(NIGHSTALKER_GLOVES, 1).addComponent(LEATHER, 4).addComponent(COARSE_THREAD, 4).addComponent(COPPER_INGOT, 8).setRecipeTime(5));
MERCILESS_NIGHSTALKER_BOOTS.addRecipe(new Recipe(Workstations.SIMPLE_WORKBENCH).addComponent(NIGHSTALKER_BOOTS, 1).addComponent(LEATHER, 4).addComponent(COARSE_THREAD, 4).addComponent(COPPER_INGOT, 8).setRecipeTime(5));

IRON_BODY.addRecipe(new Recipe(Workstations.SMITHY).addComponent(IRON_INGOT, 4).setRecipeTime(30));
IRON_SWORD.addRecipe(new Recipe(Workstations.SMITHY).addComponent(IRON_INGOT, 20).addComponent(PLANK, 16).setRecipeTime(60));
IRON_AXES.addRecipe(new Recipe(Workstations.SMITHY).addComponent(IRON_INGOT, 20).addComponent(PLANK, 16).setRecipeTime(60));
IRON_MACE.addRecipe(new Recipe(Workstations.SMITHY).addComponent(IRON_INGOT, 20).addComponent(PLANK, 16).setRecipeTime(60));
IRON_SPEAR.addRecipe(new Recipe(Workstations.SMITHY).addComponent(IRON_INGOT, 20).addComponent(PLANK, 16).setRecipeTime(60));
IRON_REAPER.addRecipe(new Recipe(Workstations.SMITHY).addComponent(IRON_INGOT, 20).addComponent(PLANK, 16).setRecipeTime(60));
IRON_SLASHERS.addRecipe(new Recipe(Workstations.SMITHY).addComponent(IRON_INGOT, 20).addComponent(PLANK, 16).setRecipeTime(60));
MERCILESS_IRON_SWORD.addRecipe(new Recipe(Workstations.SMITHY).addComponent(IRON_SWORD, 1).addComponent(REGULAR_SAPPHIRE, 4).addComponent(GREATER_BLOOD_ESSENCE, 4).addComponent(REINFORCED_PLANK, 4).setRecipeTime(5));
MERCILESS_IRON_AXES.addRecipe(new Recipe(Workstations.SMITHY).addComponent(IRON_AXES, 1).addComponent(REGULAR_RUBY, 4).addComponent(GREATER_BLOOD_ESSENCE, 4).addComponent(REINFORCED_PLANK, 4).setRecipeTime(5));
MERCILESS_IRON_MACE.addRecipe(new Recipe(Workstations.SMITHY).addComponent(IRON_MACE, 1).addComponent(REGULAR_TOPAZ, 4).addComponent(GREATER_BLOOD_ESSENCE, 4).addComponent(REINFORCED_PLANK, 4).setRecipeTime(5));
MERCILESS_IRON_SPEAR.addRecipe(new Recipe(Workstations.SMITHY).addComponent(IRON_SPEAR, 1).addComponent(REGULAR_EMERALD, 4).addComponent(GREATER_BLOOD_ESSENCE, 4).addComponent(REINFORCED_PLANK, 4).setRecipeTime(5));
MERCILESS_IRON_REAPER.addRecipe(new Recipe(Workstations.SMITHY).addComponent(IRON_REAPER, 1).addComponent(REGULAR_MISTSTONE, 4).addComponent(GREATER_BLOOD_ESSENCE, 4).addComponent(REINFORCED_PLANK, 4).setRecipeTime(5));
MERCILESS_IRON_SLASHERS.addRecipe(new Recipe(Workstations.SMITHY).addComponent(IRON_SLASHERS, 1).addComponent(REGULAR_AMETHYST, 4).addComponent(GREATER_BLOOD_ESSENCE, 4).addComponent(REINFORCED_PLANK, 4).setRecipeTime(5));

VERMIN_SALVE.addRecipe(new Recipe(Workstations.ALCHEMY_TABLE).addComponent(RAT, 1).addComponent(PLANT_FIBER, 60).addComponent(BONE, 20).setRecipeTime(10));
BLOOD_ROSE_BREW.addRecipe(new Recipe(Workstations.ALCHEMY_TABLE).addComponent(BLOOD_ROSE, 40).addComponent(WATER_FILLED_CANTEEN, 1).setRecipeTime(10));
MINOR_GARLIC_RESISTANCE_BREW.addRecipe(new Recipe(Workstations.ALCHEMY_TABLE).addComponent(HELLS_CLARION, 40).addComponent(RAT, 4).addComponent(WATER_FILLED_CANTEEN, 1).setRecipeTime(30));
MINOR_SUN_RESISTANCE_BREW.addRecipe(new Recipe(Workstations.ALCHEMY_TABLE).addComponent(MOURNING_LILY, 20).addComponent(BLOOD_ROSE, 20).addComponent(WATER_FILLED_CANTEEN, 1).setRecipeTime(30));