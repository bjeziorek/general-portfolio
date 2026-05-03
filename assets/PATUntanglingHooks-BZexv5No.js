import{m as e}from"./flex-CHsmQJ9n.js";import{a as t,i as n,n as r,y as i}from"./ThemeContext-CBXMgn7u.js";import{t as a}from"./card-BWaL50Ic.js";import{CodeBlock as o}from"./CodeBlock-BnBfipQB.js";var s=e();function c(){let{t:e}=i(),{color:c}=r();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{size:`6`,color:c,children:e(`pat.h_hooks`)}),(0,s.jsx)(n,{children:e(`pat.hooks1`)}),(0,s.jsx)(n,{children:e(`pat.hooks2`)}),(0,s.jsxs)(`ul`,{children:[(0,s.jsx)(`li`,{children:e(`pat.list1_hooks`)}),(0,s.jsx)(`li`,{children:e(`pat.list2_hooks`)}),(0,s.jsx)(`li`,{children:e(`pat.list3_hooks`)}),(0,s.jsx)(`li`,{children:e(`pat.list4_hooks`)}),(0,s.jsx)(`li`,{children:e(`pat.list5_hooks`)})]}),(0,s.jsx)(n,{children:e(`pat.hooks3`)}),(0,s.jsx)(n,{children:e(`pat.hooks4`)}),(0,s.jsx)(t,{size:`4`,color:c,children:e(`pat.h2_hooks1`)}),(0,s.jsx)(n,{children:e(`pat.hooks5`)}),(0,s.jsxs)(a,{mt:`4`,children:[(0,s.jsx)(n,{children:`Przykład customowego hooka:`}),(0,s.jsx)(`pre`,{children:`useSort.ts`}),(0,s.jsx)(o,{code:`import { useCallback, useMemo, useState } from "react";
import type { TableData } from "../../types/data";
import type { TableColumnsColumn } from "../../types/columns";
import type { TableSortSort } from "../../types/sort";
import { sortColumn } from './utils/sortColumn'
import { toggleSortState } from './utils/toggleSortState'

export function useSort<Data extends { id: string | number; }>(data: TableData<Data>) {
    const [sort, setSort] = useState<TableSortSort<Data>>({
        column: null,
        direction: "asc",
    });

    const sortFn = useMemo(
        () => sortColumn<Data>(sort.column?.id ?? null, sort.direction),
        [sort.column?.id, sort.direction]
    );

    const sortedData = useMemo(() => [...data].sort(sortFn), [data, sortFn]);
    const toggleSort = useCallback((column: TableColumnsColumn<Data> | null) => {
        setSort(prev => toggleSortState(prev, column));
    }, []);

    return {
        sortedData,
        sort,
        setSort,
        toggleSort
    }
}
        `})]}),(0,s.jsx)(t,{size:`4`,color:c,children:e(`pat.h2_hooks2`)}),(0,s.jsx)(n,{children:e(`pat.hooks6`)}),(0,s.jsx)(n,{children:e(`pat.hooks7`)}),(0,s.jsxs)(`ul`,{children:[(0,s.jsx)(`li`,{children:e(`pat.list6_hooks`)}),(0,s.jsx)(`li`,{children:e(`pat.list7_hooks`)}),(0,s.jsx)(`li`,{children:e(`pat.list8_hooks`)}),(0,s.jsx)(`li`,{children:e(`pat.list9_hooks`)}),(0,s.jsx)(`li`,{children:e(`pat.list10_hooks`)}),(0,s.jsx)(`li`,{children:e(`pat.list11_hooks`)}),(0,s.jsx)(`li`,{children:e(`pat.list12_hooks`)}),(0,s.jsx)(`li`,{children:e(`pat.list13_hooks`)})]}),(0,s.jsx)(n,{children:e(`pat.hooks8`)}),(0,s.jsxs)(`ul`,{children:[(0,s.jsx)(`li`,{children:e(`pat.list14_hooks`)}),(0,s.jsx)(`li`,{children:e(`pat.list15_hooks`)}),(0,s.jsx)(`li`,{children:e(`pat.list16_hooks`)}),(0,s.jsx)(`li`,{children:e(`pat.list17_hooks`)}),(0,s.jsx)(`li`,{children:e(`pat.list18_hooks`)})]}),(0,s.jsx)(n,{children:e(`pat.hooks9`)})]})}export{c as PATUntanglingHooks};