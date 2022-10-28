export interface Aircraft {
    name : string,
    model : AircraftModelEnum,
    numberControl : string
}

export enum AircraftModelEnum {
    Turboprop = 'Turboprop',
    Jet = 'Jet',
    Supersonic = 'Supersonic'
}