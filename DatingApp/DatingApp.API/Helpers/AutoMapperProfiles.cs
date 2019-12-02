using System.Linq;
using AutoMapper;
using DatingApp.API.Dtos;
using DatingApp.API.Models;

namespace DatingApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserListDto>()
            .ForMember(dest => dest.PhotoUrl, opt =>
            {
                opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
            })
            .ForMember(dest => dest.Age, opt => 
            {
                opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
            });


            CreateMap<User, UserDetailedDto>()
            .ForMember(dest => dest.PhotoUrl, opt =>
            {
                opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
            })
            .ForMember(dest => dest.Age, opt => 
            {
                opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
            });

            // --->
            CreateMap<Photo, PhotosDetailedDto>();
            CreateMap<UserUpdateDto, User>();
            CreateMap<Photo, PhotoReturnDto>();
            CreateMap<PhotoCreationDto, Photo>();
            CreateMap<UserRegisterDto, User>(); 
        }
    }
}