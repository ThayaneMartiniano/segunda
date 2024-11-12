const Sequelize = require('sequelize');
const database = require('../db');
const Comentario = database.define('comentario', {
    id_comentario: { //Caso houver, senão pule
        type: Sequelize.INTEGER, /*INTEGER para int, TEXT para text,BOOLEAN PARA boolean*/
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    id: {
        type: Sequelize.INTEGER,
        primaryKey: valor, //Depende se é chave primária dessa tabela
        allowNull: false,
        references: {
            model: 'usuario',
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    id_curso: {
        type: Sequelize.INTEGER,
        primaryKey: valor, //Depende se é chave primária dessa tabela
        allowNull: false,
        references: {
            model: 'curso',
            key: 'id_curso'
        },
        onDelete: 'CASCADE'
    },
    mensagem: {
        type: Sequelize.TEXT
    }
    //Repita o mesmo bloco para a segunda PK
    //Configure outros atributos caso precisar
}, {
    freezeTableName: true,
    timestamps: false
}
);
module.exports = Comentario;