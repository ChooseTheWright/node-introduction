let books = [];
let id = 0;

module.exports = {
  create: function (req, res) {
    let {title, author} = req.body;
    let newBook = {
      id: id,
      title: title,
      author: author
    };

    books.push(newBook);
    id++;

    res.status(200).json(books);
  },
  read: function (req, res) {
    res.status(200).json(books);
  },
  update: function (req, res) {
    let bookId = Number(req.params.id);
    let indexOfBook = books.findIndex(function (val) {
      return val.id === bookId;
    });

    books[indexOfBook] = {
      id: bookId,
      title: req.body.title || books[bookId].title,
      author: req.body.author || books[bookID].author
    };

    res.status(200).json(books);
  },
  delete: function (req, res) {
    let bookId = Number(req.params.id);
    let indexOfBook = books.findIndex(function (val) {
      return val.id === bookId;
    });

    books.splice(indexOfBook, 1);

    res.status(200).json(books);
  }
}
