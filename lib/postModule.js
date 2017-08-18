var posts = {
  all: function() {
    return [{
      "id": 1,
      "content": "Test post 1",
      "user_id": 4
    },
    {
      "id": 2,
      "content": "Test post 2",
      "user_id": 3
    },
    {
      "id": 3,
      "content": "Test post 3",
      "user_id": 2
    },
    {
      "id": 4,
      "content": "Test post 4",
      "user_id": 4
    },
    {
      "id": 5,
      "content": "Test post 5",
      "user_id": 1
    },
    {
      "id": 6,
      "content": "Test post 6",
      "user_id": 3
    },
    {
      "id": 7,
      "content": "Test post 7",
      "user_id": 3
    },
    {
      "id": 8,
      "content": "Test post 8",
      "user_id": 4
    },
    {
      "id": 9,
      "content": "Test post 9",
      "user_id": 1
    },
    {
      "id": 10,
      "content": "Test post 10",
      "user_id": 2
    }]
  },
  
  searchPosts: function(id){
    var searchedPosts = posts.all()
    var posts_array = []
    for(i=0;i<searchedPosts.length;i++){
      if(searchedPosts[i].user_id == id){
        posts_array.push(searchedPosts[i])
      }  
    }  
    return posts_array
  },
  
  getPostsbyID: function(id){
    var post_list = posts.all();
    for(i=0; i<post_list.length; i++){
      if(post_list[i].id == id){
      return post_list[i]
      }
    }
  }
};

module.exports = posts;