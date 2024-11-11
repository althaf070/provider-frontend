import { Card } from "@/components/ui/card";
import { SERVER_URL } from "@/lib/serverurl";
import axios from "axios";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
interface ReviewProps {
  _id: string;
  rating: number;
  feedback: string;
  userId:{
    username: string
  }
}

const Reviews = () => {
  const [reviews, setReviews] = useState<ReviewProps[]>([]);
  const [error, setError] = useState<string | null>(null);

  const getReviews = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/review/getproviderreview`);
      setReviews(response.data.reviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setError("Failed to load reviews. Please try again later.");
    }
  };
function starsLoop(num:number){
  const star=[]
  for(let i=1;i<=num;i++){
    star.push(<Star key={i} style={{ fill: "#FAB12F" }} />)
  }
  return star
}
  useEffect(() => {
    getReviews();
  }, []);

  return (
    <div>
      <h1 className="text-3xl lg:text-4xl font-semibold text-center">User Reviews</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {reviews?.length > 0 ? (
            reviews.map((review) => (
              <Card className="bg-primarygrey md:p-4" key={review?._id}>
                <h2>Rated By {review.userId.username}</h2>
                <p>{review?.feedback}</p>
                <div className="flex space-x-1">
                 Rating {review?.rating} /5
                 <br />
                 {starsLoop(review?.rating)}
                </div>
              </Card>
            ))
          ) : (
            <p className="text-center mt-2 text-xl font-semibold col-span-full">No reviews available hasn't added for you</p>
          )}
          {error && <p className="text-fieryOrange">{error}</p>}
        </div>
    </div>
  );
};

export default Reviews;
