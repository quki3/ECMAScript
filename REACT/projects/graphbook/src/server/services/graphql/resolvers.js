const resolvers = {
  RootQuery:{
    posts(root,arg,context){
      return posts;
    },
  },
};
module.exports = resolvers;
