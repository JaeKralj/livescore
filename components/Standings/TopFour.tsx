'use client'

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import Card from '../Base/Card'
import { DUMMY_STANDINGS, standingsColumns } from './table-config'

function TopFour({}: propTypes) {
  const table = useReactTable({
    data: DUMMY_STANDINGS,
    columns: standingsColumns,
    getCoreRowModel: getCoreRowModel(),
  })

  console.log(table)
  return (
    <Card>
      <table
        className='bg-black-100 rounded-[1.25rem] text-left'
        cellPadding={13}
      >
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </Card>
  )
}

type propTypes = {}

export default TopFour
