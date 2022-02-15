class UnitMap {
    constructor(from, to, multiplier) {
        this.from = from;
        this.to = to;
        this.multiplier = multiplier;
    }
}
export class UnitConverter {
    constructor() {
        this.unitMaps = [
            new UnitMap('g', 'ounce', 28.3495231),
            new UnitMap('g', 'pound', 453.59237),
            new UnitMap('m', 'inch', 0.0254),
            new UnitMap('m', 'foot', 0.3048)
        ];
    }

    round(value, decimals) {
        return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
    }

    kgToOunce(val) {
        const multiplier = this.unitMaps.find(u => u.to == 'ounce').multiplier;
        const convertedVal = (val * 1000) / multiplier;
        return this.round(convertedVal, 4);
    }

    kgToPound(val) {
        const multiplier = this.unitMaps.find(u => u.to == 'pound').multiplier;
        const convertedVal = (val * 1000) / multiplier;
        return this.round(convertedVal, 4);
    }

    meterToInch(val) {
        const multiplier = this.unitMaps.find(u => u.to == 'inch').multiplier;
        const convertedVal = val / multiplier;
        return this.round(convertedVal, 4);
    }

    meterToFoot(val) {
        const multiplier = this.unitMaps.find(u => u.to == 'foot').multiplier;
        const convertedVal = val / multiplier;
        return this.round(convertedVal, 4);
    }
}

