import { PropertyListingProps } from "@/interfaces";

const SAMPLE_DATA: PropertyListingProps[] = [
  {
    propertyName: "Villa Arrciffee Beach House",
    location: { street: "123 Ocean Drive", city: "Miami", country: "USA" },
    rate: 4.76, currency: "$", amount: 620, favorite: false
  },
  {
    propertyName: "Sunset Paradise Villa",
    location: { street: "456 Beachfront Lane", city: "Cancun", country: "Mexico" },
    rate: 4.85, currency: "$", amount: 750, favorite: true
  },
  {
    propertyName: "Golden Sands Retreat",
    location: { street: "789 Coastal Road", city: "Gold Coast", country: "Australia" },
    rate: 4.92, currency: "$", amount: 900, favorite: false
  },
  {
    propertyName: "Azure Horizon Cottage",
    location: { street: "321 Seaside Avenue", city: "Nice", country: "France" },
    rate: 4.78, currency: "$", amount: 680, favorite: false
  },
  {
    propertyName: "Palm Haven Villa",
    location: { street: "654 Palm Street", city: "Bali", country: "Indonesia" },
    rate: 4.88, currency: "$", amount: 1200, favorite: true
  },
];

const FILTERS: string [] = [
  "Mansion","CountrySide","Villa","Tropical","New",
  "Amazing","Beachfront","Luxury","Family-Friendly",
  "Pet-Friendly","Secluded"
];

export { SAMPLE_DATA, FILTERS };
