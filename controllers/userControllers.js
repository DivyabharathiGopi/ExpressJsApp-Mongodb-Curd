const User = require('../model/user');

// POST

const newUser = async (req,res)=>{
    try{
        if(!req.body || Object.keys(req.body).length === 0){
            return res.status(300).json({code:300, message:'Invalid data'})
        }

        const {name,age,password,email} = req.body;
        if(!name || name.length < 5 || name.length > 10){
            return res.status(301).json({code:301, message:'Invalid name'});
        }
        if(!password || password.length < 5 || password.length > 10){
            return res.status(302).json({code:302, message:'Invalid password'});
        }
        if(!age || age < 18){
            return res.status(303).json({code:303, message:'Invalid age'});
        }

        const user = new User(req.body);
        await user.save();
        res.status(201).json({code:201, user});
    } catch(error){
        res.status(400).json({code:400, message:'Failed to create user', error});
    };
}

// GET
// All users
const allUsers = async (req,res)=>{
    try{
        const users = await User.find();
        res.status(200).json(users);
    } catch(error){
        res.status(400).json({code:400, message:'Failed to get all users', error});
    };
}

// by users age
const byUserAge = async (req,res)=>{
    try{
        const age = req.params.age;
        const users = await User.find({age:(age)});
        res.status(200).json(users);
    } catch(error){
        res.status(400).json({code:400, message:'Failed to get users by their age', error});
    };
}

// get users by above age
const getUsersAboveAge = async (req,res)=>{
    try{
        const age = req.params.age;
        const users = await User.find({age:{$gt:(age)}});
        res.status(200).json(users);
    } catch(error){
        res.status(400).json({code:400, message:'Failed to get users above the given age', error});
    };
}

// get by partially match with user name
const getUsersByName = async (req,res)=>{
    try{
        const name = req.params.name;
        const users = await User.find({ name: { $regex: name, $options: 'i' } });
        res.status(200).json(users);
    } catch(error){
        res.status(400).json({code:400, message:'Failed to get users by partially match with the name', error});
    };
}

// get users by order by name
const getUsersOrderByName = async (req,res)=>{
    try{
        const name = req.params.name;
        const users = await User.find().sort({name:1});
        res.status(200).json(users);
    } catch(error){
        res.status(400).json({code:400, message:'Failed to get users order by name', error});
    };
}

//PUT
const updateUser = async (req,res)=>{
    const { id } = req.params;
  const { name, email, age, password } = req.body;

  // Validation
  if (!name || !email || !age || !password) {
    return res.status(400).json({ code: 300, message: 'Invalid data' });
  }

  if (name.length < 5 || name.length > 10) {
    return res.status(400).json({ code: 301, message: 'Invalid name' });
  }

  if (password.length < 5 || password.length > 10) {
    return res.status(400).json({ code: 302, message: 'Invalid password' });
  }

  if (age < 18) {
    return res.status(400).json({ code: 303, message: 'Invalid age' });
  }

  try {
    const user = await User.findByIdAndUpdate(id, { name, email, age, password }, { new: true });

    if (!user) {
      return res.status(404).json({ code: 404, message: 'User not found' });
    }

    res.status(201).json({ code: 201, message: 'User updated', user });
  } catch (error) {
    res.status(400).json({code:400, message:'Failed to update', error});
  }

}

// DELETE
//by id
const deleteUserById = async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.json({ message: 'User deleted', user });
      }
    } catch (err) {
        res.status(400).json({code:400, message:'Failed to delete', err});
    }
  }

// by email
const deleteUsersByEmail = async (req, res) => {
    try {
      const users = await User.deleteMany({ email: req.params.email });
      res.json({ message: 'Users deleted', users });
    } catch (err) {
        res.status(400).json({code:400, message:'Failed to delete', err});
    }
  };

module.exports = {
    newUser,
    allUsers,
    byUserAge,
    getUsersAboveAge,
    getUsersByName,
    getUsersOrderByName,
    updateUser,
    deleteUserById,
    deleteUsersByEmail
};
