import{m as e}from"./flex-CHsmQJ9n.js";import{a as t,i as n,n as r,y as i}from"./ThemeContext-CBXMgn7u.js";import{t as a}from"./card-BWaL50Ic.js";import{CodeBlock as o}from"./CodeBlock-BnBfipQB.js";var s=e();function c(){let{t:e}=i(),{color:c}=r();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{size:`6`,color:c,children:e(`pat.h_types`)}),(0,s.jsx)(n,{children:e(`pat.types1`)}),(0,s.jsx)(n,{children:e(`pat.types2`)}),(0,s.jsx)(n,{children:e(`pat.types3`)}),(0,s.jsx)(t,{size:`4`,color:c,children:e(`pat.h2_types1`)}),(0,s.jsx)(a,{my:`4`,children:(0,s.jsx)(o,{code:`type TableColumnsColumn<Data> = {
                id: Extract<keyof Data, string>;
                label: string;
                visible: boolean;
                render: (row: Data) => React.ReactNode;
            };
                        `})}),(0,s.jsx)(n,{children:e(`pat.types4`)}),(0,s.jsx)(n,{children:e(`pat.types5`)}),(0,s.jsxs)(`ul`,{children:[(0,s.jsx)(`li`,{children:e(`pat.list1_types`)}),(0,s.jsxs)(`ul`,{children:[(0,s.jsx)(`li`,{children:e(`pat.sublist1_types`)}),(0,s.jsx)(`li`,{children:e(`pat.sublist2_types`)}),(0,s.jsx)(`li`,{children:e(`pat.sublist3_types`)})]}),(0,s.jsx)(`li`,{children:e(`pat.list2_types`)})]}),(0,s.jsx)(n,{children:e(`pat.types6`)}),(0,s.jsx)(t,{size:`4`,color:c,children:e(`pat.h2_types2`)}),(0,s.jsx)(a,{my:`4`,children:(0,s.jsx)(o,{code:`type TableFiltersFilters<Filters> = {
                [K in keyof Filters]: string;
            };
            `})}),(0,s.jsx)(n,{children:e(`pat.types7`)}),(0,s.jsx)(n,{children:e(`pat.types8`)}),(0,s.jsx)(n,{children:e(`pat.types9`)}),(0,s.jsxs)(`ul`,{children:[(0,s.jsx)(`li`,{children:e(`pat.list1_types1`)}),(0,s.jsx)(`li`,{children:e(`pat.list2_types1`)}),(0,s.jsx)(`li`,{children:e(`pat.list3_types1`)}),(0,s.jsx)(`li`,{children:e(`pat.list4_types1`)})]}),(0,s.jsx)(n,{children:e(`pat.types10`)}),(0,s.jsx)(t,{size:`4`,color:c,children:e(`pat.h2_types3`)}),(0,s.jsx)(a,{my:`4`,children:(0,s.jsx)(o,{code:`interface ProbablyATableProps<Data extends { id: string | number }, Filters> {
                columns: TableColumnsColumns<Data>;
                data: TableData<Data>;
                filters: TableFiltersFilters<Filters>;
                defaultFilters: TableFiltersFilters<Filters>;
                paginationConfig?: TablePaginationPageSizeConfig;
            }
            `})}),(0,s.jsx)(n,{children:e(`pat.types11`)}),(0,s.jsx)(n,{children:e(`pat.types12`)}),(0,s.jsxs)(`ul`,{children:[(0,s.jsx)(`li`,{children:e(`pat.list5_types1`)}),(0,s.jsx)(`li`,{children:e(`pat.list6_types1`)}),(0,s.jsx)(`li`,{children:e(`pat.list7_types1`)})]}),(0,s.jsx)(n,{children:e(`pat.types13`)}),(0,s.jsx)(n,{children:e(`pat.types14`)}),(0,s.jsxs)(`ul`,{children:[(0,s.jsx)(`li`,{children:e(`pat.list8_types1`)}),(0,s.jsx)(`li`,{children:e(`pat.list9_types1`)}),(0,s.jsx)(`li`,{children:e(`pat.list11_types1`)}),(0,s.jsx)(`li`,{children:e(`pat.list12_types1`)})]})]})}export{c as PATTyping};