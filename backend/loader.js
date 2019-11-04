const server = require('./config/server') // Arquivo para configuracoes do servidor
require('./config/database')              // Arquivo para configuracao do banco
require('./config/routes')(server)        // Arquivo para rotas do sistema 