

export const getAllUsers = async (req, res) => {
    res.status(200).json({ message: 'Get all users' });
}

export const getOneUser = async (req, res) => {
    const { id } = req.params;
    res.status(200).json({ message: `Get user with id: ${id}` });
}

export const createUser =  async (req, res) => {
    const { name, email } = req.body;
    res.status(201).json({ message: 'User created', data: { name, email } });
}

export const updateUser =  async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    res.status(200).json({ message: `User with id: ${id} updated`, data: { name, email } });
}

export const deleteUser =  async (req, res) => {
    const { id } = req.params;
    res.status(200).json({ message: `User with id: ${id} deleted` });
}
