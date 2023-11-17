import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ListAutors = () => {
const [autors, setAutors] = useState([]);
//Listar Autores
useEffect(() => {
const fetchAllAutors = async () => {
try {
const res = await axios.get("http://localhost:8081/autor");
setAutors(res.data);
} catch (err) {
console.log(err);
}
};
fetchAllAutors();
}, []);
console.log(autors);
//Deletar Autores
const handleDelete = async (id) => {
try {
await axios.delete(`http://localhost:8081/autor/${id}`);
window.location.reload()
} catch (err) {
console.log(err);
}
};
return (
<div className="container">
<h2 className='w-100 d-flex justify-content-center p-3'>Listando
Autores</h2>
<div className='row'>
<div className='col-md-12'>
<p><Link to="/addAutor" className="btn btnsuccess">Adicionar novo Autor</Link></p>
<table className="table table-bordered">
<thead>
<tr>
<th>ID</th>
<th>Nome</th>
<th>Data Cadastro</th>
<th>Data Alteração</th>
<th>Ações</th>
</tr>
</thead>
<tbody>
{autors.map((autors) => {
return (
<tr>
<td>{autors.id}</td>
<td>{autors.nome} </td>
<td>{autors.createdAt} </td>
<td>{autors.updatedAt}
</td>
<td>
<Link
to={`/readAutor/${autors.id}`} className="btn btn-success mx2">Ler</Link>
<Link
to={`/updateAutor/${autors.id}`} className="btn btn-info mx2">Editar</Link>
<button
onClick={()=>handleDelete(autors.id)} className="btn btndanger">Deletar</button>
</td>
</tr>
)})
}
</tbody>
</table>
</div>
</div>
</div>
)}
export default ListAutors;