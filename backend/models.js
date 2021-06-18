const mongoose = global.mongoose;

const Users = mongoose.model('user', {
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  password: { type: String, required: true },
  createdTime: { type: String },
  country: { type: String, required: true },
  roles: { type: String, required: true },
  profileImgURL: { type: String },
  myPosts: { type: Array },
  lastTimeOnline: { type: String },
  profileViews: { type: Number },
  aboutMeText: { type: String },
  banTime: { type: Number },
  premium: { type: Boolean }
});


const Posts = mongoose.model('posts', {
  userID: { type: String, required: true },
  postedByName: { type: String },
  postedByLastName: { type: String },
  userRole: { type: String },
  userProfileAvatar: { type: String },
  title: { type: String },
  description: { type: String },
  postedDate: { type: String },
  postViews: { type: Number },
  subForum: { type: String },
  likes: { type: Array },
  isPinned: { type: Boolean },
  isLocked: { type: Boolean },
  comments: { type: Array }
});


const Comments = mongoose.model('comments', {
  postID: { type: String, required: true },
  userID: { type: String},
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
