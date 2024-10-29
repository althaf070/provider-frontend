import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


const UserDetails = () => {
  return (
    <div className="w-full">
      <div className="flex">
      <Avatar className="w-[100px] h-[100px]">
        <AvatarImage src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="/>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="ml-4">
      <h1 className="text-xl font-semibold">Title</h1>
      <h1 className="text-lg font-semibold">plumber</h1>
      <p className="text-sm font-semibold">Total earnings</p>
      <p className="text-sm font-semibold">Average Ratings</p>
      </div>
      </div>
    </div>
  )
};

export default UserDetails;
