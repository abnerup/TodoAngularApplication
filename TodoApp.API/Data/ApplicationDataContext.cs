using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TodoApp.API.Models;

namespace TodoApp.API.Data
{
    public class ApplicationDataContext : DbContext
    {
        public ApplicationDataContext (DbContextOptions<ApplicationDataContext> options)
            : base(options)
        {
        }

        public DbSet<TodoApp.API.Models.Todo> Todo { get; set; } = default!;
    }
}
