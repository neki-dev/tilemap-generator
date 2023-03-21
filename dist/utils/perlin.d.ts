type NoiseParameters = {
    seed: number[];
    x: number;
    y: number;
    frequency: number;
    redistribution: number;
    octaves: number;
};
export declare function generateSeed(): number[];
export declare function generateNoise(parameters: NoiseParameters): number;
export {};