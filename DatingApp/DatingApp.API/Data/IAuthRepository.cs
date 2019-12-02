using DatingApp.API.Models;
using System.Threading.Tasks;

namespace DatingApp.API.Data
{
    public interface IAuthRepository
    {
         Task<User> Register(User user, string password);
         
         Task<User> LoginAsync(string username, string password);
         
         Task<bool> UserExistsAsync(string username);
    }
}