'use strict';

const e = React.createElement;

// Blogs
class BlogLink extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return e(
      'li',
      {},
      e(
        'a',
        { href: this.props.url },
        this.props.title
      )
    );
  }
}

class BlogLinks extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { blogs: [
      {
        title: 'RxJS Basics',
        link: 'https://jeweled-anaconda-3d2.notion.site/Notes-for-RxJS-8a2cefb64da64aa0b217f54692acc2a0'
      }      
    ] };
  }

  render() {
    return e(
      'ul',
      {},
      this.state.blogs.map((blog) => {
        return e(
          BlogLink,
          { url: blog.link, title: blog.title }
        )
      })
    );
  }
}

ReactDOM.render(e(BlogLinks), document.querySelector('#root'));