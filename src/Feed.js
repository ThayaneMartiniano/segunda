function Feed({ nomeCurso, instituicao, fotoCurso, insc, comentario, seta1, balao }) {
    return (
        <div id="feed">
            <div id="encima">
                <p>{nomeCurso}</p>
                <p>{instituicao}</p>
            </div>
            <img src={fotoCurso} alt={nomeCurso} />
            <div id="embaixo">
                <div id="lado">
                    <img src={seta1} />
                    <p>{insc}</p>
                </div>
                <div id="lado1"> 
                    <img src={balao} alt="balao" />
                    <p>{comentario}</p>
                </div>



            </div>


        </div>
    )
}
export default Feed 