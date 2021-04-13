const mongoose = global.mongoose;

const Users = mongoose.model('user', {
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  createdTime: { type: String },
  country: { type: String, required: true },
  roles: { type: String, required: true },
  profileImgURL: { type: String },
  myPosts: { type: Array },
  lastTimeOnline: { type: String },
  profileViews: { type: Number },
  aboutMeText: { type: String },
  banTime: { type: Number }
});


const Posts = mongoose.model('posts', {
  userID: { type: String, required: true },
  title: { type: String },
  description: { type: String },
  postedDate: { type: String },
  postViews: { type: Number },
  subForum: { type: String },
  likes: { type: Array },
  isPinned: { type: Boolean },
  isLocked: { type: Boolean },
});


const Comments = mongoose.model('comments', {
  postID: { type: String, required: true },
  description: { type: String },
  likes: { type: Array },
  commentDate: { type: String }
});


const Banlist = mongoose.model('banlist', {
  userID: { type: String },
  banReason: { type: String }
});


module.exports = {
  users: Users,
  posts: Posts,
  comments: Comments,
  banlist: Banlist
}
