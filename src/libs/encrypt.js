import bcrypt from 'bcryptjs';

const encrypt = {};

encrypt.cryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
};

encrypt.cryptCompare = async (password, comparePassword) => {
    return await bcrypt.compare(password, comparePassword);
}

export default encrypt;