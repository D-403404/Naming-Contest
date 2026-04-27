const ContestCard = ({ contest }: { contest: Contest }) => {
  return (
    <div className="contest-preview">
      <div className="category">{contest.categoryName}</div>
      <div className="contest">{contest.contestName}</div>
    </div>
  );
};

export default ContestCard;
