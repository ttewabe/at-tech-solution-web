using Microsoft.EntityFrameworkCore;
using Npgsql.EntityFrameworkCore.PostgreSQL;
using backend.Data;

var builder = WebApplication.CreateBuilder(args);
DotNetEnv.Env.Load();

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var connectionString = Environment.GetEnvironmentVariable("DEFAULT_CONNECTION");

builder.Services.AddDbContext<ApplicationDBContext>(options =>
    options.UseNpgsql(connectionString));

// Add CORS policy
builder.Services.AddCors(options =>
{
    options.AddPolicy("MyPolicy",
        builder =>
        {
            builder.WithOrigins("http://localhost:3000")
                   .AllowAnyMethod()
                   .AllowAnyHeader();
        });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseRouting();

// Use the CORS policy
app.UseCors("MyPolicy");

app.UseAuthorization();

app.MapControllers();

app.Run();
