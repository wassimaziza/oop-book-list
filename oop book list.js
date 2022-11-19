//Number of books marked as read
//	Number of books marked not read yet
//A reference to the next book to read (book object)
//A reference to the current book being read (book object)
//A reference to the last book read (book object)
//An array of all the Books.

function BookList (){
	var book = {}
	book.numberOfReadBook=0
	book.numberOfNotReadBook=0
	book.currentReadBook={}
	book.lastReadBook={}
	book.allBooks=[]
	book.addBook = addBook
	book.finishCurrentBook=finishCurrentBook
	book.startReading=startReading
	return book 

	

}
function Book(title,genre,author){
 var book={}
 book.title=title
 book.genre=genre
 book.author=author
 book.read=false
 book.readDate=''
 // book.upDateDate = upToDate
return book 
}
var addBook = function (title,genre,author){
 var newBook = Book (title,genre,author)
  this.allBooks.push(newBook)
  this.numberOfNotReadBook++
}


var startReading = function (){
	if (!this.allBooks.length){
      return 'plz add a book first'
	}

	this.currentReadBook = this.allBooks[0]
	this.currentReadBook.read=true
	this.allBooks.splice(1)
	this.currentReadBook.readDate = new Date()
	}


var finishCurrentBook = function (book) {
	this.numberOfReadBook++
	this.numberOfNotReadBook--
	this.lastReadBook = this.currentReadBook
	this.currentReadBook = {}
}

