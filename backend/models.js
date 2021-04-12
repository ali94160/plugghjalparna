const mongoose = global.mongoose;

const Users = mongoose.model('user', {
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
});





module.exports = {
  users: Users,
}
