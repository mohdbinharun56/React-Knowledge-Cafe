
const Blog = ({ blog }) => {
    // console.log(blog);
    const { title, cover, author, author_img, reading_time, date, hashtags } = blog;
    return (
        <>
            <div className="mx-5 px-5">
                <img src={cover} alt="Cover Photo" />
                <div className="md:flex gap-2 justify-between mt-5">
                    <div className="md:flex gap-5">
                        <img src={author_img} alt="profile" className="w-14 h-14 rounded-full" />
                        <div>
                            <p>{author}</p>
                            <date>{date}</date>
                        </div>
                    </div>
                    <span>{reading_time}</span>
                </div>
                <h3>{title}</h3>
                <small>{hashtags}</small>
            </div>
        </>
    );
};

export default Blog;