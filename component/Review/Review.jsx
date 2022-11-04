const Review = () => {
  return (
    <div className="review--container">
      <div className="review--comment--list">
        <h3>REVIEW</h3>
        <div>
          <h4>KIm</h4>
          stars icon
          <p className="date">2022-03-29</p>
          <div className="comment">
            <p>wonderful site</p>
          </div>
        </div>
      </div>

      <div className="review--comment--box">
        <h3>WRITE A CUSTOMER REVIEW</h3>

        <form action="">
          <div>
            <label htmlFor="">Rating</label>
            <select name="" id=""></select>
          </div>
          <div>
            <label htmlFor="">Comment</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <input type="submit" value="SUBMIT" />
        </form>
      </div>
    </div>
  );
};

export default Review;
