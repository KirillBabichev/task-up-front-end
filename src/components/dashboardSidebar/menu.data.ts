import { DASHBOARD_PAGES } from '@/config/pages/url.config'
import {
    CalendarRange,
    KanbanSquare,
    LayoutDashboard,
    Settings,
    Timer
} from 'lucide-react'
import type { TMenuItem } from './menu.types'



export const MENU: Array<TMenuItem> = [
    {
        icon: LayoutDashboard,
        link: DASHBOARD_PAGES.HOME,
        name: 'Dashboard'
    },
    {
        icon: KanbanSquare,
        link: DASHBOARD_PAGES.TASKS,
        name: 'Tasks'
    },
    {
        icon: Timer,
        link: DASHBOARD_PAGES.TIMER,
        name: 'Timer'
    },
    {
        icon: CalendarRange,
        link: DASHBOARD_PAGES.TIME_BLOCKING,
        name: 'Time blocking'
    },
    {
        icon: Settings,
        link: DASHBOARD_PAGES.SETTINGS,
        name: 'Settings'
    }
]
