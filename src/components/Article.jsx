function Article(props)  {
  return (
    <article>
      <time dateTime={props.date}>{props.date}</time> 
      <h2>{props.title}</h2>
      <img src={props.imageSrc} alt={props.imageAlt} />
      <p className="blog-text">
        {props.content}
        </p>
       <a href="#" className="continues">Continues...</a>
    </article>
  );
}

export default Article;