

function Perfil({ foto, nome, inscricoes, openLoginModal }) {
    return (
        <div id="perfil">

            <button onClick={openLoginModal}>Entrar</button>

            <div id="logo">
                <img id="logos" src={foto} alt={nome} />
            </div>
            <h2>{nome}</h2>
            <p>Inscrições: {inscricoes}</p>


        </div>
    )
}
export default Perfil;