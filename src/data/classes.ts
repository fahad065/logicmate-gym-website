export type ClassCategory =
  | "Strength"
  | "HIIT"
  | "Cycling"
  | "Yoga & Mobility"
  | "Combat"
  | "Dance Cardio";

export interface FitnessClass {
  id: string;
  name: string;
  category: ClassCategory;
  description: string;
  duration: number; // minutes
  intensity: 1 | 2 | 3;
  calories: string; // approx range
  badge?: "Most Popular" | "New" | "Trainer's Pick";
}

export const classes: FitnessClass[] = [
  {
    id: "forge-strength",
    name: "Forge Strength",
    category: "Strength",
    description:
      "Barbell-focused compound lifts — squat, bench, deadlift — coached in small groups with real spotting.",
    duration: 55,
    intensity: 3,
    calories: "400–550",
    badge: "Most Popular",
  },
  {
    id: "powerlifting-club",
    name: "Powerlifting Club",
    category: "Strength",
    description:
      "Progressive strength programming for lifters chasing a real 1-rep max, not just a pump.",
    duration: 60,
    intensity: 3,
    calories: "350–500",
  },
  {
    id: "hiit-circuit",
    name: "HIIT Circuit",
    category: "HIIT",
    description:
      "45 seconds on, 15 off — kettlebells, battle ropes and bodyweight stations on rotation.",
    duration: 30,
    intensity: 3,
    calories: "350–450",
    badge: "Trainer's Pick",
  },
  {
    id: "forge-wod",
    name: "Forge WOD",
    category: "HIIT",
    description:
      "A new functional-fitness workout of the day, every day — Olympic lifts, gymnastics, conditioning.",
    duration: 50,
    intensity: 3,
    calories: "450–600",
  },
  {
    id: "bootcamp",
    name: "Outdoor Bootcamp",
    category: "HIIT",
    description:
      "Sled pushes, sprints and partner drills on our rooftop turf — weather permitting, every location.",
    duration: 45,
    intensity: 2,
    calories: "350–500",
  },
  {
    id: "spin-45",
    name: "Spin 45",
    category: "Cycling",
    description:
      "Lights-down, music-up indoor cycling with a live cadence board to chase your own best.",
    duration: 45,
    intensity: 2,
    calories: "400–500",
    badge: "New",
  },
  {
    id: "endurance-ride",
    name: "Endurance Ride",
    category: "Cycling",
    description:
      "A steady-state, longer-format ride built for aerobic base — low drama, high mileage.",
    duration: 60,
    intensity: 2,
    calories: "450–550",
  },
  {
    id: "vinyasa-flow",
    name: "Vinyasa Flow",
    category: "Yoga & Mobility",
    description:
      "A breath-led, full-body flow to open up what the week's lifting tightened.",
    duration: 50,
    intensity: 1,
    calories: "150–250",
  },
  {
    id: "mobility-reset",
    name: "Mobility Reset",
    category: "Yoga & Mobility",
    description:
      "Joint-by-joint mobility work and guided stretching — the session your knees will thank you for.",
    duration: 30,
    intensity: 1,
    calories: "100–150",
  },
  {
    id: "boxing-fundamentals",
    name: "Boxing Fundamentals",
    category: "Combat",
    description:
      "Pad work, footwork and combinations with a real boxing coach — no experience required.",
    duration: 50,
    intensity: 3,
    calories: "400–550",
  },
  {
    id: "muay-thai",
    name: "Muay Thai Conditioning",
    category: "Combat",
    description:
      "Striking technique paired with conditioning intervals — builds real stamina, fast.",
    duration: 55,
    intensity: 3,
    calories: "450–600",
  },
  {
    id: "dance-cardio",
    name: "Dance Cardio Blast",
    category: "Dance Cardio",
    description:
      "A high-energy, choreography-led cardio session — no rhythm required, just show up.",
    duration: 45,
    intensity: 2,
    calories: "300–450",
  },
];

export const categories: ClassCategory[] = [
  "Strength",
  "HIIT",
  "Cycling",
  "Yoga & Mobility",
  "Combat",
  "Dance Cardio",
];

export type Day = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

export interface ScheduleEntry {
  day: Day;
  time: string;
  classId: string;
  trainerId: string;
}

export const days: Day[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const schedule: ScheduleEntry[] = [
  { day: "Mon", time: "6:00 AM", classId: "forge-strength", trainerId: "marcus-reyes" },
  { day: "Mon", time: "9:00 AM", classId: "vinyasa-flow", trainerId: "aisha-patel" },
  { day: "Mon", time: "6:00 PM", classId: "hiit-circuit", trainerId: "jordan-blake" },
  { day: "Tue", time: "6:00 AM", classId: "spin-45", trainerId: "nina-kowalski" },
  { day: "Tue", time: "12:00 PM", classId: "mobility-reset", trainerId: "aisha-patel" },
  { day: "Tue", time: "6:30 PM", classId: "boxing-fundamentals", trainerId: "deon-walker" },
  { day: "Wed", time: "6:00 AM", classId: "forge-wod", trainerId: "marcus-reyes" },
  { day: "Wed", time: "9:00 AM", classId: "dance-cardio", trainerId: "nina-kowalski" },
  { day: "Wed", time: "6:00 PM", classId: "powerlifting-club", trainerId: "marcus-reyes" },
  { day: "Thu", time: "6:00 AM", classId: "hiit-circuit", trainerId: "jordan-blake" },
  { day: "Thu", time: "9:00 AM", classId: "vinyasa-flow", trainerId: "aisha-patel" },
  { day: "Thu", time: "6:30 PM", classId: "muay-thai", trainerId: "deon-walker" },
  { day: "Fri", time: "6:00 AM", classId: "forge-strength", trainerId: "marcus-reyes" },
  { day: "Fri", time: "5:30 PM", classId: "endurance-ride", trainerId: "nina-kowalski" },
  { day: "Sat", time: "8:00 AM", classId: "bootcamp", trainerId: "jordan-blake" },
  { day: "Sat", time: "10:00 AM", classId: "forge-wod", trainerId: "deon-walker" },
  { day: "Sun", time: "9:00 AM", classId: "mobility-reset", trainerId: "aisha-patel" },
];
