const MiniBlog = () => {
    const post = {
        title: 'Мій перший блог-пост',
        description: 'Опис....',
        tags: ['React', 'JSX', 'Frontend']
    };

    return (
        <div className="card">
            <h1>{post.title}</h1>
            <p>{post.description}</p>

            <img src="/assets/blog.png" alt={post.title} />

            <ul>
                {post.tags.map((element, index) => (
                    <li>{element}</li>
                ))}
            </ul>

            <a href="https://react.dev">Документація React</a>
        </div>
    )
}

export default MiniBlog;