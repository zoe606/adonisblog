'use strict'

class PostController {
  async index({ view }) 
  {
    const posts = [
      {title:'Post One', body:'THis is post one'},
      {title:'Post Two', body:'THis is post two'},
      {title:'Post Three', body:'THis is post Three'}
    ]

    return view.render('posts.index', {
      title: 'Latest Post',
      posts: posts
    })
  }
}

module.exports = PostController
