export interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  period: "mo";
  tagline: string;
  features: string[];
  mostPopular?: boolean;
}

export const plans: MembershipPlan[] = [
  {
    id: "basic",
    name: "Basic",
    price: 39,
    period: "mo",
    tagline: "Gym floor access, any single location",
    features: [
      "Full gym floor access",
      "1 location of your choice",
      "Locker room & showers",
      "Free fitness assessment",
      "Mobile app booking",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: 69,
    period: "mo",
    tagline: "All locations, unlimited classes",
    features: [
      "Everything in Basic",
      "Access to all 5 locations",
      "Unlimited group classes",
      "Guest pass, 2x per month",
      "Sauna & recovery room access",
    ],
    mostPopular: true,
  },
  {
    id: "elite",
    name: "Elite",
    price: 119,
    period: "mo",
    tagline: "Pro, plus personal coaching",
    features: [
      "Everything in Pro",
      "4 personal training sessions / mo",
      "Custom nutrition plan",
      "Priority class booking",
      "Quarterly InBody scan",
    ],
  },
];

export interface AddOn {
  id: string;
  name: string;
  price: number;
  unit: string;
  description: string;
}

export const addOns: AddOn[] = [
  {
    id: "personal-training",
    name: "1-on-1 Personal Training",
    price: 45,
    unit: "per session",
    description: "Book any trainer directly — packages of 5 and 10 sessions available at a discount.",
  },
  {
    id: "nutrition-coaching",
    name: "Nutrition Coaching",
    price: 99,
    unit: "per month",
    description: "Monthly check-ins and a custom macro plan from our in-house coach.",
  },
  {
    id: "recovery-pass",
    name: "Recovery Pass",
    price: 29,
    unit: "per month",
    description: "Unlimited sauna, cold plunge and percussion-therapy room access.",
  },
];
