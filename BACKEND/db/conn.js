//configuração do banco de dados

const mongoose = require("mongoose")

async function main() {
    try {

         mongoose.set("strictQuery", true);
        await mongoose.connect(
            "mongodb+srv://Klaudio0707:rOpO7XhF674oo7rY@cluster0.ineqv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        );
        console.log("Conectado ao Banco");
    } catch (error) {
        console.log(`Erro: ${error}`);

    }
}


module.exports = main;
