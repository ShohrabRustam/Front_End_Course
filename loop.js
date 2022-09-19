let blogPosts = [
    {
        title: 'First',
        author: 'Jane',
        likes: 4,
      },
      {
        title: 'Second',
        author: 'Joe',
        likes: 1,
      },
      {
        title: 'Third',
        author: 'Jane',
        likes: 7,
      },
      {
        title: 'Fourth',
        author: 'Jack',
        likes: 1,
      },
      {
        title: 'Fifth',
        author: 'Joe',
        likes: 5,
      }    
]

for(let i=0;i<blogPosts.length;i++){
console.log(blogPosts[i].title,blogPosts[i].author,blogPosts[i].likes)
}