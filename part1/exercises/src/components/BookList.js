export default function BookList() {
   let pageTitle = "New Book Releases";
   let book1 = "https://images-us.bookshop.org/ingram/9780063207264.jpg?height=500&v=v2-b3a6a525ae01d013c11320dd00000000";
   let book2 = "https://images-us.bookshop.org/ingram/9780307962614.jpg?height=500&v=v2-ad10201f73e850a107156eaffccc266c";
   let book3 = "https://images-us.bookshop.org/ingram/9781644452417.jpg?height=500&v=v2-01b3d8154178e201461bbcc4d67f34e5";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Family Lore" />
         <img src={book2} alt="Las Madres" />
         <img src={book3} alt="Dark Days" />
      </div>      
   );
}