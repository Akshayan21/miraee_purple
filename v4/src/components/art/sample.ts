/** Sample data used inside the drawn product screens. Every screen carries the "sample data" label. One trip runs through all of them. */
export type SampleTrip = {
  trip: string
  dates: string
  budget: string
  amount: number
  status: 'Matched' | 'In policy' | 'Needs approval'
}

export const TRIPS: SampleTrip[] = [
  {
    trip: 'Austin to Chicago',
    dates: 'Mar 9 to 11',
    budget: 'Sales events',
    amount: 808,
    status: 'Matched',
  },
  { trip: 'Denver, recruiting', dates: 'Mar 12', budget: 'Hiring', amount: 612, status: 'Matched' },
  {
    trip: 'Lisbon, team offsite',
    dates: 'Mar 17 to 21',
    budget: 'Team events',
    amount: 2630,
    status: 'In policy',
  },
  {
    trip: 'Boston, client visit',
    dates: 'Mar 24',
    budget: 'Customer visits',
    amount: 940,
    status: 'Matched',
  },
  {
    trip: 'Miami, conference',
    dates: 'Mar 30 to Apr 1',
    budget: 'Marketing',
    amount: 1385,
    status: 'Needs approval',
  },
]

export const POLICY_RULES = [
  { k: 'Hotel limit', v: '$220 per night' },
  { k: 'Cabin class', v: 'Economy under 6 hours' },
  { k: 'Fare cap', v: '$900 per ticket' },
  { k: 'Approver', v: 'Team lead, above the cap' },
]

export const FLIGHT_OPTIONS = [
  { time: '08:15', code: 'AB 482', fare: '$412', ok: true },
  { time: '10:40', code: 'AB 520', fare: '$468', ok: true },
  { time: '07:05', code: 'AB 905', fare: '$1,120', ok: false },
]
