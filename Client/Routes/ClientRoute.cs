using Client.Data;
using Client.Models;
using Microsoft.EntityFrameworkCore;

namespace Client.Routes;

public static class ClientRoute {
    public static void ClientRoutes(this WebApplication app) {
        var route = app.MapGroup("client");

        route.MapPost("", async (ClientRequest req, ClientContext context ) => {
            var client = new ClientModel(req.name, req.cpf, req.email);
            await context.AddAsync(client);
            await context.SaveChangesAsync();
        });

        route.MapGet("", async (ClientContext context) => {
            var people = await context.People.ToListAsync();
            return Results.Ok(people);
        });

        route.MapPut("{id:guid}", async (Guid id, ClientRequest req, ClientContext context) => {
            var client = await context.People.FirstOrDefaultAsync(x => x.Id == id);

            if (client == null){
                return Results.NotFound();
            }

            client.ChangeName(req.name);
            await context.SaveChangesAsync();

            return Results.Ok(client);
        });

        route.MapDelete("{id:guid}", async (Guid id, ClientContext context) => {
            var client = await context.People.FirstOrDefaultAsync(x => x.Id == id);

            if (client == null){
                return Results.NotFound();
            }

            client.SetInactive();
            await context.SaveChangesAsync();

            return Results.Ok(client);
        });
    }
}