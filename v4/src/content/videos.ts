export type Video = { id: string; title: string; description: string; youtubeId: string }
export type VideoGroup = { role: string; label: string; blurb: string; videos: Video[] }

const v = (id: string, title: string, description: string, youtubeId: string): Video => ({
  id,
  title,
  description,
  youtubeId,
})

const V = {
  gradesDepartments: v(
    'adm-grades-departments',
    'Grades and departments',
    'How grades and departments are set up for your company. Part of Adding your employees.',
    'QjR41hY0DuQ',
  ),
  addEmployees: v(
    'adm-add-employees',
    'Adding your employees',
    'Import CSV, adding one employee, grades, departments, job titles.',
    '4UxV9rC_SbE',
  ),
  roles: v(
    'adm-role-management',
    'Configuring roles and permissions',
    'Role management, creating a role.',
    'TyWLvVDsFGE',
  ),
  policyCreation: v(
    'adm-policy-creation',
    'Setting up your travel policy: creating a policy',
    'Creating a policy.',
    'El_FDZYF0MI',
  ),
  policyGrades: v(
    'adm-policy-grades',
    'Setting up your travel policy: assigning it by grade',
    'Assigning a policy by grade.',
    'Is-tfPiGkTY',
  ),
  integrations: v(
    'adm-integrations',
    'Connecting single sign-on and integrations',
    'Single sign-on and other integrations.',
    'bwoyZDaddGM',
  ),
  adminDashboard: v(
    'adm-dashboard',
    'Running your daily travel',
    'Dashboard, all trips, approval requests.',
    'Qx1jeqQdvtg',
  ),
  travelSummary: v(
    'adm-travel-summary',
    'Monitoring traveller safety',
    'Travel Summary, Live Map, Traveler Report.',
    'lTifdnIYDeY',
  ),
  spendTracking: v(
    'fin-spend-tracking',
    'Navigating the finance dashboard',
    'Overview, to-do list, spend tracking.',
    'a0IVMdZsiOA',
  ),
  financeAnalytics: v(
    'fin-analytics',
    'Analysing your spend',
    'Travel spend, team spend, savings, compliance, booking reports.',
    '5wyhKTvJ1ZM',
  ),
  accounting: v(
    'fin-accounting',
    'Setting up your accounting',
    'Account codes, CSV template, sync settings.',
    'wPIOzLAYw6o',
  ),
  hrDashboard: v(
    'hr-dashboard',
    'Navigating the HR dashboard',
    'Overview, people, departments, compliance alerts.',
    'kf8zDPCgOro',
  ),
  hrInsights: v(
    'hr-insights',
    'Tracking traveller well-being',
    'Well-being, team analytics, compliance.',
    '9dv0lXrb4-c',
  ),
  tcDashboard: v(
    'tc-dashboard',
    'Running live travel for your team',
    'Dashboard, trips, approvals.',
    'J6QwfCWnmHk',
  ),
  bookOnBehalf: v(
    'tc-booking-on-behalf',
    "Booking for your travellers: on someone's behalf",
    "Booking on someone's behalf.",
    'uji3zuHQFFM',
  ),
  tcBooks: v(
    'tc-coordinator-books',
    'Booking for your travellers: Policy Book and Employee Book',
    'Policy Book, Employee Book, Unused Credits.',
    'pBkjT_lg850',
  ),
}

/** The resources video library: short walkthroughs, one playlist per role. Same videos as the main site. */
export const VIDEO_GROUPS: VideoGroup[] = [
  {
    role: 'admin',
    label: 'Admin',
    blurb: 'Set up your company, your policy and your approvers once.',
    videos: [
      V.addEmployees,
      V.gradesDepartments,
      V.roles,
      V.policyCreation,
      V.policyGrades,
      V.integrations,
      V.adminDashboard,
      V.travelSummary,
    ],
  },
  {
    role: 'finance',
    label: 'Finance',
    blurb: 'See every trip with its budget and account code, and close the month faster.',
    videos: [V.spendTracking, V.financeAnalytics, V.accounting],
  },
  {
    role: 'people',
    label: 'HR',
    blurb: 'Bring employees on board and look after them while they travel.',
    videos: [
      V.hrDashboard,
      V.addEmployees,
      V.gradesDepartments,
      V.policyCreation,
      V.policyGrades,
      { ...V.travelSummary, title: 'Monitoring duty of care' },
      V.hrInsights,
    ],
  },
  {
    role: 'travel',
    label: 'Travel coordinator',
    blurb: 'Book for others, handle exceptions and keep trips moving when plans change.',
    videos: [V.tcDashboard, V.bookOnBehalf, V.tcBooks, V.travelSummary],
  },
]
