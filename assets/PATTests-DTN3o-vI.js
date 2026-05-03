import{g as e,m as t,v as n}from"./flex-CHsmQJ9n.js";import{a as r,i,n as a,y as o}from"./ThemeContext-CBXMgn7u.js";import{i as s,n as c,r as l,t as u}from"./tabs-Cq2Q_GN4.js";import{r as d}from"./cache-BCrUs86F.js";import{t as f}from"./card-BWaL50Ic.js";import{CodeBlock as p}from"./CodeBlock-BnBfipQB.js";var m=n(e(),1),h=t(),g=m.memo(p);function _(e){let{code:t,test:n,title1:r,title2:a,runInWorker:p=!0}=e,{t:m}=o();return(0,h.jsx)(f,{my:`4`,children:(0,h.jsxs)(s,{defaultValue:`code`,children:[(0,h.jsxs)(c,{children:[(0,h.jsx)(u,{value:`code`,children:m(`universal.code`)}),(0,h.jsx)(u,{value:`test`,children:m(`universal.test`)})]}),(0,h.jsxs)(d,{pt:`3`,children:[(0,h.jsxs)(l,{value:`code`,children:[(0,h.jsx)(i,{children:r}),(0,h.jsx)(g,{code:t,runInWorker:p})]}),(0,h.jsxs)(l,{value:`test`,children:[(0,h.jsx)(i,{children:a}),(0,h.jsx)(g,{code:n,runInWorker:p})]})]})]})})}function v(){let{t:e}=o(),{color:t}=a();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r,{size:`6`,color:t,children:e(`pat.h_tests`)}),(0,h.jsx)(i,{children:e(`pat.tests1`)}),(0,h.jsx)(i,{children:e(`pat.tests2`)}),(0,h.jsx)(r,{size:`4`,color:t,children:e(`pat.h2_tests1`)}),(0,h.jsx)(i,{children:e(`pat.tests3`)}),(0,h.jsx)(_,{title1:`toggleSortState.ts`,title2:`toggleSortState.test.ts`,code:`import type { TableColumnsColumn } from "../../../types/columns";
import type { TableSortSort } from "../../../types/sort";

export function toggleSortState<Data>(
  prev: TableSortSort<Data>,
  column: TableColumnsColumn<Data> | null
): TableSortSort<Data> {
  if (prev.column === column) {
    return {
      column,
      direction: prev.direction === "asc" ? "desc" : "asc",
    };
  }

  return {
    column,
    direction: "asc",
  };
}
        `,test:`import {it, describe, expect} from "vitest";
import { toggleSortState } from "./toggleSortState";
import type { TableSortSort } from "../../../types/sort";
import type { TableColumnsColumn } from "../../../types/columns";

interface Data {
    id: string,
    size: number,
    options: ['a','b']
}

describe('toggleSortState', () => {
  const colA:TableColumnsColumn<Data> = {
    id: 'id',
    label: 'sdsd',
    visible: true,
    render: function (): React.ReactNode {
      throw new Error("Function not implemented.");
    }
  };
    const colB:TableColumnsColumn<Data> = {
    id: 'size',
    label: 'dssdsd',
    visible: false,
    render:()=>null
  };

  it('switches direction when clicking same column', () => {
    const prev:TableSortSort<Data> = { column: colA, direction: 'asc' };
    const result = toggleSortState<Data>(prev, colA);
    expect(result.direction).toBe('desc');
  });

  it('resets to asc when clicking different column', () => {
    const prev:TableSortSort<Data> = { column: colA, direction: 'desc' };
    const result = toggleSortState<Data>(prev, colB);
    expect(result).toEqual({ column: colB, direction: 'asc' });
  });

  it('handles null column', () => {
    const prev:TableSortSort<Data> = { column: colA, direction: 'asc' };
    const result = toggleSortState<Data>(prev, null);
    expect(result).toEqual({ column: null, direction: 'asc' });
  });

  it('does not mutate previous state', () => {
    const prev:TableSortSort<Data> = { column: colA, direction: 'asc' };
    const result = toggleSortState<Data>(prev, colA);
    expect(result).not.toBe(prev);
  });
});
        `}),(0,h.jsx)(r,{size:`4`,color:t,children:e(`pat.h2_tests3`)}),(0,h.jsx)(i,{children:e(`pat.tests4`)}),(0,h.jsxs)(`ul`,{children:[(0,h.jsx)(`li`,{children:e(`pat.list1_tests`)}),(0,h.jsx)(`li`,{children:e(`pat.list2_tests`)}),(0,h.jsx)(`li`,{children:e(`pat.list3_tests`)}),(0,h.jsx)(`li`,{children:e(`pat.list4_tests`)}),(0,h.jsx)(`li`,{children:e(`pat.list5_tests`)})]}),(0,h.jsx)(i,{children:e(`pat.tests5`)}),(0,h.jsx)(i,{children:e(`pat.tests6`)}),(0,h.jsx)(i,{children:e(`pat.tests7`)}),(0,h.jsx)(r,{size:`4`,color:t,children:e(`pat.h2_tests4`)}),(0,h.jsx)(i,{children:e(`pat.tests8`)}),(0,h.jsx)(i,{children:e(`pat.tests9`)}),(0,h.jsxs)(`ul`,{children:[(0,h.jsx)(`li`,{children:e(`pat.list6_tests`)}),(0,h.jsx)(`li`,{children:e(`pat.list7_tests`)}),(0,h.jsx)(`li`,{children:e(`pat.list8_tests`)}),(0,h.jsx)(`li`,{children:e(`pat.list9_tests`)})]}),(0,h.jsx)(i,{children:e(`pat.tests10`)}),(0,h.jsxs)(f,{my:`4`,children:[(0,h.jsx)(`pre`,{children:`toggleAndSort.integration.test.ts`}),(0,h.jsx)(p,{code:`import type { TableColumnsColumn } from "@/shared/components/table/types/columns";
import type { TableSortDirection, TableSortSort } from "@/shared/components/table/types/sort";
import { describe, it, expect } from "vitest"
import { toggleSortState } from "../../utils/toggleSortState";
import { sortColumn } from "../../utils/sortColumn";

describe('integration of toggle and sort', () => {
    interface Data {
        id: string,
        size: number
    }

    const data: Data[] = [
        { id: 'aaa', size: 6 },
        { id: 'bbb', size: 9 },
        { id: 'ccc', size: 6 },
    ]

    const colA: TableColumnsColumn<Data> = {
        id: 'id',
        label: 'sdsd',
        visible: true,
        render: ()=>null
    };
    const colB: TableColumnsColumn<Data> = {
        id: 'size',
        label: 'dssdsd',
        visible: false,
        render: () => null
    };

    const toggleState: TableSortDirection = "asc";

    it('when toggle is changed, sorting changes direction', () => {
        const prev: TableSortSort<Data> = { column: colA, direction: toggleState }
        const result = toggleSortState<Data>(prev, colA);
        const sortFn = sortColumn(result.column?.id ?? null, result.direction)
        expect([...data].sort(sortFn)).toEqual([
            { id: 'ccc', size: 6 },
            { id: 'bbb', size: 9 },
            { id: 'aaa', size: 6 },
        ])
    });

    it('when column and toggle is changed, sorting changes direction', () => {
        const prev: TableSortSort<Data> = { column: colB, direction: toggleState }
        const result = toggleSortState<Data>(prev, colB);
        const sortFn = sortColumn(result.column?.id ?? null, result.direction)
        expect([...data].sort(sortFn)).toEqual([
            { id: 'bbb', size: 9 },
            { id: 'aaa', size: 6 },
            { id: 'ccc', size: 6 },
        ])
    })
})
`})]}),(0,h.jsx)(r,{size:`4`,color:t,children:e(`pat.h2_tests5`)}),(0,h.jsx)(i,{children:e(`pat.tests11`)}),(0,h.jsx)(i,{children:e(`pat.tests12`)}),(0,h.jsxs)(`ul`,{children:[(0,h.jsx)(`li`,{children:e(`pat.list10_tests`)}),(0,h.jsx)(`li`,{children:e(`pat.list11_tests`)}),(0,h.jsx)(`li`,{children:e(`pat.list12_tests`)}),(0,h.jsx)(`li`,{children:e(`pat.list13_tests`)})]}),(0,h.jsx)(r,{size:`4`,color:t,children:e(`pat.h2_tests`)}),(0,h.jsx)(i,{children:e(`pat.tests13`)}),(0,h.jsx)(i,{children:e(`pat.tests15`)}),(0,h.jsx)(_,{code:`import { Table } from "@radix-ui/themes";
import { TableBody } from "./components/TableBody";
import { TableHeader } from "./components/TableHeader";
import type { TableColumnsColumns } from "../../types/columns";
import type { TableData } from "../../types/data";
import type { TableSortSort, TableSortToggleSort } from "../../types/sort";
import type { TableDragHandleDrop, TableDragSetDragged } from "../../types/drag";

interface TableFullProps<Data extends { id: string | number; }> {
    columns: TableColumnsColumns<Data>,
    setDragged: TableDragSetDragged,
    handleDrop: TableDragHandleDrop,
    toggleSort: TableSortToggleSort<Data>,
    sort: TableSortSort<Data>,
    paginated: TableData<Data>
}

export function TableFull<Data extends { id: string | number; }>(props: TableFullProps<Data>) {
    const {
        columns,
        setDragged,
        handleDrop,
        toggleSort,
        sort,
        paginated
    } = props;

    return (
        <Table.Root>
            <TableHeader setDragged={setDragged} handleDrop={handleDrop} columns={columns} toggleSort={toggleSort} sort={sort}></TableHeader>
            <TableBody paginated={paginated} columns={columns}></TableBody>
        </Table.Root>
    )
}`,test:`import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from "@testing-library/user-event";
import { TableFull } from './TableFull';
import type { TableColumnsColumns } from '../../types/columns';

describe('TableFull integration tests', () => {

  interface Data {
    name: string,
    id: number,
    age: number
  }

  it("renders TableHeader and TableBody", () => {
    const columns: TableColumnsColumns<Data> = [
      { id: "name", label: "Name", visible: true, render: (row: Data) => row.name },
    ];
    const data = [{ id: 1, name: "Alice", age: 20 }];

    render(
      <TableFull
        columns={columns}
        paginated={data}
        setDragged={() => { }}
        handleDrop={() => { }}
        toggleSort={() => { }}
        sort={{ column: columns[0], direction: 'asc' }}
      />
    );

    expect(screen.getByText((t) => t.includes("Name"))).toBeInTheDocument();
    expect(screen.getByText("Alice")).toBeInTheDocument();
  });

  it("passes columns to header and body", () => {
    const columns: TableColumnsColumns<Data> = [
      { id: "name", label: "Name", visible: true, render: (row: Data) => row.name },
    ];
    const data = [{ id: 1, name: "Alice", age: 20 }];

    render(
      <TableFull
        columns={columns}
        paginated={data}
        setDragged={() => { }}
        handleDrop={() => { }}
        toggleSort={() => { }}
        sort={{ column: columns[0], direction: 'asc' }}
      />
    );

    expect(screen.getByText((t) => t.includes("Name"))).toBeInTheDocument();
    expect(screen.getByText("Alice")).toBeInTheDocument();
  });
  it("calls toggleSort when header is clicked", async () => {
    const user = userEvent.setup();
    const toggleSort = vi.fn();

    const columns: TableColumnsColumns<Data> = [
      { id: "name", label: "Name", visible: true, render: (row) => row.name },
    ];
    const data = [{ id: 1, name: "Alice", age: 20 }];

    render(
      <TableFull
        columns={columns}
        paginated={data}
        setDragged={() => { }}
        handleDrop={() => { }}
        toggleSort={toggleSort}
        sort={{ column: columns[0], direction: 'asc' }}
      />
    );

    const header = screen.getByText((t) => t.includes("Name"));
    await user.click(header);

    expect(toggleSort).toHaveBeenCalledWith(columns[0]);
  });
  it("calls setDragged and handleDrop on drag events", () => {
    const setDragged = vi.fn();
    const handleDrop = vi.fn();

    const columns: TableColumnsColumns<Data> = [
      { id: "name", label: "Name", visible: true, render: (row) => row.name },
    ];
    const data = [{ id: 1, name: "Alice", age: 20 }];

    render(
      <TableFull
        columns={columns}
        paginated={data}
        setDragged={setDragged}
        handleDrop={handleDrop}
        toggleSort={() => { }}
        sort={{ column: columns[0], direction: 'asc' }}
      />
    );

    const header = screen.getByText((t) => t.includes("Name"));

    fireEvent.dragStart(header);
    fireEvent.drop(header);

    expect(setDragged).toHaveBeenCalledWith("name");
    expect(handleDrop).toHaveBeenCalledWith("name");
  });

  it("renders one row per item in paginated", () => {
    const columns: TableColumnsColumns<Data> = [
      { id: "name", label: "Name", visible: true, render: (row) => row.name },
    ];
    const data = [
      { id: 1, name: "Alice", age: 30 },
      { id: 2, name: "Bob", age: 20 },
    ];

    render(
      <TableFull
        columns={columns}
        paginated={data}
        setDragged={() => { }}
        handleDrop={() => { }}
        toggleSort={() => { }}
        sort={{ column: columns[0], direction: 'asc' }}
      />
    );

    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(1 + data.length);
  });

});
`,title1:`TableFull.tsx`,title2:`TableFull.rtl.test.tsx`}),(0,h.jsx)(r,{size:`4`,color:t,children:e(`pat.h2_tests2`)}),(0,h.jsx)(i,{children:e(`pat.tests16`)}),(0,h.jsxs)(`ul`,{children:[(0,h.jsx)(`li`,{children:e(`pat.list14_tests`)}),(0,h.jsx)(`li`,{children:e(`pat.list15_tests`)}),(0,h.jsx)(`li`,{children:e(`pat.list16_tests`)}),(0,h.jsx)(`li`,{children:e(`pat.list17_tests`)}),(0,h.jsx)(`li`,{children:e(`pat.list18_tests`)})]}),(0,h.jsx)(i,{children:e(`pat.tests17`)})]})}export{v as PATTests};