using Microsoft.EntityFrameworkCore;
using Persistence;
using Application.ActivitiesLogic;
using Application.Core;

namespace API.Extensions
{
    public static class ApplicationServicesExtension
    {
        public static IServiceCollection AddApplicationServices(
            this IServiceCollection services, IConfiguration config)
        {
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();

            services.AddDbContext<DataContext>(options =>
                options.UseSqlite(config.GetConnectionString("DefaultConnection")));

            services.AddCors(opt => {
                opt.AddPolicy("CorsPolicy", policy =>
                {
                    policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000");
                });
            });

            services.AddMediatR(cnf => cnf.RegisterServicesFromAssembly(typeof(List.Handler).Assembly));;
            services.AddAutoMapper(typeof(MappingProfiles).Assembly);

            return services;
        }
    }
}