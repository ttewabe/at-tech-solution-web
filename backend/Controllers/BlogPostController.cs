using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Models;
using backend.Data;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogPostsController : ControllerBase
    {
        private readonly ApplicationDBContext _context;

        public BlogPostsController(ApplicationDBContext context)
        {
            _context = context;
        }

        // GET: api/BlogPosts
        [HttpGet]
        public ActionResult<IEnumerable<BlogPost>> GetBlogPosts()
        {
            return _context.BlogPosts
                .Include(bp => bp.Author)
                .Include(bp => bp.Comments)
                .Include(bp => bp.Votes)
                .ToList();
        }

        // GET: api/BlogPosts/5
        [HttpGet("{id}")]
        public ActionResult<BlogPost> GetBlogPost(int id)
        {
            var blogPost = _context.BlogPosts
                .Include(bp => bp.Author)
                .Include(bp => bp.Comments)
                .Include(bp => bp.Votes)
                .SingleOrDefault(bp => bp.Id == id);

            if (blogPost == null)
            {
                return NotFound();
            }

            return blogPost;
        }

        // POST: api/BlogPosts
        [HttpPost]
        public ActionResult<BlogPost> PostBlogPost(BlogPost blogPost)
        {
            _context.BlogPosts.Add(blogPost);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetBlogPost), new { id = blogPost.Id }, blogPost);
        }

        // PUT: api/BlogPosts/5
        [HttpPut("{id}")]
        public IActionResult PutBlogPost(int id, BlogPost blogPost)
        {
            if (id != blogPost.Id)
            {
                return BadRequest();
            }

            _context.Entry(blogPost).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();

            return NoContent();
        }

        // DELETE: api/BlogPosts/5
        [HttpDelete("{id}")]
        public IActionResult DeleteBlogPost(int id)
        {
            var blogPost = _context.BlogPosts.Find(id);
            if (blogPost == null)
            {
                return NotFound();
            }

            _context.BlogPosts.Remove(blogPost);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
