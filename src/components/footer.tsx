import Link from "next/link";
import { Dumbbell, MapPin, Phone, Mail } from "lucide-react";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { locations } from "@/data/locations";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-md bg-volt text-ink">
              <Dumbbell className="size-4" />
            </span>
            <span className="font-display text-xl text-white">FORGE FITNESS</span>
          </div>
          <p className="text-sm leading-relaxed text-white/55">
            {locations.length} locations across Austin, TX. Strength, HIIT, cycling,
            yoga and combat — train harder, recover smarter.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Instagram" className="text-white/55 hover:text-volt">
              <FaInstagram className="size-5" />
            </a>
            <a href="#" aria-label="Facebook" className="text-white/55 hover:text-volt">
              <FaFacebook className="size-5" />
            </a>
            <a href="#" aria-label="TikTok" className="text-white/55 hover:text-volt">
              <FaTiktok className="size-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-volt">
            Explore
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/classes" className="hover:text-volt">Classes</Link></li>
            <li><Link href="/trainers" className="hover:text-volt">Trainers</Link></li>
            <li><Link href="/membership" className="hover:text-volt">Membership</Link></li>
            <li><Link href="/locations" className="hover:text-volt">All Locations</Link></li>
            <li><Link href="/join" className="hover:text-volt">Start Free Trial</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-volt">
            Flagship — Downtown
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-volt" />
              <span>412 Congress Ave, Austin, TX 78701</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-volt" />
              <span>+1 (512) 555-0142</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-volt" />
              <span>hello@forgefitness.example</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-volt">
            Hours
          </h4>
          <p className="text-sm text-white/55">
            Downtown &amp; Westlake: 24 hours, 7 days
            <br />
            All other locations: 5:00 AM – 10:00/11:00 PM, daily
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/35">
        © {new Date().getFullYear()} Forge Fitness. Demo site for illustrative purposes.
      </div>
    </footer>
  );
}
