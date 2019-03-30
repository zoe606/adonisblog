'use strict'

// use namespace
const Post = use('App/Models/Post')
const { validate } = use('Validator')

class PostController {
  async index({ view }) 
  {
    // const posts = [
    //   {title:'Post One', body:'THis is post one'},
    //   {title:'Post Two', body:'THis is post two'},
    //   {title:'Post Three', body:'THis is post Three'}
    // ]

    const posts = await Post.all()

    return view.render('posts.index', {
      title: 'Latest Post',
      posts: posts.toJSON()
    })
  }
  async details({ params, view}) 
  {
    const post = await Post.find(params.id)

    return view.render('posts.details', {
      post: post
    })
  }

  async add({ view })
  {
    return view.render('posts.add')
  }

  async store({ request, response, session})
  {
    // validation input
    const validation = await validate(request.all(), {
      title: 'required|min:3|max:125',
      body: 'required|min:3'
    })

    if(validation.fails()){
      session.withErrors(validation.messages()).flashAll()
      return response.redirect('back')
    }

    const post = new Post()

    post.title = request.input('title')
    post.body = request.input('body')

    await post.save()

    session.flash({ notification: 'Post Added!'})

    return response.redirect('/posts')
  }
}

module.exports = PostController
