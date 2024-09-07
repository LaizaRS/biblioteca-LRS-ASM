import CardLivros from '../CardLivros/CardLivros'
import DescriçaoComFiltro from '../DescricaoComFiltro/DescricaoComFiltro'


import ImagensTranparentes from '../ImagensTransparentes/ImagensTransparentes'
import './OrganizandoNaTela.css'

const OrganizandoNaTela = () => {
    return (
        <div className='centralizando'>
            <div className='dividido-em-duas-colunas'>
                <div>
                    <DescriçaoComFiltro />
                </div>
                <div>
                    <ImagensTranparentes />
                </div>
            </div>
            <div className='sobrepondo-a-segunda-coluna'>
                <CardLivros />
            </div>
        </div>
    )
}

export default OrganizandoNaTela