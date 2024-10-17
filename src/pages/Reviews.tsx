import { Card, CardContent } from "@/components/ui/card"

const Reviews = () => {
  return (
    <div>
      <h1 className="text-3xl lg:text-4xl font-semibold text-center">User Reviews</h1>
     <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
     <Card className="bg-primarygrey p-1 md:p-4">
        <CardContent>
          <h3 className="text-lg">Username</h3>
          <p>Comment</p>
          <p>rating</p>
        </CardContent>
      </Card>
     <Card className="bg-primarygrey p-1 md:p-4">
        <CardContent>
          <h3 className="text-lg">Username</h3>
          <p>Comment</p>
          <p>rating</p>
        </CardContent>
      </Card>
     <Card className="bg-primarygrey p-1 md:p-4">
        <CardContent>
          <h3 className="text-lg">Username</h3>
          <p>Comment</p>
          <p>rating</p>
        </CardContent>
      </Card>
     <Card className="bg-primarygrey p-1 md:p-4">
        <CardContent>
          <h3 className="text-lg">Username</h3>
          <p>Comment</p>
          <p>rating</p>
        </CardContent>
      </Card>
     <Card className="bg-primarygrey p-1 md:p-4">
        <CardContent>
          <h3 className="text-lg">Username</h3>
          <p>Comment</p>
          <p>rating</p>
        </CardContent>
      </Card>
     <Card className="bg-primarygrey p-1 md:p-4">
        <CardContent>
          <h3 className="text-lg">Username</h3>
          <p>Comment</p>
          <p>rating</p>
        </CardContent>
      </Card>
     <Card className="bg-primarygrey p-1 md:p-4">
        <CardContent>
          <h3 className="text-lg">Username</h3>
          <p>Comment</p>
          <p>rating</p>
        </CardContent>
      </Card>
   
     </div>
      
    </div>
  )
}

export default Reviews