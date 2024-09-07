import CardLivros from '../CardLivros/CardLivros'
import DescricaoComFiltro from '../DescricaoComFiltro/DescricaoComFiltro'
import { useState } from 'react';
import livros from "../../json/livros.json";


import ImagensTranparentes from '../ImagensTransparentes/ImagensTransparentes'
import './OrganizandoNaTela.css'

const OrganizandoNaTela = () => {
    const [generoSelecionado, setGeneroSelecionado] = useState("");
    const [autorSelecionado, setAutorSelecionado] = useState("");


    return (
        <div className='centralizando'>
            <div className='dividido-em-duas-colunas'>
                <div>
                <DescricaoComFiltro 
                    generoSelecionado={generoSelecionado} 
                    setGeneroSelecionado={setGeneroSelecionado}
                    autorSelecionado={autorSelecionado} 
                    setAutorSelecionado={setAutorSelecionado}
                />
                </div>
                <div>
                    <ImagensTranparentes />
                </div>
            </div>
            <div className='sobrepondo-a-segunda-coluna'>
                <CardLivros
                   generoSelecionado={generoSelecionado} 
                   autorSelecionado={autorSelecionado}
                   livros={livros}
               />
                
            </div>
        </div>
    )
}

export default OrganizandoNaTela