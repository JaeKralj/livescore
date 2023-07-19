import { createColumnHelper } from '@tanstack/react-table'

type Standings = {
  team: string
  played: number
  win: number
  draw: number
  lose: number
  goal_for: number
  goal_against: number
  goal_difference: number
  points: number
}

const columnHelper = createColumnHelper<Standings>()

export const standingsColumns = [
  columnHelper.accessor('team', {
    header: 'Team',
  }),
  columnHelper.accessor('played', {
    header: 'P',
  }),
  columnHelper.accessor('win', {
    header: 'W',
  }),
  columnHelper.accessor('draw', {
    header: 'D',
  }),
  columnHelper.accessor('lose', {
    header: 'L',
  }),
  columnHelper.accessor('goal_for', {
    header: 'Gf',
  }),
  columnHelper.accessor('goal_against', {
    header: 'Ga',
  }),
  columnHelper.accessor('goal_difference', {
    header: 'Gd',
  }),
  columnHelper.accessor('points', {
    header: 'Pts',
  }),
]

export const DUMMY_STANDINGS: Standings[] = [
  {
    team: 'Chelsea',
    played: 38,
    win: 36,
    draw: 1,
    lose: 1,
    goal_for: 78,
    goal_against: 2,
    goal_difference: 76,
    points: 115,
  },
]
