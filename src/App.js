import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cabecalho from './Cabecalho';
import Perfil from './Perfil';
import Feed from './Feed';
import LoginModal from './LoginModal';


function App() {
    const [usuarios, setUsuarios] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [usuarioLogado, setUsuarioLogado] = useState(null);

    const openModal = () => setIsModalVisible(true);
    const closeModal = () => setIsModalVisible(false);

    const handleLoginSuccess = (user) => {
        setUsuarioLogado(user);
        // Redirecionar ou fazer outra ação após login bem-sucedido
    };

    return (

        <div className="App">
            <Cabecalho />
            <div id='corpo'>
                <Perfil foto="./logo_faculhub.png" nome="FaculHub" inscricoes="7" openLoginModal={openModal} />
                
                
                <main>
                    <h2>Cursos</h2>
                    <Feed nomeCurso="Inteligência Artificial" instituicao="PUC-MG" fotoCurso="./inteligencia_artificial.png" seta1="flecha_cima_vazia.svg" insc="4" balao = "chat.svg" comentario="1" />
                    <Feed nomeCurso="Eletromecânica" instituicao="PUC-MG" fotoCurso="./eletromecanica.png" seta1="flecha_cima_vazia.svg" insc="4" balao = "chat.svg" comentario="1" />
                </main>
                <LoginModal
                    showModal={isModalVisible}
                    closeModal={closeModal}
                    onLoginSuccess={handleLoginSuccess}
                />

            </div>

        </div>
    );
}

export default App;