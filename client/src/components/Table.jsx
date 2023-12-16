function TableHeader(){

    return(
    <thead>
    <tr>
    <th>Fighter Name</th>
    <th>Figher Information Page</th>
    <th>Remove From List</th>
    </tr>
    </thead>
    )
    }
function TableBody(){

    return(
        <tbody></tbody>
    )
}
    
function Table(){
    return(
        <table>
        <TableHeader/>
        <TableBody/>
        </table>
    )
}
export default Table