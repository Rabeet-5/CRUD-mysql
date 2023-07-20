const db = require('../config/config');
const Users = db.user;


const createUsers = (req, res) => {

    if (!req.body.name || !req.body.email || !req.body.age) {

        res.status(400).json({
            message: "invalid fields "
        })
    }

    const usersObject = {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
    }

    Users.create(usersObject).then(() => {
        res.status(200).json({
            message: "data sended and user created"
        })
    })
        .catch((err) => {
            res.status(404).json({
                err
            })
        })

};


const findAllUsers = (req, res) => {

    Users.findAll().then((users) => {

        res.status(200).json({
            message: " All Users Fetched ",
            users
        })
            .catch((err) => {
                res.status(404).json({
                    err
                })
            })

    })
};

const findUsersbyEmail = (req, res) => {

    const email = req.params.email;

    Users.findByPk(email)

        .then((data) => {
            res.status(200).json({
                message: 'User finded successfully',
                data
            })
        })
        .catch((err) => {
            res.status(404).json({
                err
            })
        })

};

const updateUsers = (req, res) => {

    const newData = {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    }

    Users.update(newData, { where: { email: req.body.email } })
        .then((data) => {
            res.status(200).json({
                message: "Updated successfully",
                data
            });
        })
        .catch((err) => {
            console.error('Error while updating user:', err);
            res.status(404).json({
                err: 'User update failed',
            });
        });
};

const deleteUsers = (req,res) => {

    Users.destroy({where:{email:req.body.email}})
    .then((data)=>{
        res.status(200).json({
            message:"user deleted Successfully",
            data
        })
    })
    .catch((err)=>{
        res.status(404).json({
            err
        })
    })

};

module.exports = {
    createUsers,
    findAllUsers,
    findUsersbyEmail,
    updateUsers,
    deleteUsers
}

