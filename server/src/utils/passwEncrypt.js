import bcrypt from "bcrypt";


    // encrypt function
    async function encrypt ( password ) {
        const salt = await bcrypt.genSalt(5); // cambia configuración del password 5 veces hay 10 veces para no rastreo y menos veces para que no se tarde
        // hash is password-encypted
        const passwordHash = await bcrypt.hash(password,salt); 
        return passwordHash; 

    }
    // Verifying password
    async function verify ( password, passwordHash) {
        //To compare password vs hashpassword
        const match = await bcrypt.compare( password, passwordHash );
        return match; 
    }


    export { encrypt, verify };