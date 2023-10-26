function TypeCard({ type, isHome }: { type: string; isHome: boolean }) {
  return (
    <div className={`type ${type} ${!isHome ? "profile-type" : ""}`}>
      {type}
    </div>
  );
}

export default TypeCard;
