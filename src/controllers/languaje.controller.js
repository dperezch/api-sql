import { getConnection } from "../database/database"

const getLanguajes = async (req, res) => {

    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM languaje");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const addLanguaje = async (req, res) => {

    try {
        const { name, programmers } = req.body;  //LO QUE LLEGA DESDE EL CLIENTE

        if (name === undefined || programmers === undefined) {
            res.status(400).json({ message: "Bad Request.  Please fill all fields." })
        }
        //console.log(name);
        //console.log(programmers);

        const languaje = { name, programmers }

        const connection = await getConnection();
        await connection.query("INSERT INTO languaje SET ?", languaje)
        //await connection.query("INSERT INTO languaje (name, programmers) values('" + name + "','" + programmers + "')")

        res.json({ message: "Languaje added" })
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const getLanguaje = async (req, res) => {

    try {
        console.log("este es el request: ", req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM languaje WHERE id = ?", id);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const deleteLanguaje = async (req, res) => {

    try {
        console.log("este es el request: ", req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM languaje WHERE id = ?", id);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const updateLanguaje = async (req, res) => {

    try {
        console.log("este es el request: ", req.params);
        const { id } = req.params;
        const { name, programmers } = req.body;  //LO QUE LLEGA DESDE EL CLIENTE

        if (id === undefined || name === undefined || programmers === undefined) {
            res.status(400).json({ message: "Bad Request.  Please fill all fields." })
        }

        const languaje = { id, name, programmers }
        const connection = await getConnection();
        const result = await connection.query("UPDATE languaje SET ? WHERE id = ?", [languaje, id]);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

export const methods = {
    getLanguajes,
    getLanguaje,
    addLanguaje,
    deleteLanguaje,
    updateLanguaje
};