import './Rodape.css'

const Rodape = () => {
    return(
        <div className="rodape"> 
            <div>
                <img src="/imagens/fb.png" alt="logo do facebook"  className="logo_rede"/>
                <img src="/imagens/tw.png" alt="logo do twitter"  className="logo_rede"/>
                <img src="/imagens/ig.png" alt="logo do instagram"  className="logo_rede"/>
            </div>
            <div>
                <img src="/imagens/logo.png" alt="logo organo"  className="logo_organo"/>
            </div>
            <div>
                <p>Desenvolvido por Alura</p>
            </div>
        </div>
    )
}

export default Rodape