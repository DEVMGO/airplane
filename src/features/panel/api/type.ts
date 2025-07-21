export interface FlightItemType {
  logoSrc: string;
  logoStyle: {
    height: string;
    margin: string;
  };
  src: {
    country: string;
    iso3: string;
    time: string;
    airline: string;
  };
  dst: {
    country: string;
    iso3: string;
    time: string;
    airline: string;
  };
  boarding: string;
  transfer: false;
  gates: number;
  seat: string;
  price: string;
  class: "economy" | "business";
}

export interface ResFlightListType {
  total: number;
  result: FlightItemType[];
}
