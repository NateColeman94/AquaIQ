const AQUAIQ_DATA = {
  gandy: {
    name: "Gandy Pool",
    city: "Lakeland, Florida",
    address: "404 Imperial Boulevard, Lakeland, FL 33803",
    phone: "863.834.3157",
    facilityFacts: "10-lane, 25-yard heated pool with diving board, recreation pool, ramp, lift chair, lockers, lap lanes, bleachers, showers and changing rooms.",
    hours: {
      lapSwim: "Mon-Fri 5:30 AM-7:00 PM; Sat-Sun 10:00 AM-5:00 PM",
      openSwim: "Mon-Fri 12:00 PM-5:00 PM; Sat-Sun 10:00 AM-5:00 PM"
    },
    today: {
      date: "Build v1 Sample Day",
      weather: "91°F, partly cloudy, afternoon thunderstorm risk",
      status: "Open",
      attendanceForecast: 312,
      capacityAssumption: 375,
      staffScheduled: 5,
      staffRecommended: 6,
      operatingRisk: 72
    },
    water: [
      { name: "Free Chlorine", value: 1.4, unit: "ppm", target: "2.0-4.0 ppm", status: "warn" },
      { name: "pH", value: 7.7, unit: "", target: "7.2-7.8", status: "good" },
      { name: "Alkalinity", value: 88, unit: "ppm", target: "80-120 ppm", status: "good" },
      { name: "Water Temp", value: 82, unit: "°F", target: "78-84°F", status: "good" },
      { name: "Turbidity", value: "Clear", unit: "", target: "Clear visibility", status: "good" }
    ],
    attendance: [
      { day: "Mon", count: 188 },
      { day: "Tue", count: 205 },
      { day: "Wed", count: 224 },
      { day: "Thu", count: 238 },
      { day: "Fri", count: 285 },
      { day: "Sat", count: 348 },
      { day: "Sun", count: 312 }
    ],
    maintenance: [
      { asset: "Main circulation pump", risk: "Medium", note: "Runtime above normal for 3 consecutive days; inspect before weekend peak." },
      { asset: "Diving board area", risk: "Low", note: "Routine inspection passed; next check due in 6 days." },
      { asset: "Lift chair", risk: "Medium", note: "Battery test recommended before Saturday morning operations." },
      { asset: "Deck shower station", risk: "Low", note: "No open work order." }
    ],
    inventory: [
      { item: "Chlorine tablets", onHand: "4 cases", threshold: "5 cases", status: "warn", action: "Reorder within 48 hours." },
      { item: "pH increaser", onHand: "2 buckets", threshold: "1 bucket", status: "good", action: "No action required." },
      { item: "Test strips", onHand: "1 box", threshold: "2 boxes", status: "warn", action: "Add to next supply order." },
      { item: "First aid kits", onHand: "3 stocked", threshold: "2 stocked", status: "good", action: "No action required." }
    ]
  }
};
