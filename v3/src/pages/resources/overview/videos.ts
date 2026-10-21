import {
  Building2,
  ChartColumn,
  LayoutDashboard,
  Lightbulb,
  Plug,
  Route,
  ScrollText,
  ShieldCheck,
  TrendingUp,
  GraduationCap,
  Receipt,
  UserPlus,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

import type { VideoCardData } from '@/components/video/video-card'

export type VideoRole = 'admin' | 'finance' | 'people' | 'travel' | 'traveller'

export type VideoGroup = {
  role: VideoRole
  label: string
  /** One line under the chips, so a visitor knows they are in the right place. */
  blurb: string
  videos: VideoCardData[]
}

const video = (
  id: string,
  title: string,
  description: string,
  icon: LucideIcon,
  extra: Pick<VideoCardData, 'duration' | 'youtubeId'> = {},
): VideoCardData => ({ id, title, description, icon, ...extra })

/**
 * Video library, mapped to the Customer Enablement Hub video plan (v2). Codes in comments are the plan's.
 * A video the plan marks "same as" is reused on each role that needs it.
 * To publish a video, add its YouTube id (`youtubeId: 'abc123XYZ00'`) and an optional `duration`.
 */
const as = (v: VideoCardData, title: string): VideoCardData => ({ ...v, title })

const V = {
  gradesDepartments: video(
    'adm-grades-departments',
    'Grades and departments',
    'How grades and departments are set up for your company. Part of Adding your employees.',
    Building2,
    { youtubeId: 'QjR41hY0DuQ' },
  ),
  addEmployees: video(
    'adm-add-employees',
    'Adding your employees',
    'Import CSV, adding one employee, grades, departments, job titles.',
    UserPlus,
    { youtubeId: '4UxV9rC_SbE' },
  ),
  roles: video(
    'adm-role-management',
    'Configuring roles and permissions',
    'Role management, creating a role.',
    ShieldCheck,
    { youtubeId: 'TyWLvVDsFGE' },
  ),
  policyCreation: video(
    'adm-policy-creation',
    'Setting up your travel policy: creating a policy',
    'Creating a policy.',
    ScrollText,
    { youtubeId: 'El_FDZYF0MI' },
  ),
  policyGrades: video(
    'adm-policy-grades',
    'Setting up your travel policy: assigning it by grade',
    'Assigning a policy by grade.',
    GraduationCap,
    { youtubeId: 'Is-tfPiGkTY' },
  ),
  integrations: video(
    'adm-integrations',
    'Connecting single sign-on and integrations',
    'Single sign-on, SAP Concur and other integrations.',
    Plug,
    { youtubeId: 'bwoyZDaddGM' },
  ),
  adminDashboard: video(
    'adm-dashboard',
    'Running your daily travel',
    'Dashboard, all trips, approval requests.',
    LayoutDashboard,
    { youtubeId: 'Qx1jeqQdvtg' },
  ),
  travelSummary: video(
    'adm-travel-summary',
    'Monitoring traveller safety',
    'Travel Summary, Live Map, Traveler Report.',
    Route,
    { youtubeId: 'lTifdnIYDeY' },
  ),
  spendTracking: video(
    'fin-spend-tracking',
    'Navigating the finance dashboard',
    'Overview, to-do list, spend tracking.',
    TrendingUp,
    { youtubeId: 'a0IVMdZsiOA' },
  ),
  financeAnalytics: video(
    'fin-analytics',
    'Analysing your spend',
    'Travel spend, team spend, savings, compliance, booking reports.',
    ChartColumn,
    { youtubeId: '5wyhKTvJ1ZM' },
  ),
  glCodes: video(
    'fin-gl-codes',
    'Setting up your accounting',
    'GL codes, CSV template, sync settings.',
    Workflow,
    { youtubeId: 'wPIOzLAYw6o' },
  ),
  hrDashboard: video(
    'hr-dashboard',
    'Navigating the HR dashboard',
    'Overview, people, departments, compliance alerts.',
    LayoutDashboard,
    { youtubeId: 'kf8zDPCgOro' },
  ),
  hrInsights: video(
    'hr-insights',
    'Tracking traveller well-being',
    'Well-being, team analytics, compliance.',
    Lightbulb,
    { youtubeId: '9dv0lXrb4-c' },
  ),
  tcDashboard: video(
    'tc-dashboard',
    'Running live travel for your team',
    'Dashboard, trips, approvals.',
    LayoutDashboard,
    { youtubeId: 'J6QwfCWnmHk' },
  ),
  bookOnBehalf: video(
    'tc-booking-on-behalf',
    "Booking for your travellers: on someone's behalf",
    "Booking on someone's behalf.",
    Users,
    { youtubeId: 'uji3zuHQFFM' },
  ),
  tcBooks: video(
    'tc-coordinator-books',
    'Booking for your travellers: Policy Book and Employee Book',
    'Policy Book, Employee Book, Unused Credits.',
    Users,
    { youtubeId: 'pBkjT_lg850' },
  ),
  bookingReimbursement: video(
    'trv-booking-reimbursement',
    'Booking and Reimbursement',
    'Miraee Traveller Training: how to book a trip and get reimbursed for it.',
    Receipt,
    { youtubeId: '9X22kiGiPkM' },
  ),
}

export const VIDEO_GROUPS: VideoGroup[] = [
  {
    role: 'admin',
    label: 'Admin',
    blurb: 'Set up your company, your policy and your approvers once.',
    videos: [
      V.addEmployees, // ADM-02
      V.gradesDepartments, // ADM-02 (grades, departments)
      V.roles, // ADM-03
      V.policyCreation, // ADM-04
      V.policyGrades, // ADM-04
      V.integrations, // ADM-06
      V.adminDashboard, // ADM-07
      V.travelSummary, // ADM-08
    ],
  },
  {
    role: 'finance',
    label: 'Finance',
    blurb: 'See every trip with its budget and GL code, and close the month faster.',
    videos: [
      V.spendTracking, // FIN-01
      V.financeAnalytics, // FIN-02
      V.glCodes, // FIN-06
    ],
  },
  {
    role: 'people',
    label: 'HR',
    blurb: 'Bring employees on board and look after them while they travel.',
    videos: [
      V.hrDashboard, // HR-01
      V.addEmployees, // HR-02 (same as ADM-02)
      V.gradesDepartments, // HR-02
      V.policyCreation, // HR-03 (same as ADM-04)
      V.policyGrades, // HR-03
      as(V.travelSummary, 'Monitoring duty of care'), // HR-04 (same as ADM-08)
      V.hrInsights, // HR-05
    ],
  },
  {
    role: 'travel',
    label: 'Travel coordinator',
    blurb: 'Book for others, handle exceptions and keep trips moving when plans change.',
    videos: [
      V.tcDashboard, // TC-01
      V.bookOnBehalf, // TC-02
      V.tcBooks, // TC-02
      V.travelSummary, // TC-03 (same as ADM-08)
    ],
  },
]
