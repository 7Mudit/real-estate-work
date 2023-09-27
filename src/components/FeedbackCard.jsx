import { quotes } from "../assets";
import RatingStars from "./RatingStars";

const FeedbackCard = ({ desc, name, rating, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5  feedback-card">
    <img
      src={quotes}
      alt="double_quotes"
      className="w-[42.6px] h-[27.6px] object-contain"
    />
    <div className="flex flex-col gap-2 mt-10">

      <h4 className="font-poppins font-extrabold text-[20px] leading-[32px] text-white">
        {name}
      </h4>
      <RatingStars Review_Count={rating} />
    </div>

    <div className="flex flex-row">
      <div className="flex flex-col ">
        <p className="font-poppins  font-normal text-[18px] leading-[32.4px] text-white my-10">
          {desc.length > 100 ? `${desc.substring(0, 100)}...` : desc}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
