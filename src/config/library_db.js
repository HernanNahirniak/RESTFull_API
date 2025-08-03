import {createPool} from "mysql2/promise"

export const pool = createPool({
    host:"localhost",
    user:"root",
    password:"admin",
    database:"biblioteca",
    connectionLimit:10,
    port:3306,
    waitForConnections:true

});


