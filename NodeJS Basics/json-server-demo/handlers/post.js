const jsonClass = require('./json');

const JSONHandler = new jsonClass();

module.exports = class POSTHandler {
    constructor() {

    }

    async response(req, res) {
        return new Promise((resolve, reject) => {

            const urlParts = req.url.split('/');
            const entity = urlParts[1];



            // return res.end(JSON.stringify(entityItem));

            let requestData = '';
            req.on('data', data => {
                requestData += data;
            });
            req.on('end', async () => {
                const entityList = await JSONHandler.getAll(entity);
                const lastID = entityList[entityList.length - 1].id;
                requestData = JSON.parse(requestData);
                requestData.id = lastID + 1;
                await JSONHandler.create(entity, requestData);

                res.end(JSON.stringify(requestData));
                resolve('');
            });
        })
    }
}