import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IMG_SERVER_URL } from "@/lib/serverurl";
import { useAuthStore } from "@/store/authStore";


const UserDetails = () => {
 const {provider} =  useAuthStore()
  return (
    <div className="w-full h-full">
      <div className="flex">
      <Avatar className="w-[100px] h-[100px]">
        <AvatarImage src={provider?.profilePic ? `${IMG_SERVER_URL}/${provider?.profilePic}`:"https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="}/>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="ml-4">
      <h1 className="text-xl font-semibold capitalize">{provider?.username}</h1>
      <h1 className="text-sm font-semibold">{provider?.email}</h1>
      <h1 className="text-sm font-semibold">{provider?.address}</h1>
      <h1 className="text-sm font-semibold">{provider?.district}</h1>
      <h1 className="text-sm font-semibold">{provider?.phoneNumber}</h1>
      <p className="text-sm font-semibold">Total earnings:{provider?.totalEarning}</p>
      <p className="text-sm font-semibold">Average Ratings:{provider?.averageRating}</p>
      </div>
      </div>
    </div>
  )
};

export default UserDetails;
