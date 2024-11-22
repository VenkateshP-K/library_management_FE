import { instance, protectedInstance } from '../services/instance'

const bookServices = {
    getAllBooks: async () => {
        const response = await protectedInstance.get("/books/getAllBooks");
        return response;
    },

    createBook : async (bookData) => {
        const response = await protectedInstance.post("/books/createBook", bookData); 
        return response;
    },

    deleteBook : async (bookId) => {
        const response = await protectedInstance.delete(`/books/deleteBook/${bookId}`); 
        return response;
    },

    getRentedBooks : async () => {
        const response = await protectedInstance.get("/books/getRentedBooks"); 
        return response;
    },

    booksRentedByAllUsers : async () => {
        const response = await protectedInstance.get("/books/allRentedBooks"); 
        return response;
    },

    rentBook : async (bookId) => {
        const response = await protectedInstance.put(`/books/rentBook/${bookId}`); 
        return response;
    },

    returnBook : async (bookId) => {
        const response = await protectedInstance.put(`/books/returnBook/${bookId}`); 
        return response;
    }
}

export default bookServices