const Sequelize = require('sequelize');
const database = require('../db');
const Inscricao = database.define('inscricao', {
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
    //Repita o mesmo bloco para a segunda PK
    //Configure outros atributos caso precisar
}, {
    freezeTableName: true,
    timestamps: false
}
);
module.exports = Inscricao;