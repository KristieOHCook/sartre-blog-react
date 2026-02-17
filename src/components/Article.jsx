function Article() {
  return (
    <article style={{ marginBottom: '4rem', borderBottom: '1px solid lightgray', paddingBottom: '2rem' }}>
      <time dateTime="2026-02-17" style={{ color: 'lightgray' }}>02/17/26</time>
      <h2 style={{ fontSize: '2rem' }}>On the Street in Brooklyn</h2>
      <img 
        src="https://img.freepik.com/premium-photo/vibrant-colorful-advertisement-featuring-variety-ladies-handbags-white-background_1000150-1635.jpg?w=2000" 
        alt="Vibrant colorful ladies handbags advertisement" 
        style={{ width: '100%' }}
      />
      <p className="blog-text">
        Selfies post-ironic messenger bag authentic, lo-fi sriracha bitters chillwave 
        bicycle rights jianbing tofu scenester mustache. Listicle trust fund live-edge 
        enamel pin, pork belly fanny pack irony gochujang meggings fanny pack.
      </p>
      <a href="#" style={{ color: 'tomato', fontWeight: 'bold', textDecoration: 'none' }}>Continue...</a>
    </article>
  );
}

export default Article;