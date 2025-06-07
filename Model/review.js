import mongoose from "mongoose";

const customerReview = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  name: {
    type: String,
    required: true,
  },

  rating: {
    type: String,
    required: true,
  },

  comment: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    required: true,
    default: Date.now(),
  },

  isApproved: {
    type: Boolean,
    required: true,
    default: false,
  },
  profilePicture: {
    type: String,
    required: true,
    default:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQArwMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABwEDBAUGAv/EADgQAAIBAgMEBwYFBAMAAAAAAAABAgMEBRExBhIhQQciUWFxgZETIzJiocEzQlJysUOC0vAlNNH/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAGhEBAQEBAQEBAAAAAAAAAAAAAAERAhIxIf/aAAwDAQACEQMRAD8AnEAAAAAAAAAAACmfMCoPPtI/qj6jfjykvUD0ChUAAAAAAAAAAAAAAAAAAUbS1AqWKtzTprXefYjHubtybjSeS/V2mI2XBfqXlWT4NRXcizKcpfFJvxZ5BWQAFHqNScHnGTXmZFO9nH4+su7UxQQbajXhV+GXHsepdNKnk808mZttd5tQqvwZMaZoKIqQAAAAAAAAAAANdeXG+3Th8K1faZF7W3KainlKRre7sLIAAKgAc/tDtZZYPOVvTi7m7XB0oyyUP3Pl4FR0AIvuNt8aqzzp1KFGOfw06Wf1ebPdpt1jFGadx7C5g3xjOG6/VGvKak0GmwDaOyxuO5Sbo3KWcqFR9bxXajcmcUABFZtnXzapzf7czONJobW2re1pJv4lwZKq8ACAAAAAAAFuvPcozl2IDWXFT2tVy5aLwLYBpkAAGg2zxuWD4ao28kruv1aT/Sucv95siqTcpOTbbbzberOi29uncbR1qeb3LeEaUfTNv1f0OdOnMxmgANI929arbV6de3nKnVpvehOOqZLuzeLRxnC6dyko1l1K0F+WS18uZD52HRrdShidzatvcq0t9L5ov/xv0J1PzWokQAHJQyLKpuVknpLgY5VPdaa5cQN0DzB70VJaNZnoy0AAAAABjX79w/FGSYuIfgf3IQa4AG2QAEERbXRcNpcQUll73PyaTNQdj0kYdKlf0cQhHqVoKnN9k46eq/g446z4zQAFQOm6PIt7SRks8o0Jt/Rfc5k7/o2w6VKhcYjUT97lSpr5U82/N5LyJ18WO1AByaAAUbW1edCHgXixZ/8AXh4F8w0AAAAABYvY71vLu4l88yjvJp6NAaYFXFxbi9U8mUNMgAAxcTsKGJ2NWzuVnTqLVaxfJrvRFGOYHeYLcShcwcqLfu66XVmvs+4mE8VqVKtSlGvCFSk/iU1mvrwNS4WIOBJN7s9spKo5Tq0rV81Tut1ejbS8i5h2z+y1OpGVF0bqefB1bjfXpnl9DXpMcds1s3c41WjOUZUrJPr1mst7uj2vv5EqW1ClbW9OhbwUKVOKjCK5JHuMVGCjFbsVokskkV8FkjNurAAGQALlGG/VhHtf0A2dBbtKCeqRcAMtAAAAAAAANdf0t2p7RaSWT8TFNxVpxqwcJczU1ISpycZao1EeQ2opyk0klm29EVSzeS1I22z2nlf1Z2FhUys4PKpOD/Gf+P8AJZNRtce25pW8p2+EQjWqJ5OvP4F4Ln46HFX+LYhiE3K8vKtXP8u9lFeCXAwwdJGVBks88uJUFRscPxzFMNadpeVFFa05veg/JndbP7Z2uIzhbYhFWty8kpZ+7m+58n4+pGhQlmrqdQcPsPtLOpOGFYjU35Pq29WT4v5H9vQ7g52Y1KGdh9Pg6jXcjFoUnWqKK05vsNtGKjFKKySRmqqACKAAAAAAAAFi4oKtHLSS0ZfAHB7d4nPCcKdCnJxubnOnHJ8Yx/M/4XmRYT3j2AWGPW3sb+k3lxhUi8pwfcyK9odiMVwhyqUabvLVf1aMetH90dfNZo6c9RixzAD4Z58tQdGQAAACsYynJRgnKT0iuLYCLcZKUW1JPNNcmTDspfyxzCqFfWsupW7pLn58H5nHbO9H+IYi41cT3rK2f5WveSXcuXn6Eo4ThdnhFpG1sKKpUlx7XJ9rfNnPqxuRkUaUaUN2K8X2l0A5tAAAAAAAAAAAAAAUyRUAaXF9l8GxbOV5YwdV/wBWnnCfqtfM5i86MLSbbssQrUs9I1YqaX8Eggs6sTIiyfRffr8PEraS+anKP3ZWn0X3ra9ridvFfLSk/uSkC+qeY4Ky6McPpyTvL24r9sYJQR1OE7P4ThMf+PsaVKXOfGU3/c+JtAS20xTJFQCKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/Z",
  },
});

const reviewmodel = mongoose.model("Review", customerReview);
export default reviewmodel;
