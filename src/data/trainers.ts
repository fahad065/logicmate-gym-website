export interface Trainer {
  id: string;
  name: string;
  role: string;
  bio: string;
  certifications: string[];
  specialties: string[];
  img: string;
}

export const trainers: Trainer[] = [
  {
    id: "marcus-reyes",
    name: "Marcus Reyes",
    role: "Head of Strength",
    bio: "Former competitive powerlifter turned coach — 11 years programming for everyone from first-timers to national-meet lifters.",
    certifications: ["NSCA-CSCS", "USAW Level 2"],
    specialties: ["Strength", "Powerlifting", "Olympic Lifting"],
    img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=70",
  },
  {
    id: "aisha-patel",
    name: "Aisha Patel",
    role: "Yoga & Mobility Lead",
    bio: "200-hour certified yoga instructor who spent five years treating athletes before moving to full-time coaching.",
    certifications: ["RYT-200", "FRC Mobility Specialist"],
    specialties: ["Yoga", "Mobility", "Injury Prevention"],
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=70",
  },
  {
    id: "jordan-blake",
    name: "Jordan Blake",
    role: "HIIT & Conditioning Coach",
    bio: "Built our HIIT Circuit and Bootcamp programs from scratch — believes the best workout is the one you actually finish.",
    certifications: ["ACE-CPT", "TRX Suspension Training"],
    specialties: ["HIIT", "Conditioning", "Bootcamp"],
    img: "https://images.unsplash.com/photo-1567013127542-490d757e6349?auto=format&fit=crop&w=600&q=70",
  },
  {
    id: "nina-kowalski",
    name: "Nina Kowalski",
    role: "Cycling & Cardio Coach",
    bio: "Ex-competitive cyclist, now runs our Spin and Endurance Ride programs with a genuine coaching cadence board.",
    certifications: ["Schwinn Cycling Cert.", "ACSM-CPT"],
    specialties: ["Cycling", "Endurance", "Dance Cardio"],
    img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=600&q=70",
  },
  {
    id: "deon-walker",
    name: "Deon Walker",
    role: "Combat Sports Coach",
    bio: "Former amateur boxer with a decade on the pads — teaches real technique, not just a cardio workout in gloves.",
    certifications: ["USA Boxing Coach", "Muay Thai Level 2"],
    specialties: ["Boxing", "Muay Thai", "Conditioning"],
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=70",
  },
  {
    id: "sofia-martins",
    name: "Sofia Martins",
    role: "Personal Training Manager",
    bio: "Oversees our 1-on-1 coaching roster and builds every new member's first 90-day program personally.",
    certifications: ["NASM-CPT", "Precision Nutrition L1"],
    specialties: ["Personal Training", "Nutrition Coaching"],
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=70",
  },
];
