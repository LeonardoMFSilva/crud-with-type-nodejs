import { createServer, IncomingMessage, ServerResponse } from 'http';
import { parse } from 'query-string';
import * as url from 'url';
import * as fs from 'fs';

const port = 5000;

const server = createServer((request: IncomingMessage, response: ServerResponse) => {

    const urlParse = url.parse(request.url ? request.url : '', true);
    var resposta;
    const params = parse(urlParse.search ? urlParse.search : '');

    if(urlParse.pathname == '/criar-usuario'){
        fs.writeFile('users/' + params.id + '.txt', JSON.stringify(params), function (err: any) {
            if(err) throw err;
            console.log('Saved!');

            resposta = 'Usuario criado ou atualizado com sucesso';

            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json');
            response.end(resposta);
        })
    }

});


//Execução do server
server.listen(port, () => {
    console.log(`Server running on port ${port}`)
});