const express = require("express");
const app = express();
const cors = require("cors");
const pool = require('./Database/Db_Connection');

//middleware
app.use(cors());
app.use(express.json());

//routes

//create counsellor
app.post("/Counsellor", async(req, res) => {
    try {
        const { COUNSELLOR_NAME,COUNSELLOR_AGE } = req.body;
        console.log(req.body);
        const newCounsellor  = await pool.query(
            'INSERT INTO "COUNSELLOR" ("COUNSELLOR_NAME","COUNSELLOR_AGE") VALUES($1,$2) RETURNING *', 
            [COUNSELLOR_NAME,COUNSELLOR_AGE]);
        res.json(newCounsellor.rows[0]);

    } catch (error) {
        console.error(error.message);
    }
})

//get All counsellor
app.get("/Counsellor/Selectlist", async(req,res) => {
    try {
        const allCountries = await pool.query('SELECT * FROM "CT_COUNTRY"');
        const allInstitutes = await pool.query('SELECT * FROM "CT_INSTITUTE"');
        const allQualifications = await pool.query('SELECT * FROM "CT_QUALIFICATION"');
        res.json({COUNTRIES:allCountries.rows,INSTITUTES:allInstitutes.rows,QUALIFICATIONS:allQualifications.rows})

    } catch (error) {
        console.log(error.message);
    }
})


//get counsellor
// app.get("/Counsellor/:id", async(req,res) => {
//     try {
//         const { id } = req.params;
//         const Counsellor = await pool.query('SELECT * FROM "COUNSELLOR" where "COUNSELLOR_ID" = $1', [id]);
//         res.json(Counsellor.rows[0])

//     } catch (error) {
//         console.log(error.message);
//     }
// })

//update counsellor
app.put("/Counsellor/:id", async(req,res) => {
    try {
        const { id } = req.params;
        const { COUNSELLOR_NAME, COUNSELLOR_AGE } = req.body;
        const UpdateCounsellor = await pool.query(
            'UPDATE "COUNSELLOR" SET "COUNSELLOR_NAME" = $1, "COUNSELLOR_AGE" = $2 WHERE "COUNSELLOR_ID" = $3 RETURNING *', [COUNSELLOR_NAME,COUNSELLOR_AGE,id]);
        res.json(UpdateCounsellor.rows[0])

    } catch (error) {
        console.log(error.message);
    }
})


//DELETE
app.delete("/Counsellor/:id", async(req,res) => {
    try {
        const { id } = req.params;
        const DeleteCounsellor = await pool.query(
            'DELETE FROM "COUNSELLOR" WHERE "COUNSELLOR_ID" = $1 RETURNING *', [id]);
        res.json("COUNSELLOR DELETED")

    } catch (error) {
        console.log(error.message);
    }
})

//DELETE ALL
app.delete("/Counsellor", async(req,res) => {
    try {
        const { id } = req.params;
        const DeleteCounsellor = await pool.query('DELETE FROM "COUNSELLOR"');
        res.json("COUNSELLOR DELETED")

    } catch (error) {
        console.log(error.message);
    }
})


app.listen(5000, () => {
    console.log("server started...")
})