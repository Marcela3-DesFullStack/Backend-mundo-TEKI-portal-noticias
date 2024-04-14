import bycriptjs from 'bcryptjs';

// encrypt function
async function encrypt (password) {
    const salt = await bycriptjs.genSalt(5); // cambia configuración del password 5 veces hay 10 veces para no rastreo y menos veces para que no se tarde
    // hash is password-encypted
    const hashPassword = await bycriptjs.hash(password,salt); 
    return hashPassword; 

}

export default encrypt;