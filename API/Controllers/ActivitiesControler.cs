using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using DomainActivity = Domain.Activity;
using Persistence;

namespace API.Controllers
{
    public class Activities : BaseApiControler
    {
        private readonly DataContext _context;
        public Activities(DataContext context)
        {
            _context = context;
        }

        [HttpGet] // api/activities
        public async Task<ActionResult<List<DomainActivity>>> GetActivities()
        {
            return await _context.Activities.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<DomainActivity>> GetActivity(Guid id)
        {
            return await _context.Activities.FindAsync(id);
        }
    }
}