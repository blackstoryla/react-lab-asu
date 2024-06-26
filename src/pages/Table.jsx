import { useMemo } from 'react';
import { useTable } from 'react-table'


export function Table(){
    const data = useMemo(
        ()=> [
            {"id":1,"first_name":"Dallas","last_name":"Geibel","email":"dgeibel0@twitter.com","gender":"Male","date_of_birth":"2/3/2022","age":25,"country":"Slovenia","phone":"2107768258"},
            
            {"id":2,"first_name":"Toby","last_name":"Mullineux","email":"tmullineux1@sina.com.cn","gender":"Male","date_of_birth":"3/16/2022","age":47,"country":"China","phone":"5981931450"},

            {"id":3,"first_name":"Keen","last_name":"Sexten","email":"ksexten2@a8.net","gender":"Male","date_of_birth":"2/2/2022","age":60,"country":"China","phone":"1761395128"},

            {"id":4,"first_name":"Shantee","last_name":"Conwell","email":"sconwell3@intel.com","gender":"Female","date_of_birth":"4/18/2022","age":34,"country":"Indonesia","phone":"3372973788"},

            {"id":5,"first_name":"Meaghan","last_name":"Agett","email":"magett4@bloglovin.com","gender":"Female","date_of_birth":"11/17/2021","age":22,"country":"United States","phone":"8161423968"}
        ]
    )

    const columns = useMemo(
        ()=>[
            {
              Header: 'Id',
              accessor: 'id',
            },
            {
              Header: 'Имя',
              accessor: 'first_name',
            },
            {
              Header: 'Фамилия',
              accessor: 'last_name',
            },
            {
              Header: 'День рождения',
              accessor: 'date_of_birth',
            },
            {
              Header: 'Страна',
              accessor: 'country',
            },
            {
              Header: 'Телефон',
              accessor: 'phone',
            },
          ], []
    );

    const table = useTable({
        columns, data
    })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = table

    return (
        <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr key ={headerGroup.id}  {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    );
}
