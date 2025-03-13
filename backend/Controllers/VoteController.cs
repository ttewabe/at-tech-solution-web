using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Models;
using backend.Data;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VotesController : ControllerBase
    {
        private readonly ApplicationDBContext _context;

        public VotesController(ApplicationDBContext context)
        {
            _context = context;
        }

        // GET: api/Votes
        [HttpGet]
        public ActionResult<IEnumerable<Vote>> GetVotes()
        {
            return _context.Votes
                .Include(v => v.User)
                .Include(v => v.BlogPost)
                .Include(v => v.Comment)
                .ToList();
        }

        // GET: api/Votes/5
        [HttpGet("{id}")]
        public ActionResult<Vote> GetVote(int id)
        {
            var vote = _context.Votes
                .Include(v => v.User)
                .Include(v => v.BlogPost)
                .Include(v => v.Comment)
                .SingleOrDefault(v => v.Id == id);

            if (vote == null)
            {
                return NotFound();
            }

            return vote;
        }

        // POST: api/Votes
        [HttpPost]
        public ActionResult<Vote> PostVote(Vote vote)
        {
            _context.Votes.Add(vote);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetVote), new { id = vote.Id }, vote);
        }

        // PUT: api/Votes/5
        [HttpPut("{id}")]
        public IActionResult PutVote(int id, Vote vote)
        {
            if (id != vote.Id)
            {
                return BadRequest();
            }

            _context.Entry(vote).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();

            return NoContent();
        }

        // DELETE: api/Votes/5
        [HttpDelete("{id}")]
        public IActionResult DeleteVote(int id)
        {
            var vote = _context.Votes.Find(id);
            if (vote == null)
            {
                return NotFound();
            }

            _context.Votes.Remove(vote);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
