import React from 'react';
import './Blog.css';
import { FaCalendarAlt, FaComments, FaUser, FaTags } from 'react-icons/fa';
import B1 from '../../assets/images/blog1.png';
import B2 from '../../assets/images/blog2.png';
import B3 from '../../assets/images/blog3.png';
import { useNavigate } from 'react-router-dom';

const blogs = [
  {
    image: B1,
    title: 'How To Make Affordable Cosmetics Choices',
    date: 'Jun 29, 2025',
    comments: 2,
    author: 'John Doe',
    category: 'Face Care',
  },
  {
    image: B2,
    title: 'Makeup, Cosmetics, And Skin Care Blog Title Ins...',
    date: 'Jun 29, 2025',
    comments: 2,
    author: 'Mathew Prat',
    category: 'Body Care',
  },
  {
    image: B3,
    title: 'Makeup Advice For Women Over 50 That Works',
    date: 'Jun 29, 2025',
    comments: 2,
    author: 'John Mathew',
    category: 'Face Care',
  },
];



const Blog = () => {

    const navigate = useNavigate();
  return (
    <section className="blog-section">
      <div className="blog-header">
        <h3>Latest Beauty Blog</h3>
        <p>Get Instant Beauty News</p>
      </div>

      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <div className="blog-date">
              <FaCalendarAlt />
              <span>{blog.date}</span>
              <div className="blog-comments">
                <FaComments />
                <span>{blog.comments}</span>
              </div>
            </div>

            <div className="blog-image">
              <img src={blog.image} alt={blog.title} />
            </div>

            <h4 className="blog-title">{blog.title}</h4>

            <div className="blog-meta">
              <span><FaUser /> {blog.author}</span>
              <span><FaTags /> {blog.category}</span>
            </div>

            <button className="read-more">Read More</button>
          </div>
        ))}
      </div>

      <div className="blog-viewall">
        <button onClick={() => navigate("/blog")} className="view-all">View All</button>
      </div>
    </section>
  );
};

export default Blog;
