const userController = (req, res) => {
    res.json({ message: 'User Controller is working!' });
}
const homeController = (req, res) => {
    res.json({ message: 'Home Controller is working!' });
}
export {userController, homeController};