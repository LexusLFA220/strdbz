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
    const TableBody = (props) => {
        // used Array.map to create table rows from LinkData passed via props
        const rows = props.linkData.map((row, index) => {
        return (
        <tr key={index}>
        <td>{row.name}</td>
        <td>
        <a href={row.URL}>{row.URL}</a>
        </td>
        <td>
        <button onClick={() => props.removeLink(index)}>Delete</button>
        </td>
        </tr>
        )
        })
        
        return <tbody>{rows}</tbody>
        }
    
function Table(props){
    
    return(
        <table>
        <TableHeader/>
        <TableBody linkData={props.linkData} removeLink={props.removeLink}/>
        </table>
    )
}
export default Table