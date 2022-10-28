export interface AircraftDto {
    name : string,
    model : AircraftModelEnum,
    numberControl : string
}

export enum AircraftModelEnum {
    Turboprop = 'Turboprop',
    Jet = 'Jet',
    Supersonic = 'Supersonic',
    Default = 'Register the model.'
}
