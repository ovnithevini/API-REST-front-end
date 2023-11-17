import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListEditoras from './components/Editora/ListEditora';
import AddEditora from './components/Editora/AddEditora';
import ReadEditora from './components/Editora/ReadEditora';
import UpdateEditora from './components/Editora/UpdateEditora';
import AddAutor from './components/Autor/AddAutor';
import ListAutors from './components/Autor/ListAutor';
import ReadAutor from './components/Autor/ReadAutor';
import UpdateAutor from './components/Autor/UpdateAutor';
import ListCategorias from './components/Categoria/ListCategoria';
import AddCategoria from './components/Categoria/AddCategoria';
import UpdateCategoria from './components/Categoria/UpdateCategoria';
import ReadCategoria from './components/Categoria/ReadCategoria';
import AddLivro from './components/Livro/AddLivro';
import ListLivros from './components/Livro/ListLivro';
import ReadLivro from './components/Livro/ReadLivro';
import UpdateLivro from './components/Livro/UpdateLivro';
function App() {
return (
<div className="App">
<header className="App-header">
<BrowserRouter>
<Routes>
<Route path="/editora" element={<ListEditoras/>} />
<Route path="/addEditora" element={<AddEditora/>} />
<Route path="/readEditora/:id" element={<ReadEditora/>} />
<Route path="/updateEditora/:id" element={<UpdateEditora/>} />
<Route path="/autor" element={<ListAutors/>} />
<Route path="/addAutor" element={<AddAutor/>} />
<Route path="/readAutor/:id" element={<ReadAutor/>} />
<Route path="/updateAutor/:id" element={<UpdateAutor/>} />
<Route path="/categoria" element={<ListCategorias/>} />
<Route path="/addCategoria" element={<AddCategoria/>} />
<Route path="/readCategoria/:id" element={<ReadCategoria/>} />
<Route path="/updateCategoria/:id" element={<UpdateCategoria/>} />
<Route path="/livro" element={<ListLivros/>} />
<Route path="/addLivro" element={<AddLivro/>} />
<Route path="/readLivro/:id" element={<ReadLivro/>} />
<Route path="/updateLivro/:id" element={<UpdateLivro/>} />
</Routes>
</BrowserRouter>
</header>
</div>
);
}
export default App;