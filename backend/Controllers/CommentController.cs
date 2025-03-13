using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Models;
using backend.Data;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentsController : ControllerBase
    {
        private readonly ApplicationDBContext _context;

        public CommentsController(ApplicationDBContext context)
        {
            _context = context;
        }

        // GET: api/Comments
        [HttpGet]
        public ActionResult<IEnumerable<Comment>> GetComments()
        {
            return _context.Comments
                .Include(c => c.BlogPost)
                .Include(c => c.User)
                .Include(c => c.Replies)
                .ToList();
        }

        // GET: api/Comments/5
        [HttpGet("{id}")]
        public ActionResult<Comment> GetComment(int id)
        {
            var comment = _context.Comments
                .Include(c => c.BlogPost)
                .Include(c => c.User)
                .Include(c => c.Replies)
                .SingleOrDefault(c => c.Id == id);

            if (comment == null)
            {
                return NotFound();
            }

            return comment;
        }

        // POST: api/Comments
        [HttpPost]
        public ActionResult<Comment> PostComment(Comment comment)
        {
            _context.Comments.Add(comment);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetComment), new { id = comment.Id }, comment);
        }

        // PUT: api/Comments/5
        [HttpPut("{id}")]
        public IActionResult PutComment(int id, Comment comment)
        {
            if (id != comment.Id)
            {
                return BadRequest();
            }

            _context.Entry(comment).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();

            return NoContent();
        }

        // DELETE: api/Comments/5
        [HttpDelete("{id}")]
        public IActionResult DeleteComment(int id)
        {
            var comment = _context.Comments.Find(id);
            if (comment == null)
            {
                return NotFound();
            }

            _context.Comments.Remove(comment);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
