declare type NoiseParameters = {
    x: number;
    y: number;
    octaves?: number;
    ampFalloff?: number;
    seed?: number[];
    regenerateSeed?: boolean;
};
export default function generateNoise(parameters: NoiseParameters): number;
export {};