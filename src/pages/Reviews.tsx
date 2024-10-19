import { Card } from "@/components/ui/card"

const Reviews = () => {
  return (
    <div>
      <h1 className="text-3xl lg:text-4xl font-semibold text-center">User Reviews</h1>
     <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
     <Card className="bg-primarygrey md:p-4">       
          <p>Comment</p>
          <p>rating</p>
      </Card>
     </div>
    </div>
  )
}

export default Reviews