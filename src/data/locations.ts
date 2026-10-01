export interface GymLocation {
  id: string;
  name: string;
  area: string;
  address: string;
  phone: string;
  hours: string;
  is24h: boolean;
  amenities: string[];
  mapQuery: string;
}

export const locations: GymLocation[] = [
  {
    id: "downtown",
    name: "Forge Fitness — Downtown",
    area: "Downtown Austin",
    address: "412 Congress Ave, Austin, TX 78701",
    phone: "+1 (512) 555-0142",
    hours: "24 hours, 7 days",
    is24h: true,
    amenities: ["24/7 Access", "Free Weights Floor", "Sauna", "Free Parking Garage"],
    mapQuery: "Congress Ave, Austin, TX",
  },
  {
    id: "north-austin",
    name: "Forge Fitness — North Austin / The Domain",
    area: "North Austin",
    address: "11600 Century Oaks Terrace, Austin, TX 78758",
    phone: "+1 (512) 555-0198",
    hours: "5:00 AM – 11:00 PM, daily",
    is24h: false,
    amenities: ["Pool", "Group Classes", "Childcare", "Sauna"],
    mapQuery: "Century Oaks Terrace, Austin, TX",
  },
  {
    id: "south-congress",
    name: "Forge Fitness — South Congress",
    area: "South Austin",
    address: "1715 S Congress Ave, Austin, TX 78704",
    phone: "+1 (512) 555-0176",
    hours: "5:00 AM – 10:00 PM, daily",
    is24h: false,
    amenities: ["Boxing Ring", "Rooftop Turf", "Smoothie Bar", "Free Parking"],
    mapQuery: "S Congress Ave, Austin, TX",
  },
  {
    id: "westlake",
    name: "Forge Fitness — Westlake",
    area: "Westlake Hills",
    address: "701 Capital of Texas Hwy, Austin, TX 78746",
    phone: "+1 (512) 555-0163",
    hours: "24 hours, 7 days",
    is24h: true,
    amenities: ["24/7 Access", "Pilates Studio", "Sauna", "Childcare"],
    mapQuery: "Capital of Texas Hwy, Westlake Hills, TX",
  },
  {
    id: "round-rock",
    name: "Forge Fitness — Round Rock",
    area: "Round Rock",
    address: "2251 N Mays St, Round Rock, TX 78664",
    phone: "+1 (512) 555-0187",
    hours: "5:00 AM – 10:00 PM, daily",
    is24h: false,
    amenities: ["Group Classes", "Free Weights Floor", "Free Parking", "Smoothie Bar"],
    mapQuery: "N Mays St, Round Rock, TX",
  },
];

export const areas = Array.from(new Set(locations.map((l) => l.area)));
