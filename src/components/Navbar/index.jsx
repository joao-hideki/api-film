import { Link, useNavigate } from "react-router-dom";
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi';
import {Container} from './style';
import { useState } from "react";

export const Navbar = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!search){
            alert('Preencha o campo de pesquisa');
            return;
        }
        navigate(`/search?q=${search}`);
        setSearch('');
    }

    return(
        <Container>
            <h2><Link to='/'><BiCameraMovie id='logo'/>Movies Lib</Link></h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    placeholder="Busque um filme"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type='submit'><BiSearchAlt2/></button> 
            </form>
        </Container>
    );
}