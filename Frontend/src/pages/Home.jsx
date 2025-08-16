const posts = [
  {
    id: 1,
    user: { name: 'alex', avatar: 'https://i.pravatar.cc/100?img=12' },
    image: 'https://picsum.photos/id/1011/1200/900',
    likes: 128,
    caption: 'Exploring golden hour trails and capturing the calm between the chaos. The light just hits different today.',
    comments: [
      { user: 'mira', text: 'The colors are unreal. Love this shot!' },
      { user: 'devon', text: 'Okay now I need to go outside 😅' },
      { user: 'sam', text: 'Where is this? Looks peaceful.' },
    ],
  },
  {
    id: 2,
    user: { name: 'jordan', avatar: 'https://i.pravatar.cc/100?img=32' },
    image: 'https://images.unsplash.com/photo-1729701163957-85ba5dc5b971?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
    likes: 342,
    caption: 'Weekend ritual: coffee, vinyl, and a good book. Reset mode engaged.',
    comments: [
      { user: 'alex', text: 'This is the vibe 🔥' },
      { user: 'riley', text: 'What record is that? Cover looks dope.' },
    ],
  },
  {
    id: 3,
    user: { name: 'sana', avatar: 'https://i.pravatar.cc/100?img=5' },
    image: 'https://images.unsplash.com/photo-1754951433192-cf5d42c3d3c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D',
    likes: 89,
    caption: 'Tiny moments, big memories. Filed under “joy I didn’t plan for.”',
    comments: [
      { user: 'jordan', text: 'This made my day 🫶' },
      { user: 'lee', text: 'The composition is perfect.' },
    ],
  },
]

export default function Home() {
  return (
    <div className="container">
      <div className="feed" aria-label="Home feed">
        {posts.map(post => (
          <article key={post.id} className="post card">
            <header className="post-header">
              <img className="avatar" src={post.user.avatar} alt={`${post.user.name} avatar`} />
              <div className="user">
                <strong className="username">{post.user.name}</strong>
              </div>
            </header>

            <div className="post-media">
              <img className="post-image" src={post.image} alt="Post media" />
            </div>

            <div className="post-actions" aria-label="Post actions">
              <button className="icon-btn" aria-label="Like">❤️</button>
              <button className="icon-btn" aria-label="Comment">💬</button>
              <button className="icon-btn" aria-label="Share">📤</button>
            </div>

            <div className="post-body">
              <div className="likes">{post.likes.toLocaleString()} likes</div>
              <div className="caption">
                <strong className="username">{post.user.name}</strong>
                <span> {post.caption}</span>
              </div>
              <div className="post-comments">
                {post.comments.slice(0, 2).map((c, idx) => (
                  <div key={idx} className="comment">
                    <strong className="username">{c.user}</strong>
                    <span> {c.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
