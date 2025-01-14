using Microsoft.EntityFrameworkCore;

using Client.Models;

namespace Client.Data;

public class ClientContext: DbContext {
    public DbSet<ClientModel> People { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Data Source=client.sqlite");
        base.OnConfiguring(optionsBuilder);
    }
}