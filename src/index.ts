import generateNoise from './perlin';

export type Biom = {
  tileIndex: number
  level: number
};

type GenerationParameters = {
  width: number
  height: number
  frequency?: number
  redistribution?: number
  octaves?: number
  ampFalloff?: number
  regenerateSeed?: boolean
};

/**
 * Generation random map with bioms
 * Return 2D matrix (number[][])
 *
 * @param {Biom[]} bioms - List of bioms parameters
 * @param {GenerationParameters} parameters - Generation parameters
 *
 * @returns {Tilemap}
 */
function generateMap(bioms: Biom[], parameters: GenerationParameters): number[][] {
  const {
    width, height, frequency = 10, redistribution = 1,
    ...perlinParameters
  } = parameters;

  const map = [];
  for (let y = 0; y < height; y++) {
    map[y] = [];
    for (let x = 0; x < width; x++) {
      let cell = generateNoise({
        ...perlinParameters,
        x: (x / width) * frequency,
        y: (y / height) * frequency,
      });
      cell **= redistribution;
      const biom = bioms.find(({ level }) => (cell <= level));
      map[y][x] = biom ? biom.tileIndex : bioms[bioms.length - 1].tileIndex;
    }
  }

  return map;
}

// export for commonjs
// @ts-ignore
export = generateMap;
