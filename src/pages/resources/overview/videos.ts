import {
  Building2,
  ChartColumn,
  LayoutDashboard,
  Lightbulb,
  Plug,
  Receipt,
  UserPlus,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

import type { VideoCardData } from '@/components/video/video-card'

export type VideoRole = 'admin' | 'finance' | 'people' | 'travel'

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

/** Video library. To publish a video, add its YouTube id (`youtubeId: 'abc123XYZ00'`) and an optional `duration`. */
export const VIDEO_GROUPS: VideoGroup[] = [
  {
    role: 'admin',
    label: 'Admin',
    blurb: 'Set up your company, your policy and your approvers once.',
    videos: [
      video(
        'admin-grades-departments',
        'Grades & Department',
        'Miraee Admin Training: how grades and departments are set up for your company.',
        Building2,
        { youtubeId: 'QjR41hY0DuQ' },
      ),
      video(
        'admin-dashboard',
        'Admin Dashboard',
        'Miraee Admin Training: a tour of the admin dashboard.',
        LayoutDashboard,
        { youtubeId: 'Qx1jeqQdvtg' },
      ),
      video(
        'admin-add-employees',
        'Add Employees',
        'Miraee Admin Training: how to add employees to Miraee.',
        UserPlus,
        { youtubeId: '4UxV9rC_SbE' },
      ),
      video(
        'admin-integrations',
        'Integrations',
        'Miraee Admin Training: how to connect Miraee to the systems your company already uses.',
        Plug,
        { youtubeId: 'bwoyZDaddGM' },
      ),
    ],
  },
  {
    role: 'finance',
    label: 'Finance team',
    blurb: 'See every trip with its budget and GL code, and close the month faster.',
    videos: [
      video(
        'fin-analytics',
        'Finance Analytics',
        'Miraee Finance Training: how to read your travel spend in finance analytics.',
        ChartColumn,
        { youtubeId: '5wyhKTvJ1ZM' },
      ),
      video(
        'fin-gl-codes',
        'GL Code Integrations',
        'Miraee Finance Training: how GL codes are connected so every trip arrives coded.',
        Workflow,
        { youtubeId: 'wPIOzLAYw6o' },
      ),
    ],
  },
  {
    role: 'people',
    label: 'People team',
    blurb: 'Bring employees on board and roll Miraee out to the whole company.',
    videos: [
      video(
        'ppl-hr-dashboard',
        'HR Dashboard',
        'Miraee HR Training: a tour of the HR dashboard.',
        LayoutDashboard,
        { youtubeId: 'kf8zDPCgOro' },
      ),
      video(
        'ppl-add-employees',
        'Add Employees',
        'Miraee HR Training: how to add employees to Miraee.',
        UserPlus,
        { youtubeId: '4UxV9rC_SbE' },
      ),
      video(
        'ppl-hr-insights',
        'HR Insights',
        'Miraee HR Training: the insights available to your people team.',
        Lightbulb,
        { youtubeId: '9dv0lXrb4-c' },
      ),
    ],
  },
  {
    role: 'travel',
    label: 'Travel coordinator',
    blurb: 'Book for others, handle exceptions and keep trips moving when plans change.',
    videos: [
      video(
        'trv-booking-on-behalf',
        'Booking on Behalf',
        'Miraee Travel Coordinator Training: how to book a trip for someone else.',
        Users,
        { youtubeId: 'uji3zuHQFFM' },
      ),
      video(
        'trv-booking-reimbursement',
        'Booking and Reimbursement',
        'Miraee Travel Training: how to book a trip and get reimbursed for it.',
        Receipt,
        { youtubeId: '9X22kiGiPkM' },
      ),
    ],
  },
]
