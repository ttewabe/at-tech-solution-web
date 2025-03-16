using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Collections.Generic;
using backend.Models;
using backend.Data;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactSubmissionsController : ControllerBase
    {
        private readonly ApplicationDBContext _context;

        public ContactSubmissionsController(ApplicationDBContext context)
        {
            _context = context;
        }

        // GET: api/ContactSubmissions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ContactSubmission>>> GetContactSubmissions()
        {
            return await _context.ContactSubmissions.ToListAsync();
        }

        // GET: api/ContactSubmissions/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ContactSubmission>> GetContactSubmission(int id)
        {
            var contactSubmission = await _context.ContactSubmissions.FindAsync(id);

            if (contactSubmission == null)
            {
                return NotFound();
            }

            return contactSubmission;
        }

        // POST: api/ContactSubmissions
        [HttpPost]
        public async Task<ActionResult<ContactSubmission>> PostContactSubmission(ContactSubmission contactSubmission)
        {
            _context.ContactSubmissions.Add(contactSubmission);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetContactSubmission), new { id = contactSubmission.Id }, contactSubmission);
        }

        // PUT: api/ContactSubmissions/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutContactSubmission(int id, ContactSubmission contactSubmission)
        {
            if (id != contactSubmission.Id)
            {
                return BadRequest();
            }

            _context.Entry(contactSubmission).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContactSubmissionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/ContactSubmissions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContactSubmission(int id)
        {
            var contactSubmission = await _context.ContactSubmissions.FindAsync(id);
            if (contactSubmission == null)
            {
                return NotFound();
            }

            _context.ContactSubmissions.Remove(contactSubmission);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ContactSubmissionExists(int id)
        {
            return _context.ContactSubmissions.Any(e => e.Id == id);
        }
    }
}
