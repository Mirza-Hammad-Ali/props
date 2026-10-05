// function User({ name, age }) {
//   return (
//     <h1>
//       Hello {name} your age {age}
//     </h1>
//   );
// }
// function Product({ name, price }) {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <p>price: {price}</p>
//     </div>
//   );
// }
// export default Product;

function StudentCard({ name, age, department, semester , cgpa}) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <h1>Department: {department}</h1>
      <h1>Semester: {semester}</h1>
      <h1>CGPA: {cgpa}</h1>
    </div>
  );
}
export default StudentCard;
